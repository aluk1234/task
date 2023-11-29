/*!
 * Quasar Framework v2.7.7
 * (c) 2015-present Razvan Stoenescu
 * Released under the MIT License.
 */
(function(e, t) {
    "object" === typeof exports && "undefined" !== typeof module ? module.exports = t(require("vue")) : "function" === typeof define && define.amd ? define(["vue"], t) : (e = "undefined" !== typeof globalThis ? globalThis : e || self,
    e.Quasar = t(e.Vue))
}
)(this, function(e) {
    "use strict";
    function t(e, t, o, n) {
        Object.defineProperty(e, t, {
            get: o,
            set: n,
            enumerable: !0
        })
    }
    function o(e, o) {
        for (const n in o)
            t(e, n, o[n])
    }
    const n = e.ref(!1);
    let a;
    function l(e, t) {
        const o = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
        return {
            browser: o[5] || o[3] || o[1] || "",
            version: o[2] || o[4] || "0",
            versionNumber: o[4] || o[2] || "0",
            platform: t[0] || ""
        }
    }
    function i(e) {
        return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || []
    }
    const r = "ontouchstart"in window || window.navigator.maxTouchPoints > 0;
    function s(e) {
        a = {
            is: {
                ...e
            }
        },
        delete e.mac,
        delete e.desktop;
        const t = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
        Object.assign(e, {
            mobile: !0,
            ios: !0,
            platform: t,
            [t]: !0
        })
    }
    function u(e) {
        const t = e.toLowerCase()
          , o = i(t)
          , n = l(t, o)
          , a = {};
        n.browser && (a[n.browser] = !0,
        a.version = n.version,
        a.versionNumber = parseInt(n.versionNumber, 10)),
        n.platform && (a[n.platform] = !0);
        const u = a.android || a.ios || a.bb || a.blackberry || a.ipad || a.iphone || a.ipod || a.kindle || a.playbook || a.silk || a["windows phone"];
        return !0 === u || t.indexOf("mobile") > -1 ? (a.mobile = !0,
        a.edga || a.edgios ? (a.edge = !0,
        n.browser = "edge") : a.crios ? (a.chrome = !0,
        n.browser = "chrome") : a.fxios && (a.firefox = !0,
        n.browser = "firefox")) : a.desktop = !0,
        (a.ipod || a.ipad || a.iphone) && (a.ios = !0),
        a["windows phone"] && (a.winphone = !0,
        delete a["windows phone"]),
        (a.chrome || a.opr || a.safari || a.vivaldi || !0 === a.mobile && !0 !== a.ios && !0 !== u) && (a.webkit = !0),
        a.edg && (n.browser = "edgechromium",
        a.edgeChromium = !0),
        (a.safari && a.blackberry || a.bb) && (n.browser = "blackberry",
        a.blackberry = !0),
        a.safari && a.playbook && (n.browser = "playbook",
        a.playbook = !0),
        a.opr && (n.browser = "opera",
        a.opera = !0),
        a.safari && a.android && (n.browser = "android",
        a.android = !0),
        a.safari && a.kindle && (n.browser = "kindle",
        a.kindle = !0),
        a.safari && a.silk && (n.browser = "silk",
        a.silk = !0),
        a.vivaldi && (n.browser = "vivaldi",
        a.vivaldi = !0),
        a.name = n.browser,
        a.platform = n.platform,
        t.indexOf("electron") > -1 ? a.electron = !0 : document.location.href.indexOf("-extension://") > -1 ? a.bex = !0 : (void 0 !== window.Capacitor ? (a.capacitor = !0,
        a.nativeMobile = !0,
        a.nativeMobileWrapper = "capacitor") : void 0 === window._cordovaNative && void 0 === window.cordova || (a.cordova = !0,
        a.nativeMobile = !0,
        a.nativeMobileWrapper = "cordova"),
        !0 === r && !0 === a.mac && (!0 === a.desktop && !0 === a.safari || !0 === a.nativeMobile && !0 !== a.android && !0 !== a.ios && !0 !== a.ipad) && s(a)),
        a
    }
    const c = navigator.userAgent || navigator.vendor || window.opera
      , d = {
        has: {
            touch: !1,
            webStorage: !1
        },
        within: {
            iframe: !1
        }
    }
      , v = {
        userAgent: c,
        is: u(c),
        has: {
            touch: r
        },
        within: {
            iframe: window.self !== window.top
        }
    }
      , p = {
        install(t) {
            const {$q: o} = t;
            !0 === n.value ? (t.onSSRHydrated.push(()=>{
                n.value = !1,
                Object.assign(o.platform, v),
                a = void 0
            }
            ),
            o.platform = e.reactive(this)) : o.platform = this
        }
    };
    {
        let e;
        t(v.has, "webStorage", ()=>{
            if (void 0 !== e)
                return e;
            try {
                if (window.localStorage)
                    return e = !0,
                    !0
            } catch (e) {}
            return e = !1,
            !1
        }
        ),
        !0 === v.is.ios && window.navigator.vendor.toLowerCase().indexOf("apple"),
        !0 === n.value ? Object.assign(p, v, a, d) : Object.assign(p, v)
    }
    var m = (o,n)=>{
        const a = e.reactive(o);
        for (const e in o)
            t(n, e, ()=>a[e], t=>{
                a[e] = t
            }
            );
        return n
    }
    ;
    const f = {
        hasPassive: !1,
        passiveCapture: !0,
        notPassiveCapture: !0
    };
    try {
        const e = Object.defineProperty({}, "passive", {
            get() {
                Object.assign(f, {
                    hasPassive: !0,
                    passive: {
                        passive: !0
                    },
                    notPassive: {
                        passive: !1
                    },
                    passiveCapture: {
                        passive: !0,
                        capture: !0
                    },
                    notPassiveCapture: {
                        passive: !1,
                        capture: !0
                    }
                })
            }
        });
        window.addEventListener("qtest", null, e),
        window.removeEventListener("qtest", null, e)
    } catch (e) {}
    function h() {}
    function g(e) {
        return 0 === e.button
    }
    function b(e) {
        return 1 === e.button
    }
    function y(e) {
        return 2 === e.button
    }
    function w(e) {
        return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
        {
            top: e.clientY,
            left: e.clientX
        }
    }
    function x(e) {
        if (e.path)
            return e.path;
        if (e.composedPath)
            return e.composedPath();
        const t = [];
        let o = e.target;
        while (o) {
            if (t.push(o),
            "HTML" === o.tagName)
                return t.push(document),
                t.push(window),
                t;
            o = o.parentElement
        }
    }
    const _ = 40
      , S = 800;
    function k(e) {
        let t = e.deltaX
          , o = e.deltaY;
        if ((t || o) && e.deltaMode) {
            const n = 1 === e.deltaMode ? _ : S;
            t *= n,
            o *= n
        }
        return e.shiftKey && !t && ([o,t] = [t, o]),
        {
            x: t,
            y: o
        }
    }
    function C(e) {
        e.stopPropagation()
    }
    function q(e) {
        !1 !== e.cancelable && e.preventDefault()
    }
    function $(e) {
        !1 !== e.cancelable && e.preventDefault(),
        e.stopPropagation()
    }
    function M(e, t) {
        if (void 0 === e || !0 === t && !0 === e.__dragPrevented)
            return;
        const o = !0 === t ? e=>{
            e.__dragPrevented = !0,
            e.addEventListener("dragstart", q, f.notPassiveCapture)
        }
        : e=>{
            delete e.__dragPrevented,
            e.removeEventListener("dragstart", q, f.notPassiveCapture)
        }
        ;
        e.querySelectorAll("a, img").forEach(o)
    }
    function T(e, t, o) {
        const n = `__q_ ${t}_evt`;
        e[n] = void 0 !== e[n] ? e[n].concat(o) : o,
        o.forEach(t=>{
            t[0].addEventListener(t[1], e[t[2]], f[t[3]])
        }
        )
    }
    function B(e, t) {
        const o = `__q_ ${t}_evt`;
        void 0 !== e[o] && (e[o].forEach(t=>{
            t[0].removeEventListener(t[1], e[t[2]], f[t[3]])
        }
        ),
        e[o] = void 0)
    }
    var z = {
        listenOpts: f,
        leftClick: g,
        middleClick: b,
        rightClick: y,
        position: w,
        getEventPath: x,
        getMouseWheelDistance: k,
        stop: C,
        prevent: q,
        stopAndPrevent: $,
        preventDraggable: M
    };
    function O(e, t=250, o) {
        let n;
        function a() {
            const a = arguments
              , l = ()=>{
                n = void 0,
                !0 !== o && e.apply(this, a)
            }
            ;
            clearTimeout(n),
            !0 === o && void 0 === n && e.apply(this, a),
            n = setTimeout(l, t)
        }
        return a.cancel = (()=>{
            clearTimeout(n)
        }
        ),
        a
    }
    const V = ["sm", "md", "lg", "xl"]
      , {passive: L} = f;
    var E = m({
        width: 0,
        height: 0,
        name: "xs",
        sizes: {
            sm: 600,
            md: 1024,
            lg: 1440,
            xl: 1920
        },
        lt: {
            sm: !0,
            md: !0,
            lg: !0,
            xl: !0
        },
        gt: {
            xs: !1,
            sm: !1,
            md: !1,
            lg: !1
        },
        xs: !0,
        sm: !1,
        md: !1,
        lg: !1,
        xl: !1
    }, {
        setSizes: h,
        setDebounce: h,
        install({$q: e, onSSRHydrated: t}) {
            if (e.screen = this,
            !0 === this.__installed)
                return void (void 0 !== e.config.screen && (!1 === e.config.screen.bodyClasses ? document.body.classList.remove(`screen--${this.name}`) : this.__update(!0)));
            const {visualViewport: o} = window
              , a = o || window
              , l = document.scrollingElement || document.documentElement
              , i = void 0 === o || !0 === v.is.mobile ? ()=>[Math.max(window.innerWidth, l.clientWidth), Math.max(window.innerHeight, l.clientHeight)] : ()=>[o.width * o.scale + window.innerWidth - l.clientWidth, o.height * o.scale + window.innerHeight - l.clientHeight]
              , r = void 0 !== e.config.screen && !0 === e.config.screen.bodyClasses;
            this.__update = (e=>{
                const [t,o] = i();
                if (o !== this.height && (this.height = o),
                t !== this.width)
                    this.width = t;
                else if (!0 !== e)
                    return;
                let n = this.sizes;
                this.gt.xs = t >= n.sm,
                this.gt.sm = t >= n.md,
                this.gt.md = t >= n.lg,
                this.gt.lg = t >= n.xl,
                this.lt.sm = t < n.sm,
                this.lt.md = t < n.md,
                this.lt.lg = t < n.lg,
                this.lt.xl = t < n.xl,
                this.xs = this.lt.sm,
                this.sm = !0 === this.gt.xs && !0 === this.lt.md,
                this.md = !0 === this.gt.sm && !0 === this.lt.lg,
                this.lg = !0 === this.gt.md && !0 === this.lt.xl,
                this.xl = this.gt.lg,
                n = (!0 === this.xs ? "xs" : !0 === this.sm && "sm") || !0 === this.md && "md" || !0 === this.lg && "lg" || "xl",
                n !== this.name && (!0 === r && (document.body.classList.remove(`screen--${this.name}`),
                document.body.classList.add(`screen--${n}`)),
                this.name = n)
            }
            );
            let s, u = {}, c = 16;
            this.setSizes = (e=>{
                V.forEach(t=>{
                    void 0 !== e[t] && (u[t] = e[t])
                }
                )
            }
            ),
            this.setDebounce = (e=>{
                c = e
            }
            );
            const d = ()=>{
                const e = getComputedStyle(document.body);
                e.getPropertyValue("--q-size-sm") && V.forEach(t=>{
                    this.sizes[t] = parseInt(e.getPropertyValue(`--q-size-${t}`), 10)
                }
                ),
                this.setSizes = (e=>{
                    V.forEach(t=>{
                        e[t] && (this.sizes[t] = e[t])
                    }
                    ),
                    this.__update(!0)
                }
                ),
                this.setDebounce = (e=>{
                    void 0 !== s && a.removeEventListener("resize", s, L),
                    s = e > 0 ? O(this.__update, e) : this.__update,
                    a.addEventListener("resize", s, L)
                }
                ),
                this.setDebounce(c),
                Object.keys(u).length > 0 ? (this.setSizes(u),
                u = void 0) : this.__update(),
                !0 === r && "xs" === this.name && document.body.classList.add("screen--xs")
            }
            ;
            !0 === n.value ? t.push(d) : d()
        }
    });
    const A = m({
        isActive: !1,
        mode: !1
    }, {
        __media: void 0,
        set(e) {
            A.mode = e,
            "auto" === e ? (void 0 === A.__media && (A.__media = window.matchMedia("(prefers-color-scheme: dark)"),
            A.__updateMedia = (()=>{
                A.set("auto")
            }
            ),
            A.__media.addListener(A.__updateMedia)),
            e = A.__media.matches) : void 0 !== A.__media && (A.__media.removeListener(A.__updateMedia),
            A.__media = void 0),
            A.isActive = !0 === e,
            document.body.classList.remove(`body--${!0 === e ? "light" : "dark"}`),
            document.body.classList.add(`body--${!0 === e ? "dark" : "light"}`)
        },
        toggle() {
            A.set(!1 === A.isActive)
        },
        install({$q: e, onSSRHydrated: t, ssrContext: o}) {
            const {dark: a} = e.config;
            if (e.dark = this,
            !0 === this.__installed && void 0 === a)
                return;
            this.isActive = !0 === a;
            const l = void 0 !== a && a;
            if (!0 === n.value) {
                const e = e=>{
                    this.__fromSSR = e
                }
                  , o = this.set;
                this.set = e,
                e(l),
                t.push(()=>{
                    this.set = o,
                    this.set(this.__fromSSR)
                }
                )
            } else
                this.set(l)
        }
    })
      , P = ()=>!0;
    function R(e) {
        return "string" === typeof e && "" !== e && "/" !== e && "#/" !== e
    }
    function F(e) {
        return !0 === e.startsWith("#") && (e = e.substring(1)),
        !1 === e.startsWith("/") && (e = "/" + e),
        !0 === e.endsWith("/") && (e = e.substring(0, e.length - 1)),
        "#" + e
    }
    function I(e) {
        if (!1 === e.backButtonExit)
            return ()=>!1;
        if ("*" === e.backButtonExit)
            return P;
        const t = ["#/"];
        return !0 === Array.isArray(e.backButtonExit) && t.push(...e.backButtonExit.filter(R).map(F)),
        ()=>t.includes(window.location.hash)
    }
    var N = {
        __history: [],
        add: h,
        remove: h,
        install({$q: e}) {
            if (!0 === this.__installed)
                return;
            const {cordova: t, capacitor: o} = v.is;
            if (!0 !== t && !0 !== o)
                return;
            const n = e.config[!0 === t ? "cordova" : "capacitor"];
            if (void 0 !== n && !1 === n.backButton)
                return;
            if (!0 === o && (void 0 === window.Capacitor || void 0 === window.Capacitor.Plugins.App))
                return;
            this.add = (e=>{
                void 0 === e.condition && (e.condition = P),
                this.__history.push(e)
            }
            ),
            this.remove = (e=>{
                const t = this.__history.indexOf(e);
                t >= 0 && this.__history.splice(t, 1)
            }
            );
            const a = I(Object.assign({
                backButtonExit: !0
            }, n))
              , l = ()=>{
                if (this.__history.length) {
                    const e = this.__history[this.__history.length - 1];
                    !0 === e.condition() && (this.__history.pop(),
                    e.handler())
                } else
                    !0 === a() ? navigator.app.exitApp() : window.history.back()
            }
            ;
            !0 === t ? document.addEventListener("deviceready", ()=>{
                document.addEventListener("backbutton", l, !1)
            }
            ) : window.Capacitor.Plugins.App.addListener("backButton", l)
        }
    }
      , j = {
        isoName: "en-US",
        nativeName: "English (US)",
        label: {
            clear: "Clear",
            ok: "OK",
            cancel: "Cancel",
            close: "Close",
            set: "Set",
            select: "Select",
            reset: "Reset",
            remove: "Remove",
            update: "Update",
            create: "Create",
            search: "Search",
            filter: "Filter",
            refresh: "Refresh"
        },
        date: {
            days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            firstDayOfWeek: 0,
            format24h: !1,
            pluralDay: "days"
        },
        table: {
            noData: "No data available",
            noResults: "No matching records found",
            loading: "Loading...",
            selectedRecords: e=>1 === e ? "1 record selected." : (0 === e ? "No" : e) + " records selected.",
            recordsPerPage: "Records per page:",
            allRows: "All",
            pagination: (e,t,o)=>e + "-" + t + " of " + o,
            columns: "Columns"
        },
        editor: {
            url: "URL",
            bold: "Bold",
            italic: "Italic",
            strikethrough: "Strikethrough",
            underline: "Underline",
            unorderedList: "Unordered List",
            orderedList: "Ordered List",
            subscript: "Subscript",
            superscript: "Superscript",
            hyperlink: "Hyperlink",
            toggleFullscreen: "Toggle Fullscreen",
            quote: "Quote",
            left: "Left align",
            center: "Center align",
            right: "Right align",
            justify: "Justify align",
            print: "Print",
            outdent: "Decrease indentation",
            indent: "Increase indentation",
            removeFormat: "Remove formatting",
            formatting: "Formatting",
            fontSize: "Font Size",
            align: "Align",
            hr: "Insert Horizontal Rule",
            undo: "Undo",
            redo: "Redo",
            heading1: "Heading 1",
            heading2: "Heading 2",
            heading3: "Heading 3",
            heading4: "Heading 4",
            heading5: "Heading 5",
            heading6: "Heading 6",
            paragraph: "Paragraph",
            code: "Code",
            size1: "Very small",
            size2: "A bit small",
            size3: "Normal",
            size4: "Medium-large",
            size5: "Big",
            size6: "Very big",
            size7: "Maximum",
            defaultFont: "Default Font",
            viewSource: "View Source"
        },
        tree: {
            noNodes: "No nodes available",
            noResults: "No matching nodes found"
        }
    };
    function D() {
        const e = !0 === Array.isArray(navigator.languages) && navigator.languages.length > 0 ? navigator.languages[0] : navigator.language;
        if ("string" === typeof e)
            return e.split(/[-_]/).map((e,t)=>0 === t ? e.toLowerCase() : t > 1 || e.length < 4 ? e.toUpperCase() : e[0].toUpperCase() + e.slice(1).toLowerCase()).join("-")
    }
    const H = m({
        __langPack: {}
    }, {
        getLocale: D,
        set(e=j, t) {
            const o = {
                ...e,
                rtl: !0 === e.rtl,
                getLocale: D
            };
            {
                const e = document.documentElement;
                e.setAttribute("dir", !0 === o.rtl ? "rtl" : "ltr"),
                e.setAttribute("lang", o.isoName),
                o.set = H.set,
                Object.assign(H.__langPack, o),
                H.props = o,
                H.isoName = o.isoName,
                H.nativeName = o.nativeName
            }
        },
        install({$q: e, lang: t, ssrContext: o}) {
            e.lang = H.__langPack,
            !0 === this.__installed ? void 0 !== t && this.set(t) : this.set(t || j)
        }
    });
    function Q(e, t, o=document.body) {
        if ("string" !== typeof e)
            throw new TypeError("Expected a string as propName");
        if ("string" !== typeof t)
            throw new TypeError("Expected a string as value");
        if (!(o instanceof Element))
            throw new TypeError("Expected a DOM element");
        o.style.setProperty(`--q-${e}`, t)
    }
    let U = !1;
    function W(e) {
        U = !0 === e.isComposing
    }
    function Y(e) {
        return !0 === U || e !== Object(e) || !0 === e.isComposing || !0 === e.qKeyEvent
    }
    function K(e, t) {
        return !0 !== Y(e) && [].concat(t).includes(e.keyCode)
    }
    function X(e) {
        return !0 === e.ios ? "ios" : !0 === e.android ? "android" : void 0
    }
    function Z({is: e, has: t, within: o}, n) {
        const a = [!0 === e.desktop ? "desktop" : "mobile", `${!1 === t.touch ? "no-" : ""}touch`];
        if (!0 === e.mobile) {
            const t = X(e);
            void 0 !== t && a.push("platform-" + t)
        }
        if (!0 === e.nativeMobile) {
            const t = e.nativeMobileWrapper;
            a.push(t),
            a.push("native-mobile"),
            !0 !== e.ios || void 0 !== n[t] && !1 === n[t].iosStatusBarPadding || a.push("q-ios-padding")
        } else
            !0 === e.electron ? a.push("electron") : !0 === e.bex && a.push("bex");
        return !0 === o.iframe && a.push("within-iframe"),
        a
    }
    function G() {
        const e = document.body.className;
        let t = e;
        void 0 !== a && (t = t.replace("desktop", "platform-ios mobile")),
        !0 === v.has.touch && (t = t.replace("no-touch", "touch")),
        !0 === v.within.iframe && (t += " within-iframe"),
        e !== t && (document.body.className = t)
    }
    function J(e) {
        for (const t in e)
            Q(t, e[t])
    }
    var ee = {
        install(e) {
            if (!0 !== this.__installed) {
                if (!0 === n.value)
                    G();
                else {
                    const {$q: t} = e;
                    void 0 !== t.config.brand && J(t.config.brand);
                    const o = Z(v, t.config);
                    document.body.classList.add.apply(document.body.classList, o)
                }
                !0 === v.is.ios && document.body.addEventListener("touchstart", h),
                window.addEventListener("keydown", W, !0)
            }
        }
    }
      , te = {
        name: "material-icons",
        type: {
            positive: "check_circle",
            negative: "warning",
            info: "info",
            warning: "priority_high"
        },
        arrow: {
            up: "arrow_upward",
            right: "arrow_forward",
            down: "arrow_downward",
            left: "arrow_back",
            dropdown: "arrow_drop_down"
        },
        chevron: {
            left: "chevron_left",
            right: "chevron_right"
        },
        colorPicker: {
            spectrum: "gradient",
            tune: "tune",
            palette: "style"
        },
        pullToRefresh: {
            icon: "refresh"
        },
        carousel: {
            left: "chevron_left",
            right: "chevron_right",
            up: "keyboard_arrow_up",
            down: "keyboard_arrow_down",
            navigationIcon: "lens"
        },
        chip: {
            remove: "cancel",
            selected: "check"
        },
        datetime: {
            arrowLeft: "chevron_left",
            arrowRight: "chevron_right",
            now: "access_time",
            today: "today"
        },
        editor: {
            bold: "format_bold",
            italic: "format_italic",
            strikethrough: "strikethrough_s",
            underline: "format_underlined",
            unorderedList: "format_list_bulleted",
            orderedList: "format_list_numbered",
            subscript: "vertical_align_bottom",
            superscript: "vertical_align_top",
            hyperlink: "link",
            toggleFullscreen: "fullscreen",
            quote: "format_quote",
            left: "format_align_left",
            center: "format_align_center",
            right: "format_align_right",
            justify: "format_align_justify",
            print: "print",
            outdent: "format_indent_decrease",
            indent: "format_indent_increase",
            removeFormat: "format_clear",
            formatting: "text_format",
            fontSize: "format_size",
            align: "format_align_left",
            hr: "remove",
            undo: "undo",
            redo: "redo",
            heading: "format_size",
            code: "code",
            size: "format_size",
            font: "font_download",
            viewSource: "code"
        },
        expansionItem: {
            icon: "keyboard_arrow_down",
            denseIcon: "arrow_drop_down"
        },
        fab: {
            icon: "add",
            activeIcon: "close"
        },
        field: {
            clear: "cancel",
            error: "error"
        },
        pagination: {
            first: "first_page",
            prev: "keyboard_arrow_left",
            next: "keyboard_arrow_right",
            last: "last_page"
        },
        rating: {
            icon: "grade"
        },
        stepper: {
            done: "check",
            active: "edit",
            error: "warning"
        },
        tabs: {
            left: "chevron_left",
            right: "chevron_right",
            up: "keyboard_arrow_up",
            down: "keyboard_arrow_down"
        },
        table: {
            arrowUp: "arrow_upward",
            warning: "warning",
            firstPage: "first_page",
            prevPage: "chevron_left",
            nextPage: "chevron_right",
            lastPage: "last_page"
        },
        tree: {
            icon: "play_arrow"
        },
        uploader: {
            done: "done",
            clear: "clear",
            add: "add_box",
            upload: "cloud_upload",
            removeQueue: "clear_all",
            removeUploaded: "done_all"
        }
    };
    const oe = m({
        iconMapFn: null,
        __icons: {}
    }, {
        set(e, t) {
            const o = {
                ...e,
                rtl: !0 === e.rtl
            };
            o.set = oe.set,
            Object.assign(oe.__icons, o)
        },
        install({$q: e, iconSet: o, ssrContext: n}) {
            void 0 !== e.config.iconMapFn && (this.iconMapFn = e.config.iconMapFn),
            e.iconSet = this.__icons,
            t(e, "iconMapFn", ()=>this.iconMapFn, e=>{
                this.iconMapFn = e
            }
            ),
            !0 === this.__installed ? void 0 !== o && this.set(o) : this.set(o || te)
        }
    })
      , ne = "_q_"
      , ae = "_q_t_"
      , le = "_q_s_"
      , ie = "_q_l_"
      , re = "_q_pc_"
      , se = "_q_f_"
      , ue = "_q_fo_"
      , ce = "_q_tabs_"
      , de = "_q_u_"
      , ve = {};
    let pe = !1;
    function me() {
        pe = !0
    }
    const fe = "function" === typeof Map
      , he = "function" === typeof Set
      , ge = "function" === typeof ArrayBuffer;
    function be(e, t) {
        if (e === t)
            return !0;
        if (null !== e && null !== t && "object" === typeof e && "object" === typeof t) {
            if (e.constructor !== t.constructor)
                return !1;
            let o, n;
            if (e.constructor === Array) {
                if (o = e.length,
                o !== t.length)
                    return !1;
                for (n = o; 0 !== n--; )
                    if (!0 !== be(e[n], t[n]))
                        return !1;
                return !0
            }
            if (!0 === fe && e.constructor === Map) {
                if (e.size !== t.size)
                    return !1;
                n = e.entries().next();
                while (!0 !== n.done) {
                    if (!0 !== t.has(n.value[0]))
                        return !1;
                    n = n.next()
                }
                n = e.entries().next();
                while (!0 !== n.done) {
                    if (!0 !== be(n.value[1], t.get(n.value[0])))
                        return !1;
                    n = n.next()
                }
                return !0
            }
            if (!0 === he && e.constructor === Set) {
                if (e.size !== t.size)
                    return !1;
                n = e.entries().next();
                while (!0 !== n.done) {
                    if (!0 !== t.has(n.value[0]))
                        return !1;
                    n = n.next()
                }
                return !0
            }
            if (!0 === ge && null != e.buffer && e.buffer.constructor === ArrayBuffer) {
                if (o = e.length,
                o !== t.length)
                    return !1;
                for (n = o; 0 !== n--; )
                    if (e[n] !== t[n])
                        return !1;
                return !0
            }
            if (e.constructor === RegExp)
                return e.source === t.source && e.flags === t.flags;
            if (e.valueOf !== Object.prototype.valueOf)
                return e.valueOf() === t.valueOf();
            if (e.toString !== Object.prototype.toString)
                return e.toString() === t.toString();
            const a = Object.keys(e).filter(t=>void 0 !== e[t]);
            if (o = a.length,
            o !== Object.keys(t).filter(e=>void 0 !== t[e]).length)
                return !1;
            for (n = o; 0 !== n--; ) {
                const o = a[n];
                if (!0 !== be(e[o], t[o]))
                    return !1
            }
            return !0
        }
        return e !== e && t !== t
    }
    function ye(e) {
        return null !== e && "object" === typeof e && !0 !== Array.isArray(e)
    }
    function we(e) {
        return "[object Date]" === Object.prototype.toString.call(e)
    }
    function xe(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e)
    }
    function _e(e) {
        return "number" === typeof e && isFinite(e)
    }
    const Se = [p, ee, A, E, N, H, oe];
    function ke(t, o) {
        const n = e.createApp(t);
        n.config.globalProperties = o.config.globalProperties;
        const {reload: a, ...l} = o._context;
        return Object.assign(n._context, l),
        n
    }
    function Ce(e, t) {
        t.forEach(t=>{
            t.install(e),
            t.__installed = !0
        }
        )
    }
    function qe(e, t, o) {
        e.config.globalProperties.$q = o.$q,
        e.provide(ne, o.$q),
        Ce(o, Se),
        void 0 !== t.components && Object.values(t.components).forEach(t=>{
            !0 === ye(t) && void 0 !== t.name && e.component(t.name, t)
        }
        ),
        void 0 !== t.directives && Object.values(t.directives).forEach(t=>{
            !0 === ye(t) && void 0 !== t.name && e.directive(t.name, t)
        }
        ),
        void 0 !== t.plugins && Ce(o, Object.values(t.plugins).filter(e=>"function" === typeof e.install && !1 === Se.includes(e))),
        !0 === n.value && (o.$q.onSSRHydrated = (()=>{
            o.onSSRHydrated.forEach(e=>{
                e()
            }
            ),
            o.$q.onSSRHydrated = (()=>{}
            )
        }
        ))
    }
    var $e = function(e, t={}) {
        const o = {
            version: "2.7.7"
        };
        !1 === pe ? (void 0 !== t.config && Object.assign(ve, t.config),
        o.config = {
            ...ve
        },
        me()) : o.config = t.config || {},
        qe(e, t, {
            parentApp: e,
            $q: o,
            lang: t.lang,
            iconSet: t.iconSet,
            onSSRHydrated: []
        })
    };
    const Me = t=>e.markRaw(e.defineComponent(t))
      , Te = t=>e.markRaw(t)
      , Be = ["B", "KB", "MB", "GB", "TB", "PB"];
    function ze(e) {
        let t = 0;
        while (parseInt(e, 10) >= 1024 && t < Be.length - 1)
            e /= 1024,
            ++t;
        return `${e.toFixed(1)}${Be[t]}`
    }
    function Oe(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    function Ve(e, t, o) {
        return o <= t ? t : Math.min(o, Math.max(t, e))
    }
    function Le(e, t, o) {
        if (o <= t)
            return t;
        const n = o - t + 1;
        let a = t + (e - t) % n;
        return a < t && (a = n + a),
        0 === a ? 0 : a
    }
    function Ee(e, t=2, o="0") {
        if (void 0 === e || null === e)
            return e;
        const n = "" + e;
        return n.length >= t ? n : new Array(t - n.length + 1).join(o) + n
    }
    var Ae = {
        humanStorageSize: ze,
        capitalize: Oe,
        between: Ve,
        normalizeToInterval: Le,
        pad: Ee
    };
    const Pe = XMLHttpRequest
      , Re = Pe.prototype.open
      , Fe = ["top", "right", "bottom", "left"];
    let Ie = []
      , Ne = 0;
    function je({p: e, pos: t, active: o, horiz: n, reverse: a, dir: l}) {
        let i = 1
          , r = 1;
        return !0 === n ? (!0 === a && (i = -1),
        "bottom" === t && (r = -1),
        {
            transform: `translate3d(${i * (e - 100)}%,${o ? 0 : -200 * r}%,0)`
        }) : (!0 === a && (r = -1),
        "right" === t && (i = -1),
        {
            transform: `translate3d(${o ? 0 : l * i * -200}%,${r * (e - 100)}%,0)`
        })
    }
    function De(e, t) {
        return "number" !== typeof t && (t = e < 25 ? 3 * Math.random() + 3 : e < 65 ? 3 * Math.random() : e < 85 ? 2 * Math.random() : e < 99 ? .6 : 0),
        Ve(e + t, 0, 100)
    }
    function He(e) {
        Ne++,
        Ie.push(e),
        Ne > 1 || (Pe.prototype.open = function(e, t) {
            const o = []
              , n = ()=>{
                Ie.forEach(e=>{
                    null !== e.hijackFilter.value && !0 !== e.hijackFilter.value(t) || (e.start(),
                    o.push(e.stop))
                }
                )
            }
              , a = ()=>{
                o.forEach(e=>{
                    e()
                }
                )
            }
            ;
            this.addEventListener("loadstart", n, {
                once: !0
            }),
            this.addEventListener("loadend", a, {
                once: !0
            }),
            Re.apply(this, arguments)
        }
        )
    }
    function Qe(e) {
        Ie = Ie.filter(t=>t.start !== e),
        Ne = Math.max(0, Ne - 1),
        0 === Ne && (Pe.prototype.open = Re)
    }
    var Ue = Me({
        name: "QAjaxBar",
        props: {
            position: {
                type: String,
                default: "top",
                validator: e=>Fe.includes(e)
            },
            size: {
                type: String,
                default: "2px"
            },
            color: String,
            skipHijack: Boolean,
            reverse: Boolean,
            hijackFilter: Function
        },
        emits: ["start", "stop"],
        setup(t, {emit: o}) {
            const {proxy: n} = e.getCurrentInstance()
              , a = e.ref(0)
              , l = e.ref(!1)
              , i = e.ref(!0);
            let r, s, u = 0;
            const c = e.computed(()=>`q-loading-bar q-loading-bar--${t.position}` + (void 0 !== t.color ? ` bg-${t.color}` : "") + (!0 === i.value ? "" : " no-transition"))
              , d = e.computed(()=>"top" === t.position || "bottom" === t.position)
              , v = e.computed(()=>!0 === d.value ? "height" : "width")
              , p = e.computed(()=>{
                const e = l.value
                  , o = je({
                    p: a.value,
                    pos: t.position,
                    active: e,
                    horiz: d.value,
                    reverse: !0 === n.$q.lang.rtl && ["top", "bottom"].includes(t.position) ? !1 === t.reverse : t.reverse,
                    dir: !0 === n.$q.lang.rtl ? -1 : 1
                });
                return o[v.value] = t.size,
                o.opacity = e ? 1 : 0,
                o
            }
            )
              , m = e.computed(()=>!0 === l.value ? {
                role: "progressbar",
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": a.value
            } : {
                "aria-hidden": "true"
            });
            function f(e=300) {
                const t = s;
                return s = Math.max(0, e) || 0,
                u++,
                u > 1 ? (0 === t && e > 0 ? b() : t > 0 && e <= 0 && clearTimeout(r),
                u) : (clearTimeout(r),
                o("start"),
                a.value = 0,
                r = setTimeout(()=>{
                    i.value = !0,
                    e > 0 && b()
                }
                , !0 === l.value ? 500 : 1),
                !0 !== l.value && (l.value = !0,
                i.value = !1),
                u)
            }
            function h(e) {
                return u > 0 && (a.value = De(a.value, e)),
                u
            }
            function g() {
                if (u = Math.max(0, u - 1),
                u > 0)
                    return u;
                clearTimeout(r),
                o("stop");
                const e = ()=>{
                    i.value = !0,
                    a.value = 100,
                    r = setTimeout(()=>{
                        l.value = !1
                    }
                    , 1e3)
                }
                ;
                return 0 === a.value ? r = setTimeout(e, 1) : e(),
                u
            }
            function b() {
                a.value < 100 && (r = setTimeout(()=>{
                    h(),
                    b()
                }
                , s))
            }
            let y;
            return e.onMounted(()=>{
                !0 !== t.skipHijack && (y = !0,
                He({
                    start: f,
                    stop: g,
                    hijackFilter: e.computed(()=>t.hijackFilter || null)
                }))
            }
            ),
            e.onBeforeUnmount(()=>{
                clearTimeout(r),
                !0 === y && Qe(f)
            }
            ),
            Object.assign(n, {
                start: f,
                stop: g,
                increment: h
            }),
            ()=>e.h("div", {
                class: c.value,
                style: p.value,
                ...m.value
            })
        }
    });
    const We = {
        xs: 18,
        sm: 24,
        md: 32,
        lg: 38,
        xl: 46
    }
      , Ye = {
        size: String
    };
    function Ke(t, o=We) {
        return e.computed(()=>void 0 !== t.size ? {
            fontSize: t.size in o ? `${o[t.size]}px` : t.size
        } : null)
    }
    function Xe(e, t) {
        return void 0 !== e && e() || t
    }
    function Ze(e, t) {
        if (void 0 !== e) {
            const t = e();
            if (void 0 !== t && null !== t)
                return t.slice()
        }
        return t
    }
    function Ge(e, t) {
        return void 0 !== e ? t.concat(e()) : t
    }
    function Je(e, t) {
        return void 0 === e ? t : void 0 !== t ? t.concat(e()) : e()
    }
    function et(t, o, n, a, l, i) {
        o.key = a + l;
        const r = e.h(t, o, n);
        return !0 === l ? e.withDirectives(r, i()) : r
    }
    const tt = "0 0 24 24"
      , ot = e=>e
      , nt = e=>`ionicons ${e}`
      , at = {
        "mdi-": e=>`mdi ${e}`,
        "icon-": ot,
        "bt-": e=>`bt ${e}`,
        "eva-": e=>`eva ${e}`,
        "ion-md": nt,
        "ion-ios": nt,
        "ion-logo": nt,
        "iconfont ": ot,
        "ti-": e=>`themify-icon ${e}`,
        "bi-": e=>`bootstrap-icons ${e}`
    }
      , lt = {
        o_: "-outlined",
        r_: "-round",
        s_: "-sharp"
    }
      , it = {
        sym_o_: "-outlined",
        sym_r_: "-rounded",
        sym_s_: "-sharp"
    }
      , rt = new RegExp("^(" + Object.keys(at).join("|") + ")")
      , st = new RegExp("^(" + Object.keys(lt).join("|") + ")")
      , ut = new RegExp("^(" + Object.keys(it).join("|") + ")")
      , ct = /^[Mm]\s?[-+]?\.?\d/
      , dt = /^img:/
      , vt = /^svguse:/
      , pt = /^ion-/
      , mt = /^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
    var ft = Me({
        name: "QIcon",
        props: {
            ...Ye,
            tag: {
                type: String,
                default: "i"
            },
            name: String,
            color: String,
            left: Boolean,
            right: Boolean
        },
        setup(t, {slots: o}) {
            const {proxy: {$q: n}} = e.getCurrentInstance()
              , a = Ke(t)
              , l = e.computed(()=>"q-icon" + (!0 === t.left ? " on-left" : "") + (!0 === t.right ? " on-right" : "") + (void 0 !== t.color ? ` text-${t.color}` : ""))
              , i = e.computed(()=>{
                let o, a = t.name;
                if ("none" === a || !a)
                    return {
                        none: !0
                    };
                if (null !== n.iconMapFn) {
                    const e = n.iconMapFn(a);
                    if (void 0 !== e) {
                        if (void 0 === e.icon)
                            return {
                                cls: e.cls,
                                content: void 0 !== e.content ? e.content : " "
                            };
                        if (a = e.icon,
                        "none" === a || !a)
                            return {
                                none: !0
                            }
                    }
                }
                if (!0 === ct.test(a)) {
                    const [t,o=tt] = a.split("|");
                    return {
                        svg: !0,
                        viewBox: o,
                        nodes: t.split("&&").map(t=>{
                            const [o,n,a] = t.split("@@");
                            return e.h("path", {
                                style: n,
                                d: o,
                                transform: a
                            })
                        }
                        )
                    }
                }
                if (!0 === dt.test(a))
                    return {
                        img: !0,
                        src: a.substring(4)
                    };
                if (!0 === vt.test(a)) {
                    const [e,t=tt] = a.split("|");
                    return {
                        svguse: !0,
                        src: e.substring(7),
                        viewBox: t
                    }
                }
                let l = " ";
                const i = a.match(rt);
                if (null !== i)
                    o = at[i[1]](a);
                else if (!0 === mt.test(a))
                    o = a;
                else if (!0 === pt.test(a))
                    o = `ionicons ion-${!0 === n.platform.is.ios ? "ios" : "md"}${a.substring(3)}`;
                else if (!0 === ut.test(a)) {
                    o = "notranslate material-symbols";
                    const e = a.match(ut);
                    null !== e && (a = a.substring(6),
                    o += it[e[1]]),
                    l = a
                } else {
                    o = "notranslate material-icons";
                    const e = a.match(st);
                    null !== e && (a = a.substring(2),
                    o += lt[e[1]]),
                    l = a
                }
                return {
                    cls: o,
                    content: l
                }
            }
            );
            return ()=>{
                const n = {
                    class: l.value,
                    style: a.value,
                    "aria-hidden": "true",
                    role: "presentation"
                };
                return !0 === i.value.none ? e.h(t.tag, n, Xe(o.default)) : !0 === i.value.img ? e.h("span", n, Ge(o.default, [e.h("img", {
                    src: i.value.src
                })])) : !0 === i.value.svg ? e.h("span", n, Ge(o.default, [e.h("svg", {
                    viewBox: i.value.viewBox || "0 0 24 24"
                }, i.value.nodes)])) : !0 === i.value.svguse ? e.h("span", n, Ge(o.default, [e.h("svg", {
                    viewBox: i.value.viewBox
                }, [e.h("use", {
                    "xlink:href": i.value.src
                })])])) : (void 0 !== i.value.cls && (n.class += " " + i.value.cls),
                e.h(t.tag, n, Ge(o.default, [i.value.content])))
            }
        }
    })
      , ht = Me({
        name: "QAvatar",
        props: {
            ...Ye,
            fontSize: String,
            color: String,
            textColor: String,
            icon: String,
            square: Boolean,
            rounded: Boolean
        },
        setup(t, {slots: o}) {
            const n = Ke(t)
              , a = e.computed(()=>"q-avatar" + (t.color ? ` bg-${t.color}` : "") + (t.textColor ? ` text-${t.textColor} q-chip--colored` : "") + (!0 === t.square ? " q-avatar--square" : !0 === t.rounded ? " rounded-borders" : ""))
              , l = e.computed(()=>t.fontSize ? {
                fontSize: t.fontSize
            } : null);
            return ()=>{
                const i = void 0 !== t.icon ? [e.h(ft, {
                    name: t.icon
                })] : void 0;
                return e.h("div", {
                    class: a.value,
                    style: n.value
                }, [e.h("div", {
                    class: "q-avatar__content row flex-center overflow-hidden",
                    style: l.value
                }, Je(o.default, i))])
            }
        }
    });
    const gt = ["top", "middle", "bottom"];
    var bt = Me({
        name: "QBadge",
        props: {
            color: String,
            textColor: String,
            floating: Boolean,
            transparent: Boolean,
            multiLine: Boolean,
            outline: Boolean,
            rounded: Boolean,
            label: [Number, String],
            align: {
                type: String,
                validator: e=>gt.includes(e)
            }
        },
        setup(t, {slots: o}) {
            const n = e.computed(()=>{
                return void 0 !== t.align ? {
                    verticalAlign: t.align
                } : null
            }
            )
              , a = e.computed(()=>{
                const e = !0 === t.outline && t.color || t.textColor;
                return "q-badge flex inline items-center no-wrap" + ` q-badge--${!0 === t.multiLine ? "multi" : "single"}-line` + (!0 === t.outline ? " q-badge--outline" : void 0 !== t.color ? ` bg-${t.color}` : "") + (void 0 !== e ? ` text-${e}` : "") + (!0 === t.floating ? " q-badge--floating" : "") + (!0 === t.rounded ? " q-badge--rounded" : "") + (!0 === t.transparent ? " q-badge--transparent" : "")
            }
            );
            return ()=>e.h("div", {
                class: a.value,
                style: n.value,
                role: "alert",
                "aria-label": t.label
            }, Ge(o.default, void 0 !== t.label ? [t.label] : []))
        }
    });
    const yt = {
        dark: {
            type: Boolean,
            default: null
        }
    };
    function wt(t, o) {
        return e.computed(()=>null === t.dark ? o.dark.isActive : t.dark)
    }
    var xt = Me({
        name: "QBanner",
        props: {
            ...yt,
            inlineActions: Boolean,
            dense: Boolean,
            rounded: Boolean
        },
        setup(t, {slots: o}) {
            const n = e.getCurrentInstance()
              , a = wt(t, n.proxy.$q)
              , l = e.computed(()=>"q-banner row items-center" + (!0 === t.dense ? " q-banner--dense" : "") + (!0 === a.value ? " q-banner--dark q-dark" : "") + (!0 === t.rounded ? " rounded-borders" : ""))
              , i = e.computed(()=>"q-banner__actions row items-center justify-end" + ` col-${!0 === t.inlineActions ? "auto" : "all"}`);
            return ()=>{
                const n = [e.h("div", {
                    class: "q-banner__avatar col-auto row items-center self-start"
                }, Xe(o.avatar)), e.h("div", {
                    class: "q-banner__content col text-body2"
                }, Xe(o.default))]
                  , a = Xe(o.action);
                return void 0 !== a && n.push(e.h("div", {
                    class: i.value
                }, a)),
                e.h("div", {
                    class: l.value + (!1 === t.inlineActions && void 0 !== a ? " q-banner--top-padding" : ""),
                    role: "alert"
                }, n)
            }
        }
    })
      , _t = Me({
        name: "QBar",
        props: {
            ...yt,
            dense: Boolean
        },
        setup(t, {slots: o}) {
            const n = e.getCurrentInstance()
              , a = wt(t, n.proxy.$q)
              , l = e.computed(()=>"q-bar row no-wrap items-center" + ` q-bar--${!0 === t.dense ? "dense" : "standard"} ` + ` q-bar--${!0 === a.value ? "dark" : "light"}`);
            return ()=>e.h("div", {
                class: l.value,
                role: "toolbar"
            }, Xe(o.default))
        }
    });
    const St = {
        left: "start",
        center: "center",
        right: "end",
        between: "between",
        around: "around",
        evenly: "evenly",
        stretch: "stretch"
    }
      , kt = Object.keys(St)
      , Ct = {
        align: {
            type: String,
            validator: e=>kt.includes(e)
        }
    };
    function qt(t) {
        return e.computed(()=>{
            const e = void 0 === t.align ? !0 === t.vertical ? "stretch" : "left" : t.align;
            return `${!0 === t.vertical ? "items" : "justify"}-${St[e]}`
        }
        )
    }
    function $t(e) {
        if (Object(e.$parent) === e.$parent)
            return e.$parent;
        e = e.$.parent;
        while (Object(e) === e) {
            if (Object(e.proxy) === e.proxy)
                return e.proxy;
            e = e.parent
        }
    }
    function Mt(e, t) {
        "symbol" === typeof t.type ? !0 === Array.isArray(t.children) && t.children.forEach(t=>{
            Mt(e, t)
        }
        ) : e.add(t)
    }
    function Tt(e) {
        const t = new Set;
        return e.forEach(e=>{
            Mt(t, e)
        }
        ),
        Array.from(t)
    }
    function Bt(e) {
        return void 0 !== e.appContext.config.globalProperties.$router
    }
    const zt = ["", !0];
    var Ot = Me({
        name: "QBreadcrumbs",
        props: {
            ...Ct,
            separator: {
                type: String,
                default: "/"
            },
            separatorColor: String,
            activeColor: {
                type: String,
                default: "primary"
            },
            gutter: {
                type: String,
                validator: e=>["none", "xs", "sm", "md", "lg", "xl"].includes(e),
                default: "sm"
            }
        },
        setup(t, {slots: o}) {
            const n = qt(t)
              , a = e.computed(()=>`flex items-center ${n.value}${"none" === t.gutter ? "" : ` q-gutter-${t.gutter}`}`)
              , l = e.computed(()=>t.separatorColor ? ` text-${t.separatorColor}` : "")
              , i = e.computed(()=>` text-${t.activeColor}`);
            return ()=>{
                const n = Tt(Xe(o.default));
                if (0 === n.length)
                    return;
                let r = 1;
                const s = []
                  , u = n.filter(e=>void 0 !== e.type && "QBreadcrumbsEl" === e.type.name).length
                  , c = void 0 !== o.separator ? o.separator : ()=>t.separator;
                return n.forEach(t=>{
                    if (void 0 !== t.type && "QBreadcrumbsEl" === t.type.name) {
                        const o = r < u
                          , n = null !== t.props && zt.includes(t.props.disable)
                          , a = (!0 === o ? "" : " q-breadcrumbs--last") + (!0 !== n && !0 === o ? i.value : "");
                        r++,
                        s.push(e.h("div", {
                            class: `flex items-center ${a}`
                        }, [t])),
                        !0 === o && s.push(e.h("div", {
                            class: "q-breadcrumbs__separator" + l.value
                        }, c()))
                    } else
                        s.push(t)
                }
                ),
                e.h("div", {
                    class: "q-breadcrumbs"
                }, [e.h("div", {
                    class: a.value
                }, s)])
            }
        }
    });
    function Vt(e) {
        return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
    }
    function Lt(e, t) {
        return (e.aliasOf || e) === (t.aliasOf || t)
    }
    function Et(e, t) {
        for (const o in t) {
            const n = t[o]
              , a = e[o];
            if ("string" === typeof n) {
                if (n !== a)
                    return !1
            } else if (!1 === Array.isArray(a) || a.length !== n.length || n.some((e,t)=>e !== a[t]))
                return !1
        }
        return !0
    }
    function At(e, t) {
        return !0 === Array.isArray(t) ? e.length === t.length && e.every((e,o)=>e === t[o]) : 1 === e.length && e[0] === t
    }
    function Pt(e, t) {
        return !0 === Array.isArray(e) ? At(e, t) : !0 === Array.isArray(t) ? At(t, e) : e === t
    }
    function Rt(e, t) {
        if (Object.keys(e).length !== Object.keys(t).length)
            return !1;
        for (const o in e)
            if (!1 === Pt(e[o], t[o]))
                return !1;
        return !0
    }
    const Ft = {
        to: [String, Object],
        replace: Boolean,
        exact: Boolean,
        activeClass: {
            type: String,
            default: "q-router-link--active"
        },
        exactActiveClass: {
            type: String,
            default: "q-router-link--exact-active"
        },
        href: String,
        target: String,
        disable: Boolean
    };
    function It(t) {
        const o = e.getCurrentInstance()
          , {props: n, proxy: a} = o
          , l = Bt(o)
          , i = e.computed(()=>!0 !== n.disable && void 0 !== n.href)
          , r = e.computed(()=>!0 === l && !0 !== n.disable && !0 !== i.value && void 0 !== n.to && null !== n.to && "" !== n.to)
          , s = e.computed(()=>{
            if (!0 === r.value)
                try {
                    return a.$router.resolve(n.to)
                } catch (e) {}
            return null
        }
        )
          , u = e.computed(()=>null !== s.value)
          , c = e.computed(()=>!0 === i.value || !0 === u.value)
          , d = e.computed(()=>"a" === n.type || !0 === c.value ? "a" : n.tag || t || "div")
          , v = e.computed(()=>!0 === i.value ? {
            href: n.href,
            target: n.target
        } : !0 === u.value ? {
            href: s.value.href,
            target: n.target
        } : {})
          , p = e.computed(()=>{
            if (!1 === u.value)
                return null;
            const {matched: e} = s.value
              , {length: t} = e
              , o = e[t - 1];
            if (void 0 === o)
                return -1;
            const n = a.$route.matched;
            if (0 === n.length)
                return -1;
            const l = n.findIndex(Lt.bind(null, o));
            if (l > -1)
                return l;
            const i = Vt(e[t - 2]);
            return t > 1 && Vt(o) === i && n[n.length - 1].path !== i ? n.findIndex(Lt.bind(null, e[t - 2])) : l
        }
        )
          , m = e.computed(()=>!0 === u.value && p.value > -1 && Et(a.$route.params, s.value.params))
          , f = e.computed(()=>!0 === m.value && p.value === a.$route.matched.length - 1 && Rt(a.$route.params, s.value.params))
          , h = e.computed(()=>!0 === u.value ? !0 === f.value ? ` ${n.exactActiveClass} ${n.activeClass}` : !0 === n.exact ? "" : !0 === m.value ? ` ${n.activeClass}` : "" : "");
        function g(e) {
            return !(!0 === n.disable || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || !0 !== e.__qNavigate && !0 === e.defaultPrevented || void 0 !== e.button && 0 !== e.button || "_blank" === n.target) && (q(e),
            a.$router[!0 === n.replace ? "replace" : "push"](n.to).catch(e=>e))
        }
        return {
            hasRouterLink: u,
            hasHrefLink: i,
            hasLink: c,
            linkTag: d,
            linkRoute: s,
            linkIsActive: m,
            linkIsExactActive: f,
            linkClass: h,
            linkProps: v,
            navigateToRouterLink: g
        }
    }
    var Nt = Me({
        name: "QBreadcrumbsEl",
        props: {
            ...Ft,
            label: String,
            icon: String,
            tag: {
                type: String,
                default: "span"
            }
        },
        setup(t, {slots: o}) {
            const {linkTag: n, linkProps: a, linkClass: l, hasRouterLink: i, navigateToRouterLink: r} = It()
              , s = e.computed(()=>{
                const e = {
                    class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (!0 !== t.disable ? "q-link--focusable" + l.value : "q-breadcrumbs__el--disable"),
                    ...a.value
                };
                return !0 === i.value && (e.onClick = r),
                e
            }
            )
              , u = e.computed(()=>"q-breadcrumbs__el-icon" + (void 0 !== t.label ? " q-breadcrumbs__el-icon--with-label" : ""));
            return ()=>{
                const a = [];
                return void 0 !== t.icon && a.push(e.h(ft, {
                    class: u.value,
                    name: t.icon
                })),
                void 0 !== t.label && a.push(t.label),
                e.h(n.value, {
                    ...s.value
                }, Ge(o.default, a))
            }
        }
    });
    const jt = {
        size: {
            type: [Number, String],
            default: "1em"
        },
        color: String
    };
    function Dt(t) {
        return {
            cSize: e.computed(()=>t.size in We ? `${We[t.size]}px` : t.size),
            classes: e.computed(()=>"q-spinner" + (t.color ? ` text-${t.color}` : ""))
        }
    }
    var Ht = Me({
        name: "QSpinner",
        props: {
            ...jt,
            thickness: {
                type: Number,
                default: 5
            }
        },
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value + " q-spinner-mat",
                width: o.value,
                height: o.value,
                viewBox: "25 25 50 50"
            }, [e.h("circle", {
                class: "path",
                cx: "50",
                cy: "50",
                r: "20",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": t.thickness,
                "stroke-miterlimit": "10"
            })])
        }
    });
    function Qt(e) {
        if (e === window)
            return {
                top: 0,
                left: 0
            };
        const {top: t, left: o} = e.getBoundingClientRect();
        return {
            top: t,
            left: o
        }
    }
    function Ut(e, t) {
        return window.getComputedStyle(e).getPropertyValue(t)
    }
    function Wt(e) {
        return e === window ? window.innerHeight : e.getBoundingClientRect().height
    }
    function Yt(e) {
        return e === window ? window.innerWidth : e.getBoundingClientRect().width
    }
    function Kt(e, t) {
        const o = e.style;
        for (const n in t)
            o[n] = t[n]
    }
    function Xt(e, t) {
        e.forEach(e=>Kt(e, t))
    }
    function Zt(e) {
        if ("function" === typeof e)
            return "loading" !== document.readyState ? e() : void document.addEventListener("DOMContentLoaded", e, !1)
    }
    function Gt(t) {
        if (void 0 === t || null === t)
            return;
        if ("string" === typeof t)
            try {
                return document.querySelector(t) || void 0
            } catch (e) {
                return
            }
        const o = !0 === e.isRef(t) ? t.value : t;
        return o ? o.$el || o : void 0
    }
    function Jt(e, t) {
        if (void 0 === e || null === e || !0 === e.contains(t))
            return !0;
        for (let o = e.nextElementSibling; null !== o; o = o.nextElementSibling)
            if (o.contains(t))
                return !0;
        return !1
    }
    var eo = {
        offset: Qt,
        style: Ut,
        height: Wt,
        width: Yt,
        css: Kt,
        cssBatch: Xt,
        ready: Zt
    };
    function to(e, t=250) {
        let o, n = !1;
        return function() {
            return !1 === n && (n = !0,
            setTimeout(()=>{
                n = !1
            }
            , t),
            o = e.apply(this, arguments)),
            o
        }
    }
    function oo(e, t, o, n) {
        !0 === o.modifiers.stop && C(e);
        const a = o.modifiers.color;
        let l = o.modifiers.center;
        l = !0 === l || !0 === n;
        const i = document.createElement("span")
          , r = document.createElement("span")
          , s = w(e)
          , {left: u, top: c, width: d, height: v} = t.getBoundingClientRect()
          , p = Math.sqrt(d * d + v * v)
          , m = p / 2
          , f = `${(d - p) / 2}px`
          , h = l ? f : `${s.left - u - m}px`
          , g = `${(v - p) / 2}px`
          , b = l ? g : `${s.top - c - m}px`;
        r.className = "q-ripple__inner",
        Kt(r, {
            height: `${p}px`,
            width: `${p}px`,
            transform: `translate3d(${h},${b},0) scale3d(.2,.2,1)`,
            opacity: 0
        }),
        i.className = `q-ripple ${a ? " text-" + a : ""}`,
        i.setAttribute("dir", "ltr"),
        i.appendChild(r),
        t.appendChild(i);
        const y = ()=>{
            i.remove(),
            clearTimeout(x)
        }
        ;
        o.abort.push(y);
        let x = setTimeout(()=>{
            r.classList.add("q-ripple__inner--enter"),
            r.style.transform = `translate3d(${f},${g},0) scale3d(1,1,1)`,
            r.style.opacity = .2,
            x = setTimeout(()=>{
                r.classList.remove("q-ripple__inner--enter"),
                r.classList.add("q-ripple__inner--leave"),
                r.style.opacity = 0,
                x = setTimeout(()=>{
                    i.remove(),
                    o.abort.splice(o.abort.indexOf(y), 1)
                }
                , 275)
            }
            , 250)
        }
        , 50)
    }
    function no(e, {modifiers: t, value: o, arg: n}) {
        const a = Object.assign({}, e.cfg.ripple, t, o);
        e.modifiers = {
            early: !0 === a.early,
            stop: !0 === a.stop,
            center: !0 === a.center,
            color: a.color || n,
            keyCodes: [].concat(a.keyCodes || 13)
        }
    }
    var ao = Te({
        name: "ripple",
        beforeMount(e, t) {
            const o = t.instance.$.appContext.config.globalProperties.$q.config || {};
            if (!1 === o.ripple)
                return;
            const n = {
                cfg: o,
                enabled: !1 !== t.value,
                modifiers: {},
                abort: [],
                start(t) {
                    !0 === n.enabled && !0 !== t.qSkipRipple && t.type === (!0 === n.modifiers.early ? "pointerdown" : "click") && oo(t, e, n, !0 === t.qKeyEvent)
                },
                keystart: to(t=>{
                    !0 === n.enabled && !0 !== t.qSkipRipple && !0 === K(t, n.modifiers.keyCodes) && t.type === `key ${!0 === n.modifiers.early ? "down" : "up"}` && oo(t, e, n, !0)
                }
                , 300)
            };
            no(n, t),
            e.__qripple = n,
            T(n, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]])
        },
        updated(e, t) {
            if (t.oldValue !== t.value) {
                const o = e.__qripple;
                void 0 !== o && (o.enabled = !1 !== t.value,
                !0 === o.enabled && Object(t.value) === t.value && no(o, t))
            }
        },
        beforeUnmount(e) {
            const t = e.__qripple;
            void 0 !== t && (t.abort.forEach(e=>{
                e()
            }
            ),
            B(t, "main"),
            delete e._qripple)
        }
    });
    const lo = {
        none: 0,
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32
    }
      , io = {
        xs: 8,
        sm: 10,
        md: 14,
        lg: 20,
        xl: 24
    }
      , ro = ["button", "submit", "reset"]
      , so = /[^\s]\/[^\s]/
      , uo = {
        ...Ye,
        ...Ft,
        type: {
            type: String,
            default: "button"
        },
        label: [Number, String],
        icon: String,
        iconRight: String,
        round: Boolean,
        square: Boolean,
        outline: Boolean,
        flat: Boolean,
        unelevated: Boolean,
        rounded: Boolean,
        push: Boolean,
        glossy: Boolean,
        size: String,
        fab: Boolean,
        fabMini: Boolean,
        padding: String,
        color: String,
        textColor: String,
        noCaps: Boolean,
        noWrap: Boolean,
        dense: Boolean,
        tabindex: [Number, String],
        ripple: {
            type: [Boolean, Object],
            default: !0
        },
        align: {
            ...Ct.align,
            default: "center"
        },
        stack: Boolean,
        stretch: Boolean,
        loading: {
            type: Boolean,
            default: null
        },
        disable: Boolean
    };
    function co(t) {
        const o = Ke(t, io)
          , n = qt(t)
          , {hasRouterLink: a, hasLink: l, linkTag: i, linkProps: r, navigateToRouterLink: s} = It("button")
          , u = e.computed(()=>{
            const e = !1 === t.fab && !1 === t.fabMini ? o.value : {};
            return void 0 !== t.padding ? Object.assign({}, e, {
                padding: t.padding.split(/\s+/).map(e=>e in lo ? lo[e] + "px" : e).join(" "),
                minWidth: "0",
                minHeight: "0"
            }) : e
        }
        )
          , c = e.computed(()=>!0 === t.rounded || !0 === t.fab || !0 === t.fabMini)
          , d = e.computed(()=>!0 !== t.disable && !0 !== t.loading)
          , v = e.computed(()=>!0 === d.value ? t.tabindex || 0 : -1)
          , p = e.computed(()=>{
            return !0 === t.flat ? "flat" : !0 === t.outline ? "outline" : !0 === t.push ? "push" : !0 === t.unelevated ? "unelevated" : "standard"
        }
        )
          , m = e.computed(()=>{
            const e = {
                tabindex: v.value
            };
            return !0 === l.value ? Object.assign(e, r.value) : !0 === ro.includes(t.type) && (e.type = t.type),
            "a" === i.value ? (!0 === t.disable ? e["aria-disabled"] = "true" : void 0 === e.href && (e.role = "button"),
            !0 !== a.value && !0 === so.test(t.type) && (e.type = t.type)) : !0 === t.disable && (e.disabled = "",
            e["aria-disabled"] = "true"),
            !0 === t.loading && void 0 !== t.percentage && Object.assign(e, {
                role: "progressbar",
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": t.percentage
            }),
            e
        }
        )
          , f = e.computed(()=>{
            let e;
            void 0 !== t.color ? e = !0 === t.flat || !0 === t.outline ? `text-${t.textColor || t.color}` : `bg-${t.color} text-${t.textColor || "white"}` : t.textColor && (e = `text-${t.textColor}`);
            const o = !0 === t.round ? "round" : `rectangle ${!0 === c.value ? " q-btn--rounded" : !0 === t.square ? " q-btn--square" : ""}`;
            return `q-btn--${p.value} q-btn--${o}` + (void 0 !== e ? " " + e : "") + (!0 === d.value ? " q-btn--actionable q-focusable q-hoverable" : !0 === t.disable ? " disabled" : "") + (!0 === t.fab ? " q-btn--fab" : !0 === t.fabMini ? " q-btn--fab-mini" : "") + (!0 === t.noCaps ? " q-btn--no-uppercase" : "") + (!0 === t.dense ? " q-btn--dense" : "") + (!0 === t.stretch ? " no-border-radius self-stretch" : "") + (!0 === t.glossy ? " glossy" : "") + (t.square ? " q-btn--square" : "")
        }
        )
          , h = e.computed(()=>n.value + (!0 === t.stack ? " column" : " row") + (!0 === t.noWrap ? " no-wrap text-no-wrap" : "") + (!0 === t.loading ? " q-btn__content--hidden" : ""));
        return {
            classes: f,
            style: u,
            innerClasses: h,
            attributes: m,
            hasRouterLink: a,
            hasLink: l,
            linkTag: i,
            navigateToRouterLink: s,
            isActionable: d
        }
    }
    const {passiveCapture: vo} = f;
    let po = null
      , mo = null
      , fo = null;
    var ho = Me({
        name: "QBtn",
        props: {
            ...uo,
            percentage: Number,
            darkPercentage: Boolean
        },
        emits: ["click", "keydown", "touchstart", "mousedown", "keyup"],
        setup(t, {slots: o, emit: n}) {
            const {proxy: a} = e.getCurrentInstance()
              , {classes: l, style: i, innerClasses: r, attributes: s, hasRouterLink: u, hasLink: c, linkTag: d, navigateToRouterLink: v, isActionable: p} = co(t)
              , m = e.ref(null)
              , f = e.ref(null);
            let h, g, b = null;
            const y = e.computed(()=>void 0 !== t.label && null !== t.label && "" !== t.label)
              , w = e.computed(()=>!0 !== t.disable && !1 !== t.ripple && {
                keyCodes: !0 === c.value ? [13, 32] : [13],
                ...!0 === t.ripple ? {} : t.ripple
            })
              , x = e.computed(()=>({
                center: t.round
            }))
              , _ = e.computed(()=>{
                const e = Math.max(0, Math.min(100, t.percentage));
                return e > 0 ? {
                    transition: "transform 0.6s",
                    transform: `translateX(${e - 100}%)`
                } : {}
            }
            )
              , S = e.computed(()=>{
                return !0 === t.loading ? {
                    onMousedown: L,
                    onTouchstartPassive: L,
                    onClick: L,
                    onKeydown: L,
                    onKeyup: L
                } : !0 === p.value ? {
                    onClick: M,
                    onKeydown: T,
                    onMousedown: z,
                    onTouchstart: B
                } : {
                    onClick: $
                }
            }
            )
              , k = e.computed(()=>({
                ref: m,
                class: "q-btn q-btn-item non-selectable no-outline " + l.value,
                style: i.value,
                ...s.value,
                ...S.value
            }));
            function M(e) {
                if (null !== m.value) {
                    if (void 0 !== e) {
                        if (!0 === e.defaultPrevented)
                            return;
                        const o = document.activeElement;
                        if ("submit" === t.type && o !== document.body && !1 === m.value.contains(o) && !1 === o.contains(m.value)) {
                            m.value.focus();
                            const e = ()=>{
                                document.removeEventListener("keydown", $, !0),
                                document.removeEventListener("keyup", e, vo),
                                null !== m.value && m.value.removeEventListener("blur", e, vo)
                            }
                            ;
                            document.addEventListener("keydown", $, !0),
                            document.addEventListener("keyup", e, vo),
                            m.value.addEventListener("blur", e, vo)
                        }
                    }
                    if (!0 === u.value) {
                        const t = ()=>{
                            e.__qNavigate = !0,
                            v(e)
                        }
                        ;
                        n("click", e, t),
                        !0 !== e.defaultPrevented && t()
                    } else
                        n("click", e)
                }
            }
            function T(e) {
                null !== m.value && (n("keydown", e),
                !0 === K(e, [13, 32]) && mo !== m.value && (null !== mo && V(),
                !0 !== e.defaultPrevented && (m.value.focus(),
                mo = m.value,
                m.value.classList.add("q-btn--active"),
                document.addEventListener("keyup", O, !0),
                m.value.addEventListener("blur", O, vo)),
                $(e)))
            }
            function B(e) {
                null !== m.value && (n("touchstart", e),
                !0 !== e.defaultPrevented && (po !== m.value && (null !== po && V(),
                po = m.value,
                b = e.target,
                b.addEventListener("touchcancel", O, vo),
                b.addEventListener("touchend", O, vo)),
                h = !0,
                clearTimeout(g),
                g = setTimeout(()=>{
                    h = !1
                }
                , 200)))
            }
            function z(e) {
                null !== m.value && (e.qSkipRipple = !0 === h,
                n("mousedown", e),
                !0 !== e.defaultPrevented && fo !== m.value && (null !== fo && V(),
                fo = m.value,
                m.value.classList.add("q-btn--active"),
                document.addEventListener("mouseup", O, vo)))
            }
            function O(e) {
                if (null !== m.value && (void 0 === e || "blur" !== e.type || document.activeElement !== m.value)) {
                    if (void 0 !== e && "keyup" === e.type) {
                        if (mo === m.value && !0 === K(e, [13, 32])) {
                            const t = new MouseEvent("click",e);
                            t.qKeyEvent = !0,
                            !0 === e.defaultPrevented && q(t),
                            !0 === e.cancelBubble && C(t),
                            m.value.dispatchEvent(t),
                            $(e),
                            e.qKeyEvent = !0
                        }
                        n("keyup", e)
                    }
                    V()
                }
            }
            function V(e) {
                const t = f.value;
                !0 === e || po !== m.value && fo !== m.value || null === t || t === document.activeElement || (t.setAttribute("tabindex", -1),
                t.focus()),
                po === m.value && (null !== b && (b.removeEventListener("touchcancel", O, vo),
                b.removeEventListener("touchend", O, vo)),
                po = b = null),
                fo === m.value && (document.removeEventListener("mouseup", O, vo),
                fo = null),
                mo === m.value && (document.removeEventListener("keyup", O, !0),
                null !== m.value && m.value.removeEventListener("blur", O, vo),
                mo = null),
                null !== m.value && m.value.classList.remove("q-btn--active")
            }
            function L(e) {
                $(e),
                e.qSkipRipple = !0
            }
            return e.onBeforeUnmount(()=>{
                V(!0)
            }
            ),
            Object.assign(a, {
                click: M
            }),
            ()=>{
                let n = [];
                void 0 !== t.icon && n.push(e.h(ft, {
                    name: t.icon,
                    left: !1 === t.stack && !0 === y.value,
                    role: "img",
                    "aria-hidden": "true"
                })),
                !0 === y.value && n.push(e.h("span", {
                    class: "block"
                }, [t.label])),
                n = Ge(o.default, n),
                void 0 !== t.iconRight && !1 === t.round && n.push(e.h(ft, {
                    name: t.iconRight,
                    right: !1 === t.stack && !0 === y.value,
                    role: "img",
                    "aria-hidden": "true"
                }));
                const a = [e.h("span", {
                    class: "q-focus-helper",
                    ref: f
                })];
                return !0 === t.loading && void 0 !== t.percentage && a.push(e.h("span", {
                    class: "q-btn__progress absolute-full overflow-hidden" + (!0 === t.darkPercentage ? " q-btn__progress--dark" : "")
                }, [e.h("span", {
                    class: "q-btn__progress-indicator fit block",
                    style: _.value
                })])),
                a.push(e.h("span", {
                    class: "q-btn__content text-center col items-center q-anchor--skip " + r.value
                }, n)),
                null !== t.loading && a.push(e.h(e.Transition, {
                    name: "q-transition--fade"
                }, ()=>!0 === t.loading ? [e.h("span", {
                    key: "loading",
                    class: "absolute-full flex flex-center"
                }, void 0 !== o.loading ? o.loading() : [e.h(Ht)])] : null)),
                e.withDirectives(e.h(d.value, k.value, a), [[ao, w.value, void 0, x.value]])
            }
        }
    })
      , go = Me({
        name: "QBtnGroup",
        props: {
            unelevated: Boolean,
            outline: Boolean,
            flat: Boolean,
            rounded: Boolean,
            square: Boolean,
            push: Boolean,
            stretch: Boolean,
            glossy: Boolean,
            spread: Boolean
        },
        setup(t, {slots: o}) {
            const n = e.computed(()=>{
                const e = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter(e=>!0 === t[e]).map(e=>`q-btn-group--${e}`).join(" ");
                return `q-btn-group row no-wrap ${e.length > 0 ? " " + e : ""}` + (!0 === t.spread ? " q-btn-group--spread" : " inline")
            }
            );
            return ()=>e.h("div", {
                class: n.value
            }, Xe(o.default))
        }
    });
    function bo() {
        if (void 0 !== window.getSelection) {
            const e = window.getSelection();
            void 0 !== e.empty ? e.empty() : void 0 !== e.removeAllRanges && (e.removeAllRanges(),
            !0 !== p.is.mobile && e.addRange(document.createRange()))
        } else
            void 0 !== document.selection && document.selection.empty()
    }
    const yo = {
        target: {
            default: !0
        },
        noParentEvent: Boolean,
        contextMenu: Boolean
    };
    function wo({showing: t, avoidEmit: o, configureAnchorEl: n}) {
        const {props: a, proxy: l, emit: i} = e.getCurrentInstance()
          , r = e.ref(null);
        let s;
        function u(e) {
            return null !== r.value && (void 0 === e || void 0 === e.touches || e.touches.length <= 1)
        }
        const c = {};
        function d() {
            B(c, "anchor")
        }
        function v(e) {
            r.value = e;
            while (r.value.classList.contains("q-anchor--skip"))
                r.value = r.value.parentNode;
            n()
        }
        function p() {
            if (!1 === a.target || "" === a.target || null === l.$el.parentNode)
                r.value = null;
            else if (!0 === a.target)
                v(l.$el.parentNode);
            else {
                let e = a.target;
                if ("string" === typeof a.target)
                    try {
                        e = document.querySelector(a.target)
                    } catch (t) {
                        e = void 0
                    }
                void 0 !== e && null !== e ? (r.value = e.$el || e,
                n()) : (r.value = null,
                console.error(`Anchor: target "${a.target}" not found`))
            }
        }
        return void 0 === n && (Object.assign(c, {
            hide(e) {
                l.hide(e)
            },
            toggle(e) {
                l.toggle(e),
                e.qAnchorHandled = !0
            },
            toggleKey(e) {
                !0 === K(e, 13) && c.toggle(e)
            },
            contextClick(t) {
                l.hide(t),
                q(t),
                e.nextTick(()=>{
                    l.show(t),
                    t.qAnchorHandled = !0
                }
                )
            },
            prevent: q,
            mobileTouch(e) {
                if (c.mobileCleanup(e),
                !0 !== u(e))
                    return;
                l.hide(e),
                r.value.classList.add("non-selectable");
                const t = e.target;
                T(c, "anchor", [[t, "touchmove", "mobileCleanup", "passive"], [t, "touchend", "mobileCleanup", "passive"], [t, "touchcancel", "mobileCleanup", "passive"], [r.value, "contextmenu", "prevent", "notPassive"]]),
                s = setTimeout(()=>{
                    l.show(e),
                    e.qAnchorHandled = !0
                }
                , 300)
            },
            mobileCleanup(e) {
                r.value.classList.remove("non-selectable"),
                clearTimeout(s),
                !0 === t.value && void 0 !== e && bo()
            }
        }),
        n = function(e=a.contextMenu) {
            if (!0 === a.noParentEvent || null === r.value)
                return;
            let t;
            t = !0 === e ? !0 === l.$q.platform.is.mobile ? [[r.value, "touchstart", "mobileTouch", "passive"]] : [[r.value, "mousedown", "hide", "passive"], [r.value, "contextmenu", "contextClick", "notPassive"]] : [[r.value, "click", "toggle", "passive"], [r.value, "keyup", "toggleKey", "passive"]],
            T(c, "anchor", t)
        }
        ),
        e.watch(()=>a.contextMenu, e=>{
            null !== r.value && (d(),
            n(e))
        }
        ),
        e.watch(()=>a.target, ()=>{
            null !== r.value && d(),
            p()
        }
        ),
        e.watch(()=>a.noParentEvent, e=>{
            null !== r.value && (!0 === e ? d() : n())
        }
        ),
        e.onMounted(()=>{
            p(),
            !0 !== o && !0 === a.modelValue && null === r.value && i("update:modelValue", !1)
        }
        ),
        e.onBeforeUnmount(()=>{
            clearTimeout(s),
            d()
        }
        ),
        {
            anchorEl: r,
            canShow: u,
            anchorEvents: c
        }
    }
    function xo(t, o) {
        const n = e.ref(null);
        let a;
        function l(e, t) {
            const o = `${void 0 !== t ? "add" : "remove"}EventListener`
              , n = void 0 !== t ? t : a;
            e !== window && e[o]("scroll", n, f.passive),
            window[o]("scroll", n, f.passive),
            a = t
        }
        function i() {
            null !== n.value && (l(n.value),
            n.value = null)
        }
        const r = e.watch(()=>t.noParentEvent, ()=>{
            null !== n.value && (i(),
            o())
        }
        );
        return e.onBeforeUnmount(r),
        {
            localScrollTarget: n,
            unconfigureScrollTarget: i,
            changeScrollEvent: l
        }
    }
    const _o = {
        modelValue: {
            type: Boolean,
            default: null
        },
        "onUpdate:modelValue": [Function, Array]
    }
      , So = ["before-show", "show", "before-hide", "hide"];
    function ko({showing: t, canShow: o, hideOnRouteChange: n, handleShow: a, handleHide: l, processOnMount: i}) {
        const r = e.getCurrentInstance()
          , {props: s, emit: u, proxy: c} = r;
        let d;
        function v(e) {
            !0 === t.value ? f(e) : p(e)
        }
        function p(t) {
            if (!0 === s.disable || void 0 !== t && !0 === t.qAnchorHandled || void 0 !== o && !0 !== o(t))
                return;
            const n = void 0 !== s["onUpdate:modelValue"];
            !0 === n && (u("update:modelValue", !0),
            d = t,
            e.nextTick(()=>{
                d === t && (d = void 0)
            }
            )),
            null !== s.modelValue && !1 !== n || m(t)
        }
        function m(e) {
            !0 !== t.value && (t.value = !0,
            u("before-show", e),
            void 0 !== a ? a(e) : u("show", e))
        }
        function f(t) {
            if (!0 === s.disable)
                return;
            const o = void 0 !== s["onUpdate:modelValue"];
            !0 === o && (u("update:modelValue", !1),
            d = t,
            e.nextTick(()=>{
                d === t && (d = void 0)
            }
            )),
            null !== s.modelValue && !1 !== o || h(t)
        }
        function h(e) {
            !1 !== t.value && (t.value = !1,
            u("before-hide", e),
            void 0 !== l ? l(e) : u("hide", e))
        }
        function g(e) {
            if (!0 === s.disable && !0 === e)
                void 0 !== s["onUpdate:modelValue"] && u("update:modelValue", !1);
            else if (!0 === e !== t.value) {
                const t = !0 === e ? m : h;
                t(d)
            }
        }
        e.watch(()=>s.modelValue, g),
        void 0 !== n && !0 === Bt(r) && e.watch(()=>c.$route.fullPath, ()=>{
            !0 === n.value && !0 === t.value && f()
        }
        ),
        !0 === i && e.onMounted(()=>{
            g(s.modelValue)
        }
        );
        const b = {
            show: p,
            hide: f,
            toggle: v
        };
        return Object.assign(c, b),
        b
    }
    let Co = []
      , qo = [];
    function $o(e) {
        qo = qo.filter(t=>t !== e)
    }
    function Mo(e) {
        $o(e),
        qo.push(e)
    }
    function To(e) {
        $o(e),
        0 === qo.length && Co.length > 0 && (Co[Co.length - 1](),
        Co = [])
    }
    function Bo(e) {
        0 === qo.length ? e() : Co.push(e)
    }
    function zo(e) {
        Co = Co.filter(t=>t !== e)
    }
    const Oo = [];
    let Vo = document.body;
    function Lo(e) {
        const t = document.createElement("div");
        if (void 0 !== e && (t.id = e),
        void 0 !== ve.globalNodes) {
            const e = ve.globalNodes.class;
            void 0 !== e && (t.className = e)
        }
        return Vo.appendChild(t),
        Oo.push(t),
        t
    }
    function Eo(e) {
        Oo.splice(Oo.indexOf(e), 1),
        e.remove()
    }
    function Ao(e) {
        e !== Vo && (Vo = e,
        Oo.forEach(e=>{
            !1 === e.contains(Vo) && Vo.appendChild(e)
        }
        ))
    }
    const Po = [];
    function Ro(e) {
        return Po.find(t=>null !== t.__qPortalInnerRef.value && t.__qPortalInnerRef.value.contains(e))
    }
    function Fo(e, t) {
        do {
            if ("QMenu" === e.$options.name) {
                if (e.hide(t),
                !0 === e.$props.separateClosePopup)
                    return $t(e)
            } else if (void 0 !== e.__qPortalInnerRef) {
                const o = $t(e);
                return void 0 !== o && "QPopupProxy" === o.$options.name ? (e.hide(t),
                o) : e
            }
            e = $t(e)
        } while (void 0 !== e && null !== e)
    }
    function Io(e, t, o) {
        while (0 !== o && void 0 !== e && null !== e) {
            if (void 0 !== e.__qPortalInnerRef) {
                if (o--,
                "QMenu" === e.$options.name) {
                    e = Fo(e, t);
                    continue
                }
                e.hide(t)
            }
            e = $t(e)
        }
    }
    function No(e) {
        e = e.parent;
        while (void 0 !== e && null !== e) {
            if ("QGlobalDialog" === e.type.name)
                return !0;
            if ("QDialog" === e.type.name || "QMenu" === e.type.name)
                return !1;
            e = e.parent
        }
        return !1
    }
    function jo(t, o, n, a) {
        const l = e.ref(!1)
          , i = e.ref(!1);
        let r = null;
        const s = {}
          , u = !0 === a && No(t);
        function c(e) {
            if (!0 === e)
                return To(s),
                void (i.value = !0);
            i.value = !1,
            !1 === l.value && (!1 === u && null === r && (r = Lo()),
            l.value = !0,
            Po.push(t.proxy),
            Mo(s))
        }
        function d(e) {
            if (i.value = !1,
            !0 !== e)
                return;
            To(s),
            l.value = !1;
            const o = Po.indexOf(t.proxy);
            o > -1 && Po.splice(o, 1),
            null !== r && (Eo(r),
            r = null)
        }
        return e.onUnmounted(()=>{
            d(!0)
        }
        ),
        Object.assign(t.proxy, {
            __qPortalInnerRef: o
        }),
        {
            showPortal: c,
            hidePortal: d,
            portalIsActive: l,
            portalIsAccessible: i,
            renderPortal: ()=>!0 === u ? n() : !0 === l.value ? [e.h(e.Teleport, {
                to: r
            }, n())] : void 0
        }
    }
    const Do = {
        transitionShow: {
            type: String,
            default: "fade"
        },
        transitionHide: {
            type: String,
            default: "fade"
        },
        transitionDuration: {
            type: [String, Number],
            default: 300
        }
    };
    function Ho(t, o) {
        const n = e.ref(o.value);
        return e.watch(o, t=>{
            e.nextTick(()=>{
                n.value = t
            }
            )
        }
        ),
        {
            transition: e.computed(()=>"q-transition--" + (!0 === n.value ? t.transitionHide : t.transitionShow)),
            transitionStyle: e.computed(()=>`--q-transition-duration: ${t.transitionDuration}ms`)
        }
    }
    function Qo() {
        let t;
        return e.onBeforeUnmount(()=>{
            t = void 0
        }
        ),
        {
            registerTick(o) {
                t = o,
                e.nextTick(()=>{
                    t === o && (t(),
                    t = void 0)
                }
                )
            },
            removeTick() {
                t = void 0
            }
        }
    }
    function Uo() {
        let t;
        return e.onBeforeUnmount(()=>{
            clearTimeout(t)
        }
        ),
        {
            registerTimeout(e, o) {
                clearTimeout(t),
                t = setTimeout(e, o)
            },
            removeTimeout() {
                clearTimeout(t)
            }
        }
    }
    const Wo = [null, document, document.body, document.scrollingElement, document.documentElement];
    function Yo(e, t) {
        let o = Gt(t);
        if (void 0 === o) {
            if (void 0 === e || null === e)
                return window;
            o = e.closest(".scroll,.scroll-y,.overflow-auto")
        }
        return Wo.includes(o) ? window : o
    }
    function Ko(e) {
        return (e === window ? document.body : e).scrollHeight
    }
    function Xo(e) {
        return (e === window ? document.body : e).scrollWidth
    }
    function Zo(e) {
        return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop
    }
    function Go(e) {
        return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft
    }
    function Jo(e, t, o=0) {
        const n = void 0 === arguments[3] ? performance.now() : arguments[3]
          , a = Zo(e);
        o <= 0 ? a !== t && tn(e, t) : requestAnimationFrame(l=>{
            const i = l - n
              , r = a + (t - a) / Math.max(i, o) * i;
            tn(e, r),
            r !== t && Jo(e, t, o - i, l)
        }
        )
    }
    function en(e, t, o=0) {
        const n = void 0 === arguments[3] ? performance.now() : arguments[3]
          , a = Go(e);
        o <= 0 ? a !== t && on(e, t) : requestAnimationFrame(l=>{
            const i = l - n
              , r = a + (t - a) / Math.max(i, o) * i;
            on(e, r),
            r !== t && en(e, t, o - i, l)
        }
        )
    }
    function tn(e, t) {
        e !== window ? e.scrollTop = t : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t)
    }
    function on(e, t) {
        e !== window ? e.scrollLeft = t : window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)
    }
    function nn(e, t, o) {
        o ? Jo(e, t, o) : tn(e, t)
    }
    function an(e, t, o) {
        o ? en(e, t, o) : on(e, t)
    }
    let ln;
    function rn() {
        if (void 0 !== ln)
            return ln;
        const e = document.createElement("p")
          , t = document.createElement("div");
        Kt(e, {
            width: "100%",
            height: "200px"
        }),
        Kt(t, {
            position: "absolute",
            top: "0px",
            left: "0px",
            visibility: "hidden",
            width: "200px",
            height: "150px",
            overflow: "hidden"
        }),
        t.appendChild(e),
        document.body.appendChild(t);
        const o = e.offsetWidth;
        t.style.overflow = "scroll";
        let n = e.offsetWidth;
        return o === n && (n = t.clientWidth),
        t.remove(),
        ln = o - n,
        ln
    }
    function sn(e, t=!0) {
        return !(!e || e.nodeType !== Node.ELEMENT_NODE) && (t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"])))
    }
    var un = {
        getScrollTarget: Yo,
        getScrollHeight: Ko,
        getScrollWidth: Xo,
        getVerticalScrollPosition: Zo,
        getHorizontalScrollPosition: Go,
        animVerticalScrollTo: Jo,
        animHorizontalScrollTo: en,
        setVerticalScrollPosition: nn,
        setHorizontalScrollPosition: an,
        getScrollbarWidth: rn,
        hasScrollbar: sn
    };
    const cn = [];
    let dn;
    function vn(e) {
        dn = 27 === e.keyCode
    }
    function pn() {
        !0 === dn && (dn = !1)
    }
    function mn(e) {
        !0 === dn && (dn = !1,
        !0 === K(e, 27) && cn[cn.length - 1](e))
    }
    function fn(e) {
        window[e]("keydown", vn),
        window[e]("blur", pn),
        window[e]("keyup", mn),
        dn = !1
    }
    function hn(e) {
        !0 === v.is.desktop && (cn.push(e),
        1 === cn.length && fn("addEventListener"))
    }
    function gn(e) {
        const t = cn.indexOf(e);
        t > -1 && (cn.splice(t, 1),
        0 === cn.length && fn("removeEventListener"))
    }
    const bn = [];
    function yn(e) {
        bn[bn.length - 1](e)
    }
    function wn(e) {
        !0 === v.is.desktop && (bn.push(e),
        1 === bn.length && document.body.addEventListener("focusin", yn))
    }
    function xn(e) {
        const t = bn.indexOf(e);
        t > -1 && (bn.splice(t, 1),
        0 === bn.length && document.body.removeEventListener("focusin", yn))
    }
    let _n;
    const {notPassiveCapture: Sn} = f
      , kn = [];
    function Cn(e) {
        clearTimeout(_n);
        const t = e.target;
        if (void 0 === t || 8 === t.nodeType || !0 === t.classList.contains("no-pointer-events"))
            return;
        let o = Po.length - 1;
        while (o >= 0) {
            const e = Po[o].$;
            if ("QDialog" !== e.type.name)
                break;
            if (!0 !== e.props.seamless)
                return;
            o--
        }
        for (let n = kn.length - 1; n >= 0; n--) {
            const o = kn[n];
            if (null !== o.anchorEl.value && !1 !== o.anchorEl.value.contains(t) || t !== document.body && (null === o.innerRef.value || !1 !== o.innerRef.value.contains(t)))
                return;
            e.qClickOutside = !0,
            o.onClickOutside(e)
        }
    }
    function qn(e) {
        kn.push(e),
        1 === kn.length && (document.addEventListener("mousedown", Cn, Sn),
        document.addEventListener("touchstart", Cn, Sn))
    }
    function $n(e) {
        const t = kn.findIndex(t=>t === e);
        t > -1 && (kn.splice(t, 1),
        0 === kn.length && (clearTimeout(_n),
        document.removeEventListener("mousedown", Cn, Sn),
        document.removeEventListener("touchstart", Cn, Sn)))
    }
    let Mn, Tn;
    function Bn(e) {
        const t = e.split(" ");
        return 2 === t.length && (!0 !== ["top", "center", "bottom"].includes(t[0]) ? (console.error("Anchor/Self position must start with one of top/center/bottom"),
        !1) : !0 === ["left", "middle", "right", "start", "end"].includes(t[1]) || (console.error("Anchor/Self position must end with one of left/middle/right/start/end"),
        !1))
    }
    function zn(e) {
        return !e || 2 === e.length && ("number" === typeof e[0] && "number" === typeof e[1])
    }
    const On = {
        "start#ltr": "left",
        "start#rtl": "right",
        "end#ltr": "right",
        "end#rtl": "left"
    };
    function Vn(e, t) {
        const o = e.split(" ");
        return {
            vertical: o[0],
            horizontal: On[`${o[1]}#${!0 === t ? "rtl" : "ltr"}`]
        }
    }
    function Ln(e, t) {
        let {top: o, left: n, right: a, bottom: l, width: i, height: r} = e.getBoundingClientRect();
        return void 0 !== t && (o -= t[1],
        n -= t[0],
        l += t[1],
        a += t[0],
        i += t[0],
        r += t[1]),
        {
            top: o,
            left: n,
            right: a,
            bottom: l,
            width: i,
            height: r,
            middle: n + (a - n) / 2,
            center: o + (l - o) / 2
        }
    }
    function En(e) {
        return {
            top: 0,
            center: e.offsetHeight / 2,
            bottom: e.offsetHeight,
            left: 0,
            middle: e.offsetWidth / 2,
            right: e.offsetWidth
        }
    }
    function An(e) {
        if (!0 === v.is.ios && void 0 !== window.visualViewport) {
            const e = document.body.style
              , {offsetLeft: t, offsetTop: o} = window.visualViewport;
            t !== Mn && (e.setProperty("--q-pe-left", t + "px"),
            Mn = t),
            o !== Tn && (e.setProperty("--q-pe-top", o + "px"),
            Tn = o)
        }
        let t;
        const {scrollLeft: o, scrollTop: n} = e.el;
        if (void 0 === e.absoluteOffset)
            t = Ln(e.anchorEl, !0 === e.cover ? [0, 0] : e.offset);
        else {
            const {top: o, left: n} = e.anchorEl.getBoundingClientRect()
              , a = o + e.absoluteOffset.top
              , l = n + e.absoluteOffset.left;
            t = {
                top: a,
                left: l,
                width: 1,
                height: 1,
                right: l + 1,
                center: a,
                middle: l,
                bottom: a + 1
            }
        }
        let a = {
            maxHeight: e.maxHeight,
            maxWidth: e.maxWidth,
            visibility: "visible"
        };
        !0 !== e.fit && !0 !== e.cover || (a.minWidth = t.width + "px",
        !0 === e.cover && (a.minHeight = t.height + "px")),
        Object.assign(e.el.style, a);
        const l = En(e.el)
          , i = {
            top: t[e.anchorOrigin.vertical] - l[e.selfOrigin.vertical],
            left: t[e.anchorOrigin.horizontal] - l[e.selfOrigin.horizontal]
        };
        Pn(i, t, l, e.anchorOrigin, e.selfOrigin),
        a = {
            top: i.top + "px",
            left: i.left + "px"
        },
        void 0 !== i.maxHeight && (a.maxHeight = i.maxHeight + "px",
        t.height > i.maxHeight && (a.minHeight = a.maxHeight)),
        void 0 !== i.maxWidth && (a.maxWidth = i.maxWidth + "px",
        t.width > i.maxWidth && (a.minWidth = a.maxWidth)),
        Object.assign(e.el.style, a),
        e.el.scrollTop !== n && (e.el.scrollTop = n),
        e.el.scrollLeft !== o && (e.el.scrollLeft = o)
    }
    function Pn(e, t, o, n, a) {
        const l = o.bottom
          , i = o.right
          , r = rn()
          , s = window.innerHeight - r
          , u = document.body.clientWidth;
        if (e.top < 0 || e.top + l > s)
            if ("center" === a.vertical)
                e.top = t[n.vertical] > s / 2 ? Math.max(0, s - l) : 0,
                e.maxHeight = Math.min(l, s);
            else if (t[n.vertical] > s / 2) {
                const o = Math.min(s, "center" === n.vertical ? t.center : n.vertical === a.vertical ? t.bottom : t.top);
                e.maxHeight = Math.min(l, o),
                e.top = Math.max(0, o - l)
            } else
                e.top = Math.max(0, "center" === n.vertical ? t.center : n.vertical === a.vertical ? t.top : t.bottom),
                e.maxHeight = Math.min(l, s - e.top);
        if (e.left < 0 || e.left + i > u)
            if (e.maxWidth = Math.min(i, u),
            "middle" === a.horizontal)
                e.left = t[n.horizontal] > u / 2 ? Math.max(0, u - i) : 0;
            else if (t[n.horizontal] > u / 2) {
                const o = Math.min(u, "middle" === n.horizontal ? t.middle : n.horizontal === a.horizontal ? t.right : t.left);
                e.maxWidth = Math.min(i, o),
                e.left = Math.max(0, o - e.maxWidth)
            } else
                e.left = Math.max(0, "middle" === n.horizontal ? t.middle : n.horizontal === a.horizontal ? t.left : t.right),
                e.maxWidth = Math.min(i, u - e.left)
    }
    ["left", "middle", "right"].forEach(e=>{
        On[`${e}#ltr`] = e,
        On[`${e}#rtl`] = e
    }
    );
    var Rn = Me({
        name: "QMenu",
        inheritAttrs: !1,
        props: {
            ...yo,
            ..._o,
            ...yt,
            ...Do,
            persistent: Boolean,
            autoClose: Boolean,
            separateClosePopup: Boolean,
            noRouteDismiss: Boolean,
            noRefocus: Boolean,
            noFocus: Boolean,
            fit: Boolean,
            cover: Boolean,
            square: Boolean,
            anchor: {
                type: String,
                validator: Bn
            },
            self: {
                type: String,
                validator: Bn
            },
            offset: {
                type: Array,
                validator: zn
            },
            scrollTarget: {
                default: void 0
            },
            touchPosition: Boolean,
            maxHeight: {
                type: String,
                default: null
            },
            maxWidth: {
                type: String,
                default: null
            }
        },
        emits: [...So, "click", "escape-key"],
        setup(t, {slots: o, emit: n, attrs: a}) {
            let l, i, r, s = null;
            const u = e.getCurrentInstance()
              , {proxy: c} = u
              , {$q: d} = c
              , v = e.ref(null)
              , p = e.ref(!1)
              , m = e.computed(()=>!0 !== t.persistent && !0 !== t.noRouteDismiss)
              , f = wt(t, d)
              , {registerTick: h, removeTick: g} = Qo()
              , {registerTimeout: b, removeTimeout: y} = Uo()
              , {transition: x, transitionStyle: _} = Ho(t, p)
              , {localScrollTarget: S, changeScrollEvent: k, unconfigureScrollTarget: C} = xo(t, D)
              , {anchorEl: q, canShow: M} = wo({
                showing: p
            })
              , {hide: T} = ko({
                showing: p,
                canShow: M,
                handleShow: I,
                handleHide: N,
                hideOnRouteChange: m,
                processOnMount: !0
            })
              , {showPortal: B, hidePortal: z, renderPortal: O} = jo(u, v, Y)
              , V = {
                anchorEl: q,
                innerRef: v,
                onClickOutside(e) {
                    if (!0 !== t.persistent && !0 === p.value)
                        return T(e),
                        ("touchstart" === e.type || e.target.classList.contains("q-dialog__backdrop")) && $(e),
                        !0
                }
            }
              , L = e.computed(()=>Vn(t.anchor || (!0 === t.cover ? "center middle" : "bottom start"), d.lang.rtl))
              , E = e.computed(()=>!0 === t.cover ? L.value : Vn(t.self || "top start", d.lang.rtl))
              , A = e.computed(()=>(!0 === t.square ? " q-menu--square" : "") + (!0 === f.value ? " q-menu--dark q-dark" : ""))
              , P = e.computed(()=>!0 === t.autoClose ? {
                onClick: H
            } : {})
              , R = e.computed(()=>!0 === p.value && !0 !== t.persistent);
            function F() {
                Bo(()=>{
                    let e = v.value;
                    e && !0 !== e.contains(document.activeElement) && (e = e.querySelector("[autofocus], [data-autofocus]") || e,
                    e.focus({
                        preventScroll: !0
                    }))
                }
                )
            }
            function I(o) {
                if (g(),
                y(),
                s = !1 === t.noRefocus ? document.activeElement : null,
                wn(Q),
                B(),
                D(),
                l = void 0,
                void 0 !== o && (t.touchPosition || t.contextMenu)) {
                    const e = w(o);
                    if (void 0 !== e.left) {
                        const {top: t, left: o} = q.value.getBoundingClientRect();
                        l = {
                            left: e.left - o,
                            top: e.top - t
                        }
                    }
                }
                void 0 === i && (i = e.watch(()=>d.screen.width + "|" + d.screen.height + "|" + t.self + "|" + t.anchor + "|" + d.lang.rtl, W)),
                !0 !== t.noFocus && document.activeElement.blur(),
                h(()=>{
                    W(),
                    !0 !== t.noFocus && F()
                }
                ),
                b(()=>{
                    !0 === d.platform.is.ios && (r = t.autoClose,
                    v.value.click()),
                    W(),
                    B(!0),
                    n("show", o)
                }
                , t.transitionDuration)
            }
            function N(e) {
                g(),
                y(),
                z(),
                j(!0),
                null === s || void 0 !== e && !0 === e.qClickOutside || (s.focus(),
                s = null),
                b(()=>{
                    z(!0),
                    n("hide", e)
                }
                , t.transitionDuration)
            }
            function j(e) {
                l = void 0,
                void 0 !== i && (i(),
                i = void 0),
                !0 !== e && !0 !== p.value || (xn(Q),
                C(),
                $n(V),
                gn(U)),
                !0 !== e && (s = null)
            }
            function D() {
                null === q.value && void 0 === t.scrollTarget || (S.value = Yo(q.value, t.scrollTarget),
                k(S.value, W))
            }
            function H(e) {
                !0 !== r ? (Fo(c, e),
                n("click", e)) : r = !1
            }
            function Q(e) {
                !0 === R.value && !0 !== t.noFocus && !0 !== Jt(v.value, e.target) && F()
            }
            function U(e) {
                n("escape-key"),
                T(e)
            }
            function W() {
                const e = v.value;
                null !== e && null !== q.value && An({
                    el: e,
                    offset: t.offset,
                    anchorEl: q.value,
                    anchorOrigin: L.value,
                    selfOrigin: E.value,
                    absoluteOffset: l,
                    fit: t.fit,
                    cover: t.cover,
                    maxHeight: t.maxHeight,
                    maxWidth: t.maxWidth
                })
            }
            function Y() {
                return e.h(e.Transition, {
                    name: x.value,
                    appear: !0
                }, ()=>!0 === p.value ? e.h("div", {
                    ...a,
                    ref: v,
                    tabindex: -1,
                    class: ["q-menu q-position-engine scroll" + A.value, a.class],
                    style: [a.style, _.value],
                    ...P.value
                }, Xe(o.default)) : null)
            }
            return e.watch(R, e=>{
                !0 === e ? (hn(U),
                qn(V)) : (gn(U),
                $n(V))
            }
            ),
            e.onBeforeUnmount(j),
            Object.assign(c, {
                focus: F,
                updatePosition: W
            }),
            O
        }
    })
      , Fn = Me({
        name: "QBtnDropdown",
        props: {
            ...uo,
            modelValue: Boolean,
            split: Boolean,
            dropdownIcon: String,
            contentClass: [Array, String, Object],
            contentStyle: [Array, String, Object],
            cover: Boolean,
            persistent: Boolean,
            noRouteDismiss: Boolean,
            autoClose: Boolean,
            menuAnchor: {
                type: String,
                default: "bottom end"
            },
            menuSelf: {
                type: String,
                default: "top end"
            },
            menuOffset: Array,
            disableMainBtn: Boolean,
            disableDropdown: Boolean,
            noIconAnimation: Boolean
        },
        emits: ["update:modelValue", "click", "before-show", "show", "before-hide", "hide"],
        setup(t, {slots: o, emit: n}) {
            const {proxy: a} = e.getCurrentInstance()
              , l = e.ref(t.modelValue)
              , i = e.ref(null)
              , r = e.computed(()=>{
                const e = {
                    "aria-expanded": !0 === l.value ? "true" : "false",
                    "aria-haspopup": "true"
                };
                return (!0 === t.disable || !1 === t.split && !0 === t.disableMainBtn || !0 === t.disableDropdown) && (e["aria-disabled"] = "true"),
                e
            }
            )
              , s = e.computed(()=>"q-btn-dropdown__arrow" + (!0 === l.value && !1 === t.noIconAnimation ? " rotate-180" : "") + (!1 === t.split ? " q-btn-dropdown__arrow-container" : ""));
            function u(e) {
                l.value = !0,
                n("before-show", e)
            }
            function c(e) {
                n("show", e),
                n("update:modelValue", !0)
            }
            function d(e) {
                l.value = !1,
                n("before-hide", e)
            }
            function v(e) {
                n("hide", e),
                n("update:modelValue", !1)
            }
            function p(e) {
                n("click", e)
            }
            function m(e) {
                C(e),
                g(),
                n("click", e)
            }
            function f(e) {
                null !== i.value && i.value.toggle(e)
            }
            function h(e) {
                null !== i.value && i.value.show(e)
            }
            function g(e) {
                null !== i.value && i.value.hide(e)
            }
            return e.watch(()=>t.modelValue, e=>{
                null !== i.value && i.value[e ? "show" : "hide"]()
            }
            ),
            e.watch(()=>t.split, g),
            Object.assign(a, {
                show: h,
                hide: g,
                toggle: f
            }),
            e.onMounted(()=>{
                !0 === t.modelValue && h()
            }
            ),
            ()=>{
                const n = [e.h(ft, {
                    class: s.value,
                    name: t.dropdownIcon || a.$q.iconSet.arrow.dropdown
                })];
                return !0 !== t.disableDropdown && n.push(e.h(Rn, {
                    ref: i,
                    class: t.contentClass,
                    style: t.contentStyle,
                    cover: t.cover,
                    fit: !0,
                    persistent: t.persistent,
                    noRouteDismiss: t.noRouteDismiss,
                    autoClose: t.autoClose,
                    anchor: t.menuAnchor,
                    self: t.menuSelf,
                    offset: t.menuOffset,
                    separateClosePopup: !0,
                    onBeforeShow: u,
                    onShow: c,
                    onBeforeHide: d,
                    onHide: v
                }, o.default)),
                !1 === t.split ? e.h(ho, {
                    class: "q-btn-dropdown q-btn-dropdown--simple",
                    ...t,
                    disable: !0 === t.disable || !0 === t.disableMainBtn,
                    noWrap: !0,
                    round: !1,
                    ...r.value,
                    onClick: p
                }, ()=>Xe(o.label, []).concat(n)) : e.h(go, {
                    class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
                    outline: t.outline,
                    flat: t.flat,
                    rounded: t.rounded,
                    square: t.square,
                    push: t.push,
                    unelevated: t.unelevated,
                    glossy: t.glossy,
                    stretch: t.stretch
                }, ()=>[e.h(ho, {
                    class: "q-btn-dropdown--current",
                    ...t,
                    disable: !0 === t.disable || !0 === t.disableMainBtn,
                    noWrap: !0,
                    iconRight: t.iconRight,
                    round: !1,
                    onClick: m
                }, o.label), e.h(ho, {
                    class: "q-btn-dropdown__arrow-container q-anchor--skip",
                    ...r.value,
                    disable: !0 === t.disable || !0 === t.disableDropdown,
                    outline: t.outline,
                    flat: t.flat,
                    rounded: t.rounded,
                    push: t.push,
                    size: t.size,
                    color: t.color,
                    textColor: t.textColor,
                    dense: t.dense,
                    ripple: t.ripple
                }, ()=>n)])
            }
        }
    });
    const In = {
        name: String
    };
    function Nn(t) {
        return e.computed(()=>({
            type: "hidden",
            name: t.name,
            value: t.modelValue
        }))
    }
    function jn(t={}) {
        return (o,n,a)=>{
            o[n](e.h("input", {
                class: "hidden" + (a || ""),
                ...t.value
            }))
        }
    }
    function Dn(t) {
        return e.computed(()=>t.name || t.for)
    }
    var Hn = Me({
        name: "QBtnToggle",
        props: {
            ...In,
            modelValue: {
                required: !0
            },
            options: {
                type: Array,
                required: !0,
                validator: e=>e.every(e=>("label"in e || "icon"in e || "slot"in e) && "value"in e)
            },
            color: String,
            textColor: String,
            toggleColor: {
                type: String,
                default: "primary"
            },
            toggleTextColor: String,
            outline: Boolean,
            flat: Boolean,
            unelevated: Boolean,
            rounded: Boolean,
            push: Boolean,
            glossy: Boolean,
            size: String,
            padding: String,
            noCaps: Boolean,
            noWrap: Boolean,
            dense: Boolean,
            readonly: Boolean,
            disable: Boolean,
            stack: Boolean,
            stretch: Boolean,
            spread: Boolean,
            clearable: Boolean,
            ripple: {
                type: [Boolean, Object],
                default: !0
            }
        },
        emits: ["update:modelValue", "clear", "click"],
        setup(t, {slots: o, emit: n}) {
            const a = e.computed(()=>void 0 !== t.options.find(e=>e.value === t.modelValue))
              , l = e.computed(()=>({
                type: "hidden",
                name: t.name,
                value: t.modelValue
            }))
              , i = jn(l)
              , r = e.computed(()=>t.options.map((e,o)=>{
                const {attrs: n, value: a, slot: l, ...i} = e;
                return {
                    slot: l,
                    props: {
                        key: o,
                        onClick(t) {
                            s(a, e, t)
                        },
                        "aria-pressed": a === t.modelValue ? "true" : "false",
                        ...n,
                        ...i,
                        outline: t.outline,
                        flat: t.flat,
                        rounded: t.rounded,
                        push: t.push,
                        unelevated: t.unelevated,
                        dense: t.dense,
                        disable: !0 === t.disable || !0 === i.disable,
                        color: a === t.modelValue ? u(i, "toggleColor") : u(i, "color"),
                        textColor: a === t.modelValue ? u(i, "toggleTextColor") : u(i, "textColor"),
                        noCaps: !0 === u(i, "noCaps"),
                        noWrap: !0 === u(i, "noWrap"),
                        size: u(i, "size"),
                        padding: u(i, "padding"),
                        ripple: u(i, "ripple"),
                        stack: !0 === u(i, "stack"),
                        stretch: !0 === u(i, "stretch")
                    }
                }
            }
            ));
            function s(e, o, a) {
                !0 !== t.readonly && (t.modelValue === e ? !0 === t.clearable && (n("update:modelValue", null, null),
                n("clear")) : n("update:modelValue", e, o),
                n("click", a))
            }
            function u(e, o) {
                return void 0 === e[o] ? t[o] : e[o]
            }
            function c() {
                const n = r.value.map(t=>{
                    return e.h(ho, t.props, void 0 !== t.slot ? o[t.slot] : void 0)
                }
                );
                return void 0 !== t.name && !0 !== t.disable && !0 === a.value && i(n, "push"),
                Ge(o.default, n)
            }
            return ()=>e.h(go, {
                class: "q-btn-toggle",
                outline: t.outline,
                flat: t.flat,
                rounded: t.rounded,
                push: t.push,
                stretch: t.stretch,
                unelevated: t.unelevated,
                glossy: t.glossy,
                spread: t.spread
            }, c)
        }
    })
      , Qn = Me({
        name: "QCard",
        props: {
            ...yt,
            tag: {
                type: String,
                default: "div"
            },
            square: Boolean,
            flat: Boolean,
            bordered: Boolean
        },
        setup(t, {slots: o}) {
            const n = e.getCurrentInstance()
              , a = wt(t, n.proxy.$q)
              , l = e.computed(()=>"q-card" + (!0 === a.value ? " q-card--dark q-dark" : "") + (!0 === t.bordered ? " q-card--bordered" : "") + (!0 === t.square ? " q-card--square no-border-radius" : "") + (!0 === t.flat ? " q-card--flat no-shadow" : ""));
            return ()=>e.h(t.tag, {
                class: l.value
            }, Xe(o.default))
        }
    })
      , Un = Me({
        name: "QCardSection",
        props: {
            tag: {
                type: String,
                default: "div"
            },
            horizontal: Boolean
        },
        setup(t, {slots: o}) {
            const n = e.computed(()=>"q-card__section" + ` q-card__section--${!0 === t.horizontal ? "horiz row no-wrap" : "vert"}`);
            return ()=>e.h(t.tag, {
                class: n.value
            }, Xe(o.default))
        }
    })
      , Wn = Me({
        name: "QCardActions",
        props: {
            ...Ct,
            vertical: Boolean
        },
        setup(t, {slots: o}) {
            const n = qt(t)
              , a = e.computed(()=>`q-card__actions ${n.value}` + ` q-card__actions--${!0 === t.vertical ? "vert column" : "horiz row"}`);
            return ()=>e.h("div", {
                class: a.value
            }, Xe(o.default))
        }
    });
    const Yn = {
        left: !0,
        right: !0,
        up: !0,
        down: !0,
        horizontal: !0,
        vertical: !0
    }
      , Kn = Object.keys(Yn);
    function Xn(e) {
        const t = {};
        for (const o of Kn)
            !0 === e[o] && (t[o] = !0);
        return 0 === Object.keys(t).length ? Yn : (!0 === t.horizontal ? t.left = t.right = !0 : !0 === t.left && !0 === t.right && (t.horizontal = !0),
        !0 === t.vertical ? t.up = t.down = !0 : !0 === t.up && !0 === t.down && (t.vertical = !0),
        !0 === t.horizontal && !0 === t.vertical && (t.all = !0),
        t)
    }
    function Zn(e, t) {
        return void 0 === t.event && void 0 !== e.target && !0 !== e.target.draggable && "function" === typeof t.handler && "INPUT" !== e.target.nodeName.toUpperCase() && (void 0 === e.qClonedBy || -1 === e.qClonedBy.indexOf(t.uid))
    }
    function Gn(e) {
        const t = [.06, 6, 50];
        return "string" === typeof e && e.length && e.split(":").forEach((e,o)=>{
            const n = parseFloat(e);
            n && (t[o] = n)
        }
        ),
        t
    }
    Yn.all = !0;
    var Jn = Te({
        name: "touch-swipe",
        beforeMount(e, {value: t, arg: o, modifiers: n}) {
            if (!0 !== n.mouse && !0 !== v.has.touch)
                return;
            const a = !0 === n.mouseCapture ? "Capture" : ""
              , l = {
                handler: t,
                sensitivity: Gn(o),
                direction: Xn(n),
                noop: h,
                mouseStart(e) {
                    Zn(e, l) && g(e) && (T(l, "temp", [[document, "mousemove", "move", `notPassive ${a}`], [document, "mouseup", "end", "notPassiveCapture"]]),
                    l.start(e, !0))
                },
                touchStart(e) {
                    if (Zn(e, l)) {
                        const t = e.target;
                        T(l, "temp", [[t, "touchmove", "move", "notPassiveCapture"], [t, "touchcancel", "end", "notPassiveCapture"], [t, "touchend", "end", "notPassiveCapture"]]),
                        l.start(e)
                    }
                },
                start(t, o) {
                    !0 === v.is.firefox && M(e, !0);
                    const n = w(t);
                    l.event = {
                        x: n.left,
                        y: n.top,
                        time: Date.now(),
                        mouse: !0 === o,
                        dir: !1
                    }
                },
                move(e) {
                    if (void 0 === l.event)
                        return;
                    if (!1 !== l.event.dir)
                        return void $(e);
                    const t = Date.now() - l.event.time;
                    if (0 === t)
                        return;
                    const o = w(e)
                      , n = o.left - l.event.x
                      , a = Math.abs(n)
                      , i = o.top - l.event.y
                      , r = Math.abs(i);
                    if (!0 !== l.event.mouse) {
                        if (a < l.sensitivity[1] && r < l.sensitivity[1])
                            return void l.end(e)
                    } else if (a < l.sensitivity[2] && r < l.sensitivity[2])
                        return;
                    const s = a / t
                      , u = r / t;
                    !0 === l.direction.vertical && a < r && a < 100 && u > l.sensitivity[0] && (l.event.dir = i < 0 ? "up" : "down"),
                    !0 === l.direction.horizontal && a > r && r < 100 && s > l.sensitivity[0] && (l.event.dir = n < 0 ? "left" : "right"),
                    !0 === l.direction.up && a < r && i < 0 && a < 100 && u > l.sensitivity[0] && (l.event.dir = "up"),
                    !0 === l.direction.down && a < r && i > 0 && a < 100 && u > l.sensitivity[0] && (l.event.dir = "down"),
                    !0 === l.direction.left && a > r && n < 0 && r < 100 && s > l.sensitivity[0] && (l.event.dir = "left"),
                    !0 === l.direction.right && a > r && n > 0 && r < 100 && s > l.sensitivity[0] && (l.event.dir = "right"),
                    !1 !== l.event.dir ? ($(e),
                    !0 === l.event.mouse && (document.body.classList.add("no-pointer-events--children"),
                    document.body.classList.add("non-selectable"),
                    bo(),
                    l.styleCleanup = (e=>{
                        l.styleCleanup = void 0,
                        document.body.classList.remove("non-selectable");
                        const t = ()=>{
                            document.body.classList.remove("no-pointer-events--children")
                        }
                        ;
                        !0 === e ? setTimeout(t, 50) : t()
                    }
                    )),
                    l.handler({
                        evt: e,
                        touch: !0 !== l.event.mouse,
                        mouse: l.event.mouse,
                        direction: l.event.dir,
                        duration: t,
                        distance: {
                            x: a,
                            y: r
                        }
                    })) : l.end(e)
                },
                end(t) {
                    void 0 !== l.event && (B(l, "temp"),
                    !0 === v.is.firefox && M(e, !1),
                    void 0 !== l.styleCleanup && l.styleCleanup(!0),
                    void 0 !== t && !1 !== l.event.dir && $(t),
                    l.event = void 0)
                }
            };
            e.__qtouchswipe = l,
            !0 === n.mouse && T(l, "main", [[e, "mousedown", "mouseStart", `passive ${a}`]]),
            !0 === v.has.touch && T(l, "main", [[e, "touchstart", "touchStart", `passive ${!0 === n.capture ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]])
        },
        updated(e, t) {
            const o = e.__qtouchswipe;
            void 0 !== o && (t.oldValue !== t.value && ("function" !== typeof t.value && o.end(),
            o.handler = t.value),
            o.direction = Xn(t.modifiers))
        },
        beforeUnmount(e) {
            const t = e.__qtouchswipe;
            void 0 !== t && (B(t, "main"),
            B(t, "temp"),
            !0 === v.is.firefox && M(e, !1),
            void 0 !== t.styleCleanup && t.styleCleanup(),
            delete e.__qtouchswipe)
        }
    });
    function ea() {
        const e = new Map;
        return {
            getCache: function(t, o) {
                return void 0 === e[t] ? e[t] = o : e[t]
            },
            getCacheWithFn: function(t, o) {
                return void 0 === e[t] ? e[t] = o() : e[t]
            }
        }
    }
    const ta = {
        name: {
            required: !0
        },
        disable: Boolean
    }
      , oa = {
        setup(t, {slots: o}) {
            return ()=>e.h("div", {
                class: "q-panel scroll",
                role: "tabpanel"
            }, Xe(o.default))
        }
    }
      , na = {
        modelValue: {
            required: !0
        },
        animated: Boolean,
        infinite: Boolean,
        swipeable: Boolean,
        vertical: Boolean,
        transitionPrev: String,
        transitionNext: String,
        transitionDuration: {
            type: [String, Number],
            default: 300
        },
        keepAlive: Boolean,
        keepAliveInclude: [String, Array, RegExp],
        keepAliveExclude: [String, Array, RegExp],
        keepAliveMax: Number
    }
      , aa = ["update:modelValue", "before-transition", "transition"];
    function la() {
        const {props: t, emit: o, proxy: n} = e.getCurrentInstance()
          , {getCacheWithFn: a} = ea();
        let l, i;
        const r = e.ref(null)
          , s = e.ref(null);
        function u(e) {
            const o = !0 === t.vertical ? "up" : "left";
            k((!0 === n.$q.lang.rtl ? -1 : 1) * (e.direction === o ? 1 : -1))
        }
        const c = e.computed(()=>{
            return [[Jn, u, void 0, {
                horizontal: !0 !== t.vertical,
                vertical: t.vertical,
                mouse: !0
            }]]
        }
        )
          , d = e.computed(()=>t.transitionPrev || `slide-${!0 === t.vertical ? "down" : "right"}`)
          , v = e.computed(()=>t.transitionNext || `slide-${!0 === t.vertical ? "up" : "left"}`)
          , p = e.computed(()=>`--q-transition-duration: ${t.transitionDuration}ms`)
          , m = e.computed(()=>"string" === typeof t.modelValue || "number" === typeof t.modelValue ? t.modelValue : String(t.modelValue))
          , f = e.computed(()=>({
            include: t.keepAliveInclude,
            exclude: t.keepAliveExclude,
            max: t.keepAliveMax
        }))
          , h = e.computed(()=>void 0 !== t.keepAliveInclude || void 0 !== t.keepAliveExclude);
        function g() {
            k(1)
        }
        function b() {
            k(-1)
        }
        function y(e) {
            o("update:modelValue", e)
        }
        function w(e) {
            return void 0 !== e && null !== e && "" !== e
        }
        function x(e) {
            return l.findIndex(t=>{
                return t.props.name === e && "" !== t.props.disable && !0 !== t.props.disable
            }
            )
        }
        function _() {
            return l.filter(e=>{
                return "" !== e.props.disable && !0 !== e.props.disable
            }
            )
        }
        function S(e) {
            const o = 0 !== e && !0 === t.animated && -1 !== r.value ? "q-transition--" + (-1 === e ? d.value : v.value) : null;
            s.value !== o && (s.value = o)
        }
        function k(e, n=r.value) {
            let a = n + e;
            while (a > -1 && a < l.length) {
                const t = l[a];
                if (void 0 !== t && "" !== t.props.disable && !0 !== t.props.disable)
                    return S(e),
                    i = !0,
                    o("update:modelValue", t.props.name),
                    void setTimeout(()=>{
                        i = !1
                    }
                    );
                a += e
            }
            !0 === t.infinite && l.length > 0 && -1 !== n && n !== l.length && k(e, -1 === e ? l.length : -1)
        }
        function C() {
            const e = x(t.modelValue);
            return r.value !== e && (r.value = e),
            !0
        }
        function q() {
            const o = !0 === w(t.modelValue) && C() && l[r.value];
            return !0 === t.keepAlive ? [e.h(e.KeepAlive, f.value, [e.h(!0 === h.value ? a(m.value, ()=>({
                ...oa,
                name: m.value
            })) : oa, {
                key: m.value,
                style: p.value
            }, ()=>o)])] : [e.h("div", {
                class: "q-panel scroll",
                style: p.value,
                key: m.value,
                role: "tabpanel"
            }, [o])]
        }
        function $() {
            if (0 !== l.length)
                return !0 === t.animated ? [e.h(e.Transition, {
                    name: s.value
                }, q)] : q()
        }
        function M(e) {
            return l = Tt(Xe(e.default, [])).filter(e=>null !== e.props && void 0 === e.props.slot && !0 === w(e.props.name)),
            l.length
        }
        function T() {
            return l
        }
        return e.watch(()=>t.modelValue, (t,n)=>{
            const a = !0 === w(t) ? x(t) : -1;
            !0 !== i && S(-1 === a ? 0 : a < x(n) ? -1 : 1),
            r.value !== a && (r.value = a,
            o("before-transition", t, n),
            e.nextTick(()=>{
                o("transition", t, n)
            }
            ))
        }
        ),
        Object.assign(n, {
            next: g,
            previous: b,
            goTo: y
        }),
        {
            panelIndex: r,
            panelDirectives: c,
            updatePanelsList: M,
            updatePanelIndex: C,
            getPanelContent: $,
            getEnabledPanels: _,
            getPanels: T,
            isValidPanelName: w,
            keepAliveProps: f,
            needsUniqueKeepAliveWrapper: h,
            goToPanelByOffset: k,
            goToPanel: y,
            nextPanel: g,
            previousPanel: b
        }
    }
    let ia = 0;
    const ra = {
        fullscreen: Boolean,
        noRouteFullscreenExit: Boolean
    }
      , sa = ["update:fullscreen", "fullscreen"];
    function ua() {
        const t = e.getCurrentInstance()
          , {props: o, emit: n, proxy: a} = t;
        let l, i, r;
        const s = e.ref(!1);
        function u() {
            !0 === s.value ? d() : c()
        }
        function c() {
            !0 !== s.value && (s.value = !0,
            r = a.$el.parentNode,
            r.replaceChild(i, a.$el),
            document.body.appendChild(a.$el),
            ia++,
            1 === ia && document.body.classList.add("q-body--fullscreen-mixin"),
            l = {
                handler: d
            },
            N.add(l))
        }
        function d() {
            !0 === s.value && (void 0 !== l && (N.remove(l),
            l = void 0),
            r.replaceChild(a.$el, i),
            s.value = !1,
            ia = Math.max(0, ia - 1),
            0 === ia && (document.body.classList.remove("q-body--fullscreen-mixin"),
            void 0 !== a.$el.scrollIntoView && setTimeout(()=>{
                a.$el.scrollIntoView()
            }
            )))
        }
        return !0 === Bt(t) && e.watch(()=>a.$route.fullPath, ()=>{
            !0 !== o.noRouteFullscreenExit && d()
        }
        ),
        e.watch(()=>o.fullscreen, e=>{
            s.value !== e && u()
        }
        ),
        e.watch(s, e=>{
            n("update:fullscreen", e),
            n("fullscreen", e)
        }
        ),
        e.onBeforeMount(()=>{
            i = document.createElement("span")
        }
        ),
        e.onMounted(()=>{
            !0 === o.fullscreen && c()
        }
        ),
        e.onBeforeUnmount(d),
        Object.assign(a, {
            toggleFullscreen: u,
            setFullscreen: c,
            exitFullscreen: d
        }),
        {
            inFullscreen: s,
            toggleFullscreen: u
        }
    }
    const ca = ["top", "right", "bottom", "left"]
      , da = ["regular", "flat", "outline", "push", "unelevated"];
    var va = Me({
        name: "QCarousel",
        props: {
            ...yt,
            ...na,
            ...ra,
            transitionPrev: {
                type: String,
                default: "fade"
            },
            transitionNext: {
                type: String,
                default: "fade"
            },
            height: String,
            padding: Boolean,
            controlColor: String,
            controlTextColor: String,
            controlType: {
                type: String,
                validator: e=>da.includes(e),
                default: "flat"
            },
            autoplay: [Number, Boolean],
            arrows: Boolean,
            prevIcon: String,
            nextIcon: String,
            navigation: Boolean,
            navigationPosition: {
                type: String,
                validator: e=>ca.includes(e)
            },
            navigationIcon: String,
            navigationActiveIcon: String,
            thumbnails: Boolean
        },
        emits: [...sa, ...aa],
        setup(t, {slots: o}) {
            const {proxy: {$q: n}} = e.getCurrentInstance()
              , a = wt(t, n);
            let l, i;
            const {updatePanelsList: r, getPanelContent: s, panelDirectives: u, goToPanel: c, previousPanel: d, nextPanel: v, getEnabledPanels: p, panelIndex: m} = la()
              , {inFullscreen: f} = ua()
              , h = e.computed(()=>!0 !== f.value && void 0 !== t.height ? {
                height: t.height
            } : {})
              , g = e.computed(()=>!0 === t.vertical ? "vertical" : "horizontal")
              , b = e.computed(()=>`q-carousel q-panel-parent q-carousel--with ${!0 === t.padding ? "" : "out"}-padding` + (!0 === f.value ? " fullscreen" : "") + (!0 === a.value ? " q-carousel--dark q-dark" : "") + (!0 === t.arrows ? ` q-carousel--arrows-${g.value}` : "") + (!0 === t.navigation ? ` q-carousel--navigation-${_.value}` : ""))
              , y = e.computed(()=>{
                const e = [t.prevIcon || n.iconSet.carousel[!0 === t.vertical ? "up" : "left"], t.nextIcon || n.iconSet.carousel[!0 === t.vertical ? "down" : "right"]];
                return !1 === t.vertical && !0 === n.lang.rtl ? e.reverse() : e
            }
            )
              , w = e.computed(()=>t.navigationIcon || n.iconSet.carousel.navigationIcon)
              , x = e.computed(()=>t.navigationActiveIcon || w.value)
              , _ = e.computed(()=>t.navigationPosition || (!0 === t.vertical ? "right" : "bottom"))
              , S = e.computed(()=>({
                color: t.controlColor,
                textColor: t.controlTextColor,
                round: !0,
                [t.controlType]: !0,
                dense: !0
            }));
            function k() {
                const e = !0 === _e(t.autoplay) ? t.autoplay : 5e3;
                l = setTimeout(e >= 0 ? v : d, Math.abs(e))
            }
            function C(o, n) {
                return e.h("div", {
                    class: "q-carousel__control q-carousel__navigation no-wrap absolute flex" + ` q-carousel__navigation--${o} q-carousel__navigation--${_.value}` + (void 0 !== t.controlColor ? ` text-${t.controlColor}` : "")
                }, [e.h("div", {
                    class: "q-carousel__navigation-inner flex flex-center no-wrap"
                }, p().map(n))])
            }
            function q() {
                const n = [];
                if (!0 === t.navigation) {
                    const t = void 0 !== o["navigation-icon"] ? o["navigation-icon"] : t=>e.h(ho, {
                        key: "nav" + t.name,
                        class: `q-carousel__navigation-icon q-carousel__navigation-icon--${!0 === t.active ? "" : "in"}active`,
                        ...t.btnProps,
                        onClick: t.onClick
                    })
                      , a = i - 1;
                    n.push(C("buttons", (e,o)=>{
                        const n = e.props.name
                          , l = m.value === o;
                        return t({
                            index: o,
                            maxIndex: a,
                            name: n,
                            active: l,
                            btnProps: {
                                icon: !0 === l ? x.value : w.value,
                                size: "sm",
                                ...S.value
                            },
                            onClick: ()=>{
                                c(n)
                            }
                        })
                    }
                    ))
                } else if (!0 === t.thumbnails) {
                    const o = void 0 !== t.controlColor ? ` text-${t.controlColor}` : "";
                    n.push(C("thumbnails", n=>{
                        const a = n.props;
                        return e.h("img", {
                            key: "tmb#" + a.name,
                            class: `q-carousel__thumbnail q-carousel__thumbnail--${a.name === t.modelValue ? "" : "in"}active` + o,
                            src: a.imgSrc || a["img-src"],
                            onClick: ()=>{
                                c(a.name)
                            }
                        })
                    }
                    ))
                }
                return !0 === t.arrows && m.value >= 0 && ((!0 === t.infinite || m.value > 0) && n.push(e.h("div", {
                    key: "prev",
                    class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${g.value} absolute flex flex-center`
                }, [e.h(ho, {
                    icon: y.value[0],
                    ...S.value,
                    onClick: d
                })])),
                (!0 === t.infinite || m.value < i - 1) && n.push(e.h("div", {
                    key: "next",
                    class: "q-carousel__control q-carousel__arrow q-carousel__next-arrow" + ` q-carousel__next-arrow--${g.value} absolute flex flex-center`
                }, [e.h(ho, {
                    icon: y.value[1],
                    ...S.value,
                    onClick: v
                })]))),
                Ge(o.control, n)
            }
            return e.watch(()=>t.modelValue, ()=>{
                t.autoplay && (clearInterval(l),
                k())
            }
            ),
            e.watch(()=>t.autoplay, e=>{
                e ? k() : clearInterval(l)
            }
            ),
            e.onMounted(()=>{
                t.autoplay && k()
            }
            ),
            e.onBeforeUnmount(()=>{
                clearInterval(l)
            }
            ),
            ()=>{
                return i = r(o),
                e.h("div", {
                    class: b.value,
                    style: h.value
                }, [et("div", {
                    class: "q-carousel__slides-container"
                }, s(), "sl-cont", t.swipeable, ()=>u.value)].concat(q()))
            }
        }
    })
      , pa = Me({
        name: "QCarouselSlide",
        props: {
            ...ta,
            imgSrc: String
        },
        setup(t, {slots: o}) {
            const n = e.computed(()=>t.imgSrc ? {
                backgroundImage: `url("${t.imgSrc}")`
            } : {});
            return ()=>e.h("div", {
                class: "q-carousel__slide",
                style: n.value
            }, Xe(o.default))
        }
    })
      , ma = Me({
        name: "QCarouselControl",
        props: {
            position: {
                type: String,
                default: "bottom-right",
                validator: e=>["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e)
            },
            offset: {
                type: Array,
                default: ()=>[18, 18],
                validator: e=>2 === e.length
            }
        },
        setup(t, {slots: o}) {
            const n = e.computed(()=>`q-carousel__control absolute absolute-${t.position}`)
              , a = e.computed(()=>({
                margin: `${t.offset[1]}px ${t.offset[0]}px`
            }));
            return ()=>e.h("div", {
                class: n.value,
                style: a.value
            }, Xe(o.default))
        }
    })
      , fa = Me({
        name: "QChatMessage",
        props: {
            sent: Boolean,
            label: String,
            bgColor: String,
            textColor: String,
            name: String,
            avatar: String,
            text: Array,
            stamp: String,
            size: String,
            labelHtml: Boolean,
            nameHtml: Boolean,
            textHtml: Boolean,
            stampHtml: Boolean
        },
        setup(t, {slots: o}) {
            const n = e.computed(()=>!0 === t.sent ? "sent" : "received")
              , a = e.computed(()=>`q-message-text-content q-message-text-content--${n.value}` + (void 0 !== t.textColor ? ` text-${t.textColor}` : ""))
              , l = e.computed(()=>`q-message-text q-message-text--${n.value}` + (void 0 !== t.bgColor ? ` text-${t.bgColor}` : ""))
              , i = e.computed(()=>"q-message-container row items-end no-wrap" + (!0 === t.sent ? " reverse" : ""))
              , r = e.computed(()=>void 0 !== t.size ? `col-${t.size}` : "")
              , s = e.computed(()=>({
                msg: !0 === t.textHtml ? "innerHTML" : "textContent",
                stamp: !0 === t.stampHtml ? "innerHTML" : "textContent",
                name: !0 === t.nameHtml ? "innerHTML" : "textContent",
                label: !0 === t.labelHtml ? "innerHTML" : "textContent"
            }));
            function u(n) {
                return void 0 !== o.stamp ? [n, e.h("div", {
                    class: "q-message-stamp"
                }, o.stamp())] : t.stamp ? [n, e.h("div", {
                    class: "q-message-stamp",
                    [s.value.stamp]: t.stamp
                })] : [n]
            }
            function c(t, o) {
                const n = !0 === o ? t.length > 1 ? e=>e : t=>e.h("div", [t]) : t=>e.h("div", {
                    [s.value.msg]: t
                });
                return t.map((t,o)=>e.h("div", {
                    key: o,
                    class: l.value
                }, [e.h("div", {
                    class: a.value
                }, u(n(t)))]))
            }
            return ()=>{
                const a = [];
                void 0 !== o.avatar ? a.push(o.avatar()) : void 0 !== t.avatar && a.push(e.h("img", {
                    class: `q-message-avatar q-message-avatar--${n.value}`,
                    src: t.avatar,
                    "aria-hidden": "true"
                }));
                const l = [];
                void 0 !== o.name ? l.push(e.h("div", {
                    class: `q-message-name q-message-name--${n.value}`
                }, o.name())) : void 0 !== t.name && l.push(e.h("div", {
                    class: `q-message-name q-message-name--${n.value}`,
                    [s.value.name]: t.name
                })),
                void 0 !== o.default ? l.push(c(Tt(o.default()), !0)) : void 0 !== t.text && l.push(c(t.text)),
                a.push(e.h("div", {
                    class: r.value
                }, l));
                const u = [];
                return void 0 !== o.label ? u.push(e.h("div", {
                    class: "q-message-label"
                }, o.label())) : void 0 !== t.label && u.push(e.h("div", {
                    class: "q-message-label",
                    [s.value.label]: t.label
                })),
                u.push(e.h("div", {
                    class: i.value
                }, a)),
                e.h("div", {
                    class: `q-message q-message-${n.value}`
                }, u)
            }
        }
    });
    function ha(t, o) {
        const n = e.ref(null)
          , a = e.computed(()=>{
            return !0 === t.disable ? null : e.h("span", {
                ref: n,
                class: "no-outline",
                tabindex: -1
            })
        }
        );
        function l(e) {
            const t = o.value;
            void 0 !== e && 0 === e.type.indexOf("key") ? null !== t && document.activeElement !== t && !0 === t.contains(document.activeElement) && t.focus() : null !== n.value && (void 0 === e || null !== t && !0 === t.contains(e.target)) && n.value.focus()
        }
        return {
            refocusTargetEl: a,
            refocusTarget: l
        }
    }
    var ga = {
        xs: 30,
        sm: 35,
        md: 40,
        lg: 50,
        xl: 60
    };
    const ba = {
        ...yt,
        ...Ye,
        ...In,
        modelValue: {
            required: !0,
            default: null
        },
        val: {},
        trueValue: {
            default: !0
        },
        falseValue: {
            default: !1
        },
        indeterminateValue: {
            default: null
        },
        checkedIcon: String,
        uncheckedIcon: String,
        indeterminateIcon: String,
        toggleOrder: {
            type: String,
            validator: e=>"tf" === e || "ft" === e
        },
        toggleIndeterminate: Boolean,
        label: String,
        leftLabel: Boolean,
        color: String,
        keepColor: Boolean,
        dense: Boolean,
        disable: Boolean,
        tabindex: [String, Number]
    }
      , ya = ["update:modelValue"];
    function wa(t, o) {
        const {props: n, slots: a, emit: l, proxy: i} = e.getCurrentInstance()
          , {$q: r} = i
          , s = wt(n, r)
          , u = e.ref(null)
          , {refocusTargetEl: c, refocusTarget: d} = ha(n, u)
          , v = Ke(n, ga)
          , p = e.computed(()=>void 0 !== n.val && Array.isArray(n.modelValue))
          , m = e.computed(()=>{
            const t = e.toRaw(n.val);
            return !0 === p.value ? n.modelValue.findIndex(o=>e.toRaw(o) === t) : -1
        }
        )
          , f = e.computed(()=>!0 === p.value ? m.value > -1 : e.toRaw(n.modelValue) === e.toRaw(n.trueValue))
          , h = e.computed(()=>!0 === p.value ? -1 === m.value : e.toRaw(n.modelValue) === e.toRaw(n.falseValue))
          , g = e.computed(()=>!1 === f.value && !1 === h.value)
          , b = e.computed(()=>!0 === n.disable ? -1 : n.tabindex || 0)
          , y = e.computed(()=>`q-${t} cursor-pointer no-outline row inline no-wrap items-center` + (!0 === n.disable ? " disabled" : "") + (!0 === s.value ? ` q-${t}--dark` : "") + (!0 === n.dense ? ` q-${t}--dense` : "") + (!0 === n.leftLabel ? " reverse" : ""))
          , w = e.computed(()=>{
            const e = !0 === f.value ? "truthy" : !0 === h.value ? "falsy" : "indet"
              , o = void 0 === n.color || !0 !== n.keepColor && ("toggle" === t ? !0 !== f.value : !0 === h.value) ? "" : ` text-${n.color}`;
            return `q-${t}__inner relative-position non-selectable q-${t}__inner--${e}${o}`
        }
        )
          , x = e.computed(()=>{
            const e = {
                type: "checkbox"
            };
            return void 0 !== n.name && Object.assign(e, {
                "^checked": !0 === f.value ? "checked" : void 0,
                name: n.name,
                value: !0 === p.value ? n.val : n.trueValue
            }),
            e
        }
        )
          , _ = jn(x)
          , S = e.computed(()=>{
            const e = {
                tabindex: b.value,
                role: "checkbox",
                "aria-label": n.label,
                "aria-checked": !0 === g.value ? "mixed" : !0 === f.value ? "true" : "false"
            };
            return !0 === n.disable && (e["aria-disabled"] = "true"),
            e
        }
        );
        function k(e) {
            void 0 !== e && ($(e),
            d(e)),
            !0 !== n.disable && l("update:modelValue", C(), e)
        }
        function C() {
            if (!0 === p.value) {
                if (!0 === f.value) {
                    const e = n.modelValue.slice();
                    return e.splice(m.value, 1),
                    e
                }
                return n.modelValue.concat([n.val])
            }
            if (!0 === f.value) {
                if ("ft" !== n.toggleOrder || !1 === n.toggleIndeterminate)
                    return n.falseValue
            } else {
                if (!0 !== h.value)
                    return "ft" !== n.toggleOrder ? n.trueValue : n.falseValue;
                if ("ft" === n.toggleOrder || !1 === n.toggleIndeterminate)
                    return n.trueValue
            }
            return n.indeterminateValue
        }
        function q(e) {
            13 !== e.keyCode && 32 !== e.keyCode || $(e)
        }
        function M(e) {
            13 !== e.keyCode && 32 !== e.keyCode || k(e)
        }
        const T = o(f, g);
        return Object.assign(i, {
            toggle: k
        }),
        ()=>{
            const o = T();
            !0 !== n.disable && _(o, "unshift", ` q-${t}__native absolute q-ma-none q-pa-none`);
            const l = [e.h("div", {
                class: w.value,
                style: v.value
            }, o)];
            null !== c.value && l.push(c.value);
            const i = void 0 !== n.label ? Ge(a.default, [n.label]) : Xe(a.default);
            return void 0 !== i && l.push(e.h("div", {
                class: `q-${t}__label q-anchor--skip`
            }, i)),
            e.h("div", {
                ref: u,
                class: y.value,
                ...S.value,
                onClick: k,
                onKeydown: q,
                onKeyup: M
            }, l)
        }
    }
    const xa = e.h("div", {
        key: "svg",
        class: "q-checkbox__bg absolute"
    }, [e.h("svg", {
        class: "q-checkbox__svg fit absolute-full",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
    }, [e.h("path", {
        class: "q-checkbox__truthy",
        fill: "none",
        d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    }), e.h("path", {
        class: "q-checkbox__indet",
        d: "M4,14H20V10H4"
    })])]);
    var _a = Me({
        name: "QCheckbox",
        props: ba,
        emits: ya,
        setup(t) {
            function o(o, n) {
                const a = e.computed(()=>(!0 === o.value ? t.checkedIcon : !0 === n.value ? t.indeterminateIcon : t.uncheckedIcon) || null);
                return ()=>null !== a.value ? [e.h("div", {
                    key: "icon",
                    class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
                }, [e.h(ft, {
                    class: "q-checkbox__icon",
                    name: a.value
                })])] : [xa]
            }
            return wa("checkbox", o)
        }
    });
    const Sa = {
        xs: 8,
        sm: 10,
        md: 14,
        lg: 20,
        xl: 24
    };
    var ka = Me({
        name: "QChip",
        props: {
            ...yt,
            ...Ye,
            dense: Boolean,
            icon: String,
            iconRight: String,
            iconRemove: String,
            iconSelected: String,
            label: [String, Number],
            color: String,
            textColor: String,
            modelValue: {
                type: Boolean,
                default: !0
            },
            selected: {
                type: Boolean,
                default: null
            },
            square: Boolean,
            outline: Boolean,
            clickable: Boolean,
            removable: Boolean,
            tabindex: [String, Number],
            disable: Boolean,
            ripple: {
                type: [Boolean, Object],
                default: !0
            }
        },
        emits: ["update:modelValue", "update:selected", "remove", "click"],
        setup(t, {slots: o, emit: n}) {
            const {proxy: {$q: a}} = e.getCurrentInstance()
              , l = wt(t, a)
              , i = Ke(t, Sa)
              , r = e.computed(()=>!0 === t.selected || void 0 !== t.icon)
              , s = e.computed(()=>!0 === t.selected ? t.iconSelected || a.iconSet.chip.selected : t.icon)
              , u = e.computed(()=>t.iconRemove || a.iconSet.chip.remove)
              , c = e.computed(()=>!1 === t.disable && (!0 === t.clickable || null !== t.selected))
              , d = e.computed(()=>{
                const e = !0 === t.outline && t.color || t.textColor;
                return "q-chip row inline no-wrap items-center" + (!1 === t.outline && void 0 !== t.color ? ` bg-${t.color}` : "") + (e ? ` text-${e} q-chip--colored` : "") + (!0 === t.disable ? " disabled" : "") + (!0 === t.dense ? " q-chip--dense" : "") + (!0 === t.outline ? " q-chip--outline" : "") + (!0 === t.selected ? " q-chip--selected" : "") + (!0 === c.value ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (!0 === t.square ? " q-chip--square" : "") + (!0 === l.value ? " q-chip--dark q-dark" : "")
            }
            )
              , v = e.computed(()=>!0 === t.disable ? {
                tabindex: -1,
                "aria-disabled": "true"
            } : {
                tabindex: t.tabindex || 0
            });
            function p(e) {
                13 === e.keyCode && m(e)
            }
            function m(e) {
                t.disable || (n("update:selected", !t.selected),
                n("click", e))
            }
            function f(e) {
                void 0 !== e.keyCode && 13 !== e.keyCode || ($(e),
                !1 === t.disable && (n("update:modelValue", !1),
                n("remove")))
            }
            function h() {
                const n = [];
                !0 === c.value && n.push(e.h("div", {
                    class: "q-focus-helper"
                })),
                !0 === r.value && n.push(e.h(ft, {
                    class: "q-chip__icon q-chip__icon--left",
                    name: s.value
                }));
                const a = void 0 !== t.label ? [e.h("div", {
                    class: "ellipsis"
                }, [t.label])] : void 0;
                return n.push(e.h("div", {
                    class: "q-chip__content col row no-wrap items-center q-anchor--skip"
                }, Je(o.default, a))),
                t.iconRight && n.push(e.h(ft, {
                    class: "q-chip__icon q-chip__icon--right",
                    name: t.iconRight
                })),
                !0 === t.removable && n.push(e.h(ft, {
                    class: "q-chip__icon q-chip__icon--remove cursor-pointer",
                    name: u.value,
                    ...v.value,
                    onClick: f,
                    onKeyup: f
                })),
                n
            }
            return ()=>{
                if (!1 === t.modelValue)
                    return;
                const e = {
                    class: d.value,
                    style: i.value
                };
                return !0 === c.value && Object.assign(e, v.value, {
                    onClick: m,
                    onKeyup: p
                }),
                et("div", e, h(), "ripple", !1 !== t.ripple && !0 !== t.disable, ()=>[[ao, t.ripple]])
            }
        }
    });
    const Ca = {
        ...Ye,
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        color: String,
        centerColor: String,
        trackColor: String,
        fontSize: String,
        thickness: {
            type: Number,
            default: .2,
            validator: e=>e >= 0 && e <= 1
        },
        angle: {
            type: Number,
            default: 0
        },
        showValue: Boolean,
        reverse: Boolean,
        instantFeedback: Boolean
    }
      , qa = 50
      , $a = 2 * qa
      , Ma = $a * Math.PI
      , Ta = Math.round(1e3 * Ma) / 1e3;
    var Ba = Me({
        name: "QCircularProgress",
        props: {
            ...Ca,
            value: {
                type: Number,
                default: 0
            },
            animationSpeed: {
                type: [String, Number],
                default: 600
            },
            indeterminate: Boolean
        },
        setup(t, {slots: o}) {
            const {proxy: {$q: n}} = e.getCurrentInstance()
              , a = Ke(t)
              , l = e.computed(()=>{
                const e = (!0 === n.lang.rtl ? -1 : 1) * t.angle;
                return {
                    transform: t.reverse !== (!0 === n.lang.rtl) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - e}deg)` : `rotate3d(0, 0, 1, ${e - 90}deg)`
                }
            }
            )
              , i = e.computed(()=>!0 !== t.instantFeedback && !0 !== t.indeterminate ? {
                transition: `stroke-dashoffset ${t.animationSpeed}ms ease 0s, stroke ${t.animationSpeed}ms ease`
            } : "")
              , r = e.computed(()=>$a / (1 - t.thickness / 2))
              , s = e.computed(()=>`${r.value / 2} ${r.value / 2} ${r.value} ${r.value}`)
              , u = e.computed(()=>Ve(t.value, t.min, t.max))
              , c = e.computed(()=>Ma * (1 - (u.value - t.min) / (t.max - t.min)))
              , d = e.computed(()=>t.thickness / 2 * r.value);
            function v({thickness: t, offset: o, color: n, cls: a}) {
                return e.h("circle", {
                    class: "q-circular-progress__" + a + (void 0 !== n ? ` text-${n}` : ""),
                    style: i.value,
                    fill: "transparent",
                    stroke: "currentColor",
                    "stroke-width": t,
                    "stroke-dasharray": Ta,
                    "stroke-dashoffset": o,
                    cx: r.value,
                    cy: r.value,
                    r: qa
                })
            }
            return ()=>{
                const n = [];
                void 0 !== t.centerColor && "transparent" !== t.centerColor && n.push(e.h("circle", {
                    class: `q-circular-progress__center text-${t.centerColor}`,
                    fill: "currentColor",
                    r: qa - d.value / 2,
                    cx: r.value,
                    cy: r.value
                })),
                void 0 !== t.trackColor && "transparent" !== t.trackColor && n.push(v({
                    cls: "track",
                    thickness: d.value,
                    offset: 0,
                    color: t.trackColor
                })),
                n.push(v({
                    cls: "circle",
                    thickness: d.value,
                    offset: c.value,
                    color: t.color
                }));
                const i = [e.h("svg", {
                    class: "q-circular-progress__svg",
                    style: l.value,
                    viewBox: s.value,
                    "aria-hidden": "true"
                }, n)];
                return !0 === t.showValue && i.push(e.h("div", {
                    class: "q-circular-progress__text absolute-full row flex-center content-center",
                    style: {
                        fontSize: t.fontSize
                    }
                }, void 0 !== o.default ? o.default() : [e.h("div", u.value)])),
                e.h("div", {
                    class: `q-circular-progress q-circular-progress--${!0 === t.indeterminate ? "in" : ""}determinate`,
                    style: a.value,
                    role: "progressbar",
                    "aria-valuemin": t.min,
                    "aria-valuemax": t.max,
                    "aria-valuenow": !0 === t.indeterminate ? void 0 : u.value
                }, Je(o.internal, i))
            }
        }
    });
    function za(e, t, o) {
        const n = w(e);
        let a, l = n.left - t.event.x, i = n.top - t.event.y, r = Math.abs(l), s = Math.abs(i);
        const u = t.direction;
        !0 === u.horizontal && !0 !== u.vertical ? a = l < 0 ? "left" : "right" : !0 !== u.horizontal && !0 === u.vertical ? a = i < 0 ? "up" : "down" : !0 === u.up && i < 0 ? (a = "up",
        r > s && (!0 === u.left && l < 0 ? a = "left" : !0 === u.right && l > 0 && (a = "right"))) : !0 === u.down && i > 0 ? (a = "down",
        r > s && (!0 === u.left && l < 0 ? a = "left" : !0 === u.right && l > 0 && (a = "right"))) : !0 === u.left && l < 0 ? (a = "left",
        r < s && (!0 === u.up && i < 0 ? a = "up" : !0 === u.down && i > 0 && (a = "down"))) : !0 === u.right && l > 0 && (a = "right",
        r < s && (!0 === u.up && i < 0 ? a = "up" : !0 === u.down && i > 0 && (a = "down")));
        let c = !1;
        if (void 0 === a && !1 === o) {
            if (!0 === t.event.isFirst || void 0 === t.event.lastDir)
                return {};
            a = t.event.lastDir,
            c = !0,
            "left" === a || "right" === a ? (n.left -= l,
            r = 0,
            l = 0) : (n.top -= i,
            s = 0,
            i = 0)
        }
        return {
            synthetic: c,
            payload: {
                evt: e,
                touch: !0 !== t.event.mouse,
                mouse: !0 === t.event.mouse,
                position: n,
                direction: a,
                isFirst: t.event.isFirst,
                isFinal: !0 === o,
                duration: Date.now() - t.event.time,
                distance: {
                    x: r,
                    y: s
                },
                offset: {
                    x: l,
                    y: i
                },
                delta: {
                    x: n.left - t.event.lastX,
                    y: n.top - t.event.lastY
                }
            }
        }
    }
    let Oa = 0;
    var Va = Te({
        name: "touch-pan",
        beforeMount(e, {value: t, modifiers: o}) {
            if (!0 !== o.mouse && !0 !== v.has.touch)
                return;
            function n(e, t) {
                !0 === o.mouse && !0 === t ? $(e) : (!0 === o.stop && C(e),
                !0 === o.prevent && q(e))
            }
            const a = {
                uid: "qvtp_" + Oa++,
                handler: t,
                modifiers: o,
                direction: Xn(o),
                noop: h,
                mouseStart(e) {
                    Zn(e, a) && g(e) && (T(a, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]),
                    a.start(e, !0))
                },
                touchStart(e) {
                    if (Zn(e, a)) {
                        const t = e.target;
                        T(a, "temp", [[t, "touchmove", "move", "notPassiveCapture"], [t, "touchcancel", "end", "passiveCapture"], [t, "touchend", "end", "passiveCapture"]]),
                        a.start(e)
                    }
                },
                start(t, n) {
                    if (!0 === v.is.firefox && M(e, !0),
                    a.lastEvt = t,
                    !0 === n || !0 === o.stop) {
                        if (!0 !== a.direction.all && (!0 !== n || !0 !== a.modifiers.mouseAllDir)) {
                            const e = t.type.indexOf("mouse") > -1 ? new MouseEvent(t.type,t) : new TouchEvent(t.type,t);
                            !0 === t.defaultPrevented && q(e),
                            !0 === t.cancelBubble && C(e),
                            Object.assign(e, {
                                qKeyEvent: t.qKeyEvent,
                                qClickOutside: t.qClickOutside,
                                qAnchorHandled: t.qAnchorHandled,
                                qClonedBy: void 0 === t.qClonedBy ? [a.uid] : t.qClonedBy.concat(a.uid)
                            }),
                            a.initialEvent = {
                                target: t.target,
                                event: e
                            }
                        }
                        C(t)
                    }
                    const {left: l, top: i} = w(t);
                    a.event = {
                        x: l,
                        y: i,
                        time: Date.now(),
                        mouse: !0 === n,
                        detected: !1,
                        isFirst: !0,
                        isFinal: !1,
                        lastX: l,
                        lastY: i
                    }
                },
                move(e) {
                    if (void 0 === a.event)
                        return;
                    const t = w(e)
                      , l = t.left - a.event.x
                      , i = t.top - a.event.y;
                    if (0 === l && 0 === i)
                        return;
                    a.lastEvt = e;
                    const r = !0 === a.event.mouse
                      , s = ()=>{
                        n(e, r),
                        !0 !== o.preserveCursor && (document.documentElement.style.cursor = "grabbing"),
                        !0 === r && document.body.classList.add("no-pointer-events--children"),
                        document.body.classList.add("non-selectable"),
                        bo(),
                        a.styleCleanup = (e=>{
                            if (a.styleCleanup = void 0,
                            !0 !== o.preserveCursor && (document.documentElement.style.cursor = ""),
                            document.body.classList.remove("non-selectable"),
                            !0 === r) {
                                const t = ()=>{
                                    document.body.classList.remove("no-pointer-events--children")
                                }
                                ;
                                void 0 !== e ? setTimeout(()=>{
                                    t(),
                                    e()
                                }
                                , 50) : t()
                            } else
                                void 0 !== e && e()
                        }
                        )
                    }
                    ;
                    if (!0 === a.event.detected) {
                        !0 !== a.event.isFirst && n(e, a.event.mouse);
                        const {payload: t, synthetic: o} = za(e, a, !1);
                        return void (void 0 !== t && (!1 === a.handler(t) ? a.end(e) : (void 0 === a.styleCleanup && !0 === a.event.isFirst && s(),
                        a.event.lastX = t.position.left,
                        a.event.lastY = t.position.top,
                        a.event.lastDir = !0 === o ? void 0 : t.direction,
                        a.event.isFirst = !1)))
                    }
                    if (!0 === a.direction.all || !0 === r && !0 === a.modifiers.mouseAllDir)
                        return s(),
                        a.event.detected = !0,
                        void a.move(e);
                    const u = Math.abs(l)
                      , c = Math.abs(i);
                    u !== c && (!0 === a.direction.horizontal && u > c || !0 === a.direction.vertical && u < c || !0 === a.direction.up && u < c && i < 0 || !0 === a.direction.down && u < c && i > 0 || !0 === a.direction.left && u > c && l < 0 || !0 === a.direction.right && u > c && l > 0 ? (a.event.detected = !0,
                    a.move(e)) : a.end(e, !0))
                },
                end(t, o) {
                    if (void 0 !== a.event) {
                        if (B(a, "temp"),
                        !0 === v.is.firefox && M(e, !1),
                        !0 === o)
                            void 0 !== a.styleCleanup && a.styleCleanup(),
                            !0 !== a.event.detected && void 0 !== a.initialEvent && a.initialEvent.target.dispatchEvent(a.initialEvent.event);
                        else if (!0 === a.event.detected) {
                            !0 === a.event.isFirst && a.handler(za(void 0 === t ? a.lastEvt : t, a).payload);
                            const {payload: e} = za(void 0 === t ? a.lastEvt : t, a, !0)
                              , o = ()=>{
                                a.handler(e)
                            }
                            ;
                            void 0 !== a.styleCleanup ? a.styleCleanup(o) : o()
                        }
                        a.event = void 0,
                        a.initialEvent = void 0,
                        a.lastEvt = void 0
                    }
                }
            };
            e.__qtouchpan = a,
            !0 === o.mouse && T(a, "main", [[e, "mousedown", "mouseStart", `passive ${!0 === o.mouseCapture ? "Capture" : ""}`]]),
            !0 === v.has.touch && T(a, "main", [[e, "touchstart", "touchStart", `passive ${!0 === o.capture ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]])
        },
        updated(e, t) {
            const o = e.__qtouchpan;
            void 0 !== o && (t.oldValue !== t.value && ("function" !== typeof value && o.end(),
            o.handler = t.value),
            o.direction = Xn(t.modifiers))
        },
        beforeUnmount(e) {
            const t = e.__qtouchpan;
            void 0 !== t && (void 0 !== t.event && t.end(),
            B(t, "main"),
            B(t, "temp"),
            !0 === v.is.firefox && M(e, !1),
            void 0 !== t.styleCleanup && t.styleCleanup(),
            delete e.__qtouchpan)
        }
    });
    const La = "q-slider__marker-labels"
      , Ea = e=>({
        value: e
    })
      , Aa = ({marker: t})=>e.h("div", {
        key: t.value,
        style: t.style,
        class: t.classes
    }, t.label)
      , Pa = [34, 37, 40, 33, 39, 38]
      , Ra = {
        ...yt,
        ...In,
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        innerMin: Number,
        innerMax: Number,
        step: {
            type: Number,
            default: 1,
            validator: e=>e >= 0
        },
        snap: Boolean,
        vertical: Boolean,
        reverse: Boolean,
        hideSelection: Boolean,
        color: String,
        markerLabelsClass: String,
        label: Boolean,
        labelColor: String,
        labelTextColor: String,
        labelAlways: Boolean,
        switchLabelSide: Boolean,
        markers: [Boolean, Number],
        markerLabels: [Boolean, Array, Object, Function],
        switchMarkerLabelsSide: Boolean,
        trackImg: String,
        trackColor: String,
        innerTrackImg: String,
        innerTrackColor: String,
        selectionColor: String,
        selectionImg: String,
        thumbSize: {
            type: String,
            default: "20px"
        },
        trackSize: {
            type: String,
            default: "4px"
        },
        disable: Boolean,
        readonly: Boolean,
        dense: Boolean,
        tabindex: [String, Number],
        thumbColor: String,
        thumbPath: {
            type: String,
            default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"
        }
    }
      , Fa = ["pan", "update:modelValue", "change"];
    function Ia({updateValue: t, updatePosition: o, getDragging: n, formAttrs: a}) {
        const {props: l, emit: i, slots: r, proxy: {$q: s}} = e.getCurrentInstance()
          , u = wt(l, s)
          , c = jn(a)
          , d = e.ref(!1)
          , v = e.ref(!1)
          , p = e.ref(!1)
          , m = e.ref(!1)
          , f = e.computed(()=>!0 === l.vertical ? "--v" : "--h")
          , h = e.computed(()=>"-" + (!0 === l.switchLabelSide ? "switched" : "standard"))
          , g = e.computed(()=>!0 === l.vertical ? !0 === l.reverse : l.reverse !== (!0 === s.lang.rtl))
          , b = e.computed(()=>!0 === isNaN(l.innerMin) || l.innerMin < l.min ? l.min : l.innerMin)
          , y = e.computed(()=>!0 === isNaN(l.innerMax) || l.innerMax > l.max ? l.max : l.innerMax)
          , x = e.computed(()=>!0 !== l.disable && !0 !== l.readonly && b.value < y.value)
          , _ = e.computed(()=>(String(l.step).trim().split(".")[1] || "").length)
          , S = e.computed(()=>0 === l.step ? 1 : l.step)
          , k = e.computed(()=>!0 === x.value ? l.tabindex || 0 : -1)
          , C = e.computed(()=>l.max - l.min)
          , q = e.computed(()=>y.value - b.value)
          , $ = e.computed(()=>K(b.value))
          , M = e.computed(()=>K(y.value))
          , T = e.computed(()=>!0 === l.vertical ? !0 === g.value ? "bottom" : "top" : !0 === g.value ? "right" : "left")
          , B = e.computed(()=>!0 === l.vertical ? "height" : "width")
          , z = e.computed(()=>!0 === l.vertical ? "width" : "height")
          , O = e.computed(()=>!0 === l.vertical ? "vertical" : "horizontal")
          , V = e.computed(()=>{
            const e = {
                role: "slider",
                "aria-valuemin": b.value,
                "aria-valuemax": y.value,
                "aria-orientation": O.value,
                "data-step": l.step
            };
            return !0 === l.disable ? e["aria-disabled"] = "true" : !0 === l.readonly && (e["aria-readonly"] = "true"),
            e
        }
        )
          , L = e.computed(()=>`q-slider q-slider ${f.value} q-slider--${!0 === d.value ? "" : "in"}active inline no-wrap ` + (!0 === l.vertical ? "row" : "column") + (!0 === l.disable ? " disabled" : " q-slider--enabled" + (!0 === x.value ? " q-slider--editable" : "")) + ("both" === p.value ? " q-slider--focus" : "") + (l.label || !0 === l.labelAlways ? " q-slider--label" : "") + (!0 === l.labelAlways ? " q-slider--label-always" : "") + (!0 === u.value ? " q-slider--dark" : "") + (!0 === l.dense ? " q-slider--dense q-slider--dense" + f.value : ""));
        function E(e) {
            const t = "q-slider__" + e;
            return `${t} ${t}${f.value} ${t}${f.value}${h.value}`
        }
        function A(e) {
            const t = "q-slider__" + e;
            return `${t} ${t}${f.value}`
        }
        const P = e.computed(()=>{
            const e = l.selectionColor || l.color;
            return "q-slider__selection absolute" + (void 0 !== e ? ` text-${e}` : "")
        }
        )
          , R = e.computed(()=>A("markers") + " absolute overflow-hidden")
          , F = e.computed(()=>A("track-container"))
          , I = e.computed(()=>E("pin"))
          , N = e.computed(()=>E("label"))
          , j = e.computed(()=>E("text-container"))
          , D = e.computed(()=>E("marker-labels-container") + (void 0 !== l.markerLabelsClass ? ` ${l.markerLabelsClass}` : ""))
          , H = e.computed(()=>"q-slider__track relative-position no-outline" + (void 0 !== l.trackColor ? ` bg-${l.trackColor}` : ""))
          , Q = e.computed(()=>{
            const e = {
                [z.value]: l.trackSize
            };
            return void 0 !== l.trackImg && (e.backgroundImage = `url(${l.trackImg}) !important`),
            e
        }
        )
          , U = e.computed(()=>"q-slider__inner absolute" + (void 0 !== l.innerTrackColor ? ` bg-${l.innerTrackColor}` : ""))
          , W = e.computed(()=>{
            const e = {
                [T.value]: `${100 * $.value}%`,
                [B.value]: `${100 * (M.value - $.value)}%`
            };
            return void 0 !== l.innerTrackImg && (e.backgroundImage = `url(${l.innerTrackImg}) !important`),
            e
        }
        );
        function Y(e) {
            const {min: t, max: o, step: n} = l;
            let a = t + e * (o - t);
            if (n > 0) {
                const e = (a - t) % n;
                a += (Math.abs(e) >= n / 2 ? (e < 0 ? -1 : 1) * n : 0) - e
            }
            return _.value > 0 && (a = parseFloat(a.toFixed(_.value))),
            Ve(a, b.value, y.value)
        }
        function K(e) {
            return 0 === C.value ? 0 : (e - l.min) / C.value
        }
        function X(e, t) {
            const o = w(e)
              , n = !0 === l.vertical ? Ve((o.top - t.top) / t.height, 0, 1) : Ve((o.left - t.left) / t.width, 0, 1);
            return Ve(!0 === g.value ? 1 - n : n, $.value, M.value)
        }
        const Z = e.computed(()=>!0 === _e(l.markers) ? l.markers : S.value)
          , G = e.computed(()=>{
            const e = []
              , t = Z.value
              , o = l.max;
            let n = l.min;
            do {
                e.push(n),
                n += t
            } while (n < o);
            return e.push(o),
            e
        }
        )
          , J = e.computed(()=>{
            const e = ` ${La}${f.value}-`;
            return La + `${e}${!0 === l.switchMarkerLabelsSide ? "switched" : "standard"}` + `${e}${!0 === g.value ? "rtl" : "ltr"}`
        }
        )
          , ee = e.computed(()=>{
            return !1 === l.markerLabels ? null : ne(l.markerLabels).map((e,t)=>({
                index: t,
                value: e.value,
                label: e.label || e.value,
                classes: J.value + (void 0 !== e.classes ? " " + e.classes : ""),
                style: {
                    ...ae(e.value),
                    ...e.style || {}
                }
            }))
        }
        )
          , te = e.computed(()=>({
            markerList: ee.value,
            markerMap: le.value,
            classes: J.value,
            getStyle: ae
        }))
          , oe = e.computed(()=>{
            if (0 !== q.value) {
                const e = 100 * Z.value / q.value;
                return {
                    ...W.value,
                    backgroundSize: !0 === l.vertical ? `2px ${e}%` : `${e}% 2px`
                }
            }
            return null
        }
        );
        function ne(e) {
            if (!1 === e)
                return null;
            if (!0 === e)
                return G.value.map(Ea);
            if ("function" === typeof e)
                return G.value.map(t=>{
                    const o = e(t);
                    return !0 === ye(o) ? {
                        ...o,
                        value: t
                    } : {
                        value: t,
                        label: o
                    }
                }
                );
            const t = ({value: e})=>e >= l.min && e <= l.max;
            return !0 === Array.isArray(e) ? e.map(e=>!0 === ye(e) ? e : {
                value: e
            }).filter(t) : Object.keys(e).map(t=>{
                const o = e[t]
                  , n = Number(t);
                return !0 === ye(o) ? {
                    ...o,
                    value: n
                } : {
                    value: n,
                    label: o
                }
            }
            ).filter(t)
        }
        function ae(e) {
            return {
                [T.value]: `${100 * (e - l.min) / C.value}%`
            }
        }
        const le = e.computed(()=>{
            if (!1 === l.markerLabels)
                return null;
            const e = {};
            return ee.value.forEach(t=>{
                e[t.value] = t
            }
            ),
            e
        }
        );
        function ie() {
            if (void 0 !== r["marker-label-group"])
                return r["marker-label-group"](te.value);
            const e = r["marker-label"] || Aa;
            return ee.value.map(t=>e({
                marker: t,
                ...te.value
            }))
        }
        const re = e.computed(()=>{
            return [[Va, se, void 0, {
                [O.value]: !0,
                prevent: !0,
                stop: !0,
                mouse: !0,
                mouseAllDir: !0
            }]]
        }
        );
        function se(e) {
            !0 === e.isFinal ? (void 0 !== m.value && (o(e.evt),
            !0 === e.touch && t(!0),
            m.value = void 0,
            i("pan", "end")),
            d.value = !1,
            p.value = !1) : !0 === e.isFirst ? (m.value = n(e.evt),
            o(e.evt),
            t(),
            d.value = !0,
            i("pan", "start")) : (o(e.evt),
            t())
        }
        function ue() {
            p.value = !1
        }
        function ce(e) {
            o(e, n(e)),
            t(),
            v.value = !0,
            d.value = !0,
            document.addEventListener("mouseup", de, !0)
        }
        function de() {
            v.value = !1,
            d.value = !1,
            t(!0),
            ue(),
            document.removeEventListener("mouseup", de, !0)
        }
        function ve(e) {
            o(e, n(e)),
            t(!0)
        }
        function pe(e) {
            Pa.includes(e.keyCode) && t(!0)
        }
        function me(e) {
            if (!0 === l.vertical)
                return null;
            const t = s.lang.rtl !== l.reverse ? 1 - e : e;
            return {
                transform: `translateX(calc(${2 * t - 1} * ${l.thumbSize} / 2 + ${50 - 100 * t}%))`
            }
        }
        function fe(t) {
            const o = e.computed(()=>!1 !== v.value || p.value !== t.focusValue && "both" !== p.value ? "" : " q-slider--focus")
              , n = e.computed(()=>`q-slider__thumb q-slider__thumb ${f.value} q-slider__thumb ${f.value}-${!0 === g.value ? "rtl" : "ltr"} absolute non-selectable` + o.value + (void 0 !== t.thumbColor.value ? ` text-${t.thumbColor.value}` : ""))
              , a = e.computed(()=>({
                width: l.thumbSize,
                height: l.thumbSize,
                [T.value]: `${100 * t.ratio.value}%`,
                zIndex: p.value === t.focusValue ? 2 : void 0
            }))
              , i = e.computed(()=>void 0 !== t.labelColor.value ? ` text-${t.labelColor.value}` : "")
              , r = e.computed(()=>me(t.ratio.value))
              , s = e.computed(()=>"q-slider__text" + (void 0 !== t.labelTextColor.value ? ` text-${t.labelTextColor.value}` : ""));
            return ()=>{
                const o = [e.h("svg", {
                    class: "q-slider__thumb-shape absolute-full",
                    viewBox: "0 0 20 20",
                    "aria-hidden": "true"
                }, [e.h("path", {
                    d: l.thumbPath
                })]), e.h("div", {
                    class: "q-slider__focus-ring fit"
                })];
                return !0 !== l.label && !0 !== l.labelAlways || (o.push(e.h("div", {
                    class: I.value + " absolute fit no-pointer-events" + i.value
                }, [e.h("div", {
                    class: N.value,
                    style: {
                        minWidth: l.thumbSize
                    }
                }, [e.h("div", {
                    class: j.value,
                    style: r.value
                }, [e.h("span", {
                    class: s.value
                }, t.label.value)])])])),
                void 0 !== l.name && !0 !== l.disable && c(o, "push")),
                e.h("div", {
                    class: n.value,
                    style: a.value,
                    ...t.getNodeData()
                }, o)
            }
        }
        function he(t, o, n, a) {
            const i = [];
            "transparent" !== l.innerTrackColor && i.push(e.h("div", {
                key: "inner",
                class: U.value,
                style: W.value
            })),
            "transparent" !== l.selectionColor && i.push(e.h("div", {
                key: "selection",
                class: P.value,
                style: t.value
            })),
            !1 !== l.markers && i.push(e.h("div", {
                key: "marker",
                class: R.value,
                style: oe.value
            })),
            a(i);
            const r = [et("div", {
                key: "trackC",
                class: F.value,
                tabindex: o.value,
                ...n.value
            }, [e.h("div", {
                class: H.value,
                style: Q.value
            }, i)], "slide", x.value, ()=>re.value)];
            if (!1 !== l.markerLabels) {
                const t = !0 === l.switchMarkerLabelsSide ? "unshift" : "push";
                r[t](e.h("div", {
                    key: "markerL",
                    class: D.value
                }, ie()))
            }
            return r
        }
        return e.onBeforeUnmount(()=>{
            document.removeEventListener("mouseup", de, !0)
        }
        ),
        {
            state: {
                active: d,
                focus: p,
                preventFocus: v,
                dragging: m,
                editable: x,
                classes: L,
                tabindex: k,
                attributes: V,
                step: S,
                decimals: _,
                trackLen: C,
                innerMin: b,
                innerMinRatio: $,
                innerMax: y,
                innerMaxRatio: M,
                positionProp: T,
                sizeProp: B,
                isReversed: g
            },
            methods: {
                onActivate: ce,
                onMobileClick: ve,
                onBlur: ue,
                onKeyup: pe,
                getContent: he,
                getThumbRenderFn: fe,
                convertRatioToModel: Y,
                convertModelToRatio: K,
                getDraggingRatio: X
            }
        }
    }
    const Na = ()=>({});
    var ja = Me({
        name: "QSlider",
        props: {
            ...Ra,
            modelValue: {
                required: !0,
                default: null,
                validator: e=>"number" === typeof e || null === e
            },
            labelValue: [String, Number]
        },
        emits: Fa,
        setup(t, {emit: o}) {
            const {proxy: {$q: n}} = e.getCurrentInstance()
              , {state: a, methods: l} = Ia({
                updateValue: f,
                updatePosition: g,
                getDragging: h,
                formAttrs: Nn(t)
            })
              , i = e.ref(null)
              , r = e.ref(0)
              , s = e.ref(0);
            function u() {
                s.value = null === t.modelValue ? a.innerMin.value : Ve(t.modelValue, a.innerMin.value, a.innerMax.value)
            }
            e.watch(()=>`${t.modelValue}|${a.innerMin.value}|${a.innerMax.value}`, u),
            u();
            const c = e.computed(()=>l.convertModelToRatio(s.value))
              , d = e.computed(()=>!0 === a.active.value ? r.value : c.value)
              , v = e.computed(()=>{
                const e = {
                    [a.positionProp.value]: `${100 * a.innerMinRatio.value}%`,
                    [a.sizeProp.value]: `${100 * (d.value - a.innerMinRatio.value)}%`
                };
                return void 0 !== t.selectionImg && (e.backgroundImage = `url(${t.selectionImg}) !important`),
                e
            }
            )
              , p = l.getThumbRenderFn({
                focusValue: !0,
                getNodeData: Na,
                ratio: d,
                label: e.computed(()=>void 0 !== t.labelValue ? t.labelValue : s.value),
                thumbColor: e.computed(()=>t.thumbColor || t.color),
                labelColor: e.computed(()=>t.labelColor),
                labelTextColor: e.computed(()=>t.labelTextColor)
            })
              , m = e.computed(()=>{
                return !0 !== a.editable.value ? {} : !0 === n.platform.is.mobile ? {
                    onClick: l.onMobileClick
                } : {
                    onMousedown: l.onActivate,
                    onFocus: b,
                    onBlur: l.onBlur,
                    onKeydown: y,
                    onKeyup: l.onKeyup
                }
            }
            );
            function f(e) {
                s.value !== t.modelValue && o("update:modelValue", s.value),
                !0 === e && o("change", s.value)
            }
            function h() {
                return i.value.getBoundingClientRect()
            }
            function g(e, o=a.dragging.value) {
                const n = l.getDraggingRatio(e, o);
                s.value = l.convertRatioToModel(n),
                r.value = !0 !== t.snap || 0 === t.step ? n : l.convertModelToRatio(s.value)
            }
            function b() {
                a.focus.value = !0
            }
            function y(e) {
                if (!Pa.includes(e.keyCode))
                    return;
                $(e);
                const t = ([34, 33].includes(e.keyCode) ? 10 : 1) * a.step.value
                  , o = ([34, 37, 40].includes(e.keyCode) ? -1 : 1) * (!0 === a.isReversed.value ? -1 : 1) * t;
                s.value = Ve(parseFloat((s.value + o).toFixed(a.decimals.value)), a.innerMin.value, a.innerMax.value),
                f()
            }
            return ()=>{
                const o = l.getContent(v, a.tabindex, m, e=>{
                    e.push(p())
                }
                );
                return e.h("div", {
                    ref: i,
                    class: a.classes.value + (null === t.modelValue ? " q-slider--no-value" : ""),
                    ...a.attributes.value,
                    "aria-valuenow": t.modelValue
                }, o)
            }
        }
    });
    function Da() {
        const t = e.ref(!n.value);
        return !1 === t.value && e.onMounted(()=>{
            t.value = !0
        }
        ),
        t
    }
    const Ha = "undefined" !== typeof ResizeObserver
      , Qa = !0 === Ha ? {} : {
        style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",
        url: "about:blank"
    };
    var Ua = Me({
        name: "QResizeObserver",
        props: {
            debounce: {
                type: [String, Number],
                default: 100
            }
        },
        emits: ["resize"],
        setup(t, {emit: o}) {
            let n, a = null, l = {
                width: -1,
                height: -1
            };
            function i(e) {
                !0 === e || 0 === t.debounce || "0" === t.debounce ? r() : null === a && (a = setTimeout(r, t.debounce))
            }
            function r() {
                if (clearTimeout(a),
                a = null,
                n) {
                    const {offsetWidth: e, offsetHeight: t} = n;
                    e === l.width && t === l.height || (l = {
                        width: e,
                        height: t
                    },
                    o("resize", l))
                }
            }
            const s = e.getCurrentInstance();
            if (Object.assign(s.proxy, {
                trigger: i
            }),
            !0 === Ha) {
                let t;
                return e.onMounted(()=>{
                    e.nextTick(()=>{
                        n = s.proxy.$el.parentNode,
                        n && (t = new ResizeObserver(i),
                        t.observe(n),
                        r())
                    }
                    )
                }
                ),
                e.onBeforeUnmount(()=>{
                    clearTimeout(a),
                    void 0 !== t && (void 0 !== t.disconnect ? t.disconnect() : n && t.unobserve(n))
                }
                ),
                h
            }
            {
                const t = Da();
                let o;
                function u() {
                    clearTimeout(a),
                    void 0 !== o && (void 0 !== o.removeEventListener && o.removeEventListener("resize", i, f.passive),
                    o = void 0)
                }
                function c() {
                    u(),
                    n && n.contentDocument && (o = n.contentDocument.defaultView,
                    o.addEventListener("resize", i, f.passive),
                    r())
                }
                return e.onMounted(()=>{
                    e.nextTick(()=>{
                        n = s.proxy.$el,
                        n && c()
                    }
                    )
                }
                ),
                e.onBeforeUnmount(u),
                ()=>{
                    if (!0 === t.value)
                        return e.h("object", {
                            style: Qa.style,
                            tabindex: -1,
                            type: "text/html",
                            data: Qa.url,
                            "aria-hidden": "true",
                            onLoad: c
                        })
                }
            }
        }
    });
    let Wa = !1;
    {
        const e = document.createElement("div")
          , t = document.createElement("div");
        e.setAttribute("dir", "rtl"),
        e.style.width = "1px",
        e.style.height = "1px",
        e.style.overflow = "auto",
        t.style.width = "1000px",
        t.style.height = "1px",
        document.body.appendChild(e),
        e.appendChild(t),
        e.scrollLeft = -1e3,
        Wa = e.scrollLeft >= 0,
        e.remove()
    }
    function Ya(e, t, o) {
        const n = !0 === o ? ["left", "right"] : ["top", "bottom"];
        return `absolute-${!0 === t ? n[0] : n[1]}${e ? ` text-${e}` : ""}`
    }
    const Ka = ["left", "center", "right", "justify"]
      , Xa = ()=>{}
    ;
    var Za = Me({
        name: "QTabs",
        props: {
            modelValue: [Number, String],
            align: {
                type: String,
                default: "center",
                validator: e=>Ka.includes(e)
            },
            breakpoint: {
                type: [String, Number],
                default: 600
            },
            vertical: Boolean,
            shrink: Boolean,
            stretch: Boolean,
            activeClass: String,
            activeColor: String,
            activeBgColor: String,
            indicatorColor: String,
            leftIcon: String,
            rightIcon: String,
            outsideArrows: Boolean,
            mobileArrows: Boolean,
            switchIndicator: Boolean,
            narrowIndicator: Boolean,
            inlineLabel: Boolean,
            noCaps: Boolean,
            dense: Boolean,
            contentClass: String,
            "onUpdate:modelValue": [Function, Array]
        },
        setup(t, {slots: o, emit: n}) {
            const a = e.getCurrentInstance()
              , {proxy: {$q: l}} = a
              , {registerTick: i} = Qo()
              , {registerTimeout: r, removeTimeout: s} = Uo()
              , {registerTimeout: u} = Uo()
              , c = e.ref(null)
              , d = e.ref(null)
              , v = e.ref(t.modelValue)
              , p = e.ref(!1)
              , m = e.ref(!0)
              , f = e.ref(!1)
              , g = e.ref(!1)
              , b = e.computed(()=>!0 === l.platform.is.desktop || !0 === t.mobileArrows)
              , y = []
              , w = e.ref(!1);
            let x, _, S, k = !1, C = !0 === b.value ? R : h;
            const q = e.computed(()=>({
                activeClass: t.activeClass,
                activeColor: t.activeColor,
                activeBgColor: t.activeBgColor,
                indicatorClass: Ya(t.indicatorColor, t.switchIndicator, t.vertical),
                narrowIndicator: t.narrowIndicator,
                inlineLabel: t.inlineLabel,
                noCaps: t.noCaps
            }))
              , $ = e.computed(()=>{
                const e = !0 === p.value ? "left" : !0 === g.value ? "justify" : t.align;
                return `q-tabs__content--align-${e}`
            }
            )
              , M = e.computed(()=>"q-tabs row no-wrap items-center" + ` q-tabs--${!0 === p.value ? "" : "not-"}scrollable` + ` q-tabs--${!0 === t.vertical ? "vertical" : "horizontal"}` + ` q-tabs__arrows--${!0 === b.value && !0 === t.outsideArrows ? "outside" : "inside"}` + (!0 === t.dense ? " q-tabs--dense" : "") + (!0 === t.shrink ? " col-shrink" : "") + (!0 === t.stretch ? " self-stretch" : ""))
              , T = e.computed(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position " + $.value + (void 0 !== t.contentClass ? ` ${t.contentClass}` : "") + (!0 === l.platform.is.mobile ? " scroll" : ""))
              , B = e.computed(()=>!0 === t.vertical ? {
                container: "height",
                content: "offsetHeight",
                scroll: "scrollHeight"
            } : {
                container: "width",
                content: "offsetWidth",
                scroll: "scrollWidth"
            })
              , z = e.computed(()=>!0 !== t.vertical && !0 === l.lang.rtl)
              , O = e.computed(()=>!1 === Wa && !0 === z.value);
            function V({name: e, setCurrent: o, skipEmit: a, fromRoute: l}) {
                v.value !== e && (!0 !== a && n("update:modelValue", e),
                !0 !== o && void 0 !== t["onUpdate:modelValue"] || (A(v.value, e),
                v.value = e)),
                void 0 !== l && (k = l)
            }
            function L() {
                i(()=>{
                    !0 !== a.isDeactivated && !0 !== a.isUnmounted && E({
                        width: c.value.offsetWidth,
                        height: c.value.offsetHeight
                    })
                }
                )
            }
            function E(o) {
                if (void 0 === B.value || null === d.value)
                    return;
                const n = o[B.value.container]
                  , a = Math.min(d.value[B.value.scroll], Array.prototype.reduce.call(d.value.children, (e,t)=>e + (t[B.value.content] || 0), 0))
                  , l = n > 0 && a > n;
                p.value !== l && (p.value = l),
                !0 === l && e.nextTick(C);
                const i = n < parseInt(t.breakpoint, 10);
                g.value !== i && (g.value = i)
            }
            function A(o, n) {
                const a = void 0 !== o && null !== o && "" !== o ? y.find(e=>e.name.value === o) : null
                  , l = void 0 !== n && null !== n && "" !== n ? y.find(e=>e.name.value === n) : null;
                if (a && l) {
                    const o = a.tabIndicatorRef.value
                      , n = l.tabIndicatorRef.value;
                    clearTimeout(x),
                    o.style.transition = "none",
                    o.style.transform = "none",
                    n.style.transition = "none",
                    n.style.transform = "none";
                    const i = o.getBoundingClientRect()
                      , r = n.getBoundingClientRect();
                    n.style.transform = !0 === t.vertical ? `translate3d(0,${i.top - r.top}px,0) scale3d(1,${r.height ? i.height / r.height : 1},1)` : `translate3d(${i.left - r.left}px,0,0) scale3d(${r.width ? i.width / r.width : 1},1,1)`,
                    e.nextTick(()=>{
                        x = setTimeout(()=>{
                            n.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)",
                            n.style.transform = "none"
                        }
                        , 70)
                    }
                    )
                }
                l && !0 === p.value && P(l.rootRef.value)
            }
            function P(e) {
                const {left: o, width: n, top: a, height: l} = d.value.getBoundingClientRect()
                  , i = e.getBoundingClientRect();
                let r = !0 === t.vertical ? i.top - a : i.left - o;
                if (r < 0)
                    return d.value[!0 === t.vertical ? "scrollTop" : "scrollLeft"] += Math.floor(r),
                    void C();
                r += !0 === t.vertical ? i.height - l : i.width - n,
                r > 0 && (d.value[!0 === t.vertical ? "scrollTop" : "scrollLeft"] += Math.ceil(r),
                C())
            }
            function R() {
                const e = d.value;
                if (null !== e) {
                    const o = e.getBoundingClientRect()
                      , n = !0 === t.vertical ? e.scrollTop : Math.abs(e.scrollLeft);
                    !0 === z.value ? (m.value = Math.ceil(n + o.width) < e.scrollWidth - 1,
                    f.value = n > 0) : (m.value = n > 0,
                    f.value = !0 === t.vertical ? Math.ceil(n + o.height) < e.scrollHeight : Math.ceil(n + o.width) < e.scrollWidth)
                }
            }
            function F(e) {
                j(),
                Q(e),
                _ = setInterval(()=>{
                    !0 === Q(e) && j()
                }
                , 5)
            }
            function I() {
                F(!0 === O.value ? Number.MAX_SAFE_INTEGER : 0)
            }
            function N() {
                F(!0 === O.value ? 0 : Number.MAX_SAFE_INTEGER)
            }
            function j() {
                clearInterval(_)
            }
            function D(e, o) {
                const n = Array.prototype.filter.call(d.value.children, e=>e === o || e.matches && !0 === e.matches(".q-tab.q-focusable"))
                  , a = n.length;
                if (0 === a)
                    return;
                if (36 === e)
                    return P(n[0]),
                    !0;
                if (35 === e)
                    return P(n[a - 1]),
                    !0;
                const l = e === (!0 === t.vertical ? 38 : 37)
                  , i = e === (!0 === t.vertical ? 40 : 39)
                  , r = !0 === l ? -1 : !0 === i ? 1 : void 0;
                if (void 0 !== r) {
                    const e = !0 === z.value ? -1 : 1
                      , t = n.indexOf(o) + r * e;
                    return t >= 0 && t < a && (P(n[t]),
                    n[t].focus({
                        preventScroll: !0
                    })),
                    !0
                }
            }
            e.watch(z, C),
            e.watch(()=>t.modelValue, e=>{
                V({
                    name: e,
                    setCurrent: !0,
                    skipEmit: !0
                })
            }
            ),
            e.watch(()=>t.outsideArrows, ()=>{
                e.nextTick(L())
            }
            ),
            e.watch(b, t=>{
                C = !0 === t ? R : h,
                e.nextTick(L())
            }
            );
            const H = e.computed(()=>!0 === O.value ? {
                get: e=>Math.abs(e.scrollLeft),
                set: (e,t)=>{
                    e.scrollLeft = -t
                }
            } : !0 === t.vertical ? {
                get: e=>e.scrollTop,
                set: (e,t)=>{
                    e.scrollTop = t
                }
            } : {
                get: e=>e.scrollLeft,
                set: (e,t)=>{
                    e.scrollLeft = t
                }
            });
            function Q(e) {
                const t = d.value
                  , {get: o, set: n} = H.value;
                let a = !1
                  , l = o(t);
                const i = e < l ? -1 : 1;
                return l += 5 * i,
                l < 0 ? (a = !0,
                l = 0) : (-1 === i && l <= e || 1 === i && l >= e) && (a = !0,
                l = e),
                n(t, l),
                C(),
                a
            }
            function U() {
                return y.filter(e=>void 0 !== e.routerProps && !0 === e.routerProps.hasRouterLink.value)
            }
            function W() {
                let e = null
                  , t = k;
                const o = {
                    matchedLen: 0,
                    hrefLen: 0,
                    exact: !1,
                    found: !1
                }
                  , {hash: n} = a.proxy.$route
                  , l = v.value;
                let i = !0 === t ? Xa : e=>{
                    l === e.name.value && (t = !0,
                    i = Xa)
                }
                ;
                const r = U();
                for (const a of r) {
                    const t = !0 === a.routerProps.exact.value;
                    if (!0 !== a.routerProps[!0 === t ? "linkIsExactActive" : "linkIsActive"].value || !0 === o.exact && !0 !== t) {
                        i(a);
                        continue
                    }
                    const l = a.routerProps.linkRoute.value
                      , r = l.hash;
                    if (!0 === t) {
                        if (n === r) {
                            e = a.name.value;
                            break
                        }
                        if ("" !== n && "" !== r) {
                            i(a);
                            continue
                        }
                    }
                    const s = l.matched.length
                      , u = l.href.length - r.length;
                    (s === o.matchedLen ? u > o.hrefLen : s > o.matchedLen) ? (e = a.name.value,
                    Object.assign(o, {
                        matchedLen: s,
                        hrefLen: u,
                        exact: t
                    })) : i(a)
                }
                !0 !== t && null === e || V({
                    name: e,
                    setCurrent: !0,
                    fromRoute: !0
                })
            }
            function Y(e) {
                if (s(),
                !0 !== w.value && null !== c.value && e.target && "function" === typeof e.target.closest) {
                    const t = e.target.closest(".q-tab");
                    t && !0 === c.value.contains(t) && (w.value = !0)
                }
            }
            function K() {
                r(()=>{
                    w.value = !1
                }
                , 30)
            }
            function X() {
                !0 !== J.avoidRouteWatcher && u(W)
            }
            function Z(t) {
                y.push(t);
                const o = U();
                o.length > 0 && (void 0 === S && (S = e.watch(()=>a.proxy.$route, X)),
                X())
            }
            function G(e) {
                if (y.splice(y.indexOf(e), 1),
                void 0 !== S) {
                    const e = U();
                    0 === e.length && (S(),
                    S = void 0),
                    X()
                }
            }
            const J = {
                currentModel: v,
                tabProps: q,
                hasFocus: w,
                registerTab: Z,
                unregisterTab: G,
                verifyRouteModel: X,
                updateModel: V,
                recalculateScroll: L,
                onKbdNavigate: D,
                avoidRouteWatcher: !1
            };
            e.provide(ce, J),
            e.onBeforeUnmount(()=>{
                clearTimeout(x),
                void 0 !== S && S()
            }
            );
            let ee = !1;
            return e.onDeactivated(()=>{
                ee = !0
            }
            ),
            e.onActivated(()=>{
                !0 === ee && L()
            }
            ),
            ()=>{
                const n = [e.h(Ua, {
                    onResize: E
                }), e.h("div", {
                    ref: d,
                    class: T.value,
                    onScroll: C
                }, Xe(o.default))];
                return !0 === b.value && n.push(e.h(ft, {
                    class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (!0 === m.value ? "" : " q-tabs__arrow--faded"),
                    name: t.leftIcon || l.iconSet.tabs[!0 === t.vertical ? "up" : "left"],
                    onMousedown: I,
                    onTouchstartPassive: I,
                    onMouseup: j,
                    onMouseleave: j,
                    onTouchend: j
                }), e.h(ft, {
                    class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (!0 === f.value ? "" : " q-tabs__arrow--faded"),
                    name: t.rightIcon || l.iconSet.tabs[!0 === t.vertical ? "down" : "right"],
                    onMousedown: N,
                    onTouchstartPassive: N,
                    onMouseup: j,
                    onMouseleave: j,
                    onTouchend: j
                })),
                e.h("div", {
                    ref: c,
                    class: M.value,
                    role: "tablist",
                    onFocusin: Y,
                    onFocusout: K
                }, n)
            }
        }
    });
    let Ga = 0;
    const Ja = ["click", "keydown"]
      , el = {
        icon: String,
        label: [Number, String],
        alert: [Boolean, String],
        alertIcon: String,
        name: {
            type: [Number, String],
            default: ()=>`t_ ${Ga++}`
        },
        noCaps: Boolean,
        tabindex: [String, Number],
        disable: Boolean,
        contentClass: String,
        ripple: {
            type: [Boolean, Object],
            default: !0
        }
    };
    function tl(t, o, n, a) {
        const l = e.inject(ce, ()=>{
            console.error("QTab/QRouteTab component needs to be child of QTabs")
        }
        )
          , {proxy: i} = e.getCurrentInstance()
          , r = e.ref(null)
          , s = e.ref(null)
          , u = e.ref(null)
          , c = e.computed(()=>!0 !== t.disable && !1 !== t.ripple && Object.assign({
            keyCodes: [13, 32],
            early: !0
        }, !0 === t.ripple ? {} : t.ripple))
          , d = e.computed(()=>l.currentModel.value === t.name)
          , v = e.computed(()=>"q-tab relative-position self-stretch flex flex-center text-center" + (!0 === d.value ? " q-tab--active" + (l.tabProps.value.activeClass ? " " + l.tabProps.value.activeClass : "") + (l.tabProps.value.activeColor ? ` text-${l.tabProps.value.activeColor}` : "") + (l.tabProps.value.activeBgColor ? ` bg-${l.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (t.icon && t.label && !1 === l.tabProps.value.inlineLabel ? " q-tab--full" : "") + (!0 === t.noCaps || !0 === l.tabProps.value.noCaps ? " q-tab--no-caps" : "") + (!0 === t.disable ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (void 0 !== a && "" !== a.linkClass.value ? ` ${a.linkClass.value}` : ""))
          , p = e.computed(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (!0 === l.tabProps.value.inlineLabel ? "row no-wrap q-tab__content--inline" : "column") + (void 0 !== t.contentClass ? ` ${t.contentClass}` : ""))
          , m = e.computed(()=>!0 === t.disable || !0 === l.hasFocus.value ? -1 : t.tabindex || 0);
        function f(e, o) {
            if (!0 !== o && null !== r.value && r.value.focus(),
            !0 !== t.disable) {
                let o;
                if (void 0 !== a) {
                    if (!0 !== a.hasRouterLink.value)
                        return void n("click", e);
                    o = (()=>{
                        e.__qNavigate = !0,
                        l.avoidRouteWatcher = !0;
                        const o = a.navigateToRouterLink(e);
                        !1 === o ? l.avoidRouteWatcher = !1 : o.then(e=>{
                            l.avoidRouteWatcher = !1,
                            void 0 === e && l.updateModel({
                                name: t.name,
                                fromRoute: !0
                            })
                        }
                        )
                    }
                    )
                } else
                    o = (()=>{
                        l.updateModel({
                            name: t.name,
                            fromRoute: !1
                        })
                    }
                    );
                n("click", e, o),
                !0 !== e.defaultPrevented && o()
            }
        }
        function h(e) {
            K(e, [13, 32]) ? f(e, !0) : !0 !== Y(e) && e.keyCode >= 35 && e.keyCode <= 40 && !0 !== e.altKey && !0 !== e.metaKey && !0 === l.onKbdNavigate(e.keyCode, i.$el) && $(e),
            n("keydown", e)
        }
        function g() {
            const n = l.tabProps.value.narrowIndicator
              , a = []
              , i = e.h("div", {
                ref: u,
                class: ["q-tab__indicator", l.tabProps.value.indicatorClass]
            });
            void 0 !== t.icon && a.push(e.h(ft, {
                class: "q-tab__icon",
                name: t.icon
            })),
            void 0 !== t.label && a.push(e.h("div", {
                class: "q-tab__label"
            }, t.label)),
            !1 !== t.alert && a.push(void 0 !== t.alertIcon ? e.h(ft, {
                class: "q-tab__alert-icon",
                color: !0 !== t.alert ? t.alert : void 0,
                name: t.alertIcon
            }) : e.h("div", {
                class: "q-tab__alert" + (!0 !== t.alert ? ` text-${t.alert}` : "")
            })),
            !0 === n && a.push(i);
            const s = [e.h("div", {
                class: "q-focus-helper",
                tabindex: -1,
                ref: r
            }), e.h("div", {
                class: p.value
            }, Ge(o.default, a))];
            return !1 === n && s.push(i),
            s
        }
        const b = {
            name: e.computed(()=>t.name),
            rootRef: s,
            tabIndicatorRef: u,
            routerProps: a
        };
        function y(o, n) {
            const a = {
                ref: s,
                class: v.value,
                tabindex: m.value,
                role: "tab",
                "aria-selected": !0 === d.value ? "true" : "false",
                "aria-disabled": !0 === t.disable ? "true" : void 0,
                onClick: f,
                onKeydown: h,
                ...n
            };
            return e.withDirectives(e.h(o, a, g()), [[ao, c.value]])
        }
        return e.onBeforeUnmount(()=>{
            l.unregisterTab(b),
            l.recalculateScroll()
        }
        ),
        e.onMounted(()=>{
            l.registerTab(b),
            l.recalculateScroll()
        }
        ),
        {
            renderTab: y,
            $tabs: l
        }
    }
    var ol = Me({
        name: "QTab",
        props: el,
        emits: Ja,
        setup(e, {slots: t, emit: o}) {
            const {renderTab: n} = tl(e, t, o);
            return ()=>n("div")
        }
    })
      , nl = Me({
        name: "QTabPanels",
        props: {
            ...na,
            ...yt
        },
        emits: aa,
        setup(t, {slots: o}) {
            const n = e.getCurrentInstance()
              , a = wt(t, n.proxy.$q)
              , {updatePanelsList: l, getPanelContent: i, panelDirectives: r} = la()
              , s = e.computed(()=>"q-tab-panels q-panel-parent" + (!0 === a.value ? " q-tab-panels--dark q-dark" : ""));
            return ()=>{
                return l(o),
                et("div", {
                    class: s.value
                }, i(), "pan", t.swipeable, ()=>r.value)
            }
        }
    })
      , al = Me({
        name: "QTabPanel",
        props: ta,
        setup(t, {slots: o}) {
            return ()=>e.h("div", {
                class: "q-tab-panel"
            }, Xe(o.default))
        }
    });
    const ll = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/
      , il = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/
      , rl = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/
      , sl = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/
      , ul = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/
      , cl = {
        date: e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
        time: e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
        fulltime: e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
        timeOrFulltime: e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
        email: e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),
        hexColor: e=>ll.test(e),
        hexaColor: e=>il.test(e),
        hexOrHexaColor: e=>rl.test(e),
        rgbColor: e=>sl.test(e),
        rgbaColor: e=>ul.test(e),
        rgbOrRgbaColor: e=>sl.test(e) || ul.test(e),
        hexOrRgbColor: e=>ll.test(e) || sl.test(e),
        hexaOrRgbaColor: e=>il.test(e) || ul.test(e),
        anyColor: e=>rl.test(e) || sl.test(e) || ul.test(e)
    };
    var dl = {
        testPattern: cl
    };
    const vl = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
    function pl({r: e, g: t, b: o, a: n}) {
        const a = void 0 !== n;
        if (e = Math.round(e),
        t = Math.round(t),
        o = Math.round(o),
        e > 255 || t > 255 || o > 255 || a && n > 100)
            throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
        return n = a ? (256 | Math.round(255 * n / 100)).toString(16).slice(1) : "",
        "#" + (o | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + n
    }
    function ml({r: e, g: t, b: o, a: n}) {
        return `rgb ${void 0 !== n ? "a" : ""}(${e},${t},${o}${void 0 !== n ? "," + n / 100 : ""})`
    }
    function fl(e) {
        if ("string" !== typeof e)
            throw new TypeError("Expected a string");
        e = e.replace(/^#/, ""),
        3 === e.length ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : 4 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
        const t = parseInt(e, 16);
        return e.length > 6 ? {
            r: t >> 24 & 255,
            g: t >> 16 & 255,
            b: t >> 8 & 255,
            a: Math.round((255 & t) / 2.55)
        } : {
            r: t >> 16,
            g: t >> 8 & 255,
            b: 255 & t
        }
    }
    function hl({h: e, s: t, v: o, a: n}) {
        let a, l, i;
        t /= 100,
        o /= 100,
        e /= 360;
        const r = Math.floor(6 * e)
          , s = 6 * e - r
          , u = o * (1 - t)
          , c = o * (1 - s * t)
          , d = o * (1 - (1 - s) * t);
        switch (r % 6) {
        case 0:
            a = o,
            l = d,
            i = u;
            break;
        case 1:
            a = c,
            l = o,
            i = u;
            break;
        case 2:
            a = u,
            l = o,
            i = d;
            break;
        case 3:
            a = u,
            l = c,
            i = o;
            break;
        case 4:
            a = d,
            l = u,
            i = o;
            break;
        case 5:
            a = o,
            l = u,
            i = c;
            break
        }
        return {
            r: Math.round(255 * a),
            g: Math.round(255 * l),
            b: Math.round(255 * i),
            a: n
        }
    }
    function gl({r: e, g: t, b: o, a: n}) {
        const a = Math.max(e, t, o)
          , l = Math.min(e, t, o)
          , i = a - l
          , r = 0 === a ? 0 : i / a
          , s = a / 255;
        let u;
        switch (a) {
        case l:
            u = 0;
            break;
        case e:
            u = t - o + i * (t < o ? 6 : 0),
            u /= 6 * i;
            break;
        case t:
            u = o - e + 2 * i,
            u /= 6 * i;
            break;
        case o:
            u = e - t + 4 * i,
            u /= 6 * i;
            break
        }
        return {
            h: Math.round(360 * u),
            s: Math.round(100 * r),
            v: Math.round(100 * s),
            a: n
        }
    }
    function bl(e) {
        if ("string" !== typeof e)
            throw new TypeError("Expected a string");
        const t = e.replace(/ /g, "")
          , o = vl.exec(t);
        if (null === o)
            return fl(t);
        const n = {
            r: Math.min(255, parseInt(o[2], 10)),
            g: Math.min(255, parseInt(o[3], 10)),
            b: Math.min(255, parseInt(o[4], 10))
        };
        if (o[1]) {
            const e = parseFloat(o[5]);
            n.a = 100 * Math.min(1, !0 === isNaN(e) ? 1 : e)
        }
        return n
    }
    function yl(e, t) {
        if ("string" !== typeof e)
            throw new TypeError("Expected a string as color");
        if ("number" !== typeof t)
            throw new TypeError("Expected a numeric percent");
        const o = bl(e)
          , n = t < 0 ? 0 : 255
          , a = Math.abs(t) / 100
          , l = o.r
          , i = o.g
          , r = o.b;
        return "#" + (16777216 + 65536 * (Math.round((n - l) * a) + l) + 256 * (Math.round((n - i) * a) + i) + (Math.round((n - r) * a) + r)).toString(16).slice(1)
    }
    function wl(e) {
        if ("string" !== typeof e && (!e || void 0 === e.r))
            throw new TypeError("Expected a string or a {r, g, b} object as color");
        const t = "string" === typeof e ? bl(e) : e
          , o = t.r / 255
          , n = t.g / 255
          , a = t.b / 255
          , l = o <= .03928 ? o / 12.92 : Math.pow((o + .055) / 1.055, 2.4)
          , i = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
          , r = a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4);
        return .2126 * l + .7152 * i + .0722 * r
    }
    function xl(e) {
        if ("string" !== typeof e && (!e || void 0 === e.r))
            throw new TypeError("Expected a string or a {r, g, b} object as color");
        const t = "string" === typeof e ? bl(e) : e;
        return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
    }
    function _l(e, t) {
        if ("string" !== typeof e && (!e || void 0 === e.r))
            throw new TypeError("Expected a string or a {r, g, b[, a]} object as fgColor");
        if ("string" !== typeof t && (!t || void 0 === t.r))
            throw new TypeError("Expected a string or a {r, g, b[, a]} object as bgColor");
        const o = "string" === typeof e ? bl(e) : e
          , n = o.r / 255
          , a = o.g / 255
          , l = o.b / 255
          , i = void 0 !== o.a ? o.a / 100 : 1
          , r = "string" === typeof t ? bl(t) : t
          , s = r.r / 255
          , u = r.g / 255
          , c = r.b / 255
          , d = void 0 !== r.a ? r.a / 100 : 1
          , v = i + d * (1 - i)
          , p = Math.round((n * i + s * d * (1 - i)) / v * 255)
          , m = Math.round((a * i + u * d * (1 - i)) / v * 255)
          , f = Math.round((l * i + c * d * (1 - i)) / v * 255)
          , h = {
            r: p,
            g: m,
            b: f,
            a: Math.round(100 * v)
        };
        return "string" === typeof e ? pl(h) : h
    }
    function Sl(e, t) {
        if ("string" !== typeof e)
            throw new TypeError("Expected a string as color");
        if (void 0 === t || t < -1 || t > 1)
            throw new TypeError("Expected offset to be between -1 and 1");
        const {r: o, g: n, b: a, a: l} = bl(e)
          , i = void 0 !== l ? l / 100 : 0;
        return pl({
            r: o,
            g: n,
            b: a,
            a: Math.round(100 * Math.min(1, Math.max(0, i + t)))
        })
    }
    function kl(e) {
        if ("string" !== typeof e)
            throw new TypeError("Expected a string as color");
        const t = document.createElement("div");
        t.className = `text-${e} invisible fixed no-pointer-events`,
        document.body.appendChild(t);
        const o = getComputedStyle(t).getPropertyValue("color");
        return t.remove(),
        pl(bl(o))
    }
    var Cl = {
        rgbToHex: pl,
        hexToRgb: fl,
        hsvToRgb: hl,
        rgbToHsv: gl,
        textToRgb: bl,
        lighten: yl,
        luminosity: wl,
        brightness: xl,
        blend: _l,
        changeAlpha: Sl,
        getPaletteColor: kl
    };
    const ql = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"]
      , $l = "M5 5 h10 v10 h-10 v-10 z"
      , Ml = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
    var Tl = Me({
        name: "QColor",
        props: {
            ...yt,
            ...In,
            modelValue: String,
            defaultValue: String,
            defaultView: {
                type: String,
                default: "spectrum",
                validator: e=>["spectrum", "tune", "palette"].includes(e)
            },
            formatModel: {
                type: String,
                default: "auto",
                validator: e=>["auto", "hex", "rgb", "hexa", "rgba"].includes(e)
            },
            palette: Array,
            noHeader: Boolean,
            noHeaderTabs: Boolean,
            noFooter: Boolean,
            square: Boolean,
            flat: Boolean,
            bordered: Boolean,
            disable: Boolean,
            readonly: Boolean
        },
        emits: ["update:modelValue", "change"],
        setup(t, {emit: o}) {
            const {proxy: n} = e.getCurrentInstance()
              , {$q: a} = n
              , l = wt(t, a)
              , {getCache: i} = ea()
              , r = e.ref(null)
              , s = e.ref(null)
              , u = e.computed(()=>"auto" === t.formatModel ? null : t.formatModel.indexOf("hex") > -1)
              , c = e.computed(()=>"auto" === t.formatModel ? null : t.formatModel.indexOf("a") > -1)
              , d = e.ref("auto" === t.formatModel ? void 0 === t.modelValue || null === t.modelValue || "" === t.modelValue || t.modelValue.startsWith("#") ? "hex" : "rgb" : t.formatModel.startsWith("hex") ? "hex" : "rgb")
              , v = e.ref(t.defaultView)
              , p = e.ref(B(t.modelValue || t.defaultValue))
              , m = e.computed(()=>!0 !== t.disable && !0 !== t.readonly)
              , f = e.computed(()=>void 0 === t.modelValue || null === t.modelValue || "" === t.modelValue || t.modelValue.startsWith("#"))
              , h = e.computed(()=>null !== u.value ? u.value : f.value)
              , g = e.computed(()=>({
                type: "hidden",
                name: t.name,
                value: p.value[!0 === h.value ? "hex" : "rgb"]
            }))
              , b = jn(g)
              , y = e.computed(()=>null !== c.value ? c.value : void 0 !== p.value.a)
              , w = e.computed(()=>({
                backgroundColor: p.value.rgb || "#000"
            }))
              , x = e.computed(()=>{
                const e = void 0 !== p.value.a && p.value.a < 65 || wl(p.value) > .4;
                return "q-color-picker__header-content" + ` q-color-picker__header-content--${e ? "light" : "dark"}`
            }
            )
              , _ = e.computed(()=>({
                background: `hsl(${p.value.h},100%,50%)`
            }))
              , S = e.computed(()=>({
                top: `${100 - p.value.v}%`,
                [!0 === a.lang.rtl ? "right" : "left"]: `${p.value.s}%`
            }))
              , k = e.computed(()=>void 0 !== t.palette && t.palette.length > 0 ? t.palette : ql)
              , q = e.computed(()=>"q-color-picker" + (!0 === t.bordered ? " q-color-picker--bordered" : "") + (!0 === t.square ? " q-color-picker--square no-border-radius" : "") + (!0 === t.flat ? " q-color-picker--flat no-shadow" : "") + (!0 === t.disable ? " disabled" : "") + (!0 === l.value ? " q-color-picker--dark q-dark" : ""))
              , $ = e.computed(()=>{
                return !0 === t.disable ? {
                    "aria-disabled": "true"
                } : !0 === t.readonly ? {
                    "aria-readonly": "true"
                } : {}
            }
            )
              , M = e.computed(()=>{
                return [[Va, A, void 0, {
                    prevent: !0,
                    stop: !0,
                    mouse: !0
                }]]
            }
            );
            function T(e, t) {
                p.value.hex = pl(e),
                p.value.rgb = ml(e),
                p.value.r = e.r,
                p.value.g = e.g,
                p.value.b = e.b,
                p.value.a = e.a;
                const n = p.value[!0 === h.value ? "hex" : "rgb"];
                o("update:modelValue", n),
                !0 === t && o("change", n)
            }
            function B(e) {
                const o = void 0 !== c.value ? c.value : "auto" === t.formatModel ? null : t.formatModel.indexOf("a") > -1;
                if ("string" !== typeof e || 0 === e.length || !0 !== cl.anyColor(e.replace(/ /g, "")))
                    return {
                        h: 0,
                        s: 0,
                        v: 0,
                        r: 0,
                        g: 0,
                        b: 0,
                        a: !0 === o ? 100 : void 0,
                        hex: void 0,
                        rgb: void 0
                    };
                const n = bl(e);
                return !0 === o && void 0 === n.a && (n.a = 100),
                n.hex = pl(n),
                n.rgb = ml(n),
                Object.assign(n, gl(n))
            }
            function z(e, t, o) {
                const n = r.value;
                if (null === n)
                    return;
                const l = n.clientWidth
                  , i = n.clientHeight
                  , s = n.getBoundingClientRect();
                let u = Math.min(l, Math.max(0, e - s.left));
                !0 === a.lang.rtl && (u = l - u);
                const c = Math.min(i, Math.max(0, t - s.top))
                  , d = Math.round(100 * u / l)
                  , v = Math.round(100 * Math.max(0, Math.min(1, -c / i + 1)))
                  , m = hl({
                    h: p.value.h,
                    s: d,
                    v: v,
                    a: !0 === y.value ? p.value.a : void 0
                });
                p.value.s = d,
                p.value.v = v,
                T(m, o)
            }
            function O(e, t) {
                const o = Math.round(e)
                  , n = hl({
                    h: o,
                    s: p.value.s,
                    v: p.value.v,
                    a: !0 === y.value ? p.value.a : void 0
                });
                p.value.h = o,
                T(n, t)
            }
            function V(t, o, a, l, i) {
                if (void 0 !== l && C(l),
                !/^[0-9]+$/.test(t))
                    return void (!0 === i && n.$forceUpdate());
                const r = Math.floor(Number(t));
                if (r < 0 || r > a)
                    return void (!0 === i && n.$forceUpdate());
                const s = {
                    r: "r" === o ? r : p.value.r,
                    g: "g" === o ? r : p.value.g,
                    b: "b" === o ? r : p.value.b,
                    a: !0 === y.value ? "a" === o ? r : p.value.a : void 0
                };
                if ("a" !== o) {
                    const e = gl(s);
                    p.value.h = e.h,
                    p.value.s = e.s,
                    p.value.v = e.v
                }
                if (T(s, i),
                void 0 !== l && !0 !== i && void 0 !== l.target.selectionEnd) {
                    const t = l.target.selectionEnd;
                    e.nextTick(()=>{
                        l.target.setSelectionRange(t, t)
                    }
                    )
                }
            }
            function L(t, o) {
                let n;
                const a = t.target.value;
                if (C(t),
                "hex" === d.value) {
                    if (a.length !== (!0 === y.value ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(a))
                        return !0;
                    n = fl(a)
                } else {
                    let e;
                    if (!a.endsWith(")"))
                        return !0;
                    if (!0 !== y.value && a.startsWith("rgb(")) {
                        if (e = a.substring(4, a.length - 1).split(",").map(e=>parseInt(e, 10)),
                        3 !== e.length || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(a))
                            return !0
                    } else {
                        if (!0 !== y.value || !a.startsWith("rgba("))
                            return !0;
                        {
                            if (e = a.substring(5, a.length - 1).split(","),
                            4 !== e.length || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(a))
                                return !0;
                            for (let o = 0; o < 3; o++) {
                                const t = parseInt(e[o], 10);
                                if (t < 0 || t > 255)
                                    return !0;
                                e[o] = t
                            }
                            const t = parseFloat(e[3]);
                            if (t < 0 || t > 1)
                                return !0;
                            e[3] = t
                        }
                    }
                    if (e[0] < 0 || e[0] > 255 || e[1] < 0 || e[1] > 255 || e[2] < 0 || e[2] > 255 || !0 === y.value && (e[3] < 0 || e[3] > 1))
                        return !0;
                    n = {
                        r: e[0],
                        g: e[1],
                        b: e[2],
                        a: !0 === y.value ? 100 * e[3] : void 0
                    }
                }
                const l = gl(n);
                if (p.value.h = l.h,
                p.value.s = l.s,
                p.value.v = l.v,
                T(n, o),
                !0 !== o) {
                    const o = t.target.selectionEnd;
                    e.nextTick(()=>{
                        t.target.setSelectionRange(o, o)
                    }
                    )
                }
            }
            function E(e) {
                const t = B(e)
                  , o = {
                    r: t.r,
                    g: t.g,
                    b: t.b,
                    a: t.a
                };
                void 0 === o.a && (o.a = p.value.a),
                p.value.h = t.h,
                p.value.s = t.s,
                p.value.v = t.v,
                T(o, !0)
            }
            function A(e) {
                e.isFinal ? z(e.position.left, e.position.top, !0) : P(e)
            }
            e.watch(()=>t.modelValue, e=>{
                const o = B(e || t.defaultValue);
                o.hex !== p.value.hex && (p.value = o)
            }
            ),
            e.watch(()=>t.defaultValue, e=>{
                if (!t.modelValue && e) {
                    const t = B(e);
                    t.hex !== p.value.hex && (p.value = t)
                }
            }
            );
            const P = to(e=>{
                z(e.position.left, e.position.top)
            }
            , 20);
            function R(e) {
                z(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset, !0)
            }
            function F(e) {
                z(e.pageX - window.pageXOffset, e.pageY - window.pageYOffset)
            }
            function I(e) {
                null !== s.value && (s.value.$el.style.opacity = e ? 1 : 0)
            }
            function N() {
                const o = [];
                return !0 !== t.noHeaderTabs && o.push(e.h(Za, {
                    class: "q-color-picker__header-tabs",
                    modelValue: d.value,
                    dense: !0,
                    align: "justify",
                    ...i("topVTab", {
                        "onUpdate:modelValue": e=>{
                            d.value = e
                        }
                    })
                }, ()=>[e.h(ol, {
                    label: "HEX" + (!0 === y.value ? "A" : ""),
                    name: "hex",
                    ripple: !1
                }), e.h(ol, {
                    label: "RGB" + (!0 === y.value ? "A" : ""),
                    name: "rgb",
                    ripple: !1
                })])),
                o.push(e.h("div", {
                    class: "q-color-picker__header-banner row flex-center no-wrap"
                }, [e.h("input", {
                    class: "fit",
                    value: p.value[d.value],
                    ...!0 !== m.value ? {
                        readonly: !0
                    } : {},
                    ...i("topIn", {
                        onInput: e=>{
                            I(!0 === L(e))
                        }
                        ,
                        onChange: C,
                        onBlur: e=>{
                            !0 === L(e, !0) && n.$forceUpdate(),
                            I(!1)
                        }
                    })
                }), e.h(ft, {
                    ref: s,
                    class: "q-color-picker__error-icon absolute no-pointer-events",
                    name: a.iconSet.type.negative
                })])),
                e.h("div", {
                    class: "q-color-picker__header relative-position overflow-hidden"
                }, [e.h("div", {
                    class: "q-color-picker__header-bg absolute-full"
                }), e.h("div", {
                    class: x.value,
                    style: w.value
                }, o)])
            }
            function j() {
                return e.h(nl, {
                    modelValue: v.value,
                    animated: !0
                }, ()=>[e.h(al, {
                    class: "q-color-picker__spectrum-tab overflow-hidden",
                    name: "spectrum"
                }, H), e.h(al, {
                    class: "q-pa-md q-color-picker__tune-tab",
                    name: "tune"
                }, Q), e.h(al, {
                    class: "q-color-picker__palette-tab",
                    name: "palette"
                }, U)])
            }
            function D() {
                return e.h("div", {
                    class: "q-color-picker__footer relative-position overflow-hidden"
                }, [e.h(Za, {
                    class: "absolute-full",
                    modelValue: v.value,
                    dense: !0,
                    align: "justify",
                    ...i("ftIn", {
                        "onUpdate:modelValue": e=>{
                            v.value = e
                        }
                    })
                }, ()=>[e.h(ol, {
                    icon: a.iconSet.colorPicker.spectrum,
                    name: "spectrum",
                    ripple: !1
                }), e.h(ol, {
                    icon: a.iconSet.colorPicker.tune,
                    name: "tune",
                    ripple: !1
                }), e.h(ol, {
                    icon: a.iconSet.colorPicker.palette,
                    name: "palette",
                    ripple: !1
                })])])
            }
            function H() {
                const t = {
                    ref: r,
                    class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (!0 !== m.value ? " readonly" : ""),
                    style: _.value,
                    ...!0 === m.value ? {
                        onClick: R,
                        onMousedown: F
                    } : {}
                }
                  , o = [e.h("div", {
                    style: {
                        paddingBottom: "100%"
                    }
                }), e.h("div", {
                    class: "q-color-picker__spectrum-white absolute-full"
                }), e.h("div", {
                    class: "q-color-picker__spectrum-black absolute-full"
                }), e.h("div", {
                    class: "absolute",
                    style: S.value
                }, [void 0 !== p.value.hex ? e.h("div", {
                    class: "q-color-picker__spectrum-circle"
                }) : null])]
                  , n = [e.h(ja, {
                    class: "q-color-picker__hue non-selectable",
                    modelValue: p.value.h,
                    min: 0,
                    max: 360,
                    trackSize: "8px",
                    innerTrackColor: "transparent",
                    selectionColor: "transparent",
                    readonly: !0 !== m.value,
                    thumbPath: $l,
                    "onUpdate:modelValue": O,
                    ...i("lazyhue", {
                        onChange: e=>O(e, !0)
                    })
                })];
                return !0 === y.value && n.push(e.h(ja, {
                    class: "q-color-picker__alpha non-selectable",
                    modelValue: p.value.a,
                    min: 0,
                    max: 100,
                    trackSize: "8px",
                    trackColor: "white",
                    innerTrackColor: "transparent",
                    selectionColor: "transparent",
                    trackImg: Ml,
                    readonly: !0 !== m.value,
                    hideSelection: !0,
                    thumbPath: $l,
                    ...i("alphaSlide", {
                        "onUpdate:modelValue": e=>V(e, "a", 100),
                        onChange: e=>V(e, "a", 100, void 0, !0)
                    })
                })),
                [et("div", t, o, "spec", m.value, ()=>M.value), e.h("div", {
                    class: "q-color-picker__sliders"
                }, n)]
            }
            function Q() {
                return [e.h("div", {
                    class: "row items-center no-wrap"
                }, [e.h("div", "R"), e.h(ja, {
                    modelValue: p.value.r,
                    min: 0,
                    max: 255,
                    color: "red",
                    dark: l.value,
                    readonly: !0 !== m.value,
                    ...i("rSlide", {
                        "onUpdate:modelValue": e=>V(e, "r", 255),
                        onChange: e=>V(e, "r", 255, void 0, !0)
                    })
                }), e.h("input", {
                    value: p.value.r,
                    maxlength: 3,
                    readonly: !0 !== m.value,
                    onChange: C,
                    ...i("rIn", {
                        onInput: e=>V(e.target.value, "r", 255, e),
                        onBlur: e=>V(e.target.value, "r", 255, e, !0)
                    })
                })]), e.h("div", {
                    class: "row items-center no-wrap"
                }, [e.h("div", "G"), e.h(ja, {
                    modelValue: p.value.g,
                    min: 0,
                    max: 255,
                    color: "green",
                    dark: l.value,
                    readonly: !0 !== m.value,
                    ...i("gSlide", {
                        "onUpdate:modelValue": e=>V(e, "g", 255),
                        onChange: e=>V(e, "g", 255, void 0, !0)
                    })
                }), e.h("input", {
                    value: p.value.g,
                    maxlength: 3,
                    readonly: !0 !== m.value,
                    onChange: C,
                    ...i("gIn", {
                        onInput: e=>V(e.target.value, "g", 255, e),
                        onBlur: e=>V(e.target.value, "g", 255, e, !0)
                    })
                })]), e.h("div", {
                    class: "row items-center no-wrap"
                }, [e.h("div", "B"), e.h(ja, {
                    modelValue: p.value.b,
                    min: 0,
                    max: 255,
                    color: "blue",
                    readonly: !0 !== m.value,
                    dark: l.value,
                    ...i("bSlide", {
                        "onUpdate:modelValue": e=>V(e, "b", 255),
                        onChange: e=>V(e, "b", 255, void 0, !0)
                    })
                }), e.h("input", {
                    value: p.value.b,
                    maxlength: 3,
                    readonly: !0 !== m.value,
                    onChange: C,
                    ...i("bIn", {
                        onInput: e=>V(e.target.value, "b", 255, e),
                        onBlur: e=>V(e.target.value, "b", 255, e, !0)
                    })
                })]), !0 === y.value ? e.h("div", {
                    class: "row items-center no-wrap"
                }, [e.h("div", "A"), e.h(ja, {
                    modelValue: p.value.a,
                    color: "grey",
                    readonly: !0 !== m.value,
                    dark: l.value,
                    ...i("aSlide", {
                        "onUpdate:modelValue": e=>V(e, "a", 100),
                        onChange: e=>V(e, "a", 100, void 0, !0)
                    })
                }), e.h("input", {
                    value: p.value.a,
                    maxlength: 3,
                    readonly: !0 !== m.value,
                    onChange: C,
                    ...i("aIn", {
                        onInput: e=>V(e.target.value, "a", 100, e),
                        onBlur: e=>V(e.target.value, "a", 100, e, !0)
                    })
                })]) : null]
            }
            function U() {
                const t = t=>e.h("div", {
                    class: "q-color-picker__cube col-auto",
                    style: {
                        backgroundColor: t
                    },
                    ...!0 === m.value ? i("palette#" + t, {
                        onClick: ()=>{
                            E(t)
                        }
                    }) : {}
                });
                return [e.h("div", {
                    class: "row items-center q-color-picker__palette-rows" + (!0 === m.value ? " q-color-picker__palette-rows--editable" : "")
                }, k.value.map(t))]
            }
            return ()=>{
                const o = [j()];
                return void 0 !== t.name && !0 !== t.disable && b(o, "push"),
                !0 !== t.noHeader && o.unshift(N()),
                !0 !== t.noFooter && o.push(D()),
                e.h("div", {
                    class: q.value,
                    ...$.value
                }, o)
            }
        }
    });
    const Bl = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
    function zl(e, t, o) {
        return "[object Date]" === Object.prototype.toString.call(e) && (o = e.getDate(),
        t = e.getMonth() + 1,
        e = e.getFullYear()),
        Rl(Fl(e, t, o))
    }
    function Ol(e, t, o) {
        return Il(Pl(e, t, o))
    }
    function Vl(e) {
        return 0 === El(e)
    }
    function Ll(e, t) {
        return t <= 6 ? 31 : t <= 11 ? 30 : Vl(e) ? 30 : 29
    }
    function El(e) {
        const t = Bl.length;
        let o, n, a, l, i, r = Bl[0];
        if (e < r || e >= Bl[t - 1])
            throw new Error("Invalid Jalaali year " + e);
        for (i = 1; i < t; i += 1) {
            if (o = Bl[i],
            n = o - r,
            e < o)
                break;
            r = o
        }
        return l = e - r,
        n - l < 6 && (l = l - n + 33 * Nl(n + 4, 33)),
        a = jl(jl(l + 1, 33) - 1, 4),
        -1 === a && (a = 4),
        a
    }
    function Al(e, t) {
        const o = Bl.length
          , n = e + 621;
        let a, l, i, r, s, u = -14, c = Bl[0];
        if (e < c || e >= Bl[o - 1])
            throw new Error("Invalid Jalaali year " + e);
        for (s = 1; s < o; s += 1) {
            if (a = Bl[s],
            l = a - c,
            e < a)
                break;
            u = u + 8 * Nl(l, 33) + Nl(jl(l, 33), 4),
            c = a
        }
        r = e - c,
        u = u + 8 * Nl(r, 33) + Nl(jl(r, 33) + 3, 4),
        4 === jl(l, 33) && l - r === 4 && (u += 1);
        const d = Nl(n, 4) - Nl(3 * (Nl(n, 100) + 1), 4) - 150
          , v = 20 + u - d;
        return t || (l - r < 6 && (r = r - l + 33 * Nl(l + 4, 33)),
        i = jl(jl(r + 1, 33) - 1, 4),
        -1 === i && (i = 4)),
        {
            leap: i,
            gy: n,
            march: v
        }
    }
    function Pl(e, t, o) {
        const n = Al(e, !0);
        return Fl(n.gy, 3, n.march) + 31 * (t - 1) - Nl(t, 7) * (t - 7) + o - 1
    }
    function Rl(e) {
        const t = Il(e).gy;
        let o, n, a, l = t - 621;
        const i = Al(l, !1)
          , r = Fl(t, 3, i.march);
        if (a = e - r,
        a >= 0) {
            if (a <= 185)
                return n = 1 + Nl(a, 31),
                o = jl(a, 31) + 1,
                {
                    jy: l,
                    jm: n,
                    jd: o
                };
            a -= 186
        } else
            l -= 1,
            a += 179,
            1 === i.leap && (a += 1);
        return n = 7 + Nl(a, 30),
        o = jl(a, 30) + 1,
        {
            jy: l,
            jm: n,
            jd: o
        }
    }
    function Fl(e, t, o) {
        let n = Nl(1461 * (e + Nl(t - 8, 6) + 100100), 4) + Nl(153 * jl(t + 9, 12) + 2, 5) + o - 34840408;
        return n = n - Nl(3 * Nl(e + 100100 + Nl(t - 8, 6), 100), 4) + 752,
        n
    }
    function Il(e) {
        let t = 4 * e + 139361631;
        t = t + 4 * Nl(3 * Nl(4 * e + 183187720, 146097), 4) - 3908;
        const o = 5 * Nl(jl(t, 1461), 4) + 308
          , n = Nl(jl(o, 153), 5) + 1
          , a = jl(Nl(o, 153), 12) + 1
          , l = Nl(t, 1461) - 100100 + Nl(8 - a, 6);
        return {
            gy: l,
            gm: a,
            gd: n
        }
    }
    function Nl(e, t) {
        return ~~(e / t)
    }
    function jl(e, t) {
        return e - ~~(e / t) * t
    }
    const Dl = ["gregorian", "persian"]
      , Hl = {
        modelValue: {
            required: !0
        },
        mask: {
            type: String
        },
        locale: Object,
        calendar: {
            type: String,
            validator: e=>Dl.includes(e),
            default: "gregorian"
        },
        landscape: Boolean,
        color: String,
        textColor: String,
        square: Boolean,
        flat: Boolean,
        bordered: Boolean,
        readonly: Boolean,
        disable: Boolean
    }
      , Ql = ["update:modelValue"];
    function Ul(e) {
        return e.year + "/" + Ee(e.month) + "/" + Ee(e.day)
    }
    function Wl(t, o) {
        const n = e.computed(()=>{
            return !0 !== t.disable && !0 !== t.readonly
        }
        )
          , a = e.computed(()=>{
            return !0 === t.editable ? 0 : -1
        }
        )
          , l = e.computed(()=>{
            const e = [];
            return void 0 !== t.color && e.push(`bg-${t.color}`),
            void 0 !== t.textColor && e.push(`text-${t.textColor}`),
            e.join(" ")
        }
        );
        function i() {
            return void 0 !== t.locale ? {
                ...o.lang.date,
                ...t.locale
            } : o.lang.date
        }
        function r(e) {
            const o = new Date
              , n = !0 === e ? null : 0;
            if ("persian" === t.calendar) {
                const e = zl(o);
                return {
                    year: e.jy,
                    month: e.jm,
                    day: e.jd
                }
            }
            return {
                year: o.getFullYear(),
                month: o.getMonth() + 1,
                day: o.getDate(),
                hour: n,
                minute: n,
                second: n,
                millisecond: n
            }
        }
        return {
            editable: n,
            tabindex: a,
            headerClass: l,
            getLocale: i,
            getCurrentDate: r
        }
    }
    const Yl = 864e5
      , Kl = 36e5
      , Xl = 6e4
      , Zl = "YYYY-MM-DDTHH:mm:ss.SSSZ"
      , Gl = /\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g
      , Jl = /(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g
      , ei = {};
    function ti(e, t) {
        const o = "(" + t.days.join("|") + ")"
          , n = e + o;
        if (void 0 !== ei[n])
            return ei[n];
        const a = "(" + t.daysShort.join("|") + ")"
          , l = "(" + t.months.join("|") + ")"
          , i = "(" + t.monthsShort.join("|") + ")"
          , r = {};
        let s = 0;
        const u = e.replace(Jl, e=>{
            switch (s++,
            e) {
            case "YY":
                return r.YY = s,
                "(-?\\d{1,2})";
            case "YYYY":
                return r.YYYY = s,
                "(-?\\d{1,4})";
            case "M":
                return r.M = s,
                "(\\d{1,2})";
            case "MM":
                return r.M = s,
                "(\\d{2})";
            case "MMM":
                return r.MMM = s,
                i;
            case "MMMM":
                return r.MMMM = s,
                l;
            case "D":
                return r.D = s,
                "(\\d{1,2})";
            case "Do":
                return r.D = s++,
                "(\\d{1,2}(st|nd|rd|th))";
            case "DD":
                return r.D = s,
                "(\\d{2})";
            case "H":
                return r.H = s,
                "(\\d{1,2})";
            case "HH":
                return r.H = s,
                "(\\d{2})";
            case "h":
                return r.h = s,
                "(\\d{1,2})";
            case "hh":
                return r.h = s,
                "(\\d{2})";
            case "m":
                return r.m = s,
                "(\\d{1,2})";
            case "mm":
                return r.m = s,
                "(\\d{2})";
            case "s":
                return r.s = s,
                "(\\d{1,2})";
            case "ss":
                return r.s = s,
                "(\\d{2})";
            case "S":
                return r.S = s,
                "(\\d{1})";
            case "SS":
                return r.S = s,
                "(\\d{2})";
            case "SSS":
                return r.S = s,
                "(\\d{3})";
            case "A":
                return r.A = s,
                "(AM|PM)";
            case "a":
                return r.a = s,
                "(am|pm)";
            case "aa":
                return r.aa = s,
                "(a\\.m\\.|p\\.m\\.)";
            case "ddd":
                return a;
            case "dddd":
                return o;
            case "Q":
            case "d":
            case "E":
                return "(\\d{1})";
            case "Qo":
                return "(1st|2nd|3rd|4th)";
            case "DDD":
            case "DDDD":
                return "(\\d{1,3})";
            case "w":
                return "(\\d{1,2})";
            case "ww":
                return "(\\d{2})";
            case "Z":
                return r.Z = s,
                "(Z|[+-]\\d{2}:\\d{2})";
            case "ZZ":
                return r.ZZ = s,
                "(Z|[+-]\\d{2}\\d{2})";
            case "X":
                return r.X = s,
                "(-?\\d+)";
            case "x":
                return r.x = s,
                "(-?\\d{4,})";
            default:
                return s--,
                "[" === e[0] && (e = e.substring(1, e.length - 1)),
                e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
        }
        )
          , c = {
            map: r,
            regex: new RegExp("^" + u)
        };
        return ei[n] = c,
        c
    }
    function oi(e, t) {
        return void 0 !== e ? e : void 0 !== t ? t.date : j.date
    }
    function ni(e, t="") {
        const o = e > 0 ? "-" : "+"
          , n = Math.abs(e)
          , a = Math.floor(n / 60)
          , l = n % 60;
        return o + Ee(a) + t + Ee(l)
    }
    function ai(e, t, o) {
        let n = e.getFullYear()
          , a = e.getMonth();
        const l = e.getDate();
        return void 0 !== t.year && (n += o * t.year,
        delete t.year),
        void 0 !== t.month && (a += o * t.month,
        delete t.month),
        e.setDate(1),
        e.setMonth(2),
        e.setFullYear(n),
        e.setMonth(a),
        e.setDate(Math.min(l, Bi(e))),
        void 0 !== t.date && (e.setDate(e.getDate() + o * t.date),
        delete t.date),
        e
    }
    function li(e, t, o) {
        const n = void 0 !== t.year ? t.year : e[`get ${o}FullYear`]()
          , a = void 0 !== t.month ? t.month - 1 : e[`get ${o}Month`]()
          , l = new Date(n,a + 1,0).getDate()
          , i = Math.min(l, void 0 !== t.date ? t.date : e[`get ${o}Date`]());
        return e[`set ${o}Date`](1),
        e[`set ${o}Month`](2),
        e[`set ${o}FullYear`](n),
        e[`set ${o}Month`](a),
        e[`set ${o}Date`](i),
        delete t.year,
        delete t.month,
        delete t.date,
        e
    }
    function ii(e, t, o) {
        const n = ri(t)
          , a = new Date(e)
          , l = void 0 !== n.year || void 0 !== n.month || void 0 !== n.date ? ai(a, n, o) : a;
        for (const i in n) {
            const e = Oe(i);
            l[`set ${e}`](l[`get ${e}`]() + o * n[i])
        }
        return l
    }
    function ri(e) {
        const t = {
            ...e
        };
        return void 0 !== e.years && (t.year = e.years,
        delete t.years),
        void 0 !== e.months && (t.month = e.months,
        delete t.months),
        void 0 !== e.days && (t.date = e.days,
        delete t.days),
        void 0 !== e.day && (t.date = e.day,
        delete t.day),
        void 0 !== e.hour && (t.hours = e.hour,
        delete t.hour),
        void 0 !== e.minute && (t.minutes = e.minute,
        delete t.minute),
        void 0 !== e.second && (t.seconds = e.second,
        delete t.second),
        void 0 !== e.millisecond && (t.milliseconds = e.millisecond,
        delete t.millisecond),
        t
    }
    function si(e, t, o) {
        const n = ri(t)
          , a = !0 === o ? "UTC" : ""
          , l = new Date(e)
          , i = void 0 !== n.year || void 0 !== n.month || void 0 !== n.date ? li(l, n, a) : l;
        for (const r in n) {
            const e = r.charAt(0).toUpperCase() + r.slice(1);
            i[`set ${a}${e}`](n[r])
        }
        return i
    }
    function ui(e, t, o) {
        const n = ci(e, t, o)
          , a = new Date(n.year,null === n.month ? null : n.month - 1,null === n.day ? 1 : n.day,n.hour,n.minute,n.second,n.millisecond)
          , l = a.getTimezoneOffset();
        return null === n.timezoneOffset || n.timezoneOffset === l ? a : ii(a, {
            minutes: n.timezoneOffset - l
        }, 1)
    }
    function ci(e, t, o, n, a) {
        const l = {
            year: null,
            month: null,
            day: null,
            hour: null,
            minute: null,
            second: null,
            millisecond: null,
            timezoneOffset: null,
            dateHash: null,
            timeHash: null
        };
        if (void 0 !== a && Object.assign(l, a),
        void 0 === e || null === e || "" === e || "string" !== typeof e)
            return l;
        void 0 === t && (t = Zl);
        const i = oi(o, H.props)
          , r = i.months
          , s = i.monthsShort
          , {regex: u, map: c} = ti(t, i)
          , d = e.match(u);
        if (null === d)
            return l;
        let v = "";
        if (void 0 !== c.X || void 0 !== c.x) {
            const e = parseInt(d[void 0 !== c.X ? c.X : c.x], 10);
            if (!0 === isNaN(e) || e < 0)
                return l;
            const t = new Date(e * (void 0 !== c.X ? 1e3 : 1));
            l.year = t.getFullYear(),
            l.month = t.getMonth() + 1,
            l.day = t.getDate(),
            l.hour = t.getHours(),
            l.minute = t.getMinutes(),
            l.second = t.getSeconds(),
            l.millisecond = t.getMilliseconds()
        } else {
            if (void 0 !== c.YYYY)
                l.year = parseInt(d[c.YYYY], 10);
            else if (void 0 !== c.YY) {
                const e = parseInt(d[c.YY], 10);
                l.year = e < 0 ? e : 2e3 + e
            }
            if (void 0 !== c.M) {
                if (l.month = parseInt(d[c.M], 10),
                l.month < 1 || l.month > 12)
                    return l
            } else
                void 0 !== c.MMM ? l.month = s.indexOf(d[c.MMM]) + 1 : void 0 !== c.MMMM && (l.month = r.indexOf(d[c.MMMM]) + 1);
            if (void 0 !== c.D) {
                if (l.day = parseInt(d[c.D], 10),
                null === l.year || null === l.month || l.day < 1)
                    return l;
                const e = "persian" !== n ? new Date(l.year,l.month,0).getDate() : Ll(l.year, l.month);
                if (l.day > e)
                    return l
            }
            void 0 !== c.H ? l.hour = parseInt(d[c.H], 10) % 24 : void 0 !== c.h && (l.hour = parseInt(d[c.h], 10) % 12,
            (c.A && "PM" === d[c.A] || c.a && "pm" === d[c.a] || c.aa && "p.m." === d[c.aa]) && (l.hour += 12),
            l.hour = l.hour % 24),
            void 0 !== c.m && (l.minute = parseInt(d[c.m], 10) % 60),
            void 0 !== c.s && (l.second = parseInt(d[c.s], 10) % 60),
            void 0 !== c.S && (l.millisecond = parseInt(d[c.S], 10) * 10 ** (3 - d[c.S].length)),
            void 0 === c.Z && void 0 === c.ZZ || (v = void 0 !== c.Z ? d[c.Z].replace(":", "") : d[c.ZZ],
            l.timezoneOffset = ("+" === v[0] ? -1 : 1) * (60 * v.slice(1, 3) + 1 * v.slice(3, 5)))
        }
        return l.dateHash = Ee(l.year, 6) + "/" + Ee(l.month) + "/" + Ee(l.day),
        l.timeHash = Ee(l.hour) + ":" + Ee(l.minute) + ":" + Ee(l.second) + v,
        l
    }
    function di(e) {
        return "number" === typeof e || !1 === isNaN(Date.parse(e))
    }
    function vi(e, t) {
        return si(new Date, e, t)
    }
    function pi(e) {
        const t = new Date(e).getDay();
        return 0 === t ? 7 : t
    }
    function mi(e) {
        const t = new Date(e.getFullYear(),e.getMonth(),e.getDate());
        t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
        const o = new Date(t.getFullYear(),0,4);
        o.setDate(o.getDate() - (o.getDay() + 6) % 7 + 3);
        const n = t.getTimezoneOffset() - o.getTimezoneOffset();
        t.setHours(t.getHours() - n);
        const a = (t - o) / (7 * Yl);
        return 1 + Math.floor(a)
    }
    function fi(e) {
        return 1e4 * e.getFullYear() + 100 * e.getMonth() + e.getDate()
    }
    function hi(e, t) {
        const o = new Date(e);
        return !0 === t ? fi(o) : o.getTime()
    }
    function gi(e, t, o, n={}) {
        const a = hi(t, n.onlyDate)
          , l = hi(o, n.onlyDate)
          , i = hi(e, n.onlyDate);
        return (i > a || !0 === n.inclusiveFrom && i === a) && (i < l || !0 === n.inclusiveTo && i === l)
    }
    function bi(e, t) {
        return ii(e, t, 1)
    }
    function yi(e, t) {
        return ii(e, t, -1)
    }
    function wi(e, t, o) {
        const n = new Date(e)
          , a = `set ${!0 === o ? "UTC" : ""}`;
        switch (t) {
        case "year":
        case "years":
            n[`${a}Month`](0);
        case "month":
        case "months":
            n[`${a}Date`](1);
        case "day":
        case "days":
        case "date":
            n[`${a}Hours`](0);
        case "hour":
        case "hours":
            n[`${a}Minutes`](0);
        case "minute":
        case "minutes":
            n[`${a}Seconds`](0);
        case "second":
        case "seconds":
            n[`${a}Milliseconds`](0)
        }
        return n
    }
    function xi(e, t, o) {
        const n = new Date(e)
          , a = `set ${!0 === o ? "UTC" : ""}`;
        switch (t) {
        case "year":
        case "years":
            n[`${a}Month`](11);
        case "month":
        case "months":
            n[`${a}Date`](Bi(n));
        case "day":
        case "days":
        case "date":
            n[`${a}Hours`](23);
        case "hour":
        case "hours":
            n[`${a}Minutes`](59);
        case "minute":
        case "minutes":
            n[`${a}Seconds`](59);
        case "second":
        case "seconds":
            n[`${a}Milliseconds`](999)
        }
        return n
    }
    function _i(e) {
        let t = new Date(e);
        return Array.prototype.slice.call(arguments, 1).forEach(e=>{
            t = Math.max(t, new Date(e))
        }
        ),
        t
    }
    function Si(e) {
        let t = new Date(e);
        return Array.prototype.slice.call(arguments, 1).forEach(e=>{
            t = Math.min(t, new Date(e))
        }
        ),
        t
    }
    function ki(e, t, o) {
        return (e.getTime() - e.getTimezoneOffset() * Xl - (t.getTime() - t.getTimezoneOffset() * Xl)) / o
    }
    function Ci(e, t, o="days") {
        const n = new Date(e)
          , a = new Date(t);
        switch (o) {
        case "years":
        case "year":
            return n.getFullYear() - a.getFullYear();
        case "months":
        case "month":
            return 12 * (n.getFullYear() - a.getFullYear()) + n.getMonth() - a.getMonth();
        case "days":
        case "day":
        case "date":
            return ki(wi(n, "day"), wi(a, "day"), Yl);
        case "hours":
        case "hour":
            return ki(wi(n, "hour"), wi(a, "hour"), Kl);
        case "minutes":
        case "minute":
            return ki(wi(n, "minute"), wi(a, "minute"), Xl);
        case "seconds":
        case "second":
            return ki(wi(n, "second"), wi(a, "second"), 1e3)
        }
    }
    function qi(e) {
        return Ci(e, wi(e, "year"), "days") + 1
    }
    function $i(e) {
        return !0 === we(e) ? "date" : "number" === typeof e ? "number" : "string"
    }
    function Mi(e, t, o) {
        const n = new Date(e);
        if (t) {
            const e = new Date(t);
            if (n < e)
                return e
        }
        if (o) {
            const e = new Date(o);
            if (n > e)
                return e
        }
        return n
    }
    function Ti(e, t, o) {
        const n = new Date(e)
          , a = new Date(t);
        if (void 0 === o)
            return n.getTime() === a.getTime();
        switch (o) {
        case "second":
        case "seconds":
            if (n.getSeconds() !== a.getSeconds())
                return !1;
        case "minute":
        case "minutes":
            if (n.getMinutes() !== a.getMinutes())
                return !1;
        case "hour":
        case "hours":
            if (n.getHours() !== a.getHours())
                return !1;
        case "day":
        case "days":
        case "date":
            if (n.getDate() !== a.getDate())
                return !1;
        case "month":
        case "months":
            if (n.getMonth() !== a.getMonth())
                return !1;
        case "year":
        case "years":
            if (n.getFullYear() !== a.getFullYear())
                return !1;
            break;
        default:
            throw new Error(`date isSameDate unknown unit ${o}`)
        }
        return !0
    }
    function Bi(e) {
        return new Date(e.getFullYear(),e.getMonth() + 1,0).getDate()
    }
    function zi(e) {
        if (e >= 11 && e <= 13)
            return `${e}th`;
        switch (e % 10) {
        case 1:
            return `${e}st`;
        case 2:
            return `${e}nd`;
        case 3:
            return `${e}rd`
        }
        return `${e}th`
    }
    const Oi = {
        YY(e, t, o) {
            const n = this.YYYY(e, t, o) % 100;
            return n >= 0 ? Ee(n) : "-" + Ee(Math.abs(n))
        },
        YYYY(e, t, o) {
            return void 0 !== o && null !== o ? o : e.getFullYear()
        },
        M(e) {
            return e.getMonth() + 1
        },
        MM(e) {
            return Ee(e.getMonth() + 1)
        },
        MMM(e, t) {
            return t.monthsShort[e.getMonth()]
        },
        MMMM(e, t) {
            return t.months[e.getMonth()]
        },
        Q(e) {
            return Math.ceil((e.getMonth() + 1) / 3)
        },
        Qo(e) {
            return zi(this.Q(e))
        },
        D(e) {
            return e.getDate()
        },
        Do(e) {
            return zi(e.getDate())
        },
        DD(e) {
            return Ee(e.getDate())
        },
        DDD(e) {
            return qi(e)
        },
        DDDD(e) {
            return Ee(qi(e), 3)
        },
        d(e) {
            return e.getDay()
        },
        dd(e, t) {
            return this.dddd(e, t).slice(0, 2)
        },
        ddd(e, t) {
            return t.daysShort[e.getDay()]
        },
        dddd(e, t) {
            return t.days[e.getDay()]
        },
        E(e) {
            return e.getDay() || 7
        },
        w(e) {
            return mi(e)
        },
        ww(e) {
            return Ee(mi(e))
        },
        H(e) {
            return e.getHours()
        },
        HH(e) {
            return Ee(e.getHours())
        },
        h(e) {
            const t = e.getHours();
            return 0 === t ? 12 : t > 12 ? t % 12 : t
        },
        hh(e) {
            return Ee(this.h(e))
        },
        m(e) {
            return e.getMinutes()
        },
        mm(e) {
            return Ee(e.getMinutes())
        },
        s(e) {
            return e.getSeconds()
        },
        ss(e) {
            return Ee(e.getSeconds())
        },
        S(e) {
            return Math.floor(e.getMilliseconds() / 100)
        },
        SS(e) {
            return Ee(Math.floor(e.getMilliseconds() / 10))
        },
        SSS(e) {
            return Ee(e.getMilliseconds(), 3)
        },
        A(e) {
            return this.H(e) < 12 ? "AM" : "PM"
        },
        a(e) {
            return this.H(e) < 12 ? "am" : "pm"
        },
        aa(e) {
            return this.H(e) < 12 ? "a.m." : "p.m."
        },
        Z(e, t, o, n) {
            const a = void 0 === n || null === n ? e.getTimezoneOffset() : n;
            return ni(a, ":")
        },
        ZZ(e, t, o, n) {
            const a = void 0 === n || null === n ? e.getTimezoneOffset() : n;
            return ni(a)
        },
        X(e) {
            return Math.floor(e.getTime() / 1e3)
        },
        x(e) {
            return e.getTime()
        }
    };
    function Vi(e, t, o, n, a) {
        if (0 !== e && !e || e === 1 / 0 || e === -1 / 0)
            return;
        const l = new Date(e);
        if (isNaN(l))
            return;
        void 0 === t && (t = Zl);
        const i = oi(o, H.props);
        return t.replace(Gl, (e,t)=>e in Oi ? Oi[e](l, i, n, a) : void 0 === t ? e : t.split("\\]").join("]"))
    }
    function Li(e) {
        return !0 === we(e) ? new Date(e.getTime()) : e
    }
    var Ei = {
        isValid: di,
        extractDate: ui,
        buildDate: vi,
        getDayOfWeek: pi,
        getWeekOfYear: mi,
        isBetweenDates: gi,
        addToDate: bi,
        subtractFromDate: yi,
        adjustDate: si,
        startOfDate: wi,
        endOfDate: xi,
        getMaxDate: _i,
        getMinDate: Si,
        getDateDiff: Ci,
        getDayOfYear: qi,
        inferDateFormat: $i,
        getDateBetween: Mi,
        isSameDate: Ti,
        daysInMonth: Bi,
        formatDate: Vi,
        clone: Li
    };
    const Ai = 20
      , Pi = ["Calendar", "Years", "Months"]
      , Ri = e=>Pi.includes(e)
      , Fi = e=>/^-?[\d]+\/[0-1]\d$/.test(e)
      , Ii = " — ";
    function Ni(e) {
        return e.year + "/" + Ee(e.month)
    }
    var ji = Me({
        name: "QDate",
        props: {
            ...Hl,
            ...In,
            ...yt,
            multiple: Boolean,
            range: Boolean,
            title: String,
            subtitle: String,
            mask: {
                default: "YYYY/MM/DD"
            },
            defaultYearMonth: {
                type: String,
                validator: Fi
            },
            yearsInMonthView: Boolean,
            events: [Array, Function],
            eventColor: [String, Function],
            emitImmediately: Boolean,
            options: [Array, Function],
            navigationMinYearMonth: {
                type: String,
                validator: Fi
            },
            navigationMaxYearMonth: {
                type: String,
                validator: Fi
            },
            noUnset: Boolean,
            firstDayOfWeek: [String, Number],
            todayBtn: Boolean,
            minimal: Boolean,
            defaultView: {
                type: String,
                default: "Calendar",
                validator: Ri
            }
        },
        emits: [...Ql, "range-start", "range-end", "navigation"],
        setup(t, {slots: o, emit: n}) {
            const {proxy: a} = e.getCurrentInstance()
              , {$q: l} = a
              , i = wt(t, l)
              , {getCache: r} = ea()
              , {tabindex: s, headerClass: u, getLocale: c, getCurrentDate: d} = Wl(t, l);
            let v;
            const p = Nn(t)
              , m = jn(p)
              , f = e.ref(null)
              , h = e.ref(de())
              , g = e.ref(c())
              , b = e.computed(()=>de())
              , y = e.computed(()=>c())
              , w = e.computed(()=>d())
              , x = e.ref(pe(h.value, g.value))
              , _ = e.ref(t.defaultView)
              , S = !0 === l.lang.rtl ? "right" : "left"
              , k = e.ref(S.value)
              , C = e.ref(S.value)
              , q = x.value.year
              , $ = e.ref(q - q % Ai - (q < 0 ? Ai : 0))
              , M = e.ref(null)
              , T = e.computed(()=>{
                const e = !0 === t.landscape ? "landscape" : "portrait";
                return `q-date q-date--${e} q-date--${e}-${!0 === t.minimal ? "minimal" : "standard"}` + (!0 === i.value ? " q-date--dark q-dark" : "") + (!0 === t.bordered ? " q-date--bordered" : "") + (!0 === t.square ? " q-date--square no-border-radius" : "") + (!0 === t.flat ? " q-date--flat no-shadow" : "") + (!0 === t.disable ? " disabled" : !0 === t.readonly ? " q-date--readonly" : "")
            }
            )
              , B = e.computed(()=>{
                return t.color || "primary"
            }
            )
              , z = e.computed(()=>{
                return t.textColor || "white"
            }
            )
              , O = e.computed(()=>!0 === t.emitImmediately && !0 !== t.multiple && !0 !== t.range)
              , V = e.computed(()=>!0 === Array.isArray(t.modelValue) ? t.modelValue : null !== t.modelValue && void 0 !== t.modelValue ? [t.modelValue] : [])
              , L = e.computed(()=>V.value.filter(e=>"string" === typeof e).map(e=>ve(e, h.value, g.value)).filter(e=>null !== e.dateHash && null !== e.day && null !== e.month && null !== e.year))
              , E = e.computed(()=>{
                const e = e=>ve(e, h.value, g.value);
                return V.value.filter(e=>!0 === ye(e) && void 0 !== e.from && void 0 !== e.to).map(t=>({
                    from: e(t.from),
                    to: e(t.to)
                })).filter(e=>null !== e.from.dateHash && null !== e.to.dateHash && e.from.dateHash < e.to.dateHash)
            }
            )
              , A = e.computed(()=>"persian" !== t.calendar ? e=>new Date(e.year,e.month - 1,e.day) : e=>{
                const t = Ol(e.year, e.month, e.day);
                return new Date(t.gy,t.gm - 1,t.gd)
            }
            )
              , P = e.computed(()=>"persian" === t.calendar ? Ul : (e,t,o)=>Vi(new Date(e.year,e.month - 1,e.day,e.hour,e.minute,e.second,e.millisecond), void 0 === t ? h.value : t, void 0 === o ? g.value : o, e.year, e.timezoneOffset))
              , R = e.computed(()=>L.value.length + E.value.reduce((e,t)=>e + 1 + Ci(A.value(t.to), A.value(t.from)), 0))
              , F = e.computed(()=>{
                if (void 0 !== t.title && null !== t.title && t.title.length > 0)
                    return t.title;
                if (null !== M.value) {
                    const e = M.value.init
                      , t = A.value(e);
                    return g.value.daysShort[t.getDay()] + ", " + g.value.monthsShort[e.month - 1] + " " + e.day + Ii + "?"
                }
                if (0 === R.value)
                    return Ii;
                if (R.value > 1)
                    return `${R.value} ${g.value.pluralDay}`;
                const e = L.value[0]
                  , o = A.value(e);
                return !0 === isNaN(o.valueOf()) ? Ii : void 0 !== g.value.headerTitle ? g.value.headerTitle(o, e) : g.value.daysShort[o.getDay()] + ", " + g.value.monthsShort[e.month - 1] + " " + e.day
            }
            )
              , I = e.computed(()=>{
                const e = L.value.concat(E.value.map(e=>e.from)).sort((e,t)=>e.year - t.year || e.month - t.month);
                return e[0]
            }
            )
              , N = e.computed(()=>{
                const e = L.value.concat(E.value.map(e=>e.to)).sort((e,t)=>t.year - e.year || t.month - e.month);
                return e[0]
            }
            )
              , j = e.computed(()=>{
                if (void 0 !== t.subtitle && null !== t.subtitle && t.subtitle.length > 0)
                    return t.subtitle;
                if (0 === R.value)
                    return Ii;
                if (R.value > 1) {
                    const e = I.value
                      , t = N.value
                      , o = g.value.monthsShort;
                    return o[e.month - 1] + (e.year !== t.year ? " " + e.year + Ii + o[t.month - 1] + " " : e.month !== t.month ? Ii + o[t.month - 1] : "") + " " + t.year
                }
                return L.value[0].year
            }
            )
              , D = e.computed(()=>{
                const e = [l.iconSet.datetime.arrowLeft, l.iconSet.datetime.arrowRight];
                return !0 === l.lang.rtl ? e.reverse() : e
            }
            )
              , H = e.computed(()=>void 0 !== t.firstDayOfWeek ? Number(t.firstDayOfWeek) : g.value.firstDayOfWeek)
              , Q = e.computed(()=>{
                const e = g.value.daysShort
                  , t = H.value;
                return t > 0 ? e.slice(t, 7).concat(e.slice(0, t)) : e
            }
            )
              , U = e.computed(()=>{
                const e = x.value;
                return "persian" !== t.calendar ? new Date(e.year,e.month,0).getDate() : Ll(e.year, e.month)
            }
            )
              , W = e.computed(()=>"function" === typeof t.eventColor ? t.eventColor : ()=>t.eventColor)
              , Y = e.computed(()=>{
                if (void 0 === t.navigationMinYearMonth)
                    return null;
                const e = t.navigationMinYearMonth.split("/");
                return {
                    year: parseInt(e[0], 10),
                    month: parseInt(e[1], 10)
                }
            }
            )
              , K = e.computed(()=>{
                if (void 0 === t.navigationMaxYearMonth)
                    return null;
                const e = t.navigationMaxYearMonth.split("/");
                return {
                    year: parseInt(e[0], 10),
                    month: parseInt(e[1], 10)
                }
            }
            )
              , X = e.computed(()=>{
                const e = {
                    month: {
                        prev: !0,
                        next: !0
                    },
                    year: {
                        prev: !0,
                        next: !0
                    }
                };
                return null !== Y.value && Y.value.year >= x.value.year && (e.year.prev = !1,
                Y.value.year === x.value.year && Y.value.month >= x.value.month && (e.month.prev = !1)),
                null !== K.value && K.value.year <= x.value.year && (e.year.next = !1,
                K.value.year === x.value.year && K.value.month <= x.value.month && (e.month.next = !1)),
                e
            }
            )
              , Z = e.computed(()=>{
                const e = {};
                return L.value.forEach(t=>{
                    const o = Ni(t);
                    void 0 === e[o] && (e[o] = []),
                    e[o].push(t.day)
                }
                ),
                e
            }
            )
              , G = e.computed(()=>{
                const e = {};
                return E.value.forEach(t=>{
                    const o = Ni(t.from)
                      , n = Ni(t.to);
                    if (void 0 === e[o] && (e[o] = []),
                    e[o].push({
                        from: t.from.day,
                        to: o === n ? t.to.day : void 0,
                        range: t
                    }),
                    o < n) {
                        let o;
                        const {year: a, month: l} = t.from
                          , i = l < 12 ? {
                            year: a,
                            month: l + 1
                        } : {
                            year: a + 1,
                            month: 1
                        };
                        while ((o = Ni(i)) <= n)
                            void 0 === e[o] && (e[o] = []),
                            e[o].push({
                                from: void 0,
                                to: o === n ? t.to.day : void 0,
                                range: t
                            }),
                            i.month++,
                            i.month > 12 && (i.year++,
                            i.month = 1)
                    }
                }
                ),
                e
            }
            )
              , J = e.computed(()=>{
                if (null === M.value)
                    return;
                const {init: e, initHash: t, final: o, finalHash: n} = M.value
                  , [a,l] = t <= n ? [e, o] : [o, e]
                  , i = Ni(a)
                  , r = Ni(l);
                if (i !== ee.value && r !== ee.value)
                    return;
                const s = {};
                return i === ee.value ? (s.from = a.day,
                s.includeFrom = !0) : s.from = 1,
                r === ee.value ? (s.to = l.day,
                s.includeTo = !0) : s.to = U.value,
                s
            }
            )
              , ee = e.computed(()=>Ni(x.value))
              , te = e.computed(()=>{
                const e = {};
                if (void 0 === t.options) {
                    for (let t = 1; t <= U.value; t++)
                        e[t] = !0;
                    return e
                }
                const o = "function" === typeof t.options ? t.options : e=>t.options.includes(e);
                for (let t = 1; t <= U.value; t++) {
                    const n = ee.value + "/" + Ee(t);
                    e[t] = o(n)
                }
                return e
            }
            )
              , oe = e.computed(()=>{
                const e = {};
                if (void 0 === t.events)
                    for (let t = 1; t <= U.value; t++)
                        e[t] = !1;
                else {
                    const o = "function" === typeof t.events ? t.events : e=>t.events.includes(e);
                    for (let t = 1; t <= U.value; t++) {
                        const n = ee.value + "/" + Ee(t);
                        e[t] = !0 === o(n) && W.value(n)
                    }
                }
                return e
            }
            )
              , ne = e.computed(()=>{
                let e, o;
                const {year: n, month: a} = x.value;
                if ("persian" !== t.calendar)
                    e = new Date(n,a - 1,1),
                    o = new Date(n,a - 1,0).getDate();
                else {
                    const t = Ol(n, a, 1);
                    e = new Date(t.gy,t.gm - 1,t.gd);
                    let l = a - 1
                      , i = n;
                    0 === l && (l = 12,
                    i--),
                    o = Ll(i, l)
                }
                return {
                    days: e.getDay() - H.value - 1,
                    endDay: o
                }
            }
            )
              , ae = e.computed(()=>{
                const e = []
                  , {days: t, endDay: o} = ne.value
                  , n = t < 0 ? t + 7 : t;
                if (n < 6)
                    for (let i = o - n; i <= o; i++)
                        e.push({
                            i: i,
                            fill: !0
                        });
                const a = e.length;
                for (let i = 1; i <= U.value; i++) {
                    const t = {
                        i: i,
                        event: oe.value[i],
                        classes: []
                    };
                    !0 === te.value[i] && (t.in = !0,
                    t.flat = !0),
                    e.push(t)
                }
                if (void 0 !== Z.value[ee.value] && Z.value[ee.value].forEach(t=>{
                    const o = a + t - 1;
                    Object.assign(e[o], {
                        selected: !0,
                        unelevated: !0,
                        flat: !1,
                        color: B.value,
                        textColor: z.value
                    })
                }
                ),
                void 0 !== G.value[ee.value] && G.value[ee.value].forEach(t=>{
                    if (void 0 !== t.from) {
                        const o = a + t.from - 1
                          , n = a + (t.to || U.value) - 1;
                        for (let a = o; a <= n; a++)
                            Object.assign(e[a], {
                                range: t.range,
                                unelevated: !0,
                                color: B.value,
                                textColor: z.value
                            });
                        Object.assign(e[o], {
                            rangeFrom: !0,
                            flat: !1
                        }),
                        void 0 !== t.to && Object.assign(e[n], {
                            rangeTo: !0,
                            flat: !1
                        })
                    } else if (void 0 !== t.to) {
                        const o = a + t.to - 1;
                        for (let n = a; n <= o; n++)
                            Object.assign(e[n], {
                                range: t.range,
                                unelevated: !0,
                                color: B.value,
                                textColor: z.value
                            });
                        Object.assign(e[o], {
                            flat: !1,
                            rangeTo: !0
                        })
                    } else {
                        const o = a + U.value - 1;
                        for (let n = a; n <= o; n++)
                            Object.assign(e[n], {
                                range: t.range,
                                unelevated: !0,
                                color: B.value,
                                textColor: z.value
                            })
                    }
                }
                ),
                void 0 !== J.value) {
                    const t = a + J.value.from - 1
                      , o = a + J.value.to - 1;
                    for (let n = t; n <= o; n++)
                        e[n].color = B.value,
                        e[n].editRange = !0;
                    !0 === J.value.includeFrom && (e[t].editRangeFrom = !0),
                    !0 === J.value.includeTo && (e[o].editRangeTo = !0)
                }
                x.value.year === w.value.year && x.value.month === w.value.month && (e[a + w.value.day - 1].today = !0);
                const l = e.length % 7;
                if (l > 0) {
                    const t = 7 - l;
                    for (let o = 1; o <= t; o++)
                        e.push({
                            i: o,
                            fill: !0
                        })
                }
                return e.forEach(e=>{
                    let t = "q-date__calendar-item ";
                    !0 === e.fill ? t += "q-date__calendar-item--fill" : (t += `q-date__calendar-item--${!0 === e.in ? "in" : "out"}`,
                    void 0 !== e.range && (t += ` q-date__range ${!0 === e.rangeTo ? "-to" : !0 === e.rangeFrom ? "-from" : ""}`),
                    !0 === e.editRange && (t += ` q-date__edit-range ${!0 === e.editRangeFrom ? "-from" : ""}${!0 === e.editRangeTo ? "-to" : ""}`),
                    void 0 === e.range && !0 !== e.editRange || (t += ` text-${e.color}`)),
                    e.classes = t
                }
                ),
                e
            }
            )
              , le = e.computed(()=>!0 === t.disable ? {
                "aria-disabled": "true"
            } : !0 === t.readonly ? {
                "aria-readonly": "true"
            } : {});
            function ie() {
                const e = w.value
                  , t = Z.value[Ni(e)];
                void 0 !== t && !1 !== t.includes(e.day) || $e(e),
                ue(e.year, e.month)
            }
            function re(e) {
                !0 === Ri(e) && (_.value = e)
            }
            function se(e, t) {
                if (["month", "year"].includes(e)) {
                    const o = "month" === e ? fe : he;
                    o(!0 === t ? -1 : 1)
                }
            }
            function ue(e, t) {
                _.value = "Calendar",
                _e(e, t)
            }
            function ce(e, o) {
                if (!1 === t.range || !e)
                    return void (M.value = null);
                const n = Object.assign({
                    ...x.value
                }, e)
                  , a = void 0 !== o ? Object.assign({
                    ...x.value
                }, o) : n;
                M.value = {
                    init: n,
                    initHash: Ul(n),
                    final: a,
                    finalHash: Ul(a)
                },
                ue(n.year, n.month)
            }
            function de() {
                return "persian" === t.calendar ? "YYYY/MM/DD" : t.mask
            }
            function ve(e, o, n) {
                return ci(e, o, n, t.calendar, {
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 0
                })
            }
            function pe(e, o) {
                const n = !0 === Array.isArray(t.modelValue) ? t.modelValue : t.modelValue ? [t.modelValue] : [];
                if (0 === n.length)
                    return me();
                const a = n[n.length - 1]
                  , l = ve(void 0 !== a.from ? a.from : a, e, o);
                return null === l.dateHash ? me() : l
            }
            function me() {
                let e, o;
                if (void 0 !== t.defaultYearMonth) {
                    const n = t.defaultYearMonth.split("/");
                    e = parseInt(n[0], 10),
                    o = parseInt(n[1], 10)
                } else {
                    const t = void 0 !== w.value ? w.value : d();
                    e = t.year,
                    o = t.month
                }
                return {
                    year: e,
                    month: o,
                    day: 1,
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 0,
                    dateHash: e + "/" + Ee(o) + "/01"
                }
            }
            function fe(e) {
                let t = x.value.year
                  , o = Number(x.value.month) + e;
                13 === o ? (o = 1,
                t++) : 0 === o && (o = 12,
                t--),
                _e(t, o),
                !0 === O.value && ke("month")
            }
            function he(e) {
                const t = Number(x.value.year) + e;
                _e(t, x.value.month),
                !0 === O.value && ke("year")
            }
            function ge(e) {
                _e(e, x.value.month),
                _.value = "Years" === t.defaultView ? "Months" : "Calendar",
                !0 === O.value && ke("year")
            }
            function be(e) {
                _e(x.value.year, e),
                _.value = "Calendar",
                !0 === O.value && ke("month")
            }
            function we(e, t) {
                const o = Z.value[t]
                  , n = void 0 !== o && !0 === o.includes(e.day) ? Me : $e;
                n(e)
            }
            function xe(e) {
                return {
                    year: e.year,
                    month: e.month,
                    day: e.day
                }
            }
            function _e(t, o) {
                null !== Y.value && t <= Y.value.year && (t = Y.value.year,
                o < Y.value.month && (o = Y.value.month)),
                null !== K.value && t >= K.value.year && (t = K.value.year,
                o > K.value.month && (o = K.value.month));
                const n = t + "/" + Ee(o) + "/01";
                n !== x.value.dateHash && (k.value = x.value.dateHash < n === (!0 !== l.lang.rtl) ? "left" : "right",
                t !== x.value.year && (C.value = k.value),
                e.nextTick(()=>{
                    $.value = t - t % Ai - (t < 0 ? Ai : 0),
                    Object.assign(x.value, {
                        year: t,
                        month: o,
                        day: 1,
                        dateHash: n
                    })
                }
                ))
            }
            function Se(e, o, a) {
                const l = null !== e && 1 === e.length && !1 === t.multiple ? e[0] : e;
                v = l;
                const {reason: i, details: r} = Ce(o, a);
                n("update:modelValue", l, i, r)
            }
            function ke(o) {
                const a = void 0 !== L.value[0] && null !== L.value[0].dateHash ? {
                    ...L.value[0]
                } : {
                    ...x.value
                };
                e.nextTick(()=>{
                    a.year = x.value.year,
                    a.month = x.value.month;
                    const e = "persian" !== t.calendar ? new Date(a.year,a.month,0).getDate() : Ll(a.year, a.month);
                    a.day = Math.min(Math.max(1, a.day), e);
                    const l = qe(a);
                    v = l;
                    const {details: i} = Ce("", a);
                    n("update:modelValue", l, o, i)
                }
                )
            }
            function Ce(e, t) {
                return void 0 !== t.from ? {
                    reason: `${e}-range`,
                    details: {
                        ...xe(t.target),
                        from: xe(t.from),
                        to: xe(t.to)
                    }
                } : {
                    reason: `${e}-day`,
                    details: xe(t)
                }
            }
            function qe(e, t, o) {
                return void 0 !== e.from ? {
                    from: P.value(e.from, t, o),
                    to: P.value(e.to, t, o)
                } : P.value(e, t, o)
            }
            function $e(e) {
                let o;
                if (!0 === t.multiple)
                    if (void 0 !== e.from) {
                        const t = Ul(e.from)
                          , n = Ul(e.to)
                          , a = L.value.filter(e=>e.dateHash < t || e.dateHash > n)
                          , l = E.value.filter(({from: e, to: o})=>o.dateHash < t || e.dateHash > n);
                        o = a.concat(l).concat(e).map(e=>qe(e))
                    } else {
                        const t = V.value.slice();
                        t.push(qe(e)),
                        o = t
                    }
                else
                    o = qe(e);
                Se(o, "add", e)
            }
            function Me(e) {
                if (!0 === t.noUnset)
                    return;
                let o = null;
                if (!0 === t.multiple && !0 === Array.isArray(t.modelValue)) {
                    const n = qe(e);
                    o = void 0 !== e.from ? t.modelValue.filter(e=>void 0 === e.from || e.from !== n.from && e.to !== n.to) : t.modelValue.filter(e=>e !== n),
                    0 === o.length && (o = null)
                }
                Se(o, "remove", e)
            }
            function Te(e, o, a) {
                const l = L.value.concat(E.value).map(t=>qe(t, e, o)).filter(e=>{
                    return void 0 !== e.from ? null !== e.from.dateHash && null !== e.to.dateHash : null !== e.dateHash
                }
                );
                n("update:modelValue", (!0 === t.multiple ? l : l[0]) || null, a)
            }
            function Be() {
                if (!0 !== t.minimal)
                    return e.h("div", {
                        class: "q-date__header " + u.value
                    }, [e.h("div", {
                        class: "relative-position"
                    }, [e.h(e.Transition, {
                        name: "q-transition--fade"
                    }, ()=>e.h("div", {
                        key: "h-yr-" + j.value,
                        class: "q-date__header-subtitle q-date__header-link " + ("Years" === _.value ? "q-date__header-link--active" : "cursor-pointer"),
                        tabindex: s.value,
                        ...r("vY", {
                            onClick() {
                                _.value = "Years"
                            },
                            onKeyup(e) {
                                13 === e.keyCode && (_.value = "Years")
                            }
                        })
                    }, [j.value]))]), e.h("div", {
                        class: "q-date__header-title relative-position flex no-wrap"
                    }, [e.h("div", {
                        class: "relative-position col"
                    }, [e.h(e.Transition, {
                        name: "q-transition--fade"
                    }, ()=>e.h("div", {
                        key: "h-sub" + F.value,
                        class: "q-date__header-title-label q-date__header-link " + ("Calendar" === _.value ? "q-date__header-link--active" : "cursor-pointer"),
                        tabindex: s.value,
                        ...r("vC", {
                            onClick() {
                                _.value = "Calendar"
                            },
                            onKeyup(e) {
                                13 === e.keyCode && (_.value = "Calendar")
                            }
                        })
                    }, [F.value]))]), !0 === t.todayBtn ? e.h(ho, {
                        class: "q-date__header-today self-start",
                        icon: l.iconSet.datetime.today,
                        flat: !0,
                        size: "sm",
                        round: !0,
                        tabindex: s.value,
                        onClick: ie
                    }) : null])])
            }
            function ze({label: t, type: o, key: n, dir: a, goTo: l, boundaries: i, cls: u}) {
                return [e.h("div", {
                    class: "row items-center q-date__arrow"
                }, [e.h(ho, {
                    round: !0,
                    dense: !0,
                    size: "sm",
                    flat: !0,
                    icon: D.value[0],
                    tabindex: s.value,
                    disable: !1 === i.prev,
                    ...r("go-#" + o, {
                        onClick() {
                            l(-1)
                        }
                    })
                })]), e.h("div", {
                    class: "relative-position overflow-hidden flex flex-center" + u
                }, [e.h(e.Transition, {
                    name: "q-transition--jump-" + a
                }, ()=>e.h("div", {
                    key: n
                }, [e.h(ho, {
                    flat: !0,
                    dense: !0,
                    noCaps: !0,
                    label: t,
                    tabindex: s.value,
                    ...r("view#" + o, {
                        onClick: ()=>{
                            _.value = o
                        }
                    })
                })]))]), e.h("div", {
                    class: "row items-center q-date__arrow"
                }, [e.h(ho, {
                    round: !0,
                    dense: !0,
                    size: "sm",
                    flat: !0,
                    icon: D.value[1],
                    tabindex: s.value,
                    disable: !1 === i.next,
                    ...r("go+#" + o, {
                        onClick() {
                            l(1)
                        }
                    })
                })])]
            }
            e.watch(()=>t.modelValue, e=>{
                if (v === e)
                    v = 0;
                else {
                    const {year: e, month: t} = pe(h.value, g.value);
                    _e(e, t)
                }
            }
            ),
            e.watch(_, ()=>{
                null !== f.value && f.value.focus()
            }
            ),
            e.watch(()=>x.value.year, e=>{
                n("navigation", {
                    year: e,
                    month: x.value.month
                })
            }
            ),
            e.watch(()=>x.value.month, e=>{
                n("navigation", {
                    year: x.value.year,
                    month: e
                })
            }
            ),
            e.watch(b, e=>{
                Te(e, g.value, "mask"),
                h.value = e
            }
            ),
            e.watch(y, e=>{
                Te(h.value, e, "locale"),
                g.value = e
            }
            ),
            Object.assign(a, {
                setToday: ie,
                setView: re,
                offsetCalendar: se,
                setCalendarTo: ue,
                setEditingRange: ce
            });
            const Oe = {
                Calendar: ()=>[e.h("div", {
                    key: "calendar-view",
                    class: "q-date__view q-date__calendar"
                }, [e.h("div", {
                    class: "q-date__navigation row items-center no-wrap"
                }, ze({
                    label: g.value.months[x.value.month - 1],
                    type: "Months",
                    key: x.value.month,
                    dir: k.value,
                    goTo: fe,
                    boundaries: X.value.month,
                    cls: " col"
                }).concat(ze({
                    label: x.value.year,
                    type: "Years",
                    key: x.value.year,
                    dir: C.value,
                    goTo: he,
                    boundaries: X.value.year,
                    cls: ""
                }))), e.h("div", {
                    class: "q-date__calendar-weekdays row items-center no-wrap"
                }, Q.value.map(t=>e.h("div", {
                    class: "q-date__calendar-item"
                }, [e.h("div", t)]))), e.h("div", {
                    class: "q-date__calendar-days-container relative-position overflow-hidden"
                }, [e.h(e.Transition, {
                    name: "q-transition--slide-" + k.value
                }, ()=>e.h("div", {
                    key: ee.value,
                    class: "q-date__calendar-days fit"
                }, ae.value.map(t=>e.h("div", {
                    class: t.classes
                }, [!0 === t.in ? e.h(ho, {
                    class: !0 === t.today ? "q-date__today" : "",
                    dense: !0,
                    flat: t.flat,
                    unelevated: t.unelevated,
                    color: t.color,
                    textColor: t.textColor,
                    label: t.i,
                    tabindex: s.value,
                    ...r("day#" + t.i, {
                        onClick: ()=>{
                            Ve(t.i)
                        }
                        ,
                        onMouseover: ()=>{
                            Le(t.i)
                        }
                    })
                }, !1 !== t.event ? ()=>e.h("div", {
                    class: "q-date__event bg-" + t.event
                }) : null) : e.h("div", "" + t.i)]))))])])],
                Months() {
                    const o = x.value.year === w.value.year
                      , n = e=>{
                        return null !== Y.value && x.value.year === Y.value.year && Y.value.month > e || null !== K.value && x.value.year === K.value.year && K.value.month < e
                    }
                      , a = g.value.monthsShort.map((t,a)=>{
                        const l = x.value.month === a + 1;
                        return e.h("div", {
                            class: "q-date__months-item flex flex-center"
                        }, [e.h(ho, {
                            class: !0 === o && w.value.month === a + 1 ? "q-date__today" : null,
                            flat: !0 !== l,
                            label: t,
                            unelevated: l,
                            color: !0 === l ? B.value : null,
                            textColor: !0 === l ? z.value : null,
                            tabindex: s.value,
                            disable: n(a + 1),
                            ...r("month#" + a, {
                                onClick: ()=>{
                                    be(a + 1)
                                }
                            })
                        })])
                    }
                    );
                    return !0 === t.yearsInMonthView && a.unshift(e.h("div", {
                        class: "row no-wrap full-width"
                    }, [ze({
                        label: x.value.year,
                        type: "Years",
                        key: x.value.year,
                        dir: C.value,
                        goTo: he,
                        boundaries: X.value.year,
                        cls: " col"
                    })])),
                    e.h("div", {
                        key: "months-view",
                        class: "q-date__view q-date__months flex flex-center"
                    }, a)
                },
                Years() {
                    const t = $.value
                      , o = t + Ai
                      , n = []
                      , a = e=>{
                        return null !== Y.value && Y.value.year > e || null !== K.value && K.value.year < e
                    }
                    ;
                    for (let l = t; l <= o; l++) {
                        const t = x.value.year === l;
                        n.push(e.h("div", {
                            class: "q-date__years-item flex flex-center"
                        }, [e.h(ho, {
                            key: "yr" + l,
                            class: w.value.year === l ? "q-date__today" : null,
                            flat: !t,
                            label: l,
                            dense: !0,
                            unelevated: t,
                            color: !0 === t ? B.value : null,
                            textColor: !0 === t ? z.value : null,
                            tabindex: s.value,
                            disable: a(l),
                            ...r("yr#" + l, {
                                onClick: ()=>{
                                    ge(l)
                                }
                            })
                        })]))
                    }
                    return e.h("div", {
                        class: "q-date__view q-date__years flex flex-center"
                    }, [e.h("div", {
                        class: "col-auto"
                    }, [e.h(ho, {
                        round: !0,
                        dense: !0,
                        flat: !0,
                        icon: D.value[0],
                        tabindex: s.value,
                        disable: a(t),
                        ...r("y-", {
                            onClick: ()=>{
                                $.value -= Ai
                            }
                        })
                    })]), e.h("div", {
                        class: "q-date__years-content col self-stretch row items-center"
                    }, n), e.h("div", {
                        class: "col-auto"
                    }, [e.h(ho, {
                        round: !0,
                        dense: !0,
                        flat: !0,
                        icon: D.value[1],
                        tabindex: s.value,
                        disable: a(o),
                        ...r("y+", {
                            onClick: ()=>{
                                $.value += Ai
                            }
                        })
                    })])])
                }
            };
            function Ve(e) {
                const o = {
                    ...x.value,
                    day: e
                };
                if (!1 !== t.range)
                    if (null === M.value) {
                        const a = ae.value.find(t=>!0 !== t.fill && t.i === e);
                        if (!0 !== t.noUnset && void 0 !== a.range)
                            return void Me({
                                target: o,
                                from: a.range.from,
                                to: a.range.to
                            });
                        if (!0 === a.selected)
                            return void Me(o);
                        const l = Ul(o);
                        M.value = {
                            init: o,
                            initHash: l,
                            final: o,
                            finalHash: l
                        },
                        n("range-start", xe(o))
                    } else {
                        const e = M.value.initHash
                          , t = Ul(o)
                          , a = e <= t ? {
                            from: M.value.init,
                            to: o
                        } : {
                            from: o,
                            to: M.value.init
                        };
                        M.value = null,
                        $e(e === t ? o : {
                            target: o,
                            ...a
                        }),
                        n("range-end", {
                            from: xe(a.from),
                            to: xe(a.to)
                        })
                    }
                else
                    we(o, ee.value)
            }
            function Le(e) {
                if (null !== M.value) {
                    const t = {
                        ...x.value,
                        day: e
                    };
                    Object.assign(M.value, {
                        final: t,
                        finalHash: Ul(t)
                    })
                }
            }
            return ()=>{
                const n = [e.h("div", {
                    class: "q-date__content col relative-position"
                }, [e.h(e.Transition, {
                    name: "q-transition--fade"
                }, Oe[_.value])])]
                  , a = Xe(o.default);
                return void 0 !== a && n.push(e.h("div", {
                    class: "q-date__actions"
                }, a)),
                void 0 !== t.name && !0 !== t.disable && m(n, "push"),
                e.h("div", {
                    class: T.value,
                    ...le.value
                }, [Be(), e.h("div", {
                    ref: f,
                    class: "q-date__main col column",
                    tabindex: -1
                }, n)])
            }
        }
    });
    function Di(t, o, n) {
        let a;
        function l() {
            void 0 !== a && (N.remove(a),
            a = void 0)
        }
        return e.onBeforeUnmount(()=>{
            !0 === t.value && l()
        }
        ),
        {
            removeFromHistory: l,
            addToHistory() {
                a = {
                    condition: ()=>!0 === n.value,
                    handler: o
                },
                N.add(a)
            }
        }
    }
    let Hi, Qi, Ui, Wi, Yi, Ki, Xi = 0, Zi = !1;
    function Gi(e) {
        Ji(e) && $(e)
    }
    function Ji(e) {
        if (e.target === document.body || e.target.classList.contains("q-layout__backdrop"))
            return !0;
        const t = x(e)
          , o = e.shiftKey && !e.deltaX
          , n = !o && Math.abs(e.deltaX) <= Math.abs(e.deltaY)
          , a = o || n ? e.deltaY : e.deltaX;
        for (let l = 0; l < t.length; l++) {
            const e = t[l];
            if (sn(e, n))
                return n ? a < 0 && 0 === e.scrollTop || a > 0 && e.scrollTop + e.clientHeight === e.scrollHeight : a < 0 && 0 === e.scrollLeft || a > 0 && e.scrollLeft + e.clientWidth === e.scrollWidth
        }
        return !0
    }
    function er(e) {
        e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop)
    }
    function tr(e) {
        !0 !== Zi && (Zi = !0,
        requestAnimationFrame(()=>{
            Zi = !1;
            const {height: t} = e.target
              , {clientHeight: o, scrollTop: n} = document.scrollingElement;
            void 0 !== Ui && t === window.innerHeight || (Ui = o - t,
            document.scrollingElement.scrollTop = n),
            n > Ui && (document.scrollingElement.scrollTop -= Math.ceil((n - Ui) / 8))
        }
        ))
    }
    function or(e) {
        const t = document.body
          , o = void 0 !== window.visualViewport;
        if ("add" === e) {
            const {overflowY: e, overflowX: n} = window.getComputedStyle(t);
            Hi = Go(window),
            Qi = Zo(window),
            Wi = t.style.left,
            Yi = t.style.top,
            t.style.left = `-${Hi}px`,
            t.style.top = `-${Qi}px`,
            "hidden" !== n && ("scroll" === n || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"),
            "hidden" !== e && ("scroll" === e || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"),
            t.classList.add("q-body--prevent-scroll"),
            document.qScrollPrevented = !0,
            !0 === v.is.ios && (!0 === o ? (window.scrollTo(0, 0),
            window.visualViewport.addEventListener("resize", tr, f.passiveCapture),
            window.visualViewport.addEventListener("scroll", tr, f.passiveCapture),
            window.scrollTo(0, 0)) : window.addEventListener("scroll", er, f.passiveCapture))
        }
        !0 === v.is.desktop && !0 === v.is.mac && window[`${e}EventListener`]("wheel", Gi, f.notPassive),
        "remove" === e && (!0 === v.is.ios && (!0 === o ? (window.visualViewport.removeEventListener("resize", tr, f.passiveCapture),
        window.visualViewport.removeEventListener("scroll", tr, f.passiveCapture)) : window.removeEventListener("scroll", er, f.passiveCapture)),
        t.classList.remove("q-body--prevent-scroll"),
        t.classList.remove("q-body--force-scrollbar-x"),
        t.classList.remove("q-body--force-scrollbar-y"),
        document.qScrollPrevented = !1,
        t.style.left = Wi,
        t.style.top = Yi,
        window.scrollTo(Hi, Qi),
        Ui = void 0)
    }
    function nr(e) {
        let t = "add";
        if (!0 === e) {
            if (Xi++,
            void 0 !== Ki)
                return clearTimeout(Ki),
                void (Ki = void 0);
            if (Xi > 1)
                return
        } else {
            if (0 === Xi)
                return;
            if (Xi--,
            Xi > 0)
                return;
            if (t = "remove",
            !0 === v.is.ios && !0 === v.is.nativeMobile)
                return clearTimeout(Ki),
                void (Ki = setTimeout(()=>{
                    or(t),
                    Ki = void 0
                }
                , 100))
        }
        or(t)
    }
    function ar() {
        let e;
        return {
            preventBodyScroll(t) {
                t === e || void 0 === e && !0 !== t || (e = t,
                nr(t))
            }
        }
    }
    let lr = 0;
    const ir = {
        standard: "fixed-full flex-center",
        top: "fixed-top justify-center",
        bottom: "fixed-bottom justify-center",
        right: "fixed-right items-center",
        left: "fixed-left items-center"
    }
      , rr = {
        standard: ["scale", "scale"],
        top: ["slide-down", "slide-up"],
        bottom: ["slide-up", "slide-down"],
        right: ["slide-left", "slide-right"],
        left: ["slide-right", "slide-left"]
    };
    var sr = Me({
        name: "QDialog",
        inheritAttrs: !1,
        props: {
            ..._o,
            ...Do,
            transitionShow: String,
            transitionHide: String,
            persistent: Boolean,
            autoClose: Boolean,
            allowFocusOutside: Boolean,
            noEscDismiss: Boolean,
            noBackdropDismiss: Boolean,
            noRouteDismiss: Boolean,
            noRefocus: Boolean,
            noFocus: Boolean,
            noShake: Boolean,
            seamless: Boolean,
            maximized: Boolean,
            fullWidth: Boolean,
            fullHeight: Boolean,
            square: Boolean,
            position: {
                type: String,
                default: "standard",
                validator: e=>"standard" === e || ["top", "bottom", "left", "right"].includes(e)
            }
        },
        emits: [...So, "shake", "click", "escape-key"],
        setup(t, {slots: o, emit: n, attrs: a}) {
            const l = e.getCurrentInstance()
              , i = e.ref(null)
              , r = e.ref(!1)
              , s = e.ref(!1)
              , u = e.ref(!1);
            let c, d, v, p = null;
            const m = e.computed(()=>!0 !== t.persistent && !0 !== t.noRouteDismiss && !0 !== t.seamless)
              , {preventBodyScroll: f} = ar()
              , {registerTimeout: h, removeTimeout: g} = Uo()
              , {registerTick: b, removeTick: y} = Qo()
              , {showPortal: w, hidePortal: x, portalIsAccessible: _, renderPortal: S} = jo(l, i, Q, !0)
              , {hide: k} = ko({
                showing: r,
                hideOnRouteChange: m,
                handleShow: E,
                handleHide: A,
                processOnMount: !0
            })
              , {addToHistory: C, removeFromHistory: q} = Di(r, k, m)
              , $ = e.computed(()=>"q-dialog__inner flex no-pointer-events" + ` q-dialog__inner--${!0 === t.maximized ? "maximized" : "minimized"}` + ` q-dialog__inner--${t.position} ${ir[t.position]}` + (!0 === u.value ? " q-dialog__inner--animating" : "") + (!0 === t.fullWidth ? " q-dialog__inner--fullwidth" : "") + (!0 === t.fullHeight ? " q-dialog__inner--fullheight" : "") + (!0 === t.square ? " q-dialog__inner--square" : ""))
              , M = e.computed(()=>"q-transition--" + (void 0 === t.transitionShow ? rr[t.position][0] : t.transitionShow))
              , T = e.computed(()=>"q-transition--" + (void 0 === t.transitionHide ? rr[t.position][1] : t.transitionHide))
              , B = e.computed(()=>!0 === s.value ? T.value : M.value)
              , z = e.computed(()=>`--q-transition-duration: ${t.transitionDuration}ms`)
              , O = e.computed(()=>!0 === r.value && !0 !== t.seamless)
              , V = e.computed(()=>!0 === t.autoClose ? {
                onClick: j
            } : {})
              , L = e.computed(()=>["q-dialog fullscreen no-pointer-events " + `q-dialog--${!0 === O.value ? "modal" : "seamless"}`, a.class]);
            function E(e) {
                g(),
                y(),
                C(),
                p = !1 === t.noRefocus && null !== document.activeElement ? document.activeElement : null,
                N(t.maximized),
                w(),
                u.value = !0,
                !0 !== t.noFocus && (null !== document.activeElement && document.activeElement.blur(),
                b(P)),
                h(()=>{
                    if (!0 === l.proxy.$q.platform.is.ios) {
                        if (!0 !== t.seamless && document.activeElement) {
                            const {top: e, bottom: t} = document.activeElement.getBoundingClientRect()
                              , {innerHeight: o} = window
                              , n = void 0 !== window.visualViewport ? window.visualViewport.height : o;
                            e > 0 && t > n / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - n, t >= o ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + t - n / 2))),
                            document.activeElement.scrollIntoView()
                        }
                        v = !0,
                        i.value.click(),
                        v = !1
                    }
                    w(!0),
                    u.value = !1,
                    n("show", e)
                }
                , t.transitionDuration)
            }
            function A(e) {
                g(),
                y(),
                q(),
                I(!0),
                u.value = !0,
                x(),
                null !== p && (p.focus(),
                p = null),
                h(()=>{
                    x(!0),
                    u.value = !1,
                    n("hide", e)
                }
                , t.transitionDuration)
            }
            function P(e) {
                Bo(()=>{
                    let t = i.value;
                    null !== t && !0 !== t.contains(document.activeElement) && (t = t.querySelector(e || "[autofocus], [data-autofocus]") || t,
                    t.focus({
                        preventScroll: !0
                    }))
                }
                )
            }
            function R() {
                P(),
                n("shake");
                const e = i.value;
                null !== e && (e.classList.remove("q-animate--scale"),
                e.classList.add("q-animate--scale"),
                clearTimeout(c),
                c = setTimeout(()=>{
                    null !== i.value && (e.classList.remove("q-animate--scale"),
                    P())
                }
                , 170))
            }
            function F() {
                !0 !== t.seamless && (!0 === t.persistent || !0 === t.noEscDismiss ? !0 !== t.maximized && !0 !== t.noShake && R() : (n("escape-key"),
                k()))
            }
            function I(e) {
                clearTimeout(c),
                !0 !== e && !0 !== r.value || (N(!1),
                !0 !== t.seamless && (f(!1),
                xn(H),
                gn(F))),
                !0 !== e && (p = null)
            }
            function N(e) {
                !0 === e ? !0 !== d && (lr < 1 && document.body.classList.add("q-body--dialog"),
                lr++,
                d = !0) : !0 === d && (lr < 2 && document.body.classList.remove("q-body--dialog"),
                lr--,
                d = !1)
            }
            function j(e) {
                !0 !== v && (k(e),
                n("click", e))
            }
            function D(e) {
                !0 !== t.persistent && !0 !== t.noBackdropDismiss ? k(e) : !0 !== t.noShake && R()
            }
            function H(e) {
                !0 !== t.allowFocusOutside && !0 === _.value && !0 !== Jt(i.value, e.target) && P('[tabindex]:not([tabindex="-1"])')
            }
            function Q() {
                return e.h("div", {
                    ...a,
                    class: L.value
                }, [e.h(e.Transition, {
                    name: "q-transition--fade",
                    appear: !0
                }, ()=>!0 === O.value ? e.h("div", {
                    class: "q-dialog__backdrop fixed-full",
                    style: z.value,
                    "aria-hidden": "true",
                    onMousedown: D
                }) : null), e.h(e.Transition, {
                    name: B.value,
                    appear: !0
                }, ()=>!0 === r.value ? e.h("div", {
                    ref: i,
                    class: $.value,
                    style: z.value,
                    tabindex: -1,
                    ...V.value
                }, Xe(o.default)) : null)])
            }
            return e.watch(r, t=>{
                e.nextTick(()=>{
                    s.value = t
                }
                )
            }
            ),
            e.watch(()=>t.maximized, e=>{
                !0 === r.value && N(e)
            }
            ),
            e.watch(O, e=>{
                f(e),
                !0 === e ? (wn(H),
                hn(F)) : (xn(H),
                gn(F))
            }
            ),
            Object.assign(l.proxy, {
                focus: P,
                shake: R,
                __updateRefocusTarget(e) {
                    p = e || null
                }
            }),
            e.onBeforeUnmount(I),
            S
        }
    });
    const ur = 150;
    var cr = Me({
        name: "QDrawer",
        inheritAttrs: !1,
        props: {
            ..._o,
            ...yt,
            side: {
                type: String,
                default: "left",
                validator: e=>["left", "right"].includes(e)
            },
            width: {
                type: Number,
                default: 300
            },
            mini: Boolean,
            miniToOverlay: Boolean,
            miniWidth: {
                type: Number,
                default: 57
            },
            breakpoint: {
                type: Number,
                default: 1023
            },
            showIfAbove: Boolean,
            behavior: {
                type: String,
                validator: e=>["default", "desktop", "mobile"].includes(e),
                default: "default"
            },
            bordered: Boolean,
            elevated: Boolean,
            overlay: Boolean,
            persistent: Boolean,
            noSwipeOpen: Boolean,
            noSwipeClose: Boolean,
            noSwipeBackdrop: Boolean
        },
        emits: [...So, "on-layout", "mini-state"],
        setup(t, {slots: o, emit: n, attrs: a}) {
            const l = e.getCurrentInstance()
              , {proxy: {$q: i}} = l
              , r = wt(t, i)
              , {preventBodyScroll: s} = ar()
              , {registerTimeout: u} = Uo()
              , c = e.inject(ie, ()=>{
                console.error("QDrawer needs to be child of QLayout")
            }
            );
            let d, v, p;
            const m = e.ref("mobile" === t.behavior || "desktop" !== t.behavior && c.totalWidth.value <= t.breakpoint)
              , f = e.computed(()=>!0 === t.mini && !0 !== m.value)
              , h = e.computed(()=>!0 === f.value ? t.miniWidth : t.width)
              , g = e.ref(!0 === t.showIfAbove && !1 === m.value || !0 === t.modelValue)
              , b = e.computed(()=>!0 !== t.persistent && (!0 === m.value || !0 === A.value));
            function y(e, t) {
                if (S(),
                !1 !== e && c.animate(),
                K(0),
                !0 === m.value) {
                    const e = c.instances[O.value];
                    void 0 !== e && !0 === e.belowBreakpoint && e.hide(!1),
                    X(1),
                    !0 !== c.isContainer.value && s(!0)
                } else
                    X(0),
                    !1 !== e && Z(!1);
                u(()=>{
                    !1 !== e && Z(!0),
                    !0 !== t && n("show", e)
                }
                , ur)
            }
            function w(e, t) {
                k(),
                !1 !== e && c.animate(),
                X(0),
                K($.value * h.value),
                te(),
                !0 !== t && u(()=>{
                    n("hide", e)
                }
                , ur)
            }
            const {show: x, hide: _} = ko({
                showing: g,
                hideOnRouteChange: b,
                handleShow: y,
                handleHide: w
            })
              , {addToHistory: S, removeFromHistory: k} = Di(g, _, b)
              , C = {
                belowBreakpoint: m,
                hide: _
            }
              , q = e.computed(()=>"right" === t.side)
              , $ = e.computed(()=>(!0 === i.lang.rtl ? -1 : 1) * (!0 === q.value ? 1 : -1))
              , M = e.ref(0)
              , T = e.ref(!1)
              , B = e.ref(!1)
              , z = e.ref(h.value * $.value)
              , O = e.computed(()=>!0 === q.value ? "left" : "right")
              , V = e.computed(()=>!0 === g.value && !1 === m.value && !1 === t.overlay ? !0 === t.miniToOverlay ? t.miniWidth : h.value : 0)
              , L = e.computed(()=>!0 === t.overlay || !0 === t.miniToOverlay || c.view.value.indexOf(q.value ? "R" : "L") > -1 || !0 === i.platform.is.ios && !0 === c.isContainer.value)
              , E = e.computed(()=>!1 === t.overlay && !0 === g.value && !1 === m.value)
              , A = e.computed(()=>!0 === t.overlay && !0 === g.value && !1 === m.value)
              , P = e.computed(()=>"fullscreen q-drawer__backdrop" + (!1 === g.value && !1 === T.value ? " hidden" : ""))
              , R = e.computed(()=>({
                backgroundColor: `rgba(0,0,0,${.4 * M.value})`
            }))
              , F = e.computed(()=>!0 === q.value ? "r" === c.rows.value.top[2] : "l" === c.rows.value.top[0])
              , I = e.computed(()=>!0 === q.value ? "r" === c.rows.value.bottom[2] : "l" === c.rows.value.bottom[0])
              , N = e.computed(()=>{
                const e = {};
                return !0 === c.header.space && !1 === F.value && (!0 === L.value ? e.top = `${c.header.offset}px` : !0 === c.header.space && (e.top = `${c.header.size}px`)),
                !0 === c.footer.space && !1 === I.value && (!0 === L.value ? e.bottom = `${c.footer.offset}px` : !0 === c.footer.space && (e.bottom = `${c.footer.size}px`)),
                e
            }
            )
              , j = e.computed(()=>{
                const e = {
                    width: `${h.value}px`,
                    transform: `translateX(${z.value}px)`
                };
                return !0 === m.value ? e : Object.assign(e, N.value)
            }
            )
              , D = e.computed(()=>"q-drawer__content fit " + (!0 !== c.isContainer.value ? "scroll" : "overflow-auto"))
              , H = e.computed(()=>`q-drawer q-drawer--${t.side}` + (!0 === B.value ? " q-drawer--mini-animate" : "") + (!0 === t.bordered ? " q-drawer--bordered" : "") + (!0 === r.value ? " q-drawer--dark q-dark" : "") + (!0 === T.value ? " no-transition" : !0 === g.value ? "" : " q-layout--prevent-focus") + (!0 === m.value ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${!0 === f.value ? "mini" : "standard"}` + (!0 === L.value || !0 !== E.value ? " fixed" : "") + (!0 === t.overlay || !0 === t.miniToOverlay ? " q-drawer--on-top" : "") + (!0 === F.value ? " q-drawer--top-padding" : "")))
              , Q = e.computed(()=>{
                const e = !0 === i.lang.rtl ? t.side : O.value;
                return [[Va, J, void 0, {
                    [e]: !0,
                    mouse: !0
                }]]
            }
            )
              , U = e.computed(()=>{
                const e = !0 === i.lang.rtl ? O.value : t.side;
                return [[Va, ee, void 0, {
                    [e]: !0,
                    mouse: !0
                }]]
            }
            )
              , W = e.computed(()=>{
                const e = !0 === i.lang.rtl ? O.value : t.side;
                return [[Va, ee, void 0, {
                    [e]: !0,
                    mouse: !0,
                    mouseAllDir: !0
                }]]
            }
            );
            function Y() {
                ne(m, "mobile" === t.behavior || "desktop" !== t.behavior && c.totalWidth.value <= t.breakpoint)
            }
            function K(t) {
                void 0 === t ? e.nextTick(()=>{
                    t = !0 === g.value ? 0 : h.value,
                    K($.value * t)
                }
                ) : (!0 !== c.isContainer.value || !0 !== q.value || !0 !== m.value && Math.abs(t) !== h.value || (t += $.value * c.scrollbarWidth.value),
                z.value = t)
            }
            function X(e) {
                M.value = e
            }
            function Z(e) {
                const t = !0 === e ? "remove" : !0 !== c.isContainer.value ? "add" : "";
                "" !== t && document.body.classList[t]("q-body--drawer-toggle")
            }
            function G() {
                clearTimeout(v),
                l.proxy && l.proxy.$el && l.proxy.$el.classList.add("q-drawer--mini-animate"),
                B.value = !0,
                v = setTimeout(()=>{
                    B.value = !1,
                    l && l.proxy && l.proxy.$el && l.proxy.$el.classList.remove("q-drawer--mini-animate")
                }
                , 150)
            }
            function J(e) {
                if (!1 !== g.value)
                    return;
                const t = h.value
                  , o = Ve(e.distance.x, 0, t);
                if (!0 === e.isFinal) {
                    const e = o >= Math.min(75, t);
                    return !0 === e ? x() : (c.animate(),
                    X(0),
                    K($.value * t)),
                    void (T.value = !1)
                }
                K((!0 === i.lang.rtl ? !0 !== q.value : q.value) ? Math.max(t - o, 0) : Math.min(0, o - t)),
                X(Ve(o / t, 0, 1)),
                !0 === e.isFirst && (T.value = !0)
            }
            function ee(e) {
                if (!0 !== g.value)
                    return;
                const o = h.value
                  , n = e.direction === t.side
                  , a = (!0 === i.lang.rtl ? !0 !== n : n) ? Ve(e.distance.x, 0, o) : 0;
                if (!0 === e.isFinal) {
                    const e = Math.abs(a) < Math.min(75, o);
                    return !0 === e ? (c.animate(),
                    X(1),
                    K(0)) : _(),
                    void (T.value = !1)
                }
                K($.value * a),
                X(Ve(1 - a / o, 0, 1)),
                !0 === e.isFirst && (T.value = !0)
            }
            function te() {
                s(!1),
                Z(!0)
            }
            function oe(e, o) {
                c.update(t.side, e, o)
            }
            function ne(e, t) {
                e.value !== t && (e.value = t)
            }
            function ae(e, o) {
                oe("size", !0 === e ? t.miniWidth : o)
            }
            return e.watch(m, e=>{
                !0 === e ? (d = g.value,
                !0 === g.value && _(!1)) : !1 === t.overlay && "mobile" !== t.behavior && !1 !== d && (!0 === g.value ? (K(0),
                X(0),
                te()) : x(!1))
            }
            ),
            e.watch(()=>t.side, (e,t)=>{
                c.instances[t] === C && (c.instances[t] = void 0,
                c[t].space = !1,
                c[t].offset = 0),
                c.instances[e] = C,
                c[e].size = h.value,
                c[e].space = E.value,
                c[e].offset = V.value
            }
            ),
            e.watch(c.totalWidth, ()=>{
                !0 !== c.isContainer.value && !0 === document.qScrollPrevented || Y()
            }
            ),
            e.watch(()=>t.behavior + t.breakpoint, Y),
            e.watch(c.isContainer, e=>{
                !0 === g.value && s(!0 !== e),
                !0 === e && Y()
            }
            ),
            e.watch(c.scrollbarWidth, ()=>{
                K(!0 === g.value ? 0 : void 0)
            }
            ),
            e.watch(V, e=>{
                oe("offset", e)
            }
            ),
            e.watch(E, e=>{
                n("on-layout", e),
                oe("space", e)
            }
            ),
            e.watch(q, ()=>{
                K()
            }
            ),
            e.watch(h, e=>{
                K(),
                ae(t.miniToOverlay, e)
            }
            ),
            e.watch(()=>t.miniToOverlay, e=>{
                ae(e, h.value)
            }
            ),
            e.watch(()=>i.lang.rtl, ()=>{
                K()
            }
            ),
            e.watch(()=>t.mini, ()=>{
                !0 === t.modelValue && (G(),
                c.animate())
            }
            ),
            e.watch(f, e=>{
                n("mini-state", e)
            }
            ),
            c.instances[t.side] = C,
            ae(t.miniToOverlay, h.value),
            oe("space", E.value),
            oe("offset", V.value),
            !0 === t.showIfAbove && !0 !== t.modelValue && !0 === g.value && void 0 !== t["onUpdate:modelValue"] && n("update:modelValue", !0),
            e.onMounted(()=>{
                n("on-layout", E.value),
                n("mini-state", f.value),
                d = !0 === t.showIfAbove;
                const o = ()=>{
                    const e = !0 === g.value ? y : w;
                    e(!1, !0)
                }
                ;
                0 === c.totalWidth.value ? p = e.watch(c.totalWidth, ()=>{
                    p(),
                    p = void 0,
                    !1 === g.value && !0 === t.showIfAbove && !1 === m.value ? x(!1) : o()
                }
                ) : e.nextTick(o)
            }
            ),
            e.onBeforeUnmount(()=>{
                void 0 !== p && p(),
                clearTimeout(v),
                !0 === g.value && te(),
                c.instances[t.side] === C && (c.instances[t.side] = void 0,
                oe("size", 0),
                oe("offset", 0),
                oe("space", !1))
            }
            ),
            ()=>{
                const n = [];
                !0 === m.value && (!1 === t.noSwipeOpen && n.push(e.withDirectives(e.h("div", {
                    key: "open",
                    class: `q-drawer__opener fixed-${t.side}`,
                    "aria-hidden": "true"
                }), Q.value)),
                n.push(et("div", {
                    ref: "backdrop",
                    class: P.value,
                    style: R.value,
                    "aria-hidden": "true",
                    onClick: _
                }, void 0, "backdrop", !0 !== t.noSwipeBackdrop && !0 === g.value, ()=>W.value)));
                const l = !0 === f.value && void 0 !== o.mini
                  , i = [e.h("div", {
                    ...a,
                    key: "" + l,
                    class: [D.value, a.class]
                }, !0 === l ? o.mini() : Xe(o.default))];
                return !0 === t.elevated && !0 === g.value && i.push(e.h("div", {
                    class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
                })),
                n.push(et("aside", {
                    ref: "content",
                    class: H.value,
                    style: j.value
                }, i, "contentclose", !0 !== t.noSwipeClose && !0 === m.value, ()=>U.value)),
                e.h("div", {
                    class: "q-drawer-container"
                }, n)
            }
        }
    });
    function dr(e, t) {
        if (t && e === t)
            return null;
        const o = e.nodeName.toLowerCase();
        if (!0 === ["div", "li", "ul", "ol", "blockquote"].includes(o))
            return e;
        const n = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle
          , a = n.display;
        return "block" === a || "table" === a ? e : dr(e.parentNode)
    }
    function vr(e, t, o) {
        return !(!e || e === document.body) && (!0 === o && e === t || (t === document ? document.body : t).contains(e.parentNode))
    }
    function pr(e, t, o) {
        if (o || (o = document.createRange(),
        o.selectNode(e),
        o.setStart(e, 0)),
        0 === t.count)
            o.setEnd(e, t.count);
        else if (t.count > 0)
            if (e.nodeType === Node.TEXT_NODE)
                e.textContent.length < t.count ? t.count -= e.textContent.length : (o.setEnd(e, t.count),
                t.count = 0);
            else
                for (let n = 0; 0 !== t.count && n < e.childNodes.length; n++)
                    o = pr(e.childNodes[n], t, o);
        return o
    }
    const mr = /^https?:\/\//;
    class fr {
        constructor(e, t) {
            this.el = e,
            this.eVm = t,
            this._range = null
        }
        get selection() {
            if (this.el) {
                const e = document.getSelection();
                if (vr(e.anchorNode, this.el, !0) && vr(e.focusNode, this.el, !0))
                    return e
            }
            return null
        }
        get hasSelection() {
            return null !== this.selection && this.selection.toString().length > 0
        }
        get range() {
            const e = this.selection;
            return null !== e && e.rangeCount ? e.getRangeAt(0) : this._range
        }
        get parent() {
            const e = this.range;
            if (null !== e) {
                const t = e.startContainer;
                return t.nodeType === document.ELEMENT_NODE ? t : t.parentNode
            }
            return null
        }
        get blockParent() {
            const e = this.parent;
            return null !== e ? dr(e, this.el) : null
        }
        save(e=this.range) {
            null !== e && (this._range = e)
        }
        restore(e=this._range) {
            const t = document.createRange()
              , o = document.getSelection();
            null !== e ? (t.setStart(e.startContainer, e.startOffset),
            t.setEnd(e.endContainer, e.endOffset),
            o.removeAllRanges(),
            o.addRange(t)) : (o.selectAllChildren(this.el),
            o.collapseToEnd())
        }
        savePosition() {
            let e, t = -1;
            const o = document.getSelection()
              , n = this.el.parentNode;
            if (o.focusNode && vr(o.focusNode, n)) {
                e = o.focusNode,
                t = o.focusOffset;
                while (e && e !== n)
                    e !== this.el && e.previousSibling ? (e = e.previousSibling,
                    t += e.textContent.length) : e = e.parentNode
            }
            this.savedPos = t
        }
        restorePosition(e=0) {
            if (this.savedPos > 0 && this.savedPos < e) {
                const e = window.getSelection()
                  , t = pr(this.el, {
                    count: this.savedPos
                });
                t && (t.collapse(!1),
                e.removeAllRanges(),
                e.addRange(t))
            }
        }
        hasParent(e, t) {
            const o = t ? this.parent : this.blockParent;
            return null !== o && o.nodeName.toLowerCase() === e.toLowerCase()
        }
        hasParents(e, t, o=this.parent) {
            return null !== o && (!0 === e.includes(o.nodeName.toLowerCase()) || !0 === t && this.hasParents(e, t, o.parentNode))
        }
        is(e, t) {
            if (null === this.selection)
                return !1;
            switch (e) {
            case "formatBlock":
                return "DIV" === t && this.parent === this.el || this.hasParent(t, "PRE" === t);
            case "link":
                return this.hasParent("A", !0);
            case "fontSize":
                return document.queryCommandValue(e) === t;
            case "fontName":
                const o = document.queryCommandValue(e);
                return o === `"${t}"` || o === t;
            case "fullscreen":
                return this.eVm.inFullscreen.value;
            case "viewsource":
                return this.eVm.isViewingSource.value;
            case void 0:
                return !1;
            default:
                const n = document.queryCommandState(e);
                return void 0 !== t ? n === t : n
            }
        }
        getParentAttribute(e) {
            return null !== this.parent ? this.parent.getAttribute(e) : null
        }
        can(e) {
            return "outdent" === e ? this.hasParents(["blockquote", "li"], !0) : "indent" === e ? this.hasParents(["li"], !0) : "link" === e ? null !== this.selection || this.is("link") : void 0
        }
        apply(e, t, o=h) {
            if ("formatBlock" === e)
                ["BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6"].includes(t) && this.is(e, t) && (e = "outdent",
                t = null),
                "PRE" === t && this.is(e, "PRE") && (t = "P");
            else {
                if ("print" === e) {
                    o();
                    const e = window.open();
                    return e.document.write(`\n        <!doctype html>\n        <html>\n          <head>\n            <title>Print - ${document.title}</title>\n          </head>\n          <body>\n            <div>${this.el.innerHTML}</div>\n          </body>\n        </html>\n      `),
                    e.print(),
                    void e.close()
                }
                if ("link" === e) {
                    const e = this.getParentAttribute("href");
                    if (null === e) {
                        const e = this.selectWord(this.selection)
                          , t = e ? e.toString() : "";
                        if (!t.length && (!this.range || !this.range.cloneContents().querySelector("img")))
                            return;
                        this.eVm.editLinkUrl.value = mr.test(t) ? t : "https://",
                        document.execCommand("createLink", !1, this.eVm.editLinkUrl.value),
                        this.save(e.getRangeAt(0))
                    } else
                        this.eVm.editLinkUrl.value = e,
                        this.range.selectNodeContents(this.parent),
                        this.save();
                    return
                }
                if ("fullscreen" === e)
                    return this.eVm.toggleFullscreen(),
                    void o();
                if ("viewsource" === e)
                    return this.eVm.isViewingSource.value = !1 === this.eVm.isViewingSource.value,
                    this.eVm.setContent(this.eVm.props.modelValue),
                    void o()
            }
            document.execCommand(e, !1, t),
            o()
        }
        selectWord(e) {
            if (null === e || !0 !== e.isCollapsed || void 0 === e.modify)
                return e;
            const t = document.createRange();
            t.setStart(e.anchorNode, e.anchorOffset),
            t.setEnd(e.focusNode, e.focusOffset);
            const o = t.collapsed ? ["backward", "forward"] : ["forward", "backward"];
            t.detach();
            const n = e.focusNode
              , a = e.focusOffset;
            return e.collapse(e.anchorNode, e.anchorOffset),
            e.modify("move", o[0], "character"),
            e.modify("move", o[1], "word"),
            e.extend(n, a),
            e.modify("extend", o[1], "character"),
            e.modify("extend", o[0], "word"),
            e
        }
    }
    var hr = Me({
        name: "QTooltip",
        inheritAttrs: !1,
        props: {
            ...yo,
            ..._o,
            ...Do,
            maxHeight: {
                type: String,
                default: null
            },
            maxWidth: {
                type: String,
                default: null
            },
            transitionShow: {
                default: "jump-down"
            },
            transitionHide: {
                default: "jump-up"
            },
            anchor: {
                type: String,
                default: "bottom middle",
                validator: Bn
            },
            self: {
                type: String,
                default: "top middle",
                validator: Bn
            },
            offset: {
                type: Array,
                default: ()=>[14, 14],
                validator: zn
            },
            scrollTarget: {
                default: void 0
            },
            delay: {
                type: Number,
                default: 0
            },
            hideDelay: {
                type: Number,
                default: 0
            }
        },
        emits: [...So],
        setup(t, {slots: o, emit: n, attrs: a}) {
            let l, i;
            const r = e.getCurrentInstance()
              , {proxy: {$q: s}} = r
              , u = e.ref(null)
              , c = e.ref(!1)
              , d = e.computed(()=>Vn(t.anchor, s.lang.rtl))
              , v = e.computed(()=>Vn(t.self, s.lang.rtl))
              , p = e.computed(()=>!0 !== t.persistent)
              , {registerTick: m, removeTick: f} = Qo()
              , {registerTimeout: h, removeTimeout: g} = Uo()
              , {transition: b, transitionStyle: y} = Ho(t, c)
              , {localScrollTarget: w, changeScrollEvent: x, unconfigureScrollTarget: _} = xo(t, N)
              , {anchorEl: S, canShow: k, anchorEvents: C} = wo({
                showing: c,
                configureAnchorEl: I
            })
              , {show: q, hide: M} = ko({
                showing: c,
                canShow: k,
                handleShow: L,
                handleHide: E,
                hideOnRouteChange: p,
                processOnMount: !0
            });
            Object.assign(C, {
                delayShow: R,
                delayHide: F
            });
            const {showPortal: z, hidePortal: O, renderPortal: V} = jo(r, u, D);
            if (!0 === s.platform.is.mobile) {
                const o = {
                    anchorEl: S,
                    innerRef: u,
                    onClickOutside(e) {
                        return M(e),
                        e.target.classList.contains("q-dialog__backdrop") && $(e),
                        !0
                    }
                }
                  , n = e.computed(()=>null === t.modelValue && !0 !== t.persistent && !0 === c.value);
                e.watch(n, e=>{
                    const t = !0 === e ? qn : $n;
                    t(o)
                }
                ),
                e.onBeforeUnmount(()=>{
                    $n(o)
                }
                )
            }
            function L(o) {
                f(),
                g(),
                z(),
                m(()=>{
                    i = new MutationObserver(()=>P()),
                    i.observe(u.value, {
                        attributes: !1,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }),
                    P(),
                    N()
                }
                ),
                void 0 === l && (l = e.watch(()=>s.screen.width + "|" + s.screen.height + "|" + t.self + "|" + t.anchor + "|" + s.lang.rtl, P)),
                h(()=>{
                    z(!0),
                    n("show", o)
                }
                , t.transitionDuration)
            }
            function E(e) {
                f(),
                g(),
                O(),
                A(),
                h(()=>{
                    O(!0),
                    n("hide", e)
                }
                , t.transitionDuration)
            }
            function A() {
                void 0 !== i && (i.disconnect(),
                i = void 0),
                void 0 !== l && (l(),
                l = void 0),
                _(),
                B(C, "tooltipTemp")
            }
            function P() {
                const e = u.value;
                null !== S.value && e && An({
                    el: e,
                    offset: t.offset,
                    anchorEl: S.value,
                    anchorOrigin: d.value,
                    selfOrigin: v.value,
                    maxHeight: t.maxHeight,
                    maxWidth: t.maxWidth
                })
            }
            function R(e) {
                if (!0 === s.platform.is.mobile) {
                    bo(),
                    document.body.classList.add("non-selectable");
                    const e = S.value
                      , t = ["touchmove", "touchcancel", "touchend", "click"].map(t=>[e, t, "delayHide", "passiveCapture"]);
                    T(C, "tooltipTemp", t)
                }
                h(()=>{
                    q(e)
                }
                , t.delay)
            }
            function F(e) {
                g(),
                !0 === s.platform.is.mobile && (B(C, "tooltipTemp"),
                bo(),
                setTimeout(()=>{
                    document.body.classList.remove("non-selectable")
                }
                , 10)),
                h(()=>{
                    M(e)
                }
                , t.hideDelay)
            }
            function I() {
                if (!0 === t.noParentEvent || null === S.value)
                    return;
                const e = !0 === s.platform.is.mobile ? [[S.value, "touchstart", "delayShow", "passive"]] : [[S.value, "mouseenter", "delayShow", "passive"], [S.value, "mouseleave", "delayHide", "passive"]];
                T(C, "anchor", e)
            }
            function N() {
                if (null !== S.value || void 0 !== t.scrollTarget) {
                    w.value = Yo(S.value, t.scrollTarget);
                    const e = !0 === t.noParentEvent ? P : M;
                    x(w.value, e)
                }
            }
            function j() {
                return !0 === c.value ? e.h("div", {
                    ...a,
                    ref: u,
                    class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", a.class],
                    style: [a.style, y.value],
                    role: "complementary"
                }, Xe(o.default)) : null
            }
            function D() {
                return e.h(e.Transition, {
                    name: b.value,
                    appear: !0
                }, j)
            }
            return e.onBeforeUnmount(A),
            Object.assign(r.proxy, {
                updatePosition: P
            }),
            V
        }
    })
      , gr = Me({
        name: "QItem",
        props: {
            ...yt,
            ...Ft,
            tag: {
                type: String,
                default: "div"
            },
            active: {
                type: Boolean,
                default: null
            },
            clickable: Boolean,
            dense: Boolean,
            insetLevel: Number,
            tabindex: [String, Number],
            focused: Boolean,
            manualFocus: Boolean
        },
        emits: ["click", "keyup"],
        setup(t, {slots: o, emit: n}) {
            const {proxy: {$q: a}} = e.getCurrentInstance()
              , l = wt(t, a)
              , {hasRouterLink: i, hasLink: r, linkProps: s, linkClass: u, linkTag: c, navigateToRouterLink: d} = It()
              , v = e.ref(null)
              , p = e.ref(null)
              , m = e.computed(()=>!0 === t.clickable || !0 === r.value || "label" === t.tag)
              , f = e.computed(()=>!0 !== t.disable && !0 === m.value)
              , h = e.computed(()=>"q-item q-item-type row no-wrap" + (!0 === t.dense ? " q-item--dense" : "") + (!0 === l.value ? " q-item--dark" : "") + (!0 === r.value && null === t.active ? u.value : !0 === t.active ? `${void 0 !== t.activeClass ? ` ${t.activeClass}` : ""} q-item--active` : "") + (!0 === t.disable ? " disabled" : "") + (!0 === f.value ? " q-item--clickable q-link cursor-pointer " + (!0 === t.manualFocus ? "q-manual-focusable" : "q-focusable q-hoverable") + (!0 === t.focused ? " q-manual-focusable--focused" : "") : ""))
              , g = e.computed(()=>{
                if (void 0 === t.insetLevel)
                    return null;
                const e = !0 === a.lang.rtl ? "Right" : "Left";
                return {
                    ["padding" + e]: 16 + 56 * t.insetLevel + "px"
                }
            }
            );
            function b(e) {
                !0 === f.value && (null !== p.value && (!0 !== e.qKeyEvent && document.activeElement === v.value ? p.value.focus() : document.activeElement === p.value && v.value.focus()),
                !0 === i.value && d(e),
                n("click", e))
            }
            function y(e) {
                if (!0 === f.value && !0 === K(e, 13)) {
                    $(e),
                    e.qKeyEvent = !0;
                    const t = new MouseEvent("click",e);
                    t.qKeyEvent = !0,
                    v.value.dispatchEvent(t)
                }
                n("keyup", e)
            }
            function w() {
                const t = Ze(o.default, []);
                return !0 === f.value && t.unshift(e.h("div", {
                    class: "q-focus-helper",
                    tabindex: -1,
                    ref: p
                })),
                t
            }
            return ()=>{
                const o = {
                    ref: v,
                    class: h.value,
                    style: g.value,
                    onClick: b,
                    onKeyup: y
                };
                return !0 === f.value ? (o.tabindex = t.tabindex || "0",
                Object.assign(o, s.value)) : !0 === m.value && (o["aria-disabled"] = "true"),
                e.h(c.value, o, w())
            }
        }
    })
      , br = Me({
        name: "QItemSection",
        props: {
            avatar: Boolean,
            thumbnail: Boolean,
            side: Boolean,
            top: Boolean,
            noWrap: Boolean
        },
        setup(t, {slots: o}) {
            const n = e.computed(()=>"q-item__section column" + ` q-item__section--${!0 === t.avatar || !0 === t.side || !0 === t.thumbnail ? "side" : "main"}` + (!0 === t.top ? " q-item__section--top justify-start" : " justify-center") + (!0 === t.avatar ? " q-item__section--avatar" : "") + (!0 === t.thumbnail ? " q-item__section--thumbnail" : "") + (!0 === t.noWrap ? " q-item__section--nowrap" : ""));
            return ()=>e.h("div", {
                class: n.value
            }, Xe(o.default))
        }
    });
    function yr(e, t, o) {
        t.handler ? t.handler(e, o, o.caret) : o.runCmd(t.cmd, t.param)
    }
    function wr(t) {
        return e.h("div", {
            class: "q-editor__toolbar-group"
        }, t)
    }
    function xr(t, o, n, a=!1) {
        const l = a || "toggle" === o.type && (o.toggled ? o.toggled(t) : o.cmd && t.caret.is(o.cmd, o.param))
          , i = [];
        if (o.tip && t.$q.platform.is.desktop) {
            const t = o.key ? e.h("div", [e.h("small", `(CTRL + ${String.fromCharCode(o.key)})`)]) : null;
            i.push(e.h(hr, {
                delay: 1e3
            }, ()=>[e.h("div", {
                innerHTML: o.tip
            }), t]))
        }
        return e.h(ho, {
            ...t.buttonProps.value,
            icon: null !== o.icon ? o.icon : void 0,
            color: l ? o.toggleColor || t.props.toolbarToggleColor : o.color || t.props.toolbarColor,
            textColor: l && !t.props.toolbarPush ? null : o.textColor || t.props.toolbarTextColor,
            label: o.label,
            disable: !!o.disable && ("function" !== typeof o.disable || o.disable(t)),
            size: "sm",
            onClick(e) {
                n && n(),
                yr(e, o, t)
            }
        }, ()=>i)
    }
    function _r(t, o) {
        const n = "only-icons" === o.list;
        let a, l, i = o.label, r = null !== o.icon ? o.icon : void 0;
        function s() {
            c.component.proxy.hide()
        }
        if (n)
            l = o.options.map(e=>{
                const o = void 0 === e.type && t.caret.is(e.cmd, e.param);
                return o && (i = e.tip,
                r = null !== e.icon ? e.icon : void 0),
                xr(t, e, s, o)
            }
            ),
            a = t.toolbarBackgroundClass.value,
            l = [wr(l)];
        else {
            const n = void 0 !== t.props.toolbarToggleColor ? `text-${t.props.toolbarToggleColor}` : null
              , u = void 0 !== t.props.toolbarTextColor ? `text-${t.props.toolbarTextColor}` : null
              , c = "no-icons" === o.list;
            l = o.options.map(o=>{
                const a = !!o.disable && o.disable(t)
                  , l = void 0 === o.type && t.caret.is(o.cmd, o.param);
                l && (i = o.tip,
                r = null !== o.icon ? o.icon : void 0);
                const d = o.htmlTip;
                return e.h(gr, {
                    active: l,
                    activeClass: n,
                    clickable: !0,
                    disable: a,
                    dense: !0,
                    onClick(e) {
                        s(),
                        null !== t.contentRef.value && t.contentRef.value.focus(),
                        t.caret.restore(),
                        yr(e, o, t)
                    }
                }, ()=>[!0 === c ? null : e.h(br, {
                    class: l ? n : u,
                    side: !0
                }, ()=>e.h(ft, {
                    name: null !== o.icon ? o.icon : void 0
                })), e.h(br, d ? ()=>e.h("div", {
                    class: "text-no-wrap",
                    innerHTML: o.htmlTip
                }) : o.tip ? ()=>e.h("div", {
                    class: "text-no-wrap"
                }, o.tip) : void 0)])
            }
            ),
            a = [t.toolbarBackgroundClass.value, u]
        }
        const u = o.highlight && i !== o.label
          , c = e.h(Fn, {
            ...t.buttonProps.value,
            noCaps: !0,
            noWrap: !0,
            color: u ? t.props.toolbarToggleColor : t.props.toolbarColor,
            textColor: u && !t.props.toolbarPush ? null : t.props.toolbarTextColor,
            label: o.fixedLabel ? o.label : i,
            icon: o.fixedIcon ? null !== o.icon ? o.icon : void 0 : r,
            contentClass: a
        }, ()=>l);
        return c
    }
    function Sr(e) {
        if (e.caret)
            return e.buttons.value.filter(t=>{
                return !e.isViewingSource.value || t.find(e=>"viewsource" === e.cmd)
            }
            ).map(t=>wr(t.map(t=>{
                return (!e.isViewingSource.value || "viewsource" === t.cmd) && ("slot" === t.type ? Xe(e.slots[t.slot]) : "dropdown" === t.type ? _r(e, t) : xr(e, t))
            }
            )))
    }
    function kr(e, t, o, n={}) {
        const a = Object.keys(n);
        if (0 === a.length)
            return {};
        const l = {
            default_font: {
                cmd: "fontName",
                param: e,
                icon: o,
                tip: t
            }
        };
        return a.forEach(e=>{
            const t = n[e];
            l[e] = {
                cmd: "fontName",
                param: t,
                icon: o,
                tip: t,
                htmlTip: `<font face="${t}">${t}</font>`
            }
        }
        ),
        l
    }
    function Cr(t) {
        if (t.caret) {
            const o = t.props.toolbarColor || t.props.toolbarTextColor;
            let n = t.editLinkUrl.value;
            const a = ()=>{
                t.caret.restore(),
                n !== t.editLinkUrl.value && document.execCommand("createLink", !1, "" === n ? " " : n),
                t.editLinkUrl.value = null
            }
            ;
            return [e.h("div", {
                class: `q-mx-xs text-${o}`
            }, `${t.$q.lang.editor.url}: `), e.h("input", {
                key: "qedt_btm_input",
                class: "col q-editor__link-input",
                value: n,
                onInput: e=>{
                    C(e),
                    n = e.target.value
                }
                ,
                onKeydown: e=>{
                    if (!0 !== Y(e))
                        switch (e.keyCode) {
                        case 13:
                            return q(e),
                            a();
                        case 27:
                            q(e),
                            t.caret.restore(),
                            t.editLinkUrl.value && "https://" !== t.editLinkUrl.value || document.execCommand("unlink"),
                            t.editLinkUrl.value = null;
                            break
                        }
                }
            }), wr([e.h(ho, {
                key: "qedt_btm_rem",
                tabindex: -1,
                ...t.buttonProps.value,
                label: t.$q.lang.label.remove,
                noCaps: !0,
                onClick: ()=>{
                    t.caret.restore(),
                    document.execCommand("unlink"),
                    t.editLinkUrl.value = null
                }
            }), e.h(ho, {
                key: "qedt_btm_upd",
                ...t.buttonProps.value,
                label: t.$q.lang.label.update,
                noCaps: !0,
                onClick: a
            })])]
        }
    }
    const qr = /^on[A-Z]/;
    function $r(t, o) {
        const n = {
            listeners: e.ref({}),
            attributes: e.ref({})
        };
        function a() {
            const e = {}
              , a = {};
            for (const o in t)
                "class" !== o && "style" !== o && !1 === qr.test(o) && (e[o] = t[o]);
            for (const t in o.props)
                !0 === qr.test(t) && (a[t] = o.props[t]);
            n.attributes.value = e,
            n.listeners.value = a
        }
        return e.onBeforeUpdate(a),
        a(),
        n
    }
    const Mr = Object.prototype.toString
      , Tr = Object.prototype.hasOwnProperty
      , Br = {};
    function zr(e) {
        return null === e ? String(e) : Br[Mr.call(e)] || "object"
    }
    function Or(e) {
        if (!e || "object" !== zr(e))
            return !1;
        if (e.constructor && !Tr.call(e, "constructor") && !Tr.call(e.constructor.prototype, "isPrototypeOf"))
            return !1;
        let t;
        for (t in e)
            ;
        return void 0 === t || Tr.call(e, t)
    }
    function Vr() {
        let e, t, o, n, a, l, i = arguments[0] || {}, r = 1, s = !1;
        const u = arguments.length;
        for ("boolean" === typeof i && (s = i,
        i = arguments[1] || {},
        r = 2),
        Object(i) !== i && "function" !== zr(i) && (i = {}),
        u === r && (i = this,
        r--); r < u; r++)
            if (null !== (e = arguments[r]))
                for (t in e)
                    o = i[t],
                    n = e[t],
                    i !== n && (s && n && (Or(n) || (a = "array" === zr(n))) ? (a ? (a = !1,
                    l = o && "array" === zr(o) ? o : []) : l = o && Or(o) ? o : {},
                    i[t] = Vr(s, l, n)) : void 0 !== n && (i[t] = n));
        return i
    }
    "Boolean Number String Function Array Date RegExp Object".split(" ").forEach(e=>{
        Br["[object " + e + "]"] = e.toLowerCase()
    }
    );
    var Lr = Me({
        name: "QEditor",
        props: {
            ...yt,
            ...ra,
            modelValue: {
                type: String,
                required: !0
            },
            readonly: Boolean,
            disable: Boolean,
            minHeight: {
                type: String,
                default: "10rem"
            },
            maxHeight: String,
            height: String,
            definitions: Object,
            fonts: Object,
            placeholder: String,
            toolbar: {
                type: Array,
                validator: e=>0 === e.length || e.every(e=>e.length),
                default() {
                    return [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]]
                }
            },
            toolbarColor: String,
            toolbarBg: String,
            toolbarTextColor: String,
            toolbarToggleColor: {
                type: String,
                default: "primary"
            },
            toolbarOutline: Boolean,
            toolbarPush: Boolean,
            toolbarRounded: Boolean,
            paragraphTag: {
                type: String,
                validator: e=>["div", "p"].includes(e),
                default: "div"
            },
            contentStyle: Object,
            contentClass: [Object, Array, String],
            square: Boolean,
            flat: Boolean,
            dense: Boolean
        },
        emits: [...sa, "update:modelValue", "keydown", "click", "mouseup", "keyup", "touchend", "focus", "blur"],
        setup(t, {slots: o, emit: n, attrs: a}) {
            const {proxy: l, vnode: i} = e.getCurrentInstance()
              , {$q: r} = l
              , s = wt(t, r)
              , {inFullscreen: u, toggleFullscreen: c} = ua()
              , d = $r(a, i)
              , v = e.ref(null)
              , p = e.ref(null)
              , m = e.ref(null)
              , f = e.ref(!1)
              , h = e.computed(()=>!t.readonly && !t.disable);
            let g, b, y = t.modelValue;
            document.execCommand("defaultParagraphSeparator", !1, t.paragraphTag),
            g = window.getComputedStyle(document.body).fontFamily;
            const w = e.computed(()=>t.toolbarBg ? ` bg-${t.toolbarBg}` : "")
              , x = e.computed(()=>{
                const e = !0 !== t.toolbarOutline && !0 !== t.toolbarPush;
                return {
                    type: "a",
                    flat: e,
                    noWrap: !0,
                    outline: t.toolbarOutline,
                    push: t.toolbarPush,
                    rounded: t.toolbarRounded,
                    dense: !0,
                    color: t.toolbarColor,
                    disable: !h.value,
                    size: "sm"
                }
            }
            )
              , _ = e.computed(()=>{
                const e = r.lang.editor
                  , o = r.iconSet.editor;
                return {
                    bold: {
                        cmd: "bold",
                        icon: o.bold,
                        tip: e.bold,
                        key: 66
                    },
                    italic: {
                        cmd: "italic",
                        icon: o.italic,
                        tip: e.italic,
                        key: 73
                    },
                    strike: {
                        cmd: "strikeThrough",
                        icon: o.strikethrough,
                        tip: e.strikethrough,
                        key: 83
                    },
                    underline: {
                        cmd: "underline",
                        icon: o.underline,
                        tip: e.underline,
                        key: 85
                    },
                    unordered: {
                        cmd: "insertUnorderedList",
                        icon: o.unorderedList,
                        tip: e.unorderedList
                    },
                    ordered: {
                        cmd: "insertOrderedList",
                        icon: o.orderedList,
                        tip: e.orderedList
                    },
                    subscript: {
                        cmd: "subscript",
                        icon: o.subscript,
                        tip: e.subscript,
                        htmlTip: "x<subscript>2</subscript>"
                    },
                    superscript: {
                        cmd: "superscript",
                        icon: o.superscript,
                        tip: e.superscript,
                        htmlTip: "x<superscript>2</superscript>"
                    },
                    link: {
                        cmd: "link",
                        disable: e=>e.caret && !e.caret.can("link"),
                        icon: o.hyperlink,
                        tip: e.hyperlink,
                        key: 76
                    },
                    fullscreen: {
                        cmd: "fullscreen",
                        icon: o.toggleFullscreen,
                        tip: e.toggleFullscreen,
                        key: 70
                    },
                    viewsource: {
                        cmd: "viewsource",
                        icon: o.viewSource,
                        tip: e.viewSource
                    },
                    quote: {
                        cmd: "formatBlock",
                        param: "BLOCKQUOTE",
                        icon: o.quote,
                        tip: e.quote,
                        key: 81
                    },
                    left: {
                        cmd: "justifyLeft",
                        icon: o.left,
                        tip: e.left
                    },
                    center: {
                        cmd: "justifyCenter",
                        icon: o.center,
                        tip: e.center
                    },
                    right: {
                        cmd: "justifyRight",
                        icon: o.right,
                        tip: e.right
                    },
                    justify: {
                        cmd: "justifyFull",
                        icon: o.justify,
                        tip: e.justify
                    },
                    print: {
                        type: "no-state",
                        cmd: "print",
                        icon: o.print,
                        tip: e.print,
                        key: 80
                    },
                    outdent: {
                        type: "no-state",
                        disable: e=>e.caret && !e.caret.can("outdent"),
                        cmd: "outdent",
                        icon: o.outdent,
                        tip: e.outdent
                    },
                    indent: {
                        type: "no-state",
                        disable: e=>e.caret && !e.caret.can("indent"),
                        cmd: "indent",
                        icon: o.indent,
                        tip: e.indent
                    },
                    removeFormat: {
                        type: "no-state",
                        cmd: "removeFormat",
                        icon: o.removeFormat,
                        tip: e.removeFormat
                    },
                    hr: {
                        type: "no-state",
                        cmd: "insertHorizontalRule",
                        icon: o.hr,
                        tip: e.hr
                    },
                    undo: {
                        type: "no-state",
                        cmd: "undo",
                        icon: o.undo,
                        tip: e.undo,
                        key: 90
                    },
                    redo: {
                        type: "no-state",
                        cmd: "redo",
                        icon: o.redo,
                        tip: e.redo,
                        key: 89
                    },
                    h1: {
                        cmd: "formatBlock",
                        param: "H1",
                        icon: o.heading1 || o.heading,
                        tip: e.heading1,
                        htmlTip: `<h1 class="q-ma-none">${e.heading1}</h1>`
                    },
                    h2: {
                        cmd: "formatBlock",
                        param: "H2",
                        icon: o.heading2 || o.heading,
                        tip: e.heading2,
                        htmlTip: `<h2 class="q-ma-none">${e.heading2}</h2>`
                    },
                    h3: {
                        cmd: "formatBlock",
                        param: "H3",
                        icon: o.heading3 || o.heading,
                        tip: e.heading3,
                        htmlTip: `<h3 class="q-ma-none">${e.heading3}</h3>`
                    },
                    h4: {
                        cmd: "formatBlock",
                        param: "H4",
                        icon: o.heading4 || o.heading,
                        tip: e.heading4,
                        htmlTip: `<h4 class="q-ma-none">${e.heading4}</h4>`
                    },
                    h5: {
                        cmd: "formatBlock",
                        param: "H5",
                        icon: o.heading5 || o.heading,
                        tip: e.heading5,
                        htmlTip: `<h5 class="q-ma-none">${e.heading5}</h5>`
                    },
                    h6: {
                        cmd: "formatBlock",
                        param: "H6",
                        icon: o.heading6 || o.heading,
                        tip: e.heading6,
                        htmlTip: `<h6 class="q-ma-none">${e.heading6}</h6>`
                    },
                    p: {
                        cmd: "formatBlock",
                        param: t.paragraphTag,
                        icon: o.heading,
                        tip: e.paragraph
                    },
                    code: {
                        cmd: "formatBlock",
                        param: "PRE",
                        icon: o.code,
                        htmlTip: `<code>${e.code}</code>`
                    },
                    "size-1": {
                        cmd: "fontSize",
                        param: "1",
                        icon: o.size1 || o.size,
                        tip: e.size1,
                        htmlTip: `<font size="1">${e.size1}</font>`
                    },
                    "size-2": {
                        cmd: "fontSize",
                        param: "2",
                        icon: o.size2 || o.size,
                        tip: e.size2,
                        htmlTip: `<font size="2">${e.size2}</font>`
                    },
                    "size-3": {
                        cmd: "fontSize",
                        param: "3",
                        icon: o.size3 || o.size,
                        tip: e.size3,
                        htmlTip: `<font size="3">${e.size3}</font>`
                    },
                    "size-4": {
                        cmd: "fontSize",
                        param: "4",
                        icon: o.size4 || o.size,
                        tip: e.size4,
                        htmlTip: `<font size="4">${e.size4}</font>`
                    },
                    "size-5": {
                        cmd: "fontSize",
                        param: "5",
                        icon: o.size5 || o.size,
                        tip: e.size5,
                        htmlTip: `<font size="5">${e.size5}</font>`
                    },
                    "size-6": {
                        cmd: "fontSize",
                        param: "6",
                        icon: o.size6 || o.size,
                        tip: e.size6,
                        htmlTip: `<font size="6">${e.size6}</font>`
                    },
                    "size-7": {
                        cmd: "fontSize",
                        param: "7",
                        icon: o.size7 || o.size,
                        tip: e.size7,
                        htmlTip: `<font size="7">${e.size7}</font>`
                    }
                }
            }
            )
              , S = e.computed(()=>{
                const e = t.definitions || {}
                  , o = t.definitions || t.fonts ? Vr(!0, {}, _.value, e, kr(g, r.lang.editor.defaultFont, r.iconSet.editor.font, t.fonts)) : _.value;
                return t.toolbar.map(t=>t.map(t=>{
                    if (t.options)
                        return {
                            type: "dropdown",
                            icon: t.icon,
                            label: t.label,
                            size: "sm",
                            dense: !0,
                            fixedLabel: t.fixedLabel,
                            fixedIcon: t.fixedIcon,
                            highlight: t.highlight,
                            list: t.list,
                            options: t.options.map(e=>o[e])
                        };
                    const n = o[t];
                    return n ? "no-state" === n.type || e[t] && (void 0 === n.cmd || _.value[n.cmd] && "no-state" === _.value[n.cmd].type) ? n : Object.assign({
                        type: "toggle"
                    }, n) : {
                        type: "slot",
                        slot: t
                    }
                }
                ))
            }
            )
              , k = {
                $q: r,
                props: t,
                slots: o,
                inFullscreen: u,
                toggleFullscreen: c,
                runCmd: j,
                isViewingSource: f,
                editLinkUrl: m,
                toolbarBackgroundClass: w,
                buttonProps: x,
                contentRef: p,
                buttons: S,
                setContent: N
            };
            e.watch(()=>t.modelValue, e=>{
                y !== e && (y = e,
                N(e, !0))
            }
            );
            const C = e.computed(()=>t.toolbar && t.toolbar.length > 0)
              , q = e.computed(()=>{
                const e = {}
                  , t = t=>{
                    t.key && (e[t.key] = {
                        cmd: t.cmd,
                        param: t.param
                    })
                }
                ;
                return S.value.forEach(e=>{
                    e.forEach(e=>{
                        e.options ? e.options.forEach(t) : t(e)
                    }
                    )
                }
                ),
                e
            }
            )
              , M = e.computed(()=>u.value ? t.contentStyle : [{
                minHeight: t.minHeight,
                height: t.height,
                maxHeight: t.maxHeight
            }, t.contentStyle])
              , T = e.computed(()=>`q-editor q-editor--${!0 === f.value ? "source" : "default"}` + (!0 === t.disable ? " disabled" : "") + (!0 === u.value ? " fullscreen column" : "") + (!0 === t.square ? " q-editor--square no-border-radius" : "") + (!0 === t.flat ? " q-editor--flat" : "") + (!0 === t.dense ? " q-editor--dense" : "") + (!0 === s.value ? " q-editor--dark q-dark" : ""))
              , B = e.computed(()=>[t.contentClass, "q-editor__content", {
                col: u.value,
                "overflow-auto": u.value || t.maxHeight
            }])
              , z = e.computed(()=>!0 === t.disable ? {
                "aria-disabled": "true"
            } : !0 === t.readonly ? {
                "aria-readonly": "true"
            } : {});
            function O() {
                if (null !== p.value) {
                    const e = `inner ${!0 === f.value ? "Text" : "HTML"}`
                      , o = p.value[e];
                    o !== t.modelValue && (y = o,
                    n("update:modelValue", o))
                }
            }
            function V(e) {
                if (n("keydown", e),
                !0 !== e.ctrlKey || !0 === Y(e))
                    return void D();
                const t = e.keyCode
                  , o = q.value[t];
                if (void 0 !== o) {
                    const {cmd: t, param: n} = o;
                    $(e),
                    j(t, n, !1)
                }
            }
            function L(e) {
                D(),
                n("click", e)
            }
            function E(e) {
                if (null !== p.value) {
                    const {scrollTop: e, scrollHeight: t} = p.value;
                    b = t - e
                }
                k.caret.save(),
                n("blur", e)
            }
            function A(t) {
                e.nextTick(()=>{
                    null !== p.value && void 0 !== b && (p.value.scrollTop = p.value.scrollHeight - b)
                }
                ),
                n("focus", t)
            }
            function P(e) {
                const t = v.value;
                if (null !== t && !0 === t.contains(e.target) && (null === e.relatedTarget || !0 !== t.contains(e.relatedTarget))) {
                    const e = `inner ${!0 === f.value ? "Text" : "HTML"}`;
                    k.caret.restorePosition(p.value[e].length),
                    D()
                }
            }
            function R(e) {
                const t = v.value;
                null === t || !0 !== t.contains(e.target) || null !== e.relatedTarget && !0 === t.contains(e.relatedTarget) || (k.caret.savePosition(),
                D())
            }
            function F() {
                b = void 0
            }
            function I(e) {
                k.caret.save()
            }
            function N(e, t) {
                if (null !== p.value) {
                    !0 === t && k.caret.savePosition();
                    const o = `inner ${!0 === f.value ? "Text" : "HTML"}`;
                    p.value[o] = e,
                    !0 === t && (k.caret.restorePosition(p.value[o].length),
                    D())
                }
            }
            function j(e, t, o=!0) {
                H(),
                k.caret.restore(),
                k.caret.apply(e, t, ()=>{
                    H(),
                    k.caret.save(),
                    o && D()
                }
                )
            }
            function D() {
                setTimeout(()=>{
                    m.value = null,
                    l.$forceUpdate()
                }
                , 1)
            }
            function H() {
                Bo(()=>{
                    null !== p.value && p.value.focus({
                        preventScroll: !0
                    })
                }
                )
            }
            function Q() {
                return p.value
            }
            return Object.assign(l, {
                runCmd: j,
                refreshToolbar: D,
                focus: H,
                getContentEl: Q
            }),
            e.onMounted(()=>{
                k.caret = l.caret = new fr(p.value,k),
                N(t.modelValue),
                D(),
                document.addEventListener("selectionchange", I)
            }
            ),
            e.onBeforeUnmount(()=>{
                document.removeEventListener("selectionchange", I)
            }
            ),
            ()=>{
                let o;
                if (C.value) {
                    const t = [e.h("div", {
                        key: "qedt_top",
                        class: "q-editor__toolbar row no-wrap scroll-x" + w.value
                    }, Sr(k))];
                    null !== m.value && t.push(e.h("div", {
                        key: "qedt_btm",
                        class: "q-editor__toolbar row no-wrap items-center scroll-x" + w.value
                    }, Cr(k))),
                    o = e.h("div", {
                        key: "toolbar_ctainer",
                        class: "q-editor__toolbars-container"
                    }, t)
                }
                return e.h("div", {
                    ref: v,
                    class: T.value,
                    style: {
                        height: !0 === u.value ? "100%" : null
                    },
                    ...z.value,
                    onFocusin: P,
                    onFocusout: R
                }, [o, e.h("div", {
                    ref: p,
                    style: M.value,
                    class: B.value,
                    contenteditable: h.value,
                    placeholder: t.placeholder,
                    ...{},
                    ...d.listeners.value,
                    onInput: O,
                    onKeydown: V,
                    onClick: L,
                    onBlur: E,
                    onFocus: A,
                    onMousedown: F,
                    onTouchstartPassive: F
                })])
            }
        }
    })
      , Er = Me({
        name: "QItemLabel",
        props: {
            overline: Boolean,
            caption: Boolean,
            header: Boolean,
            lines: [Number, String]
        },
        setup(t, {slots: o}) {
            const n = e.computed(()=>parseInt(t.lines, 10))
              , a = e.computed(()=>"q-item__label" + (!0 === t.overline ? " q-item__label--overline text-overline" : "") + (!0 === t.caption ? " q-item__label--caption text-caption" : "") + (!0 === t.header ? " q-item__label--header" : "") + (1 === n.value ? " ellipsis" : ""))
              , l = e.computed(()=>{
                return void 0 !== t.lines && n.value > 1 ? {
                    overflow: "hidden",
                    display: "-webkit-box",
                    "-webkit-box-orient": "vertical",
                    "-webkit-line-clamp": n.value
                } : null
            }
            );
            return ()=>e.h("div", {
                style: l.value,
                class: a.value
            }, Xe(o.default))
        }
    })
      , Ar = Me({
        name: "QSlideTransition",
        props: {
            appear: Boolean,
            duration: {
                type: Number,
                default: 300
            }
        },
        emits: ["show", "hide"],
        setup(t, {slots: o, emit: n}) {
            let a, l, i, r, s, u, c = !1;
            function d() {
                a && a(),
                a = null,
                c = !1,
                clearTimeout(i),
                clearTimeout(r),
                void 0 !== l && l.removeEventListener("transitionend", s),
                s = null
            }
            function v(e, o, n) {
                e.style.overflowY = "hidden",
                void 0 !== o && (e.style.height = `${o}px`),
                e.style.transition = `height ${t.duration}ms cubic-bezier(.25, .8, .50, 1)`,
                c = !0,
                a = n
            }
            function p(e, t) {
                e.style.overflowY = null,
                e.style.height = null,
                e.style.transition = null,
                d(),
                t !== u && n(t)
            }
            function m(e, o) {
                let n = 0;
                l = e,
                !0 === c ? (d(),
                n = e.offsetHeight === e.scrollHeight ? 0 : void 0) : u = "hide",
                v(e, n, o),
                i = setTimeout(()=>{
                    e.style.height = `${e.scrollHeight}px`,
                    s = (t=>{
                        Object(t) === t && t.target !== e || p(e, "show")
                    }
                    ),
                    e.addEventListener("transitionend", s),
                    r = setTimeout(s, 1.1 * t.duration)
                }
                , 100)
            }
            function f(e, o) {
                let n;
                l = e,
                !0 === c ? d() : (u = "show",
                n = e.scrollHeight),
                v(e, n, o),
                i = setTimeout(()=>{
                    e.style.height = 0,
                    s = (t=>{
                        Object(t) === t && t.target !== e || p(e, "hide")
                    }
                    ),
                    e.addEventListener("transitionend", s),
                    r = setTimeout(s, 1.1 * t.duration)
                }
                , 100)
            }
            return e.onBeforeUnmount(()=>{
                !0 === c && d()
            }
            ),
            ()=>e.h(e.Transition, {
                css: !1,
                appear: t.appear,
                onEnter: m,
                onLeave: f
            }, o.default)
        }
    });
    const Pr = {
        true: "inset",
        item: "item-inset",
        "item-thumbnail": "item-thumbnail-inset"
    }
      , Rr = {
        xs: 2,
        sm: 4,
        md: 8,
        lg: 16,
        xl: 24
    };
    var Fr = Me({
        name: "QSeparator",
        props: {
            ...yt,
            spaced: [Boolean, String],
            inset: [Boolean, String],
            vertical: Boolean,
            color: String,
            size: String
        },
        setup(t) {
            const o = e.getCurrentInstance()
              , n = wt(t, o.proxy.$q)
              , a = e.computed(()=>!0 === t.vertical ? "vertical" : "horizontal")
              , l = e.computed(()=>` q-separator--${a.value}`)
              , i = e.computed(()=>!1 !== t.inset ? `${l.value}-${Pr[t.inset]}` : "")
              , r = e.computed(()=>`q-separator ${l.value}${i.value}` + (void 0 !== t.color ? ` bg-${t.color}` : "") + (!0 === n.value ? " q-separator--dark" : ""))
              , s = e.computed(()=>{
                const e = {};
                if (void 0 !== t.size && (e[!0 === t.vertical ? "width" : "height"] = t.size),
                !1 !== t.spaced) {
                    const o = !0 === t.spaced ? `${Rr.md}px` : t.spaced in Rr ? `${Rr[t.spaced]}px` : t.spaced
                      , n = !0 === t.vertical ? ["Left", "Right"] : ["Top", "Bottom"];
                    e[`margin ${n[0]}`] = e[`margin ${n[1]}`] = o
                }
                return e
            }
            );
            return ()=>e.h("hr", {
                class: r.value,
                style: s.value,
                "aria-orientation": a.value
            })
        }
    });
    let Ir, Nr = 0;
    const jr = new Array(256);
    for (let Dm = 0; Dm < 256; Dm++)
        jr[Dm] = (Dm + 256).toString(16).substring(1);
    const Dr = (()=>{
        const e = "undefined" !== typeof crypto ? crypto : "undefined" !== typeof window ? window.crypto || window.msCrypto : void 0;
        if (void 0 !== e) {
            if (void 0 !== e.randomBytes)
                return e.randomBytes;
            if (void 0 !== e.getRandomValues)
                return t=>{
                    const o = new Uint8Array(t);
                    return e.getRandomValues(o),
                    o
                }
        }
        return e=>{
            const t = [];
            for (let o = e; o > 0; o--)
                t.push(Math.floor(256 * Math.random()));
            return t
        }
    }
    )()
      , Hr = 4096;
    function Qr() {
        (void 0 === Ir || Nr + 16 > Hr) && (Nr = 0,
        Ir = Dr(Hr));
        const e = Array.prototype.slice.call(Ir, Nr, Nr += 16);
        return e[6] = 15 & e[6] | 64,
        e[8] = 63 & e[8] | 128,
        jr[e[0]] + jr[e[1]] + jr[e[2]] + jr[e[3]] + "-" + jr[e[4]] + jr[e[5]] + "-" + jr[e[6]] + jr[e[7]] + "-" + jr[e[8]] + jr[e[9]] + "-" + jr[e[10]] + jr[e[11]] + jr[e[12]] + jr[e[13]] + jr[e[14]] + jr[e[15]]
    }
    const Ur = e.shallowReactive({})
      , Wr = Object.keys(Ft);
    var Yr = Me({
        name: "QExpansionItem",
        props: {
            ...Ft,
            ..._o,
            ...yt,
            icon: String,
            label: String,
            labelLines: [Number, String],
            caption: String,
            captionLines: [Number, String],
            dense: Boolean,
            expandIcon: String,
            expandedIcon: String,
            expandIconClass: [Array, String, Object],
            duration: Number,
            headerInsetLevel: Number,
            contentInsetLevel: Number,
            expandSeparator: Boolean,
            defaultOpened: Boolean,
            expandIconToggle: Boolean,
            switchToggleSide: Boolean,
            denseToggle: Boolean,
            group: String,
            popup: Boolean,
            headerStyle: [Array, String, Object],
            headerClass: [Array, String, Object]
        },
        emits: [...So, "click", "after-show", "after-hide"],
        setup(t, {slots: o, emit: n}) {
            const {proxy: {$q: a}} = e.getCurrentInstance()
              , l = wt(t, a)
              , i = e.ref(null !== t.modelValue ? t.modelValue : t.defaultOpened)
              , r = e.ref(null)
              , {hide: s, toggle: u} = ko({
                showing: i
            });
            let c, d;
            const v = e.computed(()=>"q-expansion-item q-item-type" + ` q-expansion-item--${!0 === i.value ? "expanded" : "collapsed"}` + ` q-expansion-item--${!0 === t.popup ? "popup" : "standard"}`)
              , p = e.computed(()=>{
                if (void 0 === t.contentInsetLevel)
                    return null;
                const e = !0 === a.lang.rtl ? "Right" : "Left";
                return {
                    ["padding" + e]: 56 * t.contentInsetLevel + "px"
                }
            }
            )
              , m = e.computed(()=>!0 !== t.disable && (void 0 !== t.href || void 0 !== t.to && null !== t.to && "" !== t.to))
              , f = e.computed(()=>{
                const e = {};
                return Wr.forEach(o=>{
                    e[o] = t[o]
                }
                ),
                e
            }
            )
              , h = e.computed(()=>!0 === m.value || !0 !== t.expandIconToggle)
              , g = e.computed(()=>void 0 !== t.expandedIcon && !0 === i.value ? t.expandedIcon : t.expandIcon || a.iconSet.expansionItem[!0 === t.denseToggle ? "denseIcon" : "icon"])
              , b = e.computed(()=>!0 !== t.disable && (!0 === m.value || !0 === t.expandIconToggle));
            function y(e) {
                !0 !== m.value && u(e),
                n("click", e)
            }
            function w(e) {
                13 === e.keyCode && x(e, !0)
            }
            function x(e, t) {
                !0 !== t && null !== r.value && r.value.focus(),
                u(e),
                $(e)
            }
            function _() {
                n("after-show")
            }
            function S() {
                n("after-hide")
            }
            function k() {
                void 0 === c && (c = Qr()),
                !0 === i.value && (Ur[t.group] = c);
                const o = e.watch(i, e=>{
                    !0 === e ? Ur[t.group] = c : Ur[t.group] === c && delete Ur[t.group]
                }
                )
                  , n = e.watch(()=>Ur[t.group], (e,t)=>{
                    t === c && void 0 !== e && e !== c && s()
                }
                );
                d = (()=>{
                    o(),
                    n(),
                    Ur[t.group] === c && delete Ur[t.group],
                    d = void 0
                }
                )
            }
            function C() {
                const o = {
                    class: ["q-focusable relative-position cursor-pointer" + `${!0 === t.denseToggle && !0 === t.switchToggleSide ? " items-end" : ""}`, t.expandIconClass],
                    side: !0 !== t.switchToggleSide,
                    avatar: t.switchToggleSide
                }
                  , n = [e.h(ft, {
                    class: "q-expansion-item__toggle-icon" + (void 0 === t.expandedIcon && !0 === i.value ? " q-expansion-item__toggle-icon--rotated" : ""),
                    name: g.value
                })];
                return !0 === b.value && (Object.assign(o, {
                    tabindex: 0,
                    onClick: x,
                    onKeyup: w
                }),
                n.unshift(e.h("div", {
                    ref: r,
                    class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",
                    tabindex: -1
                }))),
                e.h(br, o, ()=>n)
            }
            function q() {
                let n;
                return void 0 !== o.header ? n = [].concat(o.header({
                    expanded: !0 === i.value
                })) : (n = [e.h(br, ()=>[e.h(Er, {
                    lines: t.labelLines
                }, ()=>t.label || ""), t.caption ? e.h(Er, {
                    lines: t.captionLines,
                    caption: !0
                }, ()=>t.caption) : null])],
                t.icon && n[!0 === t.switchToggleSide ? "push" : "unshift"](e.h(br, {
                    side: !0 === t.switchToggleSide,
                    avatar: !0 !== t.switchToggleSide
                }, ()=>e.h(ft, {
                    name: t.icon
                })))),
                !0 !== t.disable && n[!0 === t.switchToggleSide ? "unshift" : "push"](C()),
                n
            }
            function M() {
                const o = {
                    ref: "item",
                    style: t.headerStyle,
                    class: t.headerClass,
                    dark: l.value,
                    disable: t.disable,
                    dense: t.dense,
                    insetLevel: t.headerInsetLevel
                };
                return !0 === h.value && (o.clickable = !0,
                o.onClick = y,
                !0 === m.value && Object.assign(o, f.value)),
                e.h(gr, o, q)
            }
            function T() {
                return e.withDirectives(e.h("div", {
                    key: "e-content",
                    class: "q-expansion-item__content relative-position",
                    style: p.value
                }, Xe(o.default)), [[e.vShow, i.value]])
            }
            function B() {
                const o = [M(), e.h(Ar, {
                    duration: t.duration,
                    onShow: _,
                    onHide: S
                }, T)];
                return !0 === t.expandSeparator && o.push(e.h(Fr, {
                    class: "q-expansion-item__border q-expansion-item__border--top absolute-top",
                    dark: l.value
                }), e.h(Fr, {
                    class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",
                    dark: l.value
                })),
                o
            }
            return e.watch(()=>t.group, e=>{
                void 0 !== d && d(),
                void 0 !== e && k()
            }
            ),
            void 0 !== t.group && k(),
            e.onBeforeUnmount(()=>{
                void 0 !== d && d()
            }
            ),
            ()=>e.h("div", {
                class: v.value
            }, [e.h("div", {
                class: "q-expansion-item__container relative-position"
            }, B())])
        }
    });
    const Kr = ["top", "right", "bottom", "left"]
      , Xr = {
        type: {
            type: String,
            default: "a"
        },
        outline: Boolean,
        push: Boolean,
        flat: Boolean,
        unelevated: Boolean,
        color: String,
        textColor: String,
        glossy: Boolean,
        square: Boolean,
        padding: String,
        label: {
            type: [String, Number],
            default: ""
        },
        labelPosition: {
            type: String,
            default: "right",
            validator: e=>Kr.includes(e)
        },
        externalLabel: Boolean,
        hideLabel: {
            type: Boolean
        },
        labelClass: [Array, String, Object],
        labelStyle: [Array, String, Object],
        disable: Boolean,
        tabindex: [Number, String]
    };
    function Zr(t, o) {
        return {
            formClass: e.computed(()=>`q-fab--form-${!0 === t.square ? "square" : "rounded"}`),
            stacked: e.computed(()=>!1 === t.externalLabel && ["top", "bottom"].includes(t.labelPosition)),
            labelProps: e.computed(()=>{
                if (!0 === t.externalLabel) {
                    const e = null === t.hideLabel ? !1 === o.value : t.hideLabel;
                    return {
                        action: "push",
                        data: {
                            class: [t.labelClass, "q-fab__label q-tooltip--style q-fab__label--external" + ` q-fab__label--external-${t.labelPosition}` + (!0 === e ? " q-fab__label--external-hidden" : "")],
                            style: t.labelStyle
                        }
                    }
                }
                return {
                    action: ["left", "top"].includes(t.labelPosition) ? "unshift" : "push",
                    data: {
                        class: [t.labelClass, `q-fab__label q-fab__label--internal q-fab__label--internal-${t.labelPosition}` + (!0 === t.hideLabel ? " q-fab__label--internal-hidden" : "")],
                        style: t.labelStyle
                    }
                }
            }
            )
        }
    }
    const Gr = ["up", "right", "down", "left"]
      , Jr = ["left", "center", "right"];
    var es = Me({
        name: "QFab",
        props: {
            ...Xr,
            ..._o,
            icon: String,
            activeIcon: String,
            hideIcon: Boolean,
            hideLabel: {
                default: null
            },
            direction: {
                type: String,
                default: "right",
                validator: e=>Gr.includes(e)
            },
            persistent: Boolean,
            verticalActionsAlign: {
                type: String,
                default: "center",
                validator: e=>Jr.includes(e)
            }
        },
        emits: So,
        setup(t, {slots: o}) {
            const n = e.ref(null)
              , a = e.ref(!0 === t.modelValue)
              , {proxy: {$q: l}} = e.getCurrentInstance()
              , {formClass: i, labelProps: r} = Zr(t, a)
              , s = e.computed(()=>!0 !== t.persistent)
              , {hide: u, toggle: c} = ko({
                showing: a,
                hideOnRouteChange: s
            })
              , d = e.computed(()=>({
                opened: a.value
            }))
              , v = e.computed(()=>"q-fab z-fab row inline justify-center" + ` q-fab--align-${t.verticalActionsAlign} ${i.value}` + (!0 === a.value ? " q-fab--opened" : " q-fab--closed"))
              , p = e.computed(()=>"q-fab__actions flex no-wrap inline" + ` q-fab__actions--${t.direction}` + ` q-fab__actions--${!0 === a.value ? "opened" : "closed"}`)
              , m = e.computed(()=>"q-fab__icon-holder " + ` q-fab__icon-holder--${!0 === a.value ? "opened" : "closed"}`);
            function f(n, a) {
                const i = o[n]
                  , r = `q-fab__ ${n} absolute-full`;
                return void 0 === i ? e.h(ft, {
                    class: r,
                    name: t[a] || l.iconSet.fab[a]
                }) : e.h("div", {
                    class: r
                }, i(d.value))
            }
            function h() {
                const n = [];
                return !0 !== t.hideIcon && n.push(e.h("div", {
                    class: m.value
                }, [f("icon", "icon"), f("active-icon", "activeIcon")])),
                "" === t.label && void 0 === o.label || n[r.value.action](e.h("div", r.value.data, void 0 !== o.label ? o.label(d.value) : [t.label])),
                Ge(o.tooltip, n)
            }
            return e.provide(se, {
                showing: a,
                onChildClick(e) {
                    u(e),
                    null !== n.value && n.value.$el.focus()
                }
            }),
            ()=>e.h("div", {
                class: v.value
            }, [e.h(ho, {
                ref: n,
                class: i.value,
                ...t,
                noWrap: !0,
                stack: t.stacked,
                align: void 0,
                icon: void 0,
                label: void 0,
                noCaps: !0,
                fab: !0,
                "aria-expanded": !0 === a.value ? "true" : "false",
                "aria-haspopup": "true",
                onClick: c
            }, h), e.h("div", {
                class: p.value
            }, Xe(o.default))])
        }
    });
    const ts = {
        start: "self-end",
        center: "self-center",
        end: "self-start"
    }
      , os = Object.keys(ts);
    var ns = Me({
        name: "QFabAction",
        props: {
            ...Xr,
            icon: {
                type: String,
                default: ""
            },
            anchor: {
                type: String,
                validator: e=>os.includes(e)
            },
            to: [String, Object],
            replace: Boolean
        },
        emits: ["click"],
        setup(t, {slots: o, emit: n}) {
            const a = e.inject(se, ()=>({
                showing: {
                    value: !0
                },
                onChildClick: h
            }))
              , {formClass: l, labelProps: i} = Zr(t, a.showing)
              , r = e.computed(()=>{
                const e = ts[t.anchor];
                return l.value + (void 0 !== e ? ` ${e}` : "")
            }
            )
              , s = e.computed(()=>!0 === t.disable || !0 !== a.showing.value);
            function u(e) {
                a.onChildClick(e),
                n("click", e)
            }
            function c() {
                const n = [];
                return void 0 !== o.icon ? n.push(o.icon()) : "" !== t.icon && n.push(e.h(ft, {
                    name: t.icon
                })),
                "" === t.label && void 0 === o.label || n[i.value.action](e.h("div", i.value.data, void 0 !== o.label ? o.label() : [t.label])),
                Ge(o.default, n)
            }
            const d = e.getCurrentInstance();
            return Object.assign(d.proxy, {
                click: u
            }),
            ()=>e.h(ho, {
                class: r.value,
                ...t,
                noWrap: !0,
                stack: t.stacked,
                icon: void 0,
                label: void 0,
                noCaps: !0,
                fabMini: !0,
                disable: s.value,
                onClick: u
            }, c)
        }
    });
    function as({validate: t, resetValidation: o, requiresQForm: n}) {
        const a = e.inject(ue, !1);
        if (!1 !== a) {
            const {props: n, proxy: l} = e.getCurrentInstance();
            Object.assign(l, {
                validate: t,
                resetValidation: o
            }),
            e.watch(()=>n.disable, e=>{
                !0 === e ? ("function" === typeof o && o(),
                a.unbindComponent(l)) : a.bindComponent(l)
            }
            ),
            !0 !== n.disable && a.bindComponent(l),
            e.onBeforeUnmount(()=>{
                !0 !== n.disable && a.unbindComponent(l)
            }
            )
        } else
            !0 === n && console.error("Parent QForm not found on useFormChild()!")
    }
    function ls(e, t=new WeakMap) {
        if (Object(e) !== e)
            return e;
        if (t.has(e))
            return t.get(e);
        const o = e instanceof Date ? new Date(e) : e instanceof RegExp ? new RegExp(e.source,e.flags) : e instanceof Set ? new Set : e instanceof Map ? new Map : "function" !== typeof e.constructor ? Object.create(null) : void 0 !== e.prototype && "function" === typeof e.prototype.constructor ? e : new e.constructor;
        if ("function" === typeof e.constructor && "function" === typeof e.valueOf) {
            const o = e.valueOf();
            if (Object(o) !== o) {
                const n = new e.constructor(o);
                return t.set(e, n),
                n
            }
        }
        return t.set(e, o),
        e instanceof Set ? e.forEach(e=>{
            o.add(ls(e, t))
        }
        ) : e instanceof Map && e.forEach((e,n)=>{
            o.set(n, ls(e, t))
        }
        ),
        Object.assign(o, ...Object.keys(e).map(o=>({
            [o]: ls(e[o], t)
        })))
    }
    function is(e) {
        const t = document.createElement("textarea");
        t.value = e,
        t.contentEditable = "true",
        t.style.position = "fixed",
        document.body.appendChild(t),
        t.focus(),
        t.select();
        const o = document.execCommand("copy");
        return t.remove(),
        o
    }
    function rs(e) {
        return void 0 !== navigator.clipboard ? navigator.clipboard.writeText(e) : new Promise((t,o)=>{
            const n = is(e);
            n ? t(!0) : o(n)
        }
        )
    }
    let ss, us;
    const cs = [];
    function ds(e) {
        e.title && (e.title = e.titleTemplate ? e.titleTemplate(e.title) : e.title,
        delete e.titleTemplate),
        [["meta", "content"], ["link", "href"]].forEach(t=>{
            const o = e[t[0]]
              , n = t[1];
            for (const e in o) {
                const t = o[e];
                t.template && (1 === Object.keys(t).length ? delete o[e] : (t[n] = t.template(t[n] || ""),
                delete t.template))
            }
        }
        )
    }
    function vs(e, t) {
        if (Object.keys(e).length !== Object.keys(t).length)
            return !0;
        for (const o in e)
            if (e[o] !== t[o])
                return !0
    }
    function ps(e) {
        return !1 === ["class", "style"].includes(e)
    }
    function ms(e) {
        return !1 === ["lang", "dir"].includes(e)
    }
    function fs(e, t) {
        const o = {}
          , n = {};
        return void 0 === e ? {
            add: t,
            remove: n
        } : (e.title !== t.title && (o.title = t.title),
        ["meta", "link", "script", "htmlAttr", "bodyAttr"].forEach(a=>{
            const l = e[a]
              , i = t[a];
            if (n[a] = [],
            void 0 !== l && null !== l) {
                o[a] = {};
                for (const e in l)
                    !1 === i.hasOwnProperty(e) && n[a].push(e);
                for (const e in i)
                    !1 === l.hasOwnProperty(e) ? o[a][e] = i[e] : !0 === vs(l[e], i[e]) && (n[a].push(e),
                    o[a][e] = i[e])
            } else
                o[a] = i
        }
        ),
        {
            add: o,
            remove: n
        })
    }
    function hs({add: e, remove: t}) {
        e.title && (document.title = e.title),
        Object.keys(t).length > 0 && (["meta", "link", "script"].forEach(e=>{
            t[e].forEach(t=>{
                document.head.querySelector(`${e}[data-qmeta="${t}"]`).remove()
            }
            )
        }
        ),
        t.htmlAttr.filter(ms).forEach(e=>{
            document.documentElement.removeAttribute(e)
        }
        ),
        t.bodyAttr.filter(ps).forEach(e=>{
            document.body.removeAttribute(e)
        }
        )),
        ["meta", "link", "script"].forEach(t=>{
            const o = e[t];
            for (const e in o) {
                const n = document.createElement(t);
                for (const t in o[e])
                    "innerHTML" !== t && n.setAttribute(t, o[e][t]);
                n.setAttribute("data-qmeta", e),
                "script" === t && (n.innerHTML = o[e].innerHTML || ""),
                document.head.appendChild(n)
            }
        }
        ),
        Object.keys(e.htmlAttr).filter(ms).forEach(t=>{
            document.documentElement.setAttribute(t, e.htmlAttr[t] || "")
        }
        ),
        Object.keys(e.bodyAttr).filter(ps).forEach(t=>{
            document.body.setAttribute(t, e.bodyAttr[t] || "")
        }
        )
    }
    function gs() {
        const e = {
            title: "",
            titleTemplate: null,
            meta: {},
            link: {},
            script: {},
            htmlAttr: {},
            bodyAttr: {}
        };
        for (let t = 0; t < cs.length; t++) {
            const {active: o, val: n} = cs[t];
            !0 === o && Vr(!0, e, n)
        }
        ds(e),
        hs(fs(us, e)),
        us = e
    }
    function bs() {
        clearTimeout(ss),
        ss = setTimeout(gs, 50)
    }
    var ys = {
        install(e) {
            !0 !== this.__installed && !0 === n.value && (us = window.__Q_META__,
            document.getElementById("qmeta-init").remove())
        }
    }
      , ws = e=>{
        const t = {
            activated() {
                this.__qMeta.active = !0,
                bs()
            },
            deactivated() {
                this.__qMeta.active = !1,
                bs()
            },
            unmounted() {
                cs.splice(cs.indexOf(this.__qMeta), 1),
                bs(),
                this.__qMeta = void 0
            }
        };
        return "function" === typeof e ? Object.assign(t, {
            computed: {
                __qMetaOptions() {
                    return e.call(this) || {}
                }
            },
            watch: {
                __qMetaOptions(e) {
                    this.__qMeta.val = e,
                    !0 === this.__qMeta.active && bs()
                }
            },
            created() {
                this.__qMeta = {
                    active: !0,
                    val: this.__qMetaOptions
                },
                cs.push(this.__qMeta),
                bs()
            }
        }) : t.created = function() {
            this.__qMeta = {
                active: !0,
                val: e
            },
            cs.push(this.__qMeta),
            bs()
        }
        ,
        t
    }
    ;
    function xs(e, t, o, n) {
        const a = [];
        return e.forEach(e=>{
            !0 === n(e) ? a.push(e) : t.push({
                failedPropValidation: o,
                file: e
            })
        }
        ),
        a
    }
    function _s(e) {
        e && e.dataTransfer && (e.dataTransfer.dropEffect = "copy"),
        $(e)
    }
    const Ss = {
        multiple: Boolean,
        accept: String,
        capture: String,
        maxFileSize: [Number, String],
        maxTotalSize: [Number, String],
        maxFiles: [Number, String],
        filter: Function
    }
      , ks = ["rejected"];
    function Cs({editable: t, dnd: o, getFileInput: n, addFilesToQueue: a}) {
        const {props: l, emit: i, proxy: r} = e.getCurrentInstance()
          , s = e.ref(null)
          , u = e.computed(()=>void 0 !== l.accept ? l.accept.split(",").map(e=>{
            return e = e.trim(),
            "*" === e ? "*/" : (e.endsWith("/*") && (e = e.slice(0, e.length - 1)),
            e.toUpperCase())
        }
        ) : null)
          , c = e.computed(()=>parseInt(l.maxFiles, 10))
          , d = e.computed(()=>parseInt(l.maxTotalSize, 10));
        function v(e) {
            if (t.value)
                if (e !== Object(e) && (e = {
                    target: null
                }),
                null !== e.target && !0 === e.target.matches('input[type="file"]'))
                    0 === e.clientX && 0 === e.clientY && C(e);
                else {
                    const t = n();
                    t && t !== e.target && t.click(e)
                }
        }
        function p(e) {
            t.value && e && a(null, e)
        }
        function m(e, t, o, n) {
            let a = Array.from(t || e.target.files);
            const r = []
              , s = ()=>{
                r.length > 0 && i("rejected", r)
            }
            ;
            if (void 0 !== l.accept && -1 === u.value.indexOf("*/") && (a = xs(a, r, "accept", e=>{
                return u.value.some(t=>e.type.toUpperCase().startsWith(t) || e.name.toUpperCase().endsWith(t))
            }
            ),
            0 === a.length))
                return s();
            if (void 0 !== l.maxFileSize) {
                const e = parseInt(l.maxFileSize, 10);
                if (a = xs(a, r, "max-file-size", t=>{
                    return t.size <= e
                }
                ),
                0 === a.length)
                    return s()
            }
            !0 !== l.multiple && a.length > 0 && (a = [a[0]]),
            a.forEach(e=>{
                e.__key = e.webkitRelativePath + e.lastModified + e.name + e.size
            }
            );
            const v = o.map(e=>e.__key);
            if (a = xs(a, r, "duplicate", e=>{
                return !1 === v.includes(e.__key)
            }
            ),
            0 === a.length)
                return s();
            if (void 0 !== l.maxTotalSize) {
                let e = !0 === n ? o.reduce((e,t)=>e + t.size, 0) : 0;
                if (a = xs(a, r, "max-total-size", t=>{
                    return e += t.size,
                    e <= d.value
                }
                ),
                0 === a.length)
                    return s()
            }
            if ("function" === typeof l.filter) {
                const e = l.filter(a);
                a = xs(a, r, "filter", t=>{
                    return e.includes(t)
                }
                )
            }
            if (void 0 !== l.maxFiles) {
                let e = !0 === n ? o.length : 0;
                if (a = xs(a, r, "max-files", ()=>{
                    return e++,
                    e <= c.value
                }
                ),
                0 === a.length)
                    return s()
            }
            return s(),
            a.length > 0 ? a : void 0
        }
        function f(e) {
            _s(e),
            !0 !== o.value && (o.value = !0)
        }
        function h(e) {
            $(e),
            e.relatedTarget !== s.value && (o.value = !1)
        }
        function g(e) {
            _s(e);
            const t = e.dataTransfer.files;
            t.length > 0 && a(null, t),
            o.value = !1
        }
        function b(t) {
            if (!0 === o.value)
                return e.h("div", {
                    ref: s,
                    class: `q-${t}__dnd absolute-full`,
                    onDragenter: _s,
                    onDragover: _s,
                    onDragleave: h,
                    onDrop: g
                })
        }
        return Object.assign(r, {
            pickFiles: v,
            addFiles: p
        }),
        {
            pickFiles: v,
            addFiles: p,
            onDragover: f,
            processFiles: m,
            getDndNode: b,
            maxFilesNumber: c,
            maxTotalSizeNumber: d
        }
    }
    function qs(e) {
        return (100 * e).toFixed(2) + "%"
    }
    const $s = {
        ...yt,
        ...Ss,
        label: String,
        color: String,
        textColor: String,
        square: Boolean,
        flat: Boolean,
        bordered: Boolean,
        noThumbnails: Boolean,
        autoUpload: Boolean,
        hideUploadBtn: Boolean,
        disable: Boolean,
        readonly: Boolean
    }
      , Ms = [...ks, "start", "finish", "added", "removed"];
    function Ts(t) {
        const o = e.getCurrentInstance()
          , {props: n, slots: a, emit: l, proxy: i} = o
          , {$q: r} = i
          , s = wt(n, r);
        function u(e, t, o) {
            if (e.__status = t,
            "idle" === t)
                return e.__uploaded = 0,
                e.__progress = 0,
                e.__sizeLabel = ze(e.size),
                void (e.__progressLabel = "0.00%");
            "failed" !== t ? (e.__uploaded = "uploaded" === t ? e.size : o,
            e.__progress = "uploaded" === t ? 1 : Math.min(.9999, e.__uploaded / e.size),
            e.__progressLabel = qs(e.__progress),
            i.$forceUpdate()) : i.$forceUpdate()
        }
        const c = {
            files: e.ref([]),
            queuedFiles: e.ref([]),
            uploadedFiles: e.ref([]),
            uploadedSize: e.ref(0),
            updateFileStatus: u,
            isAlive() {
                return !0 !== o.isDeactivated && !0 !== o.isUnmounted
            }
        };
        Object.assign(c, t({
            props: n,
            slots: a,
            emit: l,
            helpers: c
        }));
        const d = e.ref(0)
          , v = e.computed(()=>!0 !== n.disable && !0 !== n.readonly);
        void 0 === c.isBusy && (c.isBusy = e.ref(!1));
        const p = e.ref(!1)
          , m = e.ref(null)
          , f = e.ref(null);
        e.provide(de, j);
        const {pickFiles: h, addFiles: g, onDragover: b, onDragleave: y, processFiles: w, getDndNode: x, maxFilesNumber: _, maxTotalSizeNumber: S} = Cs({
            editable: v,
            dnd: p,
            getFileInput: R,
            addFilesToQueue: F
        })
          , k = e.computed(()=>!0 === v.value && !0 !== c.isUploading.value && (!0 === n.multiple || 0 === c.queuedFiles.value.length) && (void 0 === n.maxFiles || c.files.value.length < _.value) && (void 0 === n.maxTotalSize || d.value < S.value))
          , q = e.computed(()=>!0 === v.value && !0 !== c.isBusy.value && !0 !== c.isUploading.value && c.queuedFiles.value.length > 0)
          , $ = e.computed(()=>0 === d.value ? 0 : c.uploadedSize.value / d.value)
          , M = e.computed(()=>qs($.value))
          , T = e.computed(()=>ze(d.value))
          , B = e.computed(()=>"q-uploader column no-wrap" + (!0 === s.value ? " q-uploader--dark q-dark" : "") + (!0 === n.bordered ? " q-uploader--bordered" : "") + (!0 === n.square ? " q-uploader--square no-border-radius" : "") + (!0 === n.flat ? " q-uploader--flat no-shadow" : "") + (!0 === n.disable ? " disabled q-uploader--disable" : "") + (!0 === p.value ? " q-uploader--dnd" : ""))
          , z = e.computed(()=>"q-uploader__header" + (void 0 !== n.color ? ` bg-${n.color}` : "") + (void 0 !== n.textColor ? ` text-${n.textColor}` : ""));
        function O() {
            !1 === n.disable && (c.abort(),
            c.uploadedSize.value = 0,
            d.value = 0,
            P(),
            c.files.value = [],
            c.queuedFiles.value = [],
            c.uploadedFiles.value = [])
        }
        function V() {
            !1 === n.disable && E(["uploaded"], ()=>{
                c.uploadedFiles.value = []
            }
            )
        }
        function L() {
            E(["idle", "failed"], ({size: e})=>{
                d.value -= e,
                c.queuedFiles.value = []
            }
            )
        }
        function E(e, t) {
            if (!0 === n.disable)
                return;
            const o = {
                files: [],
                size: 0
            }
              , a = c.files.value.filter(t=>{
                return -1 === e.indexOf(t.__status) || (o.size += t.size,
                o.files.push(t),
                void 0 !== t.__img && window.URL.revokeObjectURL(t.__img.src),
                !1)
            }
            );
            o.files.length > 0 && (c.files.value = a,
            t(o),
            l("removed", o.files))
        }
        function A(e) {
            n.disable || ("uploaded" === e.__status ? c.uploadedFiles.value = c.uploadedFiles.value.filter(t=>t.__key !== e.__key) : "uploading" === e.__status ? e.__abort() : d.value -= e.size,
            c.files.value = c.files.value.filter(t=>{
                return t.__key !== e.__key || (void 0 !== t.__img && window.URL.revokeObjectURL(t.__img.src),
                !1)
            }
            ),
            c.queuedFiles.value = c.queuedFiles.value.filter(t=>t.__key !== e.__key),
            l("removed", [e]))
        }
        function P() {
            c.files.value.forEach(e=>{
                void 0 !== e.__img && window.URL.revokeObjectURL(e.__img.src)
            }
            )
        }
        function R() {
            return f.value || m.value.getElementsByClassName("q-uploader__input")[0]
        }
        function F(e, t) {
            const o = w(e, t, c.files.value, !0)
              , a = R();
            void 0 !== a && null !== a && (a.value = ""),
            void 0 !== o && (o.forEach(e=>{
                if (c.updateFileStatus(e, "idle"),
                d.value += e.size,
                !0 !== n.noThumbnails && e.type.toUpperCase().startsWith("IMAGE")) {
                    const t = new Image;
                    t.src = window.URL.createObjectURL(e),
                    e.__img = t
                }
            }
            ),
            c.files.value = c.files.value.concat(o),
            c.queuedFiles.value = c.queuedFiles.value.concat(o),
            l("added", o),
            !0 === n.autoUpload && c.upload())
        }
        function I() {
            !0 === q.value && c.upload()
        }
        function N(t, o, n) {
            if (!0 === t) {
                const t = {
                    type: "a",
                    key: o,
                    icon: r.iconSet.uploader[o],
                    flat: !0,
                    dense: !0
                };
                let a = void 0;
                return "add" === o ? (t.onClick = h,
                a = j) : t.onClick = n,
                e.h(ho, t, a)
            }
        }
        function j() {
            return e.h("input", {
                ref: f,
                class: "q-uploader__input overflow-hidden absolute-full",
                tabindex: -1,
                type: "file",
                title: "",
                accept: n.accept,
                multiple: !0 === n.multiple ? "multiple" : void 0,
                capture: n.capture,
                onMousedown: C,
                onClick: h,
                onChange: F
            })
        }
        function D() {
            return void 0 !== a.header ? a.header(U.value) : [e.h("div", {
                class: "q-uploader__header-content column"
            }, [e.h("div", {
                class: "flex flex-center no-wrap q-gutter-xs"
            }, [N(c.queuedFiles.value.length > 0, "removeQueue", L), N(c.uploadedFiles.value.length > 0, "removeUploaded", V), !0 === c.isUploading.value ? e.h(Ht, {
                class: "q-uploader__spinner"
            }) : null, e.h("div", {
                class: "col column justify-center"
            }, [void 0 !== n.label ? e.h("div", {
                class: "q-uploader__title"
            }, [n.label]) : null, e.h("div", {
                class: "q-uploader__subtitle"
            }, [T.value + " / " + M.value])]), N(k.value, "add"), N(!1 === n.hideUploadBtn && !0 === q.value, "upload", c.upload), N(c.isUploading.value, "clear", c.abort)])])]
        }
        function H() {
            return void 0 !== a.list ? a.list(U.value) : c.files.value.map(t=>e.h("div", {
                key: t.__key,
                class: "q-uploader__file relative-position" + (!0 !== n.noThumbnails && void 0 !== t.__img ? " q-uploader__file--img" : "") + ("failed" === t.__status ? " q-uploader__file--failed" : "uploaded" === t.__status ? " q-uploader__file--uploaded" : ""),
                style: !0 !== n.noThumbnails && void 0 !== t.__img ? {
                    backgroundImage: 'url("' + t.__img.src + '")'
                } : null
            }, [e.h("div", {
                class: "q-uploader__file-header row flex-center no-wrap"
            }, ["failed" === t.__status ? e.h(ft, {
                class: "q-uploader__file-status",
                name: r.iconSet.type.negative,
                color: "negative"
            }) : null, e.h("div", {
                class: "q-uploader__file-header-content col"
            }, [e.h("div", {
                class: "q-uploader__title"
            }, [t.name]), e.h("div", {
                class: "q-uploader__subtitle row items-center no-wrap"
            }, [t.__sizeLabel + " / " + t.__progressLabel])]), "uploading" === t.__status ? e.h(Ba, {
                value: t.__progress,
                min: 0,
                max: 1,
                indeterminate: 0 === t.__progress
            }) : e.h(ho, {
                round: !0,
                dense: !0,
                flat: !0,
                icon: r.iconSet.uploader["uploaded" === t.__status ? "done" : "clear"],
                onClick: ()=>{
                    A(t)
                }
            })])]))
        }
        e.watch(c.isUploading, (e,t)=>{
            !1 === t && !0 === e ? l("start") : !0 === t && !1 === e && l("finish")
        }
        ),
        e.onBeforeUnmount(()=>{
            !0 === c.isUploading.value && c.abort(),
            c.files.value.length > 0 && P()
        }
        );
        const Q = {
            pickFiles: h,
            addFiles: g,
            reset: O,
            removeUploadedFiles: V,
            removeQueuedFiles: L,
            removeFile: A,
            upload: I,
            abort: c.abort
        }
          , U = e.computed(()=>{
            const t = {
                canAddFiles: k.value,
                canUpload: q.value,
                uploadSizeLabel: T.value,
                uploadProgressLabel: M.value
            };
            for (const o in c)
                t[o] = !0 === e.isRef(c[o]) ? c[o].value : c[o];
            return {
                ...t,
                ...Q
            }
        }
        );
        return Object.assign(i, Q),
        ()=>{
            const t = [e.h("div", {
                class: z.value
            }, D()), e.h("div", {
                class: "q-uploader__list scroll"
            }, H()), x("uploader")];
            !0 === c.isBusy.value && t.push(e.h("div", {
                class: "q-uploader__overlay absolute-full flex flex-center"
            }, [e.h(Ht)]));
            const o = {
                ref: m,
                class: B.value
            };
            return !0 === k.value && Object.assign(o, {
                onDragover: b,
                onDragleave: y
            }),
            e.h("div", o, t)
        }
    }
    const Bs = ()=>!0;
    function zs(e) {
        const t = {};
        return e.forEach(e=>{
            t[e] = Bs
        }
        ),
        t
    }
    const Os = zs(Ms);
    var Vs = ({name: e, props: t, emits: o, injectPlugin: n})=>Me({
        name: e,
        props: {
            ...$s,
            ...t
        },
        emits: !0 === ye(o) ? {
            ...Os,
            ...o
        } : [...Ms, ...o],
        setup() {
            return Ts(n)
        }
    });
    function Ls(e) {
        setTimeout(()=>{
            window.URL.revokeObjectURL(e.href)
        }
        , 1e4),
        e.remove()
    }
    function Es(e, t, o={}) {
        const {mimeType: n, byteOrderMark: a, encoding: l} = "string" === typeof o ? {
            mimeType: o
        } : o
          , i = void 0 !== l ? new TextEncoder(l).encode([t]) : t
          , r = void 0 !== a ? [a, i] : [i]
          , s = new Blob(r,{
            type: n || "application/octet-stream"
        })
          , u = document.createElement("a");
        u.href = window.URL.createObjectURL(s),
        u.setAttribute("download", e),
        "undefined" === typeof u.download && u.setAttribute("target", "_blank"),
        u.classList.add("hidden"),
        u.style.position = "fixed",
        document.body.appendChild(u);
        try {
            return u.click(),
            Ls(u),
            !0
        } catch (e) {
            return Ls(u),
            e
        }
    }
    function As(e) {
        let t, o, n = !1;
        function a() {
            o = arguments,
            !0 !== n && (n = !0,
            t = requestAnimationFrame(()=>{
                e.apply(this, o),
                o = void 0,
                n = !1
            }
            ))
        }
        return a.cancel = (()=>{
            window.cancelAnimationFrame(t),
            n = !1
        }
        ),
        a
    }
    function Ps(e, t=document.body) {
        if ("string" !== typeof e)
            throw new TypeError("Expected a string as propName");
        if (!(t instanceof Element))
            throw new TypeError("Expected a DOM element");
        return getComputedStyle(t).getPropertyValue(`--q-${e}`).trim() || null
    }
    let Rs = 0
      , Fs = void 0;
    function Is(e, t) {
        void 0 === Fs && (Fs = document.createElement("div"),
        Fs.style.cssText = "position: absolute; left: 0; top: 0",
        document.body.appendChild(Fs));
        const o = e.getBoundingClientRect()
          , n = Fs.getBoundingClientRect()
          , {marginLeft: a, marginRight: l, marginTop: i, marginBottom: r} = window.getComputedStyle(e)
          , s = parseInt(a, 10) + parseInt(l, 10)
          , u = parseInt(i, 10) + parseInt(r, 10);
        return {
            left: o.left - n.left,
            top: o.top - n.top,
            width: o.right - o.left,
            height: o.bottom - o.top,
            widthM: o.right - o.left + (!0 === t ? 0 : s),
            heightM: o.bottom - o.top + (!0 === t ? 0 : u),
            marginH: !0 === t ? s : 0,
            marginV: !0 === t ? u : 0
        }
    }
    function Ns(e) {
        return {
            width: e.scrollWidth,
            height: e.scrollHeight
        }
    }
    const js = ["Top", "Right", "Bottom", "Left"]
      , Ds = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"]
      , Hs = /-block|-inline|block-|inline-/
      , Qs = /(-block|-inline|block-|inline-).*:/;
    function Us(e, t) {
        const o = window.getComputedStyle(e)
          , n = {};
        for (let a = 0; a < t.length; a++) {
            const e = t[a];
            if ("" === o[e])
                if ("cssText" === e) {
                    const t = o.length;
                    let a = "";
                    for (let e = 0; e < t; e++)
                        !0 !== Hs.test(o[e]) && (a += o[e] + ": " + o[o[e]] + "; ");
                    n[e] = a
                } else if (["borderWidth", "borderStyle", "borderColor"].indexOf(e) > -1) {
                    const t = e.replace("border", "");
                    let a = "";
                    for (let e = 0; e < js.length; e++) {
                        const n = "border" + js[e] + t;
                        a += o[n] + " "
                    }
                    n[e] = a
                } else if ("borderRadius" === e) {
                    let t = ""
                      , a = "";
                    for (let e = 0; e < Ds.length; e++) {
                        const n = o[Ds[e]].split(" ");
                        t += n[0] + " ",
                        a += (void 0 === n[1] ? n[0] : n[1]) + " "
                    }
                    n[e] = t + "/ " + a
                } else
                    n[e] = o[e];
            else
                n[e] = "cssText" === e ? o[e].split(";").filter(e=>!0 !== Qs.test(e)).join(";") : o[e]
        }
        return n
    }
    const Ws = ["absolute", "fixed", "relative", "sticky"];
    function Ys(e) {
        let t = e
          , o = 0;
        while (null !== t && t !== document) {
            const {position: n, zIndex: a} = window.getComputedStyle(t)
              , l = Number(a);
            l > o && (t === e || !0 === Ws.includes(n)) && (o = l),
            t = t.parentNode
        }
        return o
    }
    function Ks(e) {
        return {
            from: e.from,
            to: void 0 !== e.to ? e.to : e.from
        }
    }
    function Xs(e) {
        return "number" === typeof e ? e = {
            duration: e
        } : "function" === typeof e && (e = {
            onEnd: e
        }),
        {
            ...e,
            waitFor: void 0 === e.waitFor ? 0 : e.waitFor,
            duration: !0 === isNaN(e.duration) ? 300 : parseInt(e.duration, 10),
            easing: "string" === typeof e.easing && e.easing.length > 0 ? e.easing : "ease-in-out",
            delay: !0 === isNaN(e.delay) ? 0 : parseInt(e.delay, 10),
            fill: "string" === typeof e.fill && e.fill.length > 0 ? e.fill : "none",
            resize: !0 === e.resize,
            useCSS: !0 === e.useCSS,
            hideFromClone: !0 === e.hideFromClone,
            keepToClone: !0 === e.keepToClone,
            tween: !0 === e.tween,
            tweenFromOpacity: !0 === isNaN(e.tweenFromOpacity) ? .6 : parseFloat(e.tweenFromOpacity),
            tweenToOpacity: !0 === isNaN(e.tweenToOpacity) ? .5 : parseFloat(e.tweenToOpacity)
        }
    }
    function Zs(e) {
        const t = typeof e;
        return "function" === t ? e() : "string" === t ? document.querySelector(e) : e
    }
    function Gs(e) {
        return e && e.ownerDocument === document && null !== e.parentNode
    }
    function Js(e) {
        let t = ()=>!1
          , o = !1
          , n = !0;
        const a = Ks(e)
          , l = Xs(e)
          , i = Zs(a.from);
        if (!0 !== Gs(i))
            return t;
        "function" === typeof i.qMorphCancel && i.qMorphCancel();
        let r = void 0
          , s = void 0
          , u = void 0
          , c = void 0;
        const d = i.parentNode
          , v = i.nextElementSibling
          , p = Is(i, l.resize)
          , {width: m, height: f} = Ns(d)
          , {borderWidth: h, borderStyle: g, borderColor: b, borderRadius: y, backgroundColor: w, transform: x, position: _, cssText: S} = Us(i, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"])
          , k = i.classList.toString()
          , C = i.style.cssText
          , q = i.cloneNode(!0)
          , $ = !0 === l.tween ? i.cloneNode(!0) : void 0;
        void 0 !== $ && ($.className = $.classList.toString().split(" ").filter(e=>!1 === /^bg-/.test(e)).join(" ")),
        !0 === l.hideFromClone && q.classList.add("q-morph--internal"),
        q.setAttribute("aria-hidden", "true"),
        q.style.transition = "none",
        q.style.animation = "none",
        q.style.pointerEvents = "none",
        d.insertBefore(q, v),
        i.qMorphCancel = (()=>{
            o = !0,
            q.remove(),
            void 0 !== $ && $.remove(),
            !0 === l.hideFromClone && q.classList.remove("q-morph--internal"),
            i.qMorphCancel = void 0
        }
        );
        const M = ()=>{
            const e = Zs(a.to);
            if (!0 === o || !0 !== Gs(e))
                return void ("function" === typeof i.qMorphCancel && i.qMorphCancel());
            i !== e && "function" === typeof e.qMorphCancel && e.qMorphCancel(),
            !0 !== l.keepToClone && e.classList.add("q-morph--internal"),
            q.classList.add("q-morph--internal");
            const {width: v, height: M} = Ns(d)
              , {width: T, height: B} = Ns(e.parentNode);
            !0 !== l.hideFromClone && q.classList.remove("q-morph--internal"),
            e.qMorphCancel = (()=>{
                o = !0,
                q.remove(),
                void 0 !== $ && $.remove(),
                !0 === l.hideFromClone && q.classList.remove("q-morph--internal"),
                !0 !== l.keepToClone && e.classList.remove("q-morph--internal"),
                i.qMorphCancel = void 0,
                e.qMorphCancel = void 0
            }
            );
            const z = ()=>{
                if (!0 === o)
                    return void ("function" === typeof e.qMorphCancel && e.qMorphCancel());
                !0 !== l.hideFromClone && (q.classList.add("q-morph--internal"),
                q.innerHTML = "",
                q.style.left = 0,
                q.style.right = "unset",
                q.style.top = 0,
                q.style.bottom = "unset",
                q.style.transform = "none"),
                !0 !== l.keepToClone && e.classList.remove("q-morph--internal");
                const a = e.parentNode
                  , {width: z, height: O} = Ns(a)
                  , V = e.cloneNode(l.keepToClone);
                V.setAttribute("aria-hidden", "true"),
                !0 !== l.keepToClone && (V.style.left = 0,
                V.style.right = "unset",
                V.style.top = 0,
                V.style.bottom = "unset",
                V.style.transform = "none",
                V.style.pointerEvents = "none"),
                V.classList.add("q-morph--internal");
                const L = e === i && d === a ? q : e.nextElementSibling;
                a.insertBefore(V, L);
                const {borderWidth: E, borderStyle: A, borderColor: P, borderRadius: R, backgroundColor: F, transform: I, position: N, cssText: j} = Us(e, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"])
                  , D = e.classList.toString()
                  , H = e.style.cssText;
                e.style.cssText = j,
                e.style.transform = "none",
                e.style.animation = "none",
                e.style.transition = "none",
                e.className = D.split(" ").filter(e=>!1 === /^bg-/.test(e)).join(" ");
                const Q = Is(e, l.resize)
                  , U = p.left - Q.left
                  , W = p.top - Q.top
                  , Y = p.width / (Q.width > 0 ? Q.width : 10)
                  , K = p.height / (Q.height > 0 ? Q.height : 100)
                  , X = m - v
                  , Z = f - M
                  , G = z - T
                  , J = O - B
                  , ee = Math.max(p.widthM, X)
                  , te = Math.max(p.heightM, Z)
                  , oe = Math.max(Q.widthM, G)
                  , ne = Math.max(Q.heightM, J)
                  , ae = i === e && !1 === ["absolute", "fixed"].includes(N) && !1 === ["absolute", "fixed"].includes(_);
                let le = "fixed" === N
                  , ie = a;
                while (!0 !== le && ie !== document)
                    le = "fixed" === window.getComputedStyle(ie).position,
                    ie = ie.parentNode;
                if (!0 !== l.hideFromClone && (q.style.display = "block",
                q.style.flex = "0 0 auto",
                q.style.opacity = 0,
                q.style.minWidth = "unset",
                q.style.maxWidth = "unset",
                q.style.minHeight = "unset",
                q.style.maxHeight = "unset",
                q.classList.remove("q-morph--internal")),
                !0 !== l.keepToClone && (V.style.display = "block",
                V.style.flex = "0 0 auto",
                V.style.opacity = 0,
                V.style.minWidth = "unset",
                V.style.maxWidth = "unset",
                V.style.minHeight = "unset",
                V.style.maxHeight = "unset"),
                V.classList.remove("q-morph--internal"),
                "string" === typeof l.classes && (e.className += " " + l.classes),
                "string" === typeof l.style)
                    e.style.cssText += " " + l.style;
                else if (!0 === ye(l.style))
                    for (const t in l.style)
                        e.style[t] = l.style[t];
                const re = Ys(q)
                  , se = Ys(e)
                  , ue = !0 === le ? document.documentElement : {
                    scrollLeft: 0,
                    scrollTop: 0
                };
                e.style.position = !0 === le ? "fixed" : "absolute",
                e.style.left = `${Q.left - ue.scrollLeft}px`,
                e.style.right = "unset",
                e.style.top = `${Q.top - ue.scrollTop}px`,
                e.style.margin = 0,
                !0 === l.resize && (e.style.minWidth = "unset",
                e.style.maxWidth = "unset",
                e.style.minHeight = "unset",
                e.style.maxHeight = "unset",
                e.style.overflow = "hidden",
                e.style.overflowX = "hidden",
                e.style.overflowY = "hidden"),
                document.body.appendChild(e),
                void 0 !== $ && ($.style.cssText = S,
                $.style.transform = "none",
                $.style.animation = "none",
                $.style.transition = "none",
                $.style.position = e.style.position,
                $.style.left = `${p.left - ue.scrollLeft}px`,
                $.style.right = "unset",
                $.style.top = `${p.top - ue.scrollTop}px`,
                $.style.margin = 0,
                $.style.pointerEvents = "none",
                !0 === l.resize && ($.style.minWidth = "unset",
                $.style.maxWidth = "unset",
                $.style.minHeight = "unset",
                $.style.maxHeight = "unset",
                $.style.overflow = "hidden",
                $.style.overflowX = "hidden",
                $.style.overflowY = "hidden"),
                document.body.appendChild($));
                const ce = o=>{
                    i === e && !0 !== n ? (e.style.cssText = C,
                    e.className = k) : (e.style.cssText = H,
                    e.className = D),
                    V.parentNode === a && a.insertBefore(e, V),
                    q.remove(),
                    V.remove(),
                    void 0 !== $ && $.remove(),
                    t = (()=>!1),
                    i.qMorphCancel = void 0,
                    e.qMorphCancel = void 0,
                    "function" === typeof l.onEnd && l.onEnd(!0 === n ? "to" : "from", !0 === o)
                }
                ;
                if (!0 !== l.useCSS && "function" === typeof e.animate) {
                    const a = !0 === l.resize ? {
                        transform: `translate(${U}px, ${W}px)`,
                        width: `${ee}px`,
                        height: `${te}px`
                    } : {
                        transform: `translate(${U}px, ${W}px) scale(${Y}, ${K})`
                    }
                      , d = !0 === l.resize ? {
                        width: `${oe}px`,
                        height: `${ne}px`
                    } : {}
                      , v = !0 === l.resize ? {
                        width: `${ee}px`,
                        height: `${te}px`
                    } : {}
                      , m = !0 === l.resize ? {
                        transform: `translate(${-1 * U}px, ${-1 * W}px)`,
                        width: `${oe}px`,
                        height: `${ne}px`
                    } : {
                        transform: `translate(${-1 * U}px, ${-1 * W}px) scale(${1 / Y}, ${1 / K})`
                    }
                      , f = void 0 !== $ ? {
                        opacity: l.tweenToOpacity
                    } : {
                        backgroundColor: w
                    }
                      , _ = void 0 !== $ ? {
                        opacity: 1
                    } : {
                        backgroundColor: F
                    };
                    c = e.animate([{
                        margin: 0,
                        borderWidth: h,
                        borderStyle: g,
                        borderColor: b,
                        borderRadius: y,
                        zIndex: re,
                        transformOrigin: "0 0",
                        ...a,
                        ...f
                    }, {
                        margin: 0,
                        borderWidth: E,
                        borderStyle: A,
                        borderColor: P,
                        borderRadius: R,
                        zIndex: se,
                        transformOrigin: "0 0",
                        transform: I,
                        ...d,
                        ..._
                    }], {
                        duration: l.duration,
                        easing: l.easing,
                        fill: l.fill,
                        delay: l.delay
                    }),
                    s = void 0 === $ ? void 0 : $.animate([{
                        opacity: l.tweenFromOpacity,
                        margin: 0,
                        borderWidth: h,
                        borderStyle: g,
                        borderColor: b,
                        borderRadius: y,
                        zIndex: re,
                        transformOrigin: "0 0",
                        transform: x,
                        ...v
                    }, {
                        opacity: 0,
                        margin: 0,
                        borderWidth: E,
                        borderStyle: A,
                        borderColor: P,
                        borderRadius: R,
                        zIndex: se,
                        transformOrigin: "0 0",
                        ...m
                    }], {
                        duration: l.duration,
                        easing: l.easing,
                        fill: l.fill,
                        delay: l.delay
                    }),
                    r = !0 === l.hideFromClone || !0 === ae ? void 0 : q.animate([{
                        margin: `${Z < 0 ? Z / 2 : 0}px ${X < 0 ? X / 2 : 0}px`,
                        width: `${ee + p.marginH}px`,
                        height: `${te + p.marginV}px`
                    }, {
                        margin: 0,
                        width: 0,
                        height: 0
                    }], {
                        duration: l.duration,
                        easing: l.easing,
                        fill: l.fill,
                        delay: l.delay
                    }),
                    u = !0 === l.keepToClone ? void 0 : V.animate([!0 === ae ? {
                        margin: `${Z < 0 ? Z / 2 : 0}px ${X < 0 ? X / 2 : 0}px`,
                        width: `${ee + p.marginH}px`,
                        height: `${te + p.marginV}px`
                    } : {
                        margin: 0,
                        width: 0,
                        height: 0
                    }, {
                        margin: `${J < 0 ? J / 2 : 0}px ${G < 0 ? G / 2 : 0}px`,
                        width: `${oe + Q.marginH}px`,
                        height: `${ne + Q.marginV}px`
                    }], {
                        duration: l.duration,
                        easing: l.easing,
                        fill: l.fill,
                        delay: l.delay
                    });
                    const S = e=>{
                        void 0 !== r && r.cancel(),
                        void 0 !== s && s.cancel(),
                        void 0 !== u && u.cancel(),
                        c.cancel(),
                        c.removeEventListener("finish", S),
                        c.removeEventListener("cancel", S),
                        ce(e),
                        r = void 0,
                        s = void 0,
                        u = void 0,
                        c = void 0
                    }
                    ;
                    i.qMorphCancel = (()=>{
                        i.qMorphCancel = void 0,
                        o = !0,
                        S()
                    }
                    ),
                    e.qMorphCancel = (()=>{
                        e.qMorphCancel = void 0,
                        o = !0,
                        S()
                    }
                    ),
                    c.addEventListener("finish", S),
                    c.addEventListener("cancel", S),
                    t = (e=>{
                        return !0 !== o && void 0 !== c && (!0 === e ? (S(!0),
                        !0) : (n = !0 !== n,
                        void 0 !== r && r.reverse(),
                        void 0 !== s && s.reverse(),
                        void 0 !== u && u.reverse(),
                        c.reverse(),
                        !0))
                    }
                    )
                } else {
                    const a = `q-morph-anim-${++Rs}`
                      , r = document.createElement("style")
                      , s = !0 === l.resize ? `\n            transform: translate(${U}px, ${W}px);\n            width: ${ee}px;\n            height: ${te}px;\n          ` : `transform: translate(${U}px, ${W}px) scale(${Y}, ${K});`
                      , u = !0 === l.resize ? `\n            width: ${oe}px;\n            height: ${ne}px;\n          ` : ""
                      , c = !0 === l.resize ? `\n            width: ${ee}px;\n            height: ${te}px;\n          ` : ""
                      , d = !0 === l.resize ? `\n            transform: translate(${-1 * U}px, ${-1 * W}px);\n            width: ${oe}px;\n            height: ${ne}px;\n          ` : `transform: translate(${-1 * U}px, ${-1 * W}px) scale(${1 / Y}, ${1 / K});`
                      , v = void 0 !== $ ? `opacity: ${l.tweenToOpacity};` : `background-color: ${w};`
                      , m = void 0 !== $ ? "opacity: 1;" : `background-color: ${F};`
                      , f = void 0 === $ ? "" : `\n            @keyframes ${a}-from-tween {\n              0% {\n                opacity: ${l.tweenFromOpacity};\n                margin: 0;\n                border-width: ${h};\n                border-style: ${g};\n                border-color: ${b};\n                border-radius: ${y};\n                z-index: ${re};\n                transform-origin: 0 0;\n                transform: ${x};\n                ${c}\n              }\n\n              100% {\n                opacity: 0;\n                margin: 0;\n                border-width: ${E};\n                border-style: ${A};\n                border-color: ${P};\n                border-radius: ${R};\n                z-index: ${se};\n                transform-origin: 0 0;\n                ${d}\n              }\n            }\n          `
                      , _ = !0 === l.hideFromClone || !0 === ae ? "" : `\n            @keyframes ${a}-from {\n              0% {\n                margin: ${Z < 0 ? Z / 2 : 0}px ${X < 0 ? X / 2 : 0}px;\n                width: ${ee + p.marginH}px;\n                height: ${te + p.marginV}px;\n              }\n\n              100% {\n                margin: 0;\n                width: 0;\n                height: 0;\n              }\n            }\n          `
                      , S = !0 === ae ? `\n            margin: ${Z < 0 ? Z / 2 : 0}px ${X < 0 ? X / 2 : 0}px;\n            width: ${ee + p.marginH}px;\n            height: ${te + p.marginV}px;\n          ` : "\n            margin: 0;\n            width: 0;\n            height: 0;\n          "
                      , k = !0 === l.keepToClone ? "" : `\n            @keyframes ${a}-to {\n              0% {\n                ${S}\n              }\n\n              100% {\n                margin: ${J < 0 ? J / 2 : 0}px ${G < 0 ? G / 2 : 0}px;\n                width: ${oe + Q.marginH}px;\n                height: ${ne + Q.marginV}px;\n              }\n            }\n          `;
                    r.innerHTML = `\n          @keyframes ${a} {\n            0% {\n              margin: 0;\n              border-width: ${h};\n              border-style: ${g};\n              border-color: ${b};\n              border-radius: ${y};\n              background-color: ${w};\n              z-index: ${re};\n              transform-origin: 0 0;\n              ${s}\n              ${v}\n            }\n\n            100% {\n              margin: 0;\n              border-width: ${E};\n              border-style: ${A};\n              border-color: ${P};\n              border-radius: ${R};\n              background-color: ${F};\n              z-index: ${se};\n              transform-origin: 0 0;\n              transform: ${I};\n              ${u}\n              ${m}\n            }\n          }\n\n          ${_}\n\n          ${f}\n\n          ${k}\n        `,
                    document.head.appendChild(r);
                    let C = "normal";
                    q.style.animation = `${l.duration}ms ${l.easing} ${l.delay}ms ${C} ${l.fill} ${a}-from`,
                    void 0 !== $ && ($.style.animation = `${l.duration}ms ${l.easing} ${l.delay}ms ${C} ${l.fill} ${a}-from-tween`),
                    V.style.animation = `${l.duration}ms ${l.easing} ${l.delay}ms ${C} ${l.fill} ${a}-to`,
                    e.style.animation = `${l.duration}ms ${l.easing} ${l.delay}ms ${C} ${l.fill} ${a}`;
                    const M = t=>{
                        t === Object(t) && t.animationName !== a || (e.removeEventListener("animationend", M),
                        e.removeEventListener("animationcancel", M),
                        ce(),
                        r.remove())
                    }
                    ;
                    i.qMorphCancel = (()=>{
                        i.qMorphCancel = void 0,
                        o = !0,
                        M()
                    }
                    ),
                    e.qMorphCancel = (()=>{
                        e.qMorphCancel = void 0,
                        o = !0,
                        M()
                    }
                    ),
                    e.addEventListener("animationend", M),
                    e.addEventListener("animationcancel", M),
                    t = (t=>{
                        return !!(!0 !== o && e && q && V) && (!0 === t ? (M(),
                        !0) : (n = !0 !== n,
                        C = "normal" === C ? "reverse" : "normal",
                        q.style.animationDirection = C,
                        $.style.animationDirection = C,
                        V.style.animationDirection = C,
                        e.style.animationDirection = C,
                        !0))
                    }
                    )
                }
            }
            ;
            if (l.waitFor > 0 || "transitionend" === l.waitFor || l.waitFor === Object(l.waitFor) && "function" === typeof l.waitFor.then) {
                const t = l.waitFor > 0 ? new Promise(e=>setTimeout(e, l.waitFor)) : "transitionend" === l.waitFor ? new Promise(t=>{
                    const o = setTimeout(()=>{
                        n()
                    }
                    , 400)
                      , n = a=>{
                        clearTimeout(o),
                        e && (e.removeEventListener("transitionend", n),
                        e.removeEventListener("transitioncancel", n)),
                        t()
                    }
                    ;
                    e.addEventListener("transitionend", n),
                    e.addEventListener("transitioncancel", n)
                }
                ) : l.waitFor;
                t.then(z).catch(()=>{
                    "function" === typeof e.qMorphCancel && e.qMorphCancel()
                }
                )
            } else
                z()
        }
        ;
        return "function" === typeof e.onToggle && e.onToggle(),
        requestAnimationFrame(M),
        e=>t(e)
    }
    function eu(e) {
        const t = Object.assign({
            noopener: !0
        }, e)
          , o = [];
        for (const n in t)
            !0 === t[n] && o.push(n);
        return o.join(",")
    }
    function tu(e, t, o) {
        let n = window.open;
        if (!0 === p.is.cordova)
            if (void 0 !== cordova && void 0 !== cordova.InAppBrowser && void 0 !== cordova.InAppBrowser.open)
                n = cordova.InAppBrowser.open;
            else if (void 0 !== navigator && void 0 !== navigator.app)
                return navigator.app.loadUrl(e, {
                    openExternal: !0
                });
        const a = n(e, "_blank", eu(o));
        if (a)
            return p.is.desktop && a.focus(),
            a;
        t && t()
    }
    var ou = (e,t,o)=>{
        if (!0 !== p.is.ios || void 0 === window.SafariViewController)
            return tu(e, t, o);
        window.SafariViewController.isAvailable(n=>{
            n ? window.SafariViewController.show({
                url: e
            }, h, t) : tu(e, t, o)
        }
        )
    }
      , nu = Object.freeze({
        __proto__: null,
        clone: ls,
        colors: Cl,
        copyToClipboard: rs,
        createMetaMixin: ws,
        createUploaderComponent: Vs,
        date: Ei,
        debounce: O,
        dom: eo,
        event: z,
        exportFile: Es,
        extend: Vr,
        format: Ae,
        frameDebounce: As,
        getCssVar: Ps,
        noop: h,
        morph: Js,
        openURL: ou,
        patterns: dl,
        scroll: un,
        setCssVar: Q,
        throttle: to,
        uid: Qr
    });
    const au = [!0, !1, "ondemand"]
      , lu = {
        modelValue: {},
        error: {
            type: Boolean,
            default: null
        },
        errorMessage: String,
        noErrorIcon: Boolean,
        rules: Array,
        reactiveRules: Boolean,
        lazyRules: {
            type: [Boolean, String],
            validator: e=>au.includes(e)
        }
    };
    function iu(o, n) {
        const {props: a, proxy: l} = e.getCurrentInstance()
          , i = e.ref(!1)
          , r = e.ref(null)
          , s = e.ref(null);
        as({
            validate: h,
            resetValidation: f
        });
        let u, c = 0;
        const d = e.computed(()=>void 0 !== a.rules && null !== a.rules && a.rules.length > 0)
          , v = e.computed(()=>!0 !== a.disable && !0 === d.value)
          , p = e.computed(()=>!0 === a.error || !0 === i.value)
          , m = e.computed(()=>"string" === typeof a.errorMessage && a.errorMessage.length > 0 ? a.errorMessage : r.value);
        function f() {
            c++,
            n.value = !1,
            s.value = null,
            i.value = !1,
            r.value = null,
            b.cancel()
        }
        function h(e=a.modelValue) {
            if (!0 !== v.value)
                return !0;
            const t = ++c;
            !0 !== n.value && !0 !== a.lazyRules && (s.value = !0);
            const o = (e,t)=>{
                i.value !== e && (i.value = e);
                const o = t || void 0;
                r.value !== o && (r.value = o),
                n.value = !1
            }
              , l = [];
            for (let n = 0; n < a.rules.length; n++) {
                const t = a.rules[n];
                let i;
                if ("function" === typeof t ? i = t(e) : "string" === typeof t && void 0 !== cl[t] && (i = cl[t](e)),
                !1 === i || "string" === typeof i)
                    return o(!0, i),
                    !1;
                !0 !== i && void 0 !== i && l.push(i)
            }
            return 0 === l.length ? (o(!1),
            !0) : (n.value = !0,
            Promise.all(l).then(e=>{
                if (void 0 === e || !1 === Array.isArray(e) || 0 === e.length)
                    return t === c && o(!1),
                    !0;
                const n = e.find(e=>!1 === e || "string" === typeof e);
                return t === c && o(void 0 !== n, n),
                void 0 === n
            }
            , e=>{
                return t === c && (console.error(e),
                o(!0)),
                !1
            }
            ))
        }
        function g(e) {
            !0 === v.value && "ondemand" !== a.lazyRules && (!0 === s.value || !0 !== a.lazyRules && !0 !== e) && b()
        }
        e.watch(()=>a.modelValue, ()=>{
            g()
        }
        ),
        e.watch(()=>a.reactiveRules, t=>{
            !0 === t ? void 0 === u && (u = e.watch(()=>a.rules, ()=>{
                g(!0)
            }
            )) : void 0 !== u && (u(),
            u = void 0)
        }
        , {
            immediate: !0
        }),
        e.watch(o, e=>{
            !0 === e ? null === s.value && (s.value = !1) : !1 === s.value && (s.value = !0,
            !0 === v.value && "ondemand" !== a.lazyRules && !1 === n.value && b())
        }
        );
        const b = O(h, 0);
        return e.onBeforeUnmount(()=>{
            void 0 !== u && u(),
            b.cancel()
        }
        ),
        Object.assign(l, {
            resetValidation: f,
            validate: h
        }),
        t(l, "hasError", ()=>p.value),
        {
            isDirtyModel: s,
            hasRules: d,
            hasError: p,
            errorMessage: m,
            validate: h,
            resetValidation: f
        }
    }
    function ru(e) {
        return void 0 === e ? `f_ ${Qr()}` : e
    }
    function su(e) {
        return void 0 !== e && null !== e && ("" + e).length > 0
    }
    const uu = {
        ...yt,
        ...lu,
        label: String,
        stackLabel: Boolean,
        hint: String,
        hideHint: Boolean,
        prefix: String,
        suffix: String,
        labelColor: String,
        color: String,
        bgColor: String,
        filled: Boolean,
        outlined: Boolean,
        borderless: Boolean,
        standout: [Boolean, String],
        square: Boolean,
        loading: Boolean,
        labelSlot: Boolean,
        bottomSlots: Boolean,
        hideBottomSpace: Boolean,
        rounded: Boolean,
        dense: Boolean,
        itemAligned: Boolean,
        counter: Boolean,
        clearable: Boolean,
        clearIcon: String,
        disable: Boolean,
        readonly: Boolean,
        autofocus: Boolean,
        for: String,
        maxlength: [Number, String]
    }
      , cu = ["update:modelValue", "clear", "focus", "blur", "popup-show", "popup-hide"];
    function du() {
        const {props: t, attrs: o, proxy: n, vnode: a} = e.getCurrentInstance()
          , l = wt(t, n.$q);
        return {
            isDark: l,
            editable: e.computed(()=>!0 !== t.disable && !0 !== t.readonly),
            innerLoading: e.ref(!1),
            focused: e.ref(!1),
            hasPopupOpen: !1,
            splitAttrs: $r(o, a),
            targetUid: e.ref(ru(t.for)),
            rootRef: e.ref(null),
            targetRef: e.ref(null),
            controlRef: e.ref(null)
        }
    }
    function vu(t) {
        const {props: o, emit: a, slots: l, attrs: i, proxy: r} = e.getCurrentInstance()
          , {$q: s} = r;
        let u;
        void 0 === t.hasValue && (t.hasValue = e.computed(()=>su(o.modelValue))),
        void 0 === t.emitValue && (t.emitValue = (e=>{
            a("update:modelValue", e)
        }
        )),
        void 0 === t.controlEvents && (t.controlEvents = {
            onFocusin: T,
            onFocusout: B
        }),
        Object.assign(t, {
            clearValue: z,
            onControlFocusin: T,
            onControlFocusout: B,
            focus: C
        }),
        void 0 === t.computedCounter && (t.computedCounter = e.computed(()=>{
            if (!1 !== o.counter) {
                const e = "string" === typeof o.modelValue || "number" === typeof o.modelValue ? ("" + o.modelValue).length : !0 === Array.isArray(o.modelValue) ? o.modelValue.length : 0
                  , t = void 0 !== o.maxlength ? o.maxlength : o.maxValues;
                return e + (void 0 !== t ? " / " + t : "")
            }
        }
        ));
        const {isDirtyModel: c, hasRules: d, hasError: v, errorMessage: p, resetValidation: m} = iu(t.focused, t.innerLoading)
          , f = void 0 !== t.floatingLabel ? e.computed(()=>!0 === o.stackLabel || !0 === t.focused.value || !0 === t.floatingLabel.value) : e.computed(()=>!0 === o.stackLabel || !0 === t.focused.value || !0 === t.hasValue.value)
          , h = e.computed(()=>!0 === o.bottomSlots || void 0 !== o.hint || !0 === d.value || !0 === o.counter || null !== o.error)
          , g = e.computed(()=>{
            return !0 === o.filled ? "filled" : !0 === o.outlined ? "outlined" : !0 === o.borderless ? "borderless" : o.standout ? "standout" : "standard"
        }
        )
          , b = e.computed(()=>`q-field row no-wrap items-start q-field--${g.value}` + (void 0 !== t.fieldClass ? ` ${t.fieldClass.value}` : "") + (!0 === o.rounded ? " q-field--rounded" : "") + (!0 === o.square ? " q-field--square" : "") + (!0 === f.value ? " q-field--float" : "") + (!0 === w.value ? " q-field--labeled" : "") + (!0 === o.dense ? " q-field--dense" : "") + (!0 === o.itemAligned ? " q-field--item-aligned q-item-type" : "") + (!0 === t.isDark.value ? " q-field--dark" : "") + (void 0 === t.getControl ? " q-field--auto-height" : "") + (!0 === t.focused.value ? " q-field--focused" : "") + (!0 === v.value ? " q-field--error" : "") + (!0 === v.value || !0 === t.focused.value ? " q-field--highlighted" : "") + (!0 !== o.hideBottomSpace && !0 === h.value ? " q-field--with-bottom" : "") + (!0 === o.disable ? " q-field--disabled" : !0 === o.readonly ? " q-field--readonly" : ""))
          , y = e.computed(()=>"q-field__control relative-position row no-wrap" + (void 0 !== o.bgColor ? ` bg-${o.bgColor}` : "") + (!0 === v.value ? " text-negative" : "string" === typeof o.standout && o.standout.length > 0 && !0 === t.focused.value ? ` ${o.standout}` : void 0 !== o.color ? ` text-${o.color}` : ""))
          , w = e.computed(()=>!0 === o.labelSlot || void 0 !== o.label)
          , x = e.computed(()=>"q-field__label no-pointer-events absolute ellipsis" + (void 0 !== o.labelColor && !0 !== v.value ? ` text-${o.labelColor}` : ""))
          , _ = e.computed(()=>({
            id: t.targetUid.value,
            editable: t.editable.value,
            focused: t.focused.value,
            floatingLabel: f.value,
            modelValue: o.modelValue,
            emitValue: t.emitValue
        }))
          , S = e.computed(()=>{
            const e = {
                for: t.targetUid.value
            };
            return !0 === o.disable ? e["aria-disabled"] = "true" : !0 === o.readonly && (e["aria-readonly"] = "true"),
            e
        }
        );
        function k() {
            const e = document.activeElement;
            let o = void 0 !== t.targetRef && t.targetRef.value;
            !o || null !== e && e.id === t.targetUid.value || (!0 === o.hasAttribute("tabindex") || (o = o.querySelector("[tabindex]")),
            o && o !== e && o.focus({
                preventScroll: !0
            }))
        }
        function C() {
            Bo(k)
        }
        function M() {
            zo(k);
            const e = document.activeElement;
            null !== e && t.rootRef.value.contains(e) && e.blur()
        }
        function T(e) {
            clearTimeout(u),
            !0 === t.editable.value && !1 === t.focused.value && (t.focused.value = !0,
            a("focus", e))
        }
        function B(e, o) {
            clearTimeout(u),
            u = setTimeout(()=>{
                (!0 !== document.hasFocus() || !0 !== t.hasPopupOpen && void 0 !== t.controlRef && null !== t.controlRef.value && !1 === t.controlRef.value.contains(document.activeElement)) && (!0 === t.focused.value && (t.focused.value = !1,
                a("blur", e)),
                void 0 !== o && o())
            }
            )
        }
        function z(n) {
            if ($(n),
            !0 !== s.platform.is.mobile) {
                const e = void 0 !== t.targetRef && t.targetRef.value || t.rootRef.value;
                e.focus()
            } else
                !0 === t.rootRef.value.contains(document.activeElement) && document.activeElement.blur();
            "file" === o.type && (t.inputRef.value.value = null),
            a("update:modelValue", null),
            a("clear", o.modelValue),
            e.nextTick(()=>{
                m(),
                !0 !== s.platform.is.mobile && (c.value = !1)
            }
            )
        }
        function O() {
            const n = [];
            return void 0 !== l.prepend && n.push(e.h("div", {
                class: "q-field__prepend q-field__marginal row no-wrap items-center",
                key: "prepend",
                onClick: q
            }, l.prepend())),
            n.push(e.h("div", {
                class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
            }, V())),
            !0 === v.value && !1 === o.noErrorIcon && n.push(E("error", [e.h(ft, {
                name: s.iconSet.field.error,
                color: "negative"
            })])),
            !0 === o.loading || !0 === t.innerLoading.value ? n.push(E("inner-loading-append", void 0 !== l.loading ? l.loading() : [e.h(Ht, {
                color: o.color
            })])) : !0 === o.clearable && !0 === t.hasValue.value && !0 === t.editable.value && n.push(E("inner-clearable-append", [e.h(ft, {
                class: "q-field__focusable-action",
                tag: "button",
                name: o.clearIcon || s.iconSet.field.clear,
                tabindex: 0,
                type: "button",
                "aria-hidden": null,
                role: null,
                onClick: z
            })])),
            void 0 !== l.append && n.push(e.h("div", {
                class: "q-field__append q-field__marginal row no-wrap items-center",
                key: "append",
                onClick: q
            }, l.append())),
            void 0 !== t.getInnerAppend && n.push(E("inner-append", t.getInnerAppend())),
            void 0 !== t.getControlChild && n.push(t.getControlChild()),
            n
        }
        function V() {
            const n = [];
            return void 0 !== o.prefix && null !== o.prefix && n.push(e.h("div", {
                class: "q-field__prefix no-pointer-events row items-center"
            }, o.prefix)),
            void 0 !== t.getShadowControl && !0 === t.hasShadow.value && n.push(t.getShadowControl()),
            void 0 !== t.getControl ? n.push(t.getControl()) : void 0 !== l.rawControl ? n.push(l.rawControl()) : void 0 !== l.control && n.push(e.h("div", {
                ref: t.targetRef,
                class: "q-field__native row",
                tabindex: -1,
                ...t.splitAttrs.attributes.value,
                "data-autofocus": !0 === o.autofocus || void 0
            }, l.control(_.value))),
            !0 === w.value && n.push(e.h("div", {
                class: x.value
            }, Xe(l.label, o.label))),
            void 0 !== o.suffix && null !== o.suffix && n.push(e.h("div", {
                class: "q-field__suffix no-pointer-events row items-center"
            }, o.suffix)),
            n.concat(Xe(l.default))
        }
        function L() {
            let n, a;
            !0 === v.value ? null !== p.value ? (n = [e.h("div", {
                role: "alert"
            }, p.value)],
            a = `q--slot-error-${p.value}`) : (n = Xe(l.error),
            a = "q--slot-error") : !0 === o.hideHint && !0 !== t.focused.value || (void 0 !== o.hint ? (n = [e.h("div", o.hint)],
            a = `q--slot-hint-${o.hint}`) : (n = Xe(l.hint),
            a = "q--slot-hint"));
            const i = !0 === o.counter || void 0 !== l.counter;
            if (!0 === o.hideBottomSpace && !1 === i && void 0 === n)
                return;
            const r = e.h("div", {
                key: a,
                class: "q-field__messages col"
            }, n);
            return e.h("div", {
                class: "q-field__bottom row items-start q-field__bottom--" + (!0 !== o.hideBottomSpace ? "animated" : "stale")
            }, [!0 === o.hideBottomSpace ? r : e.h(e.Transition, {
                name: "q-transition--field-message"
            }, ()=>r), !0 === i ? e.h("div", {
                class: "q-field__counter"
            }, void 0 !== l.counter ? l.counter() : t.computedCounter.value) : null])
        }
        function E(t, o) {
            return null === o ? null : e.h("div", {
                key: t,
                class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
            }, o)
        }
        e.watch(()=>o.for, e=>{
            t.targetUid.value = ru(e)
        }
        ),
        Object.assign(r, {
            focus: C,
            blur: M
        });
        let A = !1;
        return e.onDeactivated(()=>{
            A = !0
        }
        ),
        e.onActivated(()=>{
            !0 === A && !0 === o.autofocus && r.focus()
        }
        ),
        e.onMounted(()=>{
            !0 === n.value && void 0 === o.for && (t.targetUid.value = ru()),
            !0 === o.autofocus && r.focus()
        }
        ),
        e.onBeforeUnmount(()=>{
            clearTimeout(u)
        }
        ),
        function() {
            const n = void 0 === t.getControl && void 0 === l.control ? {
                ...t.splitAttrs.attributes.value,
                "data-autofocus": !0 === o.autofocus || void 0,
                ...S.value
            } : S.value;
            return e.h("label", {
                ref: t.rootRef,
                class: [b.value, i.class],
                style: i.style,
                ...n
            }, [void 0 !== l.before ? e.h("div", {
                class: "q-field__before q-field__marginal row no-wrap items-center",
                onClick: q
            }, l.before()) : null, e.h("div", {
                class: "q-field__inner relative-position col self-stretch"
            }, [e.h("div", {
                ref: t.controlRef,
                class: y.value,
                tabindex: -1,
                ...t.controlEvents
            }, O()), !0 === h.value ? L() : null]), void 0 !== l.after ? e.h("div", {
                class: "q-field__after q-field__marginal row no-wrap items-center",
                onClick: q
            }, l.after()) : null])
        }
    }
    var pu = Me({
        name: "QField",
        inheritAttrs: !1,
        props: uu,
        emits: cu,
        setup() {
            return vu(du())
        }
    });
    function mu(t, o) {
        function n() {
            const e = t.modelValue;
            try {
                const t = "DataTransfer"in window ? new DataTransfer : "ClipboardEvent"in window ? new ClipboardEvent("").clipboardData : void 0;
                return Object(e) === e && ("length"in e ? Array.from(e) : [e]).forEach(e=>{
                    t.items.add(e)
                }
                ),
                {
                    files: t.files
                }
            } catch (e) {
                return {
                    files: void 0
                }
            }
        }
        return !0 === o ? e.computed(()=>{
            if ("file" === t.type)
                return n()
        }
        ) : e.computed(n)
    }
    var fu = Me({
        name: "QFile",
        inheritAttrs: !1,
        props: {
            ...uu,
            ...In,
            ...Ss,
            modelValue: [File, FileList, Array],
            append: Boolean,
            useChips: Boolean,
            displayValue: [String, Number],
            tabindex: {
                type: [String, Number],
                default: 0
            },
            counterLabel: Function,
            inputClass: [Array, String, Object],
            inputStyle: [Array, String, Object]
        },
        emits: [...cu, ...ks],
        setup(t, {slots: o, emit: n, attrs: a}) {
            const {proxy: l} = e.getCurrentInstance()
              , i = du()
              , r = e.ref(null)
              , s = e.ref(!1)
              , u = Dn(t)
              , {pickFiles: c, onDragover: d, onDragleave: v, processFiles: p, getDndNode: m} = Cs({
                editable: i.editable,
                dnd: s,
                getFileInput: B,
                addFilesToQueue: z
            })
              , f = mu(t)
              , h = e.computed(()=>Object(t.modelValue) === t.modelValue ? "length"in t.modelValue ? Array.from(t.modelValue) : [t.modelValue] : [])
              , g = e.computed(()=>su(h.value))
              , b = e.computed(()=>h.value.map(e=>e.name).join(", "))
              , y = e.computed(()=>ze(h.value.reduce((e,t)=>e + t.size, 0)))
              , w = e.computed(()=>({
                totalSize: y.value,
                filesNumber: h.value.length,
                maxFiles: t.maxFiles
            }))
              , x = e.computed(()=>({
                tabindex: -1,
                type: "file",
                title: "",
                accept: t.accept,
                capture: t.capture,
                name: u.value,
                ...a,
                id: i.targetUid.value,
                disabled: !0 !== i.editable.value
            }))
              , _ = e.computed(()=>"q-file q-field--auto-height" + (!0 === s.value ? " q-file--dnd" : ""))
              , S = e.computed(()=>!0 === t.multiple && !0 === t.append);
            function k(e) {
                const t = h.value.slice();
                t.splice(e, 1),
                $(t)
            }
            function C(e) {
                const t = h.value.findIndex(e);
                t > -1 && k(t)
            }
            function $(e) {
                n("update:modelValue", !0 === t.multiple ? e : e[0])
            }
            function M(e) {
                13 === e.keyCode && q(e)
            }
            function T(e) {
                13 !== e.keyCode && 32 !== e.keyCode || c(e)
            }
            function B() {
                return r.value
            }
            function z(e, o) {
                const n = p(e, o, h.value, S.value)
                  , a = B();
                void 0 !== a && null !== a && (a.value = ""),
                void 0 !== n && ((!0 === t.multiple ? t.modelValue && n.every(e=>h.value.includes(e)) : t.modelValue === n[0]) || $(!0 === S.value ? h.value.concat(n) : n))
            }
            function O() {
                return [e.h("input", {
                    class: [t.inputClass, "q-file__filler"],
                    style: t.inputStyle
                })]
            }
            function V() {
                if (void 0 !== o.file)
                    return 0 === h.value.length ? O() : h.value.map((e,t)=>o.file({
                        index: t,
                        file: e,
                        ref: this
                    }));
                if (void 0 !== o.selected)
                    return 0 === h.value.length ? O() : o.selected({
                        files: h.value,
                        ref: this
                    });
                if (!0 === t.useChips)
                    return 0 === h.value.length ? O() : h.value.map((o,n)=>e.h(ka, {
                        key: "file-" + n,
                        removable: i.editable.value,
                        dense: !0,
                        textColor: t.color,
                        tabindex: t.tabindex,
                        onRemove: ()=>{
                            k(n)
                        }
                    }, ()=>e.h("span", {
                        class: "ellipsis",
                        textContent: o.name
                    })));
                const n = void 0 !== t.displayValue ? t.displayValue : b.value;
                return n.length > 0 ? [e.h("div", {
                    class: t.inputClass,
                    style: t.inputStyle,
                    textContent: n
                })] : O()
            }
            function L() {
                const o = {
                    ref: r,
                    ...x.value,
                    ...f.value,
                    class: "q-field__input fit absolute-full cursor-pointer",
                    onChange: z
                };
                return !0 === t.multiple && (o.multiple = !0),
                e.h("input", o)
            }
            return Object.assign(i, {
                fieldClass: _,
                emitValue: $,
                hasValue: g,
                inputRef: r,
                innerValue: h,
                floatingLabel: e.computed(()=>!0 === g.value || su(t.displayValue)),
                computedCounter: e.computed(()=>{
                    if (void 0 !== t.counterLabel)
                        return t.counterLabel(w.value);
                    const e = t.maxFiles;
                    return `${h.value.length}${void 0 !== e ? " / " + e : ""} (${y.value})`
                }
                ),
                getControlChild: ()=>m("file"),
                getControl: ()=>{
                    const o = {
                        ref: i.targetRef,
                        class: "q-field__native row items-center cursor-pointer",
                        tabindex: t.tabindex
                    };
                    return !0 === i.editable.value && Object.assign(o, {
                        onDragover: d,
                        onDragleave: v,
                        onKeydown: M,
                        onKeyup: T
                    }),
                    e.h("div", o, [L()].concat(V()))
                }
            }),
            Object.assign(l, {
                removeAtIndex: k,
                removeFile: C,
                getNativeElement: ()=>r.value
            }),
            vu(i)
        }
    })
      , hu = Me({
        name: "QFooter",
        props: {
            modelValue: {
                type: Boolean,
                default: !0
            },
            reveal: Boolean,
            bordered: Boolean,
            elevated: Boolean,
            heightHint: {
                type: [String, Number],
                default: 50
            }
        },
        emits: ["reveal", "focusin"],
        setup(t, {slots: o, emit: a}) {
            const {proxy: {$q: l}} = e.getCurrentInstance()
              , i = e.inject(ie, ()=>{
                console.error("QFooter needs to be child of QLayout")
            }
            )
              , r = e.ref(parseInt(t.heightHint, 10))
              , s = e.ref(!0)
              , u = e.ref(!0 === n.value || !0 === i.isContainer.value ? 0 : window.innerHeight)
              , c = e.computed(()=>!0 === t.reveal || i.view.value.indexOf("F") > -1 || l.platform.is.ios && !0 === i.isContainer.value)
              , d = e.computed(()=>!0 === i.isContainer.value ? i.containerHeight.value : u.value)
              , v = e.computed(()=>{
                if (!0 !== t.modelValue)
                    return 0;
                if (!0 === c.value)
                    return !0 === s.value ? r.value : 0;
                const e = i.scroll.value.position + d.value + r.value - i.height.value;
                return e > 0 ? e : 0
            }
            )
              , p = e.computed(()=>!0 !== t.modelValue || !0 === c.value && !0 !== s.value)
              , m = e.computed(()=>!0 === t.modelValue && !0 === p.value && !0 === t.reveal)
              , f = e.computed(()=>"q-footer q-layout__section--marginal " + (!0 === c.value ? "fixed" : "absolute") + "-bottom" + (!0 === t.bordered ? " q-footer--bordered" : "") + (!0 === p.value ? " q-footer--hidden" : "") + (!0 !== t.modelValue ? " q-layout--prevent-focus" + (!0 !== c.value ? " hidden" : "") : ""))
              , h = e.computed(()=>{
                const e = i.rows.value.bottom
                  , t = {};
                return "l" === e[0] && !0 === i.left.space && (t[!0 === l.lang.rtl ? "right" : "left"] = `${i.left.size}px`),
                "r" === e[2] && !0 === i.right.space && (t[!0 === l.lang.rtl ? "left" : "right"] = `${i.right.size}px`),
                t
            }
            );
            function g(e, t) {
                i.update("footer", e, t)
            }
            function b(e, t) {
                e.value !== t && (e.value = t)
            }
            function y({height: e}) {
                b(r, e),
                g("size", e)
            }
            function w() {
                if (!0 !== t.reveal)
                    return;
                const {direction: e, position: o, inflectionPoint: n} = i.scroll.value;
                b(s, "up" === e || o - n < 100 || i.height.value - d.value - o - r.value < 300)
            }
            function x(e) {
                !0 === m.value && b(s, !0),
                a("focusin", e)
            }
            e.watch(()=>t.modelValue, e=>{
                g("space", e),
                b(s, !0),
                i.animate()
            }
            ),
            e.watch(v, e=>{
                g("offset", e)
            }
            ),
            e.watch(()=>t.reveal, e=>{
                !1 === e && b(s, t.modelValue)
            }
            ),
            e.watch(s, e=>{
                i.animate(),
                a("reveal", e)
            }
            ),
            e.watch([r, i.scroll, i.height], w),
            e.watch(()=>l.screen.height, e=>{
                !0 !== i.isContainer.value && b(u, e)
            }
            );
            const _ = {};
            return i.instances.footer = _,
            !0 === t.modelValue && g("size", r.value),
            g("space", t.modelValue),
            g("offset", v.value),
            e.onBeforeUnmount(()=>{
                i.instances.footer === _ && (i.instances.footer = void 0,
                g("size", 0),
                g("offset", 0),
                g("space", !1))
            }
            ),
            ()=>{
                const n = Ge(o.default, [e.h(Ua, {
                    debounce: 0,
                    onResize: y
                })]);
                return !0 === t.elevated && n.push(e.h("div", {
                    class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
                })),
                e.h("footer", {
                    class: f.value,
                    style: h.value,
                    onFocusin: x
                }, n)
            }
        }
    })
      , gu = Me({
        name: "QForm",
        props: {
            autofocus: Boolean,
            noErrorFocus: Boolean,
            noResetFocus: Boolean,
            greedy: Boolean,
            onSubmit: Function
        },
        emits: ["reset", "validation-success", "validation-error"],
        setup(t, {slots: o, emit: n}) {
            const a = e.getCurrentInstance()
              , l = e.ref(null);
            let i = 0;
            const r = [];
            function s(e) {
                const o = []
                  , a = "boolean" === typeof e ? e : !0 !== t.noErrorFocus
                  , l = ++i
                  , s = (e,t)=>{
                    n("validation-" + (!0 === e ? "success" : "error"), t)
                }
                ;
                for (let n = 0; n < r.length; n++) {
                    const e = r[n]
                      , l = e.validate();
                    if ("function" === typeof l.then)
                        o.push(l.then(t=>({
                            valid: t,
                            comp: e
                        }), t=>({
                            valid: !1,
                            comp: e,
                            err: t
                        })));
                    else if (!0 !== l) {
                        if (!1 === t.greedy)
                            return s(!1, e),
                            !0 === a && "function" === typeof e.focus && e.focus(),
                            Promise.resolve(!1);
                        o.push({
                            valid: !1,
                            comp: e
                        })
                    }
                }
                return 0 === o.length ? (s(!0),
                Promise.resolve(!0)) : Promise.all(o).then(e=>{
                    const t = e.filter(e=>!0 !== e.valid);
                    if (0 === t.length)
                        return l === i && s(!0),
                        !0;
                    const {valid: o, comp: n, err: r} = t[0];
                    return l === i && (void 0 !== r && console.error(r),
                    s(!1, n),
                    !0 === a && !0 !== o && "function" === typeof n.focus && n.focus()),
                    !1
                }
                )
            }
            function u() {
                i++,
                r.forEach(e=>{
                    "function" === typeof e.resetValidation && e.resetValidation()
                }
                )
            }
            function c(e) {
                void 0 !== e && $(e);
                const o = i + 1;
                s().then(a=>{
                    o === i && !0 === a && (void 0 !== t.onSubmit ? n("submit", e) : void 0 !== e && void 0 !== e.target && "function" === typeof e.target.submit && e.target.submit())
                }
                )
            }
            function d(o) {
                void 0 !== o && $(o),
                n("reset"),
                e.nextTick(()=>{
                    u(),
                    !0 === t.autofocus && !0 !== t.noResetFocus && v()
                }
                )
            }
            function v() {
                Bo(()=>{
                    if (null === l.value)
                        return;
                    const e = l.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(l.value.querySelectorAll("[tabindex]"), e=>e.tabIndex > -1);
                    null !== e && void 0 !== e && e.focus({
                        preventScroll: !0
                    })
                }
                )
            }
            e.provide(ue, {
                bindComponent(e) {
                    r.push(e)
                },
                unbindComponent(e) {
                    const t = r.indexOf(e);
                    t > -1 && r.splice(t, 1)
                }
            });
            let p = !1;
            return e.onDeactivated(()=>{
                p = !0
            }
            ),
            e.onActivated(()=>{
                !0 === p && !0 === t.autofocus && v()
            }
            ),
            e.onMounted(()=>{
                !0 === t.autofocus && v()
            }
            ),
            Object.assign(a.proxy, {
                validate: s,
                resetValidation: u,
                submit: c,
                reset: d,
                focus: v,
                getValidationComponents: ()=>r
            }),
            ()=>e.h("form", {
                class: "q-form",
                ref: l,
                onSubmit: c,
                onReset: d
            }, Xe(o.default))
        }
    })
      , bu = {
        inject: {
            [ue]: {
                default: h
            }
        },
        watch: {
            disable(e) {
                const t = this.$.provides[ue];
                void 0 !== t && (!0 === e ? (this.resetValidation(),
                t.unbindComponent(this)) : t.bindComponent(this))
            }
        },
        methods: {
            validate() {},
            resetValidation() {}
        },
        created() {
            const e = this.$.provides[ue];
            void 0 !== e && !0 !== this.disable && e.bindComponent(this)
        },
        beforeUnmount() {
            const e = this.$.provides[ue];
            void 0 !== e && !0 !== this.disable && e.unbindComponent(this)
        }
    }
      , yu = Me({
        name: "QHeader",
        props: {
            modelValue: {
                type: Boolean,
                default: !0
            },
            reveal: Boolean,
            revealOffset: {
                type: Number,
                default: 250
            },
            bordered: Boolean,
            elevated: Boolean,
            heightHint: {
                type: [String, Number],
                default: 50
            }
        },
        emits: ["reveal", "focusin"],
        setup(t, {slots: o, emit: n}) {
            const {proxy: {$q: a}} = e.getCurrentInstance()
              , l = e.inject(ie, ()=>{
                console.error("QHeader needs to be child of QLayout")
            }
            )
              , i = e.ref(parseInt(t.heightHint, 10))
              , r = e.ref(!0)
              , s = e.computed(()=>!0 === t.reveal || l.view.value.indexOf("H") > -1 || a.platform.is.ios && !0 === l.isContainer.value)
              , u = e.computed(()=>{
                if (!0 !== t.modelValue)
                    return 0;
                if (!0 === s.value)
                    return !0 === r.value ? i.value : 0;
                const e = i.value - l.scroll.value.position;
                return e > 0 ? e : 0
            }
            )
              , c = e.computed(()=>!0 !== t.modelValue || !0 === s.value && !0 !== r.value)
              , d = e.computed(()=>!0 === t.modelValue && !0 === c.value && !0 === t.reveal)
              , v = e.computed(()=>"q-header q-layout__section--marginal " + (!0 === s.value ? "fixed" : "absolute") + "-top" + (!0 === t.bordered ? " q-header--bordered" : "") + (!0 === c.value ? " q-header--hidden" : "") + (!0 !== t.modelValue ? " q-layout--prevent-focus" : ""))
              , p = e.computed(()=>{
                const e = l.rows.value.top
                  , t = {};
                return "l" === e[0] && !0 === l.left.space && (t[!0 === a.lang.rtl ? "right" : "left"] = `${l.left.size}px`),
                "r" === e[2] && !0 === l.right.space && (t[!0 === a.lang.rtl ? "left" : "right"] = `${l.right.size}px`),
                t
            }
            );
            function m(e, t) {
                l.update("header", e, t)
            }
            function f(e, t) {
                e.value !== t && (e.value = t)
            }
            function h({height: e}) {
                f(i, e),
                m("size", e)
            }
            function g(e) {
                !0 === d.value && f(r, !0),
                n("focusin", e)
            }
            e.watch(()=>t.modelValue, e=>{
                m("space", e),
                f(r, !0),
                l.animate()
            }
            ),
            e.watch(u, e=>{
                m("offset", e)
            }
            ),
            e.watch(()=>t.reveal, e=>{
                !1 === e && f(r, t.modelValue)
            }
            ),
            e.watch(r, e=>{
                l.animate(),
                n("reveal", e)
            }
            ),
            e.watch(l.scroll, e=>{
                !0 === t.reveal && f(r, "up" === e.direction || e.position <= t.revealOffset || e.position - e.inflectionPoint < 100)
            }
            );
            const b = {};
            return l.instances.header = b,
            !0 === t.modelValue && m("size", i.value),
            m("space", t.modelValue),
            m("offset", u.value),
            e.onBeforeUnmount(()=>{
                l.instances.header === b && (l.instances.header = void 0,
                m("size", 0),
                m("offset", 0),
                m("space", !1))
            }
            ),
            ()=>{
                const n = Ze(o.default, []);
                return !0 === t.elevated && n.push(e.h("div", {
                    class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
                })),
                n.push(e.h(Ua, {
                    debounce: 0,
                    onResize: h
                })),
                e.h("header", {
                    class: v.value,
                    style: p.value,
                    onFocusin: g
                }, n)
            }
        }
    });
    const wu = {
        ratio: [String, Number]
    };
    function xu(t, o) {
        return e.computed(()=>{
            const e = Number(t.ratio || (void 0 !== o ? o.value : void 0));
            return !0 !== isNaN(e) && e > 0 ? {
                paddingBottom: `${100 / e}%`
            } : null
        }
        )
    }
    const _u = 16 / 9;
    var Su = Me({
        name: "QImg",
        props: {
            ...wu,
            src: String,
            srcset: String,
            sizes: String,
            alt: String,
            crossorigin: String,
            decoding: String,
            referrerpolicy: String,
            draggable: Boolean,
            loading: {
                type: String,
                default: "lazy"
            },
            fetchpriority: {
                type: String,
                default: "auto"
            },
            width: String,
            height: String,
            initialRatio: {
                type: [Number, String],
                default: _u
            },
            placeholderSrc: String,
            fit: {
                type: String,
                default: "cover"
            },
            position: {
                type: String,
                default: "50% 50%"
            },
            imgClass: String,
            imgStyle: Object,
            noSpinner: Boolean,
            noNativeMenu: Boolean,
            noTransition: Boolean,
            spinnerColor: String,
            spinnerSize: String
        },
        emits: ["load", "error"],
        setup(t, {slots: o, emit: n}) {
            const a = e.ref(t.initialRatio)
              , l = xu(t, a);
            let i;
            const r = [e.ref(null), e.ref(void 0 !== t.placeholderSrc ? {
                src: t.placeholderSrc
            } : null)]
              , s = e.ref(0)
              , u = e.ref(!1)
              , c = e.ref(!1)
              , d = e.computed(()=>`q-img q-img--${!0 === t.noNativeMenu ? "no-" : ""}menu`)
              , v = e.computed(()=>({
                width: t.width,
                height: t.height
            }))
              , p = e.computed(()=>`q-img__image ${void 0 !== t.imgClass ? t.imgClass + " " : ""}` + `q-img__image--with ${!0 === t.noTransition ? "out" : ""}-transition`)
              , m = e.computed(()=>({
                ...t.imgStyle,
                objectFit: t.fit,
                objectPosition: t.position
            }));
            function f() {
                return t.src || t.srcset || t.sizes ? {
                    src: t.src,
                    srcset: t.srcset,
                    sizes: t.sizes
                } : null
            }
            function h(e) {
                if (clearTimeout(i),
                c.value = !1,
                null === e)
                    return u.value = !1,
                    r[0].value = null,
                    void (r[1].value = null);
                u.value = !0,
                r[s.value].value = e
            }
            function g({target: e}) {
                null !== i && (clearTimeout(i),
                a.value = 0 === e.naturalHeight ? .5 : e.naturalWidth / e.naturalHeight,
                b(e, 1))
            }
            function b(e, t) {
                null !== i && 1e3 !== t && (!0 === e.complete ? y(e) : i = setTimeout(()=>{
                    b(e, t + 1)
                }
                , 50))
            }
            function y(e) {
                null !== i && (s.value = 1 === s.value ? 0 : 1,
                r[s.value].value = null,
                u.value = !1,
                c.value = !1,
                n("load", e.currentSrc || e.src))
            }
            function w(e) {
                clearTimeout(i),
                u.value = !1,
                c.value = !0,
                r[0].value = null,
                r[1].value = null,
                n("error", e)
            }
            function x(t, o) {
                return e.h("div", {
                    class: "q-img__container absolute-full",
                    key: t
                }, o)
            }
            function _(o) {
                const n = r[o].value
                  , a = {
                    key: "img_" + o,
                    class: p.value,
                    style: m.value,
                    crossorigin: t.crossorigin,
                    decoding: t.decoding,
                    referrerpolicy: t.referrerpolicy,
                    height: t.height,
                    width: t.width,
                    loading: t.loading,
                    fetchpriority: t.fetchpriority,
                    "aria-hidden": "true",
                    draggable: t.draggable,
                    ...n
                };
                return s.value === o ? (a.class += " q-img__image--waiting",
                Object.assign(a, {
                    onLoad: g,
                    onError: w
                })) : a.class += " q-img__image--loaded",
                x("img" + o, e.h("img", a))
            }
            function S() {
                return !0 !== u.value ? e.h("div", {
                    key: "content",
                    class: "q-img__content absolute-full q-anchor--skip"
                }, Xe(o[!0 === c.value ? "error" : "default"])) : e.h("div", {
                    key: "loading",
                    class: "q-img__loading absolute-full flex flex-center"
                }, void 0 !== o.loading ? o.loading() : !0 === t.noSpinner ? void 0 : [e.h(Ht, {
                    color: t.spinnerColor,
                    size: t.spinnerSize
                })])
            }
            return e.watch(()=>f(), h),
            h(f()),
            e.onBeforeUnmount(()=>{
                clearTimeout(i),
                i = null
            }
            ),
            ()=>{
                const o = [];
                return null !== l.value && o.push(e.h("div", {
                    key: "filler",
                    style: l.value
                })),
                !0 !== c.value && (null !== r[0].value && o.push(_(0)),
                null !== r[1].value && o.push(_(1))),
                o.push(e.h(e.Transition, {
                    name: "q-transition--fade"
                }, S)),
                e.h("div", {
                    class: d.value,
                    style: v.value,
                    role: "img",
                    "aria-label": t.alt
                }, o)
            }
        }
    });
    const {passive: ku} = f;
    var Cu = Me({
        name: "QInfiniteScroll",
        props: {
            offset: {
                type: Number,
                default: 500
            },
            debounce: {
                type: [String, Number],
                default: 100
            },
            scrollTarget: {
                default: void 0
            },
            initialIndex: Number,
            disable: Boolean,
            reverse: Boolean
        },
        emits: ["load"],
        setup(t, {slots: o, emit: n}) {
            const a = e.ref(!1)
              , l = e.ref(!0)
              , i = e.ref(null);
            let r, s, u = t.initialIndex || 0;
            const c = e.computed(()=>"q-infinite-scroll__loading" + (!0 === a.value ? "" : " invisible"));
            function d() {
                if (!0 === t.disable || !0 === a.value || !1 === l.value)
                    return;
                const e = Ko(r)
                  , o = Zo(r)
                  , n = Wt(r);
                !1 === t.reverse ? Math.round(o + n + t.offset) >= Math.round(e) && v() : Math.round(o) <= t.offset && v()
            }
            function v() {
                if (!0 === t.disable || !0 === a.value || !1 === l.value)
                    return;
                u++,
                a.value = !0;
                const o = Ko(r);
                n("load", u, n=>{
                    !0 === l.value && (a.value = !1,
                    e.nextTick(()=>{
                        if (!0 === t.reverse) {
                            const e = Ko(r)
                              , t = Zo(r)
                              , n = e - o;
                            nn(r, t + n)
                        }
                        !0 === n ? f() : i.value && i.value.closest("body") && s()
                    }
                    ))
                }
                )
            }
            function p() {
                u = 0
            }
            function m() {
                !1 === l.value && (l.value = !0,
                r.addEventListener("scroll", s, ku)),
                d()
            }
            function f() {
                !0 === l.value && (l.value = !1,
                a.value = !1,
                r.removeEventListener("scroll", s, ku),
                void 0 !== s && void 0 !== s.cancel && s.cancel())
            }
            function h() {
                if (r && !0 === l.value && r.removeEventListener("scroll", s, ku),
                r = Yo(i.value, t.scrollTarget),
                !0 === l.value) {
                    if (r.addEventListener("scroll", s, ku),
                    !0 === t.reverse) {
                        const e = Ko(r)
                          , t = Wt(r);
                        nn(r, e - t)
                    }
                    d()
                }
            }
            function g(e) {
                u = e
            }
            const b = e.getCurrentInstance();
            function y(e) {
                e = parseInt(e, 10);
                const t = s;
                s = e <= 0 ? d : O(d, !0 === isNaN(e) ? 100 : e),
                r && !0 === l.value && (void 0 !== t && r.removeEventListener("scroll", t, ku),
                r.addEventListener("scroll", s, ku))
            }
            Object.assign(b.proxy, {
                poll: ()=>{
                    void 0 !== s && s()
                }
                ,
                trigger: v,
                stop: f,
                reset: p,
                resume: m,
                setIndex: g
            }),
            e.watch(()=>t.disable, e=>{
                !0 === e ? f() : m()
            }
            ),
            e.watch(()=>t.reverse, e=>{
                !1 === a.value && !0 === l.value && d()
            }
            ),
            e.watch(()=>t.scrollTarget, h),
            e.watch(()=>t.debounce, y);
            let w = !1;
            return e.onActivated(()=>{
                !1 !== w && r && nn(r, w)
            }
            ),
            e.onDeactivated(()=>{
                w = !!r && Zo(r)
            }
            ),
            e.onBeforeUnmount(()=>{
                !0 === l.value && r.removeEventListener("scroll", s, ku)
            }
            ),
            e.onMounted(()=>{
                y(t.debounce),
                h()
            }
            ),
            ()=>{
                const n = Ze(o.default, []);
                return !0 !== t.disable && !0 === l.value && n[!1 === t.reverse ? "push" : "unshift"](e.h("div", {
                    class: c.value
                }, Xe(o.loading))),
                e.h("div", {
                    class: "q-infinite-scroll",
                    ref: i
                }, n)
            }
        }
    })
      , qu = Me({
        name: "QInnerLoading",
        props: {
            ...yt,
            ...Do,
            showing: Boolean,
            color: String,
            size: {
                type: [String, Number],
                default: 42
            },
            label: String,
            labelClass: String,
            labelStyle: [String, Array, Object]
        },
        setup(t, {slots: o}) {
            const n = e.getCurrentInstance()
              , a = wt(t, n.proxy.$q)
              , {transition: l, transitionStyle: i} = Ho(t, e.computed(()=>t.showing))
              , r = e.computed(()=>"q-inner-loading absolute-full column flex-center" + (!0 === a.value ? " q-inner-loading--dark" : ""))
              , s = e.computed(()=>"q-inner-loading__label" + (void 0 !== t.labelClass ? ` ${t.labelClass}` : ""));
            function u() {
                const o = [e.h(Ht, {
                    size: t.size,
                    color: t.color
                })];
                return void 0 !== t.label && o.push(e.h("div", {
                    class: s.value,
                    style: t.labelStyle
                }, [t.label])),
                o
            }
            function c() {
                return !0 === t.showing ? e.h("div", {
                    class: r.value,
                    style: i.value
                }, void 0 !== o.default ? o.default() : u()) : null
            }
            return ()=>e.h(e.Transition, {
                name: l.value,
                appear: !0
            }, c)
        }
    });
    const $u = {
        date: "####/##/##",
        datetime: "####/##/## ##:##",
        time: "##:##",
        fulltime: "##:##:##",
        phone: "(###) ### - ####",
        card: "#### #### #### ####"
    }
      , Mu = {
        "#": {
            pattern: "[\\d]",
            negate: "[^\\d]"
        },
        S: {
            pattern: "[a-zA-Z]",
            negate: "[^a-zA-Z]"
        },
        N: {
            pattern: "[0-9a-zA-Z]",
            negate: "[^0-9a-zA-Z]"
        },
        A: {
            pattern: "[a-zA-Z]",
            negate: "[^a-zA-Z]",
            transform: e=>e.toLocaleUpperCase()
        },
        a: {
            pattern: "[a-zA-Z]",
            negate: "[^a-zA-Z]",
            transform: e=>e.toLocaleLowerCase()
        },
        X: {
            pattern: "[0-9a-zA-Z]",
            negate: "[^0-9a-zA-Z]",
            transform: e=>e.toLocaleUpperCase()
        },
        x: {
            pattern: "[0-9a-zA-Z]",
            negate: "[^0-9a-zA-Z]",
            transform: e=>e.toLocaleLowerCase()
        }
    }
      , Tu = Object.keys(Mu);
    Tu.forEach(e=>{
        Mu[e].regex = new RegExp(Mu[e].pattern)
    }
    );
    const Bu = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + Tu.join("") + "])|(.)","g")
      , zu = /[.*+?^${}()|[\]\\]/g
      , Ou = String.fromCharCode(1)
      , Vu = {
        mask: String,
        reverseFillMask: Boolean,
        fillMask: [Boolean, String],
        unmaskedValue: Boolean
    };
    function Lu(t, o, n, a) {
        let l, i, r, s;
        const u = e.ref(null)
          , c = e.ref(v());
        function d() {
            return !0 === t.autogrow || ["textarea", "text", "search", "url", "tel", "password"].includes(t.type)
        }
        function v() {
            if (m(),
            !0 === u.value) {
                const e = y(x(t.modelValue));
                return !1 !== t.fillMask ? _(e) : e
            }
            return t.modelValue
        }
        function p(e) {
            if (e < l.length)
                return l.slice(-e);
            let t = ""
              , o = l;
            const n = o.indexOf(Ou);
            if (n > -1) {
                for (let n = e - o.length; n > 0; n--)
                    t += Ou;
                o = o.slice(0, n) + t + o.slice(n)
            }
            return o
        }
        function m() {
            if (u.value = void 0 !== t.mask && t.mask.length > 0 && d(),
            !1 === u.value)
                return s = void 0,
                l = "",
                void (i = "");
            const e = void 0 === $u[t.mask] ? t.mask : $u[t.mask]
              , o = "string" === typeof t.fillMask && t.fillMask.length > 0 ? t.fillMask.slice(0, 1) : "_"
              , n = o.replace(zu, "\\$&")
              , a = []
              , c = []
              , v = [];
            let p = !0 === t.reverseFillMask
              , m = ""
              , f = "";
            e.replace(Bu, (e,t,o,n,l)=>{
                if (void 0 !== n) {
                    const e = Mu[n];
                    v.push(e),
                    f = e.negate,
                    !0 === p && (c.push("(?:" + f + "+)?(" + e.pattern + "+)?(?:" + f + "+)?(" + e.pattern + "+)?"),
                    p = !1),
                    c.push("(?:" + f + "+)?(" + e.pattern + ")?")
                } else if (void 0 !== o)
                    m = "\\" + ("\\" === o ? "" : o),
                    v.push(o),
                    a.push("([^" + m + "]+)?" + m + "?");
                else {
                    const e = void 0 !== t ? t : l;
                    m = "\\" === e ? "\\\\\\\\" : e.replace(zu, "\\\\$&"),
                    v.push(e),
                    a.push("([^" + m + "]+)?" + m + "?")
                }
            }
            );
            const h = new RegExp("^" + a.join("") + "(" + ("" === m ? "." : "[^" + m + "]") + "+)?$")
              , g = c.length - 1
              , b = c.map((e,o)=>{
                return 0 === o && !0 === t.reverseFillMask ? new RegExp("^" + n + "*" + e) : o === g ? new RegExp("^" + e + "(" + ("" === f ? "." : f) + "+)?" + (!0 === t.reverseFillMask ? "$" : n + "*")) : new RegExp("^" + e)
            }
            );
            r = v,
            s = (e=>{
                const t = h.exec(e);
                null !== t && (e = t.slice(1).join(""));
                const o = []
                  , n = b.length;
                for (let a = 0, l = e; a < n; a++) {
                    const e = b[a].exec(l);
                    if (null === e)
                        break;
                    l = l.slice(e.shift().length),
                    o.push(...e)
                }
                return o.length > 0 ? o.join("") : e
            }
            ),
            l = v.map(e=>"string" === typeof e ? e : Ou).join(""),
            i = l.split(Ou).join(o)
        }
        function f(o, r, s) {
            const u = a.value
              , d = u.selectionEnd
              , v = u.value.length - d
              , p = x(o);
            !0 === r && m();
            const f = y(p)
              , h = !1 !== t.fillMask ? _(f) : f
              , b = c.value !== h;
            u.value !== h && (u.value = h),
            !0 === b && (c.value = h),
            document.activeElement === u && e.nextTick(()=>{
                if (h !== i)
                    if ("insertFromPaste" !== s || !0 === t.reverseFillMask)
                        if (["deleteContentBackward", "deleteContentForward"].indexOf(s) > -1) {
                            const e = !0 === t.reverseFillMask ? 0 === d ? h.length > f.length ? 1 : 0 : Math.max(0, h.length - (h === i ? 0 : Math.min(f.length, v) + 1)) + 1 : d;
                            u.setSelectionRange(e, e, "forward")
                        } else if (!0 === t.reverseFillMask)
                            if (!0 === b) {
                                const e = Math.max(0, h.length - (h === i ? 0 : Math.min(f.length, v + 1)));
                                1 === e && 1 === d ? u.setSelectionRange(e, e, "forward") : g.rightReverse(u, e, e)
                            } else {
                                const e = h.length - v;
                                u.setSelectionRange(e, e, "backward")
                            }
                        else if (!0 === b) {
                            const e = Math.max(0, l.indexOf(Ou), Math.min(f.length, d) - 1);
                            g.right(u, e, e)
                        } else {
                            const e = d - 1;
                            g.right(u, e, e)
                        }
                    else {
                        const e = d - 1;
                        g.right(u, e, e)
                    }
                else {
                    const e = !0 === t.reverseFillMask ? i.length : 0;
                    u.setSelectionRange(e, e, "forward")
                }
            }
            );
            const w = !0 === t.unmaskedValue ? x(h) : h;
            String(t.modelValue) !== w && n(w, !0)
        }
        function h(e, t, o) {
            const n = y(x(e.value));
            t = Math.max(0, l.indexOf(Ou), Math.min(n.length, t)),
            e.setSelectionRange(t, o, "forward")
        }
        e.watch(()=>t.type + t.autogrow, m),
        e.watch(()=>t.mask, e=>{
            if (void 0 !== e)
                f(c.value, !0);
            else {
                const e = x(c.value);
                m(),
                t.modelValue !== e && o("update:modelValue", e)
            }
        }
        ),
        e.watch(()=>t.fillMask + t.reverseFillMask, ()=>{
            !0 === u.value && f(c.value, !0)
        }
        ),
        e.watch(()=>t.unmaskedValue, ()=>{
            !0 === u.value && f(c.value)
        }
        );
        const g = {
            left(e, t, o, n) {
                const a = -1 === l.slice(t - 1).indexOf(Ou);
                let i = Math.max(0, t - 1);
                for (; i >= 0; i--)
                    if (l[i] === Ou) {
                        t = i,
                        !0 === a && t++;
                        break
                    }
                if (i < 0 && void 0 !== l[t] && l[t] !== Ou)
                    return g.right(e, 0, 0);
                t >= 0 && e.setSelectionRange(t, !0 === n ? o : t, "backward")
            },
            right(e, t, o, n) {
                const a = e.value.length;
                let i = Math.min(a, o + 1);
                for (; i <= a; i++) {
                    if (l[i] === Ou) {
                        o = i;
                        break
                    }
                    l[i - 1] === Ou && (o = i)
                }
                if (i > a && void 0 !== l[o - 1] && l[o - 1] !== Ou)
                    return g.left(e, a, a);
                e.setSelectionRange(n ? t : o, o, "forward")
            },
            leftReverse(e, t, o, n) {
                const a = p(e.value.length);
                let l = Math.max(0, t - 1);
                for (; l >= 0; l--) {
                    if (a[l - 1] === Ou) {
                        t = l;
                        break
                    }
                    if (a[l] === Ou && (t = l,
                    0 === l))
                        break
                }
                if (l < 0 && void 0 !== a[t] && a[t] !== Ou)
                    return g.rightReverse(e, 0, 0);
                t >= 0 && e.setSelectionRange(t, !0 === n ? o : t, "backward")
            },
            rightReverse(e, t, o, n) {
                const a = e.value.length
                  , l = p(a)
                  , i = -1 === l.slice(0, o + 1).indexOf(Ou);
                let r = Math.min(a, o + 1);
                for (; r <= a; r++)
                    if (l[r - 1] === Ou) {
                        o = r,
                        o > 0 && !0 === i && o--;
                        break
                    }
                if (r > a && void 0 !== l[o - 1] && l[o - 1] !== Ou)
                    return g.leftReverse(e, a, a);
                e.setSelectionRange(!0 === n ? t : o, o, "forward")
            }
        };
        function b(e) {
            if (!0 === Y(e))
                return;
            const o = a.value
              , n = o.selectionStart
              , l = o.selectionEnd;
            if (37 === e.keyCode || 39 === e.keyCode) {
                const a = g[(39 === e.keyCode ? "right" : "left") + (!0 === t.reverseFillMask ? "Reverse" : "")];
                e.preventDefault(),
                a(o, n, l, e.shiftKey)
            } else
                8 === e.keyCode && !0 !== t.reverseFillMask && n === l ? g.left(o, n, l, !0) : 46 === e.keyCode && !0 === t.reverseFillMask && n === l && g.rightReverse(o, n, l, !0)
        }
        function y(e) {
            if (void 0 === e || null === e || "" === e)
                return "";
            if (!0 === t.reverseFillMask)
                return w(e);
            const o = r;
            let n = 0
              , a = "";
            for (let t = 0; t < o.length; t++) {
                const l = e[n]
                  , i = o[t];
                if ("string" === typeof i)
                    a += i,
                    l === i && n++;
                else {
                    if (void 0 === l || !i.regex.test(l))
                        return a;
                    a += void 0 !== i.transform ? i.transform(l) : l,
                    n++
                }
            }
            return a
        }
        function w(e) {
            const t = r
              , o = l.indexOf(Ou);
            let n = e.length - 1
              , a = "";
            for (let l = t.length - 1; l >= 0 && n > -1; l--) {
                const i = t[l];
                let r = e[n];
                if ("string" === typeof i)
                    a = i + a,
                    r === i && n--;
                else {
                    if (void 0 === r || !i.regex.test(r))
                        return a;
                    do {
                        a = (void 0 !== i.transform ? i.transform(r) : r) + a,
                        n--,
                        r = e[n]
                    } while (o === l && void 0 !== r && i.regex.test(r))
                }
            }
            return a
        }
        function x(e) {
            return "string" !== typeof e || void 0 === s ? "number" === typeof e ? s("" + e) : e : s(e)
        }
        function _(e) {
            return i.length - e.length <= 0 ? e : !0 === t.reverseFillMask && e.length > 0 ? i.slice(0, -e.length) + e : e + i.slice(e.length)
        }
        return {
            innerValue: c,
            hasMask: u,
            moveCursorForPaste: h,
            updateMaskValue: f,
            onMaskedKeydown: b
        }
    }
    const Eu = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/
      , Au = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u
      , Pu = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/
      , Ru = /[a-z0-9_ -]$/i;
    function Fu(e) {
        return function(t) {
            if ("compositionend" === t.type || "change" === t.type) {
                if (!0 !== t.target.qComposing)
                    return;
                t.target.qComposing = !1,
                e(t)
            } else if ("compositionupdate" === t.type && !0 !== t.target.qComposing && "string" === typeof t.data) {
                const e = !0 === v.is.firefox ? !1 === Ru.test(t.data) : !0 === Eu.test(t.data) || !0 === Au.test(t.data) || !0 === Pu.test(t.data);
                !0 === e && (t.target.qComposing = !0)
            }
        }
    }
    var Iu = Me({
        name: "QInput",
        inheritAttrs: !1,
        props: {
            ...uu,
            ...Vu,
            ...In,
            modelValue: {
                required: !1
            },
            shadowText: String,
            type: {
                type: String,
                default: "text"
            },
            debounce: [String, Number],
            autogrow: Boolean,
            inputClass: [Array, String, Object],
            inputStyle: [Array, String, Object]
        },
        emits: [...cu, "paste", "change"],
        setup(t, {emit: o, attrs: n}) {
            const a = {};
            let l, i, r, s, u = NaN;
            const c = e.ref(null)
              , d = Dn(t)
              , {innerValue: v, hasMask: p, moveCursorForPaste: m, updateMaskValue: f, onMaskedKeydown: h} = Lu(t, o, B, c)
              , g = mu(t, !0)
              , b = e.computed(()=>su(v.value))
              , y = Fu(T)
              , w = du()
              , x = e.computed(()=>"textarea" === t.type || !0 === t.autogrow)
              , _ = e.computed(()=>!0 === x.value || ["text", "search", "url", "tel", "password"].includes(t.type))
              , S = e.computed(()=>{
                const e = {
                    ...w.splitAttrs.listeners.value,
                    onInput: T,
                    onPaste: M,
                    onChange: O,
                    onBlur: V,
                    onFocus: C
                };
                return e.onCompositionstart = e.onCompositionupdate = e.onCompositionend = y,
                !0 === p.value && (e.onKeydown = h),
                !0 === t.autogrow && (e.onAnimationend = z),
                e
            }
            )
              , k = e.computed(()=>{
                const e = {
                    tabindex: 0,
                    "data-autofocus": !0 === t.autofocus || void 0,
                    rows: "textarea" === t.type ? 6 : void 0,
                    "aria-label": t.label,
                    name: d.value,
                    ...w.splitAttrs.attributes.value,
                    id: w.targetUid.value,
                    maxlength: t.maxlength,
                    disabled: !0 === t.disable,
                    readonly: !0 === t.readonly
                };
                return !1 === x.value && (e.type = t.type),
                !0 === t.autogrow && (e.rows = 1),
                e
            }
            );
            function q() {
                Bo(()=>{
                    const e = document.activeElement;
                    null === c.value || c.value === e || null !== e && e.id === w.targetUid.value || c.value.focus({
                        preventScroll: !0
                    })
                }
                )
            }
            function $() {
                null !== c.value && c.value.select()
            }
            function M(e) {
                if (!0 === p.value && !0 !== t.reverseFillMask) {
                    const t = e.target;
                    m(t, t.selectionStart, t.selectionEnd)
                }
                o("paste", e)
            }
            function T(n) {
                if (!n || !n.target)
                    return;
                if ("file" === t.type)
                    return void o("update:modelValue", n.target.files);
                const l = n.target.value;
                if (!0 !== n.target.qComposing) {
                    if (!0 === p.value)
                        f(l, !1, n.inputType);
                    else if (B(l),
                    !0 === _.value && n.target === document.activeElement) {
                        const {selectionStart: t, selectionEnd: o} = n.target;
                        void 0 !== t && void 0 !== o && e.nextTick(()=>{
                            n.target === document.activeElement && 0 === l.indexOf(n.target.value) && n.target.setSelectionRange(t, o)
                        }
                        )
                    }
                    !0 === t.autogrow && z()
                } else
                    a.value = l
            }
            function B(n, c) {
                s = (()=>{
                    "number" !== t.type && !0 === a.hasOwnProperty("value") && delete a.value,
                    t.modelValue !== n && u !== n && (u = n,
                    !0 === c && (i = !0),
                    o("update:modelValue", n),
                    e.nextTick(()=>{
                        u === n && (u = NaN)
                    }
                    )),
                    s = void 0
                }
                ),
                "number" === t.type && (l = !0,
                a.value = n),
                void 0 !== t.debounce ? (clearTimeout(r),
                a.value = n,
                r = setTimeout(s, t.debounce)) : s()
            }
            function z() {
                const e = c.value;
                if (null !== e) {
                    const t = e.parentNode.style
                      , {overflow: o} = e.style;
                    t.marginBottom = e.scrollHeight - 1 + "px",
                    e.style.height = "1px",
                    e.style.overflow = "hidden",
                    e.style.height = e.scrollHeight + "px",
                    e.style.overflow = o,
                    t.marginBottom = ""
                }
            }
            function O(e) {
                y(e),
                clearTimeout(r),
                void 0 !== s && s(),
                o("change", e.target.value)
            }
            function V(e) {
                void 0 !== e && C(e),
                clearTimeout(r),
                void 0 !== s && s(),
                l = !1,
                i = !1,
                delete a.value,
                "file" !== t.type && setTimeout(()=>{
                    null !== c.value && (c.value.value = void 0 !== v.value ? v.value : "")
                }
                )
            }
            function L() {
                return !0 === a.hasOwnProperty("value") ? a.value : void 0 !== v.value ? v.value : ""
            }
            e.watch(()=>t.type, ()=>{
                c.value && (c.value.value = t.modelValue)
            }
            ),
            e.watch(()=>t.modelValue, o=>{
                if (!0 === p.value) {
                    if (!0 === i && (i = !1,
                    String(o) === u))
                        return;
                    f(o)
                } else
                    v.value !== o && (v.value = o,
                    "number" === t.type && !0 === a.hasOwnProperty("value") && (!0 === l ? l = !1 : delete a.value));
                !0 === t.autogrow && e.nextTick(z)
            }
            ),
            e.watch(()=>t.autogrow, t=>{
                !0 === t ? e.nextTick(z) : null !== c.value && n.rows > 0 && (c.value.style.height = "auto")
            }
            ),
            e.watch(()=>t.dense, ()=>{
                !0 === t.autogrow && e.nextTick(z)
            }
            ),
            e.onBeforeUnmount(()=>{
                V()
            }
            ),
            e.onMounted(()=>{
                !0 === t.autogrow && z()
            }
            ),
            Object.assign(w, {
                innerValue: v,
                fieldClass: e.computed(()=>`q-${!0 === x.value ? "textarea" : "input"}` + (!0 === t.autogrow ? " q-textarea--autogrow" : "")),
                hasShadow: e.computed(()=>"file" !== t.type && "string" === typeof t.shadowText && t.shadowText.length > 0),
                inputRef: c,
                emitValue: B,
                hasValue: b,
                floatingLabel: e.computed(()=>!0 === b.value || su(t.displayValue)),
                getControl: ()=>{
                    return e.h(!0 === x.value ? "textarea" : "input", {
                        ref: c,
                        class: ["q-field__native q-placeholder", t.inputClass],
                        style: t.inputStyle,
                        ...k.value,
                        ...S.value,
                        ..."file" !== t.type ? {
                            value: L()
                        } : g.value
                    })
                }
                ,
                getShadowControl: ()=>{
                    return e.h("div", {
                        class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (!0 === x.value ? "" : " text-no-wrap")
                    }, [e.h("span", {
                        class: "invisible"
                    }, L()), e.h("span", t.shadowText)])
                }
            });
            const E = vu(w)
              , A = e.getCurrentInstance();
            return Object.assign(A.proxy, {
                focus: q,
                select: $,
                getNativeElement: ()=>c.value
            }),
            E
        }
    });
    const Nu = {
        threshold: 0,
        root: null,
        rootMargin: "0px"
    };
    function ju(e, t, o) {
        let n, a, l;
        "function" === typeof o ? (n = o,
        a = Nu,
        l = void 0 === t.cfg) : (n = o.handler,
        a = Object.assign({}, Nu, o.cfg),
        l = void 0 === t.cfg || !1 === be(t.cfg, a)),
        t.handler !== n && (t.handler = n),
        !0 === l && (t.cfg = a,
        void 0 !== t.observer && t.observer.unobserve(e),
        t.observer = new IntersectionObserver(([o])=>{
            if ("function" === typeof t.handler) {
                if (null === o.rootBounds && !0 === document.body.contains(e))
                    return t.observer.unobserve(e),
                    void t.observer.observe(e);
                const n = t.handler(o, t.observer);
                (!1 === n || !0 === t.once && !0 === o.isIntersecting) && Du(e)
            }
        }
        ,a),
        t.observer.observe(e))
    }
    function Du(e) {
        const t = e.__qvisible;
        void 0 !== t && (void 0 !== t.observer && t.observer.unobserve(e),
        delete e.__qvisible)
    }
    var Hu = Te({
        name: "intersection",
        mounted(e, {modifiers: t, value: o}) {
            const n = {
                once: !0 === t.once
            };
            ju(e, n, o),
            e.__qvisible = n
        },
        updated(e, t) {
            const o = e.__qvisible;
            void 0 !== o && ju(e, o, t.value)
        },
        beforeUnmount: Du
    })
      , Qu = Me({
        name: "QIntersection",
        props: {
            tag: {
                type: String,
                default: "div"
            },
            once: Boolean,
            transition: String,
            transitionDuration: {
                type: [String, Number],
                default: 300
            },
            ssrPrerender: Boolean,
            margin: String,
            threshold: [Number, Array],
            root: {
                default: null
            },
            disable: Boolean,
            onVisibility: Function
        },
        setup(t, {slots: o, emit: a}) {
            const l = e.ref(!0 === n.value && t.ssrPrerender)
              , i = e.computed(()=>void 0 !== t.root || void 0 !== t.margin || void 0 !== t.threshold ? {
                handler: c,
                cfg: {
                    root: t.root,
                    rootMargin: t.margin,
                    threshold: t.threshold
                }
            } : c)
              , r = e.computed(()=>!0 !== t.disable && (!0 !== n.value || !0 !== t.once || !0 !== t.ssrPrerender))
              , s = e.computed(()=>{
                return [[Hu, i.value, void 0, {
                    once: t.once
                }]]
            }
            )
              , u = e.computed(()=>`--q-transition-duration: ${t.transitionDuration}ms`);
            function c(e) {
                l.value !== e.isIntersecting && (l.value = e.isIntersecting,
                void 0 !== t.onVisibility && a("visibility", l.value))
            }
            function d() {
                return !0 === l.value ? [e.h("div", {
                    key: "content",
                    style: u.value
                }, Xe(o.default))] : void 0
            }
            return ()=>{
                const o = t.transition ? [e.h(e.Transition, {
                    name: "q-transition--" + t.transition
                }, d)] : d();
                return et(t.tag, {
                    class: "q-intersection"
                }, o, "main", r.value, ()=>s.value)
            }
        }
    })
      , Uu = Me({
        name: "QList",
        props: {
            ...yt,
            bordered: Boolean,
            dense: Boolean,
            separator: Boolean,
            padding: Boolean
        },
        setup(t, {slots: o}) {
            const n = e.getCurrentInstance()
              , a = wt(t, n.proxy.$q)
              , l = e.computed(()=>"q-list" + (!0 === t.bordered ? " q-list--bordered" : "") + (!0 === t.dense ? " q-list--dense" : "") + (!0 === t.separator ? " q-list--separator" : "") + (!0 === a.value ? " q-list--dark" : "") + (!0 === t.padding ? " q-list--padding" : ""));
            return ()=>e.h("div", {
                class: l.value
            }, Xe(o.default))
        }
    });
    const Wu = [34, 37, 40, 33, 39, 38]
      , Yu = Object.keys(Ca);
    var Ku = Me({
        name: "QKnob",
        props: {
            ...In,
            ...Ca,
            modelValue: {
                type: Number,
                required: !0
            },
            innerMin: Number,
            innerMax: Number,
            step: {
                type: Number,
                default: 1,
                validator: e=>e >= 0
            },
            tabindex: {
                type: [Number, String],
                default: 0
            },
            disable: Boolean,
            readonly: Boolean
        },
        emits: ["update:modelValue", "change", "drag-value"],
        setup(t, {slots: o, emit: n}) {
            const {proxy: a} = e.getCurrentInstance()
              , {$q: l} = a
              , i = e.ref(t.modelValue)
              , r = e.ref(!1)
              , s = e.computed(()=>!0 === isNaN(t.innerMin) || t.innerMin < t.min ? t.min : t.innerMin)
              , u = e.computed(()=>!0 === isNaN(t.innerMax) || t.innerMax > t.max ? t.max : t.innerMax);
            let c;
            function d() {
                i.value = null === t.modelValue ? s.value : Ve(t.modelValue, s.value, u.value),
                B(!0)
            }
            e.watch(()=>`${t.modelValue}|${s.value}|${u.value}`, d),
            d();
            const v = e.computed(()=>!1 === t.disable && !1 === t.readonly)
              , p = e.computed(()=>"q-knob non-selectable" + (!0 === v.value ? " q-knob--editable" : !0 === t.disable ? " disabled" : ""))
              , m = e.computed(()=>(String(t.step).trim("0").split(".")[1] || "").length)
              , f = e.computed(()=>0 === t.step ? 1 : t.step)
              , h = e.computed(()=>!0 === t.instantFeedback || !0 === r.value)
              , g = !0 === l.platform.is.mobile ? e.computed(()=>!0 === v.value ? {
                onClick: C
            } : {}) : e.computed(()=>!0 === v.value ? {
                onMousedown: k,
                onClick: C,
                onKeydown: q,
                onKeyup: T
            } : {})
              , b = e.computed(()=>!0 === v.value ? {
                tabindex: t.tabindex
            } : {
                [`aria-${!0 === t.disable ? "disabled" : "readonly"}`]: "true"
            })
              , y = e.computed(()=>{
                const e = {};
                return Yu.forEach(o=>{
                    e[o] = t[o]
                }
                ),
                e
            }
            );
            function x(e) {
                e.isFinal ? (M(e.evt, !0),
                r.value = !1) : e.isFirst ? (S(),
                r.value = !0,
                M(e.evt)) : M(e.evt)
            }
            const _ = e.computed(()=>{
                return [[Va, x, void 0, {
                    prevent: !0,
                    stop: !0,
                    mouse: !0
                }]]
            }
            );
            function S() {
                const {top: e, left: t, width: o, height: n} = a.$el.getBoundingClientRect();
                c = {
                    top: e + n / 2,
                    left: t + o / 2
                }
            }
            function k(e) {
                S(),
                M(e)
            }
            function C(e) {
                S(),
                M(e, !0)
            }
            function q(e) {
                if (!Wu.includes(e.keyCode))
                    return;
                $(e);
                const t = ([34, 33].includes(e.keyCode) ? 10 : 1) * f.value
                  , o = [34, 37, 40].includes(e.keyCode) ? -t : t;
                i.value = Ve(parseFloat((i.value + o).toFixed(m.value)), s.value, u.value),
                B()
            }
            function M(e, o) {
                const a = w(e)
                  , r = Math.abs(a.top - c.top)
                  , d = Math.sqrt(r ** 2 + Math.abs(a.left - c.left) ** 2);
                let v = Math.asin(r / d) * (180 / Math.PI);
                v = a.top < c.top ? c.left < a.left ? 90 - v : 270 + v : c.left < a.left ? v + 90 : 270 - v,
                !0 === l.lang.rtl ? v = Le(-v - t.angle, 0, 360) : t.angle && (v = Le(v - t.angle, 0, 360)),
                !0 === t.reverse && (v = 360 - v);
                let p = t.min + v / 360 * (t.max - t.min);
                if (0 !== f.value) {
                    const e = p % f.value;
                    p = p - e + (Math.abs(e) >= f.value / 2 ? (e < 0 ? -1 : 1) * f.value : 0),
                    p = parseFloat(p.toFixed(m.value))
                }
                p = Ve(p, s.value, u.value),
                n("drag-value", p),
                i.value !== p && (i.value = p),
                B(o)
            }
            function T(e) {
                Wu.includes(e.keyCode) && B(!0)
            }
            function B(e) {
                t.modelValue !== i.value && n("update:modelValue", i.value),
                !0 === e && n("change", i.value)
            }
            const z = Nn(t);
            function O() {
                return e.h("input", z.value)
            }
            return ()=>{
                const e = {
                    class: p.value,
                    role: "slider",
                    "aria-valuemin": s.value,
                    "aria-valuemax": u.value,
                    "aria-valuenow": t.modelValue,
                    ...b.value,
                    ...y.value,
                    value: i.value,
                    instantFeedback: h.value,
                    ...g.value
                }
                  , n = {
                    default: o.default
                };
                return !0 === v.value && void 0 !== t.name && (n.internal = O),
                et(Ba, e, n, "knob", v.value, ()=>_.value)
            }
        }
    });
    const {passive: Xu} = f
      , Zu = ["both", "horizontal", "vertical"];
    var Gu = Me({
        name: "QScrollObserver",
        props: {
            axis: {
                type: String,
                validator: e=>Zu.includes(e),
                default: "vertical"
            },
            debounce: [String, Number],
            scrollTarget: {
                default: void 0
            }
        },
        emits: ["scroll"],
        setup(t, {emit: o}) {
            const n = {
                position: {
                    top: 0,
                    left: 0
                },
                direction: "down",
                directionChanged: !1,
                delta: {
                    top: 0,
                    left: 0
                },
                inflectionPoint: {
                    top: 0,
                    left: 0
                }
            };
            let a, l, i = null;
            function r() {
                null !== i && i();
                const e = Math.max(0, Zo(a))
                  , l = Go(a)
                  , r = {
                    top: e - n.position.top,
                    left: l - n.position.left
                };
                if ("vertical" === t.axis && 0 === r.top || "horizontal" === t.axis && 0 === r.left)
                    return;
                const s = Math.abs(r.top) >= Math.abs(r.left) ? r.top < 0 ? "up" : "down" : r.left < 0 ? "left" : "right";
                n.position = {
                    top: e,
                    left: l
                },
                n.directionChanged = n.direction !== s,
                n.delta = r,
                !0 === n.directionChanged && (n.direction = s,
                n.inflectionPoint = n.position),
                o("scroll", {
                    ...n
                })
            }
            function s() {
                a = Yo(l, t.scrollTarget),
                a.addEventListener("scroll", c, Xu),
                c(!0)
            }
            function u() {
                void 0 !== a && (a.removeEventListener("scroll", c, Xu),
                a = void 0)
            }
            function c(e) {
                if (!0 === e || 0 === t.debounce || "0" === t.debounce)
                    r();
                else if (null === i) {
                    const [e,o] = t.debounce ? [setTimeout(r, t.debounce), clearTimeout] : [requestAnimationFrame(r), cancelAnimationFrame];
                    i = (()=>{
                        o(e),
                        i = null
                    }
                    )
                }
            }
            e.watch(()=>t.scrollTarget, ()=>{
                u(),
                s()
            }
            );
            const d = e.getCurrentInstance();
            return e.onMounted(()=>{
                l = d.proxy.$el.parentNode,
                s()
            }
            ),
            e.onBeforeUnmount(()=>{
                null !== i && i(),
                u()
            }
            ),
            Object.assign(d.proxy, {
                trigger: c,
                getPosition: ()=>n
            }),
            h
        }
    })
      , Ju = Me({
        name: "QLayout",
        props: {
            container: Boolean,
            view: {
                type: String,
                default: "hhh lpr fff",
                validator: e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())
            },
            onScroll: Function,
            onScrollHeight: Function,
            onResize: Function
        },
        setup(t, {slots: o, emit: a}) {
            const {proxy: {$q: l}} = e.getCurrentInstance()
              , i = e.ref(null)
              , r = e.ref(l.screen.height)
              , s = e.ref(!0 === t.container ? 0 : l.screen.width)
              , u = e.ref({
                position: 0,
                direction: "down",
                inflectionPoint: 0
            })
              , c = e.ref(0)
              , d = e.ref(!0 === n.value ? 0 : rn())
              , v = e.computed(()=>"q-layout q-layout--" + (!0 === t.container ? "containerized" : "standard"))
              , p = e.computed(()=>!1 === t.container ? {
                minHeight: l.screen.height + "px"
            } : null)
              , m = e.computed(()=>0 !== d.value ? {
                [!0 === l.lang.rtl ? "left" : "right"]: `${d.value}px`
            } : null)
              , f = e.computed(()=>0 !== d.value ? {
                [!0 === l.lang.rtl ? "right" : "left"]: 0,
                [!0 === l.lang.rtl ? "left" : "right"]: `-${d.value}px`,
                width: `calc(100% + ${d.value}px)`
            } : null);
            function h(e) {
                if (!0 === t.container || !0 !== document.qScrollPrevented) {
                    const o = {
                        position: e.position.top,
                        direction: e.direction,
                        directionChanged: e.directionChanged,
                        inflectionPoint: e.inflectionPoint.top,
                        delta: e.delta.top
                    };
                    u.value = o,
                    void 0 !== t.onScroll && a("scroll", o)
                }
            }
            function g(e) {
                const {height: o, width: n} = e;
                let l = !1;
                r.value !== o && (l = !0,
                r.value = o,
                void 0 !== t.onScrollHeight && a("scroll-height", o),
                y()),
                s.value !== n && (l = !0,
                s.value = n),
                !0 === l && void 0 !== t.onResize && a("resize", e)
            }
            function b({height: e}) {
                c.value !== e && (c.value = e,
                y())
            }
            function y() {
                if (!0 === t.container) {
                    const e = r.value > c.value ? rn() : 0;
                    d.value !== e && (d.value = e)
                }
            }
            let w;
            const x = {
                instances: {},
                view: e.computed(()=>t.view),
                isContainer: e.computed(()=>t.container),
                rootRef: i,
                height: r,
                containerHeight: c,
                scrollbarWidth: d,
                totalWidth: e.computed(()=>s.value + d.value),
                rows: e.computed(()=>{
                    const e = t.view.toLowerCase().split(" ");
                    return {
                        top: e[0].split(""),
                        middle: e[1].split(""),
                        bottom: e[2].split("")
                    }
                }
                ),
                header: e.reactive({
                    size: 0,
                    offset: 0,
                    space: !1
                }),
                right: e.reactive({
                    size: 300,
                    offset: 0,
                    space: !1
                }),
                footer: e.reactive({
                    size: 0,
                    offset: 0,
                    space: !1
                }),
                left: e.reactive({
                    size: 300,
                    offset: 0,
                    space: !1
                }),
                scroll: u,
                animate() {
                    void 0 !== w ? clearTimeout(w) : document.body.classList.add("q-body--layout-animate"),
                    w = setTimeout(()=>{
                        document.body.classList.remove("q-body--layout-animate"),
                        w = void 0
                    }
                    , 155)
                },
                update(e, t, o) {
                    x[e][t] = o
                }
            };
            if (e.provide(ie, x),
            rn() > 0) {
                let o = null;
                const n = document.body;
                function _() {
                    o = null,
                    n.classList.remove("hide-scrollbar")
                }
                function S() {
                    if (null === o) {
                        if (n.scrollHeight > l.screen.height)
                            return;
                        n.classList.add("hide-scrollbar")
                    } else
                        clearTimeout(o);
                    o = setTimeout(_, 300)
                }
                function k(e) {
                    null !== o && "remove" === e && (clearTimeout(o),
                    _()),
                    window[`${e}EventListener`]("resize", S)
                }
                e.watch(()=>!0 !== t.container ? "add" : "remove", k),
                !0 !== t.container && k("add"),
                e.onUnmounted(()=>{
                    k("remove")
                }
                )
            }
            return ()=>{
                const n = Ge(o.default, [e.h(Gu, {
                    onScroll: h
                }), e.h(Ua, {
                    onResize: g
                })])
                  , a = e.h("div", {
                    class: v.value,
                    style: p.value,
                    ref: !0 === t.container ? void 0 : i,
                    tabindex: -1
                }, n);
                return !0 === t.container ? e.h("div", {
                    class: "q-layout-container overflow-hidden",
                    ref: i
                }, [e.h(Ua, {
                    onResize: b
                }), e.h("div", {
                    class: "absolute-full",
                    style: m.value
                }, [e.h("div", {
                    class: "scroll",
                    style: f.value
                }, [a])])]) : a
            }
        }
    });
    const ec = ["horizontal", "vertical", "cell", "none"];
    var tc = Me({
        name: "QMarkupTable",
        props: {
            ...yt,
            dense: Boolean,
            flat: Boolean,
            bordered: Boolean,
            square: Boolean,
            wrapCells: Boolean,
            separator: {
                type: String,
                default: "horizontal",
                validator: e=>ec.includes(e)
            }
        },
        setup(t, {slots: o}) {
            const n = e.getCurrentInstance()
              , a = wt(t, n.proxy.$q)
              , l = e.computed(()=>"q-markup-table q-table__container q-table__card" + ` q-table--${t.separator}-separator` + (!0 === a.value ? " q-table--dark q-table__card--dark q-dark" : "") + (!0 === t.dense ? " q-table--dense" : "") + (!0 === t.flat ? " q-table--flat" : "") + (!0 === t.bordered ? " q-table--bordered" : "") + (!0 === t.square ? " q-table--square" : "") + (!1 === t.wrapCells ? " q-table--no-wrap" : ""));
            return ()=>e.h("div", {
                class: l.value
            }, [e.h("table", {
                class: "q-table"
            }, Xe(o.default))])
        }
    })
      , oc = Me({
        name: "QNoSsr",
        props: {
            tag: {
                type: String,
                default: "div"
            },
            placeholder: String
        },
        setup(t, {slots: o}) {
            const n = Da();
            return ()=>{
                const a = {};
                if (!0 === n.value) {
                    const n = Xe(o.default);
                    return void 0 === n ? n : n.length > 1 ? e.h(t.tag, a, n) : n[0]
                }
                a.class = "q-no-ssr-placeholder";
                const l = Xe(o.placeholder);
                return void 0 !== l ? l.length > 1 ? e.h(t.tag, a, l) : l[0] : void 0 !== t.placeholder ? e.h(t.tag, a, t.placeholder) : void 0
            }
        }
    });
    const nc = e.h("svg", {
        key: "svg",
        class: "q-radio__bg absolute non-selectable",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
    }, [e.h("path", {
        d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"
    }), e.h("path", {
        class: "q-radio__check",
        d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
    })]);
    var ac = Me({
        name: "QRadio",
        props: {
            ...yt,
            ...Ye,
            ...In,
            modelValue: {
                required: !0
            },
            val: {
                required: !0
            },
            label: String,
            leftLabel: Boolean,
            checkedIcon: String,
            uncheckedIcon: String,
            color: String,
            keepColor: Boolean,
            dense: Boolean,
            disable: Boolean,
            tabindex: [String, Number]
        },
        emits: ["update:modelValue"],
        setup(t, {slots: o, emit: n}) {
            const {proxy: a} = e.getCurrentInstance()
              , l = wt(t, a.$q)
              , i = Ke(t, ga)
              , r = e.ref(null)
              , {refocusTargetEl: s, refocusTarget: u} = ha(t, r)
              , c = e.computed(()=>e.toRaw(t.modelValue) === e.toRaw(t.val))
              , d = e.computed(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center" + (!0 === t.disable ? " disabled" : "") + (!0 === l.value ? " q-radio--dark" : "") + (!0 === t.dense ? " q-radio--dense" : "") + (!0 === t.leftLabel ? " reverse" : ""))
              , v = e.computed(()=>{
                const e = void 0 === t.color || !0 !== t.keepColor && !0 !== c.value ? "" : ` text-${t.color}`;
                return "q-radio__inner relative-position " + `q-radio__inner--${!0 === c.value ? "truthy" : "falsy"}${e}`
            }
            )
              , p = e.computed(()=>(!0 === c.value ? t.checkedIcon : t.uncheckedIcon) || null)
              , m = e.computed(()=>!0 === t.disable ? -1 : t.tabindex || 0)
              , f = e.computed(()=>{
                const e = {
                    type: "radio"
                };
                return void 0 !== t.name && Object.assign(e, {
                    "^checked": !0 === c.value ? "checked" : void 0,
                    name: t.name,
                    value: t.val
                }),
                e
            }
            )
              , h = jn(f);
            function g(e) {
                void 0 !== e && ($(e),
                u(e)),
                !0 !== t.disable && !0 !== c.value && n("update:modelValue", t.val, e)
            }
            function b(e) {
                13 !== e.keyCode && 32 !== e.keyCode || $(e)
            }
            function y(e) {
                13 !== e.keyCode && 32 !== e.keyCode || g(e)
            }
            return Object.assign(a, {
                set: g
            }),
            ()=>{
                const n = null !== p.value ? [e.h("div", {
                    key: "icon",
                    class: "q-radio__icon-container absolute-full flex flex-center no-wrap"
                }, [e.h(ft, {
                    class: "q-radio__icon",
                    name: p.value
                })])] : [nc];
                !0 !== t.disable && h(n, "unshift", " q-radio__native q-ma-none q-pa-none");
                const a = [e.h("div", {
                    class: v.value,
                    style: i.value
                }, n)];
                null !== s.value && a.push(s.value);
                const l = void 0 !== t.label ? Ge(o.default, [t.label]) : Xe(o.default);
                return void 0 !== l && a.push(e.h("div", {
                    class: "q-radio__label q-anchor--skip"
                }, l)),
                e.h("div", {
                    ref: r,
                    class: d.value,
                    tabindex: m.value,
                    role: "radio",
                    "aria-label": t.label,
                    "aria-checked": !0 === c.value ? "true" : "false",
                    "aria-disabled": !0 === t.disable ? "true" : void 0,
                    onClick: g,
                    onKeydown: b,
                    onKeyup: y
                }, a)
            }
        }
    })
      , lc = Me({
        name: "QToggle",
        props: {
            ...ba,
            icon: String,
            iconColor: String
        },
        emits: ya,
        setup(t) {
            function o(o, n) {
                const a = e.computed(()=>(!0 === o.value ? t.checkedIcon : !0 === n.value ? t.indeterminateIcon : t.uncheckedIcon) || t.icon)
                  , l = e.computed(()=>!0 === o.value ? t.iconColor : null);
                return ()=>[e.h("div", {
                    class: "q-toggle__track"
                }), e.h("div", {
                    class: "q-toggle__thumb absolute flex flex-center no-wrap"
                }, void 0 !== a.value ? [e.h(ft, {
                    name: a.value,
                    color: l.value
                })] : void 0)]
            }
            return wa("toggle", o)
        }
    });
    const ic = {
        radio: ac,
        checkbox: _a,
        toggle: lc
    }
      , rc = Object.keys(ic);
    var sc = Me({
        name: "QOptionGroup",
        props: {
            ...yt,
            modelValue: {
                required: !0
            },
            options: {
                type: Array,
                validator: e=>e.every(e=>"value"in e && "label"in e)
            },
            name: String,
            type: {
                default: "radio",
                validator: e=>rc.includes(e)
            },
            color: String,
            keepColor: Boolean,
            dense: Boolean,
            size: String,
            leftLabel: Boolean,
            inline: Boolean,
            disable: Boolean
        },
        emits: ["update:modelValue"],
        setup(t, {emit: o, slots: n}) {
            const {proxy: {$q: a}} = e.getCurrentInstance()
              , l = Array.isArray(t.modelValue);
            "radio" === t.type ? !0 === l && console.error("q-option-group: model should not be array") : !1 === l && console.error("q-option-group: model should be array in your case");
            const i = wt(t, a)
              , r = e.computed(()=>ic[t.type])
              , s = e.computed(()=>"q-option-group q-gutter-x-sm" + (!0 === t.inline ? " q-option-group--inline" : ""))
              , u = e.computed(()=>{
                const e = {};
                return "radio" === t.type && (e.role = "radiogroup",
                !0 === t.disable && (e["aria-disabled"] = "true")),
                e
            }
            );
            function c(e) {
                o("update:modelValue", e)
            }
            return ()=>e.h("div", {
                class: s.value,
                ...u.value
            }, t.options.map((o,a)=>{
                const l = void 0 !== n["label-" + a] ? ()=>n["label-" + a](o) : void 0 !== n.label ? ()=>n.label(o) : void 0;
                return e.h("div", [e.h(r.value, {
                    modelValue: t.modelValue,
                    val: o.value,
                    name: void 0 === o.name ? t.name : o.name,
                    disable: t.disable || o.disable,
                    label: void 0 === l ? o.label : null,
                    leftLabel: void 0 === o.leftLabel ? t.leftLabel : o.leftLabel,
                    color: void 0 === o.color ? t.color : o.color,
                    checkedIcon: o.checkedIcon,
                    uncheckedIcon: o.uncheckedIcon,
                    dark: o.dark || i.value,
                    size: void 0 === o.size ? t.size : o.size,
                    dense: t.dense,
                    keepColor: void 0 === o.keepColor ? t.keepColor : o.keepColor,
                    "onUpdate:modelValue": c
                }, l)])
            }
            ))
        }
    })
      , uc = Me({
        name: "QPage",
        props: {
            padding: Boolean,
            styleFn: Function
        },
        setup(t, {slots: o}) {
            const {proxy: {$q: n}} = e.getCurrentInstance()
              , a = e.inject(ie);
            e.inject(re, ()=>{
                console.error("QPage needs to be child of QPageContainer")
            }
            );
            const l = e.computed(()=>{
                const e = (!0 === a.header.space ? a.header.size : 0) + (!0 === a.footer.space ? a.footer.size : 0);
                if ("function" === typeof t.styleFn) {
                    const o = !0 === a.isContainer.value ? a.containerHeight.value : n.screen.height;
                    return t.styleFn(e, o)
                }
                return {
                    minHeight: !0 === a.isContainer.value ? a.containerHeight.value - e + "px" : 0 === n.screen.height ? 0 !== e ? `calc(100vh - ${e}px)` : "100vh" : n.screen.height - e + "px"
                }
            }
            )
              , i = e.computed(()=>`q-page ${!0 === t.padding ? " q-layout-padding" : ""}`);
            return ()=>e.h("main", {
                class: i.value,
                style: l.value
            }, Xe(o.default))
        }
    })
      , cc = Me({
        name: "QPageContainer",
        setup(t, {slots: o}) {
            const {proxy: {$q: n}} = e.getCurrentInstance()
              , a = e.inject(ie, ()=>{
                console.error("QPageContainer needs to be child of QLayout")
            }
            );
            e.provide(re, !0);
            const l = e.computed(()=>{
                const e = {};
                return !0 === a.header.space && (e.paddingTop = `${a.header.size}px`),
                !0 === a.right.space && (e[`padding ${!0 === n.lang.rtl ? "Left" : "Right"}`] = `${a.right.size}px`),
                !0 === a.footer.space && (e.paddingBottom = `${a.footer.size}px`),
                !0 === a.left.space && (e[`padding ${!0 === n.lang.rtl ? "Right" : "Left"}`] = `${a.left.size}px`),
                e
            }
            );
            return ()=>e.h("div", {
                class: "q-page-container",
                style: l.value
            }, Xe(o.default))
        }
    });
    const dc = {
        position: {
            type: String,
            default: "bottom-right",
            validator: e=>["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e)
        },
        offset: {
            type: Array,
            validator: e=>2 === e.length
        },
        expand: Boolean
    };
    function vc() {
        const {props: t, proxy: o} = e.getCurrentInstance()
          , {$q: n} = o
          , a = e.inject(ie, ()=>{
            console.error("QPageSticky needs to be child of QLayout")
        }
        )
          , l = e.computed(()=>{
            const e = t.position;
            return {
                top: e.indexOf("top") > -1,
                right: e.indexOf("right") > -1,
                bottom: e.indexOf("bottom") > -1,
                left: e.indexOf("left") > -1,
                vertical: "top" === e || "bottom" === e,
                horizontal: "left" === e || "right" === e
            }
        }
        )
          , i = e.computed(()=>a.header.offset)
          , r = e.computed(()=>a.right.offset)
          , s = e.computed(()=>a.footer.offset)
          , u = e.computed(()=>a.left.offset)
          , c = e.computed(()=>{
            let e = 0
              , o = 0;
            const a = l.value
              , c = !0 === n.lang.rtl ? -1 : 1;
            !0 === a.top && 0 !== i.value ? o = `${i.value}px` : !0 === a.bottom && 0 !== s.value && (o = `${-s.value}px`),
            !0 === a.left && 0 !== u.value ? e = `${c * u.value}px` : !0 === a.right && 0 !== r.value && (e = `${-c * r.value}px`);
            const d = {
                transform: `translate(${e}, ${o})`
            };
            return t.offset && (d.margin = `${t.offset[1]}px ${t.offset[0]}px`),
            !0 === a.vertical ? (0 !== u.value && (d[!0 === n.lang.rtl ? "right" : "left"] = `${u.value}px`),
            0 !== r.value && (d[!0 === n.lang.rtl ? "left" : "right"] = `${r.value}px`)) : !0 === a.horizontal && (0 !== i.value && (d.top = `${i.value}px`),
            0 !== s.value && (d.bottom = `${s.value}px`)),
            d
        }
        )
          , d = e.computed(()=>`q-page-sticky row flex-center fixed-${t.position}` + ` q-page-sticky--${!0 === t.expand ? "expand" : "shrink"}`);
        function v(o) {
            const n = Xe(o.default);
            return e.h("div", {
                class: d.value,
                style: c.value
            }, !0 === t.expand ? n : [e.h("div", n)])
        }
        return {
            $layout: a,
            getStickyContent: v
        }
    }
    var pc = Me({
        name: "QPageScroller",
        props: {
            ...dc,
            scrollOffset: {
                type: Number,
                default: 1e3
            },
            reverse: Boolean,
            duration: {
                type: Number,
                default: 300
            },
            offset: {
                default: ()=>[18, 18]
            }
        },
        emits: ["click"],
        setup(t, {slots: o, emit: n}) {
            const {proxy: {$q: a}} = e.getCurrentInstance()
              , {$layout: l, getStickyContent: i} = vc()
              , r = e.ref(null);
            let s;
            const u = e.computed(()=>l.height.value - (!0 === l.isContainer.value ? l.containerHeight.value : a.screen.height));
            function c() {
                return !0 === t.reverse ? u.value - l.scroll.value.position > t.scrollOffset : l.scroll.value.position > t.scrollOffset
            }
            const d = e.ref(c());
            function v() {
                const e = c();
                d.value !== e && (d.value = e)
            }
            function p() {
                !0 === t.reverse ? void 0 === s && (s = e.watch(u, v)) : m()
            }
            function m() {
                void 0 !== s && (s(),
                s = void 0)
            }
            function f(e) {
                const o = Yo(!0 === l.isContainer.value ? r.value : l.rootRef.value);
                nn(o, !0 === t.reverse ? l.height.value : 0, t.duration),
                n("click", e)
            }
            function h() {
                return !0 === d.value ? e.h("div", {
                    ref: r,
                    class: "q-page-scroller",
                    onClick: f
                }, i(o)) : null
            }
            return e.watch(l.scroll, v),
            e.watch(()=>t.reverse, p),
            p(),
            e.onBeforeUnmount(m),
            ()=>e.h(e.Transition, {
                name: "q-transition--fade"
            }, h)
        }
    })
      , mc = Me({
        name: "QPageSticky",
        props: dc,
        setup(e, {slots: t}) {
            const {getStickyContent: o} = vc();
            return ()=>o(t)
        }
    })
      , fc = Me({
        name: "QPagination",
        props: {
            ...yt,
            modelValue: {
                type: Number,
                required: !0
            },
            min: {
                type: Number,
                default: 1
            },
            max: {
                type: Number,
                required: !0
            },
            color: {
                type: String,
                default: "primary"
            },
            textColor: String,
            activeColor: String,
            activeTextColor: String,
            inputStyle: [Array, String, Object],
            inputClass: [Array, String, Object],
            size: String,
            disable: Boolean,
            input: Boolean,
            iconPrev: String,
            iconNext: String,
            iconFirst: String,
            iconLast: String,
            toFn: Function,
            boundaryLinks: {
                type: Boolean,
                default: null
            },
            boundaryNumbers: {
                type: Boolean,
                default: null
            },
            directionLinks: {
                type: Boolean,
                default: null
            },
            ellipses: {
                type: Boolean,
                default: null
            },
            maxPages: {
                type: Number,
                default: 0,
                validator: e=>e >= 0
            },
            ripple: {
                type: [Boolean, Object],
                default: null
            },
            round: Boolean,
            rounded: Boolean,
            flat: Boolean,
            outline: Boolean,
            unelevated: Boolean,
            push: Boolean,
            glossy: Boolean,
            dense: Boolean,
            padding: {
                type: String,
                default: "3px 2px"
            }
        },
        emits: ["update:modelValue"],
        setup(t, {emit: o}) {
            const {proxy: n} = e.getCurrentInstance()
              , {$q: a} = n
              , l = wt(t, a)
              , i = e.ref(null)
              , r = e.computed({
                get: ()=>t.modelValue,
                set: e=>{
                    if (e = parseInt(e, 10),
                    t.disable || isNaN(e))
                        return;
                    const n = Ve(e, t.min, t.max);
                    t.modelValue !== n && o("update:modelValue", n)
                }
            });
            function s(e, t) {
                return [!0, !1].includes(e) ? e : t
            }
            e.watch(()=>t.min + t.max, ()=>{
                r.value = t.modelValue
            }
            );
            const u = e.computed(()=>"q-pagination row no-wrap items-center" + (!0 === t.disable ? " disabled" : ""))
              , c = e.computed(()=>r.value + " / " + t.max)
              , d = e.computed(()=>s(t.boundaryLinks, t.input))
              , v = e.computed(()=>s(t.boundaryNumbers, !t.input))
              , p = e.computed(()=>s(t.directionLinks, t.input))
              , m = e.computed(()=>s(t.ellipses, !t.input))
              , f = e.computed(()=>{
                const e = [t.iconFirst || a.iconSet.pagination.first, t.iconPrev || a.iconSet.pagination.prev, t.iconNext || a.iconSet.pagination.next, t.iconLast || a.iconSet.pagination.last];
                return !0 === a.lang.rtl ? e.reverse() : e
            }
            )
              , h = e.computed(()=>!0 === t.disable ? {
                "aria-disabled": "true"
            } : {})
              , g = e.computed(()=>({
                round: t.round,
                rounded: t.rounded,
                outline: t.outline,
                unelevated: t.unelevated,
                push: t.push,
                glossy: t.glossy,
                dense: t.dense,
                padding: t.padding,
                color: t.color,
                flat: !0,
                size: t.size,
                ripple: null === t.ripple || t.ripple
            }))
              , b = e.computed(()=>({
                flat: t.flat,
                color: t.activeColor || t.color,
                textColor: t.activeTextColor || t.textColor
            }));
            function y(e) {
                r.value = e
            }
            function w(e) {
                r.value = r.value + e
            }
            function x() {
                r.value = i.value,
                i.value = null
            }
            function _(o, n) {
                const a = {
                    ...g.value,
                    ...o
                };
                return void 0 !== n && (void 0 !== t.toFn ? a.to = t.toFn(n) : a.onClick = (()=>y(n))),
                e.h(ho, a)
            }
            return Object.assign(n, {
                set: y,
                setByOffset: w
            }),
            ()=>{
                const o = []
                  , n = []
                  , a = [];
                if (d.value && (o.push(_({
                    key: "bls",
                    disable: t.disable || t.modelValue <= t.min,
                    icon: f.value[0]
                }, t.min)),
                n.unshift(_({
                    key: "ble",
                    disable: t.disable || t.modelValue >= t.max,
                    icon: f.value[3]
                }, t.max))),
                p.value && (o.push(_({
                    key: "bdp",
                    disable: t.disable || t.modelValue <= t.min,
                    icon: f.value[1]
                }, t.modelValue - 1)),
                n.unshift(_({
                    key: "bdn",
                    disable: t.disable || t.modelValue >= t.max,
                    icon: f.value[2]
                }, t.modelValue + 1))),
                !0 === t.input)
                    a.push(e.h(Iu, {
                        class: "inline",
                        style: {
                            width: `${c.value.length / 1.5}em`
                        },
                        type: "number",
                        dense: !0,
                        value: i.value,
                        disable: t.disable,
                        dark: l.value,
                        borderless: !0,
                        inputClass: t.inputClass,
                        inputStyle: t.inputStyle,
                        placeholder: c.value,
                        min: t.min,
                        max: t.max,
                        "onUpdate:modelValue"(e) {
                            i.value = e
                        },
                        onKeyup(e) {
                            !0 === K(e, 13) && x()
                        },
                        onBlur: x
                    }));
                else {
                    let e = Math.max(t.maxPages, 1 + (m.value ? 2 : 0) + (v.value ? 2 : 0))
                      , l = t.min
                      , i = t.max
                      , r = !1
                      , s = !1
                      , u = !1
                      , c = !1;
                    t.maxPages && e < t.max - t.min + 1 && (e = 1 + 2 * Math.floor(e / 2),
                    l = Math.max(t.min, Math.min(t.max - e + 1, t.modelValue - Math.floor(e / 2))),
                    i = Math.min(t.max, l + e - 1),
                    v.value && (u = !0,
                    l += 1),
                    m.value && l > t.min + (v.value ? 1 : 0) && (r = !0,
                    l += 1),
                    v.value && (c = !0,
                    i -= 1),
                    m.value && i < t.max - (v.value ? 1 : 0) && (s = !0,
                    i -= 1));
                    const d = {
                        minWidth: `${Math.max(2, String(t.max).length)}em`
                    };
                    if (u) {
                        const e = t.min === t.modelValue;
                        o.push(_({
                            key: "bns",
                            style: d,
                            disable: t.disable,
                            flat: !e,
                            label: t.min,
                            ...e ? b.value : {}
                        }, t.min))
                    }
                    if (c) {
                        const e = t.max === t.modelValue;
                        n.unshift(_({
                            key: "bne",
                            style: d,
                            disable: t.disable,
                            flat: !e,
                            label: t.max,
                            ...e ? b.value : {}
                        }, t.max))
                    }
                    r && o.push(_({
                        key: "bes",
                        style: d,
                        disable: t.disable,
                        label: "…",
                        ripple: !1
                    }, l - 1)),
                    s && n.unshift(_({
                        key: "bee",
                        style: d,
                        disable: t.disable,
                        label: "…",
                        ripple: !1
                    }, i + 1));
                    for (let o = l; o <= i; o++) {
                        const e = {
                            key: `bpg ${o}`,
                            style: d,
                            disable: t.disable,
                            label: o
                        };
                        o === t.modelValue && Object.assign(e, b.value),
                        a.push(_(e, o))
                    }
                }
                return e.h("div", {
                    class: u.value,
                    ...h.value
                }, [o, e.h("div", {
                    class: "row justify-center"
                }, [a]), n])
            }
        }
    });
    const {passive: hc} = f;
    var gc = Me({
        name: "QParallax",
        props: {
            src: String,
            height: {
                type: Number,
                default: 500
            },
            speed: {
                type: Number,
                default: 1,
                validator: e=>e >= 0 && e <= 1
            },
            scrollTarget: {
                default: void 0
            },
            onScroll: Function
        },
        setup(t, {slots: o, emit: n}) {
            const a = e.ref(0)
              , l = e.ref(null)
              , i = e.ref(null)
              , r = e.ref(null);
            let s, u, c, d, v, p;
            e.watch(()=>t.height, ()=>{
                !0 === s && f()
            }
            ),
            e.watch(()=>t.scrollTarget, ()=>{
                !0 === s && (y(),
                b())
            }
            );
            let m = e=>{
                a.value = e,
                void 0 !== t.onScroll && n("scroll", e)
            }
            ;
            function f() {
                let e, o, n;
                p === window ? (e = 0,
                n = o = window.innerHeight) : (e = Qt(p).top,
                o = Wt(p),
                n = e + o);
                const a = Qt(l.value).top
                  , i = a + t.height;
                if (void 0 !== v || i > e && a < n) {
                    const e = (n - a) / (t.height + o);
                    h((c - t.height) * e * t.speed),
                    m(e)
                }
            }
            let h = e=>{
                u.style.transform = `translate3d(-50%,${Math.round(e)}px,0)`
            }
            ;
            function g() {
                c = u.naturalHeight || u.videoHeight || Wt(u),
                !0 === s && f()
            }
            function b() {
                s = !0,
                p = Yo(l.value, t.scrollTarget),
                p.addEventListener("scroll", f, hc),
                window.addEventListener("resize", d, hc),
                f()
            }
            function y() {
                !0 === s && (s = !1,
                p.removeEventListener("scroll", f, hc),
                window.removeEventListener("resize", d, hc),
                p = void 0,
                h.cancel(),
                m.cancel(),
                d.cancel())
            }
            return e.onMounted(()=>{
                h = As(h),
                m = As(m),
                d = As(g),
                u = void 0 !== o.media ? i.value.children[0] : r.value,
                u.onload = u.onloadstart = u.loadedmetadata = g,
                g(),
                u.style.display = "initial",
                void 0 !== window.IntersectionObserver ? (v = new IntersectionObserver(e=>{
                    const t = !0 === e[0].isIntersecting ? b : y;
                    t()
                }
                ),
                v.observe(l.value)) : b()
            }
            ),
            e.onBeforeUnmount(()=>{
                y(),
                void 0 !== v && v.disconnect(),
                u.onload = u.onloadstart = u.loadedmetadata = null
            }
            ),
            ()=>{
                return e.h("div", {
                    ref: l,
                    class: "q-parallax",
                    style: {
                        height: `${t.height}px`
                    }
                }, [e.h("div", {
                    ref: i,
                    class: "q-parallax__media absolute-full"
                }, void 0 !== o.media ? o.media() : [e.h("img", {
                    ref: r,
                    src: t.src
                })]), e.h("div", {
                    class: "q-parallax__content absolute-full column flex-center"
                }, void 0 !== o.content ? o.content({
                    percentScrolled: a.value
                }) : Xe(o.default))])
            }
        }
    })
      , bc = Me({
        name: "QPopupEdit",
        props: {
            modelValue: {
                required: !0
            },
            title: String,
            buttons: Boolean,
            labelSet: String,
            labelCancel: String,
            color: {
                type: String,
                default: "primary"
            },
            validate: {
                type: Function,
                default: ()=>!0
            },
            autoSave: Boolean,
            cover: {
                type: Boolean,
                default: !0
            },
            disable: Boolean
        },
        emits: ["update:modelValue", "save", "cancel", "before-show", "show", "before-hide", "hide"],
        setup(o, {slots: n, emit: a}) {
            const {proxy: l} = e.getCurrentInstance()
              , {$q: i} = l
              , r = e.ref(null)
              , s = e.ref("")
              , u = e.ref("");
            let c = !1;
            const d = e.computed(()=>{
                const e = {
                    initialValue: s.value,
                    validate: o.validate,
                    set: v,
                    cancel: p,
                    updatePosition: m
                };
                return t(e, "value", ()=>u.value, e=>{
                    u.value = e
                }
                ),
                e
            }
            );
            function v() {
                !1 !== o.validate(u.value) && (!0 === f() && (a("save", u.value, s.value),
                a("update:modelValue", u.value)),
                h())
            }
            function p() {
                !0 === f() && a("cancel", u.value, s.value),
                h()
            }
            function m() {
                e.nextTick(()=>{
                    r.value.updatePosition()
                }
                )
            }
            function f() {
                return !1 === be(u.value, s.value)
            }
            function h() {
                c = !0,
                r.value.hide()
            }
            function g() {
                c = !1,
                s.value = ls(o.modelValue),
                u.value = ls(o.modelValue),
                a("before-show")
            }
            function b() {
                a("show")
            }
            function y() {
                !1 === c && !0 === f() && (!0 === o.autoSave && !0 === o.validate(u.value) ? (a("save", u.value, s.value),
                a("update:modelValue", u.value)) : a("cancel", u.value, s.value)),
                a("before-hide")
            }
            function w() {
                a("hide")
            }
            function x() {
                const t = void 0 !== n.default ? [].concat(n.default(d.value)) : [];
                return o.title && t.unshift(e.h("div", {
                    class: "q-dialog__title q-mt-sm q-mb-sm"
                }, o.title)),
                !0 === o.buttons && t.push(e.h("div", {
                    class: "q-popup-edit__buttons row justify-center no-wrap"
                }, [e.h(ho, {
                    flat: !0,
                    color: o.color,
                    label: o.labelCancel || i.lang.label.cancel,
                    onClick: p
                }), e.h(ho, {
                    flat: !0,
                    color: o.color,
                    label: o.labelSet || i.lang.label.set,
                    onClick: v
                })])),
                t
            }
            return Object.assign(l, {
                set: v,
                cancel: p,
                show(e) {
                    null !== r.value && r.value.show(e)
                },
                hide(e) {
                    null !== r.value && r.value.hide(e)
                },
                updatePosition: m
            }),
            ()=>{
                if (!0 !== o.disable)
                    return e.h(Rn, {
                        ref: r,
                        class: "q-popup-edit",
                        cover: o.cover,
                        onBeforeShow: g,
                        onShow: b,
                        onBeforeHide: y,
                        onHide: w,
                        onEscapeKey: p
                    }, x)
            }
        }
    })
      , yc = Me({
        name: "QPopupProxy",
        props: {
            ...yo,
            breakpoint: {
                type: [String, Number],
                default: 450
            }
        },
        emits: ["show", "hide"],
        setup(t, {slots: o, emit: n, attrs: a}) {
            const {proxy: l} = e.getCurrentInstance()
              , {$q: i} = l
              , r = e.ref(!1)
              , s = e.ref(null)
              , u = e.computed(()=>parseInt(t.breakpoint, 10))
              , {canShow: c} = wo({
                showing: r
            });
            function d() {
                return i.screen.width < u.value || i.screen.height < u.value ? "dialog" : "menu"
            }
            const v = e.ref(d())
              , p = e.computed(()=>"menu" === v.value ? {
                maxHeight: "99vh"
            } : {});
            function m(e) {
                r.value = !0,
                n("show", e)
            }
            function f(e) {
                r.value = !1,
                v.value = d(),
                n("hide", e)
            }
            return e.watch(()=>d(), e=>{
                !0 !== r.value && (v.value = e)
            }
            ),
            Object.assign(l, {
                show(e) {
                    !0 === c(e) && s.value.show(e)
                },
                hide(e) {
                    s.value.hide(e)
                },
                toggle(e) {
                    s.value.toggle(e)
                }
            }),
            ()=>{
                const n = {
                    ref: s,
                    ...p.value,
                    ...a,
                    onShow: m,
                    onHide: f
                };
                let l;
                return "dialog" === v.value ? l = sr : (l = Rn,
                Object.assign(n, {
                    target: t.target,
                    contextMenu: t.contextMenu,
                    noParentEvent: !0,
                    separateClosePopup: !0
                })),
                e.h(l, n, o.default)
            }
        }
    });
    const wc = {
        xs: 2,
        sm: 4,
        md: 6,
        lg: 10,
        xl: 14
    };
    function xc(e, t, o) {
        return {
            transform: !0 === t ? `translateX(${!0 === o.lang.rtl ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)`
        }
    }
    var _c = Me({
        name: "QLinearProgress",
        props: {
            ...yt,
            ...Ye,
            value: {
                type: Number,
                default: 0
            },
            buffer: Number,
            color: String,
            trackColor: String,
            reverse: Boolean,
            stripe: Boolean,
            indeterminate: Boolean,
            query: Boolean,
            rounded: Boolean,
            animationSpeed: {
                type: [String, Number],
                default: 2100
            },
            instantFeedback: Boolean
        },
        setup(t, {slots: o}) {
            const {proxy: n} = e.getCurrentInstance()
              , a = wt(t, n.$q)
              , l = Ke(t, wc)
              , i = e.computed(()=>!0 === t.indeterminate || !0 === t.query)
              , r = e.computed(()=>t.reverse !== t.query)
              , s = e.computed(()=>({
                ...null !== l.value ? l.value : {},
                "--q-linear-progress-speed": `${t.animationSpeed}ms`
            }))
              , u = e.computed(()=>"q-linear-progress" + (void 0 !== t.color ? ` text-${t.color}` : "") + (!0 === t.reverse || !0 === t.query ? " q-linear-progress--reverse" : "") + (!0 === t.rounded ? " rounded-borders" : ""))
              , c = e.computed(()=>xc(void 0 !== t.buffer ? t.buffer : 1, r.value, n.$q))
              , d = e.computed(()=>"q-linear-progress__track absolute-full" + ` q-linear-progress__track--with ${!0 === t.instantFeedback ? "out" : ""}-transition` + ` q-linear-progress__track--${!0 === a.value ? "dark" : "light"}` + (void 0 !== t.trackColor ? ` bg-${t.trackColor}` : ""))
              , v = e.computed(()=>xc(!0 === i.value ? 1 : t.value, r.value, n.$q))
              , p = e.computed(()=>"q-linear-progress__model absolute-full" + ` q-linear-progress__model--with ${!0 === t.instantFeedback ? "out" : ""}-transition` + ` q-linear-progress__model--${!0 === i.value ? "in" : ""}determinate`)
              , m = e.computed(()=>({
                width: `${100 * t.value}%`
            }))
              , f = e.computed(()=>`q-linear-progress__stripe absolute-${!0 === t.reverse ? "right" : "left"}`);
            return ()=>{
                const n = [e.h("div", {
                    class: d.value,
                    style: c.value
                }), e.h("div", {
                    class: p.value,
                    style: v.value
                })];
                return !0 === t.stripe && !1 === i.value && n.push(e.h("div", {
                    class: f.value,
                    style: m.value
                })),
                e.h("div", {
                    class: u.value,
                    style: s.value,
                    role: "progressbar",
                    "aria-valuemin": 0,
                    "aria-valuemax": 1,
                    "aria-valuenow": !0 === t.indeterminate ? void 0 : t.value
                }, Ge(o.default, n))
            }
        }
    });
    const Sc = 40
      , kc = 20;
    var Cc = Me({
        name: "QPullToRefresh",
        props: {
            color: String,
            bgColor: String,
            icon: String,
            noMouse: Boolean,
            disable: Boolean,
            scrollTarget: {
                default: void 0
            }
        },
        emits: ["refresh"],
        setup(t, {slots: o, emit: n}) {
            const {proxy: a} = e.getCurrentInstance()
              , {$q: l} = a
              , i = e.ref("pull")
              , r = e.ref(0)
              , s = e.ref(!1)
              , u = e.ref(-Sc)
              , c = e.ref(!1)
              , d = e.ref({})
              , v = e.computed(()=>({
                opacity: r.value,
                transform: `translateY(${u.value}px) rotate(${360 * r.value}deg)`
            }))
              , p = e.computed(()=>"q-pull-to-refresh__puller row flex-center" + (!0 === c.value ? " q-pull-to-refresh__puller--animating" : "") + (void 0 !== t.bgColor ? ` bg-${t.bgColor}` : ""));
            function m(e) {
                if (!0 === e.isFinal)
                    return void (!0 === s.value && (s.value = !1,
                    "pulled" === i.value ? (i.value = "refreshing",
                    b({
                        pos: kc
                    }),
                    g()) : "pull" === i.value && b({
                        pos: -Sc,
                        ratio: 0
                    })));
                if (!0 === c.value || "refreshing" === i.value)
                    return !1;
                if (!0 === e.isFirst) {
                    if (0 !== Zo(w) || "down" !== e.direction)
                        return !0 === s.value && (s.value = !1,
                        i.value = "pull",
                        b({
                            pos: -Sc,
                            ratio: 0
                        })),
                        !1;
                    s.value = !0;
                    const {top: t, left: o} = y.getBoundingClientRect();
                    d.value = {
                        top: t + "px",
                        left: o + "px",
                        width: window.getComputedStyle(y).getPropertyValue("width")
                    }
                }
                q(e.evt);
                const t = Math.min(140, Math.max(0, e.distance.y));
                u.value = t - Sc,
                r.value = Ve(t / (kc + Sc), 0, 1);
                const o = u.value > kc ? "pulled" : "pull";
                i.value !== o && (i.value = o)
            }
            const f = e.computed(()=>{
                const e = {
                    down: !0,
                    mightPrevent: !0
                };
                return !0 !== t.noMouse && (e.mouse = !0),
                [[Va, m, void 0, e]]
            }
            )
              , h = e.computed(()=>`q-pull-to-refresh__content ${!0 === s.value ? " no-pointer-events" : ""}`);
            function g() {
                n("refresh", ()=>{
                    b({
                        pos: -Sc,
                        ratio: 0
                    }, ()=>{
                        i.value = "pull"
                    }
                    )
                }
                )
            }
            function b({pos: e, ratio: t}, o) {
                c.value = !0,
                u.value = e,
                void 0 !== t && (r.value = t),
                clearTimeout(x),
                x = setTimeout(()=>{
                    c.value = !1,
                    o && o()
                }
                , 300)
            }
            let y, w, x;
            function _() {
                w = Yo(y, t.scrollTarget)
            }
            return Object.assign(a, {
                trigger: g,
                updateScrollTarget: _
            }),
            e.watch(()=>t.scrollTarget, _),
            e.onMounted(()=>{
                y = a.$el,
                _()
            }
            ),
            e.onBeforeUnmount(()=>{
                clearTimeout(x)
            }
            ),
            ()=>{
                const n = [e.h("div", {
                    class: h.value
                }, Xe(o.default)), e.h("div", {
                    class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top",
                    style: d.value
                }, [e.h("div", {
                    class: p.value,
                    style: v.value
                }, ["refreshing" !== i.value ? e.h(ft, {
                    name: t.icon || l.iconSet.pullToRefresh.icon,
                    color: t.color,
                    size: "32px"
                }) : e.h(Ht, {
                    size: "24px",
                    color: t.color
                })])])];
                return et("div", {
                    class: "q-pull-to-refresh"
                }, n, "main", !1 === t.disable, ()=>f.value)
            }
        }
    });
    const qc = {
        MIN: 0,
        RANGE: 1,
        MAX: 2
    };
    var $c = Me({
        name: "QRange",
        props: {
            ...Ra,
            modelValue: {
                type: Object,
                default: ()=>({
                    min: null,
                    max: null
                }),
                validator: e=>"min"in e && "max"in e
            },
            dragRange: Boolean,
            dragOnlyRange: Boolean,
            leftLabelColor: String,
            leftLabelTextColor: String,
            rightLabelColor: String,
            rightLabelTextColor: String,
            leftLabelValue: [String, Number],
            rightLabelValue: [String, Number],
            leftThumbColor: String,
            rightThumbColor: String
        },
        emits: Fa,
        setup(t, {emit: o}) {
            const {proxy: {$q: n}} = e.getCurrentInstance()
              , {state: a, methods: l} = Ia({
                updateValue: C,
                updatePosition: M,
                getDragging: q,
                formAttrs: e.computed(()=>({
                    type: "hidden",
                    name: t.name,
                    value: `${t.modelValue.min}|${t.modelValue.max}`
                }))
            })
              , i = e.ref(null)
              , r = e.ref(0)
              , s = e.ref(0)
              , u = e.ref({
                min: 0,
                max: 0
            });
            function c() {
                u.value.min = null === t.modelValue.min ? a.innerMin.value : Ve(t.modelValue.min, a.innerMin.value, a.innerMax.value),
                u.value.max = null === t.modelValue.max ? a.innerMax.value : Ve(t.modelValue.max, a.innerMin.value, a.innerMax.value)
            }
            e.watch(()=>`${t.modelValue.min}|${t.modelValue.max}|${a.innerMin.value}|${a.innerMax.value}`, c),
            c();
            const d = e.computed(()=>l.convertModelToRatio(u.value.min))
              , v = e.computed(()=>l.convertModelToRatio(u.value.max))
              , p = e.computed(()=>!0 === a.active.value ? r.value : d.value)
              , m = e.computed(()=>!0 === a.active.value ? s.value : v.value)
              , f = e.computed(()=>{
                const e = {
                    [a.positionProp.value]: `${100 * p.value}%`,
                    [a.sizeProp.value]: `${100 * (m.value - p.value)}%`
                };
                return void 0 !== t.selectionImg && (e.backgroundImage = `url(${t.selectionImg}) !important`),
                e
            }
            )
              , h = e.computed(()=>{
                if (!0 !== a.editable.value)
                    return {};
                if (!0 === n.platform.is.mobile)
                    return {
                        onClick: l.onMobileClick
                    };
                const e = {
                    onMousedown: l.onActivate
                };
                return !0 !== t.dragRange && !0 !== t.dragOnlyRange || Object.assign(e, {
                    onFocus: ()=>{
                        a.focus.value = "both"
                    }
                    ,
                    onBlur: l.onBlur,
                    onKeydown: T,
                    onKeyup: l.onKeyup
                }),
                e
            }
            );
            function g(e) {
                return !0 !== n.platform.is.mobile && !0 === a.editable.value && !0 !== t.dragOnlyRange ? {
                    onFocus: ()=>{
                        a.focus.value = e
                    }
                    ,
                    onBlur: l.onBlur,
                    onKeydown: T,
                    onKeyup: l.onKeyup
                } : {}
            }
            const b = e.computed(()=>!0 !== t.dragOnlyRange ? a.tabindex.value : null)
              , y = e.computed(()=>!0 === n.platform.is.mobile || !t.dragRange && !0 !== t.dragOnlyRange ? null : a.tabindex.value)
              , w = e.ref(null)
              , x = e.computed(()=>g("min"))
              , _ = l.getThumbRenderFn({
                focusValue: "min",
                getNodeData: ()=>({
                    ref: w,
                    key: "tmin",
                    ...x.value,
                    tabindex: b.value
                }),
                ratio: p,
                label: e.computed(()=>void 0 !== t.leftLabelValue ? t.leftLabelValue : u.value.min),
                thumbColor: e.computed(()=>t.leftThumbColor || t.thumbColor || t.color),
                labelColor: e.computed(()=>t.leftLabelColor || t.labelColor),
                labelTextColor: e.computed(()=>t.leftLabelTextColor || t.labelTextColor)
            })
              , S = e.computed(()=>g("max"))
              , k = l.getThumbRenderFn({
                focusValue: "max",
                getNodeData: ()=>({
                    ...S.value,
                    key: "tmax",
                    tabindex: b.value
                }),
                ratio: m,
                label: e.computed(()=>void 0 !== t.rightLabelValue ? t.rightLabelValue : u.value.max),
                thumbColor: e.computed(()=>t.rightThumbColor || t.thumbColor || t.color),
                labelColor: e.computed(()=>t.rightLabelColor || t.labelColor),
                labelTextColor: e.computed(()=>t.rightLabelTextColor || t.labelTextColor)
            });
            function C(e) {
                u.value.min === t.modelValue.min && u.value.max === t.modelValue.max || o("update:modelValue", {
                    ...u.value
                }),
                !0 === e && o("change", {
                    ...u.value
                })
            }
            function q(e) {
                const {left: o, top: n, width: a, height: r} = i.value.getBoundingClientRect()
                  , s = !0 === t.dragOnlyRange ? 0 : !0 === t.vertical ? w.value.offsetHeight / (2 * r) : w.value.offsetWidth / (2 * a)
                  , c = {
                    left: o,
                    top: n,
                    width: a,
                    height: r,
                    valueMin: u.value.min,
                    valueMax: u.value.max,
                    ratioMin: d.value,
                    ratioMax: v.value
                }
                  , p = l.getDraggingRatio(e, c);
                return !0 !== t.dragOnlyRange && p < c.ratioMin + s ? c.type = qc.MIN : !0 === t.dragOnlyRange || p < c.ratioMax - s ? !0 === t.dragRange || !0 === t.dragOnlyRange ? (c.type = qc.RANGE,
                Object.assign(c, {
                    offsetRatio: p,
                    offsetModel: l.convertRatioToModel(p),
                    rangeValue: c.valueMax - c.valueMin,
                    rangeRatio: c.ratioMax - c.ratioMin
                })) : c.type = c.ratioMax - p < p - c.ratioMin ? qc.MAX : qc.MIN : c.type = qc.MAX,
                c
            }
            function M(e, o=a.dragging.value) {
                let n;
                const i = l.getDraggingRatio(e, o)
                  , c = l.convertRatioToModel(i);
                switch (o.type) {
                case qc.MIN:
                    i <= o.ratioMax ? (n = {
                        minR: i,
                        maxR: o.ratioMax,
                        min: c,
                        max: o.valueMax
                    },
                    a.focus.value = "min") : (n = {
                        minR: o.ratioMax,
                        maxR: i,
                        min: o.valueMax,
                        max: c
                    },
                    a.focus.value = "max");
                    break;
                case qc.MAX:
                    i >= o.ratioMin ? (n = {
                        minR: o.ratioMin,
                        maxR: i,
                        min: o.valueMin,
                        max: c
                    },
                    a.focus.value = "max") : (n = {
                        minR: i,
                        maxR: o.ratioMin,
                        min: c,
                        max: o.valueMin
                    },
                    a.focus.value = "min");
                    break;
                case qc.RANGE:
                    const e = i - o.offsetRatio
                      , l = Ve(o.ratioMin + e, 0, 1 - o.rangeRatio)
                      , r = c - o.offsetModel
                      , s = Ve(o.valueMin + r, t.min, t.max - o.rangeValue);
                    n = {
                        minR: l,
                        maxR: l + o.rangeRatio,
                        min: parseFloat(s.toFixed(a.decimals.value)),
                        max: parseFloat((s + o.rangeValue).toFixed(a.decimals.value))
                    },
                    a.focus.value = "both";
                    break
                }
                u.value = null === u.value.min || null === u.value.max ? {
                    min: n.min || t.min,
                    max: n.max || t.max
                } : {
                    min: n.min,
                    max: n.max
                },
                !0 !== t.snap || 0 === t.step ? (r.value = n.minR,
                s.value = n.maxR) : (r.value = l.convertModelToRatio(u.value.min),
                s.value = l.convertModelToRatio(u.value.max))
            }
            function T(e) {
                if (!Pa.includes(e.keyCode))
                    return;
                $(e);
                const t = ([34, 33].includes(e.keyCode) ? 10 : 1) * a.step.value
                  , o = ([34, 37, 40].includes(e.keyCode) ? -1 : 1) * (!0 === a.isReversed.value ? -1 : 1) * t;
                if ("both" === a.focus.value) {
                    const e = u.value.max - u.value.min
                      , t = Ve(parseFloat((u.value.min + o).toFixed(a.decimals.value)), a.innerMin.value, a.innerMax.value - e);
                    u.value = {
                        min: t,
                        max: parseFloat((t + e).toFixed(a.decimals.value))
                    }
                } else {
                    if (!1 === a.focus.value)
                        return;
                    {
                        const e = a.focus.value;
                        u.value = {
                            ...u.value,
                            [e]: Ve(parseFloat((u.value[e] + o).toFixed(a.decimals.value)), "min" === e ? a.innerMin.value : u.value.min, "max" === e ? a.innerMax.value : u.value.max)
                        }
                    }
                }
                C()
            }
            return ()=>{
                const o = l.getContent(f, y, h, e=>{
                    e.push(_(), k())
                }
                );
                return e.h("div", {
                    ref: i,
                    class: "q-range " + a.classes.value + (null === t.modelValue.min || null === t.modelValue.max ? " q-slider--no-value" : ""),
                    ...a.attributes.value,
                    "aria-valuenow": t.modelValue.min + "|" + t.modelValue.max
                }, o)
            }
        }
    })
      , Mc = Me({
        name: "QRating",
        props: {
            ...Ye,
            ...In,
            modelValue: {
                type: Number,
                required: !0
            },
            max: {
                type: [String, Number],
                default: 5
            },
            icon: [String, Array],
            iconHalf: [String, Array],
            iconSelected: [String, Array],
            color: [String, Array],
            colorHalf: [String, Array],
            colorSelected: [String, Array],
            noReset: Boolean,
            noDimming: Boolean,
            readonly: Boolean,
            disable: Boolean
        },
        emits: ["update:modelValue"],
        setup(t, {slots: o, emit: n}) {
            const {proxy: {$q: a}} = e.getCurrentInstance()
              , l = Ke(t)
              , i = Nn(t)
              , r = jn(i)
              , s = e.ref(0);
            let u = {};
            const c = e.computed(()=>!0 !== t.readonly && !0 !== t.disable)
              , d = e.computed(()=>"q-rating row inline items-center" + ` q-rating--${!0 === c.value ? "" : "non-"}editable` + (!0 === t.noDimming ? " q-rating--no-dimming" : "") + (!0 === t.disable ? " disabled" : "") + (void 0 !== t.color && !1 === Array.isArray(t.color) ? ` text-${t.color}` : ""))
              , v = e.computed(()=>{
                const e = !0 === Array.isArray(t.icon) ? t.icon.length : 0
                  , o = !0 === Array.isArray(t.iconSelected) ? t.iconSelected.length : 0
                  , n = !0 === Array.isArray(t.iconHalf) ? t.iconHalf.length : 0
                  , a = !0 === Array.isArray(t.color) ? t.color.length : 0
                  , l = !0 === Array.isArray(t.colorSelected) ? t.colorSelected.length : 0
                  , i = !0 === Array.isArray(t.colorHalf) ? t.colorHalf.length : 0;
                return {
                    iconLen: e,
                    icon: e > 0 ? t.icon[e - 1] : t.icon,
                    selIconLen: o,
                    selIcon: o > 0 ? t.iconSelected[o - 1] : t.iconSelected,
                    halfIconLen: n,
                    halfIcon: n > 0 ? t.iconHalf[o - 1] : t.iconHalf,
                    colorLen: a,
                    color: a > 0 ? t.color[a - 1] : t.color,
                    selColorLen: l,
                    selColor: l > 0 ? t.colorSelected[l - 1] : t.colorSelected,
                    halfColorLen: i,
                    halfColor: i > 0 ? t.colorHalf[i - 1] : t.colorHalf
                }
            }
            )
              , p = e.computed(()=>{
                const e = []
                  , o = v.value
                  , n = Math.ceil(t.modelValue)
                  , l = void 0 === t.iconHalf || n === t.modelValue ? -1 : n;
                for (let i = 1; i <= t.max; i++) {
                    const r = 0 === s.value && t.modelValue >= i || s.value > 0 && s.value >= i
                      , u = l === i && s.value < i
                      , c = s.value > 0 && (!0 === u ? n : t.modelValue) >= i && s.value < i
                      , d = !0 === u ? i <= o.halfColorLen ? t.colorHalf[i - 1] : o.halfColor : void 0 !== o.selColor && !0 === r ? i <= o.selColorLen ? t.colorSelected[i - 1] : o.selColor : i <= o.colorLen ? t.color[i - 1] : o.color;
                    e.push({
                        name: (!0 === u ? i <= o.halfIconLen ? t.iconHalf[i - 1] : o.halfIcon : void 0 === o.selIcon || !0 !== r && !0 !== c ? i <= o.iconLen ? t.icon[i - 1] : o.icon : i <= o.selIconLen ? t.iconSelected[i - 1] : o.selIcon) || a.iconSet.rating.icon,
                        classes: "q-rating__icon" + (!0 === r || !0 === u ? " q-rating__icon--active" : "") + (!0 === c ? " q-rating__icon--exselected" : "") + (s.value === i ? " q-rating__icon--hovered" : "") + (void 0 !== d ? ` text-${d}` : "")
                    })
                }
                return e
            }
            )
              , m = e.computed(()=>{
                return !0 === t.disable ? {
                    "aria-disabled": "true"
                } : !0 === t.readonly ? {
                    "aria-readonly": "true"
                } : void 0
            }
            )
              , f = e.computed(()=>!0 === c.value ? 0 : null);
            function h(e) {
                if (!0 === c.value) {
                    const o = Ve(parseInt(e, 10), 1, parseInt(t.max, 10))
                      , a = !0 !== t.noReset && t.modelValue === o ? 0 : o;
                    a !== t.modelValue && n("update:modelValue", a),
                    s.value = 0
                }
            }
            function g(e) {
                !0 === c.value && (s.value = e)
            }
            function b(e, t) {
                switch (e.keyCode) {
                case 13:
                case 32:
                    return h(t),
                    $(e);
                case 37:
                case 40:
                    return u[`rt ${t - 1}`] && u[`rt ${t - 1}`].$el.focus(),
                    $(e);
                case 39:
                case 38:
                    return u[`rt ${t + 1}`] && u[`rt ${t + 1}`].$el.focus(),
                    $(e)
                }
            }
            function y() {
                s.value = 0
            }
            return e.onBeforeUpdate(()=>{
                u = {}
            }
            ),
            ()=>{
                const n = [];
                return p.value.forEach(({classes: t, name: a},l)=>{
                    const i = l + 1;
                    n.push(e.h("div", {
                        key: i,
                        ref: e=>{
                            u[`rt ${i}`] = e
                        }
                        ,
                        class: "q-rating__icon-container flex flex-center",
                        tabindex: f.value,
                        onClick() {
                            h(i)
                        },
                        onMouseover() {
                            g(i)
                        },
                        onMouseout: y,
                        onFocus() {
                            g(i)
                        },
                        onBlur: y,
                        onKeyup(e) {
                            b(e, i)
                        }
                    }, Ge(o[`tip-${i}`], [e.h(ft, {
                        class: t,
                        name: a
                    })])))
                }
                ),
                void 0 !== t.name && !0 !== t.disable && r(n, "push"),
                e.h("div", {
                    class: d.value,
                    style: l.value,
                    ...m.value
                }, n)
            }
        }
    })
      , Tc = Me({
        name: "QResponsive",
        props: wu,
        setup(t, {slots: o}) {
            const n = xu(t);
            return ()=>e.h("div", {
                class: "q-responsive"
            }, [e.h("div", {
                class: "q-responsive__filler overflow-hidden"
            }, [e.h("div", {
                style: n.value
            })]), e.h("div", {
                class: "q-responsive__content absolute-full fit"
            }, Xe(o.default))])
        }
    });
    const Bc = ["vertical", "horizontal"]
      , zc = {
        vertical: {
            offset: "offsetY",
            scroll: "scrollTop",
            dir: "down",
            dist: "y"
        },
        horizontal: {
            offset: "offsetX",
            scroll: "scrollLeft",
            dir: "right",
            dist: "x"
        }
    }
      , Oc = {
        prevent: !0,
        mouse: !0,
        mouseAllDir: !0
    }
      , Vc = e=>e >= 250 ? 50 : Math.ceil(e / 5);
    var Lc = Me({
        name: "QScrollArea",
        props: {
            ...yt,
            thumbStyle: Object,
            verticalThumbStyle: Object,
            horizontalThumbStyle: Object,
            barStyle: [Array, String, Object],
            verticalBarStyle: [Array, String, Object],
            horizontalBarStyle: [Array, String, Object],
            contentStyle: [Array, String, Object],
            contentActiveStyle: [Array, String, Object],
            delay: {
                type: [String, Number],
                default: 1e3
            },
            visible: {
                type: Boolean,
                default: null
            },
            tabindex: [String, Number],
            onScroll: Function
        },
        setup(t, {slots: o, emit: n}) {
            const a = e.ref(!1)
              , l = e.ref(!1)
              , i = e.ref(!1)
              , r = {
                vertical: e.ref(0),
                horizontal: e.ref(0)
            }
              , s = {
                vertical: {
                    ref: e.ref(null),
                    position: e.ref(0),
                    size: e.ref(0)
                },
                horizontal: {
                    ref: e.ref(null),
                    position: e.ref(0),
                    size: e.ref(0)
                }
            }
              , u = e.getCurrentInstance()
              , c = wt(t, u.proxy.$q);
            let d, v;
            const p = e.ref(null)
              , m = e.computed(()=>"q-scrollarea" + (!0 === c.value ? " q-scrollarea--dark" : ""));
            s.vertical.percentage = e.computed(()=>{
                const e = s.vertical.size.value - r.vertical.value;
                if (e <= 0)
                    return 0;
                const t = Ve(s.vertical.position.value / e, 0, 1);
                return Math.round(1e4 * t) / 1e4
            }
            ),
            s.vertical.thumbHidden = e.computed(()=>!0 !== (null === t.visible ? i.value : t.visible) && !1 === a.value && !1 === l.value || s.vertical.size.value <= r.vertical.value + 1),
            s.vertical.thumbStart = e.computed(()=>s.vertical.percentage.value * (r.vertical.value - s.vertical.thumbSize.value)),
            s.vertical.thumbSize = e.computed(()=>Math.round(Ve(r.vertical.value * r.vertical.value / s.vertical.size.value, Vc(r.vertical.value), r.vertical.value))),
            s.vertical.style = e.computed(()=>{
                return {
                    ...t.thumbStyle,
                    ...t.verticalThumbStyle,
                    top: `${s.vertical.thumbStart.value}px`,
                    height: `${s.vertical.thumbSize.value}px`
                }
            }
            ),
            s.vertical.thumbClass = e.computed(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (!0 === s.vertical.thumbHidden.value ? " q-scrollarea__thumb--invisible" : "")),
            s.vertical.barClass = e.computed(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (!0 === s.vertical.thumbHidden.value ? " q-scrollarea__bar--invisible" : "")),
            s.horizontal.percentage = e.computed(()=>{
                const e = s.horizontal.size.value - r.horizontal.value;
                if (e <= 0)
                    return 0;
                const t = Ve(s.horizontal.position.value / e, 0, 1);
                return Math.round(1e4 * t) / 1e4
            }
            ),
            s.horizontal.thumbHidden = e.computed(()=>!0 !== (null === t.visible ? i.value : t.visible) && !1 === a.value && !1 === l.value || s.horizontal.size.value <= r.horizontal.value + 1),
            s.horizontal.thumbStart = e.computed(()=>s.horizontal.percentage.value * (r.horizontal.value - s.horizontal.thumbSize.value)),
            s.horizontal.thumbSize = e.computed(()=>Math.round(Ve(r.horizontal.value * r.horizontal.value / s.horizontal.size.value, Vc(r.horizontal.value), r.horizontal.value))),
            s.horizontal.style = e.computed(()=>{
                return {
                    ...t.thumbStyle,
                    ...t.horizontalThumbStyle,
                    left: `${s.horizontal.thumbStart.value}px`,
                    width: `${s.horizontal.thumbSize.value}px`
                }
            }
            ),
            s.horizontal.thumbClass = e.computed(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (!0 === s.horizontal.thumbHidden.value ? " q-scrollarea__thumb--invisible" : "")),
            s.horizontal.barClass = e.computed(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (!0 === s.horizontal.thumbHidden.value ? " q-scrollarea__bar--invisible" : ""));
            const f = e.computed(()=>!0 === s.vertical.thumbHidden.value && !0 === s.horizontal.thumbHidden.value ? t.contentStyle : t.contentActiveStyle)
              , h = [[Va, e=>{
                k(e, "vertical")
            }
            , void 0, {
                vertical: !0,
                ...Oc
            }]]
              , g = [[Va, e=>{
                k(e, "horizontal")
            }
            , void 0, {
                horizontal: !0,
                ...Oc
            }]];
            function b() {
                const e = {};
                return Bc.forEach(t=>{
                    const o = s[t];
                    e[t + "Position"] = o.position.value,
                    e[t + "Percentage"] = o.percentage.value,
                    e[t + "Size"] = o.size.value,
                    e[t + "ContainerSize"] = r[t].value
                }
                ),
                e
            }
            const y = O(()=>{
                const e = b();
                e.ref = u.proxy,
                n("scroll", e)
            }
            , 0);
            function w(e, t, o) {
                if (!1 === Bc.includes(e))
                    return void console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
                const n = "vertical" === e ? nn : an;
                n(p.value, t, o)
            }
            function x({height: e, width: t}) {
                let o = !1;
                r.vertical.value !== e && (r.vertical.value = e,
                o = !0),
                r.horizontal.value !== t && (r.horizontal.value = t,
                o = !0),
                !0 === o && M()
            }
            function _({position: e}) {
                let t = !1;
                s.vertical.position.value !== e.top && (s.vertical.position.value = e.top,
                t = !0),
                s.horizontal.position.value !== e.left && (s.horizontal.position.value = e.left,
                t = !0),
                !0 === t && M()
            }
            function S({height: e, width: t}) {
                s.horizontal.size.value !== t && (s.horizontal.size.value = t,
                M()),
                s.vertical.size.value !== e && (s.vertical.size.value = e,
                M())
            }
            function k(e, t) {
                const o = s[t];
                if (!0 === e.isFirst) {
                    if (!0 === o.thumbHidden.value)
                        return;
                    v = o.position.value,
                    l.value = !0
                } else if (!0 !== l.value)
                    return;
                !0 === e.isFinal && (l.value = !1);
                const n = zc[t]
                  , a = r[t].value
                  , i = (o.size.value - a) / (a - o.thumbSize.value)
                  , u = e.distance[n.dist]
                  , c = v + (e.direction === n.dir ? 1 : -1) * u * i;
                T(c, t)
            }
            function C(e, t) {
                const o = s[t];
                if (!0 !== o.thumbHidden.value) {
                    const n = e[zc[t].offset];
                    if (n < o.thumbStart.value || n > o.thumbStart.value + o.thumbSize.value) {
                        const e = n - o.thumbSize.value / 2;
                        T(e / r[t].value * o.size.value, t)
                    }
                    null !== o.ref.value && o.ref.value.dispatchEvent(new MouseEvent(e.type,e))
                }
            }
            function q(e) {
                C(e, "vertical")
            }
            function $(e) {
                C(e, "horizontal")
            }
            function M() {
                !0 === a.value ? clearTimeout(d) : a.value = !0,
                d = setTimeout(()=>{
                    a.value = !1
                }
                , t.delay),
                void 0 !== t.onScroll && y()
            }
            function T(e, t) {
                p.value[zc[t].scroll] = e
            }
            function B() {
                i.value = !0
            }
            function z() {
                i.value = !1
            }
            Object.assign(u.proxy, {
                getScrollTarget: ()=>p.value,
                getScroll: b,
                getScrollPosition: ()=>({
                    top: s.vertical.position.value,
                    left: s.horizontal.position.value
                }),
                getScrollPercentage: ()=>({
                    top: s.vertical.percentage.value,
                    left: s.horizontal.percentage.value
                }),
                setScrollPosition: w,
                setScrollPercentage(e, t, o) {
                    w(e, t * (s[e].size.value - r[e].value), o)
                }
            });
            let V = null;
            return e.onDeactivated(()=>{
                V = {
                    top: s.vertical.position.value,
                    left: s.horizontal.position.value
                }
            }
            ),
            e.onActivated(()=>{
                if (null === V)
                    return;
                const e = p.value;
                null !== e && (an(e, V.left),
                nn(e, V.top))
            }
            ),
            e.onBeforeUnmount(y.cancel),
            ()=>{
                return e.h("div", {
                    class: m.value,
                    onMouseenter: B,
                    onMouseleave: z
                }, [e.h("div", {
                    ref: p,
                    class: "q-scrollarea__container scroll relative-position fit hide-scrollbar",
                    tabindex: void 0 !== t.tabindex ? t.tabindex : void 0
                }, [e.h("div", {
                    class: "q-scrollarea__content absolute",
                    style: f.value
                }, Ge(o.default, [e.h(Ua, {
                    debounce: 0,
                    onResize: S
                })])), e.h(Gu, {
                    axis: "both",
                    onScroll: _
                })]), e.h(Ua, {
                    debounce: 0,
                    onResize: x
                }), e.h("div", {
                    class: s.vertical.barClass.value,
                    style: [t.barStyle, t.verticalBarStyle],
                    "aria-hidden": "true",
                    onMousedown: q
                }), e.h("div", {
                    class: s.horizontal.barClass.value,
                    style: [t.barStyle, t.horizontalBarStyle],
                    "aria-hidden": "true",
                    onMousedown: $
                }), e.withDirectives(e.h("div", {
                    ref: s.vertical.ref,
                    class: s.vertical.thumbClass.value,
                    style: s.vertical.style.value,
                    "aria-hidden": "true"
                }), h), e.withDirectives(e.h("div", {
                    ref: s.horizontal.ref,
                    class: s.horizontal.thumbClass.value,
                    style: s.horizontal.style.value,
                    "aria-hidden": "true"
                }), g)])
            }
        }
    });
    const Ec = 1e3
      , Ac = ["start", "center", "end", "start-force", "center-force", "end-force"]
      , Pc = Array.prototype.filter
      , Rc = void 0 === window.getComputedStyle(document.body).overflowAnchor ? h : function(e, t) {
        null !== e && (cancelAnimationFrame(e._qOverflowAnimationFrame),
        e._qOverflowAnimationFrame = requestAnimationFrame(()=>{
            if (null === e)
                return;
            const o = e.children || [];
            Pc.call(o, e=>e.dataset && void 0 !== e.dataset.qVsAnchor).forEach(e=>{
                delete e.dataset.qVsAnchor
            }
            );
            const n = o[t];
            n && n.dataset && (n.dataset.qVsAnchor = "")
        }
        ))
    }
    ;
    function Fc(e, t) {
        return e + t
    }
    function Ic(e, t, o, n, a, l, i, r) {
        const s = e === window ? document.scrollingElement || document.documentElement : e
          , u = !0 === a ? "offsetWidth" : "offsetHeight"
          , c = {
            scrollStart: 0,
            scrollViewSize: -i - r,
            scrollMaxSize: 0,
            offsetStart: -i,
            offsetEnd: -r
        };
        if (!0 === a ? (e === window ? (c.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0,
        c.scrollViewSize += document.documentElement.clientWidth) : (c.scrollStart = s.scrollLeft,
        c.scrollViewSize += s.clientWidth),
        c.scrollMaxSize = s.scrollWidth,
        !0 === l && (c.scrollStart = (!0 === Wa ? c.scrollMaxSize - c.scrollViewSize : 0) - c.scrollStart)) : (e === window ? (c.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0,
        c.scrollViewSize += document.documentElement.clientHeight) : (c.scrollStart = s.scrollTop,
        c.scrollViewSize += s.clientHeight),
        c.scrollMaxSize = s.scrollHeight),
        null !== o)
            for (let d = o.previousElementSibling; null !== d; d = d.previousElementSibling)
                !1 === d.classList.contains("q-virtual-scroll--skip") && (c.offsetStart += d[u]);
        if (null !== n)
            for (let d = n.nextElementSibling; null !== d; d = d.nextElementSibling)
                !1 === d.classList.contains("q-virtual-scroll--skip") && (c.offsetEnd += d[u]);
        if (t !== e) {
            const o = s.getBoundingClientRect()
              , n = t.getBoundingClientRect();
            !0 === a ? (c.offsetStart += n.left - o.left,
            c.offsetEnd -= n.width) : (c.offsetStart += n.top - o.top,
            c.offsetEnd -= n.height),
            e !== window && (c.offsetStart += c.scrollStart),
            c.offsetEnd += c.scrollMaxSize - c.offsetStart
        }
        return c
    }
    function Nc(e, t, o, n) {
        "end" === t && (t = (e === window ? document.body : e)[!0 === o ? "scrollWidth" : "scrollHeight"]),
        e === window ? !0 === o ? (!0 === n && (t = (!0 === Wa ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t),
        window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : !0 === o ? (!0 === n && (t = (!0 === Wa ? e.scrollWidth - e.offsetWidth : 0) - t),
        e.scrollLeft = t) : e.scrollTop = t
    }
    function jc(e, t, o, n) {
        if (o >= n)
            return 0;
        const a = t.length
          , l = Math.floor(o / Ec)
          , i = Math.floor((n - 1) / Ec) + 1;
        let r = e.slice(l, i).reduce(Fc, 0);
        return o % Ec !== 0 && (r -= t.slice(l * Ec, o).reduce(Fc, 0)),
        n % Ec !== 0 && n !== a && (r -= t.slice(n, i * Ec).reduce(Fc, 0)),
        r
    }
    const Dc = {
        virtualScrollSliceSize: {
            type: [Number, String],
            default: null
        },
        virtualScrollSliceRatioBefore: {
            type: [Number, String],
            default: 1
        },
        virtualScrollSliceRatioAfter: {
            type: [Number, String],
            default: 1
        },
        virtualScrollItemSize: {
            type: [Number, String],
            default: 24
        },
        virtualScrollStickySizeStart: {
            type: [Number, String],
            default: 0
        },
        virtualScrollStickySizeEnd: {
            type: [Number, String],
            default: 0
        },
        tableColspan: [Number, String]
    }
      , Hc = Object.keys(Dc)
      , Qc = {
        virtualScrollHorizontal: Boolean,
        onVirtualScroll: Function,
        ...Dc
    };
    function Uc({virtualScrollLength: t, getVirtualScrollTarget: o, getVirtualScrollEl: n, virtualScrollItemSizeComputed: a}) {
        const l = e.getCurrentInstance()
          , {props: i, emit: r, proxy: s} = l
          , {$q: u} = s;
        let c, d, v, p, m = [];
        const f = e.ref(0)
          , h = e.ref(0)
          , g = e.ref({})
          , b = e.ref(null)
          , y = e.ref(null)
          , w = e.ref(null)
          , x = e.ref({
            from: 0,
            to: 0
        })
          , _ = e.computed(()=>void 0 !== i.tableColspan ? i.tableColspan : 100);
        void 0 === a && (a = e.computed(()=>i.virtualScrollItemSize));
        const S = e.computed(()=>a.value + ";" + i.virtualScrollHorizontal)
          , k = e.computed(()=>S.value + ";" + i.virtualScrollSliceRatioBefore + ";" + i.virtualScrollSliceRatioAfter);
        function C() {
            V(d, !0)
        }
        function q(e) {
            V(void 0 === e ? d : e)
        }
        function $(e, a) {
            const l = o();
            if (void 0 === l || null === l || 8 === l.nodeType)
                return;
            const r = Ic(l, n(), b.value, y.value, i.virtualScrollHorizontal, u.lang.rtl, i.virtualScrollStickySizeStart, i.virtualScrollStickySizeEnd);
            v !== r.scrollViewSize && L(r.scrollViewSize),
            T(l, r, Math.min(t.value - 1, Math.max(0, parseInt(e, 10) || 0)), 0, Ac.indexOf(a) > -1 ? a : d > -1 && e > d ? "end" : "start")
        }
        function M() {
            const e = o();
            if (void 0 === e || null === e || 8 === e.nodeType)
                return;
            const a = Ic(e, n(), b.value, y.value, i.virtualScrollHorizontal, u.lang.rtl, i.virtualScrollStickySizeStart, i.virtualScrollStickySizeEnd)
              , l = t.value - 1
              , r = a.scrollMaxSize - a.offsetStart - a.offsetEnd - h.value;
            if (c === a.scrollStart)
                return;
            if (a.scrollMaxSize <= 0)
                return void T(e, a, 0, 0);
            v !== a.scrollViewSize && L(a.scrollViewSize),
            B(x.value.from);
            const s = Math.floor(a.scrollMaxSize - Math.max(a.scrollViewSize, a.offsetEnd) - Math.min(p[l], a.scrollViewSize / 2));
            if (s > 0 && Math.ceil(a.scrollStart) >= s)
                return void T(e, a, l, a.scrollMaxSize - a.offsetEnd - m.reduce(Fc, 0));
            let d = 0
              , g = a.scrollStart - a.offsetStart
              , w = g;
            if (g <= r && g + a.scrollViewSize >= f.value)
                g -= f.value,
                d = x.value.from,
                w = g;
            else
                for (let t = 0; g >= m[t] && d < l; t++)
                    g -= m[t],
                    d += Ec;
            while (g > 0 && d < l)
                g -= p[d],
                g > -a.scrollViewSize ? (d++,
                w = g) : w = p[d] + g;
            T(e, a, d, w)
        }
        function T(e, o, n, a, l) {
            const r = "string" === typeof l && l.indexOf("-force") > -1
              , s = !0 === r ? l.replace("-force", "") : l
              , d = void 0 !== s ? s : "start";
            let v = Math.max(0, n - g.value[d])
              , b = v + g.value.total;
            b > t.value && (b = t.value,
            v = Math.max(0, b - g.value.total)),
            c = o.scrollStart;
            const y = v !== x.value.from || b !== x.value.to;
            if (!1 === y && void 0 === s)
                return void A(n);
            const {activeElement: _} = document
              , S = w.value;
            !0 === y && null !== S && S !== _ && !0 === S.contains(_) && (S.addEventListener("focusout", z),
            setTimeout(()=>{
                null !== S && S.removeEventListener("focusout", z)
            }
            )),
            Rc(S, n - v);
            const k = void 0 !== s ? p.slice(v, n).reduce(Fc, 0) : 0;
            if (!0 === y) {
                const e = b >= x.value.from && v <= x.value.to ? x.value.to : b;
                x.value = {
                    from: v,
                    to: e
                },
                f.value = jc(m, p, 0, v),
                h.value = jc(m, p, b, t.value),
                requestAnimationFrame(()=>{
                    x.value.to !== b && c === o.scrollStart && (x.value = {
                        from: x.value.from,
                        to: b
                    },
                    h.value = jc(m, p, b, t.value))
                }
                )
            }
            requestAnimationFrame(()=>{
                if (c !== o.scrollStart)
                    return;
                !0 === y && B(v);
                const t = p.slice(v, n).reduce(Fc, 0)
                  , l = t + o.offsetStart + f.value
                  , d = l + p[n];
                let m = l + a;
                if (void 0 !== s) {
                    const e = t - k
                      , a = o.scrollStart + e;
                    m = !0 !== r && a < l && d < a + o.scrollViewSize ? a : "end" === s ? d - o.scrollViewSize : l - ("start" === s ? 0 : Math.round((o.scrollViewSize - p[n]) / 2))
                }
                c = m,
                Nc(e, m, i.virtualScrollHorizontal, u.lang.rtl),
                A(n)
            }
            )
        }
        function B(e) {
            const t = w.value;
            if (t) {
                const o = Pc.call(t.children, e=>e.classList && !1 === e.classList.contains("q-virtual-scroll--skip"))
                  , n = o.length
                  , a = !0 === i.virtualScrollHorizontal ? e=>e.getBoundingClientRect().width : e=>e.offsetHeight;
                let l, r, s = e;
                for (let e = 0; e < n; ) {
                    l = a(o[e]),
                    e++;
                    while (e < n && !0 === o[e].classList.contains("q-virtual-scroll--with-prev"))
                        l += a(o[e]),
                        e++;
                    r = l - p[s],
                    0 !== r && (p[s] += r,
                    m[Math.floor(s / Ec)] += r),
                    s++
                }
            }
        }
        function z() {
            null !== w.value && void 0 !== w.value && w.value.focus()
        }
        function V(o, n) {
            const l = 1 * a.value;
            !0 !== n && !1 !== Array.isArray(p) || (p = []);
            const i = p.length;
            p.length = t.value;
            for (let e = t.value - 1; e >= i; e--)
                p[e] = l;
            const r = Math.floor((t.value - 1) / Ec);
            m = [];
            for (let e = 0; e <= r; e++) {
                let o = 0;
                const n = Math.min((e + 1) * Ec, t.value);
                for (let t = e * Ec; t < n; t++)
                    o += p[t];
                m.push(o)
            }
            d = -1,
            c = void 0,
            f.value = jc(m, p, 0, x.value.from),
            h.value = jc(m, p, x.value.to, t.value),
            o >= 0 ? (B(x.value.from),
            e.nextTick(()=>{
                $(o)
            }
            )) : P()
        }
        function L(e) {
            if (void 0 === e && "undefined" !== typeof window) {
                const t = o();
                void 0 !== t && null !== t && 8 !== t.nodeType && (e = Ic(t, n(), b.value, y.value, i.virtualScrollHorizontal, u.lang.rtl, i.virtualScrollStickySizeStart, i.virtualScrollStickySizeEnd).scrollViewSize)
            }
            v = e;
            const t = parseFloat(i.virtualScrollSliceRatioBefore) || 0
              , l = parseFloat(i.virtualScrollSliceRatioAfter) || 0
              , r = 1 + t + l
              , s = void 0 === e || e <= 0 ? 1 : Math.ceil(e / a.value)
              , c = Math.max(1, s, Math.ceil((i.virtualScrollSliceSize > 0 ? i.virtualScrollSliceSize : 10) / r));
            g.value = {
                total: Math.ceil(c * r),
                start: Math.ceil(c * t),
                center: Math.ceil(c * (.5 + t)),
                end: Math.ceil(c * (1 + t)),
                view: s
            }
        }
        function E(t, o) {
            const n = !0 === i.virtualScrollHorizontal ? "width" : "height"
              , l = {
                ["--q-virtual-scroll-item-" + n]: a.value + "px"
            };
            return ["tbody" === t ? e.h(t, {
                class: "q-virtual-scroll__padding",
                key: "before",
                ref: b
            }, [e.h("tr", [e.h("td", {
                style: {
                    [n]: `${f.value}px`,
                    ...l
                },
                colspan: _.value
            })])]) : e.h(t, {
                class: "q-virtual-scroll__padding",
                key: "before",
                ref: b,
                style: {
                    [n]: `${f.value}px`,
                    ...l
                }
            }), e.h(t, {
                class: "q-virtual-scroll__content",
                key: "content",
                ref: w,
                tabindex: -1
            }, o.flat()), "tbody" === t ? e.h(t, {
                class: "q-virtual-scroll__padding",
                key: "after",
                ref: y
            }, [e.h("tr", [e.h("td", {
                style: {
                    [n]: `${h.value}px`,
                    ...l
                },
                colspan: _.value
            })])]) : e.h(t, {
                class: "q-virtual-scroll__padding",
                key: "after",
                ref: y,
                style: {
                    [n]: `${h.value}px`,
                    ...l
                }
            })]
        }
        function A(e) {
            d !== e && (void 0 !== i.onVirtualScroll && r("virtual-scroll", {
                index: e,
                from: x.value.from,
                to: x.value.to - 1,
                direction: e < d ? "decrease" : "increase",
                ref: s
            }),
            d = e)
        }
        e.watch(k, ()=>{
            L()
        }
        ),
        e.watch(S, C),
        L();
        const P = O(M, !0 === u.platform.is.ios ? 120 : 35);
        e.onBeforeMount(()=>{
            L()
        }
        );
        let R = !1;
        return e.onDeactivated(()=>{
            R = !0
        }
        ),
        e.onActivated(()=>{
            if (!0 !== R)
                return;
            const e = o();
            void 0 !== c && void 0 !== e && null !== e && 8 !== e.nodeType ? Nc(e, c, i.virtualScrollHorizontal, u.lang.rtl) : $(d)
        }
        ),
        e.onBeforeUnmount(()=>{
            P.cancel()
        }
        ),
        Object.assign(s, {
            scrollTo: $,
            reset: C,
            refresh: q
        }),
        {
            virtualScrollSliceRange: x,
            virtualScrollSliceSizeComputed: g,
            setVirtualScrollSize: L,
            onVirtualScrollEvt: P,
            localResetVirtualScroll: V,
            padVirtualScroll: E,
            scrollTo: $,
            reset: C,
            refresh: q
        }
    }
    const Wc = e=>["add", "add-unique", "toggle"].includes(e)
      , Yc = ".*+?^${}()|[]\\"
      , Kc = Object.keys(uu);
    var Xc = Me({
        name: "QSelect",
        inheritAttrs: !1,
        props: {
            ...Qc,
            ...In,
            ...uu,
            modelValue: {
                required: !0
            },
            multiple: Boolean,
            displayValue: [String, Number],
            displayValueHtml: Boolean,
            dropdownIcon: String,
            options: {
                type: Array,
                default: ()=>[]
            },
            optionValue: [Function, String],
            optionLabel: [Function, String],
            optionDisable: [Function, String],
            hideSelected: Boolean,
            hideDropdownIcon: Boolean,
            fillInput: Boolean,
            maxValues: [Number, String],
            optionsDense: Boolean,
            optionsDark: {
                type: Boolean,
                default: null
            },
            optionsSelectedClass: String,
            optionsHtml: Boolean,
            optionsCover: Boolean,
            menuShrink: Boolean,
            menuAnchor: String,
            menuSelf: String,
            menuOffset: Array,
            popupContentClass: String,
            popupContentStyle: [String, Array, Object],
            useInput: Boolean,
            useChips: Boolean,
            newValueMode: {
                type: String,
                validator: Wc
            },
            mapOptions: Boolean,
            emitValue: Boolean,
            inputDebounce: {
                type: [Number, String],
                default: 500
            },
            inputClass: [Array, String, Object],
            inputStyle: [Array, String, Object],
            tabindex: {
                type: [String, Number],
                default: 0
            },
            autocomplete: String,
            transitionShow: String,
            transitionHide: String,
            transitionDuration: [String, Number],
            behavior: {
                type: String,
                validator: e=>["default", "menu", "dialog"].includes(e),
                default: "default"
            },
            virtualScrollItemSize: {
                type: [Number, String],
                default: void 0
            },
            onNewValue: Function,
            onFilter: Function
        },
        emits: [...cu, "add", "remove", "input-value", "new-value", "keyup", "keypress", "keydown", "filter-abort"],
        setup(t, {slots: o, emit: n}) {
            const {proxy: a} = e.getCurrentInstance()
              , {$q: l} = a
              , i = e.ref(!1)
              , r = e.ref(!1)
              , s = e.ref(-1)
              , u = e.ref("")
              , c = e.ref(!1)
              , d = e.ref(!1);
            let v, p, m, f, h, g, b, y, w;
            const x = e.ref(null)
              , _ = e.ref(null)
              , S = e.ref(null)
              , k = e.ref(null)
              , M = e.ref(null)
              , T = Dn(t)
              , B = Fu(Ve)
              , z = e.computed(()=>Array.isArray(t.options) ? t.options.length : 0)
              , O = e.computed(()=>void 0 === t.virtualScrollItemSize ? !0 === t.optionsDense ? 24 : 48 : t.virtualScrollItemSize)
              , {virtualScrollSliceRange: V, virtualScrollSliceSizeComputed: L, localResetVirtualScroll: E, padVirtualScroll: A, onVirtualScrollEvt: P, scrollTo: R, setVirtualScrollSize: F} = Uc({
                virtualScrollLength: z,
                getVirtualScrollTarget: Te,
                getVirtualScrollEl: Me,
                virtualScrollItemSizeComputed: O
            })
              , I = du()
              , N = e.computed(()=>{
                const e = !0 === t.mapOptions && !0 !== t.multiple
                  , o = void 0 === t.modelValue || null === t.modelValue && !0 !== e ? [] : !0 === t.multiple && Array.isArray(t.modelValue) ? t.modelValue : [t.modelValue];
                if (!0 === t.mapOptions && !0 === Array.isArray(t.options)) {
                    const n = !0 === t.mapOptions && void 0 !== p ? p : []
                      , a = o.map(e=>we(e, n));
                    return null === t.modelValue && !0 === e ? a.filter(e=>null !== e) : a
                }
                return o
            }
            )
              , j = e.computed(()=>{
                const e = {};
                return Kc.forEach(o=>{
                    const n = t[o];
                    void 0 !== n && (e[o] = n)
                }
                ),
                e
            }
            )
              , D = e.computed(()=>null === t.optionsDark ? I.isDark.value : t.optionsDark)
              , H = e.computed(()=>su(N.value))
              , Q = e.computed(()=>{
                let e = "q-field__input q-placeholder col";
                return !0 === t.hideSelected || 0 === N.value.length ? [e, t.inputClass] : (e += " q-field__input--padding",
                void 0 === t.inputClass ? e : [e, t.inputClass])
            }
            )
              , U = e.computed(()=>(!0 === t.virtualScrollHorizontal ? "q-virtual-scroll--horizontal" : "") + (t.popupContentClass ? " " + t.popupContentClass : ""))
              , W = e.computed(()=>0 === z.value)
              , X = e.computed(()=>N.value.map(e=>se.value(e)).join(", "))
              , Z = e.computed(()=>!0 === t.optionsHtml ? ()=>!0 : e=>void 0 !== e && null !== e && !0 === e.html)
              , G = e.computed(()=>!0 === t.displayValueHtml || void 0 === t.displayValue && (!0 === t.optionsHtml || N.value.some(Z.value)))
              , J = e.computed(()=>!0 === I.focused.value ? t.tabindex : -1)
              , ee = e.computed(()=>{
                const e = {
                    tabindex: t.tabindex,
                    role: "combobox",
                    "aria-label": t.label,
                    "aria-autocomplete": !0 === t.useInput ? "list" : "none",
                    "aria-expanded": !0 === i.value ? "true" : "false",
                    "aria-owns": `${I.targetUid.value}_lb`,
                    "aria-controls": `${I.targetUid.value}_lb`
                };
                return s.value >= 0 && (e["aria-activedescendant"] = `${I.targetUid.value}_ ${s.value}`),
                e
            }
            )
              , te = e.computed(()=>{
                const e = {
                    id: `${I.targetUid.value}_lb`,
                    role: "listbox",
                    "aria-multiselectable": !0 === t.multiple ? "true" : "false"
                };
                return s.value >= 0 && (e["aria-activedescendant"] = `${I.targetUid.value}_ ${s.value}`),
                e
            }
            )
              , oe = e.computed(()=>{
                return N.value.map((e,t)=>({
                    index: t,
                    opt: e,
                    html: Z.value(e),
                    selected: !0,
                    removeAtIndex: me,
                    toggleOption: he,
                    tabindex: J.value
                }))
            }
            )
              , ne = e.computed(()=>{
                if (0 === z.value)
                    return [];
                const {from: e, to: o} = V.value;
                return t.options.slice(e, o).map((o,n)=>{
                    const a = !0 === ue.value(o)
                      , r = e + n
                      , u = {
                        clickable: !0,
                        active: !1,
                        activeClass: ie.value,
                        manualFocus: !0,
                        focused: !1,
                        disable: a,
                        tabindex: -1,
                        dense: t.optionsDense,
                        dark: D.value,
                        role: "option",
                        id: `${I.targetUid.value}_ ${r}`,
                        onClick: ()=>{
                            he(o)
                        }
                    };
                    return !0 !== a && (!0 === _e(o) && (u.active = !0),
                    s.value === r && (u.focused = !0),
                    u["aria-selected"] = !0 === u.active ? "true" : "false",
                    !0 === l.platform.is.desktop && (u.onMousemove = (()=>{
                        !0 === i.value && ge(r)
                    }
                    ))),
                    {
                        index: r,
                        opt: o,
                        html: Z.value(o),
                        label: se.value(o),
                        selected: u.active,
                        focused: u.focused,
                        toggleOption: he,
                        setOptionIndex: ge,
                        itemProps: u
                    }
                }
                )
            }
            )
              , ae = e.computed(()=>void 0 !== t.dropdownIcon ? t.dropdownIcon : l.iconSet.arrow.dropdown)
              , le = e.computed(()=>!1 === t.optionsCover && !0 !== t.outlined && !0 !== t.standout && !0 !== t.borderless && !0 !== t.rounded)
              , ie = e.computed(()=>void 0 !== t.optionsSelectedClass ? t.optionsSelectedClass : void 0 !== t.color ? `text-${t.color}` : "")
              , re = e.computed(()=>xe(t.optionValue, "value"))
              , se = e.computed(()=>xe(t.optionLabel, "label"))
              , ue = e.computed(()=>xe(t.optionDisable, "disable"))
              , ce = e.computed(()=>N.value.map(e=>re.value(e)))
              , de = e.computed(()=>{
                const e = {
                    onInput: Ve,
                    onChange: B,
                    onKeydown: $e,
                    onKeyup: Ce,
                    onKeypress: qe,
                    onFocus: Se,
                    onClick(e) {
                        !0 === m && C(e)
                    }
                };
                return e.onCompositionstart = e.onCompositionupdate = e.onCompositionend = B,
                e
            }
            );
            function ve(e) {
                return !0 === t.emitValue ? re.value(e) : e
            }
            function pe(e) {
                if (e > -1 && e < N.value.length)
                    if (!0 === t.multiple) {
                        const o = t.modelValue.slice();
                        n("remove", {
                            index: e,
                            value: o.splice(e, 1)[0]
                        }),
                        n("update:modelValue", o)
                    } else
                        n("update:modelValue", null)
            }
            function me(e) {
                pe(e),
                I.focus()
            }
            function fe(e, o) {
                const a = ve(e);
                if (!0 !== t.multiple)
                    return !0 === t.fillInput && Ae(se.value(e), !0, !0),
                    void n("update:modelValue", a);
                if (0 === N.value.length)
                    return n("add", {
                        index: 0,
                        value: a
                    }),
                    void n("update:modelValue", !0 === t.multiple ? [a] : a);
                if (!0 === o && !0 === _e(e))
                    return;
                if (void 0 !== t.maxValues && t.modelValue.length >= t.maxValues)
                    return;
                const l = t.modelValue.slice();
                n("add", {
                    index: l.length,
                    value: a
                }),
                l.push(a),
                n("update:modelValue", l)
            }
            function he(e, o) {
                if (!0 !== I.editable.value || void 0 === e || !0 === ue.value(e))
                    return;
                const a = re.value(e);
                if (!0 !== t.multiple)
                    return !0 !== o && (Ae(!0 === t.fillInput ? se.value(e) : "", !0, !0),
                    Ke()),
                    null !== _.value && _.value.focus(),
                    void (0 !== N.value.length && !0 === be(re.value(N.value[0]), a) || n("update:modelValue", !0 === t.emitValue ? a : e));
                if ((!0 !== m || !0 === c.value) && I.focus(),
                Se(),
                0 === N.value.length) {
                    const o = !0 === t.emitValue ? a : e;
                    return n("add", {
                        index: 0,
                        value: o
                    }),
                    void n("update:modelValue", !0 === t.multiple ? [o] : o)
                }
                const l = t.modelValue.slice()
                  , i = ce.value.findIndex(e=>be(e, a));
                if (i > -1)
                    n("remove", {
                        index: i,
                        value: l.splice(i, 1)[0]
                    });
                else {
                    if (void 0 !== t.maxValues && l.length >= t.maxValues)
                        return;
                    const o = !0 === t.emitValue ? a : e;
                    n("add", {
                        index: l.length,
                        value: o
                    }),
                    l.push(o)
                }
                n("update:modelValue", l)
            }
            function ge(e) {
                if (!0 !== l.platform.is.desktop)
                    return;
                const t = e > -1 && e < z.value ? e : -1;
                s.value !== t && (s.value = t)
            }
            function ye(e=1, o) {
                if (!0 === i.value) {
                    let n = s.value;
                    do {
                        n = Le(n + e, -1, z.value - 1)
                    } while (-1 !== n && n !== s.value && !0 === ue.value(t.options[n]));
                    s.value !== n && (ge(n),
                    R(n),
                    !0 !== o && !0 === t.useInput && !0 === t.fillInput && Ee(n >= 0 ? se.value(t.options[n]) : g))
                }
            }
            function we(e, o) {
                const n = t=>be(re.value(t), e);
                return t.options.find(n) || o.find(n) || e
            }
            function xe(e, t) {
                const o = void 0 !== e ? e : t;
                return "function" === typeof o ? o : e=>null !== e && "object" === typeof e && o in e ? e[o] : e
            }
            function _e(e) {
                const t = re.value(e);
                return void 0 !== ce.value.find(e=>be(e, t))
            }
            function Se(e) {
                !0 === t.useInput && null !== _.value && (void 0 === e || _.value === e.target && e.target.value === X.value) && _.value.select()
            }
            function ke(e) {
                !0 === K(e, 27) && !0 === i.value && (C(e),
                Ke(),
                Xe()),
                n("keyup", e)
            }
            function Ce(e) {
                const {value: o} = e.target;
                if (void 0 === e.keyCode)
                    if (e.target.value = "",
                    clearTimeout(v),
                    Xe(),
                    "string" === typeof o && o.length > 0) {
                        const e = o.toLocaleLowerCase()
                          , n = o=>{
                            const n = t.options.find(t=>o.value(t).toLocaleLowerCase() === e);
                            return void 0 !== n && (-1 === N.value.indexOf(n) ? he(n) : Ke(),
                            !0)
                        }
                          , a = e=>{
                            !0 !== n(re) && !0 !== n(se) && !0 !== e && Pe(o, !0, ()=>a(!0))
                        }
                        ;
                        a()
                    } else
                        I.clearValue(e);
                else
                    ke(e)
            }
            function qe(e) {
                n("keypress", e)
            }
            function $e(o) {
                if (n("keydown", o),
                !0 === Y(o))
                    return;
                const a = u.value.length > 0 && (void 0 !== t.newValueMode || void 0 !== t.onNewValue)
                  , l = !0 !== o.shiftKey && !0 !== t.multiple && (s.value > -1 || !0 === a);
                if (27 === o.keyCode)
                    return void q(o);
                if (9 === o.keyCode && !1 === l)
                    return void We();
                if (void 0 === o.target || o.target.id !== I.targetUid.value)
                    return;
                if (40 === o.keyCode && !0 !== I.innerLoading.value && !1 === i.value)
                    return $(o),
                    void Ye();
                if (8 === o.keyCode && !0 !== t.hideSelected && 0 === u.value.length)
                    return void (!0 === t.multiple && !0 === Array.isArray(t.modelValue) ? pe(t.modelValue.length - 1) : !0 !== t.multiple && null !== t.modelValue && n("update:modelValue", null));
                35 !== o.keyCode && 36 !== o.keyCode || "string" === typeof u.value && 0 !== u.value.length || ($(o),
                s.value = -1,
                ye(36 === o.keyCode ? 1 : -1, t.multiple)),
                33 !== o.keyCode && 34 !== o.keyCode || void 0 === L.value || ($(o),
                s.value = Math.max(-1, Math.min(z.value, s.value + (33 === o.keyCode ? -1 : 1) * L.value.view)),
                ye(33 === o.keyCode ? 1 : -1, t.multiple)),
                38 !== o.keyCode && 40 !== o.keyCode || ($(o),
                ye(38 === o.keyCode ? -1 : 1, t.multiple));
                const r = z.value;
                if ((void 0 === y || w < Date.now()) && (y = ""),
                r > 0 && !0 !== t.useInput && void 0 !== o.key && 1 === o.key.length && o.altKey === o.ctrlKey && (32 !== o.keyCode || y.length > 0)) {
                    !0 !== i.value && Ye(o);
                    const n = o.key.toLocaleLowerCase()
                      , a = 1 === y.length && y[0] === n;
                    w = Date.now() + 1500,
                    !1 === a && ($(o),
                    y += n);
                    const l = new RegExp("^" + y.split("").map(e=>Yc.indexOf(e) > -1 ? "\\" + e : e).join(".*"),"i");
                    let u = s.value;
                    if (!0 === a || u < 0 || !0 !== l.test(se.value(t.options[u])))
                        do {
                            u = Le(u + 1, -1, r - 1)
                        } while (u !== s.value && (!0 === ue.value(t.options[u]) || !0 !== l.test(se.value(t.options[u]))));
                    s.value !== u && e.nextTick(()=>{
                        ge(u),
                        R(u),
                        u >= 0 && !0 === t.useInput && !0 === t.fillInput && Ee(se.value(t.options[u]))
                    }
                    )
                } else if (13 === o.keyCode || 32 === o.keyCode && !0 !== t.useInput && "" === y || 9 === o.keyCode && !1 !== l)
                    if (9 !== o.keyCode && $(o),
                    s.value > -1 && s.value < r)
                        he(t.options[s.value]);
                    else {
                        if (!0 === a) {
                            const e = (e,o)=>{
                                if (o) {
                                    if (!0 !== Wc(o))
                                        return
                                } else
                                    o = t.newValueMode;
                                if (void 0 === e || null === e)
                                    return;
                                Ae("", !0 !== t.multiple, !0);
                                const n = "toggle" === o ? he : fe;
                                n(e, "add-unique" === o),
                                !0 !== t.multiple && (null !== _.value && _.value.focus(),
                                Ke())
                            }
                            ;
                            if (void 0 !== t.onNewValue ? n("new-value", u.value, e) : e(u.value),
                            !0 !== t.multiple)
                                return
                        }
                        !0 === i.value ? We() : !0 !== I.innerLoading.value && Ye()
                    }
            }
            function Me() {
                return !0 === m ? M.value : null !== S.value && null !== S.value.__qPortalInnerRef.value ? S.value.__qPortalInnerRef.value : void 0
            }
            function Te() {
                return Me()
            }
            function Be() {
                return !0 === t.hideSelected ? [] : void 0 !== o["selected-item"] ? oe.value.map(e=>o["selected-item"](e)).slice() : void 0 !== o.selected ? [].concat(o.selected()) : !0 === t.useChips ? oe.value.map((o,n)=>e.h(ka, {
                    key: "option-" + n,
                    removable: !0 === I.editable.value && !0 !== ue.value(o.opt),
                    dense: !0,
                    textColor: t.color,
                    tabindex: J.value,
                    onRemove() {
                        o.removeAtIndex(n)
                    }
                }, ()=>e.h("span", {
                    class: "ellipsis",
                    [!0 === o.html ? "innerHTML" : "textContent"]: se.value(o.opt)
                }))) : [e.h("span", {
                    [!0 === G.value ? "innerHTML" : "textContent"]: void 0 !== t.displayValue ? t.displayValue : X.value
                })]
            }
            function ze() {
                if (!0 === W.value)
                    return void 0 !== o["no-option"] ? o["no-option"]({
                        inputValue: u.value
                    }) : void 0;
                const t = void 0 !== o.option ? o.option : t=>{
                    return e.h(gr, {
                        key: t.index,
                        ...t.itemProps
                    }, ()=>{
                        return e.h(br, ()=>e.h(Er, ()=>e.h("span", {
                            [!0 === t.html ? "innerHTML" : "textContent"]: t.label
                        })))
                    }
                    )
                }
                ;
                let n = A("div", ne.value.map(t));
                return void 0 !== o["before-options"] && (n = o["before-options"]().concat(n)),
                Ge(o["after-options"], n)
            }
            function Oe(o, n) {
                const a = !0 === n ? {
                    ...ee.value,
                    ...I.splitAttrs.attributes.value
                } : void 0
                  , l = {
                    ref: !0 === n ? _ : void 0,
                    key: "i_t",
                    class: Q.value,
                    style: t.inputStyle,
                    value: void 0 !== u.value ? u.value : "",
                    type: "search",
                    ...a,
                    id: !0 === n ? I.targetUid.value : void 0,
                    maxlength: t.maxlength,
                    autocomplete: t.autocomplete,
                    "data-autofocus": !0 !== o && !0 === t.autofocus || void 0,
                    disabled: !0 === t.disable,
                    readonly: !0 === t.readonly,
                    ...de.value
                };
                return !0 !== o && !0 === m && (!0 === Array.isArray(l.class) ? l.class = [...l.class, "no-pointer-events"] : l.class += " no-pointer-events"),
                e.h("input", l)
            }
            function Ve(e) {
                clearTimeout(v),
                e && e.target && !0 === e.target.qComposing || (Ee(e.target.value || ""),
                f = !0,
                g = u.value,
                !0 === I.focused.value || !0 === m && !0 !== c.value || I.focus(),
                void 0 !== t.onFilter && (v = setTimeout(()=>{
                    Pe(u.value)
                }
                , t.inputDebounce)))
            }
            function Ee(e) {
                u.value !== e && (u.value = e,
                n("input-value", e))
            }
            function Ae(e, o, n) {
                f = !0 !== n,
                !0 === t.useInput && (Ee(e),
                !0 !== o && !0 === n || (g = e),
                !0 !== o && Pe(e))
            }
            function Pe(o, l, r) {
                if (void 0 === t.onFilter || !0 !== l && !0 !== I.focused.value)
                    return;
                !0 === I.innerLoading.value ? n("filter-abort") : (I.innerLoading.value = !0,
                d.value = !0),
                "" !== o && !0 !== t.multiple && N.value.length > 0 && !0 !== f && o === se.value(N.value[0]) && (o = "");
                const s = setTimeout(()=>{
                    !0 === i.value && (i.value = !1)
                }
                , 10);
                clearTimeout(h),
                h = s,
                n("filter", o, (t,o)=>{
                    !0 !== l && !0 !== I.focused.value || h !== s || (clearTimeout(h),
                    "function" === typeof t && t(),
                    d.value = !1,
                    e.nextTick(()=>{
                        I.innerLoading.value = !1,
                        !0 === I.editable.value && (!0 === l ? !0 === i.value && Ke() : !0 === i.value ? Ze(!0) : i.value = !0),
                        "function" === typeof o && e.nextTick(()=>{
                            o(a)
                        }
                        ),
                        "function" === typeof r && e.nextTick(()=>{
                            r(a)
                        }
                        )
                    }
                    ))
                }
                , ()=>{
                    !0 === I.focused.value && h === s && (clearTimeout(h),
                    I.innerLoading.value = !1,
                    d.value = !1),
                    !0 === i.value && (i.value = !1)
                }
                )
            }
            function Re() {
                return e.h(Rn, {
                    ref: S,
                    class: U.value,
                    style: t.popupContentStyle,
                    modelValue: i.value,
                    fit: !0 !== t.menuShrink,
                    cover: !0 === t.optionsCover && !0 !== W.value && !0 !== t.useInput,
                    anchor: t.menuAnchor,
                    self: t.menuSelf,
                    offset: t.menuOffset,
                    dark: D.value,
                    noParentEvent: !0,
                    noRefocus: !0,
                    noFocus: !0,
                    square: le.value,
                    transitionShow: t.transitionShow,
                    transitionHide: t.transitionHide,
                    transitionDuration: t.transitionDuration,
                    separateClosePopup: !0,
                    ...te.value,
                    onScrollPassive: P,
                    onBeforeShow: tt,
                    onBeforeHide: Fe,
                    onShow: Ie
                }, ze)
            }
            function Fe(e) {
                ot(e),
                We()
            }
            function Ie() {
                F()
            }
            function Ne(e) {
                C(e),
                null !== _.value && _.value.focus(),
                c.value = !0,
                window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0)
            }
            function je(t) {
                C(t),
                e.nextTick(()=>{
                    c.value = !1
                }
                )
            }
            function De() {
                const n = [e.h(pu, {
                    class: `col-auto ${I.fieldClass.value}`,
                    ...j.value,
                    for: I.targetUid.value,
                    dark: D.value,
                    square: !0,
                    loading: d.value,
                    itemAligned: !1,
                    filled: !0,
                    stackLabel: u.value.length > 0,
                    ...I.splitAttrs.listeners.value,
                    onFocus: Ne,
                    onBlur: je
                }, {
                    ...o,
                    rawControl: ()=>I.getControl(!0),
                    before: void 0,
                    after: void 0
                })];
                return !0 === i.value && n.push(e.h("div", {
                    ref: M,
                    class: U.value + " scroll",
                    style: t.popupContentStyle,
                    ...te.value,
                    onClick: q,
                    onScrollPassive: P
                }, ze())),
                e.h(sr, {
                    ref: k,
                    modelValue: r.value,
                    position: !0 === t.useInput ? "top" : void 0,
                    transitionShow: b,
                    transitionHide: t.transitionHide,
                    transitionDuration: t.transitionDuration,
                    onBeforeShow: tt,
                    onBeforeHide: He,
                    onHide: Qe,
                    onShow: Ue
                }, ()=>e.h("div", {
                    class: "q-select__dialog" + (!0 === D.value ? " q-select__dialog--dark q-dark" : "") + (!0 === c.value ? " q-select__dialog--focused" : "")
                }, n))
            }
            function He(e) {
                ot(e),
                null !== k.value && k.value.__updateRefocusTarget(I.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),
                I.focused.value = !1
            }
            function Qe(e) {
                Ke(),
                !1 === I.focused.value && n("blur", e),
                Xe()
            }
            function Ue() {
                const e = document.activeElement;
                null !== e && e.id === I.targetUid.value || null === _.value || _.value === e || _.value.focus(),
                F()
            }
            function We() {
                !0 !== r.value && (s.value = -1,
                !0 === i.value && (i.value = !1),
                !1 === I.focused.value && (clearTimeout(h),
                h = void 0,
                !0 === I.innerLoading.value && (n("filter-abort"),
                I.innerLoading.value = !1,
                d.value = !1)))
            }
            function Ye(n) {
                !0 === I.editable.value && (!0 === m ? (I.onControlFocusin(n),
                r.value = !0,
                e.nextTick(()=>{
                    I.focus()
                }
                )) : I.focus(),
                void 0 !== t.onFilter ? Pe(u.value) : !0 === W.value && void 0 === o["no-option"] || (i.value = !0))
            }
            function Ke() {
                r.value = !1,
                We()
            }
            function Xe() {
                !0 === t.useInput && Ae(!0 !== t.multiple && !0 === t.fillInput && N.value.length > 0 && se.value(N.value[0]) || "", !0, !0)
            }
            function Ze(e) {
                let o = -1;
                if (!0 === e) {
                    if (N.value.length > 0) {
                        const e = re.value(N.value[0]);
                        o = t.options.findIndex(t=>be(re.value(t), e))
                    }
                    E(o)
                }
                ge(o)
            }
            function Je(t, o) {
                !0 === i.value && !1 === I.innerLoading.value && (E(-1, !0),
                e.nextTick(()=>{
                    !0 === i.value && !1 === I.innerLoading.value && (t > o ? E() : Ze(!0))
                }
                ))
            }
            function et() {
                !1 === r.value && null !== S.value && S.value.updatePosition()
            }
            function tt(e) {
                void 0 !== e && C(e),
                n("popup-show", e),
                I.hasPopupOpen = !0,
                I.onControlFocusin(e)
            }
            function ot(e) {
                void 0 !== e && C(e),
                n("popup-hide", e),
                I.hasPopupOpen = !1,
                I.onControlFocusout(e)
            }
            function nt() {
                m = (!0 === l.platform.is.mobile || "dialog" === t.behavior) && ("menu" !== t.behavior && (!0 !== t.useInput || (void 0 !== o["no-option"] || void 0 !== t.onFilter || !1 === W.value))),
                b = !0 === l.platform.is.ios && !0 === m && !0 === t.useInput ? "fade" : t.transitionShow
            }
            return e.watch(N, e=>{
                p = e,
                !0 === t.useInput && !0 === t.fillInput && !0 !== t.multiple && !0 !== I.innerLoading.value && (!0 !== r.value && !0 !== i.value || !0 !== H.value) && (!0 !== f && Xe(),
                !0 !== r.value && !0 !== i.value || Pe(""))
            }
            , {
                immediate: !0
            }),
            e.watch(()=>t.fillInput, Xe),
            e.watch(i, Ze),
            e.watch(z, Je),
            e.onBeforeUpdate(nt),
            e.onUpdated(et),
            nt(),
            e.onBeforeUnmount(()=>{
                clearTimeout(v)
            }
            ),
            Object.assign(a, {
                showPopup: Ye,
                hidePopup: Ke,
                removeAtIndex: pe,
                add: fe,
                toggleOption: he,
                getOptionIndex: ()=>s.value,
                setOptionIndex: ge,
                moveOptionSelection: ye,
                filter: Pe,
                updateMenuPosition: et,
                updateInputValue: Ae,
                isOptionSelected: _e,
                getEmittingOptionValue: ve,
                isOptionDisabled: (...e)=>!0 === ue.value.apply(null, e),
                getOptionValue: (...e)=>re.value.apply(null, e),
                getOptionLabel: (...e)=>se.value.apply(null, e)
            }),
            Object.assign(I, {
                innerValue: N,
                fieldClass: e.computed(()=>`q-select q-field--auto-height q-select--with ${!0 !== t.useInput ? "out" : ""}-input` + ` q-select--with ${!0 !== t.useChips ? "out" : ""}-chips` + ` q-select--${!0 === t.multiple ? "multiple" : "single"}`),
                inputRef: x,
                targetRef: _,
                hasValue: H,
                showPopup: Ye,
                floatingLabel: e.computed(()=>!0 !== t.hideSelected && !0 === H.value || "number" === typeof u.value || u.value.length > 0 || su(t.displayValue)),
                getControlChild: ()=>{
                    if (!1 !== I.editable.value && (!0 === r.value || !0 !== W.value || void 0 !== o["no-option"]))
                        return !0 === m ? De() : Re();
                    !0 === I.hasPopupOpen && (I.hasPopupOpen = !1)
                }
                ,
                controlEvents: {
                    onFocusin(e) {
                        I.onControlFocusin(e)
                    },
                    onFocusout(e) {
                        I.onControlFocusout(e, ()=>{
                            Xe(),
                            We()
                        }
                        )
                    },
                    onClick(e) {
                        if (q(e),
                        !0 !== m && !0 === i.value)
                            return We(),
                            void (null !== _.value && _.value.focus());
                        Ye(e)
                    }
                },
                getControl: o=>{
                    const n = Be()
                      , a = !0 === o || !0 !== r.value || !0 !== m;
                    if (!0 === t.useInput)
                        n.push(Oe(o, a));
                    else if (!0 === I.editable.value) {
                        const l = !0 === a ? ee.value : void 0;
                        n.push(e.h("input", {
                            ref: !0 === a ? _ : void 0,
                            key: "d_t",
                            class: "q-select__focus-target",
                            id: !0 === a ? I.targetUid.value : void 0,
                            readonly: !0,
                            "data-autofocus": !0 !== o && !0 === t.autofocus || void 0,
                            ...l,
                            onKeydown: $e,
                            onKeyup: ke,
                            onKeypress: qe
                        })),
                        !0 === a && "string" === typeof t.autocomplete && t.autocomplete.length > 0 && n.push(e.h("input", {
                            class: "q-select__autocomplete-input",
                            autocomplete: t.autocomplete,
                            onKeyup: Ce
                        }))
                    }
                    if (void 0 !== T.value && !0 !== t.disable && ce.value.length > 0) {
                        const o = ce.value.map(t=>e.h("option", {
                            value: t,
                            selected: !0
                        }));
                        n.push(e.h("select", {
                            class: "hidden",
                            name: T.value,
                            multiple: t.multiple
                        }, o))
                    }
                    const l = !0 === t.useInput || !0 !== a ? void 0 : I.splitAttrs.attributes.value;
                    return e.h("div", {
                        class: "q-field__native row items-center",
                        ...l
                    }, n)
                }
                ,
                getInnerAppend: ()=>!0 !== t.loading && !0 !== d.value && !0 !== t.hideDropdownIcon ? [e.h(ft, {
                    class: "q-select__dropdown-icon" + (!0 === i.value ? " rotate-180" : ""),
                    name: ae.value
                })] : null
            }),
            vu(I)
        }
    });
    const Zc = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"]
      , Gc = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
    var Jc = Me({
        name: "QSkeleton",
        props: {
            ...yt,
            tag: {
                type: String,
                default: "div"
            },
            type: {
                type: String,
                validator: e=>Zc.includes(e),
                default: "rect"
            },
            animation: {
                type: String,
                validator: e=>Gc.includes(e),
                default: "wave"
            },
            animationSpeed: {
                type: [String, Number],
                default: 1500
            },
            square: Boolean,
            bordered: Boolean,
            size: String,
            width: String,
            height: String
        },
        setup(t, {slots: o}) {
            const n = e.getCurrentInstance()
              , a = wt(t, n.proxy.$q)
              , l = e.computed(()=>{
                const e = void 0 !== t.size ? [t.size, t.size] : [t.width, t.height];
                return {
                    "--q-skeleton-speed": `${t.animationSpeed}ms`,
                    width: e[0],
                    height: e[1]
                }
            }
            )
              , i = e.computed(()=>`q-skeleton q-skeleton--${!0 === a.value ? "dark" : "light"} q-skeleton--type-${t.type}` + ("none" !== t.animation ? ` q-skeleton--anim q-skeleton--anim-${t.animation}` : "") + (!0 === t.square ? " q-skeleton--square" : "") + (!0 === t.bordered ? " q-skeleton--bordered" : ""));
            return ()=>e.h(t.tag, {
                class: i.value,
                style: l.value
            }, Xe(o.default))
        }
    });
    const ed = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]];
    var td = Me({
        name: "QSlideItem",
        props: {
            ...yt,
            leftColor: String,
            rightColor: String,
            topColor: String,
            bottomColor: String,
            onSlide: Function
        },
        emits: ["action", "top", "right", "bottom", "left"],
        setup(t, {slots: o, emit: n}) {
            const {proxy: a} = e.getCurrentInstance()
              , {$q: l} = a
              , i = wt(t, l)
              , {getCacheWithFn: r} = ea()
              , s = e.ref(null);
            let u, c = {}, d = {}, v = {};
            const p = e.computed(()=>!0 === l.lang.rtl ? {
                left: "right",
                right: "left"
            } : {
                left: "left",
                right: "right"
            })
              , m = e.computed(()=>"q-slide-item q-item-type overflow-hidden" + (!0 === i.value ? " q-slide-item--dark q-dark" : ""));
            function f() {
                s.value.style.transform = "translate(0,0)"
            }
            function h(e, o, a) {
                void 0 !== t.onSlide && n("slide", {
                    side: e,
                    ratio: o,
                    isReset: a
                })
            }
            function g(e) {
                const t = s.value;
                if (e.isFirst)
                    c = {
                        dir: null,
                        size: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        },
                        scale: 0
                    },
                    t.classList.add("no-transition"),
                    ed.forEach(e=>{
                        if (void 0 !== o[e[0]]) {
                            const t = v[e[0]];
                            t.style.transform = "scale(1)",
                            c.size[e[0]] = t.getBoundingClientRect()[e[3]]
                        }
                    }
                    ),
                    c.axis = "up" === e.direction || "down" === e.direction ? "Y" : "X";
                else {
                    if (e.isFinal)
                        return t.classList.remove("no-transition"),
                        void (1 === c.scale ? (t.style.transform = `translate ${c.axis}(${100 * c.dir}%)`,
                        u = setTimeout(()=>{
                            n(c.showing, {
                                reset: f
                            }),
                            n("action", {
                                side: c.showing,
                                reset: f
                            })
                        }
                        , 230)) : (t.style.transform = "translate(0,0)",
                        h(c.showing, 0, !0)));
                    e.direction = "X" === c.axis ? e.offset.x < 0 ? "left" : "right" : e.offset.y < 0 ? "up" : "down"
                }
                if (void 0 === o.left && e.direction === p.value.right || void 0 === o.right && e.direction === p.value.left || void 0 === o.top && "down" === e.direction || void 0 === o.bottom && "up" === e.direction)
                    return void (t.style.transform = "translate(0,0)");
                let a, l, i;
                "X" === c.axis ? (l = "left" === e.direction ? -1 : 1,
                a = 1 === l ? p.value.left : p.value.right,
                i = e.distance.x) : (l = "up" === e.direction ? -2 : 2,
                a = 2 === l ? "top" : "bottom",
                i = e.distance.y),
                null !== c.dir && Math.abs(l) !== Math.abs(c.dir) || (c.dir !== l && (["left", "right", "top", "bottom"].forEach(e=>{
                    d[e] && (d[e].style.visibility = a === e ? "visible" : "hidden")
                }
                ),
                c.showing = a,
                c.dir = l),
                c.scale = Math.max(0, Math.min(1, (i - 40) / c.size[a])),
                t.style.transform = `translate ${c.axis}(${i * l / Math.abs(l)}px)`,
                v[a].style.transform = `scale(${c.scale})`,
                h(a, c.scale, !1))
            }
            return e.onBeforeUpdate(()=>{
                d = {},
                v = {}
            }
            ),
            e.onBeforeUnmount(()=>{
                clearTimeout(u)
            }
            ),
            Object.assign(a, {
                reset: f
            }),
            ()=>{
                const n = []
                  , a = {
                    left: void 0 !== o[p.value.right],
                    right: void 0 !== o[p.value.left],
                    up: void 0 !== o.bottom,
                    down: void 0 !== o.top
                }
                  , l = Object.keys(a).filter(e=>!0 === a[e]);
                ed.forEach(a=>{
                    const l = a[0];
                    void 0 !== o[l] && n.push(e.h("div", {
                        ref: e=>{
                            d[l] = e
                        }
                        ,
                        class: `q-slide-item__ ${l} absolute-full row no-wrap items-${a[1]} justify-${a[2]}` + (void 0 !== t[l + "Color"] ? ` bg-${t[l + "Color"]}` : "")
                    }, [e.h("div", {
                        ref: e=>{
                            v[l] = e
                        }
                    }, o[l]())]))
                }
                );
                const i = e.h("div", {
                    key: `${0 === l.length ? "only-" : ""} content`,
                    ref: s,
                    class: "q-slide-item__content"
                }, Xe(o.default));
                return 0 === l.length ? n.push(i) : n.push(e.withDirectives(i, r("dir#" + l.join(""), ()=>{
                    const e = {
                        prevent: !0,
                        stop: !0,
                        mouse: !0
                    };
                    return l.forEach(t=>{
                        e[t] = !0
                    }
                    ),
                    [[Va, g, void 0, e]]
                }
                ))),
                e.h("div", {
                    class: m.value
                }, n)
            }
        }
    });
    const od = e.h("div", {
        class: "q-space"
    });
    var nd = Me({
        name: "QSpace",
        setup() {
            return ()=>od
        }
    });
    const ad = [e.h("g", {
        transform: "matrix(1 0 0 -1 0 80)"
    }, [e.h("rect", {
        width: "10",
        height: "20",
        rx: "3"
    }, [e.h("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "4.3s",
        values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("rect", {
        x: "15",
        width: "10",
        height: "80",
        rx: "3"
    }, [e.h("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "2s",
        values: "80;55;33;5;75;23;73;33;12;14;60;80",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("rect", {
        x: "30",
        width: "10",
        height: "50",
        rx: "3"
    }, [e.h("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "1.4s",
        values: "50;34;78;23;56;23;34;76;80;54;21;50",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("rect", {
        x: "45",
        width: "10",
        height: "30",
        rx: "3"
    }, [e.h("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "2s",
        values: "30;45;13;80;56;72;45;76;34;23;67;30",
        calcMode: "linear",
        repeatCount: "indefinite"
    })])])];
    var ld = Me({
        name: "QSpinnerAudio",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                fill: "currentColor",
                width: o.value,
                height: o.value,
                viewBox: "0 0 55 80",
                xmlns: "http://www.w3.org/2000/svg"
            }, ad)
        }
    });
    const id = [e.h("g", {
        transform: "translate(1 1)",
        "stroke-width": "2",
        fill: "none",
        "fill-rule": "evenodd"
    }, [e.h("circle", {
        cx: "5",
        cy: "50",
        r: "5"
    }, [e.h("animate", {
        attributeName: "cy",
        begin: "0s",
        dur: "2.2s",
        values: "50;5;50;50",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "cx",
        begin: "0s",
        dur: "2.2s",
        values: "5;27;49;5",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "27",
        cy: "5",
        r: "5"
    }, [e.h("animate", {
        attributeName: "cy",
        begin: "0s",
        dur: "2.2s",
        from: "5",
        to: "5",
        values: "5;50;50;5",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "cx",
        begin: "0s",
        dur: "2.2s",
        from: "27",
        to: "27",
        values: "27;49;5;27",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "49",
        cy: "50",
        r: "5"
    }, [e.h("animate", {
        attributeName: "cy",
        begin: "0s",
        dur: "2.2s",
        values: "50;50;5;50",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "cx",
        from: "49",
        to: "49",
        begin: "0s",
        dur: "2.2s",
        values: "49;5;27;49",
        calcMode: "linear",
        repeatCount: "indefinite"
    })])])];
    var rd = Me({
        name: "QSpinnerBall",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                stroke: "currentColor",
                width: o.value,
                height: o.value,
                viewBox: "0 0 57 57",
                xmlns: "http://www.w3.org/2000/svg"
            }, id)
        }
    });
    const sd = [e.h("rect", {
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
    }, [e.h("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "y",
        begin: "0.5s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("rect", {
        x: "30",
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
    }, [e.h("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "y",
        begin: "0.25s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("rect", {
        x: "60",
        width: "15",
        height: "140",
        rx: "6"
    }, [e.h("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "y",
        begin: "0s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("rect", {
        x: "90",
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
    }, [e.h("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "y",
        begin: "0.25s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("rect", {
        x: "120",
        y: "10",
        width: "15",
        height: "120",
        rx: "6"
    }, [e.h("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "y",
        begin: "0.5s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
    })])];
    var ud = Me({
        name: "QSpinnerBars",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                fill: "currentColor",
                width: o.value,
                height: o.value,
                viewBox: "0 0 135 140",
                xmlns: "http://www.w3.org/2000/svg"
            }, sd)
        }
    });
    const cd = [e.h("rect", {
        x: "25",
        y: "25",
        width: "50",
        height: "50",
        fill: "none",
        "stroke-width": "4",
        stroke: "currentColor"
    }, [e.h("animateTransform", {
        id: "spinnerBox",
        attributeName: "transform",
        type: "rotate",
        from: "0 50 50",
        to: "180 50 50",
        dur: "0.5s",
        begin: "rectBox.end"
    })]), e.h("rect", {
        x: "27",
        y: "27",
        width: "46",
        height: "50",
        fill: "currentColor"
    }, [e.h("animate", {
        id: "rectBox",
        attributeName: "height",
        begin: "0s;spinnerBox.end",
        dur: "1.3s",
        from: "50",
        to: "0",
        fill: "freeze"
    })])];
    var dd = Me({
        name: "QSpinnerBox",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                width: o.value,
                height: o.value,
                viewBox: "0 0 100 100",
                preserveAspectRatio: "xMidYMid",
                xmlns: "http://www.w3.org/2000/svg"
            }, cd)
        }
    });
    const vd = [e.h("circle", {
        cx: "50",
        cy: "50",
        r: "48",
        fill: "none",
        "stroke-width": "4",
        "stroke-miterlimit": "10",
        stroke: "currentColor"
    }), e.h("line", {
        "stroke-linecap": "round",
        "stroke-width": "4",
        "stroke-miterlimit": "10",
        stroke: "currentColor",
        x1: "50",
        y1: "50",
        x2: "85",
        y2: "50.5"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 50 50",
        to: "360 50 50",
        dur: "2s",
        repeatCount: "indefinite"
    })]), e.h("line", {
        "stroke-linecap": "round",
        "stroke-width": "4",
        "stroke-miterlimit": "10",
        stroke: "currentColor",
        x1: "50",
        y1: "50",
        x2: "49.5",
        y2: "74"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 50 50",
        to: "360 50 50",
        dur: "15s",
        repeatCount: "indefinite"
    })])];
    var pd = Me({
        name: "QSpinnerClock",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                width: o.value,
                height: o.value,
                viewBox: "0 0 100 100",
                preserveAspectRatio: "xMidYMid",
                xmlns: "http://www.w3.org/2000/svg"
            }, vd)
        }
    });
    const md = [e.h("rect", {
        x: "0",
        y: "0",
        width: " 100",
        height: "100",
        fill: "none"
    }), e.h("path", {
        d: "M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z",
        fill: "currentColor"
    }), e.h("circle", {
        cx: "30",
        cy: "47",
        r: "5",
        fill: "#fff"
    }, [e.h("animate", {
        attributeName: "opacity",
        from: "0",
        to: "1",
        values: "0;1;1",
        keyTimes: "0;0.2;1",
        dur: "1s",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "50",
        cy: "47",
        r: "5",
        fill: "#fff"
    }, [e.h("animate", {
        attributeName: "opacity",
        from: "0",
        to: "1",
        values: "0;0;1;1",
        keyTimes: "0;0.2;0.4;1",
        dur: "1s",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "70",
        cy: "47",
        r: "5",
        fill: "#fff"
    }, [e.h("animate", {
        attributeName: "opacity",
        from: "0",
        to: "1",
        values: "0;0;1;1",
        keyTimes: "0;0.4;0.6;1",
        dur: "1s",
        repeatCount: "indefinite"
    })])];
    var fd = Me({
        name: "QSpinnerComment",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                width: o.value,
                height: o.value,
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 100 100",
                preserveAspectRatio: "xMidYMid"
            }, md)
        }
    });
    const hd = [e.h("rect", {
        x: "0",
        y: "0",
        width: " 100",
        height: "100",
        fill: "none"
    }), e.h("g", {
        transform: "translate(25 25)"
    }, [e.h("rect", {
        x: "-20",
        y: "-20",
        width: " 40",
        height: "40",
        fill: "currentColor",
        opacity: "0.9"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "scale",
        from: "1.5",
        to: "1",
        repeatCount: "indefinite",
        begin: "0s",
        dur: "1s",
        calcMode: "spline",
        keySplines: "0.2 0.8 0.2 0.8",
        keyTimes: "0;1"
    })])]), e.h("g", {
        transform: "translate(75 25)"
    }, [e.h("rect", {
        x: "-20",
        y: "-20",
        width: " 40",
        height: "40",
        fill: "currentColor",
        opacity: "0.8"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "scale",
        from: "1.5",
        to: "1",
        repeatCount: "indefinite",
        begin: "0.1s",
        dur: "1s",
        calcMode: "spline",
        keySplines: "0.2 0.8 0.2 0.8",
        keyTimes: "0;1"
    })])]), e.h("g", {
        transform: "translate(25 75)"
    }, [e.h("rect", {
        x: "-20",
        y: "-20",
        width: " 40",
        height: "40",
        fill: "currentColor",
        opacity: "0.7"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "scale",
        from: "1.5",
        to: "1",
        repeatCount: "indefinite",
        begin: "0.3s",
        dur: "1s",
        calcMode: "spline",
        keySplines: "0.2 0.8 0.2 0.8",
        keyTimes: "0;1"
    })])]), e.h("g", {
        transform: "translate(75 75)"
    }, [e.h("rect", {
        x: "-20",
        y: "-20",
        width: " 40",
        height: "40",
        fill: "currentColor",
        opacity: "0.6"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "scale",
        from: "1.5",
        to: "1",
        repeatCount: "indefinite",
        begin: "0.2s",
        dur: "1s",
        calcMode: "spline",
        keySplines: "0.2 0.8 0.2 0.8",
        keyTimes: "0;1"
    })])])];
    var gd = Me({
        name: "QSpinnerCube",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                width: o.value,
                height: o.value,
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 100 100",
                preserveAspectRatio: "xMidYMid"
            }, hd)
        }
    });
    const bd = [e.h("circle", {
        cx: "15",
        cy: "15",
        r: "15"
    }, [e.h("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "fill-opacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "60",
        cy: "15",
        r: "9",
        "fill-opacity": ".3"
    }, [e.h("animate", {
        attributeName: "r",
        from: "9",
        to: "9",
        begin: "0s",
        dur: "0.8s",
        values: "9;15;9",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "fill-opacity",
        from: ".5",
        to: ".5",
        begin: "0s",
        dur: "0.8s",
        values: ".5;1;.5",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "105",
        cy: "15",
        r: "15"
    }, [e.h("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "fill-opacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite"
    })])];
    var yd = Me({
        name: "QSpinnerDots",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                fill: "currentColor",
                width: o.value,
                height: o.value,
                viewBox: "0 0 120 30",
                xmlns: "http://www.w3.org/2000/svg"
            }, bd)
        }
    });
    const wd = [e.h("g", {
        transform: "translate(20 50)"
    }, [e.h("rect", {
        x: "-10",
        y: "-30",
        width: " 20",
        height: "60",
        fill: "currentColor",
        opacity: "0.6"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "scale",
        from: "2",
        to: "1",
        begin: "0s",
        repeatCount: "indefinite",
        dur: "1s",
        calcMode: "spline",
        keySplines: "0.1 0.9 0.4 1",
        keyTimes: "0;1",
        values: "2;1"
    })])]), e.h("g", {
        transform: "translate(50 50)"
    }, [e.h("rect", {
        x: "-10",
        y: "-30",
        width: " 20",
        height: "60",
        fill: "currentColor",
        opacity: "0.8"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "scale",
        from: "2",
        to: "1",
        begin: "0.1s",
        repeatCount: "indefinite",
        dur: "1s",
        calcMode: "spline",
        keySplines: "0.1 0.9 0.4 1",
        keyTimes: "0;1",
        values: "2;1"
    })])]), e.h("g", {
        transform: "translate(80 50)"
    }, [e.h("rect", {
        x: "-10",
        y: "-30",
        width: " 20",
        height: "60",
        fill: "currentColor",
        opacity: "0.9"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "scale",
        from: "2",
        to: "1",
        begin: "0.2s",
        repeatCount: "indefinite",
        dur: "1s",
        calcMode: "spline",
        keySplines: "0.1 0.9 0.4 1",
        keyTimes: "0;1",
        values: "2;1"
    })])])];
    var xd = Me({
        name: "QSpinnerFacebook",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                width: o.value,
                height: o.value,
                viewBox: "0 0 100 100",
                xmlns: "http://www.w3.org/2000/svg",
                preserveAspectRatio: "xMidYMid"
            }, wd)
        }
    });
    const _d = [e.h("g", {
        transform: "translate(-20,-20)"
    }, [e.h("path", {
        d: "M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",
        fill: "currentColor"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "90 50 50",
        to: "0 50 50",
        dur: "1s",
        repeatCount: "indefinite"
    })])]), e.h("g", {
        transform: "translate(20,20) rotate(15 50 50)"
    }, [e.h("path", {
        d: "M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",
        fill: "currentColor"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 50 50",
        to: "90 50 50",
        dur: "1s",
        repeatCount: "indefinite"
    })])])];
    var Sd = Me({
        name: "QSpinnerGears",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                width: o.value,
                height: o.value,
                viewBox: "0 0 100 100",
                preserveAspectRatio: "xMidYMid",
                xmlns: "http://www.w3.org/2000/svg"
            }, _d)
        }
    });
    const kd = [e.h("circle", {
        cx: "12.5",
        cy: "12.5",
        r: "12.5"
    }, [e.h("animate", {
        attributeName: "fill-opacity",
        begin: "0s",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "12.5",
        cy: "52.5",
        r: "12.5",
        "fill-opacity": ".5"
    }, [e.h("animate", {
        attributeName: "fill-opacity",
        begin: "100ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "52.5",
        cy: "12.5",
        r: "12.5"
    }, [e.h("animate", {
        attributeName: "fill-opacity",
        begin: "300ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "52.5",
        cy: "52.5",
        r: "12.5"
    }, [e.h("animate", {
        attributeName: "fill-opacity",
        begin: "600ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "92.5",
        cy: "12.5",
        r: "12.5"
    }, [e.h("animate", {
        attributeName: "fill-opacity",
        begin: "800ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "92.5",
        cy: "52.5",
        r: "12.5"
    }, [e.h("animate", {
        attributeName: "fill-opacity",
        begin: "400ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "12.5",
        cy: "92.5",
        r: "12.5"
    }, [e.h("animate", {
        attributeName: "fill-opacity",
        begin: "700ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "52.5",
        cy: "92.5",
        r: "12.5"
    }, [e.h("animate", {
        attributeName: "fill-opacity",
        begin: "500ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "92.5",
        cy: "92.5",
        r: "12.5"
    }, [e.h("animate", {
        attributeName: "fill-opacity",
        begin: "200ms",
        dur: "1s",
        values: "1;.2;1",
        calcMode: "linear",
        repeatCount: "indefinite"
    })])];
    var Cd = Me({
        name: "QSpinnerGrid",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                fill: "currentColor",
                width: o.value,
                height: o.value,
                viewBox: "0 0 105 105",
                xmlns: "http://www.w3.org/2000/svg"
            }, kd)
        }
    });
    const qd = [e.h("path", {
        d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
        "fill-opacity": ".5"
    }, [e.h("animate", {
        attributeName: "fill-opacity",
        begin: "0s",
        dur: "1.4s",
        values: "0.5;1;0.5",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("path", {
        d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
        "fill-opacity": ".5"
    }, [e.h("animate", {
        attributeName: "fill-opacity",
        begin: "0.7s",
        dur: "1.4s",
        values: "0.5;1;0.5",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("path", {
        d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"
    })];
    var $d = Me({
        name: "QSpinnerHearts",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                fill: "currentColor",
                width: o.value,
                height: o.value,
                viewBox: "0 0 140 64",
                xmlns: "http://www.w3.org/2000/svg"
            }, qd)
        }
    });
    const Md = [e.h("g", [e.h("path", {
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "5",
        "stroke-miterlimit": "10",
        d: "M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"
    }), e.h("clipPath", {
        id: "uil-hourglass-clip1"
    }, [e.h("rect", {
        x: "15",
        y: "20",
        width: " 70",
        height: "25"
    }, [e.h("animate", {
        attributeName: "height",
        from: "25",
        to: "0",
        dur: "1s",
        repeatCount: "indefinite",
        values: "25;0;0",
        keyTimes: "0;0.5;1"
    }), e.h("animate", {
        attributeName: "y",
        from: "20",
        to: "45",
        dur: "1s",
        repeatCount: "indefinite",
        values: "20;45;45",
        keyTimes: "0;0.5;1"
    })])]), e.h("clipPath", {
        id: "uil-hourglass-clip2"
    }, [e.h("rect", {
        x: "15",
        y: "55",
        width: " 70",
        height: "25"
    }, [e.h("animate", {
        attributeName: "height",
        from: "0",
        to: "25",
        dur: "1s",
        repeatCount: "indefinite",
        values: "0;25;25",
        keyTimes: "0;0.5;1"
    }), e.h("animate", {
        attributeName: "y",
        from: "80",
        to: "55",
        dur: "1s",
        repeatCount: "indefinite",
        values: "80;55;55",
        keyTimes: "0;0.5;1"
    })])]), e.h("path", {
        d: "M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z",
        "clip-path": "url(#uil-hourglass-clip1)",
        fill: "currentColor"
    }), e.h("path", {
        d: "M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z",
        "clip-path": "url(#uil-hourglass-clip2)",
        fill: "currentColor"
    }), e.h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 50 50",
        to: "180 50 50",
        repeatCount: "indefinite",
        dur: "1s",
        values: "0 50 50;0 50 50;180 50 50",
        keyTimes: "0;0.7;1"
    })])];
    var Td = Me({
        name: "QSpinnerHourglass",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                width: o.value,
                height: o.value,
                viewBox: "0 0 100 100",
                preserveAspectRatio: "xMidYMid",
                xmlns: "http://www.w3.org/2000/svg"
            }, Md)
        }
    });
    const Bd = [e.h("path", {
        d: "M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "8",
        "stroke-dasharray": "10.691205342610678 10.691205342610678",
        "stroke-dashoffset": "0"
    }, [e.h("animate", {
        attributeName: "stroke-dashoffset",
        from: "0",
        to: "21.382410685221355",
        begin: "0",
        dur: "2s",
        repeatCount: "indefinite",
        fill: "freeze"
    })])];
    var zd = Me({
        name: "QSpinnerInfinity",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                width: o.value,
                height: o.value,
                viewBox: "0 0 100 100",
                preserveAspectRatio: "xMidYMid"
            }, Bd)
        }
    });
    const Od = [e.h("g", {
        "stroke-width": "4",
        "stroke-linecap": "round"
    }, [e.h("line", {
        y1: "17",
        y2: "29",
        transform: "translate(32,32) rotate(180)"
    }, [e.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: "1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",
        repeatCount: "indefinite"
    })]), e.h("line", {
        y1: "17",
        y2: "29",
        transform: "translate(32,32) rotate(210)"
    }, [e.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: "0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0",
        repeatCount: "indefinite"
    })]), e.h("line", {
        y1: "17",
        y2: "29",
        transform: "translate(32,32) rotate(240)"
    }, [e.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1",
        repeatCount: "indefinite"
    })]), e.h("line", {
        y1: "17",
        y2: "29",
        transform: "translate(32,32) rotate(270)"
    }, [e.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15",
        repeatCount: "indefinite"
    })]), e.h("line", {
        y1: "17",
        y2: "29",
        transform: "translate(32,32) rotate(300)"
    }, [e.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25",
        repeatCount: "indefinite"
    })]), e.h("line", {
        y1: "17",
        y2: "29",
        transform: "translate(32,32) rotate(330)"
    }, [e.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35",
        repeatCount: "indefinite"
    })]), e.h("line", {
        y1: "17",
        y2: "29",
        transform: "translate(32,32) rotate(0)"
    }, [e.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45",
        repeatCount: "indefinite"
    })]), e.h("line", {
        y1: "17",
        y2: "29",
        transform: "translate(32,32) rotate(30)"
    }, [e.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55",
        repeatCount: "indefinite"
    })]), e.h("line", {
        y1: "17",
        y2: "29",
        transform: "translate(32,32) rotate(60)"
    }, [e.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65",
        repeatCount: "indefinite"
    })]), e.h("line", {
        y1: "17",
        y2: "29",
        transform: "translate(32,32) rotate(90)"
    }, [e.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7",
        repeatCount: "indefinite"
    })]), e.h("line", {
        y1: "17",
        y2: "29",
        transform: "translate(32,32) rotate(120)"
    }, [e.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: ".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85",
        repeatCount: "indefinite"
    })]), e.h("line", {
        y1: "17",
        y2: "29",
        transform: "translate(32,32) rotate(150)"
    }, [e.h("animate", {
        attributeName: "stroke-opacity",
        dur: "750ms",
        values: "1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",
        repeatCount: "indefinite"
    })])])];
    var Vd = Me({
        name: "QSpinnerIos",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                width: o.value,
                height: o.value,
                stroke: "currentColor",
                fill: "currentColor",
                viewBox: "0 0 64 64"
            }, Od)
        }
    });
    const Ld = [e.h("circle", {
        cx: "50",
        cy: "50",
        r: "44",
        fill: "none",
        "stroke-width": "4",
        "stroke-opacity": ".5",
        stroke: "currentColor"
    }), e.h("circle", {
        cx: "8",
        cy: "54",
        r: "6",
        fill: "currentColor",
        "stroke-width": "3",
        stroke: "currentColor"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 50 48",
        to: "360 50 52",
        dur: "2s",
        repeatCount: "indefinite"
    })])];
    var Ed = Me({
        name: "QSpinnerOrbit",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                width: o.value,
                height: o.value,
                viewBox: "0 0 100 100",
                preserveAspectRatio: "xMidYMid",
                xmlns: "http://www.w3.org/2000/svg"
            }, Ld)
        }
    });
    const Ad = [e.h("g", {
        transform: "translate(1 1)",
        "stroke-width": "2",
        fill: "none",
        "fill-rule": "evenodd"
    }, [e.h("circle", {
        "stroke-opacity": ".5",
        cx: "18",
        cy: "18",
        r: "18"
    }), e.h("path", {
        d: "M36 18c0-9.94-8.06-18-18-18"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 18 18",
        to: "360 18 18",
        dur: "1s",
        repeatCount: "indefinite"
    })])])];
    var Pd = Me({
        name: "QSpinnerOval",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                stroke: "currentColor",
                width: o.value,
                height: o.value,
                viewBox: "0 0 38 38",
                xmlns: "http://www.w3.org/2000/svg"
            }, Ad)
        }
    });
    const Rd = [e.h("path", {
        d: "M0 50A50 50 0 0 1 50 0L50 50L0 50",
        fill: "currentColor",
        opacity: "0.5"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 50 50",
        to: "360 50 50",
        dur: "0.8s",
        repeatCount: "indefinite"
    })]), e.h("path", {
        d: "M50 0A50 50 0 0 1 100 50L50 50L50 0",
        fill: "currentColor",
        opacity: "0.5"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 50 50",
        to: "360 50 50",
        dur: "1.6s",
        repeatCount: "indefinite"
    })]), e.h("path", {
        d: "M100 50A50 50 0 0 1 50 100L50 50L100 50",
        fill: "currentColor",
        opacity: "0.5"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 50 50",
        to: "360 50 50",
        dur: "2.4s",
        repeatCount: "indefinite"
    })]), e.h("path", {
        d: "M50 100A50 50 0 0 1 0 50L50 50L50 100",
        fill: "currentColor",
        opacity: "0.5"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 50 50",
        to: "360 50 50",
        dur: "3.2s",
        repeatCount: "indefinite"
    })])];
    var Fd = Me({
        name: "QSpinnerPie",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                width: o.value,
                height: o.value,
                viewBox: "0 0 100 100",
                preserveAspectRatio: "xMidYMid",
                xmlns: "http://www.w3.org/2000/svg"
            }, Rd)
        }
    });
    const Id = [e.h("g", {
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-width": "2"
    }, [e.h("circle", {
        cx: "22",
        cy: "22",
        r: "1"
    }, [e.h("animate", {
        attributeName: "r",
        begin: "0s",
        dur: "1.8s",
        values: "1; 20",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.165, 0.84, 0.44, 1",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "stroke-opacity",
        begin: "0s",
        dur: "1.8s",
        values: "1; 0",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.3, 0.61, 0.355, 1",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "22",
        cy: "22",
        r: "1"
    }, [e.h("animate", {
        attributeName: "r",
        begin: "-0.9s",
        dur: "1.8s",
        values: "1; 20",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.165, 0.84, 0.44, 1",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "stroke-opacity",
        begin: "-0.9s",
        dur: "1.8s",
        values: "1; 0",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.3, 0.61, 0.355, 1",
        repeatCount: "indefinite"
    })])])];
    var Nd = Me({
        name: "QSpinnerPuff",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                stroke: "currentColor",
                width: o.value,
                height: o.value,
                viewBox: "0 0 44 44",
                xmlns: "http://www.w3.org/2000/svg"
            }, Id)
        }
    });
    const jd = [e.h("g", {
        transform: "scale(0.55)"
    }, [e.h("circle", {
        cx: "30",
        cy: "150",
        r: "30",
        fill: "currentColor"
    }, [e.h("animate", {
        attributeName: "opacity",
        from: "0",
        to: "1",
        dur: "1s",
        begin: "0",
        repeatCount: "indefinite",
        keyTimes: "0;0.5;1",
        values: "0;1;1"
    })]), e.h("path", {
        d: "M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z",
        fill: "currentColor"
    }, [e.h("animate", {
        attributeName: "opacity",
        from: "0",
        to: "1",
        dur: "1s",
        begin: "0.1",
        repeatCount: "indefinite",
        keyTimes: "0;0.5;1",
        values: "0;1;1"
    })]), e.h("path", {
        d: "M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z",
        fill: "currentColor"
    }, [e.h("animate", {
        attributeName: "opacity",
        from: "0",
        to: "1",
        dur: "1s",
        begin: "0.2",
        repeatCount: "indefinite",
        keyTimes: "0;0.5;1",
        values: "0;1;1"
    })])])];
    var Dd = Me({
        name: "QSpinnerRadio",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                width: o.value,
                height: o.value,
                viewBox: "0 0 100 100",
                preserveAspectRatio: "xMidYMid",
                xmlns: "http://www.w3.org/2000/svg"
            }, jd)
        }
    });
    const Hd = [e.h("g", {
        fill: "none",
        "fill-rule": "evenodd",
        transform: "translate(1 1)",
        "stroke-width": "2"
    }, [e.h("circle", {
        cx: "22",
        cy: "22",
        r: "6"
    }, [e.h("animate", {
        attributeName: "r",
        begin: "1.5s",
        dur: "3s",
        values: "6;22",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "stroke-opacity",
        begin: "1.5s",
        dur: "3s",
        values: "1;0",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "stroke-width",
        begin: "1.5s",
        dur: "3s",
        values: "2;0",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "22",
        cy: "22",
        r: "6"
    }, [e.h("animate", {
        attributeName: "r",
        begin: "3s",
        dur: "3s",
        values: "6;22",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "stroke-opacity",
        begin: "3s",
        dur: "3s",
        values: "1;0",
        calcMode: "linear",
        repeatCount: "indefinite"
    }), e.h("animate", {
        attributeName: "stroke-width",
        begin: "3s",
        dur: "3s",
        values: "2;0",
        calcMode: "linear",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        cx: "22",
        cy: "22",
        r: "8"
    }, [e.h("animate", {
        attributeName: "r",
        begin: "0s",
        dur: "1.5s",
        values: "6;1;2;3;4;5;6",
        calcMode: "linear",
        repeatCount: "indefinite"
    })])])];
    var Qd = Me({
        name: "QSpinnerRings",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                stroke: "currentColor",
                width: o.value,
                height: o.value,
                viewBox: "0 0 45 45",
                xmlns: "http://www.w3.org/2000/svg"
            }, Hd)
        }
    });
    const Ud = [e.h("defs", [e.h("linearGradient", {
        x1: "8.042%",
        y1: "0%",
        x2: "65.682%",
        y2: "23.865%",
        id: "a"
    }, [e.h("stop", {
        "stop-color": "currentColor",
        "stop-opacity": "0",
        offset: "0%"
    }), e.h("stop", {
        "stop-color": "currentColor",
        "stop-opacity": ".631",
        offset: "63.146%"
    }), e.h("stop", {
        "stop-color": "currentColor",
        offset: "100%"
    })])]), e.h("g", {
        transform: "translate(1 1)",
        fill: "none",
        "fill-rule": "evenodd"
    }, [e.h("path", {
        d: "M36 18c0-9.94-8.06-18-18-18",
        stroke: "url(#a)",
        "stroke-width": "2"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 18 18",
        to: "360 18 18",
        dur: "0.9s",
        repeatCount: "indefinite"
    })]), e.h("circle", {
        fill: "currentColor",
        cx: "36",
        cy: "18",
        r: "1"
    }, [e.h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 18 18",
        to: "360 18 18",
        dur: "0.9s",
        repeatCount: "indefinite"
    })])])];
    var Wd = Me({
        name: "QSpinnerTail",
        props: jt,
        setup(t) {
            const {cSize: o, classes: n} = Dt(t);
            return ()=>e.h("svg", {
                class: n.value,
                width: o.value,
                height: o.value,
                viewBox: "0 0 38 38",
                xmlns: "http://www.w3.org/2000/svg"
            }, Ud)
        }
    })
      , Yd = Me({
        name: "QSplitter",
        props: {
            ...yt,
            modelValue: {
                type: Number,
                required: !0
            },
            reverse: Boolean,
            unit: {
                type: String,
                default: "%",
                validator: e=>["%", "px"].includes(e)
            },
            limits: {
                type: Array,
                validator: e=>{
                    return 2 === e.length && ("number" === typeof e[0] && "number" === typeof e[1] && (e[0] >= 0 && e[0] <= e[1]))
                }
            },
            emitImmediately: Boolean,
            horizontal: Boolean,
            disable: Boolean,
            beforeClass: [Array, String, Object],
            afterClass: [Array, String, Object],
            separatorClass: [Array, String, Object],
            separatorStyle: [Array, String, Object]
        },
        emits: ["update:modelValue"],
        setup(t, {slots: o, emit: n}) {
            const {proxy: {$q: a}} = e.getCurrentInstance()
              , l = wt(t, a)
              , i = e.ref(null)
              , r = {
                before: e.ref(null),
                after: e.ref(null)
            }
              , s = e.computed(()=>"q-splitter no-wrap " + `${!0 === t.horizontal ? "q-splitter--horizontal column" : "q-splitter--vertical row"}` + ` q-splitter--${!0 === t.disable ? "disabled" : "workable"}` + (!0 === l.value ? " q-splitter--dark" : ""))
              , u = e.computed(()=>!0 === t.horizontal ? "height" : "width")
              , c = e.computed(()=>!0 !== t.reverse ? "before" : "after")
              , d = e.computed(()=>void 0 !== t.limits ? t.limits : "%" === t.unit ? [10, 90] : [50, 1 / 0]);
            function v(e) {
                return ("%" === t.unit ? e : Math.round(e)) + t.unit
            }
            const p = e.computed(()=>({
                [c.value]: {
                    [u.value]: v(t.modelValue)
                }
            }));
            let m, f, h, g, b;
            function y(e) {
                if (!0 === e.isFirst) {
                    const e = i.value.getBoundingClientRect()[u.value];
                    return m = !0 === t.horizontal ? "up" : "left",
                    f = "%" === t.unit ? 100 : e,
                    h = Math.min(f, d.value[1], Math.max(d.value[0], t.modelValue)),
                    g = (!0 !== t.reverse ? 1 : -1) * (!0 === t.horizontal ? 1 : !0 === a.lang.rtl ? -1 : 1) * ("%" === t.unit ? 0 === e ? 0 : 100 / e : 1),
                    void i.value.classList.add("q-splitter--active")
                }
                if (!0 === e.isFinal)
                    return b !== t.modelValue && n("update:modelValue", b),
                    void i.value.classList.remove("q-splitter--active");
                const o = h + g * (e.direction === m ? -1 : 1) * e.distance[!0 === t.horizontal ? "y" : "x"];
                b = Math.min(f, d.value[1], Math.max(d.value[0], o)),
                r[c.value].value.style[u.value] = v(b),
                !0 === t.emitImmediately && t.modelValue !== b && n("update:modelValue", b)
            }
            const w = e.computed(()=>{
                return [[Va, y, void 0, {
                    [!0 === t.horizontal ? "vertical" : "horizontal"]: !0,
                    prevent: !0,
                    stop: !0,
                    mouse: !0,
                    mouseAllDir: !0
                }]]
            }
            );
            function x(e, t) {
                e < t[0] ? n("update:modelValue", t[0]) : e > t[1] && n("update:modelValue", t[1])
            }
            return e.watch(()=>t.modelValue, e=>{
                x(e, d.value)
            }
            ),
            e.watch(()=>t.limits, ()=>{
                e.nextTick(()=>{
                    x(t.modelValue, d.value)
                }
                )
            }
            ),
            ()=>{
                const n = [e.h("div", {
                    ref: r.before,
                    class: ["q-splitter__panel q-splitter__before" + (!0 === t.reverse ? " col" : ""), t.beforeClass],
                    style: p.value.before
                }, Xe(o.before)), e.h("div", {
                    class: ["q-splitter__separator", t.separatorClass],
                    style: t.separatorStyle,
                    "aria-disabled": !0 === t.disable ? "true" : void 0
                }, [et("div", {
                    class: "q-splitter__separator-area absolute-full"
                }, Xe(o.separator), "sep", !0 !== t.disable, ()=>w.value)]), e.h("div", {
                    ref: r.after,
                    class: ["q-splitter__panel q-splitter__after" + (!0 === t.reverse ? "" : " col"), t.afterClass],
                    style: p.value.after
                }, Xe(o.after))];
                return e.h("div", {
                    class: s.value,
                    ref: i
                }, Ge(o.default, n))
            }
        }
    })
      , Kd = Me({
        name: "StepHeader",
        props: {
            stepper: {},
            step: {},
            goToPanel: Function
        },
        setup(t, {attrs: o}) {
            const {proxy: {$q: n}} = e.getCurrentInstance()
              , a = e.ref(null)
              , l = e.computed(()=>t.stepper.modelValue === t.step.name)
              , i = e.computed(()=>{
                const e = t.step.disable;
                return !0 === e || "" === e
            }
            )
              , r = e.computed(()=>{
                const e = t.step.error;
                return !0 === e || "" === e
            }
            )
              , s = e.computed(()=>{
                const e = t.step.done;
                return !1 === i.value && (!0 === e || "" === e)
            }
            )
              , u = e.computed(()=>{
                const e = t.step.headerNav
                  , o = !0 === e || "" === e || void 0 === e;
                return !1 === i.value && t.stepper.headerNav && o
            }
            )
              , c = e.computed(()=>{
                return t.step.prefix && (!1 === l.value || "none" === t.stepper.activeIcon) && (!1 === r.value || "none" === t.stepper.errorIcon) && (!1 === s.value || "none" === t.stepper.doneIcon)
            }
            )
              , d = e.computed(()=>{
                const e = t.step.icon || t.stepper.inactiveIcon;
                if (!0 === l.value) {
                    const o = t.step.activeIcon || t.stepper.activeIcon;
                    return "none" === o ? e : o || n.iconSet.stepper.active
                }
                if (!0 === r.value) {
                    const o = t.step.errorIcon || t.stepper.errorIcon;
                    return "none" === o ? e : o || n.iconSet.stepper.error
                }
                if (!1 === i.value && !0 === s.value) {
                    const o = t.step.doneIcon || t.stepper.doneIcon;
                    return "none" === o ? e : o || n.iconSet.stepper.done
                }
                return e
            }
            )
              , v = e.computed(()=>{
                const e = !0 === r.value ? t.step.errorColor || t.stepper.errorColor : void 0;
                if (!0 === l.value) {
                    const o = t.step.activeColor || t.stepper.activeColor || t.step.color;
                    return void 0 !== o ? o : e
                }
                return void 0 !== e ? e : !1 === i.value && !0 === s.value ? t.step.doneColor || t.stepper.doneColor || t.step.color || t.stepper.inactiveColor : t.step.color || t.stepper.inactiveColor
            }
            )
              , p = e.computed(()=>{
                return "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (void 0 !== v.value ? ` text-${v.value}` : "") + (!0 === r.value ? " q-stepper__tab--error q-stepper__tab--error-with-" + (!0 === c.value ? "prefix" : "icon") : "") + (!0 === l.value ? " q-stepper__tab--active" : "") + (!0 === s.value ? " q-stepper__tab--done" : "") + (!0 === u.value ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (!0 === i.value ? " q-stepper__tab--disabled" : "")
            }
            )
              , m = e.computed(()=>!0 === t.stepper.headerNav && u.value);
            function f() {
                null !== a.value && a.value.focus(),
                !1 === l.value && t.goToPanel(t.step.name)
            }
            function h(e) {
                13 === e.keyCode && !1 === l.value && t.goToPanel(t.step.name)
            }
            return ()=>{
                const n = {
                    class: p.value
                };
                !0 === u.value && (n.onClick = f,
                n.onKeyup = h,
                Object.assign(n, !0 === i.value ? {
                    tabindex: -1,
                    "aria-disabled": "true"
                } : {
                    tabindex: o.tabindex || 0
                }));
                const l = [e.h("div", {
                    class: "q-focus-helper",
                    tabindex: -1,
                    ref: a
                }), e.h("div", {
                    class: "q-stepper__dot row flex-center q-stepper__line relative-position"
                }, [e.h("span", {
                    class: "row flex-center"
                }, [!0 === c.value ? t.step.prefix : e.h(ft, {
                    name: d.value
                })])])];
                if (void 0 !== t.step.title && null !== t.step.title) {
                    const o = [e.h("div", {
                        class: "q-stepper__title"
                    }, t.step.title)];
                    void 0 !== t.step.caption && null !== t.step.caption && o.push(e.h("div", {
                        class: "q-stepper__caption"
                    }, t.step.caption)),
                    l.push(e.h("div", {
                        class: "q-stepper__label q-stepper__line relative-position"
                    }, o))
                }
                return e.withDirectives(e.h("div", n, l), [[ao, m.value]])
            }
        }
    });
    function Xd(t) {
        return e.h("div", {
            class: "q-stepper__step-content"
        }, [e.h("div", {
            class: "q-stepper__step-inner"
        }, Xe(t.default))])
    }
    const Zd = {
        setup(e, {slots: t}) {
            return ()=>Xd(t)
        }
    };
    var Gd = Me({
        name: "QStep",
        props: {
            ...ta,
            icon: String,
            color: String,
            title: {
                type: String,
                required: !0
            },
            caption: String,
            prefix: [String, Number],
            doneIcon: String,
            doneColor: String,
            activeIcon: String,
            activeColor: String,
            errorIcon: String,
            errorColor: String,
            headerNav: {
                type: Boolean,
                default: !0
            },
            done: Boolean,
            error: Boolean
        },
        setup(t, {attrs: o, slots: n}) {
            const {proxy: {$q: a}} = e.getCurrentInstance()
              , l = e.inject(le, ()=>{
                console.error("QStep needs to be child of QStepper")
            }
            )
              , {getCacheWithFn: i} = ea()
              , r = e.ref(null)
              , s = e.computed(()=>l.value.modelValue === t.name)
              , u = e.computed(()=>!0 !== a.platform.is.ios && !0 === a.platform.is.chrome || !0 !== s.value || !0 !== l.value.vertical ? {} : {
                onScroll(e) {
                    const {target: t} = e;
                    t.scrollTop > 0 && (t.scrollTop = 0),
                    void 0 !== o.onScroll && o.onScroll(e)
                }
            })
              , c = e.computed(()=>"string" === typeof t.name || "number" === typeof t.name ? t.name : String(t.name));
            function d() {
                const t = l.value.vertical;
                return !0 === t && !0 === l.value.keepAlive ? e.h(e.KeepAlive, l.value.keepAliveProps.value, !0 === s.value ? [e.h(!0 === l.value.needsUniqueKeepAliveWrapper.value ? i(c.value, ()=>({
                    ...Zd,
                    name: c.value
                })) : Zd, {
                    key: c.value
                }, n.default)] : void 0) : !0 !== t || !0 === s.value ? Xd(n) : void 0
            }
            return ()=>e.h("div", {
                ref: r,
                class: "q-stepper__step",
                ...u.value
            }, !0 === l.value.vertical ? [e.h(Kd, {
                stepper: l.value,
                step: t,
                goToPanel: l.value.goToPanel
            }), !0 === l.value.animated ? e.h(Ar, d) : d()] : [d()])
        }
    });
    const Jd = /(-\w)/g;
    function ev(e) {
        const t = {};
        for (const o in e) {
            const n = o.replace(Jd, e=>e[1].toUpperCase());
            t[n] = e[o]
        }
        return t
    }
    var tv = Me({
        name: "QStepper",
        props: {
            ...yt,
            ...na,
            flat: Boolean,
            bordered: Boolean,
            alternativeLabels: Boolean,
            headerNav: Boolean,
            contracted: Boolean,
            headerClass: String,
            inactiveColor: String,
            inactiveIcon: String,
            doneIcon: String,
            doneColor: String,
            activeIcon: String,
            activeColor: String,
            errorIcon: String,
            errorColor: String
        },
        emits: aa,
        setup(t, {slots: o}) {
            const n = e.getCurrentInstance()
              , a = wt(t, n.proxy.$q)
              , {updatePanelsList: l, isValidPanelName: i, updatePanelIndex: r, getPanelContent: s, getPanels: u, panelDirectives: c, goToPanel: d, keepAliveProps: v, needsUniqueKeepAliveWrapper: p} = la();
            e.provide(le, e.computed(()=>({
                goToPanel: d,
                keepAliveProps: v,
                needsUniqueKeepAliveWrapper: p,
                ...t
            })));
            const m = e.computed(()=>`q-stepper q-stepper--${!0 === t.vertical ? "vertical" : "horizontal"}` + (!0 === t.flat || !0 === a.value ? " q-stepper--flat no-shadow" : "") + (!0 === t.bordered || !0 === a.value && !1 === t.flat ? " q-stepper--bordered" : "") + (!0 === a.value ? " q-stepper--dark q-dark" : ""))
              , f = e.computed(()=>"q-stepper__header row items-stretch justify-between" + ` q-stepper__header--${!0 === t.alternativeLabels ? "alternative" : "standard"}-labels` + (!1 === t.flat || !0 === t.bordered ? " q-stepper__header--border" : "") + (!0 === t.contracted ? " q-stepper__header--contracted" : "") + (void 0 !== t.headerClass ? ` ${t.headerClass}` : ""));
            function h() {
                const n = Xe(o.message, []);
                if (!0 === t.vertical) {
                    i(t.modelValue) && r();
                    const a = e.h("div", {
                        class: "q-stepper__content"
                    }, Xe(o.default));
                    return void 0 === n ? [a] : n.concat(a)
                }
                return [e.h("div", {
                    class: f.value
                }, u().map(o=>{
                    const n = ev(o.props);
                    return e.h(Kd, {
                        key: n.name,
                        stepper: t,
                        step: n,
                        goToPanel: d
                    })
                }
                )), n, et("div", {
                    class: "q-stepper__content q-panel-parent"
                }, s(), "cont", t.swipeable, ()=>c.value)]
            }
            return ()=>{
                return l(o),
                e.h("div", {
                    class: m.value
                }, Ge(o.navigation, h()))
            }
        }
    })
      , ov = Me({
        name: "QStepperNavigation",
        setup(t, {slots: o}) {
            return ()=>e.h("div", {
                class: "q-stepper__nav"
            }, Xe(o.default))
        }
    })
      , nv = Me({
        name: "QTh",
        props: {
            props: Object,
            autoWidth: Boolean
        },
        emits: ["click"],
        setup(t, {slots: o, emit: n}) {
            const a = e.getCurrentInstance()
              , {proxy: {$q: l}} = a
              , i = e=>{
                n("click", e)
            }
            ;
            return ()=>{
                if (void 0 === t.props)
                    return e.h("th", {
                        class: !0 === t.autoWidth ? "q-table--col-auto-width" : "",
                        onClick: i
                    }, Xe(o.default));
                let n, r;
                const s = a.vnode.key;
                if (s) {
                    if (n = t.props.colsMap[s],
                    void 0 === n)
                        return
                } else
                    n = t.props.col;
                if (!0 === n.sortable) {
                    const t = "right" === n.align ? "unshift" : "push";
                    r = Ze(o.default, []),
                    r[t](e.h(ft, {
                        class: n.__iconClass,
                        name: l.iconSet.table.arrowUp
                    }))
                } else
                    r = Xe(o.default);
                const u = {
                    class: n.__thClass + (!0 === t.autoWidth ? " q-table--col-auto-width" : ""),
                    style: n.headerStyle,
                    onClick: e=>{
                        !0 === n.sortable && t.props.sort(n),
                        i(e)
                    }
                };
                return e.h("th", u, r)
            }
        }
    });
    function av(t, o) {
        return e.h("div", t, [e.h("table", {
            class: "q-table"
        }, o)])
    }
    const lv = {
        list: Uu,
        table: tc
    }
      , iv = ["list", "table", "__qtable"];
    var rv = Me({
        name: "QVirtualScroll",
        props: {
            ...Qc,
            type: {
                type: String,
                default: "list",
                validator: e=>iv.includes(e)
            },
            items: {
                type: Array,
                default: ()=>[]
            },
            itemsFn: Function,
            itemsSize: Number,
            scrollTarget: {
                default: void 0
            }
        },
        setup(t, {slots: o, attrs: n}) {
            let a;
            const l = e.ref(null)
              , i = e.computed(()=>t.itemsSize >= 0 && void 0 !== t.itemsFn ? parseInt(t.itemsSize, 10) : Array.isArray(t.items) ? t.items.length : 0)
              , {virtualScrollSliceRange: r, localResetVirtualScroll: s, padVirtualScroll: u, onVirtualScrollEvt: c} = Uc({
                virtualScrollLength: i,
                getVirtualScrollTarget: h,
                getVirtualScrollEl: m
            })
              , d = e.computed(()=>{
                if (0 === i.value)
                    return [];
                const e = (e,t)=>({
                    index: r.value.from + t,
                    item: e
                });
                return void 0 === t.itemsFn ? t.items.slice(r.value.from, r.value.to).map(e) : t.itemsFn(r.value.from, r.value.to - r.value.from).map(e)
            }
            )
              , v = e.computed(()=>"q-virtual-scroll q-virtual-scroll" + (!0 === t.virtualScrollHorizontal ? "--horizontal" : "--vertical") + (void 0 !== t.scrollTarget ? "" : " scroll"))
              , p = e.computed(()=>void 0 !== t.scrollTarget ? {} : {
                tabindex: 0
            });
            function m() {
                return l.value.$el || l.value
            }
            function h() {
                return a
            }
            function g() {
                a = Yo(m(), t.scrollTarget),
                a.addEventListener("scroll", c, f.passive)
            }
            function b() {
                void 0 !== a && (a.removeEventListener("scroll", c, f.passive),
                a = void 0)
            }
            function y() {
                let e = u("list" === t.type ? "div" : "tbody", d.value.map(o.default));
                return void 0 !== o.before && (e = o.before().concat(e)),
                Ge(o.after, e)
            }
            return e.watch(i, ()=>{
                s()
            }
            ),
            e.watch(()=>t.scrollTarget, ()=>{
                b(),
                g()
            }
            ),
            e.onBeforeMount(()=>{
                s()
            }
            ),
            e.onMounted(()=>{
                g()
            }
            ),
            e.onActivated(()=>{
                g()
            }
            ),
            e.onDeactivated(()=>{
                b()
            }
            ),
            e.onBeforeUnmount(()=>{
                b()
            }
            ),
            ()=>{
                if (void 0 !== o.default)
                    return "__qtable" === t.type ? av({
                        ref: l,
                        class: "q-table__middle " + v.value
                    }, y()) : e.h(lv[t.type], {
                        ...n,
                        ref: l,
                        class: [n.class, v.value],
                        ...p.value
                    }, y);
                console.error("QVirtualScroll: default scoped slot is required for rendering")
            }
        }
    });
    function sv(e, t) {
        return new Date(e) - new Date(t)
    }
    const uv = {
        sortMethod: Function,
        binaryStateSort: Boolean,
        columnSortOrder: {
            type: String,
            validator: e=>"ad" === e || "da" === e,
            default: "ad"
        }
    };
    function cv(t, o, n, a) {
        const l = e.computed(()=>{
            const {sortBy: e} = o.value;
            return e && n.value.find(t=>t.name === e) || null
        }
        )
          , i = e.computed(()=>void 0 !== t.sortMethod ? t.sortMethod : (e,t,o)=>{
            const a = n.value.find(e=>e.name === t);
            if (void 0 === a || void 0 === a.field)
                return e;
            const l = !0 === o ? -1 : 1
              , i = "function" === typeof a.field ? e=>a.field(e) : e=>e[a.field];
            return e.sort((e,t)=>{
                let o = i(e)
                  , n = i(t);
                return null === o || void 0 === o ? -1 * l : null === n || void 0 === n ? 1 * l : void 0 !== a.sort ? a.sort(o, n, e, t) * l : !0 === _e(o) && !0 === _e(n) ? (o - n) * l : !0 === we(o) && !0 === we(n) ? sv(o, n) * l : "boolean" === typeof o && "boolean" === typeof n ? (o - n) * l : ([o,n] = [o, n].map(e=>(e + "").toLocaleString().toLowerCase()),
                o < n ? -1 * l : o === n ? 0 : l)
            }
            )
        }
        );
        function r(e) {
            let l = t.columnSortOrder;
            if (!0 === ye(e))
                e.sortOrder && (l = e.sortOrder),
                e = e.name;
            else {
                const t = n.value.find(t=>t.name === e);
                void 0 !== t && t.sortOrder && (l = t.sortOrder)
            }
            let {sortBy: i, descending: r} = o.value;
            i !== e ? (i = e,
            r = "da" === l) : !0 === t.binaryStateSort ? r = !r : !0 === r ? "ad" === l ? i = null : r = !1 : "ad" === l ? r = !0 : i = null,
            a({
                sortBy: i,
                descending: r,
                page: 1
            })
        }
        return {
            columnToSort: l,
            computedSortMethod: i,
            sort: r
        }
    }
    const dv = {
        filter: [String, Object],
        filterMethod: Function
    };
    function vv(t, o) {
        const n = e.computed(()=>void 0 !== t.filterMethod ? t.filterMethod : (e,t,o,n)=>{
            const a = t ? t.toLowerCase() : "";
            return e.filter(e=>o.some(t=>{
                const o = n(t, e) + ""
                  , l = "undefined" === o || "null" === o ? "" : o.toLowerCase();
                return -1 !== l.indexOf(a)
            }
            ))
        }
        );
        return e.watch(()=>t.filter, ()=>{
            e.nextTick(()=>{
                o({
                    page: 1
                }, !0)
            }
            )
        }
        , {
            deep: !0
        }),
        {
            computedFilterMethod: n
        }
    }
    function pv(e, t) {
        for (const o in t)
            if (t[o] !== e[o])
                return !1;
        return !0
    }
    function mv(e) {
        return e.page < 1 && (e.page = 1),
        void 0 !== e.rowsPerPage && e.rowsPerPage < 1 && (e.rowsPerPage = 0),
        e
    }
    const fv = {
        pagination: Object,
        rowsPerPageOptions: {
            type: Array,
            default: ()=>[5, 7, 10, 15, 20, 25, 50, 0]
        },
        "onUpdate:pagination": [Function, Array]
    };
    function hv(t, o) {
        const {props: n, emit: a} = t
          , l = e.ref(Object.assign({
            sortBy: null,
            descending: !1,
            page: 1,
            rowsPerPage: n.rowsPerPageOptions.length > 0 ? n.rowsPerPageOptions[0] : 5
        }, n.pagination))
          , i = e.computed(()=>{
            const e = void 0 !== n["onUpdate:pagination"] ? {
                ...l.value,
                ...n.pagination
            } : l.value;
            return mv(e)
        }
        )
          , r = e.computed(()=>void 0 !== i.value.rowsNumber);
        function s(e) {
            u({
                pagination: e,
                filter: n.filter
            })
        }
        function u(t={}) {
            e.nextTick(()=>{
                a("request", {
                    pagination: t.pagination || i.value,
                    filter: t.filter || n.filter,
                    getCellValue: o
                })
            }
            )
        }
        function c(e, t) {
            const o = mv({
                ...i.value,
                ...e
            });
            !0 !== pv(i.value, o) ? !0 !== r.value ? void 0 !== n.pagination && void 0 !== n["onUpdate:pagination"] ? a("update:pagination", o) : l.value = o : s(o) : !0 === r.value && !0 === t && s(o)
        }
        return {
            innerPagination: l,
            computedPagination: i,
            isServerSide: r,
            requestServerInteraction: u,
            setPagination: c
        }
    }
    function gv(t, o, n, a, l, i) {
        const {props: r, emit: s, proxy: {$q: u}} = t
          , c = e.computed(()=>!0 === a.value ? n.value.rowsNumber || 0 : i.value)
          , d = e.computed(()=>{
            const {page: e, rowsPerPage: t} = n.value;
            return (e - 1) * t
        }
        )
          , v = e.computed(()=>{
            const {page: e, rowsPerPage: t} = n.value;
            return e * t
        }
        )
          , p = e.computed(()=>1 === n.value.page)
          , m = e.computed(()=>0 === n.value.rowsPerPage ? 1 : Math.max(1, Math.ceil(c.value / n.value.rowsPerPage)))
          , f = e.computed(()=>0 === v.value || n.value.page >= m.value)
          , h = e.computed(()=>{
            const e = r.rowsPerPageOptions.includes(o.value.rowsPerPage) ? r.rowsPerPageOptions : [o.value.rowsPerPage].concat(r.rowsPerPageOptions);
            return e.map(e=>({
                label: 0 === e ? u.lang.table.allRows : "" + e,
                value: e
            }))
        }
        );
        function g() {
            l({
                page: 1
            })
        }
        function b() {
            const {page: e} = n.value;
            e > 1 && l({
                page: e - 1
            })
        }
        function y() {
            const {page: e, rowsPerPage: t} = n.value;
            v.value > 0 && e * t < c.value && l({
                page: e + 1
            })
        }
        function w() {
            l({
                page: m.value
            })
        }
        return e.watch(m, (e,t)=>{
            if (e === t)
                return;
            const o = n.value.page;
            e && !o ? l({
                page: 1
            }) : e < o && l({
                page: e
            })
        }
        ),
        void 0 !== r["onUpdate:pagination"] && s("update:pagination", {
            ...n.value
        }),
        {
            firstRowIndex: d,
            lastRowIndex: v,
            isFirstPage: p,
            isLastPage: f,
            pagesNumber: m,
            computedRowsPerPageOptions: h,
            computedRowsNumber: c,
            firstPage: g,
            prevPage: b,
            nextPage: y,
            lastPage: w
        }
    }
    const bv = {
        selection: {
            type: String,
            default: "none",
            validator: e=>["single", "multiple", "none"].includes(e)
        },
        selected: {
            type: Array,
            default: ()=>[]
        }
    }
      , yv = ["update:selected", "selection"];
    function wv(t, o, n, a) {
        const l = e.computed(()=>{
            const e = {};
            return t.selected.map(a.value).forEach(t=>{
                e[t] = !0
            }
            ),
            e
        }
        )
          , i = e.computed(()=>{
            return "none" !== t.selection
        }
        )
          , r = e.computed(()=>{
            return "single" === t.selection
        }
        )
          , s = e.computed(()=>{
            return "multiple" === t.selection
        }
        )
          , u = e.computed(()=>n.value.length > 0 && n.value.every(e=>!0 === l.value[a.value(e)]))
          , c = e.computed(()=>!0 !== u.value && n.value.some(e=>!0 === l.value[a.value(e)]))
          , d = e.computed(()=>t.selected.length);
        function v(e) {
            return !0 === l.value[e]
        }
        function p() {
            o("update:selected", [])
        }
        function m(e, n, l, i) {
            o("selection", {
                rows: n,
                added: l,
                keys: e,
                evt: i
            });
            const s = !0 === r.value ? !0 === l ? n : [] : !0 === l ? t.selected.concat(n) : t.selected.filter(t=>!1 === e.includes(a.value(t)));
            o("update:selected", s)
        }
        return {
            hasSelectionMode: i,
            singleSelection: r,
            multipleSelection: s,
            allRowsSelected: u,
            someRowsSelected: c,
            rowsSelectedNumber: d,
            isRowSelected: v,
            clearSelection: p,
            updateSelection: m
        }
    }
    function xv(e) {
        return Array.isArray(e) ? e.slice() : []
    }
    const _v = {
        expanded: Array
    }
      , Sv = ["update:expanded"];
    function kv(t, o) {
        const n = e.ref(xv(t.expanded));
        function a(e) {
            return n.value.includes(e)
        }
        function l(e) {
            void 0 !== t.expanded ? o("update:expanded", e) : n.value = e
        }
        function i(e, t) {
            const o = n.value.slice()
              , a = o.indexOf(e);
            !0 === t ? -1 === a && (o.push(e),
            l(o)) : -1 !== a && (o.splice(a, 1),
            l(o))
        }
        return e.watch(()=>t.expanded, e=>{
            n.value = xv(e)
        }
        ),
        {
            isRowExpanded: a,
            setExpanded: l,
            updateExpanded: i
        }
    }
    const Cv = {
        visibleColumns: Array
    };
    function qv(t, o, n) {
        const a = e.computed(()=>{
            if (void 0 !== t.columns)
                return t.columns;
            const e = t.rows[0];
            return void 0 !== e ? Object.keys(e).map(t=>({
                name: t,
                label: t.toUpperCase(),
                field: t,
                align: _e(e[t]) ? "right" : "left",
                sortable: !0
            })) : []
        }
        )
          , l = e.computed(()=>{
            const {sortBy: e, descending: n} = o.value
              , l = void 0 !== t.visibleColumns ? a.value.filter(e=>!0 === e.required || !0 === t.visibleColumns.includes(e.name)) : a.value;
            return l.map(t=>{
                const o = t.align || "right"
                  , a = `text-${o}`;
                return {
                    ...t,
                    align: o,
                    __iconClass: `q-table__sort-icon q-table__sort-icon--${o}`,
                    __thClass: a + (void 0 !== t.headerClasses ? " " + t.headerClasses : "") + (!0 === t.sortable ? " sortable" : "") + (t.name === e ? ` sorted ${!0 === n ? "sort-desc" : ""}` : ""),
                    __tdStyle: void 0 !== t.style ? "function" !== typeof t.style ? ()=>t.style : t.style : ()=>null,
                    __tdClass: void 0 !== t.classes ? "function" !== typeof t.classes ? ()=>a + " " + t.classes : e=>a + " " + t.classes(e) : ()=>a
                }
            }
            )
        }
        )
          , i = e.computed(()=>{
            const e = {};
            return l.value.forEach(t=>{
                e[t.name] = t
            }
            ),
            e
        }
        )
          , r = e.computed(()=>{
            return void 0 !== t.tableColspan ? t.tableColspan : l.value.length + (!0 === n.value ? 1 : 0)
        }
        );
        return {
            colList: a,
            computedCols: l,
            computedColsMap: i,
            computedColspan: r
        }
    }
    const $v = "q-table__bottom row items-center"
      , Mv = {};
    Hc.forEach(e=>{
        Mv[e] = {}
    }
    );
    var Tv = Me({
        name: "QTable",
        props: {
            rows: {
                type: Array,
                default: ()=>[]
            },
            rowKey: {
                type: [String, Function],
                default: "id"
            },
            columns: Array,
            loading: Boolean,
            iconFirstPage: String,
            iconPrevPage: String,
            iconNextPage: String,
            iconLastPage: String,
            title: String,
            hideHeader: Boolean,
            grid: Boolean,
            gridHeader: Boolean,
            dense: Boolean,
            flat: Boolean,
            bordered: Boolean,
            square: Boolean,
            separator: {
                type: String,
                default: "horizontal",
                validator: e=>["horizontal", "vertical", "cell", "none"].includes(e)
            },
            wrapCells: Boolean,
            virtualScroll: Boolean,
            virtualScrollTarget: {
                default: void 0
            },
            ...Mv,
            noDataLabel: String,
            noResultsLabel: String,
            loadingLabel: String,
            selectedRowsLabel: Function,
            rowsPerPageLabel: String,
            paginationLabel: Function,
            color: {
                type: String,
                default: "grey-8"
            },
            titleClass: [String, Array, Object],
            tableStyle: [String, Array, Object],
            tableClass: [String, Array, Object],
            tableHeaderStyle: [String, Array, Object],
            tableHeaderClass: [String, Array, Object],
            cardContainerClass: [String, Array, Object],
            cardContainerStyle: [String, Array, Object],
            cardStyle: [String, Array, Object],
            cardClass: [String, Array, Object],
            hideBottom: Boolean,
            hideSelectedBanner: Boolean,
            hideNoData: Boolean,
            hidePagination: Boolean,
            onRowClick: Function,
            onRowDblclick: Function,
            onRowContextmenu: Function,
            ...yt,
            ...ra,
            ...Cv,
            ...dv,
            ...fv,
            ..._v,
            ...bv,
            ...uv
        },
        emits: ["request", "virtual-scroll", ...sa, ...Sv, ...yv],
        setup(n, {slots: a, emit: l}) {
            const i = e.getCurrentInstance()
              , {proxy: {$q: r}} = i
              , s = wt(n, r)
              , {inFullscreen: u, toggleFullscreen: c} = ua()
              , d = e.computed(()=>"function" === typeof n.rowKey ? n.rowKey : e=>e[n.rowKey])
              , v = e.ref(null)
              , p = e.ref(null)
              , m = e.computed(()=>!0 !== n.grid && !0 === n.virtualScroll)
              , f = e.computed(()=>" q-table__card" + (!0 === s.value ? " q-table__card--dark q-dark" : "") + (!0 === n.square ? " q-table--square" : "") + (!0 === n.flat ? " q-table--flat" : "") + (!0 === n.bordered ? " q-table--bordered" : ""))
              , h = e.computed(()=>`q-table__container q-table--${n.separator}-separator column no-wrap` + (!0 === n.grid ? " q-table--grid" : f.value) + (!0 === s.value ? " q-table--dark" : "") + (!0 === n.dense ? " q-table--dense" : "") + (!1 === n.wrapCells ? " q-table--no-wrap" : "") + (!0 === u.value ? " fullscreen scroll" : ""))
              , g = e.computed(()=>h.value + (!0 === n.loading ? " q-table--loading" : ""));
            e.watch(()=>n.tableStyle + n.tableClass + n.tableHeaderStyle + n.tableHeaderClass + h.value, ()=>{
                !0 === m.value && null !== p.value && p.value.reset()
            }
            );
            const {innerPagination: b, computedPagination: y, isServerSide: w, requestServerInteraction: x, setPagination: _} = hv(i, he)
              , {computedFilterMethod: S} = vv(n, _)
              , {isRowExpanded: k, setExpanded: C, updateExpanded: q} = kv(n, l)
              , $ = e.computed(()=>{
                let e = n.rows;
                if (!0 === w.value || 0 === e.length)
                    return e;
                const {sortBy: t, descending: o} = y.value;
                return n.filter && (e = S.value(e, n.filter, I.value, he)),
                null !== D.value && (e = H.value(n.rows === e ? e.slice() : e, t, o)),
                e
            }
            )
              , M = e.computed(()=>$.value.length)
              , T = e.computed(()=>{
                let e = $.value;
                if (!0 === w.value)
                    return e;
                const {rowsPerPage: t} = y.value;
                return 0 !== t && (0 === U.value && n.rows !== e ? e.length > W.value && (e = e.slice(0, W.value)) : e = e.slice(U.value, W.value)),
                e
            }
            )
              , {hasSelectionMode: B, singleSelection: z, multipleSelection: O, allRowsSelected: V, someRowsSelected: L, rowsSelectedNumber: E, isRowSelected: A, clearSelection: P, updateSelection: R} = wv(n, l, T, d)
              , {colList: F, computedCols: I, computedColsMap: N, computedColspan: j} = qv(n, y, B)
              , {columnToSort: D, computedSortMethod: H, sort: Q} = cv(n, y, F, _)
              , {firstRowIndex: U, lastRowIndex: W, isFirstPage: Y, isLastPage: K, pagesNumber: X, computedRowsPerPageOptions: Z, computedRowsNumber: G, firstPage: J, prevPage: ee, nextPage: te, lastPage: oe} = gv(i, b, y, w, _, M)
              , ne = e.computed(()=>0 === T.value.length)
              , ae = e.computed(()=>{
                const e = {};
                return Hc.forEach(t=>{
                    e[t] = n[t]
                }
                ),
                void 0 === e.virtualScrollItemSize && (e.virtualScrollItemSize = !0 === n.dense ? 28 : 48),
                e
            }
            );
            function le() {
                !0 === m.value && p.value.reset()
            }
            function ie() {
                if (!0 === n.grid)
                    return Te();
                const t = !0 !== n.hideHeader ? we : null;
                if (!0 === m.value) {
                    const o = a["top-row"]
                      , l = a["bottom-row"]
                      , i = {
                        default: e=>ce(e.item, a.body, e.index)
                    };
                    if (void 0 !== o) {
                        const n = e.h("tbody", o({
                            cols: I.value
                        }));
                        i.before = null === t ? ()=>n : ()=>[t()].concat(n)
                    } else
                        null !== t && (i.before = t);
                    return void 0 !== l && (i.after = (()=>e.h("tbody", l({
                        cols: I.value
                    })))),
                    e.h(rv, {
                        ref: p,
                        class: n.tableClass,
                        style: n.tableStyle,
                        ...ae.value,
                        scrollTarget: n.virtualScrollTarget,
                        items: T.value,
                        type: "__qtable",
                        tableColspan: j.value,
                        onVirtualScroll: se
                    }, i)
                }
                const o = [de()];
                return null !== t && o.unshift(t()),
                av({
                    class: ["q-table__middle scroll", n.tableClass],
                    style: n.tableStyle
                }, o)
            }
            function re(e, t) {
                if (null !== p.value)
                    return void p.value.scrollTo(e, t);
                e = parseInt(e, 10);
                const o = v.value.querySelector(`tbody tr:nth-of-type(${e + 1})`);
                if (null !== o) {
                    const t = v.value.querySelector(".q-table__middle.scroll")
                      , {offsetTop: n} = o
                      , a = n < t.scrollTop ? "decrease" : "increase";
                    t.scrollTop = n,
                    l("virtual-scroll", {
                        index: e,
                        from: 0,
                        to: b.value.rowsPerPage - 1,
                        direction: a
                    })
                }
            }
            function se(e) {
                l("virtual-scroll", e)
            }
            function ue() {
                return [e.h(_c, {
                    class: "q-table__linear-progress",
                    color: n.color,
                    dark: s.value,
                    indeterminate: !0,
                    trackColor: "transparent"
                })]
            }
            function ce(t, o, i) {
                const r = d.value(t)
                  , u = A(r);
                if (void 0 !== o)
                    return o(ve({
                        key: r,
                        row: t,
                        pageIndex: i,
                        __trClass: u ? "selected" : ""
                    }));
                const c = a["body-cell"]
                  , v = I.value.map(o=>{
                    const n = a[`body-cell-${o.name}`]
                      , l = void 0 !== n ? n : c;
                    return void 0 !== l ? l(pe({
                        key: r,
                        row: t,
                        pageIndex: i,
                        col: o
                    })) : e.h("td", {
                        class: o.__tdClass(t),
                        style: o.__tdStyle(t)
                    }, he(o, t))
                }
                );
                if (!0 === B.value) {
                    const o = a["body-selection"]
                      , l = void 0 !== o ? o(me({
                        key: r,
                        row: t,
                        pageIndex: i
                    })) : [e.h(_a, {
                        modelValue: u,
                        color: n.color,
                        dark: s.value,
                        dense: n.dense,
                        "onUpdate:modelValue": (e,o)=>{
                            R([r], [t], e, o)
                        }
                    })];
                    v.unshift(e.h("td", {
                        class: "q-table--col-auto-width"
                    }, l))
                }
                const p = {
                    key: r,
                    class: {
                        selected: u
                    }
                };
                return void 0 !== n.onRowClick && (p.class["cursor-pointer"] = !0,
                p.onClick = (e=>{
                    l("RowClick", e, t, i)
                }
                )),
                void 0 !== n.onRowDblclick && (p.class["cursor-pointer"] = !0,
                p.onDblclick = (e=>{
                    l("RowDblclick", e, t, i)
                }
                )),
                void 0 !== n.onRowContextmenu && (p.class["cursor-pointer"] = !0,
                p.onContextmenu = (e=>{
                    l("RowContextmenu", e, t, i)
                }
                )),
                e.h("tr", p, v)
            }
            function de() {
                const t = a.body
                  , o = a["top-row"]
                  , n = a["bottom-row"];
                let l = T.value.map((e,o)=>ce(e, t, o));
                return void 0 !== o && (l = o({
                    cols: I.value
                }).concat(l)),
                void 0 !== n && (l = l.concat(n({
                    cols: I.value
                }))),
                e.h("tbody", l)
            }
            function ve(e) {
                return fe(e),
                e.cols = e.cols.map(o=>{
                    const n = {
                        ...o
                    };
                    return t(n, "value", ()=>he(o, e.row)),
                    n
                }
                ),
                e
            }
            function pe(e) {
                return fe(e),
                t(e, "value", ()=>he(e.col, e.row)),
                e
            }
            function me(e) {
                return fe(e),
                e
            }
            function fe(e) {
                Object.assign(e, {
                    cols: I.value,
                    colsMap: N.value,
                    sort: Q,
                    rowIndex: U.value + e.pageIndex,
                    color: n.color,
                    dark: s.value,
                    dense: n.dense
                }),
                !0 === B.value && t(e, "selected", ()=>A(e.key), (t,o)=>{
                    R([e.key], [e.row], t, o)
                }
                ),
                t(e, "expand", ()=>k(e.key), t=>{
                    q(e.key, t)
                }
                )
            }
            function he(e, t) {
                const o = "function" === typeof e.field ? e.field(t) : t[e.field];
                return void 0 !== e.format ? e.format(o, t) : o
            }
            const ge = e.computed(()=>({
                pagination: y.value,
                pagesNumber: X.value,
                isFirstPage: Y.value,
                isLastPage: K.value,
                firstPage: J,
                prevPage: ee,
                nextPage: te,
                lastPage: oe,
                inFullscreen: u.value,
                toggleFullscreen: c
            }));
            function be() {
                const t = a.top
                  , o = a["top-left"]
                  , l = a["top-right"]
                  , i = a["top-selection"]
                  , r = !0 === B.value && void 0 !== i && E.value > 0
                  , s = "q-table__top relative-position row items-center";
                if (void 0 !== t)
                    return e.h("div", {
                        class: s
                    }, [t(ge.value)]);
                let u;
                return !0 === r ? u = i(ge.value).slice() : (u = [],
                void 0 !== o ? u.push(e.h("div", {
                    class: "q-table-control"
                }, [o(ge.value)])) : n.title && u.push(e.h("div", {
                    class: "q-table__control"
                }, [e.h("div", {
                    class: ["q-table__title", n.titleClass]
                }, n.title)]))),
                void 0 !== l && (u.push(e.h("div", {
                    class: "q-table__separator col"
                })),
                u.push(e.h("div", {
                    class: "q-table__control"
                }, [l(ge.value)]))),
                0 !== u.length ? e.h("div", {
                    class: s
                }, u) : void 0
            }
            const ye = e.computed(()=>!0 === L.value ? null : V.value);
            function we() {
                const t = xe();
                return !0 === n.loading && void 0 === a.loading && t.push(e.h("tr", {
                    class: "q-table__progress"
                }, [e.h("th", {
                    class: "relative-position",
                    colspan: j.value
                }, ue())])),
                e.h("thead", t)
            }
            function xe() {
                const t = a.header
                  , o = a["header-cell"];
                if (void 0 !== t)
                    return t(_e({
                        header: !0
                    })).slice();
                const l = I.value.map(t=>{
                    const n = a[`header-cell-${t.name}`]
                      , l = void 0 !== n ? n : o
                      , i = _e({
                        col: t
                    });
                    return void 0 !== l ? l(i) : e.h(nv, {
                        key: t.name,
                        props: i
                    }, ()=>t.label)
                }
                );
                if (!0 === z.value && !0 !== n.grid)
                    l.unshift(e.h("th", {
                        class: "q-table--col-auto-width"
                    }, " "));
                else if (!0 === O.value) {
                    const t = a["header-selection"]
                      , o = void 0 !== t ? t(_e({})) : [e.h(_a, {
                        color: n.color,
                        modelValue: ye.value,
                        dark: s.value,
                        dense: n.dense,
                        "onUpdate:modelValue": Se
                    })];
                    l.unshift(e.h("th", {
                        class: "q-table--col-auto-width"
                    }, o))
                }
                return [e.h("tr", {
                    class: n.tableHeaderClass,
                    style: n.tableHeaderStyle
                }, l)]
            }
            function _e(e) {
                return Object.assign(e, {
                    cols: I.value,
                    sort: Q,
                    colsMap: N.value,
                    color: n.color,
                    dark: s.value,
                    dense: n.dense
                }),
                !0 === O.value && t(e, "selected", ()=>ye.value, Se),
                e
            }
            function Se(e) {
                !0 === L.value && (e = !1),
                R(T.value.map(d.value), T.value, e)
            }
            const ke = e.computed(()=>{
                const e = [n.iconFirstPage || r.iconSet.table.firstPage, n.iconPrevPage || r.iconSet.table.prevPage, n.iconNextPage || r.iconSet.table.nextPage, n.iconLastPage || r.iconSet.table.lastPage];
                return !0 === r.lang.rtl ? e.reverse() : e
            }
            );
            function Ce() {
                if (!0 === n.hideBottom)
                    return;
                if (!0 === ne.value) {
                    if (!0 === n.hideNoData)
                        return;
                    const t = !0 === n.loading ? n.loadingLabel || r.lang.table.loading : n.filter ? n.noResultsLabel || r.lang.table.noResults : n.noDataLabel || r.lang.table.noData
                      , o = a["no-data"]
                      , l = void 0 !== o ? [o({
                        message: t,
                        icon: r.iconSet.table.warning,
                        filter: n.filter
                    })] : [e.h(ft, {
                        class: "q-table__bottom-nodata-icon",
                        name: r.iconSet.table.warning
                    }), t];
                    return e.h("div", {
                        class: $v + " q-table__bottom--nodata"
                    }, l)
                }
                const t = a.bottom;
                if (void 0 !== t)
                    return e.h("div", {
                        class: $v
                    }, [t(ge.value)]);
                const o = !0 !== n.hideSelectedBanner && !0 === B.value && E.value > 0 ? [e.h("div", {
                    class: "q-table__control"
                }, [e.h("div", [(n.selectedRowsLabel || r.lang.table.selectedRecords)(E.value)])])] : [];
                return !0 !== n.hidePagination ? e.h("div", {
                    class: $v + " justify-end"
                }, $e(o)) : o.length > 0 ? e.h("div", {
                    class: $v
                }, o) : void 0
            }
            function qe(e) {
                _({
                    page: 1,
                    rowsPerPage: e.value
                })
            }
            function $e(t) {
                let o;
                const {rowsPerPage: l} = y.value
                  , i = n.paginationLabel || r.lang.table.pagination
                  , u = a.pagination
                  , c = n.rowsPerPageOptions.length > 1;
                if (t.push(e.h("div", {
                    class: "q-table__separator col"
                })),
                !0 === c && t.push(e.h("div", {
                    class: "q-table__control"
                }, [e.h("span", {
                    class: "q-table__bottom-item"
                }, [n.rowsPerPageLabel || r.lang.table.recordsPerPage]), e.h(Xc, {
                    class: "q-table__select inline q-table__bottom-item",
                    color: n.color,
                    modelValue: l,
                    options: Z.value,
                    displayValue: 0 === l ? r.lang.table.allRows : l,
                    dark: s.value,
                    borderless: !0,
                    dense: !0,
                    optionsDense: !0,
                    optionsCover: !0,
                    "onUpdate:modelValue": qe
                })])),
                void 0 !== u)
                    o = u(ge.value);
                else if (o = [e.h("span", 0 !== l ? {
                    class: "q-table__bottom-item"
                } : {}, [l ? i(U.value + 1, Math.min(W.value, G.value), G.value) : i(1, M.value, G.value)])],
                0 !== l && X.value > 1) {
                    const t = {
                        color: n.color,
                        round: !0,
                        dense: !0,
                        flat: !0
                    };
                    !0 === n.dense && (t.size = "sm"),
                    X.value > 2 && o.push(e.h(ho, {
                        key: "pgFirst",
                        ...t,
                        icon: ke.value[0],
                        disable: Y.value,
                        onClick: J
                    })),
                    o.push(e.h(ho, {
                        key: "pgPrev",
                        ...t,
                        icon: ke.value[1],
                        disable: Y.value,
                        onClick: ee
                    }), e.h(ho, {
                        key: "pgNext",
                        ...t,
                        icon: ke.value[2],
                        disable: K.value,
                        onClick: te
                    })),
                    X.value > 2 && o.push(e.h(ho, {
                        key: "pgLast",
                        ...t,
                        icon: ke.value[3],
                        disable: K.value,
                        onClick: oe
                    }))
                }
                return t.push(e.h("div", {
                    class: "q-table__control"
                }, o)),
                t
            }
            function Me() {
                const t = !0 === n.gridHeader ? [e.h("table", {
                    class: "q-table"
                }, [we()])] : !0 === n.loading && void 0 === a.loading ? ue() : void 0;
                return e.h("div", {
                    class: "q-table__middle"
                }, t)
            }
            function Te() {
                const t = void 0 !== a.item ? a.item : t=>{
                    const o = t.cols.map(t=>e.h("div", {
                        class: "q-table__grid-item-row"
                    }, [e.h("div", {
                        class: "q-table__grid-item-title"
                    }, [t.label]), e.h("div", {
                        class: "q-table__grid-item-value"
                    }, [t.value])]));
                    if (!0 === B.value) {
                        const l = a["body-selection"]
                          , i = void 0 !== l ? l(t) : [e.h(_a, {
                            modelValue: t.selected,
                            color: n.color,
                            dark: s.value,
                            dense: n.dense,
                            "onUpdate:modelValue": (e,o)=>{
                                R([t.key], [t.row], e, o)
                            }
                        })];
                        o.unshift(e.h("div", {
                            class: "q-table__grid-item-row"
                        }, i), e.h(Fr, {
                            dark: s.value
                        }))
                    }
                    const i = {
                        class: ["q-table__grid-item-card" + f.value, n.cardClass],
                        style: n.cardStyle
                    };
                    return void 0 === n.onRowClick && void 0 === n.onRowDblclick || (i.class[0] += " cursor-pointer",
                    void 0 !== n.onRowClick && (i.onClick = (e=>{
                        l("RowClick", e, t.row, t.pageIndex)
                    }
                    )),
                    void 0 !== n.onRowDblclick && (i.onDblclick = (e=>{
                        l("RowDblclick", e, t.row, t.pageIndex)
                    }
                    ))),
                    e.h("div", {
                        class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (!0 === t.selected ? " q-table__grid-item--selected" : "")
                    }, [e.h("div", i, o)])
                }
                ;
                return e.h("div", {
                    class: ["q-table__grid-content row", n.cardContainerClass],
                    style: n.cardContainerStyle
                }, T.value.map((e,o)=>{
                    return t(ve({
                        key: d.value(e),
                        row: e,
                        pageIndex: o
                    }))
                }
                ))
            }
            return Object.assign(i.proxy, {
                requestServerInteraction: x,
                setPagination: _,
                firstPage: J,
                prevPage: ee,
                nextPage: te,
                lastPage: oe,
                isRowSelected: A,
                clearSelection: P,
                isRowExpanded: k,
                setExpanded: C,
                sort: Q,
                resetVirtualScroll: le,
                scrollTo: re,
                getCellValue: he
            }),
            o(i.proxy, {
                filteredSortedRows: ()=>$.value,
                computedRows: ()=>T.value,
                computedRowsNumber: ()=>G.value
            }),
            ()=>{
                const t = [be()]
                  , o = {
                    ref: v,
                    class: g.value
                };
                return !0 === n.grid ? t.push(Me()) : Object.assign(o, {
                    class: [o.class, n.cardClass],
                    style: n.cardStyle
                }),
                t.push(ie(), Ce()),
                !0 === n.loading && void 0 !== a.loading && t.push(a.loading()),
                e.h("div", o, t)
            }
        }
    })
      , Bv = Me({
        name: "QTr",
        props: {
            props: Object,
            noHover: Boolean
        },
        setup(t, {slots: o}) {
            const n = e.computed(()=>"q-tr" + (void 0 === t.props || !0 === t.props.header ? "" : " " + t.props.__trClass) + (!0 === t.noHover ? " q-tr--no-hover" : ""));
            return ()=>e.h("tr", {
                class: n.value
            }, Xe(o.default))
        }
    })
      , zv = Me({
        name: "QTd",
        props: {
            props: Object,
            autoWidth: Boolean,
            noHover: Boolean
        },
        setup(t, {slots: o}) {
            const n = e.getCurrentInstance()
              , a = e.computed(()=>"q-td" + (!0 === t.autoWidth ? " q-table--col-auto-width" : "") + (!0 === t.noHover ? " q-td--no-hover" : "") + " ");
            return ()=>{
                if (void 0 === t.props)
                    return e.h("td", {
                        class: a.value
                    }, Xe(o.default));
                const l = n.vnode.key
                  , i = (void 0 !== t.props.colsMap ? t.props.colsMap[l] : null) || t.props.col;
                if (void 0 === i)
                    return;
                const {row: r} = t.props;
                return e.h("td", {
                    class: a.value + i.__tdClass(r),
                    style: i.__tdStyle(r)
                }, Xe(o.default))
            }
        }
    })
      , Ov = Me({
        name: "QRouteTab",
        props: {
            ...Ft,
            ...el
        },
        emits: Ja,
        setup(t, {slots: o, emit: n}) {
            const a = It()
              , {renderTab: l, $tabs: i} = tl(t, o, n, {
                exact: e.computed(()=>t.exact),
                ...a
            });
            return e.watch(()=>t.name + t.exact + (a.linkRoute.value || {}).href, ()=>{
                i.verifyRouteModel()
            }
            ),
            ()=>l(a.linkTag.value, a.linkProps.value)
        }
    });
    function Vv(e, t) {
        if (null !== e.hour) {
            if (null === e.minute)
                return "minute";
            if (!0 === t && null === e.second)
                return "second"
        }
        return "hour"
    }
    function Lv() {
        const e = new Date;
        return {
            hour: e.getHours(),
            minute: e.getMinutes(),
            second: e.getSeconds(),
            millisecond: e.getMilliseconds()
        }
    }
    var Ev = Me({
        name: "QTime",
        props: {
            ...yt,
            ...In,
            ...Hl,
            mask: {
                default: null
            },
            format24h: {
                type: Boolean,
                default: null
            },
            defaultDate: {
                type: String,
                validator: e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e)
            },
            options: Function,
            hourOptions: Array,
            minuteOptions: Array,
            secondOptions: Array,
            withSeconds: Boolean,
            nowBtn: Boolean
        },
        emits: Ql,
        setup(t, {slots: o, emit: n}) {
            const {proxy: {$q: a}} = e.getCurrentInstance()
              , l = wt(t, a)
              , {tabindex: i, headerClass: r, getLocale: s, getCurrentDate: u} = Wl(t, a)
              , c = Nn(t)
              , d = jn(c);
            let v, p;
            const m = e.ref(null)
              , f = e.computed(()=>j())
              , h = e.computed(()=>s())
              , g = e.computed(()=>D())
              , b = ci(t.modelValue, f.value, h.value, t.calendar, g.value)
              , y = e.ref(Vv(b))
              , x = e.ref(b)
              , _ = e.ref(null === b.hour || b.hour < 12)
              , S = e.computed(()=>`q-time q-time--${!0 === t.landscape ? "landscape" : "portrait"}` + (!0 === l.value ? " q-time--dark q-dark" : "") + (!0 === t.disable ? " disabled" : !0 === t.readonly ? " q-time--readonly" : "") + (!0 === t.bordered ? " q-time--bordered" : "") + (!0 === t.square ? " q-time--square no-border-radius" : "") + (!0 === t.flat ? " q-time--flat no-shadow" : ""))
              , k = e.computed(()=>{
                const e = x.value;
                return {
                    hour: null === e.hour ? "--" : !0 === C.value ? Ee(e.hour) : String(!0 === _.value ? 0 === e.hour ? 12 : e.hour : e.hour > 12 ? e.hour - 12 : e.hour),
                    minute: null === e.minute ? "--" : Ee(e.minute),
                    second: null === e.second ? "--" : Ee(e.second)
                }
            }
            )
              , C = e.computed(()=>null !== t.format24h ? t.format24h : a.lang.date.format24h)
              , q = e.computed(()=>{
                const e = "hour" === y.value
                  , t = !0 === e ? 12 : 60
                  , o = x.value[y.value]
                  , n = Math.round(o * (360 / t)) - 180;
                let a = `rotate(${n}deg) translateX(-50%)`;
                return !0 === e && !0 === C.value && x.value.hour >= 12 && (a += " scale(.7)"),
                {
                    transform: a
                }
            }
            )
              , $ = e.computed(()=>null !== x.value.hour)
              , M = e.computed(()=>!0 === $.value && null !== x.value.minute)
              , T = e.computed(()=>void 0 !== t.hourOptions ? e=>t.hourOptions.includes(e) : void 0 !== t.options ? e=>t.options(e, null, null) : null)
              , B = e.computed(()=>void 0 !== t.minuteOptions ? e=>t.minuteOptions.includes(e) : void 0 !== t.options ? e=>t.options(x.value.hour, e, null) : null)
              , z = e.computed(()=>void 0 !== t.secondOptions ? e=>t.secondOptions.includes(e) : void 0 !== t.options ? e=>t.options(x.value.hour, x.value.minute, e) : null)
              , O = e.computed(()=>{
                if (null === T.value)
                    return null;
                const e = F(0, 11, T.value)
                  , t = F(12, 11, T.value);
                return {
                    am: e,
                    pm: t,
                    values: e.values.concat(t.values)
                }
            }
            )
              , V = e.computed(()=>null !== B.value ? F(0, 59, B.value) : null)
              , L = e.computed(()=>null !== z.value ? F(0, 59, z.value) : null)
              , E = e.computed(()=>{
                switch (y.value) {
                case "hour":
                    return O.value;
                case "minute":
                    return V.value;
                case "second":
                    return L.value
                }
            }
            )
              , A = e.computed(()=>{
                let e, t, o = 0, n = 1;
                const a = null !== E.value ? E.value.values : void 0;
                "hour" === y.value ? !0 === C.value ? (e = 0,
                t = 23) : (e = 0,
                t = 11,
                !1 === _.value && (o = 12)) : (e = 0,
                t = 55,
                n = 5);
                const l = [];
                for (let i = e, r = e; i <= t; i += n,
                r++) {
                    const e = i + o
                      , t = void 0 !== a && !1 === a.includes(e)
                      , n = "hour" === y.value && 0 === i ? !0 === C.value ? "00" : "12" : i;
                    l.push({
                        val: e,
                        index: r,
                        disable: t,
                        label: n
                    })
                }
                return l
            }
            )
              , P = e.computed(()=>{
                return [[Va, U, void 0, {
                    stop: !0,
                    prevent: !0,
                    mouse: !0
                }]]
            }
            );
            function R() {
                const e = {
                    ...u(),
                    ...Lv()
                };
                ce(e),
                Object.assign(x.value, e),
                y.value = "hour"
            }
            function F(e, t, o) {
                const n = Array.apply(null, {
                    length: t + 1
                }).map((t,n)=>{
                    const a = n + e;
                    return {
                        index: a,
                        val: !0 === o(a)
                    }
                }
                ).filter(e=>!0 === e.val).map(e=>e.index);
                return {
                    min: n[0],
                    max: n[n.length - 1],
                    values: n,
                    threshold: t + 1
                }
            }
            function I(e, t, o) {
                const n = Math.abs(e - t);
                return Math.min(n, o - n)
            }
            function N(e, {min: t, max: o, values: n, threshold: a}) {
                if (e === t)
                    return t;
                if (e < t || e > o)
                    return I(e, t, a) <= I(e, o, a) ? t : o;
                const l = n.findIndex(t=>e <= t)
                  , i = n[l - 1]
                  , r = n[l];
                return e - i <= r - e ? i : r
            }
            function j() {
                return "persian" !== t.calendar && null !== t.mask ? t.mask : `HH:mm ${!0 === t.withSeconds ? ":ss" : ""}`
            }
            function D() {
                if ("string" !== typeof t.defaultDate) {
                    const e = u(!0);
                    return e.dateHash = Ul(e),
                    e
                }
                return ci(t.defaultDate, "YYYY/MM/DD", void 0, t.calendar)
            }
            function H() {
                return !0 === de.isDeactivated || !0 === de.isUnmounted || null !== E.value && (0 === E.value.values.length || "hour" === y.value && !0 !== C.value && 0 === O.value[!0 === _.value ? "am" : "pm"].values.length)
            }
            function Q() {
                const e = m.value
                  , {top: t, left: o, width: n} = e.getBoundingClientRect()
                  , a = n / 2;
                return {
                    top: t + a,
                    left: o + a,
                    dist: .7 * a
                }
            }
            function U(e) {
                if (!0 !== H()) {
                    if (!0 === e.isFirst)
                        return v = Q(),
                        void (p = Y(e.evt, v));
                    p = Y(e.evt, v, p),
                    !0 === e.isFinal && (v = !1,
                    p = null,
                    W())
                }
            }
            function W() {
                "hour" === y.value ? y.value = "minute" : t.withSeconds && "minute" === y.value && (y.value = "second")
            }
            function Y(e, t, o) {
                const n = w(e)
                  , a = Math.abs(n.top - t.top)
                  , l = Math.sqrt(Math.pow(Math.abs(n.top - t.top), 2) + Math.pow(Math.abs(n.left - t.left), 2));
                let i, r = Math.asin(a / l) * (180 / Math.PI);
                if (r = n.top < t.top ? t.left < n.left ? 90 - r : 270 + r : t.left < n.left ? r + 90 : 270 - r,
                "hour" === y.value) {
                    if (i = r / 30,
                    null !== O.value) {
                        const e = !0 !== C.value ? !0 === _.value : O.value.am.values.length > 0 && O.value.pm.values.length > 0 ? l >= t.dist : O.value.am.values.length > 0;
                        i = N(i + (!0 === e ? 0 : 12), O.value[!0 === e ? "am" : "pm"])
                    } else
                        i = Math.round(i),
                        !0 === C.value ? l < t.dist ? i < 12 && (i += 12) : 12 === i && (i = 0) : !0 === _.value && 12 === i ? i = 0 : !1 === _.value && 12 !== i && (i += 12);
                    !0 === C.value && (_.value = i < 12)
                } else
                    i = Math.round(r / 6) % 60,
                    "minute" === y.value && null !== V.value ? i = N(i, V.value) : "second" === y.value && null !== L.value && (i = N(i, L.value));
                return o !== i && ie[y.value](i),
                i
            }
            e.watch(()=>t.modelValue, e=>{
                const o = ci(e, f.value, h.value, t.calendar, g.value);
                o.dateHash === x.value.dateHash && o.timeHash === x.value.timeHash || (x.value = o,
                null === o.hour ? y.value = "hour" : _.value = o.hour < 12)
            }
            ),
            e.watch([f, h], ()=>{
                e.nextTick(()=>{
                    ce()
                }
                )
            }
            );
            const K = {
                hour() {
                    y.value = "hour"
                },
                minute() {
                    y.value = "minute"
                },
                second() {
                    y.value = "second"
                }
            };
            function X(e) {
                13 === e.keyCode && re()
            }
            function Z(e) {
                13 === e.keyCode && se()
            }
            function G(e) {
                !0 !== H() && (!0 !== a.platform.is.desktop && Y(e, Q()),
                W())
            }
            function J(e) {
                !0 !== H() && Y(e, Q())
            }
            function ee(e) {
                if (13 === e.keyCode)
                    y.value = "hour";
                else if ([37, 39].includes(e.keyCode)) {
                    const t = 37 === e.keyCode ? -1 : 1;
                    if (null !== O.value) {
                        const e = !0 === C.value ? O.value.values : O.value[!0 === _.value ? "am" : "pm"].values;
                        if (0 === e.length)
                            return;
                        if (null === x.value.hour)
                            ne(e[0]);
                        else {
                            const o = (e.length + e.indexOf(x.value.hour) + t) % e.length;
                            ne(e[o])
                        }
                    } else {
                        const e = !0 === C.value ? 24 : 12
                          , o = !0 !== C.value && !1 === _.value ? 12 : 0
                          , n = null === x.value.hour ? -t : x.value.hour;
                        ne(o + (24 + n + t) % e)
                    }
                }
            }
            function te(e) {
                if (13 === e.keyCode)
                    y.value = "minute";
                else if ([37, 39].includes(e.keyCode)) {
                    const t = 37 === e.keyCode ? -1 : 1;
                    if (null !== V.value) {
                        const e = V.value.values;
                        if (0 === e.length)
                            return;
                        if (null === x.value.minute)
                            ae(e[0]);
                        else {
                            const o = (e.length + e.indexOf(x.value.minute) + t) % e.length;
                            ae(e[o])
                        }
                    } else {
                        const e = null === x.value.minute ? -t : x.value.minute;
                        ae((60 + e + t) % 60)
                    }
                }
            }
            function oe(e) {
                if (13 === e.keyCode)
                    y.value = "second";
                else if ([37, 39].includes(e.keyCode)) {
                    const t = 37 === e.keyCode ? -1 : 1;
                    if (null !== L.value) {
                        const e = L.value.values;
                        if (0 === e.length)
                            return;
                        if (null === x.value.seconds)
                            le(e[0]);
                        else {
                            const o = (e.length + e.indexOf(x.value.second) + t) % e.length;
                            le(e[o])
                        }
                    } else {
                        const e = null === x.value.second ? -t : x.value.second;
                        le((60 + e + t) % 60)
                    }
                }
            }
            function ne(e) {
                x.value.hour !== e && (x.value.hour = e,
                ue())
            }
            function ae(e) {
                x.value.minute !== e && (x.value.minute = e,
                ue())
            }
            function le(e) {
                x.value.second !== e && (x.value.second = e,
                ue())
            }
            const ie = {
                hour: ne,
                minute: ae,
                second: le
            };
            function re() {
                !1 === _.value && (_.value = !0,
                null !== x.value.hour && (x.value.hour -= 12,
                ue()))
            }
            function se() {
                !0 === _.value && (_.value = !1,
                null !== x.value.hour && (x.value.hour += 12,
                ue()))
            }
            function ue() {
                return null !== T.value && !0 !== T.value(x.value.hour) ? (x.value = ci(),
                void (y.value = "hour")) : null !== B.value && !0 !== B.value(x.value.minute) ? (x.value.minute = null,
                x.value.second = null,
                void (y.value = "minute")) : !0 === t.withSeconds && null !== z.value && !0 !== z.value(x.value.second) ? (x.value.second = null,
                void (y.value = "second")) : void (null === x.value.hour || null === x.value.minute || !0 === t.withSeconds && null === x.value.second || ce())
            }
            function ce(e) {
                const o = Object.assign({
                    ...x.value
                }, e)
                  , a = "persian" === t.calendar ? Ee(o.hour) + ":" + Ee(o.minute) + (!0 === t.withSeconds ? ":" + Ee(o.second) : "") : Vi(new Date(o.year,null === o.month ? null : o.month - 1,o.day,o.hour,o.minute,o.second,o.millisecond), f.value, h.value, o.year, o.timezoneOffset);
                o.changed = a !== t.modelValue,
                n("update:modelValue", a, o)
            }
            const de = e.getCurrentInstance();
            function ve() {
                const o = [e.h("div", {
                    class: "q-time__link " + ("hour" === y.value ? "q-time__link--active" : "cursor-pointer"),
                    tabindex: i.value,
                    onClick: K.hour,
                    onKeyup: ee
                }, k.value.hour), e.h("div", ":"), e.h("div", !0 === $.value ? {
                    class: "q-time__link " + ("minute" === y.value ? "q-time__link--active" : "cursor-pointer"),
                    tabindex: i.value,
                    onKeyup: te,
                    onClick: K.minute
                } : {
                    class: "q-time__link"
                }, k.value.minute)];
                !0 === t.withSeconds && o.push(e.h("div", ":"), e.h("div", !0 === M.value ? {
                    class: "q-time__link " + ("second" === y.value ? "q-time__link--active" : "cursor-pointer"),
                    tabindex: i.value,
                    onKeyup: oe,
                    onClick: K.second
                } : {
                    class: "q-time__link"
                }, k.value.second));
                const n = [e.h("div", {
                    class: "q-time__header-label row items-center no-wrap",
                    dir: "ltr"
                }, o)];
                return !1 === C.value && n.push(e.h("div", {
                    class: "q-time__header-ampm column items-between no-wrap"
                }, [e.h("div", {
                    class: "q-time__link " + (!0 === _.value ? "q-time__link--active" : "cursor-pointer"),
                    tabindex: i.value,
                    onClick: re,
                    onKeyup: X
                }, "AM"), e.h("div", {
                    class: "q-time__link " + (!0 !== _.value ? "q-time__link--active" : "cursor-pointer"),
                    tabindex: i.value,
                    onClick: se,
                    onKeyup: Z
                }, "PM")])),
                e.h("div", {
                    class: "q-time__header flex flex-center no-wrap " + r.value
                }, n)
            }
            function pe() {
                const o = x.value[y.value];
                return e.h("div", {
                    class: "q-time__content col relative-position"
                }, [e.h(e.Transition, {
                    name: "q-transition--scale"
                }, ()=>e.h("div", {
                    key: "clock" + y.value,
                    class: "q-time__container-parent absolute-full"
                }, [e.h("div", {
                    ref: m,
                    class: "q-time__container-child fit overflow-hidden"
                }, [e.withDirectives(e.h("div", {
                    class: "q-time__clock cursor-pointer non-selectable",
                    onClick: G,
                    onMousedown: J
                }, [e.h("div", {
                    class: "q-time__clock-circle fit"
                }, [e.h("div", {
                    class: "q-time__clock-pointer" + (null === x.value[y.value] ? " hidden" : void 0 !== t.color ? ` text-${t.color}` : ""),
                    style: q.value
                }), A.value.map(t=>e.h("div", {
                    class: `q-time__clock-position row flex-center q-time__clock-pos-${t.index}` + (t.val === o ? " q-time__clock-position--active " + r.value : !0 === t.disable ? " q-time__clock-position--disable" : "")
                }, [e.h("span", t.label)]))])]), P.value)])])), !0 === t.nowBtn ? e.h(ho, {
                    class: "q-time__now-button absolute",
                    icon: a.iconSet.datetime.now,
                    unelevated: !0,
                    size: "sm",
                    round: !0,
                    color: t.color,
                    textColor: t.textColor,
                    tabindex: i.value,
                    onClick: R
                }) : null])
            }
            return Object.assign(de.proxy, {
                setNow: R
            }),
            ()=>{
                const n = [pe()]
                  , a = Xe(o.default);
                return void 0 !== a && n.push(e.h("div", {
                    class: "q-time__actions"
                }, a)),
                void 0 !== t.name && !0 !== t.disable && d(n, "push"),
                e.h("div", {
                    class: S.value,
                    tabindex: -1
                }, [ve(), e.h("div", {
                    class: "q-time__main col overflow-auto"
                }, n)])
            }
        }
    })
      , Av = Me({
        name: "QTimeline",
        props: {
            ...yt,
            color: {
                type: String,
                default: "primary"
            },
            side: {
                type: String,
                default: "right",
                validator: e=>["left", "right"].includes(e)
            },
            layout: {
                type: String,
                default: "dense",
                validator: e=>["dense", "comfortable", "loose"].includes(e)
            }
        },
        setup(t, {slots: o}) {
            const n = e.getCurrentInstance()
              , a = wt(t, n.proxy.$q);
            e.provide(ae, t);
            const l = e.computed(()=>`q-timeline q-timeline--${t.layout} q-timeline--${t.layout}--${t.side}` + (!0 === a.value ? " q-timeline--dark" : ""));
            return ()=>e.h("ul", {
                class: l.value
            }, Xe(o.default))
        }
    })
      , Pv = Me({
        name: "QTimelineEntry",
        props: {
            heading: Boolean,
            tag: {
                type: String,
                default: "h3"
            },
            side: {
                type: String,
                default: "right",
                validator: e=>["left", "right"].includes(e)
            },
            icon: String,
            avatar: String,
            color: String,
            title: String,
            subtitle: String,
            body: String
        },
        setup(t, {slots: o}) {
            const n = e.inject(ae, ()=>{
                console.error("QTimelineEntry needs to be child of QTimeline")
            }
            )
              , a = e.computed(()=>`q-timeline__entry q-timeline__entry--${t.side}` + (void 0 !== t.icon || void 0 !== t.avatar ? " q-timeline__entry--icon" : ""))
              , l = e.computed(()=>`q-timeline__dot text-${t.color || n.color}`)
              , i = e.computed(()=>"comfortable" === n.layout && "left" === n.side);
            return ()=>{
                const n = Ze(o.default, []);
                if (void 0 !== t.body && n.unshift(t.body),
                !0 === t.heading) {
                    const o = [e.h("div"), e.h("div"), e.h(t.tag, {
                        class: "q-timeline__heading-title"
                    }, n)];
                    return e.h("div", {
                        class: "q-timeline__heading"
                    }, !0 === i.value ? o.reverse() : o)
                }
                let r;
                void 0 !== t.icon ? r = [e.h(ft, {
                    class: "row items-center justify-center",
                    name: t.icon
                })] : void 0 !== t.avatar && (r = [e.h("img", {
                    class: "q-timeline__dot-img",
                    src: t.avatar
                })]);
                const s = [e.h("div", {
                    class: "q-timeline__subtitle"
                }, [e.h("span", {}, Xe(o.subtitle, [t.subtitle]))]), e.h("div", {
                    class: l.value
                }, r), e.h("div", {
                    class: "q-timeline__content"
                }, [e.h("h6", {
                    class: "q-timeline__title"
                }, Xe(o.title, [t.title]))].concat(n))];
                return e.h("li", {
                    class: a.value
                }, !0 === i.value ? s.reverse() : s)
            }
        }
    })
      , Rv = Me({
        name: "QToolbar",
        props: {
            inset: Boolean
        },
        setup(t, {slots: o}) {
            const n = e.computed(()=>"q-toolbar row no-wrap items-center" + (!0 === t.inset ? " q-toolbar--inset" : ""));
            return ()=>e.h("div", {
                class: n.value
            }, Xe(o.default))
        }
    })
      , Fv = Me({
        name: "QToolbarTitle",
        props: {
            shrink: Boolean
        },
        setup(t, {slots: o}) {
            const n = e.computed(()=>"q-toolbar__title ellipsis" + (!0 === t.shrink ? " col-shrink" : ""));
            return ()=>e.h("div", {
                class: n.value
            }, Xe(o.default))
        }
    });
    const Iv = ["none", "strict", "leaf", "leaf-filtered"];
    var Nv = Me({
        name: "QTree",
        props: {
            ...yt,
            nodes: {
                type: Array,
                required: !0
            },
            nodeKey: {
                type: String,
                required: !0
            },
            labelKey: {
                type: String,
                default: "label"
            },
            childrenKey: {
                type: String,
                default: "children"
            },
            dense: Boolean,
            color: String,
            controlColor: String,
            textColor: String,
            selectedColor: String,
            icon: String,
            tickStrategy: {
                type: String,
                default: "none",
                validator: e=>Iv.includes(e)
            },
            ticked: Array,
            expanded: Array,
            selected: {},
            noSelectionUnset: Boolean,
            defaultExpandAll: Boolean,
            accordion: Boolean,
            filter: String,
            filterMethod: Function,
            duration: Number,
            noConnectors: Boolean,
            noNodesLabel: String,
            noResultsLabel: String
        },
        emits: ["update:expanded", "update:ticked", "update:selected", "lazy-load", "after-show", "after-hide"],
        setup(o, {slots: n, emit: a}) {
            const {proxy: l} = e.getCurrentInstance()
              , {$q: i} = l
              , r = wt(o, i)
              , s = e.ref({})
              , u = e.ref(o.ticked || [])
              , c = e.ref(o.expanded || []);
            let d = {};
            e.onBeforeUpdate(()=>{
                d = {}
            }
            );
            const v = e.computed(()=>`q-tree q-tree--${!0 === o.dense ? "dense" : "standard"}` + (!0 === o.noConnectors ? " q-tree--no-connectors" : "") + (!0 === r.value ? " q-tree--dark" : "") + (void 0 !== o.color ? ` text-${o.color}` : ""))
              , p = e.computed(()=>void 0 !== o.selected)
              , m = e.computed(()=>o.icon || i.iconSet.tree.icon)
              , f = e.computed(()=>o.controlColor || o.color)
              , h = e.computed(()=>void 0 !== o.textColor ? ` text-${o.textColor}` : "")
              , g = e.computed(()=>{
                const e = o.selectedColor || o.color;
                return e ? ` text-${e}` : ""
            }
            )
              , b = e.computed(()=>void 0 !== o.filterMethod ? o.filterMethod : (e,t)=>{
                const n = t.toLowerCase();
                return e[o.labelKey] && e[o.labelKey].toLowerCase().indexOf(n) > -1
            }
            )
              , y = e.computed(()=>{
                const e = {}
                  , t = (n,a)=>{
                    const l = n.tickStrategy || (a ? a.tickStrategy : o.tickStrategy)
                      , i = n[o.nodeKey]
                      , r = n[o.childrenKey] && n[o.childrenKey].length > 0
                      , d = !0 !== r
                      , v = !0 !== n.disabled && !0 === p.value && !1 !== n.selectable
                      , m = !0 !== n.disabled && !1 !== n.expandable
                      , f = "none" !== l
                      , h = "strict" === l
                      , g = "leaf-filtered" === l
                      , y = "leaf" === l || "leaf-filtered" === l;
                    let w = !0 !== n.disabled && !1 !== n.tickable;
                    !0 === y && !0 === w && a && !0 !== a.tickable && (w = !1);
                    let x = n.lazy;
                    !0 === x && void 0 !== s.value[i] && !0 === Array.isArray(n[o.childrenKey]) && (x = s.value[i]);
                    const _ = {
                        key: i,
                        parent: a,
                        isParent: r,
                        isLeaf: d,
                        lazy: x,
                        disabled: n.disabled,
                        link: !0 !== n.disabled && (!0 === v || !0 === m && (!0 === r || !0 === x)),
                        children: [],
                        matchesFilter: !o.filter || b.value(n, o.filter),
                        selected: i === o.selected && !0 === v,
                        selectable: v,
                        expanded: !0 === r && c.value.includes(i),
                        expandable: m,
                        noTick: !0 === n.noTick || !0 !== h && x && "loaded" !== x,
                        tickable: w,
                        tickStrategy: l,
                        hasTicking: f,
                        strictTicking: h,
                        leafFilteredTicking: g,
                        leafTicking: y,
                        ticked: !0 === h ? u.value.includes(i) : !0 === d && u.value.includes(i)
                    };
                    if (e[i] = _,
                    !0 === r && (_.children = n[o.childrenKey].map(e=>t(e, _)),
                    o.filter && (!0 !== _.matchesFilter ? _.matchesFilter = _.children.some(e=>e.matchesFilter) : !0 !== _.noTick && !0 !== _.disabled && !0 === _.tickable && !0 === g && !0 === _.children.every(e=>!0 !== e.matchesFilter || !0 === e.noTick || !0 !== e.tickable) && (_.tickable = !1)),
                    !0 === _.matchesFilter && (!0 !== _.noTick && !0 !== h && !0 === _.children.every(e=>e.noTick) && (_.noTick = !0),
                    y))) {
                        if (_.ticked = !1,
                        _.indeterminate = _.children.some(e=>!0 === e.indeterminate),
                        _.tickable = !0 === _.tickable && _.children.some(e=>e.tickable),
                        !0 !== _.indeterminate) {
                            const e = _.children.reduce((e,t)=>!0 === t.ticked ? e + 1 : e, 0);
                            e === _.children.length ? _.ticked = !0 : e > 0 && (_.indeterminate = !0)
                        }
                        !0 === _.indeterminate && (_.indeterminateNextState = _.children.every(e=>!0 !== e.tickable || !0 !== e.ticked))
                    }
                    return _
                }
                ;
                return o.nodes.forEach(e=>t(e, null)),
                e
            }
            );
            function w(e) {
                const t = [].reduce
                  , n = (a,l)=>{
                    return a || !l ? a : !0 === Array.isArray(l) ? t.call(Object(l), n, a) : l[o.nodeKey] === e ? l : l[o.childrenKey] ? n(null, l[o.childrenKey]) : void 0
                }
                ;
                return n(null, o.nodes)
            }
            function x() {
                return u.value.map(e=>w(e))
            }
            function _() {
                return c.value.map(e=>w(e))
            }
            function S(e) {
                return !(!e || !y.value[e]) && y.value[e].expanded
            }
            function k() {
                void 0 !== o.expanded ? a("update:expanded", []) : c.value = []
            }
            function C() {
                const e = c.value
                  , t = n=>{
                    n[o.childrenKey] && n[o.childrenKey].length > 0 && !1 !== n.expandable && !0 !== n.disabled && (e.push(n[o.nodeKey]),
                    n[o.childrenKey].forEach(t))
                }
                ;
                o.nodes.forEach(t),
                void 0 !== o.expanded ? a("update:expanded", e) : c.value = e
            }
            function q(t, n, l=w(t), i=y.value[t]) {
                if (i.lazy && "loaded" !== i.lazy) {
                    if ("loading" === i.lazy)
                        return;
                    s.value[t] = "loading",
                    !0 !== Array.isArray(l[o.childrenKey]) && (l[o.childrenKey] = []),
                    a("lazy-load", {
                        node: l,
                        key: t,
                        done: n=>{
                            s.value[t] = "loaded",
                            l[o.childrenKey] = !0 === Array.isArray(n) ? n : [],
                            e.nextTick(()=>{
                                const e = y.value[t];
                                e && !0 === e.isParent && M(t, !0)
                            }
                            )
                        }
                        ,
                        fail: ()=>{
                            delete s.value[t],
                            0 === l[o.childrenKey].length && delete l[o.childrenKey]
                        }
                    })
                } else
                    !0 === i.isParent && !0 === i.expandable && M(t, n)
            }
            function M(e, t) {
                let n = c.value;
                const l = void 0 !== o.expanded;
                if (!0 === l && (n = n.slice()),
                t) {
                    if (o.accordion && y.value[e]) {
                        const t = [];
                        y.value[e].parent ? y.value[e].parent.children.forEach(o=>{
                            o.key !== e && !0 === o.expandable && t.push(o.key)
                        }
                        ) : o.nodes.forEach(n=>{
                            const a = n[o.nodeKey];
                            a !== e && t.push(a)
                        }
                        ),
                        t.length > 0 && (n = n.filter(e=>!1 === t.includes(e)))
                    }
                    n = n.concat([e]).filter((e,t,o)=>o.indexOf(e) === t)
                } else
                    n = n.filter(t=>t !== e);
                !0 === l ? a("update:expanded", n) : c.value = n
            }
            function T(e) {
                return !(!e || !y.value[e]) && y.value[e].ticked
            }
            function B(e, t) {
                let n = u.value;
                const l = void 0 !== o.ticked;
                !0 === l && (n = n.slice()),
                n = t ? n.concat(e).filter((e,t,o)=>o.indexOf(e) === t) : n.filter(t=>!1 === e.includes(t)),
                !0 === l && a("update:ticked", n)
            }
            function z(e, n, a) {
                const i = {
                    tree: l,
                    node: e,
                    key: a,
                    color: o.color,
                    dark: r.value
                };
                return t(i, "expanded", ()=>{
                    return n.expanded
                }
                , e=>{
                    e !== n.expanded && q(a, e)
                }
                ),
                t(i, "ticked", ()=>{
                    return n.ticked
                }
                , e=>{
                    e !== n.ticked && B([a], e)
                }
                ),
                i
            }
            function O(e) {
                return (o.filter ? e.filter(e=>y.value[e[o.nodeKey]].matchesFilter) : e).map(e=>A(e))
            }
            function V(t) {
                if (void 0 !== t.icon)
                    return e.h(ft, {
                        class: "q-tree__icon q-mr-sm",
                        name: t.icon,
                        color: t.iconColor
                    });
                const o = t.img || t.avatar;
                return o ? e.h("img", {
                    class: `q-tree__ ${t.img ? "img" : "avatar"} q-mr-sm`,
                    src: o
                }) : void 0
            }
            function L() {
                a("after-show")
            }
            function E() {
                a("after-hide")
            }
            function A(t) {
                const a = t[o.nodeKey]
                  , l = y.value[a]
                  , i = t.header && n[`header-${t.header}`] || n["default-header"]
                  , s = !0 === l.isParent ? O(t[o.childrenKey]) : []
                  , u = s.length > 0 || l.lazy && "loaded" !== l.lazy;
                let c = t.body && n[`body-${t.body}`] || n["default-body"];
                const v = void 0 !== i || void 0 !== c ? z(t, l, a) : null;
                return void 0 !== c && (c = e.h("div", {
                    class: "q-tree__node-body relative-position"
                }, [e.h("div", {
                    class: h.value
                }, [c(v)])])),
                e.h("div", {
                    key: a,
                    class: "q-tree__node relative-position" + ` q-tree__node--${!0 === u ? "parent" : "child"}`
                }, [e.h("div", {
                    class: "q-tree__node-header relative-position row no-wrap items-center" + (!0 === l.link ? " q-tree__node--link q-hoverable q-focusable" : "") + (!0 === l.selected ? " q-tree__node--selected" : "") + (!0 === l.disabled ? " q-tree__node--disabled" : ""),
                    tabindex: !0 === l.link ? 0 : -1,
                    onClick: e=>{
                        R(t, l, e)
                    }
                    ,
                    onKeypress(e) {
                        !0 !== Y(e) && (13 === e.keyCode ? R(t, l, e, !0) : 32 === e.keyCode && F(t, l, e, !0))
                    }
                }, [e.h("div", {
                    class: "q-focus-helper",
                    tabindex: -1,
                    ref: e=>{
                        d[l.key] = e
                    }
                }), "loading" === l.lazy ? e.h(Ht, {
                    class: "q-tree__spinner",
                    color: f.value
                }) : !0 === u ? e.h(ft, {
                    class: "q-tree__arrow" + (!0 === l.expanded ? " q-tree__arrow--rotate" : ""),
                    name: m.value,
                    onClick(e) {
                        F(t, l, e)
                    }
                }) : null, !0 === l.hasTicking && !0 !== l.noTick ? e.h(_a, {
                    class: "q-tree__tickbox",
                    modelValue: !0 === l.indeterminate ? null : l.ticked,
                    color: f.value,
                    dark: r.value,
                    dense: !0,
                    keepColor: !0,
                    disable: !0 !== l.tickable,
                    onKeydown: $,
                    "onUpdate:modelValue": e=>{
                        I(l, e)
                    }
                }) : null, e.h("div", {
                    class: "q-tree__node-header-content col row no-wrap items-center" + (!0 === l.selected ? g.value : h.value)
                }, [i ? i(v) : [V(t), e.h("div", t[o.labelKey])]])]), !0 === u ? e.h(Ar, {
                    duration: o.duration,
                    onShow: L,
                    onHide: E
                }, ()=>e.withDirectives(e.h("div", {
                    class: "q-tree__node-collapsible" + h.value,
                    key: `${a}__q`
                }, [c, e.h("div", {
                    class: "q-tree__children" + (!0 === l.disabled ? " q-tree__node--disabled" : "")
                }, s)]), [[e.vShow, l.expanded]])) : c])
            }
            function P(e) {
                const t = d[e];
                t && t.focus()
            }
            function R(e, t, n, l) {
                !0 !== l && P(t.key),
                p.value && t.selectable ? !1 === o.noSelectionUnset ? a("update:selected", t.key !== o.selected ? t.key : null) : t.key !== o.selected && a("update:selected", t.key || null) : F(e, t, n, l),
                "function" === typeof e.handler && e.handler(e)
            }
            function F(e, t, o, n) {
                void 0 !== o && $(o),
                !0 !== n && P(t.key),
                q(t.key, !t.expanded, e, t)
            }
            function I(e, t) {
                if (!0 === e.indeterminate && (t = e.indeterminateNextState),
                e.strictTicking)
                    B([e.key], t);
                else if (e.leafTicking) {
                    const o = []
                      , n = e=>{
                        e.isParent ? (!0 !== t && !0 !== e.noTick && !0 === e.tickable && o.push(e.key),
                        !0 === e.leafTicking && e.children.forEach(n)) : !0 === e.noTick || !0 !== e.tickable || !0 === e.leafFilteredTicking && !0 !== e.matchesFilter || o.push(e.key)
                    }
                    ;
                    n(e),
                    B(o, t)
                }
            }
            return e.watch(()=>o.ticked, e=>{
                u.value = e
            }
            ),
            e.watch(()=>o.expanded, e=>{
                c.value = e
            }
            ),
            Object.assign(l, {
                getNodeByKey: w,
                getTickedNodes: x,
                getExpandedNodes: _,
                isExpanded: S,
                collapseAll: k,
                expandAll: C,
                setExpanded: q,
                isTicked: T,
                setTicked: B
            }),
            !0 === o.defaultExpandAll && C(),
            ()=>{
                const t = O(o.nodes);
                return e.h("div", {
                    class: v.value
                }, 0 === t.length ? o.filter ? o.noResultsLabel || i.lang.tree.noResults : o.noNodesLabel || i.lang.tree.noNodes : t)
            }
        }
    });
    function jv(e) {
        return "function" === typeof e ? e : ()=>e
    }
    const Dv = {
        url: [Function, String],
        method: {
            type: [Function, String],
            default: "POST"
        },
        fieldName: {
            type: [Function, String],
            default: ()=>{
                return e=>e.name
            }
        },
        headers: [Function, Array],
        formFields: [Function, Array],
        withCredentials: [Function, Boolean],
        sendRaw: [Function, Boolean],
        batch: [Function, Boolean],
        factory: Function
    }
      , Hv = ["factory-failed", "uploaded", "failed", "uploading"];
    function Qv({props: t, emit: o, helpers: n}) {
        const a = e.ref([])
          , l = e.ref([])
          , i = e.ref(0)
          , r = e.computed(()=>({
            url: jv(t.url),
            method: jv(t.method),
            headers: jv(t.headers),
            formFields: jv(t.formFields),
            fieldName: jv(t.fieldName),
            withCredentials: jv(t.withCredentials),
            sendRaw: jv(t.sendRaw),
            batch: jv(t.batch)
        }))
          , s = e.computed(()=>i.value > 0)
          , u = e.computed(()=>l.value.length > 0);
        let c;
        function d() {
            a.value.forEach(e=>{
                e.abort()
            }
            ),
            l.value.length > 0 && (c = !0)
        }
        function v() {
            const e = n.queuedFiles.value.slice(0);
            n.queuedFiles.value = [],
            r.value.batch(e) ? p(e) : e.forEach(e=>{
                p([e])
            }
            )
        }
        function p(e) {
            if (i.value++,
            "function" !== typeof t.factory)
                return void m(e, {});
            const a = t.factory(e);
            if (a)
                if ("function" === typeof a.catch && "function" === typeof a.then) {
                    l.value.push(a);
                    const t = t=>{
                        !0 === n.isAlive() && (l.value = l.value.filter(e=>e !== a),
                        0 === l.value.length && (c = !1),
                        n.queuedFiles.value = n.queuedFiles.value.concat(e),
                        e.forEach(e=>{
                            n.updateFileStatus(e, "failed")
                        }
                        ),
                        o("factory-failed", t, e),
                        i.value--)
                    }
                    ;
                    a.then(o=>{
                        !0 === c ? t(new Error("Aborted")) : !0 === n.isAlive() && (l.value = l.value.filter(e=>e !== a),
                        m(e, o))
                    }
                    ).catch(t)
                } else
                    m(e, a || {});
            else
                o("factory-failed", new Error("QUploader: factory() does not return properly"), e),
                i.value--
        }
        function m(e, t) {
            const l = new FormData
              , s = new XMLHttpRequest
              , u = (e,o)=>{
                return void 0 !== t[e] ? jv(t[e])(o) : r.value[e](o)
            }
              , c = u("url", e);
            if (!c)
                return console.error("q-uploader: invalid or no URL specified"),
                void i.value--;
            const d = u("formFields", e);
            void 0 !== d && d.forEach(e=>{
                l.append(e.name, e.value)
            }
            );
            let v, p = 0, m = 0, f = 0, h = 0;
            s.upload.addEventListener("progress", t=>{
                if (!0 === v)
                    return;
                const o = Math.min(h, t.loaded);
                n.uploadedSize.value += o - f,
                f = o;
                let a = f - m;
                for (let l = p; a > 0 && l < e.length; l++) {
                    const t = e[l]
                      , o = a > t.size;
                    if (!o)
                        return void n.updateFileStatus(t, "uploading", a);
                    a -= t.size,
                    p++,
                    m += t.size,
                    n.updateFileStatus(t, "uploading", t.size)
                }
            }
            , !1),
            s.onreadystatechange = (()=>{
                s.readyState < 4 || (s.status && s.status < 400 ? (n.uploadedFiles.value = n.uploadedFiles.value.concat(e),
                e.forEach(e=>{
                    n.updateFileStatus(e, "uploaded")
                }
                ),
                o("uploaded", {
                    files: e,
                    xhr: s
                })) : (v = !0,
                n.uploadedSize.value -= f,
                n.queuedFiles.value = n.queuedFiles.value.concat(e),
                e.forEach(e=>{
                    n.updateFileStatus(e, "failed")
                }
                ),
                o("failed", {
                    files: e,
                    xhr: s
                })),
                i.value--,
                a.value = a.value.filter(e=>e !== s))
            }
            ),
            s.open(u("method", e), c),
            !0 === u("withCredentials", e) && (s.withCredentials = !0);
            const g = u("headers", e);
            void 0 !== g && g.forEach(e=>{
                s.setRequestHeader(e.name, e.value)
            }
            );
            const b = u("sendRaw", e);
            e.forEach(e=>{
                n.updateFileStatus(e, "uploading", 0),
                !0 !== b && l.append(u("fieldName", e), e, e.name),
                e.xhr = s,
                e.__abort = (()=>{
                    s.abort()
                }
                ),
                h += e.size
            }
            ),
            o("uploading", {
                files: e,
                xhr: s
            }),
            a.value.push(s),
            !0 === b ? s.send(new Blob(e)) : s.send(l)
        }
        return {
            isUploading: s,
            isBusy: u,
            abort: d,
            upload: v
        }
    }
    var Uv = {
        name: "QUploader",
        props: Dv,
        emits: Hv,
        injectPlugin: Qv
    }
      , Wv = Vs(Uv)
      , Yv = Me({
        name: "QUploaderAddTrigger",
        setup() {
            return e.inject(de, ()=>{
                console.error("QUploaderAddTrigger needs to be child of QUploader")
            }
            )
        }
    })
      , Kv = Me({
        name: "QVideo",
        props: {
            ...wu,
            src: {
                type: String,
                required: !0
            },
            title: String,
            fetchpriority: {
                type: String,
                default: "auto"
            },
            loading: {
                type: String,
                default: "eager"
            },
            referrerpolicy: {
                type: String,
                default: "strict-origin-when-cross-origin"
            }
        },
        setup(t) {
            const o = xu(t)
              , n = e.computed(()=>"q-video" + (void 0 !== t.ratio ? " q-video--responsive" : ""));
            return ()=>e.h("div", {
                class: n.value,
                style: o.value
            }, [e.h("iframe", {
                src: t.src,
                title: t.title,
                fetchpriority: t.fetchpriority,
                loading: t.loading,
                referrerpolicy: t.referrerpolicy,
                frameborder: "0",
                allowfullscreen: !0
            })])
        }
    })
      , Xv = Object.freeze({
        __proto__: null,
        QAjaxBar: Ue,
        QAvatar: ht,
        QBadge: bt,
        QBanner: xt,
        QBar: _t,
        QBreadcrumbs: Ot,
        QBreadcrumbsEl: Nt,
        QBtn: ho,
        QBtnDropdown: Fn,
        QBtnGroup: go,
        QBtnToggle: Hn,
        QCard: Qn,
        QCardSection: Un,
        QCardActions: Wn,
        QCarousel: va,
        QCarouselSlide: pa,
        QCarouselControl: ma,
        QChatMessage: fa,
        QCheckbox: _a,
        QChip: ka,
        QCircularProgress: Ba,
        QColor: Tl,
        QDate: ji,
        QDialog: sr,
        QDrawer: cr,
        QEditor: Lr,
        QExpansionItem: Yr,
        QFab: es,
        QFabAction: ns,
        QField: pu,
        QFile: fu,
        QFooter: hu,
        QForm: gu,
        QFormChildMixin: bu,
        QHeader: yu,
        QIcon: ft,
        QImg: Su,
        QInfiniteScroll: Cu,
        QInnerLoading: qu,
        QInput: Iu,
        QIntersection: Qu,
        QList: Uu,
        QItem: gr,
        QItemSection: br,
        QItemLabel: Er,
        QKnob: Ku,
        QLayout: Ju,
        QMarkupTable: tc,
        QMenu: Rn,
        QNoSsr: oc,
        QOptionGroup: sc,
        QPage: uc,
        QPageContainer: cc,
        QPageScroller: pc,
        QPageSticky: mc,
        QPagination: fc,
        QParallax: gc,
        QPopupEdit: bc,
        QPopupProxy: yc,
        QLinearProgress: _c,
        QPullToRefresh: Cc,
        QRadio: ac,
        QRange: $c,
        QRating: Mc,
        QResizeObserver: Ua,
        QResponsive: Tc,
        QScrollArea: Lc,
        QScrollObserver: Gu,
        QSelect: Xc,
        QSeparator: Fr,
        QSkeleton: Jc,
        QSlideItem: td,
        QSlideTransition: Ar,
        QSlider: ja,
        QSpace: nd,
        QSpinner: Ht,
        QSpinnerAudio: ld,
        QSpinnerBall: rd,
        QSpinnerBars: ud,
        QSpinnerBox: dd,
        QSpinnerClock: pd,
        QSpinnerComment: fd,
        QSpinnerCube: gd,
        QSpinnerDots: yd,
        QSpinnerFacebook: xd,
        QSpinnerGears: Sd,
        QSpinnerGrid: Cd,
        QSpinnerHearts: $d,
        QSpinnerHourglass: Td,
        QSpinnerInfinity: zd,
        QSpinnerIos: Vd,
        QSpinnerOrbit: Ed,
        QSpinnerOval: Pd,
        QSpinnerPie: Fd,
        QSpinnerPuff: Nd,
        QSpinnerRadio: Dd,
        QSpinnerRings: Qd,
        QSpinnerTail: Wd,
        QSplitter: Yd,
        QStep: Gd,
        QStepper: tv,
        QStepperNavigation: ov,
        QTabPanels: nl,
        QTabPanel: al,
        QTable: Tv,
        QTh: nv,
        QTr: Bv,
        QTd: zv,
        QTabs: Za,
        QTab: ol,
        QRouteTab: Ov,
        QTime: Ev,
        QTimeline: Av,
        QTimelineEntry: Pv,
        QToggle: lc,
        QToolbar: Rv,
        QToolbarTitle: Fv,
        QTooltip: hr,
        QTree: Nv,
        QUploader: Wv,
        QUploaderAddTrigger: Yv,
        QVideo: Kv,
        QVirtualScroll: rv
    });
    function Zv(e) {
        if (!1 === e)
            return 0;
        if (!0 === e || void 0 === e)
            return 1;
        const t = parseInt(e, 10);
        return isNaN(t) ? 0 : t
    }
    var Gv = Te({
        name: "close-popup",
        beforeMount(e, {value: t}) {
            const o = {
                depth: Zv(t),
                handler(t) {
                    0 !== o.depth && setTimeout(()=>{
                        const n = Ro(e);
                        void 0 !== n && Io(n, t, o.depth)
                    }
                    )
                },
                handlerKey(e) {
                    !0 === K(e, 13) && o.handler(e)
                }
            };
            e.__qclosepopup = o,
            e.addEventListener("click", o.handler),
            e.addEventListener("keyup", o.handlerKey)
        },
        updated(e, {value: t, oldValue: o}) {
            t !== o && (e.__qclosepopup.depth = Zv(t))
        },
        beforeUnmount(e) {
            const t = e.__qclosepopup;
            e.removeEventListener("click", t.handler),
            e.removeEventListener("keyup", t.handlerKey),
            delete e.__qclosepopup
        }
    });
    const Jv = {}
      , ep = ["duration", "delay", "easing", "fill", "classes", "style", "duration", "resize", "useCSS", "hideFromClone", "keepToClone", "tween", "tweenFromOpacity", "tweenToOpacity", "waitFor", "onEnd"]
      , tp = ["resize", "useCSS", "hideFromClone", "keepToClone", "tween"];
    function op(e, t) {
        e.clsAction !== t && (e.clsAction = t,
        e.el.classList[t]("q-morph--invisible"))
    }
    function np(e) {
        if (!0 === e.animating || e.queue.length < 2)
            return;
        const [t,o] = e.queue;
        e.animating = !0,
        t.animating = !0,
        o.animating = !0,
        op(t, "remove"),
        op(o, "remove");
        const n = Js({
            from: t.el,
            to: o.el,
            onToggle() {
                op(t, "add"),
                op(o, "remove")
            },
            ...o.opts,
            onEnd(n, a) {
                void 0 !== o.opts.onEnd && o.opts.onEnd(n, a),
                !0 !== a && (t.animating = !1,
                o.animating = !1,
                e.animating = !1,
                e.cancel = void 0,
                e.queue.shift(),
                np(e))
            }
        });
        e.cancel = (()=>{
            n(!0),
            e.cancel = void 0
        }
        )
    }
    function ap(e, t) {
        const o = t.opts;
        tp.forEach(t=>{
            o[t] = !0 === e[t]
        }
        )
    }
    function lp(e, t) {
        const o = "string" === typeof e && e.length > 0 ? e.split(":") : [];
        t.name = o[0],
        t.group = o[1],
        Object.assign(t.opts, {
            duration: !0 === isNaN(o[2]) ? 300 : parseFloat(o[2]),
            waitFor: o[3]
        })
    }
    function ip(e, t) {
        void 0 !== e.group && (t.group = e.group),
        void 0 !== e.name && (t.name = e.name);
        const o = t.opts;
        ep.forEach(t=>{
            void 0 !== e[t] && (o[t] = e[t])
        }
        )
    }
    function rp(e, t) {
        if (t.name !== e)
            !1 === t.animating && op(t, "add");
        else {
            const o = Jv[t.group];
            void 0 === o ? (Jv[t.group] = {
                name: t.group,
                model: e,
                queue: [t],
                animating: !1
            },
            op(t, "remove")) : o.model !== e && (o.model = e,
            o.queue.push(t),
            !1 === o.animating && 2 === o.queue.length && np(o))
        }
    }
    function sp(e, t) {
        let o;
        Object(t) === t ? (o = "" + t.model,
        ip(t, e),
        ap(t, e)) : o = "" + t,
        o !== e.model ? (e.model = o,
        rp(o, e)) : !1 === e.animating && void 0 !== e.clsAction && e.el.classList[e.clsAction]("q-morph--invisible")
    }
    var up = Te({
        name: "morph",
        mounted(e, t) {
            const o = {
                el: e,
                animating: !1,
                opts: {}
            };
            ap(t.modifiers, o),
            lp(t.arg, o),
            sp(o, t.value),
            e.__qmorph = o
        },
        updated(e, t) {
            sp(e.__qmorph, t.value)
        },
        beforeUnmount(e) {
            const t = e.__qmorph
              , o = Jv[t.group];
            if (void 0 !== o) {
                const e = o.queue.indexOf(t);
                -1 !== e && (o.queue = o.queue.filter(e=>e !== t),
                0 === o.queue.length && (void 0 !== o.cancel && o.cancel(),
                delete Jv[t.group]))
            }
            "add" === t.clsAction && e.classList.remove("q-morph--invisible"),
            delete e.__qmorph
        }
    });
    const cp = {
        childList: !0,
        subtree: !0,
        attributes: !0,
        characterData: !0,
        attributeOldValue: !0,
        characterDataOldValue: !0
    };
    function dp(e, t, o) {
        t.handler = o,
        void 0 !== t.observer && t.observer.disconnect(),
        t.observer = new MutationObserver(o=>{
            if ("function" === typeof t.handler) {
                const n = t.handler(o);
                !1 !== n && !0 !== t.once || vp(e)
            }
        }
        ),
        t.observer.observe(e, t.opts)
    }
    function vp(e) {
        const t = e.__qmutation;
        void 0 !== t && (void 0 !== t.observer && t.observer.disconnect(),
        delete e.__qmutation)
    }
    var pp = Te({
        name: "mutation",
        mounted(e, {modifiers: {once: t, ...o}, value: n}) {
            const a = {
                once: t,
                opts: 0 === Object.keys(o).length ? cp : o
            };
            dp(e, a, n),
            e.__qmutation = a
        },
        updated(e, {oldValue: t, value: o}) {
            const n = e.__qmutation;
            void 0 !== n && t !== o && dp(e, n, o)
        },
        beforeUnmount: vp
    });
    const {passive: mp} = f;
    function fp(e, {value: t, oldValue: o}) {
        "function" === typeof t ? (e.handler = t,
        "function" !== typeof o && (e.scrollTarget.addEventListener("scroll", e.scroll, mp),
        e.scroll())) : e.scrollTarget.removeEventListener("scroll", e.scroll, mp)
    }
    var hp = Te({
        name: "scroll-fire",
        mounted(e, t) {
            const o = {
                scrollTarget: Yo(e),
                scroll: O(()=>{
                    let t, n;
                    o.scrollTarget === window ? (n = e.getBoundingClientRect().bottom,
                    t = window.innerHeight) : (n = Qt(e).top + Wt(e),
                    t = Qt(o.scrollTarget).top + Wt(o.scrollTarget)),
                    n > 0 && n < t && (o.scrollTarget.removeEventListener("scroll", o.scroll, mp),
                    o.handler(e))
                }
                , 25)
            };
            fp(o, t),
            e.__qscrollfire = o
        },
        updated(e, t) {
            t.value !== t.oldValue && fp(e.__qscrollfire, t)
        },
        beforeUnmount(e) {
            const t = e.__qscrollfire;
            t.scrollTarget.removeEventListener("scroll", t.scroll, mp),
            t.scroll.cancel(),
            delete e.__qscrollfire
        }
    });
    function gp(e, {value: t, oldValue: o}) {
        "function" === typeof t ? (e.handler = t,
        "function" !== typeof o && e.scrollTarget.addEventListener("scroll", e.scroll, f.passive)) : e.scrollTarget.removeEventListener("scroll", e.scroll, f.passive)
    }
    var bp = Te({
        name: "scroll",
        mounted(e, t) {
            const o = {
                scrollTarget: Yo(e),
                scroll() {
                    o.handler(Zo(o.scrollTarget), Go(o.scrollTarget))
                }
            };
            gp(o, t),
            e.__qscroll = o
        },
        updated(e, t) {
            void 0 !== e.__qscroll && t.oldValue !== t.value && gp(e.__qscroll, t)
        },
        beforeUnmount(e) {
            const t = e.__qscroll;
            t.scrollTarget.removeEventListener("scroll", t.scroll, f.passive),
            delete e.__qscroll
        }
    })
      , yp = Te({
        name: "touch-hold",
        beforeMount(e, t) {
            const {modifiers: o} = t;
            if (!0 !== o.mouse && !0 !== v.has.touch)
                return;
            const n = {
                handler: t.value,
                noop: h,
                mouseStart(e) {
                    "function" === typeof n.handler && !0 === g(e) && (T(n, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]),
                    n.start(e, !0))
                },
                touchStart(e) {
                    if (void 0 !== e.target && "function" === typeof n.handler) {
                        const t = e.target;
                        T(n, "temp", [[t, "touchmove", "move", "passiveCapture"], [t, "touchcancel", "end", "notPassiveCapture"], [t, "touchend", "end", "notPassiveCapture"]]),
                        n.start(e)
                    }
                },
                start(e, t) {
                    n.origin = w(e);
                    const o = Date.now();
                    !0 === v.is.mobile && (document.body.classList.add("non-selectable"),
                    bo(),
                    n.styleCleanup = (e=>{
                        n.styleCleanup = void 0;
                        const t = ()=>{
                            document.body.classList.remove("non-selectable")
                        }
                        ;
                        !0 === e ? (bo(),
                        setTimeout(t, 10)) : t()
                    }
                    )),
                    n.triggered = !1,
                    n.sensitivity = !0 === t ? n.mouseSensitivity : n.touchSensitivity,
                    n.timer = setTimeout(()=>{
                        bo(),
                        n.triggered = !0,
                        n.handler({
                            evt: e,
                            touch: !0 !== t,
                            mouse: !0 === t,
                            position: n.origin,
                            duration: Date.now() - o
                        })
                    }
                    , n.duration)
                },
                move(e) {
                    const {top: t, left: o} = w(e);
                    (Math.abs(o - n.origin.left) >= n.sensitivity || Math.abs(t - n.origin.top) >= n.sensitivity) && clearTimeout(n.timer)
                },
                end(e) {
                    B(n, "temp"),
                    void 0 !== n.styleCleanup && n.styleCleanup(n.triggered),
                    !0 === n.triggered ? void 0 !== e && $(e) : clearTimeout(n.timer)
                }
            }
              , a = [600, 5, 7];
            "string" === typeof t.arg && t.arg.length > 0 && t.arg.split(":").forEach((e,t)=>{
                const o = parseInt(e, 10);
                o && (a[t] = o)
            }
            ),
            [n.duration,n.touchSensitivity,n.mouseSensitivity] = a,
            e.__qtouchhold = n,
            !0 === o.mouse && T(n, "main", [[e, "mousedown", "mouseStart", `passive ${!0 === o.mouseCapture ? "Capture" : ""}`]]),
            !0 === v.has.touch && T(n, "main", [[e, "touchstart", "touchStart", `passive ${!0 === o.capture ? "Capture" : ""}`], [e, "touchend", "noop", "notPassiveCapture"]])
        },
        updated(e, t) {
            const o = e.__qtouchhold;
            void 0 !== o && t.oldValue !== t.value && ("function" !== typeof t.value && o.end(),
            o.handler = t.value)
        },
        beforeUnmount(e) {
            const t = e.__qtouchhold;
            void 0 !== t && (B(t, "main"),
            B(t, "temp"),
            clearTimeout(t.timer),
            void 0 !== t.styleCleanup && t.styleCleanup(),
            delete e.__qtouchhold)
        }
    });
    const wp = {
        esc: 27,
        tab: 9,
        enter: 13,
        space: 32,
        up: 38,
        left: 37,
        right: 39,
        down: 40,
        delete: [8, 46]
    }
      , xp = new RegExp(`^([\\d+]+|${Object.keys(wp).join("|")})$`,"i");
    function _p(e, t) {
        const {top: o, left: n} = w(e);
        return Math.abs(n - t.left) >= 7 || Math.abs(o - t.top) >= 7
    }
    var Sp = Te({
        name: "touch-repeat",
        beforeMount(e, {modifiers: t, value: o, arg: n}) {
            const a = Object.keys(t).reduce((e,t)=>{
                if (!0 === xp.test(t)) {
                    const o = isNaN(parseInt(t, 10)) ? wp[t.toLowerCase()] : parseInt(t, 10);
                    o >= 0 && e.push(o)
                }
                return e
            }
            , []);
            if (!0 !== t.mouse && !0 !== v.has.touch && 0 === a.length)
                return;
            const l = "string" === typeof n && n.length > 0 ? n.split(":").map(e=>parseInt(e, 10)) : [0, 600, 300]
              , i = l.length - 1
              , r = {
                keyboard: a,
                handler: o,
                noop: h,
                mouseStart(e) {
                    void 0 === r.event && "function" === typeof r.handler && !0 === g(e) && (T(r, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]),
                    r.start(e, !0))
                },
                keyboardStart(t) {
                    if ("function" === typeof r.handler && !0 === K(t, a)) {
                        if ((0 === l[0] || void 0 !== r.event) && ($(t),
                        e.focus(),
                        void 0 !== r.event))
                            return;
                        T(r, "temp", [[document, "keyup", "end", "notPassiveCapture"], [document, "click", "end", "notPassiveCapture"]]),
                        r.start(t, !1, !0)
                    }
                },
                touchStart(e) {
                    if (void 0 !== e.target && "function" === typeof r.handler) {
                        const t = e.target;
                        T(r, "temp", [[t, "touchmove", "move", "passiveCapture"], [t, "touchcancel", "end", "notPassiveCapture"], [t, "touchend", "end", "notPassiveCapture"]]),
                        r.start(e)
                    }
                },
                start(e, t, o) {
                    function n(e) {
                        r.styleCleanup = void 0,
                        document.documentElement.style.cursor = "";
                        const t = ()=>{
                            document.body.classList.remove("non-selectable")
                        }
                        ;
                        !0 === e ? (bo(),
                        setTimeout(t, 10)) : t()
                    }
                    !0 !== o && (r.origin = w(e)),
                    !0 === v.is.mobile && (document.body.classList.add("non-selectable"),
                    bo(),
                    r.styleCleanup = n),
                    r.event = {
                        touch: !0 !== t && !0 !== o,
                        mouse: !0 === t,
                        keyboard: !0 === o,
                        startTime: Date.now(),
                        repeatCount: 0
                    };
                    const a = ()=>{
                        if (void 0 === r.event)
                            return;
                        0 === r.event.repeatCount && (r.event.evt = e,
                        !0 === o ? r.event.keyCode = e.keyCode : r.event.position = w(e),
                        !0 !== v.is.mobile && (document.documentElement.style.cursor = "pointer",
                        document.body.classList.add("non-selectable"),
                        bo(),
                        r.styleCleanup = n)),
                        r.event.duration = Date.now() - r.event.startTime,
                        r.event.repeatCount += 1,
                        r.handler(r.event);
                        const t = i < r.event.repeatCount ? i : r.event.repeatCount;
                        r.timer = setTimeout(a, l[t])
                    }
                    ;
                    0 === l[0] ? a() : r.timer = setTimeout(a, l[0])
                },
                move(e) {
                    void 0 !== r.event && !0 === _p(e, r.origin) && clearTimeout(r.timer)
                },
                end(e) {
                    void 0 !== r.event && (void 0 !== r.styleCleanup && r.styleCleanup(!0),
                    void 0 !== e && r.event.repeatCount > 0 && $(e),
                    B(r, "temp"),
                    clearTimeout(r.timer),
                    r.event = void 0)
                }
            };
            e.__qtouchrepeat = r,
            !0 === t.mouse && T(r, "main", [[e, "mousedown", "mouseStart", `passive ${!0 === t.mouseCapture ? "Capture" : ""}`]]),
            !0 === v.has.touch && T(r, "main", [[e, "touchstart", "touchStart", `passive ${!0 === t.capture ? "Capture" : ""}`], [e, "touchend", "noop", "notPassiveCapture"]]),
            a.length > 0 && T(r, "main", [[e, "keydown", "keyboardStart", `notPassive ${!0 === t.keyCapture ? "Capture" : ""}`]])
        },
        updated(e, {oldValue: t, value: o}) {
            const n = e.__qtouchrepeat;
            void 0 !== n && t !== o && ("function" !== typeof o && n.end(),
            n.handler = o)
        },
        beforeUnmount(e) {
            const t = e.__qtouchrepeat;
            void 0 !== t && (clearTimeout(t.timer),
            B(t, "main"),
            B(t, "temp"),
            void 0 !== t.styleCleanup && t.styleCleanup(),
            delete e.__qtouchrepeat)
        }
    })
      , kp = Object.freeze({
        __proto__: null,
        ClosePopup: Gv,
        Intersection: Hu,
        Morph: up,
        Mutation: pp,
        Ripple: ao,
        ScrollFire: hp,
        Scroll: bp,
        TouchHold: yp,
        TouchPan: Va,
        TouchRepeat: Sp,
        TouchSwipe: Jn
    });
    let Cp;
    function qp() {
        return v.is.winphone ? "msapplication-navbutton-color" : v.is.safari ? "apple-mobile-web-app-status-bar-style" : "theme-color"
    }
    function $p(e) {
        const t = document.getElementsByTagName("META");
        for (const o in t)
            if (t[o].name === e)
                return t[o]
    }
    function Mp(e) {
        void 0 === Cp && (Cp = qp());
        let t = $p(Cp);
        const o = void 0 === t;
        o && (t = document.createElement("meta"),
        t.setAttribute("name", Cp)),
        t.setAttribute("content", e),
        o && document.head.appendChild(t)
    }
    var Tp = {
        set: !0 !== v.is.mobile || !0 !== v.is.nativeMobile && !0 !== v.is.winphone && !0 !== v.is.safari && !0 !== v.is.webkit && !0 !== v.is.vivaldi ? h : e=>{
            const t = e || Ps("primary");
            !0 === v.is.nativeMobile && window.StatusBar ? window.StatusBar.backgroundColorByHexString(t) : Mp(t)
        }
        ,
        install({$q: e}) {
            e.addressbarColor = this,
            e.config.addressbarColor && this.set(e.config.addressbarColor)
        }
    };
    const Bp = {};
    function zp(e) {
        Object.assign(Ap, {
            request: e,
            exit: e,
            toggle: e
        })
    }
    function Op() {
        return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null
    }
    function Vp() {
        const e = Ap.activeEl = !1 === Ap.isActive ? null : Op();
        Ao(null === e || e === document.documentElement ? document.body : e)
    }
    function Lp() {
        Ap.isActive = !1 === Ap.isActive,
        Vp()
    }
    function Ep(e, t) {
        try {
            const o = e[t]();
            return void 0 === o ? Promise.resolve() : o
        } catch (e) {
            return Promise.reject(e)
        }
    }
    const Ap = m({
        isActive: !1,
        activeEl: null
    }, {
        isCapable: !1,
        install({$q: e}) {
            e.fullscreen = this
        }
    });
    Bp.request = ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen"].find(e=>void 0 !== document.documentElement[e]),
    Ap.isCapable = void 0 !== Bp.request,
    !1 === Ap.isCapable ? zp(()=>Promise.reject("Not capable")) : (Object.assign(Ap, {
        request(e) {
            const t = e || document.documentElement
              , {activeEl: o} = Ap;
            if (t === o)
                return Promise.resolve();
            const n = null !== o && !0 === t.contains(o) ? Ap.exit() : Promise.resolve();
            return n.finally(()=>Ep(t, Bp.request))
        },
        exit() {
            return !0 === Ap.isActive ? Ep(document, Bp.exit) : Promise.resolve()
        },
        toggle(e) {
            return !0 === Ap.isActive ? Ap.exit() : Ap.request(e)
        }
    }),
    Bp.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find(e=>document[e]),
    Ap.isActive = Boolean(Op()),
    !0 === Ap.isActive && Vp(),
    ["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach(e=>{
        document[e] = Lp
    }
    ));
    const Pp = m({
        appVisible: !0
    }, {
        install({$q: e}) {
            t(e, "appVisible", ()=>this.appVisible)
        }
    });
    {
        let e, t;
        if ("undefined" !== typeof document.hidden ? (e = "hidden",
        t = "visibilitychange") : "undefined" !== typeof document.msHidden ? (e = "msHidden",
        t = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (e = "webkitHidden",
        t = "webkitvisibilitychange"),
        t && "undefined" !== typeof document[e]) {
            const o = ()=>{
                Pp.appVisible = !document[e]
            }
            ;
            document.addEventListener(t, o, !1)
        }
    }
    var Rp = Me({
        name: "BottomSheetPlugin",
        props: {
            ...yt,
            title: String,
            message: String,
            actions: Array,
            grid: Boolean,
            cardClass: [String, Array, Object],
            cardStyle: [String, Array, Object]
        },
        emits: ["ok", "hide"],
        setup(t, {emit: o}) {
            const {proxy: n} = e.getCurrentInstance()
              , a = wt(t, n.$q)
              , l = e.ref(null);
            function i() {
                l.value.show()
            }
            function r() {
                l.value.hide()
            }
            function s(e) {
                o("ok", e),
                r()
            }
            function u() {
                o("hide")
            }
            function c() {
                return t.actions.map(t=>{
                    const o = t.avatar || t.img;
                    return void 0 === t.label ? e.h(Fr, {
                        class: "col-all",
                        dark: a.value
                    }) : e.h("div", {
                        class: ["q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position", t.class],
                        tabindex: 0,
                        onClick() {
                            s(t)
                        },
                        onKeyup(e) {
                            13 === e.keyCode && s(t)
                        }
                    }, [e.h("div", {
                        class: "q-focus-helper"
                    }), t.icon ? e.h(ft, {
                        name: t.icon,
                        color: t.color
                    }) : o ? e.h("img", {
                        class: t.avatar ? "q-bottom-sheet__avatar" : "",
                        src: o
                    }) : e.h("div", {
                        class: "q-bottom-sheet__empty-icon"
                    }), e.h("div", t.label)])
                }
                )
            }
            function d() {
                return t.actions.map(t=>{
                    const o = t.avatar || t.img;
                    return void 0 === t.label ? e.h(Fr, {
                        spaced: !0,
                        dark: a.value
                    }) : e.h(gr, {
                        class: ["q-bottom-sheet__item", t.classes],
                        tabindex: 0,
                        clickable: !0,
                        dark: a.value,
                        onClick() {
                            s(t)
                        },
                        onKeyup(e) {
                            13 === e.keyCode && s(t)
                        }
                    }, ()=>[e.h(br, {
                        avatar: !0
                    }, ()=>t.icon ? e.h(ft, {
                        name: t.icon,
                        color: t.color
                    }) : o ? e.h("img", {
                        class: t.avatar ? "q-bottom-sheet__avatar" : "",
                        src: o
                    }) : null), e.h(br, ()=>t.label)])
                }
                )
            }
            function v() {
                const o = [];
                return t.title && o.push(e.h(Un, {
                    class: "q-dialog__title"
                }, ()=>t.title)),
                t.message && o.push(e.h(Un, {
                    class: "q-dialog__message"
                }, ()=>t.message)),
                o.push(!0 === t.grid ? e.h("div", {
                    class: "row items-stretch justify-start"
                }, c()) : e.h("div", d())),
                o
            }
            function p() {
                return [e.h(Qn, {
                    class: [`q-bottom-sheet q-bottom-sheet--${!0 === t.grid ? "grid" : "list"}` + (!0 === a.value ? " q-bottom-sheet--dark q-dark" : ""), t.cardClass],
                    style: t.cardStyle
                }, v)]
            }
            return Object.assign(n, {
                show: i,
                hide: r
            }),
            ()=>e.h(sr, {
                ref: l,
                position: "bottom",
                onHide: u
            }, p)
        }
    });
    function Fp(e, t) {
        for (const o in t)
            "spinner" !== o && Object(t[o]) === t[o] ? (e[o] = Object(e[o]) !== e[o] ? {} : {
                ...e[o]
            },
            Fp(e[o], t[o])) : e[o] = t[o]
    }
    function Ip(t, o, n) {
        return a=>{
            let l, i;
            const r = !0 === o && void 0 !== a.component;
            if (!0 === r) {
                const {component: e, componentProps: t} = a;
                l = "string" === typeof e ? n.component(e) : e,
                i = t || {}
            } else {
                const {class: e, style: o, ...n} = a;
                l = t,
                i = n,
                void 0 !== e && (n.cardClass = e),
                void 0 !== o && (n.cardStyle = o)
            }
            let s, u = !1;
            const c = e.ref(null)
              , d = Lo()
              , v = e=>{
                if (null !== c.value && void 0 !== c.value[e])
                    return void c.value[e]();
                const t = s.$.subTree;
                if (t && t.component) {
                    if (t.component.proxy && t.component.proxy[e])
                        return void t.component.proxy[e]();
                    if (t.component.subTree && t.component.subTree.component && t.component.subTree.component.proxy && t.component.subTree.component.proxy[e])
                        return void t.component.subTree.component.proxy[e]()
                }
                console.error("[Quasar] Incorrectly defined Dialog component")
            }
              , p = []
              , m = []
              , f = {
                onOk(e) {
                    return p.push(e),
                    f
                },
                onCancel(e) {
                    return m.push(e),
                    f
                },
                onDismiss(e) {
                    return p.push(e),
                    m.push(e),
                    f
                },
                hide() {
                    return v("hide"),
                    f
                },
                update(e) {
                    if (null !== s) {
                        if (!0 === r)
                            Object.assign(i, e);
                        else {
                            const {class: t, style: o, ...n} = e;
                            void 0 !== t && (n.cardClass = t),
                            void 0 !== o && (n.cardStyle = o),
                            Fp(i, n)
                        }
                        s.$forceUpdate()
                    }
                    return f
                }
            }
              , h = e=>{
                u = !0,
                p.forEach(t=>{
                    t(e)
                }
                )
            }
              , g = ()=>{
                b.unmount(d),
                Eo(d),
                b = null,
                s = null,
                !0 !== u && m.forEach(e=>{
                    e()
                }
                )
            }
            ;
            let b = ke({
                name: "QGlobalDialog",
                setup: ()=>()=>e.h(l, {
                    ...i,
                    ref: c,
                    onOk: h,
                    onHide: g,
                    onVnodeMounted(...t) {
                        "function" === typeof i.onVnodeMounted && i.onVnodeMounted(...t),
                        e.nextTick(()=>v("show"))
                    }
                })
            }, n);
            return s = b.mount(d),
            f
        }
    }
    var Np = {
        install({$q: e, parentApp: t}) {
            e.bottomSheet = Ip(Rp, !1, t),
            !0 !== this.__installed && (this.create = e.bottomSheet)
        }
    };
    function jp(e) {
        return encodeURIComponent(e)
    }
    function Dp(e) {
        return decodeURIComponent(e)
    }
    function Hp(e) {
        return jp(e === Object(e) ? JSON.stringify(e) : "" + e)
    }
    function Qp(e) {
        if ("" === e)
            return e;
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")),
        e = Dp(e.replace(/\+/g, " "));
        try {
            const t = JSON.parse(e);
            t !== Object(t) && !0 !== Array.isArray(t) || (e = t)
        } catch (e) {}
        return e
    }
    function Up(e) {
        const t = new Date;
        return t.setMilliseconds(t.getMilliseconds() + e),
        t.toUTCString()
    }
    function Wp(e) {
        let t = 0;
        const o = e.match(/(\d+)d/)
          , n = e.match(/(\d+)h/)
          , a = e.match(/(\d+)m/)
          , l = e.match(/(\d+)s/);
        return o && (t += 864e5 * o[1]),
        n && (t += 36e5 * n[1]),
        a && (t += 6e4 * a[1]),
        l && (t += 1e3 * l[1]),
        0 === t ? e : Up(t)
    }
    function Yp(e, t, o={}, n) {
        let a, l;
        void 0 !== o.expires && ("[object Date]" === Object.prototype.toString.call(o.expires) ? a = o.expires.toUTCString() : "string" === typeof o.expires ? a = Wp(o.expires) : (l = parseFloat(o.expires),
        a = !1 === isNaN(l) ? Up(864e5 * l) : o.expires));
        const i = `${jp(e)}=${Hp(t)}`
          , r = [i, void 0 !== a ? "; Expires=" + a : "", o.path ? "; Path=" + o.path : "", o.domain ? "; Domain=" + o.domain : "", o.sameSite ? "; SameSite=" + o.sameSite : "", o.httpOnly ? "; HttpOnly" : "", o.secure ? "; Secure" : "", o.other ? "; " + o.other : ""].join("");
        if (n) {
            n.req.qCookies ? n.req.qCookies.push(r) : n.req.qCookies = [r],
            n.res.setHeader("Set-Cookie", n.req.qCookies);
            let t = n.req.headers.cookie || "";
            if (void 0 !== a && l < 0) {
                const o = Kp(e, n);
                void 0 !== o && (t = t.replace(`${e}=${o}; `, "").replace(`; ${e}=${o}`, "").replace(`${e}=${o}`, ""))
            } else
                t = t ? `${i}; ${t}` : r;
            n.req.headers.cookie = t
        } else
            document.cookie = r
    }
    function Kp(e, t) {
        const o = t ? t.req.headers : document
          , n = o.cookie ? o.cookie.split("; ") : []
          , a = n.length;
        let l, i, r, s = e ? null : {}, u = 0;
        for (; u < a; u++)
            if (l = n[u].split("="),
            i = Dp(l.shift()),
            r = l.join("="),
            e) {
                if (e === i) {
                    s = Qp(r);
                    break
                }
            } else
                s[i] = r;
        return s
    }
    function Xp(e, t, o) {
        Yp(e, "", {
            expires: -1,
            ...t
        }, o)
    }
    function Zp(e, t) {
        return null !== Kp(e, t)
    }
    function Gp(e) {
        return {
            get: t=>Kp(t, e),
            set: (t,o,n)=>Yp(t, o, n, e),
            has: t=>Zp(t, e),
            remove: (t,o)=>Xp(t, o, e),
            getAll: ()=>Kp(null, e)
        }
    }
    const Jp = {
        install({$q: e, ssrContext: t}) {
            e.cookies = this
        }
    };
    Object.assign(Jp, Gp());
    var em = Me({
        name: "DialogPlugin",
        props: {
            ...yt,
            title: String,
            message: String,
            prompt: Object,
            options: Object,
            progress: [Boolean, Object],
            html: Boolean,
            ok: {
                type: [String, Object, Boolean],
                default: !0
            },
            cancel: [String, Object, Boolean],
            focus: {
                type: String,
                default: "ok",
                validator: e=>["ok", "cancel", "none"].includes(e)
            },
            stackButtons: Boolean,
            color: String,
            cardClass: [String, Array, Object],
            cardStyle: [String, Array, Object]
        },
        emits: ["ok", "hide"],
        setup(t, {emit: o}) {
            const {proxy: n} = e.getCurrentInstance()
              , {$q: a} = n
              , l = wt(t, a)
              , i = e.ref(null)
              , r = e.ref(void 0 !== t.prompt ? t.prompt.model : void 0 !== t.options ? t.options.model : void 0)
              , s = e.computed(()=>"q-dialog-plugin" + (!0 === l.value ? " q-dialog-plugin--dark q-dark" : "") + (!1 !== t.progress ? " q-dialog-plugin--progress" : ""))
              , u = e.computed(()=>t.color || (!0 === l.value ? "amber" : "primary"))
              , c = e.computed(()=>!1 === t.progress ? null : !0 === ye(t.progress) ? {
                component: t.progress.spinner || Ht,
                props: {
                    color: t.progress.color || u.value
                }
            } : {
                component: Ht,
                props: {
                    color: u.value
                }
            })
              , d = e.computed(()=>void 0 !== t.prompt || void 0 !== t.options)
              , v = e.computed(()=>{
                if (!0 !== d.value)
                    return {};
                const {model: e, isValid: o, items: n, ...a} = void 0 !== t.prompt ? t.prompt : t.options;
                return a
            }
            )
              , p = e.computed(()=>!0 === ye(t.ok) ? a.lang.label.ok : !0 === t.ok ? a.lang.label.ok : t.ok)
              , m = e.computed(()=>!0 === ye(t.cancel) ? a.lang.label.cancel : !0 === t.cancel ? a.lang.label.cancel : t.cancel)
              , f = e.computed(()=>{
                return void 0 !== t.prompt ? void 0 !== t.prompt.isValid && !0 !== t.prompt.isValid(r.value) : void 0 !== t.options && (void 0 !== t.options.isValid && !0 !== t.options.isValid(r.value))
            }
            )
              , h = e.computed(()=>({
                color: u.value,
                label: p.value,
                ripple: !1,
                disable: f.value,
                ...!0 === ye(t.ok) ? t.ok : {
                    flat: !0
                },
                "data-autofocus": "ok" === t.focus && !0 !== d.value || void 0,
                onClick: w
            }))
              , g = e.computed(()=>({
                color: u.value,
                label: m.value,
                ripple: !1,
                ...!0 === ye(t.cancel) ? t.cancel : {
                    flat: !0
                },
                "data-autofocus": "cancel" === t.focus && !0 !== d.value || void 0,
                onClick: x
            }));
            function b() {
                i.value.show()
            }
            function y() {
                i.value.hide()
            }
            function w() {
                o("ok", e.toRaw(r.value)),
                y()
            }
            function x() {
                y()
            }
            function _() {
                o("hide")
            }
            function S(e) {
                r.value = e
            }
            function k(e) {
                !0 !== f.value && "textarea" !== t.prompt.type && !0 === K(e, 13) && w()
            }
            function C(o, n) {
                return !0 === t.html ? e.h(Un, {
                    class: o,
                    innerHTML: n
                }) : e.h(Un, {
                    class: o
                }, ()=>n)
            }
            function q() {
                return [e.h(Iu, {
                    modelValue: r.value,
                    ...v.value,
                    color: u.value,
                    dense: !0,
                    autofocus: !0,
                    dark: l.value,
                    "onUpdate:modelValue": S,
                    onKeyup: k
                })]
            }
            function $() {
                return [e.h(sc, {
                    modelValue: r.value,
                    ...v.value,
                    color: u.value,
                    options: t.options.items,
                    dark: l.value,
                    "onUpdate:modelValue": S
                })]
            }
            function M() {
                const o = [];
                return t.cancel && o.push(e.h(ho, g.value)),
                t.ok && o.push(e.h(ho, h.value)),
                e.h(Wn, {
                    class: !0 === t.stackButtons ? "items-end" : "",
                    vertical: t.stackButtons,
                    align: "right"
                }, ()=>o)
            }
            function T() {
                const o = [];
                return t.title && o.push(C("q-dialog__title", t.title)),
                !1 !== t.progress && o.push(e.h(Un, {
                    class: "q-dialog__progress"
                }, ()=>e.h(c.value.component, c.value.props))),
                t.message && o.push(C("q-dialog__message", t.message)),
                void 0 !== t.prompt ? o.push(e.h(Un, {
                    class: "scroll q-dialog-plugin__form"
                }, q)) : void 0 !== t.options && o.push(e.h(Fr, {
                    dark: l.value
                }), e.h(Un, {
                    class: "scroll q-dialog-plugin__form"
                }, $), e.h(Fr, {
                    dark: l.value
                })),
                (t.ok || t.cancel) && o.push(M()),
                o
            }
            function B() {
                return [e.h(Qn, {
                    class: [s.value, t.cardClass],
                    style: t.cardStyle,
                    dark: l.value
                }, T)]
            }
            return e.watch(()=>t.prompt && t.prompt.model, S),
            e.watch(()=>t.options && t.options.model, S),
            Object.assign(n, {
                show: b,
                hide: y
            }),
            ()=>e.h(sr, {
                ref: i,
                onHide: _
            }, B)
        }
    })
      , tm = {
        install({$q: e, parentApp: t}) {
            e.dialog = Ip(em, !0, t),
            !0 !== this.__installed && (this.create = e.dialog)
        }
    };
    const om = e.ref(null)
      , nm = m({
        isActive: !1
    }, {
        start: h,
        stop: h,
        increment: h,
        setDefaults: h,
        install({$q: t, parentApp: o}) {
            if (t.loadingBar = this,
            !0 === this.__installed)
                return void (void 0 !== t.config.loadingBar && this.setDefaults(t.config.loadingBar));
            const n = e.ref(void 0 !== t.config.loadingBar ? {
                ...t.config.loadingBar
            } : {});
            function a() {
                nm.isActive = !0
            }
            function l() {
                nm.isActive = !1
            }
            const i = Lo("q-loading-bar");
            ke({
                name: "LoadingBar",
                devtools: {
                    hide: !0
                },
                setup: ()=>()=>e.h(Ue, {
                    ...n.value,
                    onStart: a,
                    onStop: l,
                    ref: om
                })
            }, o).mount(i),
            Object.assign(this, {
                start(e) {
                    om.value.start(e)
                },
                stop() {
                    om.value.stop()
                },
                increment() {
                    om.value.increment.apply(null, arguments)
                },
                setDefaults(e) {
                    !0 === ye(e) && Object.assign(n.value, e)
                }
            })
        }
    });
    let am, lm, im, rm = 0, sm = {};
    const um = {
        delay: 0,
        message: !1,
        html: !1,
        spinnerSize: 80,
        spinnerColor: "",
        messageColor: "",
        backgroundColor: "",
        boxClass: "",
        spinner: Ht,
        customClass: ""
    }
      , cm = {
        ...um
    }
      , dm = m({
        isActive: !1
    }, {
        show(t) {
            if (sm = !0 === ye(t) && !0 === t.ignoreDefaults ? {
                ...um,
                ...t
            } : {
                ...cm,
                ...t
            },
            dm.isActive = !0,
            void 0 !== am)
                return sm.uid = rm,
                void lm.$forceUpdate();
            sm.uid = ++rm,
            clearTimeout(im),
            im = setTimeout(()=>{
                im = void 0;
                const t = Lo("q-loading");
                am = e.createApp({
                    name: "QLoading",
                    setup() {
                        function o() {
                            !0 !== dm.isActive && void 0 !== am && (nr(!1),
                            am.unmount(t),
                            Eo(t),
                            am = void 0,
                            lm = void 0)
                        }
                        function n() {
                            if (!0 !== dm.isActive)
                                return null;
                            const t = [e.h(sm.spinner, {
                                class: "q-loading__spinner",
                                color: sm.spinnerColor,
                                size: sm.spinnerSize
                            })];
                            return sm.message && t.push(e.h("div", {
                                class: "q-loading__message" + (sm.messageColor ? ` text-${sm.messageColor}` : ""),
                                [!0 === sm.html ? "innerHTML" : "textContent"]: sm.message
                            })),
                            e.h("div", {
                                class: "q-loading fullscreen flex flex-center z-max " + sm.customClass.trim(),
                                key: sm.uid
                            }, [e.h("div", {
                                class: "q-loading__backdrop" + (sm.backgroundColor ? ` bg-${sm.backgroundColor}` : "")
                            }), e.h("div", {
                                class: "q-loading__box column items-center " + sm.boxClass
                            }, t)])
                        }
                        return e.onMounted(()=>{
                            nr(!0)
                        }
                        ),
                        ()=>e.h(e.Transition, {
                            name: "q-transition--fade",
                            appear: !0,
                            onAfterLeave: o
                        }, n)
                    }
                }),
                lm = am.mount(t)
            }
            , sm.delay)
        },
        hide() {
            !0 === dm.isActive && (void 0 !== im && (clearTimeout(im),
            im = void 0),
            dm.isActive = !1)
        },
        setDefaults(e) {
            !0 === ye(e) && Object.assign(cm, e)
        },
        install({$q: e}) {
            e.loading = this,
            void 0 !== e.config.loading && this.setDefaults(e.config.loading)
        }
    });
    let vm = 0;
    const pm = {}
      , mm = {}
      , fm = {}
      , hm = {}
      , gm = /^\s*$/
      , bm = []
      , ym = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"]
      , wm = ["top-left", "top-right", "bottom-left", "bottom-right"]
      , xm = {
        positive: {
            icon: e=>e.iconSet.type.positive,
            color: "positive"
        },
        negative: {
            icon: e=>e.iconSet.type.negative,
            color: "negative"
        },
        warning: {
            icon: e=>e.iconSet.type.warning,
            color: "warning",
            textColor: "dark"
        },
        info: {
            icon: e=>e.iconSet.type.info,
            color: "info"
        },
        ongoing: {
            group: !1,
            timeout: 0,
            spinner: !0,
            color: "grey-8"
        }
    };
    function _m(t, o, n) {
        if (!t)
            return Cm("parameter required");
        let a;
        const l = {
            textColor: "white"
        };
        if (!0 !== t.ignoreDefaults && Object.assign(l, pm),
        !1 === ye(t) && (l.type && Object.assign(l, xm[l.type]),
        t = {
            message: t
        }),
        Object.assign(l, xm[t.type || l.type], t),
        "function" === typeof l.icon && (l.icon = l.icon(o)),
        l.spinner ? (!0 === l.spinner && (l.spinner = Ht),
        l.spinner = e.markRaw(l.spinner)) : l.spinner = !1,
        l.meta = {
            hasMedia: Boolean(!1 !== l.spinner || l.icon || l.avatar),
            hasText: km(l.message) || km(l.caption)
        },
        l.position) {
            if (!1 === ym.includes(l.position))
                return Cm("wrong position", t)
        } else
            l.position = "bottom";
        if (void 0 === l.timeout)
            l.timeout = 5e3;
        else {
            const e = parseInt(l.timeout, 10);
            if (isNaN(e) || e < 0)
                return Cm("wrong timeout", t);
            l.timeout = e
        }
        0 === l.timeout ? l.progress = !1 : !0 === l.progress && (l.meta.progressClass = "q-notification__progress" + (l.progressClass ? ` ${l.progressClass}` : ""),
        l.meta.progressStyle = {
            animationDuration: `${l.timeout + 1e3}ms`
        });
        const i = (!0 === Array.isArray(t.actions) ? t.actions : []).concat(!0 !== t.ignoreDefaults && !0 === Array.isArray(pm.actions) ? pm.actions : []).concat(void 0 !== xm[t.type] && !0 === Array.isArray(xm[t.type].actions) ? xm[t.type].actions : [])
          , {closeBtn: r} = l;
        if (r && i.push({
            label: "string" === typeof r ? r : o.lang.label.close
        }),
        l.actions = i.map(({handler: e, noDismiss: t, ...o})=>({
            flat: !0,
            ...o,
            onClick: "function" === typeof e ? ()=>{
                e(),
                !0 !== t && s()
            }
            : ()=>{
                s()
            }
        })),
        void 0 === l.multiLine && (l.multiLine = l.actions.length > 1),
        Object.assign(l.meta, {
            class: "q-notification row items-stretch" + ` q-notification--${!0 === l.multiLine ? "multi-line" : "standard"}` + (void 0 !== l.color ? ` bg-${l.color}` : "") + (void 0 !== l.textColor ? ` text-${l.textColor}` : "") + (void 0 !== l.classes ? ` ${l.classes}` : ""),
            wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (!0 === l.multiLine ? "column no-wrap justify-center" : "row items-center"),
            contentClass: "q-notification__content row items-center" + (!0 === l.multiLine ? "" : " col"),
            leftClass: !0 === l.meta.hasText ? "additional" : "single",
            attrs: {
                role: "alert",
                ...l.attrs
            }
        }),
        !1 === l.group ? (l.group = void 0,
        l.meta.group = void 0) : (void 0 !== l.group && !0 !== l.group || (l.group = [l.message, l.caption, l.multiline].concat(l.actions.map(e=>`${e.label}*${e.icon}`)).join("|")),
        l.meta.group = l.group + "|" + l.position),
        0 === l.actions.length ? l.actions = void 0 : l.meta.actionsClass = "q-notification__actions row items-center " + (!0 === l.multiLine ? "justify-end" : "col-auto") + (!0 === l.meta.hasMedia ? " q-notification__actions--with-media" : ""),
        void 0 !== n) {
            clearTimeout(n.notif.meta.timer),
            l.meta.uid = n.notif.meta.uid;
            const e = fm[l.position].value.indexOf(n.notif);
            fm[l.position].value[e] = l
        } else {
            const e = mm[l.meta.group];
            if (void 0 === e) {
                if (l.meta.uid = vm++,
                l.meta.badge = 1,
                -1 !== ["left", "right", "center"].indexOf(l.position))
                    fm[l.position].value.splice(Math.floor(fm[l.position].value.length / 2), 0, l);
                else {
                    const e = l.position.indexOf("top") > -1 ? "unshift" : "push";
                    fm[l.position].value[e](l)
                }
                void 0 !== l.group && (mm[l.meta.group] = l)
            } else {
                if (clearTimeout(e.meta.timer),
                void 0 !== l.badgePosition) {
                    if (!1 === wm.includes(l.badgePosition))
                        return Cm("wrong badgePosition", t)
                } else
                    l.badgePosition = `top-${l.position.indexOf("left") > -1 ? "right" : "left"}`;
                l.meta.uid = e.meta.uid,
                l.meta.badge = e.meta.badge + 1,
                l.meta.badgeClass = `q-notification__badge q-notification__badge--${l.badgePosition}` + (void 0 !== l.badgeColor ? ` bg-${l.badgeColor}` : "") + (void 0 !== l.badgeTextColor ? ` text-${l.badgeTextColor}` : "") + (l.badgeClass ? ` ${l.badgeClass}` : "");
                const o = fm[l.position].value.indexOf(e);
                fm[l.position].value[o] = mm[l.meta.group] = l
            }
        }
        const s = ()=>{
            Sm(l),
            a = void 0
        }
        ;
        return l.timeout > 0 && (l.meta.timer = setTimeout(()=>{
            s()
        }
        , l.timeout + 1e3)),
        void 0 !== l.group ? e=>{
            void 0 !== e ? Cm("trying to update a grouped one which is forbidden", t) : s()
        }
        : (a = {
            dismiss: s,
            config: t,
            notif: l
        },
        void 0 === n ? e=>{
            if (void 0 !== a)
                if (void 0 === e)
                    a.dismiss();
                else {
                    const t = Object.assign({}, a.config, e, {
                        group: !1,
                        position: l.position
                    });
                    _m(t, o, a)
                }
        }
        : void Object.assign(n, a))
    }
    function Sm(e) {
        clearTimeout(e.meta.timer);
        const t = fm[e.position].value.indexOf(e);
        if (-1 !== t) {
            void 0 !== e.group && delete mm[e.meta.group];
            const o = bm["" + e.meta.uid];
            if (o) {
                const {width: e, height: t} = getComputedStyle(o);
                o.style.left = `${o.offsetLeft}px`,
                o.style.width = e,
                o.style.height = t
            }
            fm[e.position].value.splice(t, 1),
            "function" === typeof e.onDismiss && e.onDismiss()
        }
    }
    function km(e) {
        return void 0 !== e && null !== e && !0 !== gm.test(e)
    }
    function Cm(e, t) {
        return console.error(`Notify: ${e}`, t),
        !1
    }
    function qm() {
        return Me({
            name: "QNotifications",
            devtools: {
                hide: !0
            },
            setup() {
                return ()=>e.h("div", {
                    class: "q-notifications"
                }, ym.map(t=>{
                    return e.h(e.TransitionGroup, {
                        key: t,
                        class: hm[t],
                        tag: "div",
                        name: `q-notification--${t}`
                    }, ()=>fm[t].value.map(t=>{
                        const o = t.meta
                          , n = [];
                        if (!0 === o.hasMedia && (!1 !== t.spinner ? n.push(e.h(t.spinner, {
                            class: "q-notification__spinner q-notification__spinner--" + o.leftClass,
                            color: t.spinnerColor,
                            size: t.spinnerSize
                        })) : t.icon ? n.push(e.h(ft, {
                            class: "q-notification__icon q-notification__icon--" + o.leftClass,
                            name: t.icon,
                            color: t.iconColor,
                            size: t.iconSize,
                            role: "img"
                        })) : t.avatar && n.push(e.h(ht, {
                            class: "q-notification__avatar q-notification__avatar--" + o.leftClass
                        }, ()=>e.h("img", {
                            src: t.avatar,
                            "aria-hidden": "true"
                        })))),
                        !0 === o.hasText) {
                            let o;
                            const a = {
                                class: "q-notification__message col"
                            };
                            if (!0 === t.html)
                                a.innerHTML = t.caption ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>` : t.message;
                            else {
                                const n = [t.message];
                                o = t.caption ? [e.h("div", n), e.h("div", {
                                    class: "q-notification__caption"
                                }, [t.caption])] : n
                            }
                            n.push(e.h("div", a, o))
                        }
                        const a = [e.h("div", {
                            class: o.contentClass
                        }, n)];
                        return !0 === t.progress && a.push(e.h("div", {
                            key: `${o.uid}|p|${o.badge}`,
                            class: o.progressClass,
                            style: o.progressStyle
                        })),
                        void 0 !== t.actions && a.push(e.h("div", {
                            class: o.actionsClass
                        }, t.actions.map(t=>e.h(ho, t)))),
                        o.badge > 1 && a.push(e.h("div", {
                            key: `${o.uid}|${o.badge}`,
                            class: t.meta.badgeClass,
                            style: t.badgeStyle
                        }, [o.badge])),
                        e.h("div", {
                            ref: e=>{
                                bm["" + o.uid] = e
                            }
                            ,
                            key: o.uid,
                            class: o.class,
                            ...o.attrs
                        }, [e.h("div", {
                            class: o.wrapperClass
                        }, a)])
                    }
                    ))
                }
                ))
            }
        })
    }
    var $m = {
        setDefaults(e) {
            !0 === ye(e) && Object.assign(pm, e)
        },
        registerType(e, t) {
            !0 === ye(t) && (xm[e] = t)
        },
        install({$q: t, parentApp: o}) {
            if (t.notify = this.create = (e=>_m(e, t)),
            t.notify.setDefaults = this.setDefaults,
            t.notify.registerType = this.registerType,
            void 0 !== t.config.notify && this.setDefaults(t.config.notify),
            !0 !== this.__installed) {
                ym.forEach(t=>{
                    fm[t] = e.ref([]);
                    const o = !0 === ["left", "center", "right"].includes(t) ? "center" : t.indexOf("top") > -1 ? "top" : "bottom"
                      , n = t.indexOf("left") > -1 ? "start" : t.indexOf("right") > -1 ? "end" : "center"
                      , a = ["left", "right"].includes(t) ? `items-${"left" === t ? "start" : "end"} justify-center` : "center" === t ? "flex-center" : `items-${n}`;
                    hm[t] = `q-notifications__list q-notifications__list--${o} fixed column no-wrap ${a}`
                }
                );
                const t = Lo("q-notify");
                ke(qm(), o).mount(t)
            }
        }
    };
    function Mm(e) {
        return !0 === we(e) ? "__q_date|" + e.toUTCString() : !0 === xe(e) ? "__q_expr|" + e.source : "number" === typeof e ? "__q_numb|" + e : "boolean" === typeof e ? "__q_bool|" + (e ? "1" : "0") : "string" === typeof e ? "__q_strn|" + e : "function" === typeof e ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e
    }
    function Tm(e) {
        const t = e.length;
        if (t < 9)
            return e;
        const o = e.substring(0, 8)
          , n = e.substring(9);
        switch (o) {
        case "__q_date":
            return new Date(n);
        case "__q_expr":
            return new RegExp(n);
        case "__q_numb":
            return Number(n);
        case "__q_bool":
            return Boolean("1" === n);
        case "__q_strn":
            return "" + n;
        case "__q_objt":
            return JSON.parse(n);
        default:
            return e
        }
    }
    function Bm() {
        const e = ()=>null;
        return {
            has: ()=>!1,
            getLength: ()=>0,
            getItem: e,
            getIndex: e,
            getKey: e,
            getAll: ()=>{}
            ,
            getAllKeys: ()=>[],
            set: h,
            remove: h,
            clear: h,
            isEmpty: ()=>!0
        }
    }
    function zm(e) {
        const t = window[e + "Storage"]
          , o = e=>{
            const o = t.getItem(e);
            return o ? Tm(o) : null
        }
        ;
        return {
            has: e=>null !== t.getItem(e),
            getLength: ()=>t.length,
            getItem: o,
            getIndex: e=>{
                return e < t.length ? o(t.key(e)) : null
            }
            ,
            getKey: e=>{
                return e < t.length ? t.key(e) : null
            }
            ,
            getAll: ()=>{
                let e;
                const n = {}
                  , a = t.length;
                for (let l = 0; l < a; l++)
                    e = t.key(l),
                    n[e] = o(e);
                return n
            }
            ,
            getAllKeys: ()=>{
                const e = []
                  , o = t.length;
                for (let n = 0; n < o; n++)
                    e.push(t.key(n));
                return e
            }
            ,
            set: (e,o)=>{
                t.setItem(e, Mm(o))
            }
            ,
            remove: e=>{
                t.removeItem(e)
            }
            ,
            clear: ()=>{
                t.clear()
            }
            ,
            isEmpty: ()=>0 === t.length
        }
    }
    const Om = !1 === v.has.webStorage ? Bm() : zm("local")
      , Vm = {
        install({$q: e}) {
            e.localStorage = Om
        }
    };
    Object.assign(Vm, Om);
    const Lm = !1 === v.has.webStorage ? Bm() : zm("session")
      , Em = {
        install({$q: e}) {
            e.sessionStorage = Lm
        }
    };
    Object.assign(Em, Lm);
    var Am = Object.freeze({
        __proto__: null,
        AddressbarColor: Tp,
        AppFullscreen: Ap,
        AppVisibility: Pp,
        BottomSheet: Np,
        Cookies: Jp,
        Dark: A,
        Dialog: tm,
        LoadingBar: nm,
        Loading: dm,
        Meta: ys,
        Notify: $m,
        Platform: p,
        Screen: E,
        LocalStorage: Vm,
        SessionStorage: Em
    });
    function Pm() {
        const {emit: t, proxy: o} = e.getCurrentInstance()
          , n = e.ref(null);
        function a() {
            n.value.show()
        }
        function l() {
            n.value.hide()
        }
        function i(e) {
            t("ok", e),
            l()
        }
        function r() {
            t("hide")
        }
        return Object.assign(o, {
            show: a,
            hide: l
        }),
        {
            dialogRef: n,
            onDialogHide: r,
            onDialogOK: i,
            onDialogCancel: l
        }
    }
    const Rm = ["ok", "hide"];
    function Fm(t) {
        {
            const o = {
                active: !0
            };
            if ("function" === typeof t) {
                const n = e.computed(t);
                o.val = n.value,
                e.watch(n, e=>{
                    o.val = e,
                    !0 === o.active && bs()
                }
                )
            } else
                o.val = t;
            cs.push(o),
            bs(),
            e.onActivated(()=>{
                o.active = !0,
                bs()
            }
            ),
            e.onDeactivated(()=>{
                o.active = !1,
                bs()
            }
            ),
            e.onUnmounted(()=>{
                cs.splice(cs.indexOf(o), 1),
                bs()
            }
            )
        }
    }
    function Im() {
        return e.inject(ne)
    }
    Pm.emits = Rm,
    Pm.emitsObject = zs(Rm);
    var Nm = Object.freeze({
        __proto__: null,
        useDialogPluginComponent: Pm,
        useFormChild: as,
        useMeta: Fm,
        useQuasar: Im
    })
      , jm = {
        version: "2.7.7",
        install(e, t) {
            $e(e, {
                components: Xv,
                directives: kp,
                plugins: Am,
                ...t
            })
        },
        lang: H,
        iconSet: oe,
        ...Xv,
        ...kp,
        ...Am,
        ...Nm,
        ...nu
    };
    return jm
});
