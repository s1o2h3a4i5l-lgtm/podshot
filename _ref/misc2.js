(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  28899,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932);
    e.i(88833);
    var l = e.i(61604);
    function i() {
      let e = l.ScrollSmoother.get();
      e ? e.scrollTo(0, !0) : window.scrollTo({ top: 0, behavior: "smooth" });
    }
    e.s([
      "default",
      0,
      () => {
        let e,
          l = (0, r.c)(1);
        return (
          l[0] === Symbol.for("react.memo_cache_sentinel")
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
              (l[0] = e))
            : (e = l[0]),
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
    function l(e) {
      return e.preventDefault();
    }
    e.s([
      "default",
      0,
      (e) => {
        let i,
          a = (0, r.c)(3),
          { id: s, children: n } = e;
        return (
          a[0] !== n || a[1] !== s
            ? ((i = (0, t.jsx)("form", { id: s, onSubmit: l, children: n })),
              (a[0] = n),
              (a[1] = s),
              (a[2] = i))
            : (i = a[2]),
          i
        );
      },
    ]);
  },
  6148,
  (e) => {
    "use strict";
    var t = e.i(71645);
    e.s([
      "default",
      0,
      ({ children: r, selector: l = ".video-popup" }) => (
        (0, t.useEffect)(() => {
          let t,
            r = !1;
          return (
            e.A(11300).then(({ default: e }) => {
              r || (t = e({ selector: l }));
            }),
            () => {
              ((r = !0), t?.destroy());
            }
          );
        }, [l]),
        r
      ),
    ]);
  },
  80420,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932),
      l = e.i(71645);
    e.s(
      [
        "default",
        0,
        (e) => {
          let i,
            a = (0, r.c)(3),
            { className: s, children: n } = e,
            c = (0, l.useRef)(null);
          return (
            (0, l.useEffect)(() => {
              let e = c.current;
              if (!e) return;
              let t = e.querySelectorAll(".tj_client_item"),
                r = [],
                l = 0;
              return (
                t.forEach((e) => {
                  let t = e.querySelectorAll("img");
                  if (!t.length) return;
                  let i = l++,
                    a = 0;
                  r.push(
                    setTimeout(() => {
                      let e = setInterval(() => {
                        (t.forEach((e) => {
                          ((e.style.opacity = "0"),
                            (e.style.transform = "translateY(15px)"));
                        }),
                          (t[a].style.opacity = "1"),
                          (t[a].style.transform = "translateY(0)"),
                          (a = (a + 1) % t.length));
                      }, 4e3);
                      r.push(e);
                    }, 200 * i),
                  );
                }),
                () => r.forEach((e) => clearTimeout(e))
              );
            }, [c]),
            a[0] !== n || a[1] !== s
              ? ((i = (0, t.jsx)("div", { className: s, ref: c, children: n })),
                (a[0] = n),
                (a[1] = s),
                (a[2] = i))
              : (i = a[2]),
            i
          );
        },
      ],
      80420,
    );
  },
  71571,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      l = e.i(22016),
      i = e.i(17655);
    e.s([
      "default",
      0,
      ({ plan: a, blocksShape: s = !1 }) => {
        let [n, c] = (0, r.useState)(!1),
          o = (0, r.useRef)(null),
          u = (0, r.useRef)(null),
          d = n ? a.yearPrice : a.monthPrice;
        return (
          (0, r.useEffect)(() => {
            let e = o.current;
            if (!e) return;
            let t = () => {
              let t = e.querySelector(".tj-active-bg"),
                r = e.querySelector(".nav-link.active");
              if (!t || !r) return;
              let l = r.getBoundingClientRect(),
                i = e.getBoundingClientRect();
              ((t.style.left = `${l.left - i.left - 1}px`),
                (t.style.width = `${l.width}px`),
                (t.style.height = `${l.height}px`));
            };
            return (
              t(),
              window.addEventListener("resize", t),
              () => window.removeEventListener("resize", t)
            );
          }, [n]),
          (0, r.useEffect)(() => {
            let t = !1,
              r = [];
            return (
              e.A(54445).then(({ Tooltip: e }) => {
                !t &&
                  u.current &&
                  (r = Array.from(
                    u.current.querySelectorAll('[data-bs-toggle="tooltip"]'),
                  ).map((t) => new e(t)));
              }),
              () => {
                ((t = !0), r.forEach((e) => e.dispose()));
              }
            );
          }, []),
          (0, t.jsxs)("div", {
            className: `tj_pricing_item${a.popular ? " pricing_popular" : ""} tj-fade${a.dark ? " tj-theme-dark" : ""}`,
            ...(a.direction ? { "data-direction": a.direction } : {}),
            "data-delay": a.delay,
            ref: u,
            children: [
              a.popular
                ? (0, t.jsx)("div", {
                    className: "pricing_badge",
                    children: "Most Popular",
                  })
                : null,
              (0, t.jsxs)("div", {
                className: "pricing_header",
                children: [
                  (0, t.jsx)("h3", {
                    className: "package_name tj-fz-h5",
                    children: a.name,
                  }),
                  (0, t.jsx)("div", {
                    className: "package_desc fs-18",
                    children: a.desc,
                  }),
                  (0, t.jsxs)("div", {
                    className: "package_price",
                    children: [
                      (0, t.jsx)("div", {
                        className: "package_start",
                        children: "Start from",
                      }),
                      (0, t.jsxs)("div", {
                        className: "package_price_inner",
                        children: [
                          (0, t.jsx)("span", {
                            className: "currency",
                            children: "$",
                          }),
                          (0, t.jsx)("span", {
                            className: "price",
                            children: d,
                          }),
                          (0, t.jsx)("span", {
                            className: "period",
                            children: "/MO",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "pricing_switcher tj-active-bg-container",
                    ref: o,
                    children: [
                      (0, t.jsx)("button", {
                        type: "button",
                        className: `nav-link monthly${n ? "" : " active"}`,
                        onClick: () => c(!1),
                        children: "Month",
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        className: `nav-link yearly${n ? " active" : ""}`,
                        onClick: () => c(!0),
                        children: "Annual",
                      }),
                      (0, t.jsx)("div", { className: "tj-active-bg" }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)(l.default, {
                href: "/pricing-plan",
                className: "tj_icon_btn flip-text-wrap pricing_btn",
                children: [
                  (0, t.jsx)("span", {
                    className: "flip-text",
                    children: (0, t.jsx)(i.default, {
                      children: "Select package",
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "icon_btn hover-bg",
                    children: (0, t.jsx)("i", { className: "tji-arrow-right" }),
                  }),
                ],
              }),
              (0, t.jsx)("ul", {
                className: "pricing_features",
                children: a.features.map((e) =>
                  (0, t.jsxs)(
                    "li",
                    {
                      children: [
                        e.label,
                        (0, t.jsx)("span", {
                          "data-bs-custom-class":
                            a.tooltipClass ?? "pricing-tooltip",
                          "data-bs-toggle": "tooltip",
                          "data-bs-placement": "right",
                          "data-bs-title": e.tip,
                          children: (0, t.jsx)("i", {
                            className: "tji-question-mark",
                          }),
                        }),
                      ],
                    },
                    e.label,
                  ),
                ),
              }),
              s ? (0, t.jsx)("div", { className: "blocks-shape" }) : null,
            ],
          })
        );
      },
    ]);
  },
  98438,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932),
      l = e.i(71645);
    e.i(88833);
    var i = e.i(40462);
    let a = (e, t, r) => (1 - r) * e + r * t,
      s = Array.from(
        { length: 10 },
        (e, t) => `/images/hero/img-${t + 1}.webp`,
      );
    function n(e) {
      return (0, t.jsx)(
        "div",
        {
          className: "content__img",
          children: (0, t.jsx)("div", {
            className: "content__img-inner",
            style: { backgroundImage: `url(${e})` },
          }),
        },
        e,
      );
    }
    e.s(
      [
        "default",
        0,
        () => {
          let e,
            c,
            o,
            u = (0, r.c)(3),
            d = (0, l.useRef)(null);
          return (
            u[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = () => {
                  if (d.current)
                    return ((e) => {
                      let t = Array.from(
                        e.querySelectorAll(".content__img"),
                      ).map((e) => ({
                        el: e,
                        rect: e.getBoundingClientRect(),
                      }));
                      if (!t.length) return () => {};
                      let r = { x: 0, y: 0 },
                        l = { x: 0, y: 0 },
                        s = { x: 0, y: 0 },
                        n = 0,
                        c = 1,
                        o = 0,
                        u = !0,
                        d = 0,
                        m = !1,
                        p = () => {
                          let e,
                            m,
                            h =
                              ((e = r.x),
                              (m = r.y),
                              Math.hypot(l.x - e, l.y - m));
                          if (
                            ((s.x = a(s.x || r.x, r.x, 0.1)),
                            (s.y = a(s.y || r.y, r.y, 0.1)),
                            h > 80)
                          ) {
                            let e;
                            (++c,
                              (n = n < t.length - 1 ? n + 1 : 0),
                              ((e = t[n]).rect = e.el.getBoundingClientRect()),
                              i.gsap.killTweensOf(e.el),
                              i.gsap
                                .timeline({
                                  onStart: () => {
                                    (o++, (u = !1));
                                  },
                                  onComplete: () => {
                                    0 == --o && (u = !0);
                                  },
                                })
                                .fromTo(
                                  e.el,
                                  {
                                    opacity: 1,
                                    scale: 1,
                                    zIndex: c,
                                    x: s.x - e.rect.width / 2,
                                    y: s.y - e.rect.height / 2,
                                  },
                                  {
                                    duration: 0.4,
                                    ease: "power1",
                                    x: r.x - e.rect.width / 2,
                                    y: r.y - e.rect.height / 2,
                                  },
                                  0,
                                )
                                .to(
                                  e.el,
                                  {
                                    duration: 0.4,
                                    ease: "power3",
                                    opacity: 0,
                                    scale: 0.2,
                                  },
                                  0.4,
                                ),
                              (l = r));
                          }
                          (u && 1 !== c && (c = 1),
                            (d = requestAnimationFrame(p)));
                        },
                        h = (t) => {
                          let l;
                          ((l = e.getBoundingClientRect()),
                            (r = {
                              x: t.clientX - l.left,
                              y: t.clientY - l.top,
                            }),
                            m ||
                              ((m = !0),
                              (s.x = r.x),
                              (s.y = r.y),
                              (d = requestAnimationFrame(p))));
                        };
                      return (
                        window.addEventListener("mousemove", h),
                        () => {
                          (window.removeEventListener("mousemove", h),
                            d && cancelAnimationFrame(d),
                            t.forEach((e) => i.gsap.killTweensOf(e.el)));
                        }
                      );
                    })(d.current);
                }),
                (c = []),
                (u[0] = e),
                (u[1] = c))
              : ((e = u[0]), (c = u[1])),
            (0, l.useEffect)(e, c),
            u[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((o = (0, t.jsx)("div", {
                  className: "content d-none d-lg-block",
                  ref: d,
                  children: s.map(n),
                })),
                (u[2] = o))
              : (o = u[2]),
            o
          );
        },
      ],
      98438,
    );
  },
  54445,
  (e) => {
    e.v((t) =>
      Promise.all(["static/chunks/1zlgta_2knj2d.js"].map((t) => e.l(t))).then(
        () => t(83781),
      ),
    );
  },
  11300,
  (e) => {
    e.v((t) =>
      Promise.all(["static/chunks/08x_tpehllt2m.js"].map((t) => e.l(t))).then(
        () => t(61922),
      ),
    );
  },
]);
