(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [601],
  {
    6589: function (e, t, A) {
      Promise.resolve().then(A.bind(A, 6809));
    },
    6809: function (e, t, A) {
      "use strict";
      A.r(t),
        A.d(t, {
          default: function () {
            return E;
          },
        });
      var s = A(7437),
        a = A(2812),
        l = A.n(a),
        c = A(2265),
        r = A(6648),
        i = A(913),
        x = A(4894),
        n = {
          src: "/_next/static/media/thogtext.90bc8eca.gif",
          height: 83,
          width: 511,
          blurWidth: 0,
          blurHeight: 0,
        },
        g = {
          src: "/_next/static/media/thogPFPs.7314feb7.gif",
          height: 1080,
          width: 1080,
          blurWidth: 0,
          blurHeight: 0,
        },
        h = A(3962),
        d = A(906),
        m = A(231),
        o = A.n(m),
        p = A(5332),
        u = A(1808),
        f = A(8280),
        N = A.n(f),
        w = (0, c.memo)(function (e) {
          let { href: t, text: A, className: a, buttonColor: l = "green" } = e;
          return (0,
          s.jsxs)(o(), { href: t, target: "_blank", className: "w-[355px] h-[123px] relative flex flex-col justify-center items-center cursor-pointer z-10 active:opacity-80 ".concat(N().xxlButton), children: [(0, s.jsx)("p", { className: "z-20 text-[40px] uppercase mb-2 text-white ".concat(a, " ").concat(N().xxlButtonText), children: A }), (0, s.jsx)(r.default, { src: "green" == l ? u.default : p.default, alt: A, className: "w-[350px] h-[123px]", fill: !0, sizes: "260px" })] });
        }),
        b = A(1546),
        j = (0, c.memo)(function (e) {
          let { href: t, text: A, className: a, buttonColor: l = "green" } = e;
          return (0,
          s.jsxs)(o(), { href: t, target: "_blank", className: "w-[280px] h-[100px] relative flex flex-col justify-center items-center cursor-pointer z-10 active:opacity-80", children: [(0, s.jsx)("p", { className: "z-20 text-[30px] uppercase mb-2 text-white ".concat(a), children: A }), (0, s.jsx)(r.default, { src: "green" == l ? b.default : p.default, alt: A, className: "w-[260px] h-[100px]", fill: !0, sizes: "260px" })] });
        }),
        B = (0, c.memo)(function (e) {
          let { className: t, title: A, price: a, children: l } = e;
          return (0,
          s.jsxs)("div", { className: "text-[18px] sm:text-[26px] flex items-center gap-2 ".concat(t), children: [A, " ", (0, s.jsx)("span", { className: "font-mono", children: ":" }), " ", l || a] });
        });
      function E(e) {
        let { error: t, reset: A } = e;
        return (
          (0, c.useEffect)(() => {
            console.error(t);
          }, [t]),
          (0, s.jsxs)("div", {
            className:
              "min-h-screen w-screen flex flex-col bg-[#21A4F2] justify-center items-center overflow-scroll overflow-x-hidden",
            children: [
              (0, s.jsx)("div", {
                className: " w-[1800px] flex justify-center",
                children: (0, s.jsx)(r.default, {
                  src: i.default,
                  alt: "Thog Mint Banner",
                  className: "h-full",
                  style: { objectFit: "cover", maxHeight: "100%" },
                  priority: !0,
                  placeholder: "blur",
                }),
              }),
              (0, s.jsxs)("div", {
                className:
                  "h-[1728px] w-full relative flex flex-col items-center gap-6",
                children: [
                  (0, s.jsxs)("h1", {
                    className:
                      "text-[38px] sm:text-[50px] lg:text-[60px] drop-shadow-2xl text-center leading-tight ".concat(
                        l().className
                      ),
                    children: ["THEORY OF ", (0, s.jsx)("br", {}), "GRAVITY"],
                  }),
                  (0, s.jsxs)("p", {
                    className:
                      "text-[25px] lg:text-[30px] flex gap-2 items-center",
                    children: [
                      "OFFICIAL",
                      (0, s.jsx)("span", {
                        className:
                          "bg-white text-[#568B06] border border-[#568B06] rounded-lg lg:rounded-xl px-2 lg:px-3",
                        children: "THOG",
                      }),
                      "LINKS",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, s.jsx)(j, {
                        href: "https://etherscan.io/token/0xc6BC67BE5459632D9C9957865aF90EAa31E2Df30",
                        text: "Token",
                        className: l().className,
                      }),
                      (0, s.jsx)(j, {
                        href: "https://www.sniper.xyz/collection/theory_of_gravity",
                        text: "NFT",
                        className: l().className,
                      }),
                      (0, s.jsx)(j, {
                        href: "https://t.me/theory_of_gravity",
                        text: "TLGRM",
                        className: l().className,
                      }),
                      (0, s.jsx)(j, {
                        href: "https://x.com/thog_on_eth",
                        text: "X",
                        className: l().className,
                      }),
                    ],
                  }),
                  (0, s.jsx)(r.default, {
                    src: n,
                    alt: "Thog Jump Text",
                    className:
                      "w-auto sm:block sm:w-[554px] absolute z-10 bottom-[670px] px-2 sm:px-5",
                  }),
                  (0, s.jsx)("div", {
                    className: "absolute bottom-[470px]",
                    children: (0, s.jsx)(w, {
                      href: "https://game.theoryofgravity.fun/",
                      text: "PLAY NOW",
                      className: l().className,
                    }),
                  }),
                  (0, s.jsx)(r.default, {
                    src: "/images/thoggame/section1.png",
                    alt: "section 1 background",
                    fill: !0,
                    sizes: "(max-width: 1800px) 1800px, 100vw",
                    quality: 100,
                    priority: !0,
                    className: "object-cover ",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "w-full bg-[#118146] relative flex flex-col items-center gap-8",
                children: [
                  (0, s.jsxs)("p", {
                    className:
                      "text-[38px] sm:text-[50px] lg:text-[60px] drop-shadow-2xl text-center leading-tight ".concat(
                        l().className,
                        " pt-20"
                      ),
                    children: ["THOG", (0, s.jsx)("br", {}), "NFT"],
                  }),
                  (0, s.jsx)(r.default, {
                    src: g,
                    alt: "Thog NFT",
                    className: "px-5 w-[554px]",
                  }),
                  (0, s.jsx)(B, {
                    className: l().className,
                    title: "Floor Price",
                    price: "NAN",
                  }),
                  (0, s.jsx)(B, {
                    className: l().className,
                    title: "Owners",
                    price: "NAN",
                  }),
                  (0, s.jsx)(B, {
                    className: l().className,
                    title: "ITEMS",
                    price: "NAN".toString(),
                  }),
                  (0, s.jsx)(r.default, {
                    src: h.default,
                    alt: "grass image",
                    sizes: "(max-width: 1800px) 1800px, 100vw",
                    className: "w-full h-[100px] object-cover",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "w-full bg-[#919191] relative flex flex-col items-center gap-12 pt-20",
                children: [
                  (0, s.jsxs)("p", {
                    className:
                      "text-[38px] sm:text-[50px] lg:text-[60px] drop-shadow-2xl text-center leading-tight ".concat(
                        l().className,
                        " "
                      ),
                    children: [
                      (0, s.jsx)("span", {
                        className: "font-serif sm:text-[55px] lg:text-[65px]",
                        children: "$",
                      }),
                      "THOG",
                      (0, s.jsx)("br", {}),
                      "TOKEN",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-8 text-center items-center",
                    children: [
                      (0, s.jsx)(B, {
                        className: l().className,
                        title: "Price",
                        price: "NAN",
                      }),
                      (0, s.jsx)(B, {
                        className: l().className,
                        title: "Market Cap",
                        price: "NAN",
                      }),
                      (0, s.jsx)(B, {
                        className: l().className,
                        title: "Supply",
                        price: "NAN",
                      }),
                    ],
                  }),
                  (0, s.jsx)(j, {
                    href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xc6BC67BE5459632D9C9957865aF90EAa31E2Df30&chain=mainnet",
                    text: "GET TOKEN",
                    className: l().className,
                  }),
                  (0, s.jsx)(r.default, {
                    src: d.default,
                    alt: "grass image",
                    sizes: "(max-width: 1800px) 1800px, 100vw",
                    className: "w-full h-[100px] object-cover ",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "w-full bg-[#653C20] relative flex flex-col items-center gap-12 py-20",
                children: [
                  (0, s.jsxs)("p", {
                    className:
                      "text-[38px] sm:text-[50px] lg:text-[60px] text-[#E84524] drop-shadow-2xl text-center leading-tight ".concat(
                        l().className,
                        " "
                      ),
                    children: ["BURNT", (0, s.jsx)("br", {}), "TOKENS"],
                  }),
                  (0, s.jsx)(r.default, {
                    src: x.default,
                    alt: "Thog Burn",
                    className: "px-5",
                  }),
                  (0, s.jsxs)("p", {
                    className:
                      "text-[25px] lg:text-[30px] flex gap-3 items-center",
                    children: [
                      "TOTAL",
                      (0, s.jsx)("span", {
                        className:
                          "bg-white text-[#FF0000] border border-[#FF0000] rounded-lg lg:rounded-xl px-2 lg:px-3",
                        children: "BURNT",
                      }),
                      "LP",
                    ],
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "text-[25px] lg:text-[30px] text-[#E84524] flex gap-2 items-center ".concat(
                        l().className
                      ),
                    children: "NAN",
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    8280: function (e) {
      e.exports = {
        xxlButton: "thoggame_xxlButton__pLAST",
        xxlButtonText: "thoggame_xxlButtonText__6CDtO",
      };
    },
    913: function (e, t, A) {
      "use strict";
      A.r(t),
        (t.default = {
          src: "/_next/static/media/Banner.d3d2af02.png",
          height: 315,
          width: 1473,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEU6o+wgpfIxq+pBh/BEr/JQpstfk8SFVNF8cKt8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgYmRgY2BhYWRgZWJmZ2ZiYAQAAXwAKii2xysAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        });
    },
    1546: function (e, t, A) {
      "use strict";
      A.r(t),
        (t.default = {
          src: "/_next/static/media/buttonBg.24b7272a.png",
          height: 58,
          width: 150,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAElBMVEVlnBJhlxFlmhVjmRJekw5UigJDhLr7AAAABXRSTlPz+q3+rznSZoYAAAAJcEhZcwAABYkAAAWJAW1onfoAAAAdSURBVHicHcGBDQAACMKwDfT/l01sSVUb2AdTAHMDJAA3pqPuMAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    5332: function (e, t, A) {
      "use strict";
      A.r(t),
        (t.default = {
          src: "/_next/static/media/buttonBgRed.80e8dfb6.png",
          height: 75,
          width: 195,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAElBMVEWxAAClAADAAACyAACGAAB+AACHgl/QAAAAA3RSTlO4urmdrCZsAAAACXBIWXMAAAWJAAAFiQFtaJ36AAAAGUlEQVR4nGNgYAYDJgZmFhBgZWZghIgwAAADzwBH6K6QgAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    1808: function (e, t, A) {
      "use strict";
      A.r(t),
        (t.default = {
          src: "/_next/static/media/buttonBgXxl.ce4dc5b7.png",
          height: 75,
          width: 195,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAFVBMVEX/jSz/hhz/hh//jSb/dwD/eAH/cwBudqbvAAAAA3RSTlO4uv51FPJfAAAACXBIWXMAAAWJAAAFiQFtaJ36AAAAHElEQVR4nB3BgREAEAwAsSfsv7LTpNgo57taRg8DkgBEW2ATKQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    906: function (e, t, A) {
      "use strict";
      A.r(t),
        (t.default = {
          src: "/_next/static/media/dirt.195ee92c.png",
          height: 138,
          width: 3175,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAACVBMVEVVJgtWJwxWJw2pHelOAAAAA3RSTlPH49XtfMJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAADUlEQVR4nGNgYmAEQwAAJQAG2xyusQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 1,
        });
    },
    3962: function (e, t, A) {
      "use strict";
      A.r(t),
        (t.default = {
          src: "/_next/static/media/grass2.d448c8bd.png",
          height: 94,
          width: 3175,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEUshVMpcUkqe04pdEstQxEgAAAABHRSTlPgrs2+5IdgQAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABFJREFUeJxjYGJgYGRmYGAEAAArAAgqJblVAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 1,
        });
    },
    4894: function (e, t, A) {
      "use strict";
      A.r(t),
        (t.default = {
          src: "/_next/static/media/thogBurn.59d5f5cf.png",
          height: 552,
          width: 554,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEVkJABGHRZ+LQBcNhtPHAZXHACCLABxJQBWIQdcHwDNUyA9MSRPh1t/aUmTgl8UMTYTMTtFLBpvQQsxqnKJAAAACXRSTlP+////////8faOaRb2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nCXIWxKAIAzF0BR6KQV87n+xjpqvM8FTkrJDYU5KQPPj9B9m1gLuawy9Z61ajSD3zdUJPL/6AzPIAY1GF683AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    2812: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__karmaticArcade_416de4', '__karmaticArcade_Fallback_416de4'",
        },
        className: "__className_416de4",
      };
    },
  },
  function (e) {
    e.O(0, [864, 159, 971, 23, 744], function () {
      return e((e.s = 6589));
    }),
      (_N_E = e.O());
  },
]);
