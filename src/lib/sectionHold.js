import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const HOLD_MS = 550;
// Pins that only keep a title or sidebar in view; they don't start an animation.
const NOT_ANIMATION = '.ps-sticky-title, .ps-guide-toc, .sidebar-sticky';

// When scrolling down, the page stops briefly at the top of each main section and at the point
// where each pinned scroll animation starts, so fast scrolling still lands on them cleanly.
export default function sectionHold() {
  const mm = gsap.matchMedia();
  let timer;
  let release;
  let lastHeld = null;

  mm.add('all', () => {
    const apply = () => {
      const main = document.querySelector('#smooth-content main');
      const smoother = ScrollSmoother.get();
      if (!main || !smoother) return;

      const vh = window.innerHeight;
      const docTop = (el) => el.getBoundingClientRect().top + smoother.scrollTop();

      // Where each pinned animation starts (its section sits at the top of the screen there).
      const pinStarts = ScrollTrigger.getAll()
        .filter((st) => st.pin && !st.pin.matches(NOT_ANIMATION) && st.start > vh * 0.8);
      const nearPin = (y) => pinStarts.some((st) => Math.abs(st.start - y) < vh * 0.6);

      // Section tops: real content sections only (not spacers, logo strips, banners or the CTA),
      // nothing on the first screen, not two stops close together, and not right next to a pin stop.
      let lastStop = -Infinity;
      const sections = [...main.children].filter((el) => {
        if (el.classList.contains('pin-spacer')) return false;
        if (getComputedStyle(el).position === 'absolute') return false;
        if (el.offsetHeight < vh * 0.45) return false;
        const top = docTop(el);
        if (top < vh * 0.8 || top - lastStop < vh * 0.5 || nearPin(top)) return false;
        lastStop = top;
        return true;
      });

      const hold = (key) => ({
        onLeaveBack: () => { if (lastHeld === key) lastHeld = null; },
        onEnter: (self) => {
          const overshoot = self.scroll() - self.start;
          if (smoother.paused() || lastHeld === key || ScrollTrigger.isRefreshing) return;
          if (self.direction !== 1 || overshoot < 0 || overshoot > vh * 0.6) return;
          lastHeld = key;
          smoother.scrollTo(self.start + 1, false);
          smoother.paused(true);
          clearTimeout(release);
          release = setTimeout(() => smoother.paused(false), HOLD_MS);
        },
      });

      sections.forEach((el) => ScrollTrigger.create({ trigger: el, start: 'top top', ...hold(el) }));
      // Created after the pins, so on refresh these read the pins' updated start positions.
      pinStarts.forEach((st) => ScrollTrigger.create({ start: () => st.start, ...hold(st) }));
    };

    const run = () => { timer = setTimeout(apply, 1200); };
    if (document.readyState === 'complete') run();
    else window.addEventListener('load', run, { once: true });

    return () => {
      clearTimeout(timer);
      clearTimeout(release);
      window.removeEventListener('load', run);
      ScrollSmoother.get()?.paused(false);
    };
  });

  return () => mm.revert();
}
