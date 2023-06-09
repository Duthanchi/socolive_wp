(window.webpackJsonp = window.webpackJsonp || []).push([[11], {
    14: function(t, e, o) {
        "use strict";
        o.r(e),
        function(t, e) {
            var n = o(4)
              , i = o.n(n);
            !function(t, n) {
                "object" == ("undefined" == typeof exports ? "undefined" : i()(exports)) ? e.exports = n(t) : "function" == typeof define && o(11) ? define([], n) : t.LazyLoad = n(t)
            }(void 0 !== t ? t : (void 0).window || (void 0).global, (function(t) {
                function e(t, e) {
                    this.settings = i(n, e || {}),
                    this.images = t || document.querySelectorAll(this.settings.selector),
                    this.observer = null,
                    this.init()
                }
                "function" == typeof define && o(11) && (t = window);
                var n = {
                    src: "data-src",
                    srcset: "data-srcset",
                    selector: ".lazyload",
                    root: null,
                    rootMargin: "0px",
                    threshold: 0
                }
                  , i = function t() {
                    var e = {}
                      , o = !1
                      , n = 0
                      , i = arguments.length;
                    for ("[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (o = arguments[0],
                    n++); n < i; n++)
                        !function(n) {
                            for (var i in n)
                                Object.prototype.hasOwnProperty.call(n, i) && (o && "[object Object]" === Object.prototype.toString.call(n[i]) ? e[i] = t(!0, e[i], n[i]) : e[i] = n[i])
                        }(arguments[n]);
                    return e
                };
                if (e.prototype = {
                    init: function() {
                        if (t.IntersectionObserver) {
                            var e = this
                              , o = {
                                root: this.settings.root,
                                rootMargin: this.settings.rootMargin,
                                threshold: [this.settings.threshold]
                            };
                            this.observer = new IntersectionObserver((function(t) {
                                Array.prototype.forEach.call(t, (function(t) {
                                    if (t.isIntersecting) {
                                        e.observer.unobserve(t.target);
                                        var o = t.target.getAttribute(e.settings.src)
                                          , n = t.target.getAttribute(e.settings.srcset);
                                        "img" === t.target.tagName.toLowerCase() ? (o && (t.target.src = o),
                                        n && (t.target.srcset = n)) : t.target.style.backgroundImage = "url(" + o + ")"
                                    }
                                }
                                ))
                            }
                            ),o),
                            Array.prototype.forEach.call(this.images, (function(t) {
                                e.observer.observe(t)
                            }
                            ))
                        } else
                            this.loadImages()
                    },
                    loadAndDestroy: function() {
                        this.settings && (this.loadImages(),
                        this.destroy())
                    },
                    loadImages: function() {
                        if (this.settings) {
                            var t = this;
                            Array.prototype.forEach.call(this.images, (function(e) {
                                var o = e.getAttribute(t.settings.src)
                                  , n = e.getAttribute(t.settings.srcset);
                                "img" === e.tagName.toLowerCase() ? (o && (e.src = o),
                                n && (e.srcset = n)) : e.style.backgroundImage = "url('" + o + "')"
                            }
                            ))
                        }
                    },
                    destroy: function() {
                        this.settings && (this.observer.disconnect(),
                        this.settings = null)
                    }
                },
                t.lazyload = function(t, o) {
                    return new e(t,o)
                }
                ,
                t.jQuery) {
                    var r = t.jQuery;
                    r.fn.lazyload = function(t) {
                        return (t = t || {}).attribute = t.attribute || "data-src",
                        new e(r.makeArray(this),t),
                        this
                    }
                }
                return e
            }
            ))
        }
        .call(this, o(13), o(15)(t))
    },
    16: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(4)
          , i = o.n(n);
        !function() {
            if ("object" === ("undefined" == typeof window ? "undefined" : i()(window)))
                if ("IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype)
                    "isIntersecting"in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function() {
                            return this.intersectionRatio > 0
                        }
                    });
                else {
                    var t = function(t) {
                        for (var e = window.document, o = r(e); o; )
                            o = r(e = o.ownerDocument);
                        return e
                    }()
                      , e = []
                      , o = null
                      , n = null;
                    c.prototype.THROTTLE_TIMEOUT = 100,
                    c.prototype.POLL_INTERVAL = null,
                    c.prototype.USE_MUTATION_OBSERVER = !0,
                    c._setupCrossOriginUpdater = function() {
                        return o || (o = function(t, o) {
                            n = t && o ? m(t, o) : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            },
                            e.forEach((function(t) {
                                t._checkForIntersections()
                            }
                            ))
                        }
                        ),
                        o
                    }
                    ,
                    c._resetCrossOriginUpdater = function() {
                        o = null,
                        n = null
                    }
                    ,
                    c.prototype.observe = function(t) {
                        if (!this._observationTargets.some((function(e) {
                            return e.element == t
                        }
                        ))) {
                            if (!t || 1 != t.nodeType)
                                throw new Error("target must be an Element");
                            this._registerInstance(),
                            this._observationTargets.push({
                                element: t,
                                entry: null
                            }),
                            this._monitorIntersections(t.ownerDocument),
                            this._checkForIntersections()
                        }
                    }
                    ,
                    c.prototype.unobserve = function(t) {
                        this._observationTargets = this._observationTargets.filter((function(e) {
                            return e.element != t
                        }
                        )),
                        this._unmonitorIntersections(t.ownerDocument),
                        0 == this._observationTargets.length && this._unregisterInstance()
                    }
                    ,
                    c.prototype.disconnect = function() {
                        this._observationTargets = [],
                        this._unmonitorAllIntersections(),
                        this._unregisterInstance()
                    }
                    ,
                    c.prototype.takeRecords = function() {
                        var t = this._queuedEntries.slice();
                        return this._queuedEntries = [],
                        t
                    }
                    ,
                    c.prototype._initThresholds = function(t) {
                        var e = t || [0];
                        return Array.isArray(e) || (e = [e]),
                        e.sort().filter((function(t, e, o) {
                            if ("number" != typeof t || isNaN(t) || t < 0 || t > 1)
                                throw new Error("threshold must be a number between 0 and 1 inclusively");
                            return t !== o[e - 1]
                        }
                        ))
                    }
                    ,
                    c.prototype._parseRootMargin = function(t) {
                        var e = (t || "0px").split(/\s+/).map((function(t) {
                            var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                            if (!e)
                                throw new Error("rootMargin must be specified in pixels or percent");
                            return {
                                value: parseFloat(e[1]),
                                unit: e[2]
                            }
                        }
                        ));
                        return e[1] = e[1] || e[0],
                        e[2] = e[2] || e[0],
                        e[3] = e[3] || e[1],
                        e
                    }
                    ,
                    c.prototype._monitorIntersections = function(e) {
                        var o = e.defaultView;
                        if (o && -1 == this._monitoringDocuments.indexOf(e)) {
                            var n = this._checkForIntersections
                              , i = null
                              , s = null;
                            if (this.POLL_INTERVAL ? i = o.setInterval(n, this.POLL_INTERVAL) : (a(o, "resize", n, !0),
                            a(e, "scroll", n, !0),
                            this.USE_MUTATION_OBSERVER && "MutationObserver"in o && (s = new o.MutationObserver(n)).observe(e, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            })),
                            this._monitoringDocuments.push(e),
                            this._monitoringUnsubscribes.push((function() {
                                var t = e.defaultView;
                                t && (i && t.clearInterval(i),
                                l(t, "resize", n, !0)),
                                l(e, "scroll", n, !0),
                                s && s.disconnect()
                            }
                            )),
                            e != (this.root && this.root.ownerDocument || t)) {
                                var c = r(e);
                                c && this._monitorIntersections(c.ownerDocument)
                            }
                        }
                    }
                    ,
                    c.prototype._unmonitorIntersections = function(e) {
                        var o = this._monitoringDocuments.indexOf(e);
                        if (-1 != o) {
                            var n = this.root && this.root.ownerDocument || t;
                            if (!this._observationTargets.some((function(t) {
                                var o = t.element.ownerDocument;
                                if (o == e)
                                    return !0;
                                for (; o && o != n; ) {
                                    var i = r(o);
                                    if ((o = i && i.ownerDocument) == e)
                                        return !0
                                }
                                return !1
                            }
                            ))) {
                                var i = this._monitoringUnsubscribes[o];
                                if (this._monitoringDocuments.splice(o, 1),
                                this._monitoringUnsubscribes.splice(o, 1),
                                i(),
                                e != n) {
                                    var s = r(e);
                                    s && this._unmonitorIntersections(s.ownerDocument)
                                }
                            }
                        }
                    }
                    ,
                    c.prototype._unmonitorAllIntersections = function() {
                        var t = this._monitoringUnsubscribes.slice(0);
                        this._monitoringDocuments.length = 0,
                        this._monitoringUnsubscribes.length = 0;
                        for (var e = 0; e < t.length; e++)
                            t[e]()
                    }
                    ,
                    c.prototype._checkForIntersections = function() {
                        if (this.root || !o || n) {
                            var t = this._rootIsInDom()
                              , e = t ? this._getRootRect() : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            };
                            this._observationTargets.forEach((function(n) {
                                var i = n.element
                                  , r = h(i)
                                  , c = this._rootContainsTarget(i)
                                  , a = n.entry
                                  , l = t && c && this._computeTargetAndRootIntersection(i, r, e)
                                  , u = n.entry = new s({
                                    time: window.performance && performance.now && performance.now(),
                                    target: i,
                                    boundingClientRect: r,
                                    rootBounds: o && !this.root ? null : e,
                                    intersectionRect: l
                                });
                                a ? t && c ? this._hasCrossedThreshold(a, u) && this._queuedEntries.push(u) : a && a.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
                            }
                            ), this),
                            this._queuedEntries.length && this._callback(this.takeRecords(), this)
                        }
                    }
                    ,
                    c.prototype._computeTargetAndRootIntersection = function(e, i, r) {
                        if ("none" != window.getComputedStyle(e).display) {
                            for (var s, c, a, l, u, f, v, g, p = i, G = d(e), b = !1; !b && G; ) {
                                var y = null
                                  , w = 1 == G.nodeType ? window.getComputedStyle(G) : {};
                                if ("none" == w.display)
                                    return null;
                                if (G == this.root || 9 == G.nodeType)
                                    if (b = !0,
                                    G == this.root || G == t)
                                        o && !this.root ? !n || 0 == n.width && 0 == n.height ? (G = null,
                                        y = null,
                                        p = null) : y = n : y = r;
                                    else {
                                        var T = d(G)
                                          , E = T && h(T)
                                          , x = T && this._computeTargetAndRootIntersection(T, E, r);
                                        E && x ? (G = T,
                                        y = m(E, x)) : (G = null,
                                        p = null)
                                    }
                                else {
                                    var R = G.ownerDocument;
                                    G != R.body && G != R.documentElement && "visible" != w.overflow && (y = h(G))
                                }
                                if (y && (s = y,
                                c = p,
                                void 0,
                                void 0,
                                void 0,
                                void 0,
                                void 0,
                                void 0,
                                a = Math.max(s.top, c.top),
                                l = Math.min(s.bottom, c.bottom),
                                u = Math.max(s.left, c.left),
                                g = l - a,
                                p = (v = (f = Math.min(s.right, c.right)) - u) >= 0 && g >= 0 && {
                                    top: a,
                                    bottom: l,
                                    left: u,
                                    right: f,
                                    width: v,
                                    height: g
                                } || null),
                                !p)
                                    break;
                                G = G && d(G)
                            }
                            return p
                        }
                    }
                    ,
                    c.prototype._getRootRect = function() {
                        var e;
                        if (this.root)
                            e = h(this.root);
                        else {
                            var o = t.documentElement
                              , n = t.body;
                            e = {
                                top: 0,
                                left: 0,
                                right: o.clientWidth || n.clientWidth,
                                width: o.clientWidth || n.clientWidth,
                                bottom: o.clientHeight || n.clientHeight,
                                height: o.clientHeight || n.clientHeight
                            }
                        }
                        return this._expandRectByRootMargin(e)
                    }
                    ,
                    c.prototype._expandRectByRootMargin = function(t) {
                        var e = this._rootMarginValues.map((function(e, o) {
                            return "px" == e.unit ? e.value : e.value * (o % 2 ? t.width : t.height) / 100
                        }
                        ))
                          , o = {
                            top: t.top - e[0],
                            right: t.right + e[1],
                            bottom: t.bottom + e[2],
                            left: t.left - e[3]
                        };
                        return o.width = o.right - o.left,
                        o.height = o.bottom - o.top,
                        o
                    }
                    ,
                    c.prototype._hasCrossedThreshold = function(t, e) {
                        var o = t && t.isIntersecting ? t.intersectionRatio || 0 : -1
                          , n = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                        if (o !== n)
                            for (var i = 0; i < this.thresholds.length; i++) {
                                var r = this.thresholds[i];
                                if (r == o || r == n || r < o != r < n)
                                    return !0
                            }
                    }
                    ,
                    c.prototype._rootIsInDom = function() {
                        return !this.root || f(t, this.root)
                    }
                    ,
                    c.prototype._rootContainsTarget = function(e) {
                        return f(this.root || t, e) && (!this.root || this.root.ownerDocument == e.ownerDocument)
                    }
                    ,
                    c.prototype._registerInstance = function() {
                        e.indexOf(this) < 0 && e.push(this)
                    }
                    ,
                    c.prototype._unregisterInstance = function() {
                        var t = e.indexOf(this);
                        -1 != t && e.splice(t, 1)
                    }
                    ,
                    window.IntersectionObserver = c,
                    window.IntersectionObserverEntry = s
                }
            function r(t) {
                try {
                    return t.defaultView && t.defaultView.frameElement || null
                } catch (t) {
                    return null
                }
            }
            function s(t) {
                this.time = t.time,
                this.target = t.target,
                this.rootBounds = u(t.rootBounds),
                this.boundingClientRect = u(t.boundingClientRect),
                this.intersectionRect = u(t.intersectionRect || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }),
                this.isIntersecting = !!t.intersectionRect;
                var e = this.boundingClientRect
                  , o = e.width * e.height
                  , n = this.intersectionRect
                  , i = n.width * n.height;
                this.intersectionRatio = o ? Number((i / o).toFixed(4)) : this.isIntersecting ? 1 : 0
            }
            function c(t, e) {
                var o, n, i, r = e || {};
                if ("function" != typeof t)
                    throw new Error("callback must be a function");
                if (r.root && 1 != r.root.nodeType)
                    throw new Error("root must be an Element");
                this._checkForIntersections = (o = this._checkForIntersections.bind(this),
                n = this.THROTTLE_TIMEOUT,
                i = null,
                function() {
                    i || (i = setTimeout((function() {
                        o(),
                        i = null
                    }
                    ), n))
                }
                ),
                this._callback = t,
                this._observationTargets = [],
                this._queuedEntries = [],
                this._rootMarginValues = this._parseRootMargin(r.rootMargin),
                this.thresholds = this._initThresholds(r.threshold),
                this.root = r.root || null,
                this.rootMargin = this._rootMarginValues.map((function(t) {
                    return t.value + t.unit
                }
                )).join(" "),
                this._monitoringDocuments = [],
                this._monitoringUnsubscribes = []
            }
            function a(t, e, o, n) {
                "function" == typeof t.addEventListener ? t.addEventListener(e, o, n || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, o)
            }
            function l(t, e, o, n) {
                "function" == typeof t.removeEventListener ? t.removeEventListener(e, o, n || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, o)
            }
            function h(t) {
                var e;
                try {
                    e = t.getBoundingClientRect()
                } catch (t) {}
                return e ? (e.width && e.height || (e = {
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom,
                    left: e.left,
                    width: e.right - e.left,
                    height: e.bottom - e.top
                }),
                e) : {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            }
            function u(t) {
                return !t || "x"in t ? t : {
                    top: t.top,
                    y: t.top,
                    bottom: t.bottom,
                    left: t.left,
                    x: t.left,
                    right: t.right,
                    width: t.width,
                    height: t.height
                }
            }
            function m(t, e) {
                var o = e.top - t.top
                  , n = e.left - t.left;
                return {
                    top: o,
                    left: n,
                    height: e.height,
                    width: e.width,
                    bottom: o + e.height,
                    right: n + e.width
                }
            }
            function f(t, e) {
                for (var o = e; o; ) {
                    if (o == t)
                        return !0;
                    o = d(o)
                }
                return !1
            }
            function d(e) {
                var o = e.parentNode;
                return 9 == e.nodeType && e != t ? r(e) : o && 11 == o.nodeType && o.host ? o.host : o && o.assignedSlot ? o.assignedSlot.parentNode : o
            }
        }()
    },
    173: function(t, e, o) {
        t.exports = o(174)
    },
    174: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o(0)
          , i = o(3);
        function r(t, e) {
            var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!o) {
                if (Array.isArray(t) || (o = function(t, e) {
                    if (t) {
                        if ("string" == typeof t)
                            return s(t, e);
                        var o = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === o && t.constructor && (o = t.constructor.name),
                        "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? s(t, e) : void 0
                    }
                }(t)) || e && t && "number" == typeof t.length) {
                    o && (t = o);
                    var n = 0
                      , i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return n >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[n++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, c = !0, a = !1;
            return {
                s: function() {
                    o = o.call(t)
                },
                n: function() {
                    var t = o.next();
                    return c = t.done,
                    t
                },
                e: function(t) {
                    a = !0,
                    r = t
                },
                f: function() {
                    try {
                        c || null == o.return || o.return()
                    } finally {
                        if (a)
                            throw r
                    }
                }
            }
        }
        function s(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var o = 0, n = new Array(e); o < e; o++)
                n[o] = t[o];
            return n
        }
        console.log("foot"),
        $((function() {
            console.log("$foot start");
            var t = [];
            if ("soco" === n.default.env && (t = c("coidabanh.com") ? ["G-L8HVXJNJCL"] : c("coibanh.tv") ? ["G-HRP3Z6SL0X"] : c("coibongda247.com") ? ["G-C3WLCLDBDB"] : c("coibongda247.tv") ? ["G-1J7HK9F5ZT"] : c("thichdabanh.com") ? ["G-XTD6HJELHD"] : c("thichxembd.com") ? ["G-FXT0226Q3T"] : c("thichbd.com") ? ["G-1NDC1DDN6E"] : c("thucxembd.com") ? ["G-XVWYDH1GK3"] : c("kenhbd.tv") ? ["G-Z149DNK9NL"] : c("bdtructiep.tv") ? ["G-GLZJY1TTDL"] : c("xembonglive.com") ? ["G-933VTH6XNT"] : c("xembonglive.tv") ? ["G-03ZNK24NWF"] : c("mebong.tv") ? ["G-4QDX6KYQ05"] : c("yeubong.tv") ? ["G-VQBR7LFWFE"] : c("mebong.live") ? ["G-3BJ6V58E9Z"] : c("linkxembong.tv") ? ["G-RT79Z8W2DD"] : c("linkcoibong.tv") ? ["G-22JWNVM3HP"] : c("bongdahay.tv") ? ["G-1464WXS2YF"] : c("bonghay.tv") ? ["G-E1H7PTQ363"] : c("ghienbong.tv") ? ["G-LY42X3WK6L"] : c("ngoaihang.tv") ? ["G-MH4LY3JQH4"] : c("coibong.tv") ? ["G-7TVSBS86ZQ"] : c("fanbong.tv") ? ["G-JLDY16EYKY"] : c("fanbongda.tv") ? ["G-8CRK57R52Q"] : c("xembongtv.live") ? ["G-26CL4RRRSC"] : c("tructieplive.tv") ? ["G-9802Y6F9YV"] : c("socolive03.net") ? ["G-N531CMJF2M"] : c("socolive03.tv") ? ["G-ZRZK1JXLFE"] : c("socolive02.net") ? ["G-VWRYSNMMQQ"] : c("socolive02.tv") ? ["G-PG23D2S4BB"] : c("socolive01.tv") ? ["G-WZBG8GT1GC"] : c("socolive01.live") ? ["G-39EJR9R2XF"] : c("linksocolive.tv") ? ["G-F6J8VPGT4L"] : c("linksocolive.live") ? ["G-B7PR51J1HC"] : c("vebo1.org") ? ["UA-214569894-13"] : c("socolive10.com") ? ["G-Q8GPEJ0934"] : c("socolive10.live") ? ["G-HHDDLJ16QF"] : c("socolive10.co") ? ["G-Z189EYYW7J"] : c("socolive6.live") ? ["G-WYQMZHCLY9"] : c("socolive8.me") ? ["G-F3EG6L5S6C"] : c("socolive8.net") ? ["G-NZVS6DVFPJ"] : c("socolive10.net") ? ["G-5C8EEHKTVP"] : c("socolive10.tv") ? ["G-Y722Q32P44"] : c("linksocolive.net") ? ["G-KXBH5CNN9T"] : c("linksocolive.org") ? ["G-PZHRFSF8NW"] : c("linksocolive.io") ? ["G-6TB1NP0J9H"] : c("linksocolive.site") ? ["G-6WS4RLCB8E"] : c("linksocolive.me") ? ["G-1YK08WRW40"] : c("linksocolive.fun") ? ["G-GLR2L8NG8F"] : c("xemsocolive.net") ? ["G-84GM8GMZ1M"] : c("xemsocolive.site") ? ["G-N21PZPM66D"] : c("xemsocolive.fun") ? ["G-2MWZ1TMLPD"] : c("xemsocolive.me") ? ["G-JGC6C9JNXN"] : c("rakhoitv1.com") || c("keonhacaitv1.com") || c("vaoroi1.net") || c("tiengruoi1.com") || c("xoivotv1.tv") ? ["UA-214569894-13"] : c("socolive.io") ? ["G-K02VCL08DC"] : c("socolive.football") || c("socolive2.com") || c("socolive24.com") ? ["UA-214569894-5"] : c("linkxemsocolive.com") ? ["G-3T2F11DPM6"] : c("xemsocolive.com") ? ["G-6K20MYH68H"] : c("linksocolive.com") ? ["G-GNP4Q7TPMN"] : c("linkxemxoilac.com") ? ["G-7ZWT65CBZS"] : c("tructiepxoilac.com") ? ["G-NRTEMSNT5P"] : c("tructiepxoilac.net") ? ["G-TVTDNXZF9Z"] : c("xoilactructiep.com") ? ["G-VDK3FV0KRD"] : c("xemxoilac.tv") ? ["G-FRTD42428V"] : c("kenhxoilac.com") ? ["G-1C2Z18FTLT"] : c("xoilaclink.com") ? ["G-PNZ8RL0NLF"] : c("xembongxoilac.com") ? ["G-VYJL5Y6PXV"] : c("linkxembong.com") || c("linkxembong.net") ? ["G-M0T26NVDTN"] : c("linkxemhomnay.com") ? ["G-86J4HZK7Z2"] : c("homnaytructiep.com") ? ["G-PH307CVK5S"] : c("tructiephomnay.net") ? ["G-89JWQ8VH5F"] : c("lichthidau.org") ? ["G-LSQ0N8QJS2"] : c("socolive2.site") ? ["G-1HPTG2J964"] : c("socolive24.net") ? ["G-0YNZC0T7FF"] : c("socolive6.co") ? ["G-VS654Z6VLG"] : c("socolive7.co") ? ["G-EJNG6HVZC4"] : c("socolive8.co") ? ["G-8GH04F47V3"] : c("socolive9.co") ? ["G-4FHP71N6P3"] : c("socolive9.tv") ? ["G-Y1GZYLSHQF"] : c("socolive9.live") ? ["G-HJBVY12QYK"] : c("xemxoilactv.com") ? ["G-D1YHDZ98P0"] : c("xemxoilactv.com") ? ["G-D6P5SX5YM5"] : c("xoilactv.me") ? ["G-2KYE6XY9LH"] : c("xemcakhia.com") ? ["G-K33J9YJ6RG"] : c("linkxemcakhia.com") ? ["G-B6K2QVLNVX"] : c("linkxemcakhia.net") ? ["G-184P8FQK0G"] : c("xemcakhiatv.com") ? ["G-W7Q1GJ823H"] : c("xem90phut.com") ? ["G-81DEEYCFM6"] : c("linkxem90phut.com") ? ["G-E8703FC5GJ"] : c("bdtructiep.com") ? ["G-031KRCTZ71"] : c("tructuyenbd.com") ? ["G-5Z456ZF1MD"] : c("bdtructuyen.online") ? ["G-D3KE9998WW"] : c("tructiepbd.site") ? ["G-Y8C3Z1N915"] : c("tructiepbd.online") ? ["G-FYNXLXY6JL"] : c("xembd.online") ? ["G-V5GZBMXH0H"] : c("lichthidau24h.online") ? ["G-XFP52Y516P"] : c("lichthidau24h.site") ? ["G-90VNY98GK6"] : c("thuckhuyaxembd.online") ? ["G-6YRBJ83WHZ"] : c("xemtructiep.online") ? ["G-Y6K895E2CP"] : c("phatbd.com") ? ["G-DGFWLRRH6N"] : c("phatsongbd.online") ? ["G-8C14DLBGPG"] : c("phattructiep.online") ? ["G-MCMPX0BTJX"] : c("ghienbong.com") ? ["G-X6YXSZVR7G"] : c("phatsongtructiep.online") ? ["G-MZLP9XJVCZ"] : c("phatsongstructiep.com") ? ["G-8MLWM6GP54"] : c("miitom.online") ? ["G-YP2CM84SVJ"] : c("thuckhuya.online") ? ["G-00XMHVV8YT"] : c("thuckhuyatv.online") ? ["G-7V8JZGKQ2H"] : c("homnaytv.online") ? ["G-SXRLZRF7TC"] : c("tvhomnay.com") ? ["G-RF8HZT9BGE"] : c("homnayxemgi.online") ? ["G-G76YXV9LEY"] : c("xemgihomnay.online") ? ["G-TV1XWGVX85"] : c("thichxemtv.online") ? ["G-RPVXXHTZXK"] : c("xemdabanh.online") ? ["G-ND3JPX1HCE"] : c("xembanh.com") ? ["G-5V5BHH6YX0"] : c("xembdlive.online") ? ["G-2GKJ1N0BT1"] : c("xemfullhd.online") ? ["G-8RP84DKKVK"] : c("xoillac.online") ? ["G-PTSEWJQ08E"] : c("cakkhia.online") ? ["G-YRZQ9NHMB9"] : c("cakkhiatv.online") ? ["G-J2ZKRR1CTH"] : c("xoillactv.online") ? ["G-DTLPPZ5TLW"] : c("xoillac.com") ? ["G-8DPJWMFQ4Z"] : c("xem90phut.tv") ? ["G-EDJPEGVEZV"] : ["UA-214569894-1"]),
            "cakhia" === n.default.env && (t = c("cakhia79.info") ? ["G-XVZQPP57QL"] : c("cakhia79.club") ? ["G-Q1NYHKCR37"] : c("cakhia79.online") ? ["G-MT82MN0WNQ"] : c("cakhia79.io") ? ["G-CWHW5P9BZX"] : c("cakhia79.co") ? ["G-P3YG0MM3DQ"] : c("cakhia79.xyz") ? ["G-NK8Q4NVKTF"] : c("cakhia79.fun") ? ["G-WKJ735LRFR"] : ["G-GRVZ46W7RV"]),
            "90phut" === n.default.env && (t = c("90phut79.info") ? ["G-JLVM13E9JE"] : c("90phut79.club") ? ["G-JTWP8LVZ4P"] : c("90phut79.online") ? ["G-BPY29HYK08"] : c("90phut79.site") ? ["G-8D82PNWWGY"] : c("90phut79.fun") ? ["G-J168JZBDJN"] : c("90phut79.cc") ? ["G-17DXZG0F6P"] : ["G-L91HCSHP8S"]),
            "xoilac2" === n.default.env && (t = c("xoilac79.info") ? ["G-T38CWCBPVC"] : c("xoilac79.cc") ? ["G-8K3BHYQ5P5"] : c("xoilac79.online") ? ["G-N7L8EE99ZS"] : c("xoilac79.io") ? ["G-TKQLG8MTL9"] : c("giaidauhomnay.com") ? ["G-C0QMM8Z9ZV"] : c("xoilac79.co") ? ["G-LBJDGHYFHY"] : c("xoilac79.club") ? ["G-2E694MRRPV"] : c("xoilac79.site") ? ["G-83EQGTG9EF"] : c("thichtv.com") ? ["G-MMHRETXW40"] : ["G-ZJD5P1L5ZR"]),
            "mitom1" === n.default.env && (t = c("mitom79.info") ? ["G-K6GG7WPJ7H"] : c("mitom79.online") ? ["G-86X81RLBSD"] : c("mitom79.club") ? ["G-NH0DCDETSC"] : c("mitom79.site") ? ["G-4S6D8CR2PW"] : c("mitom79.fun") ? ["G-P2JEXYMDHV"] : ["G-WQK1W4K1M1"]),
            t && t.length > 0 && Array.isArray(t))
                for (var e = function(e) {
                    i.default.loadScript({
                        src: "https://www.googletagmanager.com/gtag/js?id=" + t[e],
                        async: !0
                    }, (function() {
                        function o() {
                            dataLayer.push(arguments)
                        }
                        window.dataLayer = window.dataLayer || [],
                        o("js", new Date),
                        o("config", t[e])
                    }
                    ))
                }, o = 0; o < t.length; o++)
                    e(o);
            if ("0" === n.default.debug && ("soco" === n.default.env || "cakhia" === n.default.env || "90phut" === n.default.env || "xoilac2" === n.default.env || "mitom1" === n.default.env)) {
                document.body.insertAdjacentHTML("beforeend", "<span hidden id='cnzz_stat_icon_1280574579'></span>");
                var s = document.createElement("script");
                s.type = "text/javascript",
                s.src = "https://s4.cnzz.com/z_stat.php?id=1280574579&show=pic",
                document.body.appendChild(s)
            }
            function c(t) {
                return location.hostname === t || location.hostname === "www." + t || location.hostname === "m." + t
            }
            setTimeout((function() {
                var t, e = r(document.querySelectorAll('a[title="站长统计"]'));
                try {
                    for (e.s(); !(t = e.n()).done; )
                        t.value.style.cssText = "display: none;"
                } catch (t) {
                    e.e(t)
                } finally {
                    e.f()
                }
            }
            ), 500),
            i.default.loadImg("live"),
            console.log("$foot end")
        }
        ))
    }
}, [[173, 0, 1, 2]]]);
