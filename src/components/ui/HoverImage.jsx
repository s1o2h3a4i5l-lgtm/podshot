'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

const vertex = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position, 0.0, 1.0); }
`;

// Same displacement transition Agina uses, with one image on both sides so it ripples on hover.
const fragment = `
precision highp float;
varying vec2 vUv;
uniform float dispFactor;
uniform float intensity;
uniform vec2 scale;
uniform sampler2D disp;
uniform sampler2D tex;
mat2 rot(float a) { float s = sin(a), c = cos(a); return mat2(c, -s, s, c); }
void main() {
  vec2 uv = (vUv - 0.5) * scale + 0.5;
  vec4 d = texture2D(disp, vUv);
  vec2 v = vec2(d.r, d.g);
  vec2 p1 = uv + rot(0.785) * v * intensity * dispFactor;
  vec2 p2 = uv + rot(-2.356) * v * intensity * (1.0 - dispFactor);
  gl_FragColor = mix(texture2D(tex, p1), texture2D(tex, p2), dispFactor);
}
`;

export default function HoverImage({ src, href, alt = '', displacement = '/images/webgl/23.png', intensity = 0.6, speedIn = 1, speedOut = 1, width, height }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    let cancelled = false;
    let cleanup = () => {};
    import('ogl').then(({ Renderer, Program, Mesh, Triangle, Texture }) => {
      if (cancelled) return;
      const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), alpha: true });
      const gl = renderer.gl;
      gl.canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none';
      const tex = new Texture(gl);
      const disp = new Texture(gl, { wrapS: gl.REPEAT, wrapT: gl.REPEAT });
      const program = new Program(gl, {
        vertex, fragment,
        uniforms: { dispFactor: { value: 0 }, intensity: { value: intensity }, scale: { value: [1, 1] }, tex: { value: tex }, disp: { value: disp } },
      });
      const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });
      let imgRatio = 1;
      const load = (url, t, onLoad) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => { t.image = img; onLoad?.(img); render(); };
        img.src = url;
      };
      const resize = () => {
        const r = root.getBoundingClientRect();
        if (!r.width || !r.height) return;
        renderer.setSize(r.width, r.height);
        const boxRatio = r.width / r.height;
        program.uniforms.scale.value = boxRatio > imgRatio ? [1, imgRatio / boxRatio] : [boxRatio / imgRatio, 1];
        render();
      };
      const render = () => renderer.render({ scene: mesh });
      load(src, tex, (img) => { imgRatio = img.naturalWidth / img.naturalHeight; resize(); root.appendChild(gl.canvas); });
      load(displacement, disp);
      const ro = new ResizeObserver(resize);
      ro.observe(root);
      const item = root.closest('.tj--hover-item') || root;
      const state = program.uniforms.dispFactor;
      const enter = () => gsap.to(state, { value: 1, duration: speedIn, ease: 'expo.out', onUpdate: render });
      const leave = () => gsap.to(state, { value: 0, duration: speedOut, ease: 'expo.out', onUpdate: render });
      item.addEventListener('mouseenter', enter);
      item.addEventListener('mouseleave', leave);
      cleanup = () => {
        ro.disconnect();
        item.removeEventListener('mouseenter', enter);
        item.removeEventListener('mouseleave', leave);
        gsap.killTweensOf(state);
        gl.canvas.remove();
        gl.getExtension('WEBGL_lose_context')?.loseContext();
      };
    });
    return () => { cancelled = true; cleanup(); };
  }, [src, displacement, intensity, speedIn, speedOut]);

  return (
    <Link ref={ref} className="tj--hover-img" href={href} data-displacement={displacement} data-intensity={intensity} data-speedin={speedIn} data-speedout={speedOut} style={{ position: 'relative' }}>
      <img src={src} alt={alt} width={width} height={height} loading="lazy" style={{ height: 'auto' }} />
    </Link>
  );
}
