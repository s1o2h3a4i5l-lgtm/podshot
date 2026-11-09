// Agina's animation engine, ported from its compiled bundle. Every effect is driven by CSS class hooks in the markup.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';
import { Renderer, Vec2, Flowmap, Triangle, Texture, Program, Mesh } from 'ogl';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const a = { gsap };
const n = { ScrollTrigger };
const h = { ScrollSmoother };
const o = { SplitText };
const L = Renderer, K = Vec2, J = Flowmap, Q = Triangle, G = Texture, A = Program, H = Mesh;

    let ts = `
        attribute vec2 uv;
        attribute vec2 position;
        varying vec2 vUv;

        void main() {
            vUv = uv;
            gl_Position = vec4(position, 0.0, .45);
        }
    `,
      ti = `
        precision highp float;
        uniform sampler2D tImage;
        uniform sampler2D tFlow;
        varying vec2 vUv;

        void main() {
            vec3 flow = texture2D(tFlow, vUv).rgb;
            vec2 uv = vUv;
            uv += (flow.rg * flow.b * 50.0);
            vec3 tex = texture2D(tImage, uv).rgb;
            gl_FragColor.rgb = tex;
            gl_FragColor.a = 1.0;
        }
    `;
    function tr(t) {
      return !t.complete;
    }
    function ta(t) {
      return t();
    }
    function tn() {
      let t,
        e,
        s,
        i = [],
        r = !1,
        l = () => {
          t = a.gsap.context(() => {
            let t,
              e,
              s,
              r,
              l,
              c,
              u,
              d,
              p,
              g,
              m,
              f,
              v,
              x,
              b,
              w,
              y,
              E,
              _,
              j,
              T,
              S;
            ((t = document.querySelector("#has_smooth")),
              t?.classList.contains("has-smooth") &&
                document.querySelector("#smooth-wrapper") &&
                document.querySelector("#smooth-content") &&
                (a.gsap.config({ nullTargetWarn: !1 }),
                h.ScrollSmoother.get()?.kill(),
                h.ScrollSmoother.create({
                  smooth: 1.2,
                  effects: !0,
                  smoothTouch: 0.1,
                  normalizeScroll: { allowNestedScroll: !0 },
                  ignoreMobileResize: !0,
                })),
              i.push(
                ((e = []),
                (s = a.gsap.utils.toArray(".tj-image-distortion")).length
                  ? (s.forEach((t) => {
                      let s = t.getAttribute("data-bg-image");
                      if (!s || t.querySelector("canvas")) return;
                      let i = new L(),
                        r = i.gl;
                      t.appendChild(r.canvas);
                      let a = new K(0.5),
                        n = new K(0.5),
                        h = new K(),
                        o = 1;
                      function l() {
                        let e = t.getBoundingClientRect();
                        ((o = e.width / e.height),
                          (r.canvas.width = e.width),
                          (r.canvas.height = e.height),
                          i.setSize(e.width, e.height));
                      }
                      (window.addEventListener("resize", l, !1), l());
                      let c = new J(r, {
                          falloff: 0.3,
                          dissipation: 0.95,
                          size: 1e3,
                        }),
                        u = new Q(r),
                        d = new G(r),
                        p = new Image();
                      ((p.crossOrigin = "anonymous"),
                        (p.onload = () => {
                          ((d.image = p),
                            (d.minFilter = r.LINEAR),
                            (d.magFilter = r.LINEAR),
                            (d.wrapS = r.CLAMP_TO_EDGE),
                            (d.wrapT = r.CLAMP_TO_EDGE));
                        }),
                        (p.src = s));
                      let g = new A(r, {
                          vertex: ts,
                          fragment: ti,
                          uniforms: { tImage: { value: d }, tFlow: c.uniform },
                        }),
                        m = new H(r, { geometry: u, program: g });
                      function f(e) {
                        let s = t.getBoundingClientRect(),
                          i = (e.clientX - s.left) / s.width,
                          r = 1 - (e.clientY - s.top) / s.height;
                        a.set(i, r);
                      }
                      let v = (t) => f(t),
                        x = (t) => {
                          t.touches.length > 0 && f(t.touches[0]);
                        };
                      (t.addEventListener("mousemove", v, !1),
                        t.addEventListener("touchmove", x, !1));
                      let b = new K(),
                        w = 0;
                      ((w = requestAnimationFrame(function t() {
                        (b.copy(a).sub(n).multiply(0.04),
                          h.add(b).multiply(0.8),
                          n.add(h),
                          c.mouse.copy(n),
                          c.velocity.copy(h),
                          (c.aspect = o),
                          c.update(),
                          i.render({ scene: m }),
                          (w = requestAnimationFrame(t)));
                      })),
                        e.push(() => {
                          (cancelAnimationFrame(w),
                            window.removeEventListener("resize", l, !1),
                            t.removeEventListener("mousemove", v, !1),
                            t.removeEventListener("touchmove", x, !1),
                            r.canvas.remove());
                        }));
                    }),
                    () => e.forEach((t) => t()))
                  : () => {}),
              ),
              a.gsap.utils.toArray(".fade-in").forEach((t) => {
                (a.gsap.set(t, { opacity: 0, visibility: "hidden" }),
                  a.gsap.to(t, {
                    opacity: 1,
                    duration: 2,
                    ease: "power2.out",
                    visibility: "visible",
                    scrollTrigger: { trigger: t, start: "top 85%", once: !0 },
                  }));
              }),
              a.gsap.utils.toArray(".tj-fade").forEach((t) => {
                let e = t.getAttribute("data-on-scroll") ?? "1",
                  s = Number(t.getAttribute("data-offset") ?? 50),
                  i = Number(t.getAttribute("data-delay") ?? 0.15),
                  r = Number(t.getAttribute("data-duration") ?? 1.15),
                  n = t.getAttribute("data-direction") ?? "bottom",
                  h = {
                    autoAlpha: 0,
                    ease: t.getAttribute("data-ease") ?? "power2.out",
                    duration: r,
                    delay: i,
                    x: "left" === n ? -s : "right" === n ? s : 0,
                    y: "top" === n ? -s : "bottom" === n ? s : 0,
                  };
                ("1" === e &&
                  (h.scrollTrigger = { trigger: t, start: "top bottom" }),
                  a.gsap.set(t, { autoAlpha: 1 }),
                  a.gsap.from(t, h));
              }),
              a.gsap.utils.toArray(".parallax-image").forEach((t) => {
                let e = Number(t.dataset.move ?? 0.5);
                a.gsap.to(t, {
                  y: () => -100 * e,
                  ease: "none",
                  scrollTrigger: {
                    trigger: t,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                  },
                });
              }),
              a.gsap.utils.toArray(".counter").forEach((t) => {
                let e = parseFloat(t.dataset.start ?? "0"),
                  s = String(t.dataset.target),
                  i = parseFloat(s.replace(/,/g, "")),
                  r = parseFloat(t.dataset.duration ?? "2"),
                  h = parseFloat(t.dataset.delay ?? "0.4"),
                  o = t.dataset.postfix ?? "";
                ((t.innerText = String(e)),
                  n.ScrollTrigger.create({
                    trigger: t,
                    start: "top 85%",
                    once: !0,
                    onEnter: () => {
                      a.gsap.fromTo(
                        t,
                        { innerText: e },
                        {
                          innerText: i,
                          duration: r,
                          delay: h,
                          ease: "power4.out",
                          snap: { innerText: 0.1 },
                          onUpdate: () => {
                            let e,
                              r = parseFloat(t.innerText);
                            "NaN" !==
                              (e =
                                s.includes(",") || i >= 1e3
                                  ? Math.round(r)
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                  : /^0\d/.test(s)
                                    ? Math.round(r).toString().padStart(2, "0")
                                    : i % 1 != 0
                                      ? r.toFixed(1)
                                      : Math.round(r).toString()) &&
                              (t.innerText = e + o);
                          },
                        },
                      );
                    },
                  }));
              }),
              i.push(
                ((r = []),
                a.gsap.utils.toArray(".tj-reveal-line").forEach((t) => {
                  let e = new o.SplitText(t, {
                    type: "lines",
                    linesClass: "reveal-line",
                  });
                  (r.push(e),
                    e.lines.forEach((t) => {
                      let e = document.createElement("div");
                      (e.classList.add("tj-reveal-line__wrap"),
                        (e.style.overflow = "hidden"),
                        t.parentNode?.insertBefore(e, t),
                        e.appendChild(t));
                    }),
                    a.gsap.set(e.lines, { yPercent: 100, autoAlpha: 0 }),
                    a.gsap
                      .timeline({
                        scrollTrigger: {
                          trigger: t,
                          start: "top 85%",
                          toggleActions: "play none none none",
                        },
                      })
                      .to(e.lines, {
                        yPercent: 0,
                        autoAlpha: 1,
                        duration: 1.4,
                        ease: "power3.out",
                        stagger: 0,
                      }));
                }),
                () => r.forEach((t) => t.revert())),
              ),
              i.push(
                ((l = []),
                a.gsap.utils.toArray(".tj-random-char-blink").forEach((t) => {
                  let e,
                    s = new o.SplitText(t, {
                      type: "chars",
                      charsClass: "char",
                    }),
                    i = s.chars,
                    r = () => {
                      (e?.kill(),
                        (e = a.gsap.timeline()).fromTo(
                          i,
                          { opacity: 0.2, willChange: "opacity" },
                          {
                            opacity: 1,
                            duration: 0.25,
                            stagger: { each: 0.025, from: "random" },
                          },
                        ));
                    },
                    n = () => {
                      (e?.kill(),
                        a.gsap.set(i, { opacity: 1, willChange: "opacity" }));
                    };
                  (t.addEventListener("mouseenter", r),
                    t.addEventListener("mouseleave", n),
                    l.push(() => {
                      (t.removeEventListener("mouseenter", r),
                        t.removeEventListener("mouseleave", n),
                        e?.kill(),
                        s.revert());
                    }));
                }),
                () => l.forEach((t) => t())),
              ),
              i.push(
                ((c = []),
                a.gsap.utils.toArray(".reveal-hover-text").forEach((t) => {
                  let e = new o.SplitText(t, { type: "lines" });
                  (c.push(e),
                    e.lines.forEach((t) => {
                      let e = t.textContent ?? "";
                      (t.classList.add("reveal-line"),
                        (t.innerHTML = `<span class="front">${e}</span><span class="back">${e}</span>`));
                    }));
                }),
                () =>
                  c.forEach((t) => {
                    try {
                      t.revert();
                    } catch {}
                  })),
              ),
              i.push(
                (() => {
                  let t,
                    e = a.gsap.utils.toArray(
                      ".h1-hero-section.h1HeroAnimation",
                    )[0],
                    s = a.gsap.utils.toArray(
                      ".h1-video-section.h1HeroAnimation",
                    )[0];
                  if (!e) return () => {};
                  (e.classList.add("activeAnimation"),
                    s?.classList.add("activeAnimation"));
                  let i = e.querySelector(".hero_title"),
                    r = e.querySelector(".hero_title i"),
                    n = e.querySelector(".h1_hero_shape_animation"),
                    h = e.querySelector(".bottom_left_content"),
                    l = s?.querySelector(".h1_hero_video"),
                    c = e.querySelector(".tj_scroll_down"),
                    u = a.gsap.timeline({ defaults: { ease: "power2.out" } });
                  if (i) {
                    if (
                      (r && r.remove(),
                      (t = new o.SplitText(i, {
                        type: "lines",
                        linesClass: "hero-line",
                      })).lines.forEach((t) => {
                        let e = document.createElement("div");
                        ((e.style.overflow = "hidden"),
                          t.parentNode?.insertBefore(e, t),
                          e.appendChild(t));
                      }),
                      r && t.lines[0])
                    ) {
                      let e = t.lines[0].firstChild;
                      (t.lines[0].insertBefore(r, e),
                        t.lines[0].insertBefore(
                          document.createTextNode(" "),
                          e,
                        ));
                    }
                    (a.gsap.set(t.lines, { yPercent: 100, autoAlpha: 0 }),
                      u.to(
                        t.lines,
                        {
                          yPercent: 0,
                          autoAlpha: 1,
                          duration: 1.4,
                          ease: "power3.out",
                          stagger: 0,
                        },
                        0,
                      ));
                  }
                  return (
                    r &&
                      u.from(
                        r,
                        { x: -20, autoAlpha: 0, duration: 0.5 },
                        "-=0.4",
                      ),
                    n &&
                      u.from(n, { scale: 0, autoAlpha: 0, duration: 0.6 }, "<"),
                    h &&
                      u.from(h, { x: -100, autoAlpha: 0, duration: 0.6 }, "<"),
                    l &&
                      u.from(l, { x: 100, autoAlpha: 0, duration: 0.6 }, "<"),
                    c && u.from(c, { y: -50, autoAlpha: 0, duration: 0.6 }),
                    () => {
                      (u.kill(), t?.revert());
                    }
                  );
                })(),
              ),
              i.push(
                (() => {
                  let t = a.gsap.utils.toArray(".h1-video-section")[0];
                  if (!t) return () => {};
                  let e = a.gsap.matchMedia();
                  return (
                    e.add("(min-width: 992px)", () => {
                      let e,
                        s,
                        w,
                        i = t.querySelector(".h1_hero_video_wrap"),
                        r = t.querySelector(".h1_hero_video");
                      if (!i || !r) return;
                      let n = (t) => {
                          let e = 0,
                            s = t;
                          for (; s && "smooth-content" !== s.id;)
                            ((e += s.offsetTop), (s = s.offsetParent));
                          return e;
                        },
                        h = () => {
                          (e?.scrollTrigger?.kill(),
                            e?.kill(),
                            s?.scrollTrigger?.kill(),
                            s?.kill(),
                            a.gsap.set(r, {
                              willChange: "transform, opacity, width, height",
                            }),
                            // PodShot: open to the largest whole 16:9 frame that fits the screen with
                            // a slim border all round, centred, instead of filling the width and cropping.
                            (() => {
                              let g = Math.max(20, Math.min(32, window.innerHeight * 0.03)),
                                C = i.clientWidth,
                                W = Math.min(C, (window.innerHeight - 2 * g) * (16 / 9)),
                                H = (W * 9) / 16,
                                padB = parseFloat(getComputedStyle(i).paddingBottom) || 0;
                              w = { width: W, x: -(C - W) / 2, y: padB - (window.innerHeight - H) / 2 };
                            })(),
                            (e = a.gsap.fromTo(r, { x: 0, y: 0 }, {
                              ...w,
                              ease: "none",
                              scrollTrigger: {
                                trigger: i,
                                start: () =>
                                  n(i) + i.offsetHeight - window.innerHeight,
                                end: () => n(i) + i.offsetHeight,
                                pin: !0,
                                pinSpacing: !1,
                                scrub: 1.5,
                              },
                            })),
                            (s = a.gsap.to(t, {
                              ease: "none",
                              scrollTrigger: {
                                trigger: t,
                                start: () =>
                                  n(t) + t.offsetHeight - window.innerHeight,
                                end: () =>
                                  n(t) +
                                  2 * t.offsetHeight -
                                  window.innerHeight,
                                scrub: 2,
                                pin: !0,
                                pinSpacing: !1,
                              },
                            })));
                        };
                      h();
                      let o = () => h();
                      return (
                        window.addEventListener("resize", o),
                        () => {
                          (window.removeEventListener("resize", o),
                            e?.scrollTrigger?.kill(),
                            e?.kill(),
                            s?.scrollTrigger?.kill(),
                            s?.kill());
                        }
                      );
                    }),
                    () => e.revert()
                  );
                })(),
              ),
              i.push(
                (() => {
                  let t = a.gsap.utils.toArray(".h1_process_wrap")[0];
                  if (!t) return () => {};
                  let e = a.gsap.matchMedia();
                  return (
                    e.add(
                      {
                        isDesktop: "(min-width: 992px)",
                        lg: "(min-width: 992px) and (max-width: 1199px)",
                        // PodShot: phones and tablets stack the cards too, with a smaller offset.
                        isMobile: "(max-width: 991px)",
                      },
                      (e) => {
                        let { isDesktop: s, lg: i, isMobile: mob } = e.conditions;
                        if (!s && !mob) return;
                        let r = mob ? 44 : i ? 75 : 100,
                          h = a.gsap.utils.toArray(
                            ".h1_process_items .tj_process_item_2",
                          ),
                          o = a.gsap.utils.toArray(
                            ".h1_process_images .tj_process_img",
                          ),
                          l = a.gsap.utils.toArray(".h1_process_no > span"),
                          c = h.length;
                        (h.forEach((t, e) => {
                          a.gsap.set(t, {
                            position: "absolute",
                            width: "100%",
                            left: 0,
                            top: 0,
                            y: 0 === e ? 0 : "200%",
                            opacity: +(0 === e),
                          });
                        }),
                          o.forEach((t, e) => {
                            a.gsap.set(t, {
                              position: "absolute",
                              width: "100%",
                              left: 0,
                              top: 0,
                              x: 0 === e ? 0 : "100%",
                            });
                          }),
                          l.forEach((t, e) => {
                            a.gsap.set(t, {
                              position: "absolute",
                              width: "auto",
                              left: 0,
                              top: 0,
                              y: 0 === e ? 0 : "100%",
                            });
                          }),
                          mob &&
                            (() => {
                              // Absolute cards collapse their wrapper on phones; size it to the tallest card plus the offsets.
                              let w = t.querySelector(".h1_process_items");
                              w &&
                                (w.style.height = `${Math.max(...h.map((x) => x.offsetHeight)) + r * (c - 1)}px`);
                              // Phones: card 01 flies in while the section is still scrolling into
                              // place, same as it does on desktop, instead of waiting for the pin
                              // and a further scroll once the section is already locked at the top.
                              let wrap = t.closest(".h1_process_wrapper");
                              if (wrap) {
                                let approach = {
                                  scrollTrigger: { trigger: wrap, start: "top 90%", end: "top top", scrub: 0.3 },
                                  ease: "power1.out",
                                };
                                h[0] && a.gsap.fromTo(h[0], { y: "200%", opacity: 0 }, { y: "0%", opacity: 1, ...approach });
                                o[0] && a.gsap.fromTo(o[0], { x: "100%" }, { x: "0%", ...approach });
                                l[0] && a.gsap.fromTo(l[0], { y: "100%" }, { y: "0%", ...approach });
                              }
                            })(),
                          n.ScrollTrigger.create({
                            // Phones: pin the heading together with the cards so the screen isn't half empty.
                            trigger: (mob && t.closest(".h1_process_wrapper")) || t,
                            // Phones: centre the pinned block when it is shorter than the screen.
                            start: mob
                              ? () => `top top+=${Math.max(20, (window.innerHeight - t.closest(".h1_process_wrapper").offsetHeight) / 2)}`
                              : "top top",
                            // Phones: give each step most of a screen of scrolling.
                            end: mob ? () => `+=${window.innerHeight * 0.7 * (c - 1)}` : "bottom top",
                            invalidateOnRefresh: !0,
                            pin: (mob && t.closest(".h1_process_wrapper")) || !0,
                            pinSpacing: !0,
                            anticipatePin: 1,
                            onUpdate: (t) => {
                              let e = Math.round(t.progress * (c - 1));
                              (h.forEach((t, s) => {
                                t.style.top = `${r * s}px`;
                                let i = t.querySelectorAll(
                                  ".process_desc, .process_bottom",
                                );
                                s < e
                                  ? (a.gsap.to(t, {
                                      y: 0,
                                      opacity: 0.25 * (s + 1),
                                      duration: 0.4,
                                      ease: "power1.out",
                                    }),
                                    a.gsap.to(i, { opacity: 0, duration: 0.6 }))
                                  : (s === e
                                      ? a.gsap.to(t, {
                                          y: 0,
                                          opacity: 1,
                                          duration: 0.4,
                                          ease: "power1.out",
                                        })
                                      : a.gsap.to(t, {
                                          y: "200%",
                                          opacity: 0,
                                          duration: 0.4,
                                          ease: "power1.out",
                                        }),
                                    a.gsap.to(i, {
                                      opacity: 1,
                                      duration: 0.5,
                                    }));
                              }),
                                o.forEach((t, s) => {
                                  a.gsap.to(t, {
                                    x: s <= e ? 0 : "100%",
                                    duration: 0.4,
                                    ease: "power1.out",
                                  });
                                }),
                                l.forEach((t, s) => {
                                  a.gsap.to(t, {
                                    y: s < e ? "-100%" : s === e ? 0 : "100%",
                                    duration: 0.4,
                                    ease: "power1.out",
                                  });
                                }));
                            },
                          }));
                      },
                    ),
                    () => e.revert()
                  );
                })(),
              ),
              i.push(
                (() => {
                  let t = a.gsap.utils.toArray(".h1_projects_wrap")[0];
                  if (!t) return () => {};
                  let e = a.gsap.matchMedia();
                  return (
                    // PodShot: runs at every width; globals.css keeps the strip in one row below 992px.
                    e.add("all", () => {
                      let e = t.querySelector(".h1_projects_items"),
                        s = t.querySelector(".projects-progress span"),
                        // PodShot: phones pin the heading with the strip, centred on the screen.
                        mob = window.innerWidth < 992,
                        pt = mob ? t.parentElement : t,
                        st = mob
                          ? () => `top top+=${Math.max(20, (window.innerHeight - pt.offsetHeight) / 2)}`
                          : "top top";
                      e &&
                        s &&
                        (a.gsap.to(e, {
                          x: () => -(e.scrollWidth - t.clientWidth),
                          ease: "none",
                          scrollTrigger: {
                            trigger: pt,
                            start: st,
                            end: () => "+=" + (e.scrollWidth - t.clientWidth),
                            pin: pt,
                            // The phone pin target sits in a flex row, where GSAP turns pin spacing off by default.
                            pinSpacing: !0,
                            scrub: 1,
                            invalidateOnRefresh: !0,
                          },
                        }),
                        a.gsap.to(s, {
                          scaleX: 1,
                          ease: "none",
                          scrollTrigger: {
                            trigger: pt,
                            start: st,
                            end: () => "+=" + (e.scrollWidth - t.clientWidth),
                            scrub: 0.3,
                            invalidateOnRefresh: !0,
                          },
                        }));
                    }),
                    () => e.revert()
                  );
                })(),
              ),
              i.push(
                ((u = []),
                a.gsap.utils.toArray(".tj-chars-up").forEach((t) => {
                  let e = new o.SplitText(t, {
                    type: "chars,lines",
                    charsClass: "char",
                    linesClass: "line",
                  });
                  (u.push(e),
                    a.gsap
                      .timeline({
                        scrollTrigger: {
                          trigger: t,
                          start: "top 85%",
                          toggleActions: "play none none none",
                        },
                      })
                      .from(e.chars, {
                        yPercent: 100,
                        duration: 0.3,
                        ease: "power1.out",
                        stagger: { amount: 0.6 },
                      }));
                }),
                () => u.forEach((t) => t.revert())),
              ),
              i.push(
                ((d = []),
                a.gsap.utils.toArray(".tj-char-reveal-left").forEach((t) => {
                  let e = new o.SplitText(t, { type: "chars" });
                  (d.push(e),
                    a.gsap.from(e.chars, {
                      scrollTrigger: { trigger: t, start: "top 90%", once: !0 },
                      x: -100,
                      opacity: 0,
                      delay: 0.7,
                      duration: 0.8,
                      ease: "power2.out",
                      stagger: { amount: 0.5, from: "start" },
                    }));
                }),
                () => d.forEach((t) => t.revert())),
              ),
              (p = a.gsap.utils.toArray(".tj-reveal-right")).length &&
                a.gsap.from(p, {
                  x: "110%",
                  duration: 1,
                  stagger: 0.2,
                  ease: "power2.out",
                  scrollTrigger: {
                    scrub: 2,
                    trigger: ".tj-reveal-right-wrap",
                    start: "top 100%",
                    end: "bottom 70%",
                    toggleActions: "play none none reverse",
                  },
                }),
              i.push(
                ((g = a.gsap.matchMedia()).add("(min-width: 992px)", () => {
                  a.gsap.utils
                    .toArray(".h2-marquee-slider:not(:first-child)")
                    .forEach((t) => {
                      a.gsap.fromTo(
                        t,
                        { marginTop: -128 },
                        {
                          marginTop: 0,
                          ease: "none",
                          scrollTrigger: {
                            trigger: t,
                            start: "top 75%",
                            end: "top 45%",
                            scrub: 1,
                          },
                        },
                      );
                    });
                }),
                a.gsap.utils.toArray(".h2_testimonial_item").forEach((t) => {
                  let e = 0.8 * t.offsetWidth;
                  a.gsap.to(t, {
                    x: -e,
                    ease: "none",
                    scrollTrigger: {
                      trigger: t,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 0.2,
                      invalidateOnRefresh: !0,
                    },
                  });
                }),
                () => g.revert()),
              ),
              i.push(
                ((m = a.gsap.matchMedia()).add("(min-width: 992px)", () => {
                  let t = a.gsap.utils.toArray(".tj-scroll-slider")[0];
                  if (!t) return;
                  let e = a.gsap.utils.toArray(".tj-scroll-slider-item"),
                    s = 0.61 * window.innerWidth;
                  (a.gsap.set(t, { x: s }),
                    a.gsap.to(e, {
                      xPercent: -100 * (e.length - 1),
                      ease: "none",
                      force3D: !0,
                      scrollTrigger: {
                        trigger: t,
                        start: "top top",
                        end: () => "+=" + (t.scrollWidth - t.clientWidth) * 4,
                        scrub: 1,
                        pin: !0,
                        pinSpacing: !0,
                      },
                    }));
                }),
                () => m.revert()),
              ),
              i.push(
                (() => {
                  let t,
                    e = a.gsap.utils.toArray(".h2_projects_wrap")[0];
                  if (e) {
                    let s = Array.from(e.querySelectorAll(".h2_projects_item"));
                    s.length &&
                      ((t = () => {
                        e.style.minHeight = `${s[0].offsetHeight * s.length}px`;
                      })(),
                      window.addEventListener("resize", t),
                      s.forEach((t, e) => {
                        e > 0 &&
                          (t.classList.remove("active"),
                          n.ScrollTrigger.create({
                            trigger: t,
                            start: "top 50%",
                            onEnter: () => t.classList.add("active"),
                            onLeaveBack: () => t.classList.remove("active"),
                          }));
                      }));
                  }
                  let s = a.gsap.utils.toArray(".h2-project-section")[0];
                  return (
                    s &&
                      n.ScrollTrigger.create({
                        trigger: s,
                        start: "top 70%",
                        once: !0,
                        onEnter: () => {
                          a.gsap.utils
                            .toArray(".blocks-shape svg path")
                            .forEach((t) => {
                              t.style.animationPlayState = "running";
                            });
                        },
                      }),
                    () => {
                      t && window.removeEventListener("resize", t);
                    }
                  );
                })(),
              ),
              i.push(
                ((f = a.gsap.matchMedia()).add("(min-width: 1200px)", () => {
                  let t = a.gsap.utils.toArray(".tj-sticky-wrapper")[0],
                    e = a.gsap.utils.toArray(".tj-sticky-left")[0],
                    s = a.gsap.utils.toArray(".tj-sticky-right")[0];
                  t &&
                    e &&
                    s &&
                    a.gsap.to(s, {
                      y: () => -(s.scrollHeight - e.offsetHeight),
                      ease: "none",
                      scrollTrigger: {
                        trigger: t,
                        start: "top-=70 top",
                        end: () => `+=${s.scrollHeight - e.offsetHeight}`,
                        scrub: !0,
                        pin: !0,
                        anticipatePin: 1,
                        invalidateOnRefresh: !0,
                      },
                    });
                }),
                () => f.revert()),
              ),
              i.push(
                ((v = []),
                a.gsap.utils.toArray(".split-flip-text-wrap").forEach((t) => {
                  let e = t.querySelectorAll(".char-wrap");
                  if (!e.length) return;
                  let s = [];
                  e.forEach((t) => {
                    let e = t.children[0],
                      s = t.children[1];
                    (a.gsap.set(e, { rotationX: 0 }),
                      a.gsap.set(s, { rotationX: 90 }));
                  });
                  let i = () => {
                      (s.forEach((t) => t.kill()),
                        (s = []),
                        e.forEach((t, e) => {
                          let i = t.children[0],
                            r = t.children[1];
                          (s.push(
                            a.gsap.to(i, {
                              rotationX: 90,
                              duration: 0.1,
                              delay: 0.05 * e,
                              ease: "power2.out",
                            }),
                          ),
                            s.push(
                              a.gsap.to(r, {
                                rotationX: 0,
                                duration: 0.1,
                                delay: 0.05 * e + 0.15,
                                ease: "power2.out",
                              }),
                            ));
                        }));
                    },
                    r = () => {
                      (s.forEach((t) => t.kill()),
                        (s = []),
                        e.forEach((t) => {
                          let e = t.children[0],
                            i = t.children[1];
                          (s.push(
                            a.gsap.to(e, {
                              rotationX: 0,
                              duration: 0.3,
                              ease: "none",
                            }),
                          ),
                            s.push(
                              a.gsap.to(i, {
                                rotationX: 90,
                                duration: 0.1,
                                ease: "none",
                              }),
                            ));
                        }));
                    };
                  (t.addEventListener("mouseenter", i),
                    t.addEventListener("mouseleave", r),
                    v.push(() => {
                      (t.removeEventListener("mouseenter", i),
                        t.removeEventListener("mouseleave", r),
                        s.forEach((t) => t.kill()));
                    }));
                }),
                () => v.forEach((t) => t())),
              ),
              i.push(
                ((x = a.gsap.matchMedia()).add("(min-width: 992px)", () => {
                  let t = a.gsap.utils.toArray(".section-parallax")[0],
                    e = a.gsap.utils.toArray(".section-parallax-target")[0];
                  t &&
                    e &&
                    (a.gsap.set(t, { yPercent: -30 }),
                    a.gsap.to(t, {
                      yPercent: 0,
                      scrollTrigger: {
                        trigger: ".section-parallax-target",
                        scrub: 1,
                        start: "top-=20% top",
                        end: "bottom top",
                        invalidateOnRefresh: !0,
                      },
                    }));
                }),
                () => x.revert()),
              ),
              i.push(
                ((b = a.gsap.matchMedia()).add("(min-width: 1200px)", () => {
                  a.gsap.utils.toArray(".h2-about-content-wrap")[0] &&
                    (a.gsap.set(".video-btn", {
                      opacity: 0,
                      scale: 0.7,
                      pointerEvents: "none",
                    }),
                    a.gsap.to(".image-wrapper", {
                      width: "780px",
                      ease: "none",
                      scrollTrigger: {
                        trigger: ".h2-about-content-wrap",
                        start: "top top",
                        end: "+=30%",
                        scrub: !0,
                        pin: !0,
                        onUpdate: (t) => {
                          let e = t.progress >= 0.5;
                          a.gsap.set(".video-btn", {
                            opacity: +!!e,
                            scale: e ? 1 : 0.7,
                            pointerEvents: e ? "auto" : "none",
                          });
                        },
                      },
                    }));
                }),
                () => b.revert()),
              ),
              i.push(
                ((w = a.gsap.utils.toArray(".tj-split-text")),
                (y = []),
                w.length &&
                  w.forEach((t) => {
                    let e = new o.SplitText(t, {
                      type: "chars, words",
                      charsClass: "char",
                    });
                    (y.push(e),
                      a.gsap.from(e.chars, {
                        duration: 1,
                        delay: 0.3,
                        x: 30,
                        autoAlpha: 0,
                        stagger: 0.02,
                        ease: "power2.out",
                        scrollTrigger: { trigger: t, start: "top 85%" },
                      }));
                  }),
                () => y.forEach((t) => t.revert())),
              ),
              i.push(
                (() => {
                  let t = a.gsap.matchMedia();
                  if (!a.gsap.utils.toArray(".window-shape-wrapper")[0])
                    return () => t.revert();
                  let e = !1,
                    s = a.gsap.utils.toArray(
                      ".window-shape-screen-2 .purpose-item-wrapper .tj-progress-item",
                    ),
                    i = s.length;
                  return (
                    t.add(
                      {
                        isDesktop: "(min-width: 992px)",
                        isMobile: "(max-width: 991px)",
                        isLandscape: "(orientation: landscape)",
                        isPortrait: "(orientation: portrait)",
                      },
                      (t) => {
                        let { isDesktop: r, isMobile: n } = t.conditions;
                        (a.gsap.set(
                          [
                            ".window-shape-screen-2 .purpose-mockup-wrapper",
                            ".window-shape-screen-2 .purpose-mockup",
                          ],
                          { clearProps: "all" },
                        ),
                          r &&
                            (a.gsap.set(
                              ".window-shape-screen-2 .purpose-mockup-wrapper",
                              { xPercent: -50, yPercent: -50 },
                            ),
                            a.gsap
                              .timeline({
                                scrollTrigger: {
                                  trigger: ".window-shape-wrapper",
                                  start: "top top",
                                  end: "bottom+=100% top",
                                  scrub: 1.1,
                                  pin: !0,
                                },
                              })
                              .to({}, { duration: 12 })
                              .to(
                                ".window-shape-screen-1 .hero_title",
                                { xPercent: 100, autoAlpha: 0, duration: 4 },
                                "0",
                              )
                              .to(
                                ".window-shape-screen-1 .trusted_features",
                                { xPercent: -100, autoAlpha: 0, duration: 4 },
                                "0",
                              )
                              .to(
                                [".window-shape-screen-1 .desc_wrapper"],
                                {
                                  autoAlpha: 0,
                                  y: -50,
                                  stagger: 0.1,
                                  duration: 4,
                                },
                                "0",
                              )
                              .to(
                                [".window-shape-screen-1 .category-wrap"],
                                {
                                  autoAlpha: 0,
                                  y: 50,
                                  stagger: 0.1,
                                  duration: 4,
                                },
                                "0",
                              )
                              .fromTo(
                                ".window-shape-screen-2 .purpose-mockup-wrapper",
                                { autoAlpha: 0 },
                                {
                                  autoAlpha: 1,
                                  duration: 10,
                                  scale: 1,
                                  clipPath:
                                    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                                },
                                "0",
                              )
                              .fromTo(
                                ".window-shape-img img",
                                { scale: 0 },
                                { duration: 10, scale: 200, autoAlpha: 1 },
                                "0",
                              )
                              .to(
                                ".window-shape-screen-2 .purpose-mockup",
                                { duration: 5, scale: 1 },
                                "0",
                              )
                              .fromTo(
                                ".window-shape-screen-2 .sec_subtitle",
                                { autoAlpha: 0, xPercent: "-50" },
                                {
                                  autoAlpha: 1,
                                  xPercent: 1,
                                  stagger: 0.1,
                                  duration: 3,
                                },
                                "2.5",
                              )
                              .fromTo(
                                ".window-shape-screen-2 .sec_title",
                                { autoAlpha: 0, xPercent: "-50" },
                                {
                                  autoAlpha: 1,
                                  xPercent: 1,
                                  stagger: 0.1,
                                  duration: 3,
                                },
                                "2.5",
                              )
                              .fromTo(
                                [
                                  ".window-shape-screen-2 video",
                                  ".window-shape-screen-2 .purpose-video-title",
                                ],
                                { autoAlpha: 0, y: 50 },
                                {
                                  autoAlpha: 1,
                                  y: 0,
                                  stagger: 0.3,
                                  duration: 4,
                                },
                                "3",
                              )
                              .set(
                                ".window-shape-screen-2",
                                { pointerEvents: "all" },
                                "3.5",
                              )
                              .fromTo(
                                ".window-shape-screen-2 .purpose-cta",
                                { autoAlpha: 0, xPercent: -100 },
                                { autoAlpha: 1, xPercent: 0, duration: 3 },
                                "3.5",
                              )
                              .fromTo(
                                ".window-shape-screen-2 .tj-progress-item",
                                { autoAlpha: 0, yPercent: 50 },
                                {
                                  autoAlpha: 1,
                                  yPercent: 0,
                                  stagger: 0.1,
                                  duration: 3,
                                },
                                "3.5",
                              )
                              .fromTo(
                                ".window-shape-screen-2 .purpose-mockup-item:not(:first-child)",
                                { yPercent: 100, scale: 1.5 },
                                {
                                  scale: 1.2,
                                  yPercent: 0,
                                  stagger: 4,
                                  duration: 4,
                                },
                                "7",
                              )
                              .fromTo(
                                {},
                                {},
                                {
                                  duration: 3 * i,
                                  onStart: function () {
                                    e = !0;
                                  },
                                  onUpdate: function () {
                                    if (!e) return;
                                    let t = Math.round(
                                      this.progress() * (i - 1),
                                    );
                                    s.forEach((e, s) => {
                                      e.classList.toggle("active", s === t);
                                    });
                                  },
                                  onReverseComplete: function () {
                                    e = !1;
                                  },
                                },
                                "7",
                              )),
                          n &&
                            (a.gsap.set(
                              [
                                ".window-shape-screen-1 .hero_title",
                                ".window-shape-screen-1 .desc_wrapper",
                                ".window-shape-screen-1 .trusted_features",
                                ".window-shape-screen-1 .category-wrap",
                                ".window-shape-screen-2 .purpose-mockup-wrapper",
                              ],
                              { clearProps: "all" },
                            ),
                            a.gsap
                              .timeline({
                                scrollTrigger: {
                                  trigger: ".window-shape-wrapper",
                                  start: "top top",
                                  end: "bottom top",
                                  scrub: 1,
                                },
                              })
                              .to({}, { duration: 10 })
                              .to(
                                ".window-shape-wrapper",
                                { autoAlpha: 1, duration: 0 },
                                0,
                              )
                              .set(
                                ".window-shape-screen-2",
                                { pointerEvents: "all" },
                                "0",
                              )
                              .fromTo(
                                ".window-shape-screen-2 .sec_subtitle",
                                { autoAlpha: 0, y: 100 },
                                { autoAlpha: 1, y: 0, duration: 1 },
                                "0",
                              )
                              .fromTo(
                                ".window-shape-screen-2 .sec_title",
                                { autoAlpha: 0, y: 100 },
                                { autoAlpha: 1, y: 0, duration: 2 },
                                "0",
                              )
                              .fromTo(
                                ".window-shape-screen-2 .purpose-cta",
                                { autoAlpha: 0, y: 100 },
                                { autoAlpha: 1, y: 0, duration: 3 },
                                "0",
                              )
                              .fromTo(
                                ".window-shape-screen-2 .purpose-video",
                                { autoAlpha: 0, y: 100 },
                                {
                                  autoAlpha: 1,
                                  y: 0,
                                  stagger: 0.3,
                                  duration: 0.5,
                                },
                                "1.5",
                              )
                              .fromTo(
                                ".window-shape-screen-2 .tj-progress-item",
                                { autoAlpha: 0, y: 100 },
                                { autoAlpha: 1, y: 0, stagger: 2, duration: 1 },
                                "2",
                              )));
                      },
                    ),
                    () => t.revert()
                  );
                })(),
              ),
              i.push(
                ((E = a.gsap.matchMedia()),
                (_ = []),
                a.gsap.utils.toArray(".title-highlight-2").forEach((t) => {
                  let e = new o.SplitText(t, {
                    type: "lines",
                    linesClass: "line-2",
                  });
                  _.push(e);
                  let s = e.lines,
                    i = a.gsap.timeline({
                      scrollTrigger: {
                        trigger: t,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: !0,
                      },
                    });
                  (s.forEach((t) => {
                    i.to(t, {
                      "--highlight-offset": "100%",
                      ease: "power2.out",
                      duration: 1,
                      stagger: 0.4,
                    });
                  }),
                    E.add(
                      {
                        isDesktop: "(min-width: 992px)",
                        isMobile: "(max-width: 991px)",
                        xxl: "(min-width: 1400px) and (max-width: 1599px)",
                        xl: "(min-width: 1200px) and (max-width: 1399px)",
                        lg: "(min-width: 992px) and (max-width: 1299px)",
                      },
                      (e) => {
                        let {
                            isMobile: s,
                            xxl: r,
                            xl: n,
                            lg: h,
                          } = e.conditions,
                          o = t.querySelector(".title-img-anim");
                        if (!o) return;
                        let l = `${r || n ? 154 : h ? 134 : s ? 80 : 194}px`;
                        (a.gsap.set(o, { width: 0 }),
                          i.to(o, { width: l }, ".8"));
                      },
                    ));
                }),
                () => {
                  (E.revert(), _.forEach((t) => t.revert()));
                }),
              ),
              i.push(
                ((j = a.gsap.matchMedia()),
                a.gsap.utils
                  .toArray(".sidebar-sticky-container")
                  .forEach((t) => {
                    let e = t.querySelectorAll(".sidebar-sticky");
                    e.length &&
                      j.add("(min-width: 992px)", () => {
                        let s = e[e.length - 1],
                          i = parseInt(getComputedStyle(t).paddingBottom) || 0;
                        e.forEach((e) => {
                          a.gsap.to(e, {
                            ease: "circ",
                            scrollTrigger: {
                              trigger: e,
                              start: "top-=60 top",
                              endTrigger: t,
                              end: () =>
                                `bottom top+=${s.offsetHeight + 60 + i}`,
                              pin: !0,
                              pinSpacing: !1,
                              scrub: !0,
                              invalidateOnRefresh: !0,
                            },
                          });
                        });
                      });
                  }),
                () => j.revert()),
              ),
              i.push(
                ((T = a.gsap.matchMedia()),
                a.gsap.utils.toArray(".team_pin_area_container")[0] &&
                  // PodShot: pinned heading at every width; phones restyle the cards in globals.css.
                  T.add("all", () => {
                    a.gsap
                      .timeline({
                        scrollTrigger: {
                          trigger: ".team_pin_area_container",
                          pin: ".team_pin_area",
                          scrub: 1,
                          start: "top top",
                          end: "bottom bottom",
                          endTrigger: ".team_pin_area_container",
                          pinSpacing: !1,
                        },
                      })
                      .to(
                        ".team_pin_area .section_heading",
                        {
                          yPercent: 35,
                          ease: "power2.out",
                          scale: 1.1,
                          duration: 4,
                        },
                        "0",
                      )
                      .to(
                        ".team_pin_area_container .team_items_wrapper",
                        { y: "-100vh", duration: 4 },
                        "0",
                      )
                      .from(
                        ".team_pin_area .team_badge img",
                        { opacity: 0, scale: 0.7, rotate: 45, duration: 4 },
                        "0",
                      );
                  }),
                () => T.revert()),
              ),
              a.gsap.utils.toArray(".tj-project-gallery-item").forEach((t) => {
                let e = t.querySelector(".tj-project-gallery-item-inner");
                e &&
                  (a.gsap.set(e, { width: 0 }),
                  a.gsap.to(e, {
                    width: "100%",
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: t,
                      start: "top 80%",
                      end: "bottom bottom",
                    },
                  }));
              }),
              i.push(
                (() => {
                  let t = [],
                    e = document.body,
                    s = a.gsap.utils.toArray(".skew-project-area")[0],
                    i = a.gsap.utils.toArray(".skew-project-wrap")[0],
                    r = a.gsap.utils.toArray(".skew-project-item");
                  if (r?.length && i && s && e) {
                    r.forEach((e) => {
                      let i = () => {
                          s.style.transform = "translate3d(0px, 80px, 0px)";
                        },
                        r = () => {
                          s.style.transform = "translate3d(0px, 0px, 0px)";
                        };
                      (e.addEventListener("mouseenter", i),
                        e.addEventListener("mouseleave", r),
                        t.push(() => {
                          (e.removeEventListener("mouseenter", i),
                            e.removeEventListener("mouseleave", r));
                        }));
                    });
                    let a = (t) => {
                        let s = e.getBoundingClientRect(),
                          r = (t.clientX - s.left) / s.width - 0.6,
                          a = (t.clientY - s.top) / s.height - 0.6;
                        i.style.transform = `rotateX(${70 + -(30 * a * 1)}deg) rotateY(0deg) rotateZ(${40 + 30 * r}deg)`;
                      },
                      n = () => {
                        i.style.transform =
                          "rotateX(70deg) rotateY(0deg) rotateZ(40deg)";
                      };
                    (e.addEventListener("mousemove", a),
                      e.addEventListener("mouseleave", n),
                      t.push(() => {
                        (e.removeEventListener("mousemove", a),
                          e.removeEventListener("mouseleave", n),
                          (i.style.transform = ""),
                          (s.style.transform = ""));
                      }));
                  }
                  return () => t.forEach((t) => t());
                })(),
              ),
              i.push(
                (() => {
                  let t = [],
                    e = a.gsap.utils.toArray(".gallery-showcase-section")[0],
                    s = a.gsap.utils.toArray(".gallery-showcase-wrapper")[0],
                    i = a.gsap.utils.toArray(".gallery-project-wrap")[0],
                    r = a.gsap.utils.toArray(".showcase-title")[0];
                  if (e && s && i && r) {
                    let a = { x: 0, y: 0 },
                      n = { x: 0, y: 0 },
                      h = { x: 0, y: 0 },
                      o = { x: 0, y: 0 },
                      l = !1,
                      c = { x: 0, y: 0 },
                      u = 0,
                      d = [],
                      p = r.innerHTML,
                      { width: g, height: m } = i.getBoundingClientRect(),
                      f = getComputedStyle(document.documentElement),
                      v = {
                        x:
                          parseInt(f.getPropertyValue("--gallery-gap-x")) || 80,
                        y:
                          parseInt(f.getPropertyValue("--gallery-gap-y")) || 80,
                      };
                    for (let t = -2; t <= 2; t++)
                      for (let e = -2; e <= 2; e++) {
                        let r = i.cloneNode(!0);
                        ((r.style.position = "absolute"),
                          (r.dataset.offsetX = String(e * (g + v.x))),
                          (r.dataset.offsetY = String(t * (m + v.y))),
                          s.appendChild(r),
                          d.push(r));
                      }
                    ((i.style.display = "none"),
                      d.forEach((t) => {
                        t.querySelectorAll(".gallery-project-item").forEach(
                          (t) => {
                            let e = t.querySelector(".title");
                            if (!e) return;
                            let s = e.innerHTML;
                            (t.addEventListener("mouseenter", () => {
                              r.innerHTML = s;
                            }),
                              t.addEventListener("mouseleave", () => {
                                r.innerHTML = p;
                              }),
                              t.addEventListener("touchstart", () => {
                                r.innerHTML = s;
                              }));
                          },
                        );
                      }));
                    let x =
                      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
                        navigator.userAgent,
                      );
                    if (!x) {
                      let s = (t) => {
                          ((l = !0),
                            (c.x = t.clientX - a.x),
                            (c.y = t.clientY - a.y));
                        },
                        i = () => {
                          l = !1;
                        },
                        r = (t) => {
                          if (l)
                            ((a.x = t.clientX - c.x), (a.y = t.clientY - c.y));
                          else {
                            let e = window.innerWidth / 2,
                              s = window.innerHeight / 2;
                            ((n.x = (t.clientX - e) * 0.15),
                              (n.y = (t.clientY - s) * 0.15));
                          }
                        };
                      (e.addEventListener("mousedown", s),
                        window.addEventListener("mouseup", i),
                        window.addEventListener("mousemove", r),
                        t.push(() => {
                          (e.removeEventListener("mousedown", s),
                            window.removeEventListener("mouseup", i),
                            window.removeEventListener("mousemove", r));
                        }));
                    }
                    if (x) {
                      let s = (t) => {
                          ((l = !0),
                            (c.x = t.touches[0].clientX - a.x),
                            (c.y = t.touches[0].clientY - a.y));
                        },
                        i = () => {
                          l = !1;
                        },
                        r = (t) => {
                          l &&
                            ((a.x = t.touches[0].clientX - c.x),
                            (a.y = t.touches[0].clientY - c.y));
                        };
                      (e.addEventListener("touchstart", s),
                        window.addEventListener("touchend", i),
                        window.addEventListener("touchmove", r),
                        t.push(() => {
                          (e.removeEventListener("touchstart", s),
                            window.removeEventListener("touchend", i),
                            window.removeEventListener("touchmove", r));
                        }));
                    }
                    let b = () => {
                      ((h.x = a.x + n.x),
                        (h.y = a.y + n.y),
                        (o.x += (h.x - o.x) * 0.08),
                        (o.y += (h.y - o.y) * 0.08),
                        d.forEach((t) => {
                          let e = +(t.dataset.offsetX ?? 0),
                            s = +(t.dataset.offsetY ?? 0);
                          (o.x + e > g + v.x
                            ? (e -= (g + v.x) * 5)
                            : o.x + e < -g - v.x && (e += (g + v.x) * 5),
                            o.y + s > m + v.y
                              ? (s -= (m + v.y) * 5)
                              : o.y + s < -m - v.y && (s += (m + v.y) * 5),
                            (t.dataset.offsetX = String(e)),
                            (t.dataset.offsetY = String(s)));
                        }),
                        d.forEach((t) => {
                          t.style.transform = `translate3d(${+(t.dataset.offsetX ?? 0) + o.x}px, ${+(t.dataset.offsetY ?? 0) + o.y}px, 0)`;
                        }),
                        (u = requestAnimationFrame(b)));
                    };
                    (b(),
                      t.push(() => {
                        (cancelAnimationFrame(u),
                          d.forEach((t) => t.remove()),
                          (i.style.display = ""),
                          (r.innerHTML = p));
                      }));
                  }
                  return () => t.forEach((t) => t());
                })(),
              ),
              i.push(
                ((S = a.gsap.matchMedia()).add("(min-width: 1200px)", () => {
                  let t = a.gsap.utils.toArray(
                      ".perspective-showcase-section",
                    )[0],
                    e = a.gsap.utils.toArray(".perspective-showcase-images")[0],
                    s = a.gsap.utils.toArray(".perspective-showcase-item"),
                    i = a.gsap.utils.toArray(".perspective-showcase-img"),
                    r = a.gsap.utils.toArray(
                      ".perspective-showcase-title-wrap",
                    ),
                    h = a.gsap.utils.toArray(".perspective-title-wrap"),
                    o = a.gsap.utils.toArray(".perspective-title"),
                    l = a.gsap.utils.toArray(
                      ".perspective-showcase-subtitle .sec_subtitle",
                    ),
                    c = a.gsap.utils.toArray(
                      ".perspective-showcase-year .sec_subtitle",
                    ),
                    u = a.gsap.utils.toArray(".current-item-no")[0];
                  if (t && e && u && i.length) {
                    let d = i.length,
                      p = i[0].offsetHeight + 30,
                      g = window.innerHeight,
                      m = (t) => {
                        (s.forEach((e, s) =>
                          e.classList.toggle("active", s === t),
                        ),
                          l.forEach((e, s) =>
                            e.classList.toggle("active", s === t),
                          ),
                          c.forEach((e, s) =>
                            e.classList.toggle("active", s === t),
                          ),
                          o.forEach((e, s) =>
                            e.classList.toggle("active", s === t),
                          ),
                          (u.textContent = String(t + 1).padStart(2, "0")));
                      };
                    return (
                      n.ScrollTrigger.create({
                        trigger: t,
                        start: "top top",
                        end: "+=" + g * (d - 1),
                        pin: !0,
                        scrub: !0,
                        onUpdate: (t) => {
                          let s = t.progress * (d - 1),
                            i = Math.round(s);
                          (a.gsap.set(e, { y: -s * p }), m(i));
                          let n =
                            r[0].getBoundingClientRect().height -
                            185 -
                            h[0].getBoundingClientRect().height;
                          o.forEach((t, e) => {
                            (e === i &&
                              (t.style.transform = `translateY(-${n}px)`),
                              e > i && (t.style.transform = "translateY(0)"));
                          });
                        },
                      }),
                      m(0),
                      () => {
                        (o.forEach((t) => {
                          t.style.transform = "";
                        }),
                          [...s, ...l, ...c, ...o].forEach((t) =>
                            t.classList.remove("active"),
                          ),
                          (u.textContent = "01"));
                      }
                    );
                  }
                }),
                () => S.revert()),
              ));
          });
          let e = Array.from(document.images).filter(tr),
            s = h.ScrollSmoother.get()?.content() ?? document.documentElement,
            l = s.scrollHeight,
            c = !1,
            u = !1,
            d = () => {
              ((l = s.scrollHeight), n.ScrollTrigger.refresh());
            },
            p = () => {
              r ||
                c ||
                ((c = !0),
                requestAnimationFrame(() => {
                  ((c = !1),
                    r ||
                      s.scrollHeight === l ||
                      (n.ScrollTrigger.isScrolling() ? (u = !0) : d()));
                }));
            },
            g = () => {
              !r && u && ((u = !1), d());
            };
          (n.ScrollTrigger.addEventListener("scrollEnd", g),
            i.push(() => n.ScrollTrigger.removeEventListener("scrollEnd", g)),
            e.forEach((t) => {
              (t.addEventListener("load", p, { once: !0 }),
                i.push(() => t.removeEventListener("load", p)));
            }));
        },
        c = () => {
          r ||
            ("function" == typeof window.requestIdleCallback
              ? (e = window.requestIdleCallback(l))
              : (s = setTimeout(l, 1)));
        },
        u = () => {
          document.fonts?.ready ? document.fonts.ready.then(c) : c();
        };
      return (
        "complete" === document.readyState
          ? u()
          : window.addEventListener("load", u),
        () => {
          ((r = !0),
            window.removeEventListener("load", u),
            void 0 !== e &&
              "function" == typeof window.cancelIdleCallback &&
              window.cancelIdleCallback(e),
            void 0 !== s && clearTimeout(s),
            i.forEach(ta),
            t?.revert());
        }
      );
    }

export default tn;
