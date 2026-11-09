(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  28899,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932);
    e.i(88833);
    var s = e.i(61604);
    function i() {
      let e = s.ScrollSmoother.get();
      e ? e.scrollTo(0, !0) : window.scrollTo({ top: 0, behavior: "smooth" });
    }
    e.s([
      "default",
      0,
      () => {
        let e,
          s = (0, r.c)(1);
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsxs)("button", {
                id: "back_to_top",
                type: "button",
                className: "tj_back_to_top",
                onClick: i,
                children: [
                  "Back to top",
                  (0, t.jsxs)("span", {
                    children: [
                      (0, t.jsx)("i", { className: "tji-arrow-up" }),
                      (0, t.jsx)("i", { className: "tji-arrow-up" }),
                    ],
                  }),
                ],
              })),
              (s[0] = e))
            : (e = s[0]),
          e
        );
      },
    ]);
  },
  55136,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932);
    function s(e) {
      return e.preventDefault();
    }
    e.s([
      "default",
      0,
      (e) => {
        let i,
          a = (0, r.c)(3),
          { id: l, children: n } = e;
        return (
          a[0] !== n || a[1] !== l
            ? ((i = (0, t.jsx)("form", { id: l, onSubmit: s, children: n })),
              (a[0] = n),
              (a[1] = l),
              (a[2] = i))
            : (i = a[2]),
          i
        );
      },
    ]);
  },
  89511,
  (e) => {
    "use strict";
    var t = e.i(71645);
    e.s([
      "default",
      0,
      () => (
        (0, t.useEffect)(() => {
          e.A(54445);
        }, []),
        null
      ),
    ]);
  },
  86206,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      s = e.i(57688),
      i = e.i(22016),
      a = e.i(73958);
    e.s([
      "default",
      0,
      ({
        src: l,
        displacement: n,
        href: o,
        alt: c,
        intensity: d = 0.6,
        speedIn: u = 1,
        speedOut: m = 1,
      }) => {
        let h = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let t,
              r,
              s,
              i,
              a = h.current;
            if (!a) return;
            let o = !1,
              c = null,
              p = 0,
              j = 0,
              v = () => {
                (c && t && c.removeEventListener("mouseenter", t),
                  c && r && c.removeEventListener("mouseleave", r));
              },
              f = () => {
                if (o || !s) return;
                (v(), a.querySelector("canvas")?.remove());
                let e = new s({
                  parent: a,
                  intensity: d,
                  speedIn: u,
                  speedOut: m,
                  image1: l,
                  image2: l,
                  displacementImage: n,
                  hover: !1,
                });
                ((c = a.closest(".tj--hover-item")),
                  (t = () => e.next()),
                  (r = () => e.previous()),
                  c?.addEventListener("mouseenter", t),
                  c?.addEventListener("mouseleave", r));
              },
              w = new ResizeObserver((e) => {
                let t = e[e.length - 1].contentRect;
                0 !== t.width &&
                  (t.width !== p || t.height !== j) &&
                  ((p = t.width),
                  (j = t.height),
                  void 0 !== i && cancelAnimationFrame(i),
                  (i = requestAnimationFrame(f)));
              });
            return (
              e.A(47232).then(({ default: e }) => {
                o || ((s = e), w.observe(a));
              }),
              () => {
                ((o = !0),
                  void 0 !== i && cancelAnimationFrame(i),
                  w.disconnect(),
                  v(),
                  a.querySelector("canvas")?.remove());
              }
            );
          }, [l, n, d, u, m]),
          (0, t.jsx)(i.default, {
            ref: h,
            className: "tj--hover-img",
            "data-displacement": n,
            "data-intensity": d,
            "data-speedin": u,
            "data-speedout": m,
            href: o,
            children: (0, t.jsx)(s.default, {
              src: l,
              ...(0, a.default)(l),
              alt: c,
              style: { height: "auto" },
            }),
          })
        );
      },
    ]);
  },
  49454,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932),
      s = e.i(71645),
      i = e.i(80401),
      a = e.i(72225),
      l = e.i(58498);
    function n(e, r) {
      return (0, t.jsx)(i.SwiperSlide, { children: e }, r);
    }
    e.s([
      "default",
      0,
      (e) => {
        let o,
          c,
          d,
          u,
          m,
          h,
          p,
          j,
          v,
          f,
          w,
          b,
          _,
          x = (0, r.c)(18),
          { heading: y, slides: g } = e,
          S = (0, s.useRef)(null);
        return (
          x[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = () => S.current?.slidePrev()), (x[0] = o))
            : (o = x[0]),
          x[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, t.jsx)("button", {
                onClick: o,
                className: "tj_swiper_nav prev h3-slider-prev",
                type: "button",
                children: (0, t.jsxs)("span", {
                  children: [
                    (0, t.jsx)("i", { className: "tji-arrow-left" }),
                    (0, t.jsx)("i", { className: "tji-arrow-left" }),
                  ],
                }),
              })),
              (d = () => S.current?.slideNext()),
              (x[1] = c),
              (x[2] = d))
            : ((c = x[1]), (d = x[2])),
          x[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (0, t.jsxs)("div", {
                className: "tj_swiper_nav_wrapper tj-fade",
                "data-direction": "right",
                children: [
                  c,
                  (0, t.jsx)("button", {
                    onClick: d,
                    className: "tj_swiper_nav h3-slider-next",
                    type: "button",
                    children: (0, t.jsxs)("span", {
                      children: [
                        (0, t.jsx)("i", { className: "tji-arrow-right" }),
                        (0, t.jsx)("i", { className: "tji-arrow-right" }),
                      ],
                    }),
                  }),
                ],
              })),
              (x[3] = u))
            : (u = x[3]),
          x[4] !== y
            ? ((m = (0, t.jsxs)("div", {
                className:
                  "related-project-header d-flex flex-wrap align-items-end justify-content-between gap-3",
                children: [y, u],
              })),
              (x[4] = y),
              (x[5] = m))
            : (m = x[5]),
          x[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (e) => {
                S.current = e;
              }),
              (p = [a.Autoplay, l.Keyboard]),
              (x[6] = h),
              (x[7] = p))
            : ((h = x[6]), (p = x[7])),
          x[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = { delay: 4e3 }),
              (f = { enabled: !0 }),
              (j = {
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 2 },
                1400: { slidesPerView: 3 },
              }),
              (x[8] = j),
              (x[9] = v),
              (x[10] = f))
            : ((j = x[8]), (v = x[9]), (f = x[10])),
          x[11] !== g
            ? ((w = g.map(n)), (x[11] = g), (x[12] = w))
            : (w = x[12]),
          x[13] !== w
            ? ((b = (0, t.jsx)("div", {
                className: "related-project-slider-wrapper tj-fade",
                children: (0, t.jsx)(i.Swiper, {
                  className: "related_project_slider overflow-hidden",
                  onSwiper: h,
                  modules: p,
                  slidesPerView: 1,
                  spaceBetween: 30,
                  loop: !0,
                  speed: 1500,
                  autoplay: v,
                  keyboard: f,
                  breakpoints: j,
                  children: w,
                }),
              })),
              (x[13] = w),
              (x[14] = b))
            : (b = x[14]),
          x[15] !== b || x[16] !== m
            ? ((_ = (0, t.jsxs)(t.Fragment, { children: [m, b] })),
              (x[15] = b),
              (x[16] = m),
              (x[17] = _))
            : (_ = x[17]),
          _
        );
      },
    ]);
  },
  54445,
  (e) => {
    e.v((t) =>
      Promise.all(["static/chunks/1zlgta_2knj2d.js"].map((t) => e.l(t))).then(
        () => t(83781),
      ),
    );
  },
  47232,
  (e) => {
    e.v((t) =>
      Promise.all(["static/chunks/1-bd37lkc8yl0.js"].map((t) => e.l(t))).then(
        () => t(78262),
      ),
    );
  },
]);
