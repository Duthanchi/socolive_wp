(window.webpackJsonp = window.webpackJsonp || []).push([
    [14], {
        14: function(e, n, o) {
            "use strict";
            o.r(n),
                function(e, n) {
                    var t = o(4),
                        a = o.n(t);
                    ! function(e, t) {
                        "object" == ("undefined" == typeof exports ? "undefined" : a()(exports)) ? n.exports = t(e): "function" == typeof define && o(11) ? define([], t) : e.LazyLoad = t(e)
                    }(void 0 !== e ? e : (void 0).window || (void 0).global, (function(e) {
                        function n(e, n) {
                            this.settings = a(t, n || {}), this.images = e || document.querySelectorAll(this.settings.selector), this.observer = null, this.init()
                        }
                        "function" == typeof define && o(11) && (e = window);
                        var t = {
                                src: "data-src",
                                srcset: "data-srcset",
                                selector: ".lazyload",
                                root: null,
                                rootMargin: "0px",
                                threshold: 0
                            },
                            a = function e() {
                                var n = {},
                                    o = !1,
                                    t = 0,
                                    a = arguments.length;
                                for ("[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (o = arguments[0], t++); t < a; t++) ! function(t) {
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (o && "[object Object]" === Object.prototype.toString.call(t[a]) ? n[a] = e(!0, n[a], t[a]) : n[a] = t[a])
                                }(arguments[t]);
                                return n
                            };
                        if (n.prototype = {
                                init: function() {
                                    if (e.IntersectionObserver) {
                                        var n = this,
                                            o = {
                                                root: this.settings.root,
                                                rootMargin: this.settings.rootMargin,
                                                threshold: [this.settings.threshold]
                                            };
                                        this.observer = new IntersectionObserver((function(e) {
                                            Array.prototype.forEach.call(e, (function(e) {
                                                if (e.isIntersecting) {
                                                    n.observer.unobserve(e.target);
                                                    var o = e.target.getAttribute(n.settings.src),
                                                        t = e.target.getAttribute(n.settings.srcset);
                                                    "img" === e.target.tagName.toLowerCase() ? (o && (e.target.src = o), t && (e.target.srcset = t)) : e.target.style.backgroundImage = "url(" + o + ")"
                                                }
                                            }))
                                        }), o), Array.prototype.forEach.call(this.images, (function(e) {
                                            n.observer.observe(e)
                                        }))
                                    } else this.loadImages()
                                },
                                loadAndDestroy: function() {
                                    this.settings && (this.loadImages(), this.destroy())
                                },
                                loadImages: function() {
                                    if (this.settings) {
                                        var e = this;
                                        Array.prototype.forEach.call(this.images, (function(n) {
                                            var o = n.getAttribute(e.settings.src),
                                                t = n.getAttribute(e.settings.srcset);
                                            "img" === n.tagName.toLowerCase() ? (o && (n.src = o), t && (n.srcset = t)) : n.style.backgroundImage = "url('" + o + "')"
                                        }))
                                    }
                                },
                                destroy: function() {
                                    this.settings && (this.observer.disconnect(), this.settings = null)
                                }
                            }, e.lazyload = function(e, o) {
                                return new n(e, o)
                            }, e.jQuery) {
                            var r = e.jQuery;
                            r.fn.lazyload = function(e) {
                                return (e = e || {}).attribute = e.attribute || "data-src", new n(r.makeArray(this), e), this
                            }
                        }
                        return n
                    }))
                }.call(this, o(13), o(15)(e))
        },
        16: function(e, n, o) {
            "use strict";
            o.r(n);
            var t = o(4),
                a = o.n(t);
            ! function() {
                if ("object" === ("undefined" == typeof window ? "undefined" : a()(window)))
                    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function() {
                            return this.intersectionRatio > 0
                        }
                    });
                    else {
                        var e = function(e) {
                                for (var n = window.document, o = r(n); o;) o = r(n = o.ownerDocument);
                                return n
                            }(),
                            n = [],
                            o = null,
                            t = null;
                        u.prototype.THROTTLE_TIMEOUT = 100, u.prototype.POLL_INTERVAL = null, u.prototype.USE_MUTATION_OBSERVER = !0, u._setupCrossOriginUpdater = function() {
                            return o || (o = function(e, o) {
                                t = e && o ? m(e, o) : {
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    width: 0,
                                    height: 0
                                }, n.forEach((function(e) {
                                    e._checkForIntersections()
                                }))
                            }), o
                        }, u._resetCrossOriginUpdater = function() {
                            o = null, t = null
                        }, u.prototype.observe = function(e) {
                            if (!this._observationTargets.some((function(n) {
                                    return n.element == e
                                }))) {
                                if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                                this._registerInstance(), this._observationTargets.push({
                                    element: e,
                                    entry: null
                                }), this._monitorIntersections(e.ownerDocument), this._checkForIntersections()
                            }
                        }, u.prototype.unobserve = function(e) {
                            this._observationTargets = this._observationTargets.filter((function(n) {
                                return n.element != e
                            })), this._unmonitorIntersections(e.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance()
                        }, u.prototype.disconnect = function() {
                            this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance()
                        }, u.prototype.takeRecords = function() {
                            var e = this._queuedEntries.slice();
                            return this._queuedEntries = [], e
                        }, u.prototype._initThresholds = function(e) {
                            var n = e || [0];
                            return Array.isArray(n) || (n = [n]), n.sort().filter((function(e, n, o) {
                                if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                                return e !== o[n - 1]
                            }))
                        }, u.prototype._parseRootMargin = function(e) {
                            var n = (e || "0px").split(/\s+/).map((function(e) {
                                var n = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                                if (!n) throw new Error("rootMargin must be specified in pixels or percent");
                                return {
                                    value: parseFloat(n[1]),
                                    unit: n[2]
                                }
                            }));
                            return n[1] = n[1] || n[0], n[2] = n[2] || n[0], n[3] = n[3] || n[1], n
                        }, u.prototype._monitorIntersections = function(n) {
                            var o = n.defaultView;
                            if (o && -1 == this._monitoringDocuments.indexOf(n)) {
                                var t = this._checkForIntersections,
                                    a = null,
                                    i = null;
                                if (this.POLL_INTERVAL ? a = o.setInterval(t, this.POLL_INTERVAL) : (c(o, "resize", t, !0), c(n, "scroll", t, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in o && (i = new o.MutationObserver(t)).observe(n, {
                                        attributes: !0,
                                        childList: !0,
                                        characterData: !0,
                                        subtree: !0
                                    })), this._monitoringDocuments.push(n), this._monitoringUnsubscribes.push((function() {
                                        var e = n.defaultView;
                                        e && (a && e.clearInterval(a), d(e, "resize", t, !0)), d(n, "scroll", t, !0), i && i.disconnect()
                                    })), n != (this.root && this.root.ownerDocument || e)) {
                                    var u = r(n);
                                    u && this._monitorIntersections(u.ownerDocument)
                                }
                            }
                        }, u.prototype._unmonitorIntersections = function(n) {
                            var o = this._monitoringDocuments.indexOf(n);
                            if (-1 != o) {
                                var t = this.root && this.root.ownerDocument || e;
                                if (!this._observationTargets.some((function(e) {
                                        var o = e.element.ownerDocument;
                                        if (o == n) return !0;
                                        for (; o && o != t;) {
                                            var a = r(o);
                                            if ((o = a && a.ownerDocument) == n) return !0
                                        }
                                        return !1
                                    }))) {
                                    var a = this._monitoringUnsubscribes[o];
                                    if (this._monitoringDocuments.splice(o, 1), this._monitoringUnsubscribes.splice(o, 1), a(), n != t) {
                                        var i = r(n);
                                        i && this._unmonitorIntersections(i.ownerDocument)
                                    }
                                }
                            }
                        }, u.prototype._unmonitorAllIntersections = function() {
                            var e = this._monitoringUnsubscribes.slice(0);
                            this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
                            for (var n = 0; n < e.length; n++) e[n]()
                        }, u.prototype._checkForIntersections = function() {
                            if (this.root || !o || t) {
                                var e = this._rootIsInDom(),
                                    n = e ? this._getRootRect() : {
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        width: 0,
                                        height: 0
                                    };
                                this._observationTargets.forEach((function(t) {
                                    var a = t.element,
                                        r = s(a),
                                        u = this._rootContainsTarget(a),
                                        c = t.entry,
                                        d = e && u && this._computeTargetAndRootIntersection(a, r, n),
                                        y = t.entry = new i({
                                            time: window.performance && performance.now && performance.now(),
                                            target: a,
                                            boundingClientRect: r,
                                            rootBounds: o && !this.root ? null : n,
                                            intersectionRect: d
                                        });
                                    c ? e && u ? this._hasCrossedThreshold(c, y) && this._queuedEntries.push(y) : c && c.isIntersecting && this._queuedEntries.push(y) : this._queuedEntries.push(y)
                                }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                            }
                        }, u.prototype._computeTargetAndRootIntersection = function(n, a, r) {
                            if ("none" != window.getComputedStyle(n).display) {
                                for (var i, u, c, d, y, l, h, g, p = a, C = N(n), H = !1; !H && C;) {
                                    var w = null,
                                        f = 1 == C.nodeType ? window.getComputedStyle(C) : {};
                                    if ("none" == f.display) return null;
                                    if (C == this.root || 9 == C.nodeType)
                                        if (H = !0, C == this.root || C == e) o && !this.root ? !t || 0 == t.width && 0 == t.height ? (C = null, w = null, p = null) : w = t : w = r;
                                        else {
                                            var S = N(C),
                                                k = S && s(S),
                                                T = S && this._computeTargetAndRootIntersection(S, k, r);
                                            k && T ? (C = S, w = m(k, T)) : (C = null, p = null)
                                        }
                                    else {
                                        var U = C.ownerDocument;
                                        C != U.body && C != U.documentElement && "visible" != f.overflow && (w = s(C))
                                    }
                                    if (w && (i = w, u = p, void 0, void 0, void 0, void 0, void 0, void 0, c = Math.max(i.top, u.top), d = Math.min(i.bottom, u.bottom), y = Math.max(i.left, u.left), g = d - c, p = (h = (l = Math.min(i.right, u.right)) - y) >= 0 && g >= 0 && {
                                            top: c,
                                            bottom: d,
                                            left: y,
                                            right: l,
                                            width: h,
                                            height: g
                                        } || null), !p) break;
                                    C = C && N(C)
                                }
                                return p
                            }
                        }, u.prototype._getRootRect = function() {
                            var n;
                            if (this.root) n = s(this.root);
                            else {
                                var o = e.documentElement,
                                    t = e.body;
                                n = {
                                    top: 0,
                                    left: 0,
                                    right: o.clientWidth || t.clientWidth,
                                    width: o.clientWidth || t.clientWidth,
                                    bottom: o.clientHeight || t.clientHeight,
                                    height: o.clientHeight || t.clientHeight
                                }
                            }
                            return this._expandRectByRootMargin(n)
                        }, u.prototype._expandRectByRootMargin = function(e) {
                            var n = this._rootMarginValues.map((function(n, o) {
                                    return "px" == n.unit ? n.value : n.value * (o % 2 ? e.width : e.height) / 100
                                })),
                                o = {
                                    top: e.top - n[0],
                                    right: e.right + n[1],
                                    bottom: e.bottom + n[2],
                                    left: e.left - n[3]
                                };
                            return o.width = o.right - o.left, o.height = o.bottom - o.top, o
                        }, u.prototype._hasCrossedThreshold = function(e, n) {
                            var o = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                                t = n.isIntersecting ? n.intersectionRatio || 0 : -1;
                            if (o !== t)
                                for (var a = 0; a < this.thresholds.length; a++) {
                                    var r = this.thresholds[a];
                                    if (r == o || r == t || r < o != r < t) return !0
                                }
                        }, u.prototype._rootIsInDom = function() {
                            return !this.root || l(e, this.root)
                        }, u.prototype._rootContainsTarget = function(n) {
                            return l(this.root || e, n) && (!this.root || this.root.ownerDocument == n.ownerDocument)
                        }, u.prototype._registerInstance = function() {
                            n.indexOf(this) < 0 && n.push(this)
                        }, u.prototype._unregisterInstance = function() {
                            var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
                        }, window.IntersectionObserver = u, window.IntersectionObserverEntry = i
                    }
                function r(e) {
                    try {
                        return e.defaultView && e.defaultView.frameElement || null
                    } catch (e) {
                        return null
                    }
                }

                function i(e) {
                    this.time = e.time, this.target = e.target, this.rootBounds = y(e.rootBounds), this.boundingClientRect = y(e.boundingClientRect), this.intersectionRect = y(e.intersectionRect || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }), this.isIntersecting = !!e.intersectionRect;
                    var n = this.boundingClientRect,
                        o = n.width * n.height,
                        t = this.intersectionRect,
                        a = t.width * t.height;
                    this.intersectionRatio = o ? Number((a / o).toFixed(4)) : this.isIntersecting ? 1 : 0
                }

                function u(e, n) {
                    var o, t, a, r = n || {};
                    if ("function" != typeof e) throw new Error("callback must be a function");
                    if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
                    this._checkForIntersections = (o = this._checkForIntersections.bind(this), t = this.THROTTLE_TIMEOUT, a = null, function() {
                        a || (a = setTimeout((function() {
                            o(), a = null
                        }), t))
                    }), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
                        return e.value + e.unit
                    })).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
                }

                function c(e, n, o, t) {
                    "function" == typeof e.addEventListener ? e.addEventListener(n, o, t || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + n, o)
                }

                function d(e, n, o, t) {
                    "function" == typeof e.removeEventListener ? e.removeEventListener(n, o, t || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + n, o)
                }

                function s(e) {
                    var n;
                    try {
                        n = e.getBoundingClientRect()
                    } catch (e) {}
                    return n ? (n.width && n.height || (n = {
                        top: n.top,
                        right: n.right,
                        bottom: n.bottom,
                        left: n.left,
                        width: n.right - n.left,
                        height: n.bottom - n.top
                    }), n) : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }

                function y(e) {
                    return !e || "x" in e ? e : {
                        top: e.top,
                        y: e.top,
                        bottom: e.bottom,
                        left: e.left,
                        x: e.left,
                        right: e.right,
                        width: e.width,
                        height: e.height
                    }
                }

                function m(e, n) {
                    var o = n.top - e.top,
                        t = n.left - e.left;
                    return {
                        top: o,
                        left: t,
                        height: n.height,
                        width: n.width,
                        bottom: o + n.height,
                        right: t + n.width
                    }
                }

                function l(e, n) {
                    for (var o = n; o;) {
                        if (o == e) return !0;
                        o = N(o)
                    }
                    return !1
                }

                function N(n) {
                    var o = n.parentNode;
                    return 9 == n.nodeType && n != e ? r(n) : o && 11 == o.nodeType && o.host ? o.host : o && o.assignedSlot ? o.assignedSlot.parentNode : o
                }
            }()
        },
        179: function(e, n, o) {
            e.exports = o(180)
        },
        180: function(e, n, o) {
            "use strict";
            o.r(n);
            var t = o(0),
                a = o(6),
                r = o(34),
                i = o(35),
                u = o(3),
                c = o(9),
                d = o(1),
                s = o(2),
                y = o(18);
            if (d.storeData.sessionId || a.default.handleGuestLogin(), u.default.handleSpecialCodeByPhone(".register-window"), $((function() {
                    console.log("$header start"), u.default.loadImg(), u.default.showDownload((function() {
                        $(".right-fix .code").show(), $(".header-menu .download-menu").show()
                    }));
                    var e = d.storeData.userInfo,
                        n = !1,
                        o = !0,
                        m = 60,
                        l = null,
                        N = !1,
                        h = !1;

                    function g() {
                        $(".index-wrapper").length > 0 || $(".liveRoom-wrapper").length > 0 ? p($(window).scrollTop() > 1) : p(!0)
                    }

                    function p(e) {
                        e ? $(".index-wrapper").length > 0 ? ($(".header-wrapper").addClass("active"), $(".header-logo").show(), $(".header-logo-active").hide()) : ($(".header-wrapper").addClass("active-white"), $(".header-logo").hide(), $(".header-logo-active").show()) : ($(".header-wrapper").removeClass("active").removeClass("active-white"), $(".header-logo").show(), $(".header-logo-active").hide())
                    }
                    if ($(".header-wrapper .apply-menu").click((function() {
                            window.open("https://socolive.news/ung-tuyen-binh-luan-vien/")
                        })), $(".download-menu a").attr("href", t.default.downloadAppUrl), 1 == d.storeData.loginWindow && (Y(1), d.storeData.loginWindow = 0), g(), $(window).scroll((function() {
                            g()
                        })), $(".header-menu").find(".home-menu").click((function() {
                            window.location.origin == t.default.roomDomain ? window.location.href = t.default.indexDomain : window.location.href = "/"
                        })), $(".header-menu").find(".match-menu").click((function() {
                            window.location.origin == t.default.roomDomain ? window.location.href = t.default.indexDomain + "/match.html" : window.location.href = "/match.html"
                        })), $(".header-menu").find(".highlights-menu").click((function() {
                            window.location.origin == t.default.roomDomain ? window.location.href = t.default.indexDomain + "/highlights.html" : window.location.href = "/highlights.html"
                        })), $(".header-menu").find(".news-menu").click((function() {
                            window.location.origin == t.default.roomDomain ? window.location.href = t.default.indexDomain + "/news.html?type=activity" : window.location.href = "/news.html?type=activity"
                        })), $(".header-wrapper").find(".header-subscribe").click((function() {
                            window.location.origin == t.default.roomDomain ? window.location.href = t.default.indexDomain + "/pages/my/subscribe.html" : window.location.href = "/pages/my/subscribe.html"
                        })), $(".header-wrapper").find(".header-concern").click((function() {
                            window.location.origin == t.default.roomDomain ? window.location.href = t.default.indexDomain + "/pages/my/concern.html" : window.location.href = "/pages/my/concern.html"
                        })), $(".header-avatar .special-avatar").click((function() {
                            window.location.origin == t.default.roomDomain ? window.location.href = t.default.indexDomain + "/pages/my/home.html" : window.location.href = "/pages/my/home.html"
                        })), $(".avatar-submenu").find(".ucenter").click((function() {
                            window.location.origin == t.default.roomDomain ? window.location.href = t.default.indexDomain + "/pages/my/home.html" : window.location.href = "/pages/my/home.html"
                        })), $(".avatar-submenu").find(".concern").click((function() {
                            window.location.origin == t.default.roomDomain ? window.location.href = t.default.indexDomain + "/pages/my/concern.html" : window.location.href = "/pages/my/concern.html"
                        })), $(".avatar-submenu").find(".subscribe").click((function() {
                            window.location.origin == t.default.roomDomain ? window.location.href = t.default.indexDomain + "/pages/my/subscribe.html" : window.location.href = "/pages/my/subscribe.html"
                        })), $(".avatar-submenu").find(".msg").click((function() {
                            window.location.origin == t.default.roomDomain ? window.location.href = t.default.indexDomain + "/pages/my/message.html" : window.location.href = "/pages/my/message.html"
                        })), $(".avatar-submenu").find(".anchor-center").click((function() {
                            window.location.origin == t.default.roomDomain ? window.location.href = t.default.indexDomain + "/pages/anchor/settings.html" : window.location.href = "/pages/anchor/settings.html"
                        })), $("body").click((function() {
                            $(".country-code-list").hide(), $(".logout-confirm").hide()
                        })), a.default.handleIsHadUserLogin()) {
                        if ($(".header-right .had-login").show(), $(".header-avatar .avatar").attr("data-src", e.cutOutIcon ? e.cutOutIcon : e.icon).attr("data-src-backup", e.icon), $(".avatar-submenu .avatar").attr("data-src", e.cutOutIcon ? e.cutOutIcon : e.icon).attr("data-src-backup", e.icon), $(".avatar-submenu .nickname").text(e.nickName), $(".avatar-submenu .cur-lv").css({
                                background: "url('".concat("/assets/".concat(t.default.env, "/img/lv").concat(e.growDto.id < 1 ? 1 : e.growDto.id, ".png"), "') no-repeat center"),
                                "background-size": "30px 16px"
                            }), $(".avatar-submenu .next-lv").css({
                                background: "url('".concat("/assets/".concat(t.default.env, "/img/lv").concat(10 == e.growDto.id ? 10 : e.growDto.id + 1, ".png"), "') no-repeat center"),
                                "background-size": "30px 16px"
                            }), $(".avatar-submenu .cur-grow").text(e.grow), $(".avatar-submenu .max-grow").text(e.growDto.nextMinGrom), $(".avatar-submenu .diff-grow").text(e.growDto.nextMinGrom - e.grow), $(".avatar-submenu .grow-progress").attr({
                                max: e.growDto.nextMinGrom,
                                value: e.grow
                            }), 2 == e.userType && ($(".avatar-submenu .identity").text(s.default.anchor), $(".avatar-submenu .identity").show(), $(".avatar-submenu").find(".anchor-center").show()), 3 == e.userType && ($(".avatar-submenu .identity").text(s.default.admin), $(".avatar-submenu .identity").show()), d.storeData.subscribeList && d.storeData.subscribeList.length > 0) {
                            var C = "";
                            try {
                                d.storeData.subscribeList.forEach((function(e) {
                                    var n = "";
                                    e.anchors.map((function(e) {
                                        n += '<img class="avatar lazyload" src="'.concat(t.default.cdn, "/assets/").concat(t.default.env, '/img/avatar.png" data-src="').concat(e.cutOutIcon ? e.cutOutIcon : e.icon, '" data-src-backup="').concat(e.icon, '"  data-roomNum="').concat(e.anchor.roomNum, '">')
                                    })), C += '<div class="subscribe-card">\n          <p class="ellipsis">['.concat(e.categoryName, "]").concat(e.hostName, "VS").concat(e.guestName, '</p>\n          <div class="avatar-list">\n          ').concat(n, "\n          </div>\n        </div>")
                                }))
                            } catch (e) {
                                console.log(e)
                            }
                            $(".header-wrapper .subscribe-data").find(".subscribe-data-box").append(C), $(".header-wrapper .subscribe-data").find(".subscribe-data-box").on("click", ".avatar", (function() {
                                var e = $(this).attr("data-roomNum");
                                window.location.href = u.default.roomUrl(e)
                            })), $(".header-wrapper .subscribe-data").show(), $(".header-wrapper .subscribe-none").hide(), $(".subscribe-submenu").css("right", "70px"), $(".header-wrapper .subscribe-data").find(".more").click((function() {
                                location.href = "/pages/my/subscribe.html"
                            }))
                        } else $(".header-wrapper .subscribe-data").hide(), $(".header-wrapper .subscribe-none").show();
                        a.default.liveAttentionList().then((function(e) {
                            e && (e.comperes || (e.comperes = []), d.storeData.concernList = e.comperes)
                        }))
                    } else $(".header-right .no-login").show();

                    function H() {
                        d.storeData.remeberLogin && 0 !== Object.getOwnPropertyNames(d.storeData.remeberLogin).length && (d.storeData.remeberLogin.phone && d.storeData.remeberLogin.phone.length > 0 ? ($(".login-window .window-inner").find(".country-code").text(d.storeData.remeberLogin.countryCode), $(".login-window .window-inner").find(".input-phone").val(d.storeData.remeberLogin.phone), $(".login-window .window-inner").find(".input-password").val(u.default.aesCbcDecrypt(d.storeData.remeberLogin.password, t.default.remeberKey)), $(".login-window .window-inner").find(".account-box .input-group").addClass("readonly")) : ($(".login-window .window-inner").find(".input-account").val(d.storeData.remeberLogin.account), $(".login-window .window-inner").find(".input-password").val(u.default.aesCbcDecrypt(d.storeData.remeberLogin.password, t.default.remeberKey)), $(".login-window .window-inner").find(".phone-box .input-group").addClass("readonly")), $(".login-window .remeber-box .gou").addClass("active"), U(!0, 1))
                    }

                    function w(e) {
                        var n = "";
                        return $(".".concat(e, "-window .phone-box .input-group")).hasClass("readonly") && (n = "account"), $(".".concat(e, "-window .account-box .input-group")).hasClass("readonly") && (n = "phone"), n
                    }

                    function f(e) {
                        return $(".".concat(e, "-window .type-content"))
                    }

                    function S() {
                        if ($(".login-window .remeber-box .gou").length > 0 && $(".login-window .remeber-box .gou").hasClass("active")) {
                            var e = f("login"),
                                n = {};
                            e.find(".input-account").val() ? n.account = e.find(".input-account").val() : (n.countryCode = e.find(".country-code").text(), n.phone = e.find(".input-phone").val()), n.password = u.default.aesCbcEncrypt(e.find(".input-password").val(), t.default.remeberKey), d.storeData.remeberLogin = n
                        } else d.storeData.remeberLogin = {}
                    }

                    function k(e) {
                        1 == e && ($(".login-window .input-account").val(""), $(".login-window .input-phone").val(""), $(".login-window .input-password").val(""), $(".login-window .country-code").text(s.default.country_code), T(!1, 1), U(!1, 1), $(".login-window").find(".error-tip>span").hide(), H()), 2 == e && ($(".register-window .input-account").val(""), $(".register-window .input-phone").val(""), $(".register-window .input-password").val(""), $(".register-window .input-nickname").val(""), $(".register-window .input-verify").val(""), $(".register-window .country-code").text(s.default.country_code), $(".register-window").find(".input-check").val(""), T(!1, 2), U(!1, 2), $(".register-window").find(".error-tip>span").hide(), n = !1)
                    }

                    function T(e, n) {
                        e ? (1 == n && ($(".login-window .input-password").attr("type", "text"), $(".login-window .ali-zhenyan").show(), $(".login-window .ali-biyan").hide()), 2 == n && ($(".register-window .input-password").attr("type", "text"), $(".register-window .ali-zhenyan").show(), $(".register-window .ali-biyan").hide())) : (1 == n && ($(".login-window .input-password").attr("type", "password"), $(".login-window .ali-zhenyan").hide(), $(".login-window .ali-biyan").show()), 2 == n && ($(".register-window .input-password").attr("type", "password"), $(".register-window .ali-zhenyan").hide(), $(".register-window .ali-biyan").show()))
                    }

                    function U(e, n) {
                        e ? (1 == n && (N = !0), 2 == n && (h = !0)) : (1 == n && (N = !1), 2 == n && (h = !1))
                    }

                    function Y(e) {
                        1 == e ? ($(".login-window").show(), k(1), W(2)) : 2 == e && ($(".register-window").show(), k(2), W(1)), $(".header-modal").show()
                    }

                    function W(e) {
                        1 == e && (k(1), $(".login-window").hide()), 2 == e && (k(2), $(".register-window").hide()), $(".header-modal").hide()
                    }
                    $(".header-logo").click((function() {
                            window.location.origin == t.default.roomDomain ? window.location.href = t.default.indexDomain : window.location.href = "/"
                        })),
                        function() {
                            for (var e = "zh" === s.default.language ? r : i, n = "", o = 0; o < e.length; o++) {
                                n += '<li class="country-code-title"><span>'.concat(e[o].tag, "</span></li>");
                                for (var t = e[o].list, a = 0; a < t.length; a++) "zh" === s.default.language ? n += '<li class="country-code-item"><span class="left">'.concat(t[a].countryName, '</span><span class="right">').concat(t[a].countryCode, "</span></li>") : n += '<li class="country-code-item"><span class="left">'.concat(t[a].countryNameUS, '</span><span class="right">').concat(t[a].countryCode, "</span></li>")
                            }
                            $(".login-window").find(".country-code-list ul").html(n), $(".register-window").find(".country-code-list ul").html(n)
                        }(), $(".download-menu, .download-submenu").mouseover((function() {
                            $(".download-submenu").show()
                        })), $(".download-menu, .download-submenu").mouseout((function() {
                            $(".download-submenu").hide()
                        })), $(".header-subscribe, .subscribe-submenu").mouseover((function() {
                            $(".subscribe-submenu").show()
                        })), $(".header-subscribe, .subscribe-submenu").mouseout((function() {
                            $(".subscribe-submenu").hide()
                        })), $(".header-concern, .concern-submenu").mouseover((function() {
                            $(".concern-submenu").show()
                        })), $(".header-concern, .concern-submenu").mouseout((function() {
                            $(".concern-submenu").hide()
                        })), $(".header-avatar, .avatar-submenu").mouseover((function() {
                            $(".avatar-submenu").show()
                        })), $(".header-avatar, .avatar-submenu").mouseout((function() {
                            $(".avatar-submenu").hide()
                        })), $(".grow-progress, .grow-tip").mouseover((function() {
                            $(".grow-tip").show()
                        })), $(".grow-progress, .grow-tip").mouseout((function() {
                            $(".grow-tip").hide()
                        })), $(".btn-logout").click((function(e) {
                            u.default.stopBubble(e), $(".logout-confirm").show()
                        })), $(".logout-confirm .yes").click((function() {
                            $(".logout-confirm").hide(), a.default.handleUserLogout().then((function(e) {}))
                        })), $(".logout-confirm .no").click((function() {
                            return $(".logout-confirm").hide(), !1
                        })), $(".login-window, .register-window").find(".country-code-box").click((function(e) {
                            u.default.stopBubble(e), $(this).closest(".input-group").find(".country-code-list").show()
                        })), $(".login-window, .register-window").find(".country-code-title").click((function(e) {
                            u.default.stopBubble(e)
                        })), $(".login-window, .register-window").find(".country-code-item").click((function() {
                            var e = $(this).closest(".input-group").find(".country-code"),
                                n = $(this).closest(".input-group").find(".input-phone");
                            e.text($(this).find(".right").text()), "+86" == e.text() ? n.attr("maxlength", 11) : n.attr("maxlength", 20)
                        })), $(".header-login, .login-jump").click((function() {
                            W(2), Y(1)
                        })), $(".header-register, .register-jump").click((function() {
                            W(1), Y(2)
                        })), $(".login-window .close").click((function() {
                            W(1)
                        })), $(".register-window .close").click((function() {
                            W(2)
                        })), $(".login-window .ali-zhenyan").click((function() {
                            T(!1, 1)
                        })), $(".login-window .ali-biyan").click((function() {
                            T(!0, 1)
                        })), $(".register-window .ali-zhenyan").click((function() {
                            T(!1, 2)
                        })), $(".register-window .ali-biyan").click((function() {
                            T(!0, 2)
                        })), $(".register-window .btn-verify").click((function() {
                            if (o) {
                                var e = {
                                    countryCode: $(".register-window .country-code").text(),
                                    phone: $(".register-window .input-phone").val(),
                                    type: 1
                                };
                                a.default.getSmsCode(e).then((function(e) {
                                    n = !0, o = !1, m = 60, l = setInterval((function() {
                                        m--, $(".register-window .verify-text").text(m + "s"), m <= 0 && (o = !0, n ? $(".register-window .verify-text").text(s.default.input_verify_resend) : $(".register-window .verify-text").text(s.default.input_verify_btn), clearInterval(l))
                                    }), 1e3)
                                }))
                            }
                        })), $(".login-window").find(".forget").click((function() {
                            location.href = "/pages/forgetPwd.html"
                        })), $(".login-window").find("input").on("input", (function() {
                            ! function() {
                                var e = f("login"),
                                    n = e.find(".country-code").text(),
                                    o = e.find(".input-phone").val(),
                                    t = e.find(".input-password").val(),
                                    a = e.find(".input-account").val();
                                o ? ($(".login-window .account-box .input-group").addClass("readonly"), $(".login-window .account-box .input-account").attr("readonly", !0), e.find(".account-box>.error-tip>span").hide()) : ($(".login-window .account-box .input-group").removeClass("readonly"), $(".login-window .account-box .input-account").attr("readonly", !1)), a ? ($(".login-window .phone-box .input-group").addClass("readonly"), $(".login-window .phone-box .input-phone").attr("readonly", !0), e.find(".phone-box>.error-tip>span").hide()) : ($(".login-window .phone-box .input-group").removeClass("readonly"), $(".login-window .phone-box .input-phone").attr("readonly", !1));
                                var r = [];
                                y.default.password(t) && (e.find(".password-box>.error-tip>span").hide(), r.password = !0), "account" === w("login") ? (y.default.account(a) && (e.find(".account-box>.error-tip>span").hide(), r.account = !0), r.account && r.password ? U(!0, 1) : U(!1, 1)) : "phone" === w("login") && (y.default.specialCountryCodePhone(n, o) && (e.find(".phone-box>.error-tip>span").hide(), r.countryCodePhone = !0), r.countryCodePhone && r.password ? U(!0, 1) : U(!1, 1))
                            }()
                        })), $(".register-window").find("input").on("input", (function() {
                            ! function() {
                                var e = f("register"),
                                    n = e.find(".country-code").text(),
                                    o = e.find(".input-phone").val(),
                                    t = e.find(".input-verify").val(),
                                    a = e.find(".input-nickname").val(),
                                    r = e.find(".input-password").val(),
                                    i = e.find(".check-box .input-check").val(),
                                    c = e.find(".input-account").val();
                                o ? ($(".register-window .account-box .input-group").addClass("readonly"), $(".register-window .account-box .input-account").attr("readonly", !0), u.default.isSpecialCode(n) || $(".register-window .verify-box").show(), $(".register-window .check-box").show(), e.find(".account-box>.error-tip>span").hide()) : ($(".register-window .verify-box").hide(), $(".register-window .check-box").hide(), $(".register-window .account-box .input-group").removeClass("readonly"), $(".register-window .account-box .input-account").attr("readonly", !1)), c ? ($(".register-window .phone-box .input-group").addClass("readonly"), $(".register-window .phone-box .input-phone").attr("readonly", !0), e.find(".phone-box>.error-tip>span").hide(), e.find(".captcahr-box").show()) : ($(".register-window .phone-box .input-group").removeClass("readonly"), $(".register-window .phone-box .input-phone").attr("readonly", !1), e.find(".captcahr-box").hide());
                                var d = [];
                                y.default.nickname(a) && (e.find(".nickname-box>.error-tip>span").hide(), d.nickname = !0), y.default.password(r) && (e.find(".password-box>.error-tip>span").hide(), d.password = !0), "account" === w("register") ? (y.default.account(c) && (e.find(".account-box>.error-tip>span").hide(), d.account = !0), d.nickname && d.password && d.account ? U(!0, 2) : U(!1, 2)) : "phone" === w("register") && (y.default.countryCodePhone(n, o) && (e.find(".phone-box>.error-tip>span").hide(), d.countryCodePhone = !0), y.default.smsCode(t) && (e.find(".verify-box>.error-tip>span").hide(), d.smsCode = !0), y.default.imgCode(i) && (e.find(".check-box>.error-tip>span").hide(), d.check = !0), d.countryCodePhone && d.smsCode && d.nickname && d.password && d.check ? U(!0, 2) : U(!1, 2))
                            }()
                        })), H(), $(".header-window").find(".input-password").blur((function() {
                            y.default.password($(this).val()) || $(this).closest(".input-group").next(".error-tip").find("span").show()
                        })), $(".header-window").find(".input-account").blur((function() {
                            y.default.account($(this).val()) || $(this).closest(".input-group").next(".error-tip").find("span").show(), f("register").find(".captcahr-box .check-img").click()
                        })), $(".login-window").find(".input-phone").blur((function() {
                            var e = $(this).closest(".input-group");
                            y.default.specialCountryCodePhone(e.find(".country-code").text(), $(this).val()) || $(this).closest(".input-group").next(".error-tip").find("span").show()
                        })), $(".register-window").find(".input-phone").blur((function() {
                            var e = $(this).closest(".input-group");
                            y.default.countryCodePhone(e.find(".country-code").text(), $(this).val()) || $(this).closest(".input-group").next(".error-tip").find("span").show(), "phone" === w("register") && f("register").find(".check-box .check-img").click()
                        })), $(".register-window .input-verify").blur((function() {
                            y.default.smsCode($(this).val()) || $(this).closest(".input-group").next(".error-tip").find("span").show()
                        })), $(".register-window .input-nickname").blur((function() {
                            y.default.nickname($(this).val()) || $(this).closest(".input-group").next(".error-tip").find("span").show()
                        })), $(".register-window").find(".check-box .input-check").blur((function() {
                            y.default.imgCode($(this).val()) || $(this).closest(".input-group").next(".error-tip").find("span").show()
                        })), $(".register-window").find(".captcahr-box .input-check").blur((function() {
                            y.default.imgCode($(this).val()) || $(this).closest(".input-group").next(".error-tip").find("span").show()
                        })), $(".login-agree>.highlight, .register-agree>.highlight").click((function() {
                            window.open("/agreement.html")
                        })), $(".agreement .forget").click((function() {
                            window.open("/pages/forgetPwd.html")
                        })), $(".login-window .submit").click((function() {
                            var e = f("login");
                            if (N) {
                                var n = 2;
                                "fy" !== t.default.env && "sy" !== t.default.env && "88" !== t.default.env || (n = 1);
                                var o = u.default.md5Pwd(e.find(".input-password").val(), n);
                                if ("account" === w("login")) {
                                    var r = {
                                        accountType: 2,
                                        loginName: e.find(".input-account").val(),
                                        loginMode: 1,
                                        loginType: 1,
                                        password: o,
                                        pwdType: n
                                    };
                                    S(), a.default.handleUserLogin(r).then((function(e) {
                                        W(1)
                                    })).catch((function(e) {}))
                                } else if ("phone" === w("login")) {
                                    var i = {
                                        accountType: 1,
                                        countryCode: e.find(".country-code").text(),
                                        phone: e.find(".input-phone").val(),
                                        loginMode: 1,
                                        loginType: 1,
                                        password: o,
                                        pwdType: n
                                    };
                                    S(), a.default.handleUserLogin(i).then((function(e) {
                                        W(1)
                                    })).catch((function(e) {}))
                                }
                            }
                        })), $(".register-window .submit").click((function() {
                            var e = f("register");
                            if (h && y.default.submitNickname(e.find(".input-nickname").val())) {
                                var n = 2;
                                "fy" !== t.default.env && "sy" !== t.default.env && "88" !== t.default.env || (n = 1);
                                var o = u.default.md5Pwd(e.find(".input-password").val(), n);
                                if ("account" === w("register")) {
                                    var r = {
                                        accountType: 2,
                                        loginName: e.find(".input-account").val(),
                                        password: o,
                                        nickName: e.find(".input-nickname").val(),
                                        pwdType: n
                                    };
                                    a.default.handleUserRegister(r).then((function(e) {
                                        Object(c.Msg)({
                                            message: s.default.register + s.default.success
                                        }), W(2)
                                    }))
                                } else if ("phone" === w("register")) {
                                    var i = {
                                        countryCode: e.find(".country-code").text(),
                                        phone: e.find(".input-phone").val(),
                                        type: 1,
                                        smsCode: e.find(".input-verify").val()
                                    };
                                    a.default.checkSmsCode(i).then((function(t) {
                                        var r = {
                                            accountType: 1,
                                            countryCode: e.find(".country-code").text(),
                                            phone: e.find(".input-phone").val(),
                                            smsType: 1,
                                            smsCode: e.find(".input-verify").val(),
                                            password: o,
                                            nickName: e.find(".input-nickname").val(),
                                            pwdType: n,
                                            kaptcha: e.find(".input-phone").val() ? e.find(".check-box .input-check").val() : e.find(".captcahr-box .input-check").val()
                                        };
                                        a.default.handleUserRegister(r).then((function(e) {
                                            Object(c.Msg)({
                                                message: s.default.register + s.default.success
                                            }), W(2)
                                        })).catch((function(n) {
                                            e.find(".check-box .check-img").click()
                                        }))
                                    })).catch((function(n) {
                                        e.find(".check-box .check-img").click()
                                    }))
                                }
                            }
                        })), u.default.loadImg("avatar", ".header-wrapper "), $(".register-window .check-box .check-img").click((function() {
                            var e = $(".register-window").find(".phone-box .input-phone").val();
                            $(".register-window .check-box .check-img").attr("src", "".concat(t.default.baseUrl, "/api/kaptcha?t=").concat((new Date).getTime(), "&mobile=").concat(e))
                        })), $(".register-window .captcahr-box .check-img").click((function() {
                            var e = $(".register-window").find(".phone-box .input-account").val();
                            $(".register-window .captcahr-box .check-img").attr("src", "".concat(t.default.baseUrl, "/api/kaptcha?t=").concat((new Date).getTime(), "&mobile=").concat(e))
                        })), $(".login-window .remeber-box .gou").click((function() {
                            $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active")
                        }))
                })), d.storeData.newMsg) {
                var m = d.storeData.newMsg;
                d.storeData.newMsg = 0, d.storeData.newMsg = m
            }
            if (d.storeData.feedbackMsg) {
                var l = d.storeData.feedbackMsg;
                d.storeData.feedbackMsg = 0, d.storeData.feedbackMsg = l
            }
            if (d.storeData.privateMsg) {
                var N = d.storeData.privateMsg;
                d.storeData.privateMsg = 0, d.storeData.privateMsg = N
            }
            console.log("$header end")
        },
        19: function(e, n) {},
        34: function(e) {
            e.exports = JSON.parse('[{"tag":"A","title":"A","list":[{"countryCode":"+20","countryName":"埃及","countryNameUS":"Egypt","countryNameTW":"埃及","pinYinHead":"A","englishHead":"E","strokeCount":10},{"countryCode":"+43","countryName":"奥地利","countryNameUS":"Austria","countryNameTW":"奧地利","pinYinHead":"A","englishHead":"A","strokeCount":14},{"countryCode":"+54","countryName":"阿根廷","countryNameUS":"Argentina","countryNameTW":"阿根廷","pinYinHead":"A","englishHead":"A","strokeCount":7},{"countryCode":"+61","countryName":"澳大利亚","countryNameUS":"Australia","countryNameTW":"澳大利亞","pinYinHead":"A","englishHead":"A","strokeCount":15},{"countryCode":"+93","countryName":"阿富汗","countryNameUS":"Afghanistan","countryNameTW":"阿富汗","pinYinHead":"A","englishHead":"A","strokeCount":7},{"countryCode":"+213","countryName":"阿尔及利亚","countryNameUS":"Algeria","countryNameTW":"阿爾及利亞","pinYinHead":"A","englishHead":"A","strokeCount":7},{"countryCode":"+244","countryName":"安哥拉","countryNameUS":"Angola","countryNameTW":"安哥拉","pinYinHead":"A","englishHead":"A","strokeCount":6},{"countryCode":"+247","countryName":"阿森松","countryNameUS":"Ascension","countryNameTW":"阿森松島","pinYinHead":"A","englishHead":"A","strokeCount":7},{"countryCode":"+251","countryName":"埃塞俄比亚","countryNameUS":"Ethiopia","countryNameTW":"衣索比亞","pinYinHead":"A","englishHead":"E","strokeCount":6},{"countryCode":"+353","countryName":"爱尔兰","countryNameUS":"Ireland","countryNameTW":"愛爾蘭","pinYinHead":"A","englishHead":"I","strokeCount":13},{"countryCode":"+355","countryName":"阿尔巴尼亚","countryNameUS":"Albania","countryNameTW":"阿爾巴尼亞","pinYinHead":"A","englishHead":"A","strokeCount":7},{"countryCode":"+372","countryName":"爱沙尼亚","countryNameUS":"Estonia","countryNameTW":"愛沙尼亞","pinYinHead":"A","englishHead":"E","strokeCount":13},{"countryCode":"+376","countryName":"安道尔共和国","countryNameUS":"Andorra","countryNameTW":"安道爾親王國","pinYinHead":"A","englishHead":"A","strokeCount":6},{"countryCode":"+853","countryName":"澳门","countryNameUS":"Macao","countryNameTW":"澳門","pinYinHead":"A","englishHead":"M","strokeCount":15},{"countryCode":"+968","countryName":"阿曼","countryNameUS":"Oman","countryNameTW":"阿曼","pinYinHead":"A","englishHead":"O","strokeCount":7},{"countryCode":"+971","countryName":"阿拉伯联合酋长国","countryNameUS":"United Arab Emirates","countryNameTW":"阿拉伯聯合大公國","pinYinHead":"A","englishHead":"U","strokeCount":7},{"countryCode":"+994","countryName":"阿塞拜疆","countryNameUS":"Azerbaijan","countryNameTW":"亞塞拜然","pinYinHead":"A","englishHead":"A","strokeCount":8},{"countryCode":"+1264","countryName":"安圭拉岛","countryNameUS":"Anguilla","countryNameTW":"安圭拉","pinYinHead":"A","englishHead":"A","strokeCount":6},{"countryCode":"+1268","countryName":"安提瓜和巴布达","countryNameUS":"Antigua and Barbuda","countryNameTW":"安地卡及巴布達","pinYinHead":"A","englishHead":"A","strokeCount":6}]},{"tag":"B","title":"B","list":[{"countryCode":"+32","countryName":"比利时","countryNameUS":"Belgium","countryNameTW":"比利時","pinYinHead":"B","englishHead":"B","strokeCount":4},{"countryCode":"+48","countryName":"波兰","countryNameUS":"Poland","countryNameTW":"波蘭","pinYinHead":"B","englishHead":"P","strokeCount":8},{"countryCode":"+55","countryName":"巴西","countryNameUS":"Brazil","countryNameTW":"巴西","pinYinHead":"B","englishHead":"B","strokeCount":4},{"countryCode":"+92","countryName":"巴基斯坦","countryNameUS":"Pakistan","countryNameTW":"巴基斯坦","pinYinHead":"B","englishHead":"P","strokeCount":4},{"countryCode":"+226","countryName":"布基纳法索","countryNameUS":"Burkina Faso","countryNameTW":"布吉納法索","pinYinHead":"B","englishHead":"B","strokeCount":5},{"countryCode":"+229","countryName":"贝宁","countryNameUS":"Benin","countryNameTW":"貝寧","pinYinHead":"B","englishHead":"B","strokeCount":7},{"countryCode":"+257","countryName":"布隆迪","countryNameUS":"Burundi","countryNameTW":"蒲隆地","pinYinHead":"B","englishHead":"B","strokeCount":13},{"countryCode":"+267","countryName":"博茨瓦纳","countryNameUS":"Botswana","countryNameTW":"波札那","pinYinHead":"B","englishHead":"B","strokeCount":8},{"countryCode":"+354","countryName":"冰岛","countryNameUS":"Iceland","countryNameTW":"冰島","pinYinHead":"B","englishHead":"I","strokeCount":6},{"countryCode":"+359","countryName":"保加利亚","countryNameUS":"Bulgaria","countryNameTW":"保加利亞","pinYinHead":"B","englishHead":"B","strokeCount":9},{"countryCode":"+375","countryName":"白俄罗斯","countryNameUS":"Belarus","countryNameTW":"白俄羅斯","pinYinHead":"B","englishHead":"B","strokeCount":5},{"countryCode":"+501","countryName":"伯利兹","countryNameUS":"Belize","countryNameTW":"貝里斯","pinYinHead":"B","englishHead":"B","strokeCount":7},{"countryCode":"+507","countryName":"巴拿马","countryNameUS":"Panama","countryNameTW":"巴拿馬","pinYinHead":"B","englishHead":"P","strokeCount":4},{"countryCode":"+591","countryName":"玻利维亚","countryNameUS":"Bolivia","countryNameTW":"玻利維亞","pinYinHead":"B","englishHead":"B","strokeCount":9},{"countryCode":"+595","countryName":"巴拉圭","countryNameUS":"Paraguay","countryNameTW":"巴拉圭","pinYinHead":"B","englishHead":"P","strokeCount":4},{"countryCode":"+675","countryName":"巴布亚新几内亚","countryNameUS":"Papua New Cuinea","countryNameTW":"巴布亞紐幾內亞","pinYinHead":"B","englishHead":"P","strokeCount":4},{"countryCode":"+973","countryName":"巴林","countryNameUS":"Bahrain","countryNameTW":"巴林","pinYinHead":"B","englishHead":"B","strokeCount":4},{"countryCode":"+1242","countryName":"巴哈马","countryNameUS":"Bahamas","countryNameTW":"巴哈馬","pinYinHead":"B","englishHead":"B","strokeCount":4},{"countryCode":"+1246","countryName":"巴巴多斯","countryNameUS":"Barbados","countryNameTW":"巴貝多","pinYinHead":"B","englishHead":"B","strokeCount":4},{"countryCode":"+1441","countryName":"百慕大群岛","countryNameUS":"Bermuda Islands","countryNameTW":"百慕達","pinYinHead":"B","englishHead":"B","strokeCount":6},{"countryCode":"+1787","countryName":"波多黎各","countryNameUS":"PuertoRico","countryNameTW":"波多黎各","pinYinHead":"B","englishHead":"P","strokeCount":8}]},{"tag":"C","title":"C","list":[{"countryCode":"+850","countryName":"朝鲜","countryNameUS":"North Korea","countryNameTW":"北韓","pinYinHead":"C","englishHead":"N","strokeCount":5}]},{"tag":"D","title":"D","list":[{"countryCode":"+45","countryName":"丹麦","countryNameUS":"Denmark","countryNameTW":"丹麥","pinYinHead":"D","englishHead":"D","strokeCount":4},{"countryCode":"+49","countryName":"德国","countryNameUS":"Germany","countryNameTW":"德國","pinYinHead":"D","englishHead":"G","strokeCount":15},{"countryCode":"+228","countryName":"多哥","countryNameUS":"Togo","countryNameTW":"多哥","pinYinHead":"D","englishHead":"T","strokeCount":6},{"countryCode":"+684","countryName":"东萨摩亚(美)","countryNameUS":"Samoa Eastern","countryNameTW":"東薩摩亞(美)","pinYinHead":"D","englishHead":"S","strokeCount":8},{"countryCode":"+1890","countryName":"多米尼加共和国","countryNameUS":"Dominica Republic","countryNameTW":"多明尼加","pinYinHead":"D","englishHead":"D","strokeCount":6}]},{"tag":"E","title":"E","list":[{"countryCode":"+7","countryName":"俄罗斯","countryNameUS":"Russia","countryNameTW":"俄羅斯","pinYinHead":"E","englishHead":"R","strokeCount":9},{"countryCode":"+593","countryName":"厄瓜多尔","countryNameUS":"Ecuador","countryNameTW":"厄瓜多","pinYinHead":"E","englishHead":"E","strokeCount":4}]},{"tag":"F","title":"F","list":[{"countryCode":"+33","countryName":"法国","countryNameUS":"France","countryNameTW":"法國","pinYinHead":"F","englishHead":"F","strokeCount":8},{"countryCode":"+63","countryName":"菲律宾","countryNameUS":"Philippines","countryNameTW":"菲律賓","pinYinHead":"F","englishHead":"P","strokeCount":11},{"countryCode":"+358","countryName":"芬兰","countryNameUS":"Finland","countryNameTW":"芬蘭","pinYinHead":"F","englishHead":"F","strokeCount":7},{"countryCode":"+594","countryName":"法属圭亚那","countryNameUS":"French Guiana","countryNameTW":"法屬圭亞那","pinYinHead":"F","englishHead":"F","strokeCount":8},{"countryCode":"+679","countryName":"斐济","countryNameUS":"Fiji","countryNameTW":"斐濟","pinYinHead":"F","englishHead":"F","strokeCount":12},{"countryCode":"+689","countryName":"法属玻利尼西亚","countryNameUS":"French Polynesia","countryNameTW":"法屬玻里尼西亞","pinYinHead":"F","englishHead":"F","strokeCount":8}]},{"tag":"G","title":"G","list":[{"countryCode":"+53","countryName":"古巴","countryNameUS":"Cuba","countryNameTW":"古巴","pinYinHead":"G","englishHead":"C","strokeCount":5},{"countryCode":"+57","countryName":"哥伦比亚","countryNameUS":"Colombia","countryNameTW":"哥倫比亞","pinYinHead":"G","englishHead":"C","strokeCount":10},{"countryCode":"+220","countryName":"冈比亚","countryNameUS":"Gambia","countryNameTW":"岡比亞","pinYinHead":"G","englishHead":"G","strokeCount":8},{"countryCode":"+242","countryName":"刚果","countryNameUS":"Congo","countryNameTW":"剛果","pinYinHead":"G","englishHead":"C","strokeCount":10},{"countryCode":"+506","countryName":"哥斯达黎加","countryNameUS":"Costa Rica","countryNameTW":"哥斯大黎加","pinYinHead":"G","englishHead":"C","strokeCount":10},{"countryCode":"+592","countryName":"圭亚那","countryNameUS":"Guyana","countryNameTW":"蓋亞那","pinYinHead":"G","englishHead":"G","strokeCount":13},{"countryCode":"+995","countryName":"格鲁吉亚","countryNameUS":"Georgia","countryNameTW":"喬治亞","pinYinHead":"G","englishHead":"G","strokeCount":12},{"countryCode":"+1671","countryName":"关岛","countryNameUS":"Guam","countryNameTW":"關島","pinYinHead":"G","englishHead":"G","strokeCount":19},{"countryCode":"+1809","countryName":"格林纳达","countryNameUS":"Grenada","countryNameTW":"格瑞那達","pinYinHead":"G","englishHead":"G","strokeCount":10}]},{"tag":"H","title":"H","list":[{"countryCode":"+31","countryName":"荷兰","countryNameUS":"Netherlands","countryNameTW":"荷蘭","pinYinHead":"H","englishHead":"N","strokeCount":10},{"countryCode":"+82","countryName":"韩国","countryNameUS":"South Korea","countryNameTW":"韓國","pinYinHead":"H","englishHead":"K","strokeCount":17},{"countryCode":"+327","countryName":"哈萨克斯坦","countryNameUS":"Kazakstan","countryNameTW":"哈薩克","pinYinHead":"H","englishHead":"K","strokeCount":9},{"countryCode":"+504","countryName":"洪都拉斯","countryNameUS":"Honduras","countryNameTW":"宏都拉斯","pinYinHead":"H","englishHead":"H","strokeCount":7},{"countryCode":"+509","countryName":"海地","countryNameUS":"Haiti","countryNameTW":"海地","pinYinHead":"H","englishHead":"H","strokeCount":10},{"countryCode":"+599","countryName":"荷属安的列斯","countryNameUS":"Netherlands Antilles","countryNameTW":"荷屬安地列斯","pinYinHead":"H","englishHead":"N","strokeCount":10},{"countryCode":"+382","countryName":"黑山共和国","countryNameUS":"Montenegro","countryNameTW":"蒙特內哥羅","pinYinHead":"H","englishHead":"M","strokeCount":13}]},{"tag":"J","title":"J","list":[{"countryCode":"+1","countryName":"加拿大","countryNameUS":"Canada","countryNameTW":"加拿大","pinYinHead":"J","englishHead":"C","strokeCount":5},{"countryCode":"+224","countryName":"几内亚","countryNameUS":"Guinea","countryNameTW":"幾內亞","pinYinHead":"J","englishHead":"G","strokeCount":12},{"countryCode":"+233","countryName":"加纳","countryNameUS":"Ghana","countryNameTW":"迦納","pinYinHead":"J","englishHead":"G","strokeCount":8},{"countryCode":"+241","countryName":"加蓬","countryNameUS":"Gabon","countryNameTW":"加彭","pinYinHead":"J","englishHead":"G","strokeCount":5},{"countryCode":"+253","countryName":"吉布提","countryNameUS":"Djibouti","countryNameTW":"吉布地","pinYinHead":"J","englishHead":"D","strokeCount":6},{"countryCode":"+263","countryName":"津巴布韦","countryNameUS":"Zimbabwe","countryNameTW":"辛巴威","pinYinHead":"J","englishHead":"Z","strokeCount":7},{"countryCode":"+331","countryName":"吉尔吉斯坦","countryNameUS":"Kyrgyzstan","countryNameTW":"吉爾吉斯","pinYinHead":"J","englishHead":"K","strokeCount":6},{"countryCode":"+420","countryName":"捷克","countryNameUS":"Czech Republic","countryNameTW":"捷克","pinYinHead":"J","englishHead":"C","strokeCount":11},{"countryCode":"+855","countryName":"柬埔寨","countryNameUS":"Cambodia ","countryNameTW":"柬埔寨","pinYinHead":"J","englishHead":"C","strokeCount":9}]},{"tag":"K","title":"K","list":[{"countryCode":"+225","countryName":"科特迪瓦","countryNameUS":"Ivory Coast","countryNameTW":"象牙海岸","pinYinHead":"K","englishHead":"I","strokeCount":11},{"countryCode":"+237","countryName":"喀麦隆","countryNameUS":"Cameroon","countryNameTW":"喀麥隆","pinYinHead":"K","englishHead":"C","strokeCount":12},{"countryCode":"+254","countryName":"肯尼亚","countryNameUS":"Kenya","countryNameTW":"肯亞","pinYinHead":"K","englishHead":"K","strokeCount":8},{"countryCode":"+682","countryName":"库克群岛","countryNameUS":"Cook Islands","countryNameTW":"庫克群島","pinYinHead":"K","englishHead":"C","strokeCount":10},{"countryCode":"+965","countryName":"科威特","countryNameUS":"Kuwait","countryNameTW":"科威特","pinYinHead":"K","englishHead":"K","strokeCount":9},{"countryCode":"+974","countryName":"卡塔尔","countryNameUS":"Qatar","countryNameTW":"卡達","pinYinHead":"K","englishHead":"Q","strokeCount":5},{"countryCode":"+1345","countryName":"开曼群岛","countryNameUS":"Cayman Islands","countryNameTW":"開曼群島","pinYinHead":"K","englishHead":"C","strokeCount":12}]},{"tag":"L","title":"L","list":[{"countryCode":"+40","countryName":"罗马尼亚","countryNameUS":"Romania","countryNameTW":"羅馬尼亞","pinYinHead":"L","englishHead":"R","strokeCount":19},{"countryCode":"+218","countryName":"利比亚","countryNameUS":"Libya","countryNameTW":"利比亞","pinYinHead":"L","englishHead":"L","strokeCount":7},{"countryCode":"+231","countryName":"利比里亚","countryNameUS":"Liberia","countryNameTW":"賴比瑞亞","pinYinHead":"L","englishHead":"L","strokeCount":16},{"countryCode":"+262","countryName":"留尼旺","countryNameUS":"Reunion","countryNameTW":"留尼旺","pinYinHead":"L","englishHead":"R","strokeCount":10},{"countryCode":"+266","countryName":"莱索托","countryNameUS":"Lesotho","countryNameTW":"萊索托","pinYinHead":"L","englishHead":"L","strokeCount":11},{"countryCode":"+352","countryName":"卢森堡","countryNameUS":"Luxembourg","countryNameTW":"盧森堡","pinYinHead":"L","englishHead":"L","strokeCount":16},{"countryCode":"+370","countryName":"立陶宛","countryNameUS":"Lithuania","countryNameTW":"立陶宛","pinYinHead":"L","englishHead":"L","strokeCount":5},{"countryCode":"+371","countryName":"拉脱维亚","countryNameUS":"Latvia","countryNameTW":"拉脫維亞","pinYinHead":"L","englishHead":"L","strokeCount":8},{"countryCode":"+423","countryName":"列支敦士登","countryNameUS":"Liechtenstein","countryNameTW":"列支敦斯登","pinYinHead":"L","englishHead":"L","strokeCount":6},{"countryCode":"+856","countryName":"老挝","countryNameUS":"Laos","countryNameTW":"寮國","pinYinHead":"L","englishHead":"L","strokeCount":15},{"countryCode":"+961","countryName":"黎巴嫩","countryNameUS":"Lebanon","countryNameTW":"黎巴嫩","pinYinHead":"L","englishHead":"L","strokeCount":15}]},{"tag":"M","title":"M","list":[{"countryCode":"+1","countryName":"美国","countryNameUS":"United States of America","countryNameTW":"美國","pinYinHead":"M","englishHead":"U","strokeCount":9},{"countryCode":"+51","countryName":"秘鲁","countryNameUS":"Peru","countryNameTW":"秘魯","pinYinHead":"M","englishHead":"P","strokeCount":10},{"countryCode":"+52","countryName":"墨西哥","countryNameUS":"Mexico","countryNameTW":"墨西哥","pinYinHead":"M","englishHead":"M","strokeCount":15},{"countryCode":"+60","countryName":"马来西亚","countryNameUS":"Malaysia","countryNameTW":"馬來西亞","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+95","countryName":"缅甸","countryNameUS":"Myanmar","countryNameTW":"緬甸","pinYinHead":"M","englishHead":"M","strokeCount":15},{"countryCode":"+212","countryName":"摩洛哥","countryNameUS":"Morocco","countryNameTW":"摩洛哥","pinYinHead":"M","englishHead":"M","strokeCount":15},{"countryCode":"+223","countryName":"马里","countryNameUS":"Mali","countryNameTW":"馬利共和國","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+230","countryName":"毛里求斯","countryNameUS":"Mauritius","countryNameTW":"模里西斯","pinYinHead":"M","englishHead":"M","strokeCount":14},{"countryCode":"+258","countryName":"莫桑比克","countryNameUS":"Mozambique","countryNameTW":"莫三比克","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+261","countryName":"马达加斯加","countryNameUS":"Madagascar","countryNameTW":"馬達加斯加","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+265","countryName":"马拉维","countryNameUS":"Malawi","countryNameTW":"馬拉威","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+356","countryName":"马耳他","countryNameUS":"Malta","countryNameTW":"馬爾他","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+373","countryName":"摩尔多瓦","countryNameUS":"Moldova","countryNameTW":"摩爾多瓦","pinYinHead":"M","englishHead":"M","strokeCount":15},{"countryCode":"+377","countryName":"摩纳哥","countryNameUS":"Monaco","countryNameTW":"摩納哥","pinYinHead":"M","englishHead":"M","strokeCount":15},{"countryCode":"+596","countryName":"马提尼克","countryNameUS":"Martinique","countryNameTW":"馬丁尼克","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+880","countryName":"孟加拉国","countryNameUS":"Bangladesh","countryNameTW":"孟加拉","pinYinHead":"M","englishHead":"B","strokeCount":8},{"countryCode":"+960","countryName":"马尔代夫","countryNameUS":"Maldives","countryNameTW":"馬爾地夫","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+976","countryName":"蒙古","countryNameUS":"Mongolia","countryNameTW":"蒙古","pinYinHead":"M","englishHead":"M","strokeCount":13},{"countryCode":"+1664","countryName":"蒙特塞拉特岛","countryNameUS":"Montserrat Islands","countryNameTW":"蒙哲臘","pinYinHead":"M","englishHead":"M","strokeCount":13},{"countryCode":"+1670","countryName":"马里亚那群岛","countryNameUS":"Mariana Islands","countryNameTW":"馬里亞納群島","pinYinHead":"M","englishHead":"M","strokeCount":10}]},{"tag":"N","title":"N","list":[{"countryCode":"+27","countryName":"南非","countryNameUS":"South Africa","countryNameTW":"南非","pinYinHead":"N","englishHead":"S","strokeCount":9},{"countryCode":"+47","countryName":"挪威","countryNameUS":"Norway","countryNameTW":"挪威","pinYinHead":"N","englishHead":"N","strokeCount":9},{"countryCode":"+227","countryName":"尼日尔","countryNameUS":"Niger","countryNameTW":"尼日","pinYinHead":"N","englishHead":"N","strokeCount":5},{"countryCode":"+234","countryName":"尼日利亚","countryNameUS":"Nigeria","countryNameTW":"奈及利亞","pinYinHead":"N","englishHead":"N","strokeCount":8},{"countryCode":"+264","countryName":"纳米比亚","countryNameUS":"Namibia","countryNameTW":"納米比亞","pinYinHead":"N","englishHead":"N","strokeCount":10},{"countryCode":"+505","countryName":"尼加拉瓜","countryNameUS":"Nicaragua","countryNameTW":"尼加拉瓜","pinYinHead":"N","englishHead":"N","strokeCount":5},{"countryCode":"+674","countryName":"瑙鲁","countryNameUS":"Nauru","countryNameTW":"諾魯","pinYinHead":"N","englishHead":"N","strokeCount":15},{"countryCode":"+977","countryName":"尼泊尔","countryNameUS":"Nepal","countryNameTW":"尼泊爾","pinYinHead":"N","englishHead":"N","strokeCount":5}]},{"tag":"P","title":"P","list":[{"countryCode":"+351","countryName":"葡萄牙","countryNameUS":"Portugal","countryNameTW":"葡萄牙","pinYinHead":"P","englishHead":"P","strokeCount":12}]},{"tag":"R","title":"R","list":[{"countryCode":"+41","countryName":"瑞士","countryNameUS":"Switzerland","countryNameTW":"瑞士","pinYinHead":"R","englishHead":"S","strokeCount":13},{"countryCode":"+46","countryName":"瑞典","countryNameUS":"Sweden","countryNameTW":"瑞典","pinYinHead":"R","englishHead":"S","strokeCount":13},{"countryCode":"+81","countryName":"日本","countryNameUS":"Japan","countryNameTW":"日本","pinYinHead":"R","englishHead":"J","strokeCount":4}]},{"tag":"S","title":"S","list":[{"countryCode":"+94","countryName":"斯里兰卡","countryNameUS":"Sri Lanka","countryNameTW":"斯里蘭卡","pinYinHead":"S","englishHead":"S","strokeCount":12},{"countryCode":"+221","countryName":"塞内加尔","countryNameUS":"Senegal","countryNameTW":"塞內加爾","pinYinHead":"S","englishHead":"S","strokeCount":13},{"countryCode":"+232","countryName":"塞拉利昂","countryNameUS":"Sierra Leone","countryNameTW":"獅子山共和國","pinYinHead":"S","englishHead":"S","strokeCount":13},{"countryCode":"+239","countryName":"圣多美和普林西比","countryNameUS":"Sao Tome and Principe","countryNameTW":"聖多美普林西比","pinYinHead":"S","englishHead":"S","strokeCount":13},{"countryCode":"+248","countryName":"塞舌尔","countryNameUS":"Seychelles","countryNameTW":"塞席爾","pinYinHead":"S","englishHead":"S","strokeCount":13},{"countryCode":"+249","countryName":"苏丹","countryNameUS":"Sudan","countryNameTW":"蘇丹","pinYinHead":"S","englishHead":"S","strokeCount":19},{"countryCode":"+252","countryName":"索马里","countryNameUS":"Somali","countryNameTW":"索馬利亞","pinYinHead":"S","englishHead":"S","strokeCount":10},{"countryCode":"+268","countryName":"斯威士兰","countryNameUS":"Swaziland","countryNameTW":"史瓦濟蘭","pinYinHead":"S","englishHead":"S","strokeCount":5},{"countryCode":"+357","countryName":"塞浦路斯","countryNameUS":"Cyprus","countryNameTW":"賽普勒斯","pinYinHead":"S","englishHead":"C","strokeCount":17},{"countryCode":"+378","countryName":"圣马力诺","countryNameUS":"San Marino","countryNameTW":"聖馬利諾","pinYinHead":"S","englishHead":"S","strokeCount":13},{"countryCode":"+386","countryName":"斯洛文尼亚","countryNameUS":"Slovenia","countryNameTW":"斯洛維尼亞","pinYinHead":"S","englishHead":"S","strokeCount":12},{"countryCode":"+421","countryName":"斯洛伐克","countryNameUS":"Slovakia","countryNameTW":"斯洛伐克","pinYinHead":"S","englishHead":"S","strokeCount":12},{"countryCode":"+503","countryName":"萨尔瓦多","countryNameUS":"EISalvador","countryNameTW":"薩爾瓦多","pinYinHead":"S","englishHead":"E","strokeCount":16},{"countryCode":"+597","countryName":"苏里南","countryNameUS":"Suriname","countryNameTW":"蘇利南","pinYinHead":"S","englishHead":"S","strokeCount":19},{"countryCode":"+677","countryName":"所罗门群岛","countryNameUS":"Solomon Islands","countryNameTW":"索羅門群島","pinYinHead":"S","englishHead":"S","strokeCount":10},{"countryCode":"+966","countryName":"沙特阿拉伯","countryNameUS":"Saudi Arabia","countryNameTW":"沙烏地阿拉伯","pinYinHead":"S","englishHead":"S","strokeCount":7},{"countryCode":"+1758","countryName":"圣卢西亚","countryNameUS":"Saint Lucia","countryNameTW":"聖露西亞","pinYinHead":"S","englishHead":"S","strokeCount":13},{"countryCode":"+1784","countryName":"圣文森特岛","countryNameUS":"Saint Vincent","countryNameTW":"聖文森特島","pinYinHead":"S","englishHead":"S","strokeCount":13},{"countryCode":"+382","countryName":"塞尔维亚","countryNameUS":"Serbia","countryNameTW":"塞爾維亞","pinYinHead":"S","englishHead":"S","strokeCount":13}]},{"tag":"T","title":"T","list":[{"countryCode":"+66","countryName":"泰国","countryNameUS":"Thailand","countryNameTW":"泰國","pinYinHead":"T","englishHead":"T","strokeCount":10},{"countryCode":"+90","countryName":"土耳其","countryNameUS":"Turkey","countryNameTW":"土耳其","pinYinHead":"T","englishHead":"T","strokeCount":3},{"countryCode":"+216","countryName":"突尼斯","countryNameUS":"Tunisia","countryNameTW":"突尼斯","pinYinHead":"T","englishHead":"T","strokeCount":9},{"countryCode":"+255","countryName":"坦桑尼亚","countryNameUS":"Tanzania","countryNameTW":"坦尚尼亞","pinYinHead":"T","englishHead":"T","strokeCount":8},{"countryCode":"+676","countryName":"汤加","countryNameUS":"Tonga","countryNameTW":"東加","pinYinHead":"T","englishHead":"T","strokeCount":8},{"countryCode":"+886","countryName":"台湾","countryNameUS":"Taiwan","countryNameTW":"臺灣","pinYinHead":"T","englishHead":"T","strokeCount":14},{"countryCode":"+992","countryName":"塔吉克斯坦","countryNameUS":"Tajikstan","countryNameTW":"塔吉克","pinYinHead":"T","englishHead":"T","strokeCount":12},{"countryCode":"+993","countryName":"土库曼斯坦","countryNameUS":"Turkmenistan","countryNameTW":"土庫曼","pinYinHead":"T","englishHead":"T","strokeCount":3},{"countryCode":"+1809","countryName":"特立尼达和多巴哥","countryNameUS":"Trinidad and Tobago","countryNameTW":"千里達及托巴哥","pinYinHead":"T","englishHead":"T","strokeCount":3}]},{"tag":"W","title":"W","list":[{"countryCode":"+58","countryName":"委内瑞拉","countryNameUS":"Venezuela","countryNameTW":"委內瑞拉","pinYinHead":"W","englishHead":"V","strokeCount":8},{"countryCode":"+233","countryName":"乌兹别克斯坦","countryNameUS":"Uzbekistan","countryNameTW":"烏茲別克","pinYinHead":"W","englishHead":"U","strokeCount":10},{"countryCode":"+256","countryName":"乌干达","countryNameUS":"Uganda","countryNameTW":"烏干達","pinYinHead":"W","englishHead":"U","strokeCount":10},{"countryCode":"+380","countryName":"乌克兰","countryNameUS":"Ukraine","countryNameTW":"烏克蘭","pinYinHead":"W","englishHead":"U","strokeCount":10},{"countryCode":"+502","countryName":"危地马拉","countryNameUS":"Guatemala","countryNameTW":"瓜地馬拉","pinYinHead":"W","englishHead":"G","strokeCount":5},{"countryCode":"+598","countryName":"乌拉圭","countryNameUS":"Uruguay","countryNameTW":"烏拉圭","pinYinHead":"W","englishHead":"U","strokeCount":10},{"countryCode":"+673","countryName":"文莱","countryNameUS":"Brunei","countryNameTW":"汶萊","pinYinHead":"W","englishHead":"B","strokeCount":7}]},{"tag":"X","title":"X","list":[{"countryCode":"+30","countryName":"希腊","countryNameUS":"Greece","countryNameTW":"希臘","pinYinHead":"X","englishHead":"G","strokeCount":7},{"countryCode":"+34","countryName":"西班牙","countryNameUS":"Spain","countryNameTW":"西班牙","pinYinHead":"X","englishHead":"S","strokeCount":6},{"countryCode":"+36","countryName":"匈牙利","countryNameUS":"Hungary","countryNameTW":"匈牙利","pinYinHead":"X","englishHead":"H","strokeCount":6},{"countryCode":"+64","countryName":"新西兰","countryNameUS":"New Zealand","countryNameTW":"紐西蘭","pinYinHead":"X","englishHead":"N","strokeCount":10},{"countryCode":"+65","countryName":"新加坡","countryNameUS":"Singapore","countryNameTW":"新加坡","pinYinHead":"X","englishHead":"S","strokeCount":13},{"countryCode":"+685","countryName":"西萨摩亚","countryNameUS":"Samoa Western","countryNameTW":"薩摩亞","pinYinHead":"X","englishHead":"S","strokeCount":16},{"countryCode":"+852","countryName":"香港","countryNameUS":"Hong Kong","countryNameTW":"香港","pinYinHead":"X","englishHead":"H","strokeCount":9},{"countryCode":"+963","countryName":"叙利亚","countryNameUS":"Syria","countryNameTW":"敘利亞","pinYinHead":"X","englishHead":"S","strokeCount":11}]},{"tag":"Y","title":"Y","list":[{"countryCode":"+39","countryName":"意大利","countryNameUS":"Italy","countryNameTW":"意大利","pinYinHead":"Y","englishHead":"I","strokeCount":13},{"countryCode":"+44","countryName":"英国","countryNameUS":"United Kiongdom","countryNameTW":"英國","pinYinHead":"Y","englishHead":"U","strokeCount":8},{"countryCode":"+62","countryName":"印度尼西亚","countryNameUS":"Indonesia","countryNameTW":"印度尼西亞","pinYinHead":"Y","englishHead":"I","strokeCount":6},{"countryCode":"+84","countryName":"越南","countryNameUS":"Vietnam","countryNameTW":"越南","pinYinHead":"Y","englishHead":"V","strokeCount":12},{"countryCode":"+91","countryName":"印度","countryNameUS":"India","countryNameTW":"印度","pinYinHead":"Y","englishHead":"I","strokeCount":6},{"countryCode":"+98","countryName":"伊朗","countryNameUS":"Iran","countryNameTW":"伊朗","pinYinHead":"Y","englishHead":"I","strokeCount":6},{"countryCode":"+374","countryName":"亚美尼亚","countryNameUS":"Armenia","countryNameTW":"亞美尼亞","pinYinHead":"Y","englishHead":"A","strokeCount":8},{"countryCode":"+962","countryName":"约旦","countryNameUS":"Jordan","countryNameTW":"約旦","pinYinHead":"Y","englishHead":"J","strokeCount":9},{"countryCode":"+964","countryName":"伊拉克","countryNameUS":"Iraq","countryNameTW":"伊拉克","pinYinHead":"Y","englishHead":"I","strokeCount":6},{"countryCode":"+967","countryName":"也门","countryNameUS":"Yemen","countryNameTW":"葉門","pinYinHead":"Y","englishHead":"Y","strokeCount":12},{"countryCode":"+972","countryName":"以色列","countryNameUS":"Israel","countryNameTW":"以色列","pinYinHead":"Y","englishHead":"I","strokeCount":5},{"countryCode":"+1876","countryName":"牙买加","countryNameUS":"Jamaica","countryNameTW":"牙買加","pinYinHead":"Y","englishHead":"J","strokeCount":4}]},{"tag":"Z","title":"Z","list":[{"countryCode":"+56","countryName":"智利","countryNameUS":"Chile","countryNameTW":"智利","pinYinHead":"Z","englishHead":"C","strokeCount":12},{"countryCode":"+86","countryName":"中国","countryNameUS":"China","countryNameTW":"中國","pinYinHead":"Z","englishHead":"C","strokeCount":4},{"countryCode":"+235","countryName":"乍得","countryNameUS":"Chad","countryNameTW":"查德","pinYinHead":"Z","englishHead":"C","strokeCount":9},{"countryCode":"+236","countryName":"中非共和国","countryNameUS":"Central African Republic","countryNameTW":"中非共和國","pinYinHead":"Z","englishHead":"C","strokeCount":4},{"countryCode":"+243","countryName":"扎伊尔","countryNameUS":"Zaire","countryNameTW":"薩伊","pinYinHead":"Z","englishHead":"Z","strokeCount":16},{"countryCode":"+260","countryName":"赞比亚","countryNameUS":"Zambia","countryNameTW":"尚比亞","pinYinHead":"Z","englishHead":"Z","strokeCount":8},{"countryCode":"+350","countryName":"直布罗陀","countryNameUS":"Gibraltar","countryNameTW":"直布羅陀","pinYinHead":"Z","englishHead":"G","strokeCount":8}]}]')
        },
        35: function(e) {
            e.exports = JSON.parse('[{"tag":"A","title":"A","list":[{"countryCode":"+43","countryName":"奥地利","countryNameUS":"Austria","countryNameTW":"奧地利","pinYinHead":"A","englishHead":"A","strokeCount":14},{"countryCode":"+54","countryName":"阿根廷","countryNameUS":"Argentina","countryNameTW":"阿根廷","pinYinHead":"A","englishHead":"A","strokeCount":7},{"countryCode":"+61","countryName":"澳大利亚","countryNameUS":"Australia","countryNameTW":"澳大利亞","pinYinHead":"A","englishHead":"A","strokeCount":15},{"countryCode":"+93","countryName":"阿富汗","countryNameUS":"Afghanistan","countryNameTW":"阿富汗","pinYinHead":"A","englishHead":"A","strokeCount":7},{"countryCode":"+213","countryName":"阿尔及利亚","countryNameUS":"Algeria","countryNameTW":"阿爾及利亞","pinYinHead":"A","englishHead":"A","strokeCount":7},{"countryCode":"+244","countryName":"安哥拉","countryNameUS":"Angola","countryNameTW":"安哥拉","pinYinHead":"A","englishHead":"A","strokeCount":6},{"countryCode":"+247","countryName":"阿森松","countryNameUS":"Ascension","countryNameTW":"阿森松島","pinYinHead":"A","englishHead":"A","strokeCount":7},{"countryCode":"+355","countryName":"阿尔巴尼亚","countryNameUS":"Albania","countryNameTW":"阿爾巴尼亞","pinYinHead":"A","englishHead":"A","strokeCount":7},{"countryCode":"+374","countryName":"亚美尼亚","countryNameUS":"Armenia","countryNameTW":"亞美尼亞","pinYinHead":"Y","englishHead":"A","strokeCount":8},{"countryCode":"+376","countryName":"安道尔共和国","countryNameUS":"Andorra","countryNameTW":"安道爾親王國","pinYinHead":"A","englishHead":"A","strokeCount":6},{"countryCode":"+994","countryName":"阿塞拜疆","countryNameUS":"Azerbaijan","countryNameTW":"亞塞拜然","pinYinHead":"A","englishHead":"A","strokeCount":8},{"countryCode":"+1264","countryName":"安圭拉岛","countryNameUS":"Anguilla","countryNameTW":"安圭拉","pinYinHead":"A","englishHead":"A","strokeCount":6},{"countryCode":"+1268","countryName":"安提瓜和巴布达","countryNameUS":"Antigua and Barbuda","countryNameTW":"安地卡及巴布達","pinYinHead":"A","englishHead":"A","strokeCount":6}]},{"tag":"B","title":"B","list":[{"countryCode":"+32","countryName":"比利时","countryNameUS":"Belgium","countryNameTW":"比利時","pinYinHead":"B","englishHead":"B","strokeCount":4},{"countryCode":"+55","countryName":"巴西","countryNameUS":"Brazil","countryNameTW":"巴西","pinYinHead":"B","englishHead":"B","strokeCount":4},{"countryCode":"+226","countryName":"布基纳法索","countryNameUS":"Burkina Faso","countryNameTW":"布吉納法索","pinYinHead":"B","englishHead":"B","strokeCount":5},{"countryCode":"+229","countryName":"贝宁","countryNameUS":"Benin","countryNameTW":"貝寧","pinYinHead":"B","englishHead":"B","strokeCount":7},{"countryCode":"+257","countryName":"布隆迪","countryNameUS":"Burundi","countryNameTW":"蒲隆地","pinYinHead":"B","englishHead":"B","strokeCount":13},{"countryCode":"+267","countryName":"博茨瓦纳","countryNameUS":"Botswana","countryNameTW":"波札那","pinYinHead":"B","englishHead":"B","strokeCount":8},{"countryCode":"+359","countryName":"保加利亚","countryNameUS":"Bulgaria","countryNameTW":"保加利亞","pinYinHead":"B","englishHead":"B","strokeCount":9},{"countryCode":"+375","countryName":"白俄罗斯","countryNameUS":"Belarus","countryNameTW":"白俄羅斯","pinYinHead":"B","englishHead":"B","strokeCount":5},{"countryCode":"+501","countryName":"伯利兹","countryNameUS":"Belize","countryNameTW":"貝里斯","pinYinHead":"B","englishHead":"B","strokeCount":7},{"countryCode":"+591","countryName":"玻利维亚","countryNameUS":"Bolivia","countryNameTW":"玻利維亞","pinYinHead":"B","englishHead":"B","strokeCount":9},{"countryCode":"+673","countryName":"文莱","countryNameUS":"Brunei","countryNameTW":"汶萊","pinYinHead":"W","englishHead":"B","strokeCount":7},{"countryCode":"+880","countryName":"孟加拉国","countryNameUS":"Bangladesh","countryNameTW":"孟加拉","pinYinHead":"M","englishHead":"B","strokeCount":8},{"countryCode":"+973","countryName":"巴林","countryNameUS":"Bahrain","countryNameTW":"巴林","pinYinHead":"B","englishHead":"B","strokeCount":4},{"countryCode":"+1242","countryName":"巴哈马","countryNameUS":"Bahamas","countryNameTW":"巴哈馬","pinYinHead":"B","englishHead":"B","strokeCount":4},{"countryCode":"+1246","countryName":"巴巴多斯","countryNameUS":"Barbados","countryNameTW":"巴貝多","pinYinHead":"B","englishHead":"B","strokeCount":4},{"countryCode":"+1441","countryName":"百慕大群岛","countryNameUS":"Bermuda Islands","countryNameTW":"百慕達","pinYinHead":"B","englishHead":"B","strokeCount":6}]},{"tag":"C","title":"C","list":[{"countryCode":"+1","countryName":"加拿大","countryNameUS":"Canada","countryNameTW":"加拿大","pinYinHead":"J","englishHead":"C","strokeCount":5},{"countryCode":"+53","countryName":"古巴","countryNameUS":"Cuba","countryNameTW":"古巴","pinYinHead":"G","englishHead":"C","strokeCount":5},{"countryCode":"+56","countryName":"智利","countryNameUS":"Chile","countryNameTW":"智利","pinYinHead":"Z","englishHead":"C","strokeCount":12},{"countryCode":"+57","countryName":"哥伦比亚","countryNameUS":"Colombia","countryNameTW":"哥倫比亞","pinYinHead":"G","englishHead":"C","strokeCount":10},{"countryCode":"+86","countryName":"中国","countryNameUS":"China","countryNameTW":"中國","pinYinHead":"Z","englishHead":"C","strokeCount":4},{"countryCode":"+235","countryName":"乍得","countryNameUS":"Chad","countryNameTW":"查德","pinYinHead":"Z","englishHead":"C","strokeCount":9},{"countryCode":"+236","countryName":"中非共和国","countryNameUS":"Central African Republic","countryNameTW":"中非共和國","pinYinHead":"Z","englishHead":"C","strokeCount":4},{"countryCode":"+237","countryName":"喀麦隆","countryNameUS":"Cameroon","countryNameTW":"喀麥隆","pinYinHead":"K","englishHead":"C","strokeCount":12},{"countryCode":"+242","countryName":"刚果","countryNameUS":"Congo","countryNameTW":"剛果","pinYinHead":"G","englishHead":"C","strokeCount":10},{"countryCode":"+357","countryName":"塞浦路斯","countryNameUS":"Cyprus","countryNameTW":"賽普勒斯","pinYinHead":"S","englishHead":"C","strokeCount":17},{"countryCode":"+420","countryName":"捷克","countryNameUS":"Czech Republic","countryNameTW":"捷克","pinYinHead":"J","englishHead":"C","strokeCount":11},{"countryCode":"+506","countryName":"哥斯达黎加","countryNameUS":"Costa Rica","countryNameTW":"哥斯大黎加","pinYinHead":"G","englishHead":"C","strokeCount":10},{"countryCode":"+682","countryName":"库克群岛","countryNameUS":"Cook Islands","countryNameTW":"庫克群島","pinYinHead":"K","englishHead":"C","strokeCount":10},{"countryCode":"+855","countryName":"柬埔寨","countryNameUS":"Cambodia ","countryNameTW":"柬埔寨","pinYinHead":"J","englishHead":"C","strokeCount":9},{"countryCode":"+1345","countryName":"开曼群岛","countryNameUS":"Cayman Islands","countryNameTW":"開曼群島","pinYinHead":"K","englishHead":"C","strokeCount":12}]},{"tag":"D","title":"D","list":[{"countryCode":"+45","countryName":"丹麦","countryNameUS":"Denmark","countryNameTW":"丹麥","pinYinHead":"D","englishHead":"D","strokeCount":4},{"countryCode":"+253","countryName":"吉布提","countryNameUS":"Djibouti","countryNameTW":"吉布地","pinYinHead":"J","englishHead":"D","strokeCount":6},{"countryCode":"+1890","countryName":"多米尼加共和国","countryNameUS":"Dominica Republic","countryNameTW":"多明尼加","pinYinHead":"D","englishHead":"D","strokeCount":6}]},{"tag":"E","title":"E","list":[{"countryCode":"+20","countryName":"埃及","countryNameUS":"Egypt","countryNameTW":"埃及","pinYinHead":"A","englishHead":"E","strokeCount":10},{"countryCode":"+251","countryName":"埃塞俄比亚","countryNameUS":"Ethiopia","countryNameTW":"衣索比亞","pinYinHead":"A","englishHead":"E","strokeCount":6},{"countryCode":"+372","countryName":"爱沙尼亚","countryNameUS":"Estonia","countryNameTW":"愛沙尼亞","pinYinHead":"A","englishHead":"E","strokeCount":13},{"countryCode":"+503","countryName":"萨尔瓦多","countryNameUS":"EISalvador","countryNameTW":"薩爾瓦多","pinYinHead":"S","englishHead":"E","strokeCount":16},{"countryCode":"+593","countryName":"厄瓜多尔","countryNameUS":"Ecuador","countryNameTW":"厄瓜多","pinYinHead":"E","englishHead":"E","strokeCount":4}]},{"tag":"F","title":"F","list":[{"countryCode":"+33","countryName":"法国","countryNameUS":"France","countryNameTW":"法國","pinYinHead":"F","englishHead":"F","strokeCount":8},{"countryCode":"+358","countryName":"芬兰","countryNameUS":"Finland","countryNameTW":"芬蘭","pinYinHead":"F","englishHead":"F","strokeCount":7},{"countryCode":"+594","countryName":"法属圭亚那","countryNameUS":"French Guiana","countryNameTW":"法屬圭亞那","pinYinHead":"F","englishHead":"F","strokeCount":8},{"countryCode":"+679","countryName":"斐济","countryNameUS":"Fiji","countryNameTW":"斐濟","pinYinHead":"F","englishHead":"F","strokeCount":12},{"countryCode":"+689","countryName":"法属玻利尼西亚","countryNameUS":"French Polynesia","countryNameTW":"法屬玻里尼西亞","pinYinHead":"F","englishHead":"F","strokeCount":8}]},{"tag":"G","title":"G","list":[{"countryCode":"+30","countryName":"希腊","countryNameUS":"Greece","countryNameTW":"希臘","pinYinHead":"X","englishHead":"G","strokeCount":7},{"countryCode":"+49","countryName":"德国","countryNameUS":"Germany","countryNameTW":"德國","pinYinHead":"D","englishHead":"G","strokeCount":15},{"countryCode":"+220","countryName":"冈比亚","countryNameUS":"Gambia","countryNameTW":"岡比亞","pinYinHead":"G","englishHead":"G","strokeCount":8},{"countryCode":"+224","countryName":"几内亚","countryNameUS":"Guinea","countryNameTW":"幾內亞","pinYinHead":"J","englishHead":"G","strokeCount":12},{"countryCode":"+233","countryName":"加纳","countryNameUS":"Ghana","countryNameTW":"迦納","pinYinHead":"J","englishHead":"G","strokeCount":8},{"countryCode":"+241","countryName":"加蓬","countryNameUS":"Gabon","countryNameTW":"加彭","pinYinHead":"J","englishHead":"G","strokeCount":5},{"countryCode":"+350","countryName":"直布罗陀","countryNameUS":"Gibraltar","countryNameTW":"直布羅陀","pinYinHead":"Z","englishHead":"G","strokeCount":8},{"countryCode":"+502","countryName":"危地马拉","countryNameUS":"Guatemala","countryNameTW":"瓜地馬拉","pinYinHead":"W","englishHead":"G","strokeCount":5},{"countryCode":"+592","countryName":"圭亚那","countryNameUS":"Guyana","countryNameTW":"蓋亞那","pinYinHead":"G","englishHead":"G","strokeCount":13},{"countryCode":"+995","countryName":"格鲁吉亚","countryNameUS":"Georgia","countryNameTW":"喬治亞","pinYinHead":"G","englishHead":"G","strokeCount":12},{"countryCode":"+1671","countryName":"关岛","countryNameUS":"Guam","countryNameTW":"關島","pinYinHead":"G","englishHead":"G","strokeCount":19},{"countryCode":"+1809","countryName":"格林纳达","countryNameUS":"Grenada","countryNameTW":"格瑞那達","pinYinHead":"G","englishHead":"G","strokeCount":10}]},{"tag":"H","title":"H","list":[{"countryCode":"+36","countryName":"匈牙利","countryNameUS":"Hungary","countryNameTW":"匈牙利","pinYinHead":"X","englishHead":"H","strokeCount":6},{"countryCode":"+504","countryName":"洪都拉斯","countryNameUS":"Honduras","countryNameTW":"宏都拉斯","pinYinHead":"H","englishHead":"H","strokeCount":7},{"countryCode":"+509","countryName":"海地","countryNameUS":"Haiti","countryNameTW":"海地","pinYinHead":"H","englishHead":"H","strokeCount":10},{"countryCode":"+852","countryName":"香港","countryNameUS":"Hong Kong","countryNameTW":"香港","pinYinHead":"X","englishHead":"H","strokeCount":9}]},{"tag":"I","title":"I","list":[{"countryCode":"+39","countryName":"意大利","countryNameUS":"Italy","countryNameTW":"意大利","pinYinHead":"Y","englishHead":"I","strokeCount":13},{"countryCode":"+62","countryName":"印度尼西亚","countryNameUS":"Indonesia","countryNameTW":"印度尼西亞","pinYinHead":"Y","englishHead":"I","strokeCount":6},{"countryCode":"+91","countryName":"印度","countryNameUS":"India","countryNameTW":"印度","pinYinHead":"Y","englishHead":"I","strokeCount":6},{"countryCode":"+98","countryName":"伊朗","countryNameUS":"Iran","countryNameTW":"伊朗","pinYinHead":"Y","englishHead":"I","strokeCount":6},{"countryCode":"+225","countryName":"科特迪瓦","countryNameUS":"Ivory Coast","countryNameTW":"象牙海岸","pinYinHead":"K","englishHead":"I","strokeCount":11},{"countryCode":"+353","countryName":"爱尔兰","countryNameUS":"Ireland","countryNameTW":"愛爾蘭","pinYinHead":"A","englishHead":"I","strokeCount":13},{"countryCode":"+354","countryName":"冰岛","countryNameUS":"Iceland","countryNameTW":"冰島","pinYinHead":"B","englishHead":"I","strokeCount":6},{"countryCode":"+964","countryName":"伊拉克","countryNameUS":"Iraq","countryNameTW":"伊拉克","pinYinHead":"Y","englishHead":"I","strokeCount":6},{"countryCode":"+972","countryName":"以色列","countryNameUS":"Israel","countryNameTW":"以色列","pinYinHead":"Y","englishHead":"I","strokeCount":5}]},{"tag":"J","title":"J","list":[{"countryCode":"+81","countryName":"日本","countryNameUS":"Japan","countryNameTW":"日本","pinYinHead":"R","englishHead":"J","strokeCount":4},{"countryCode":"+962","countryName":"约旦","countryNameUS":"Jordan","countryNameTW":"約旦","pinYinHead":"Y","englishHead":"J","strokeCount":9},{"countryCode":"+1876","countryName":"牙买加","countryNameUS":"Jamaica","countryNameTW":"牙買加","pinYinHead":"Y","englishHead":"J","strokeCount":4}]},{"tag":"K","title":"K","list":[{"countryCode":"+82","countryName":"韩国","countryNameUS":"South Korea","countryNameTW":"韓國","pinYinHead":"H","englishHead":"K","strokeCount":17},{"countryCode":"+254","countryName":"肯尼亚","countryNameUS":"Kenya","countryNameTW":"肯亞","pinYinHead":"K","englishHead":"K","strokeCount":8},{"countryCode":"+327","countryName":"哈萨克斯坦","countryNameUS":"Kazakstan","countryNameTW":"哈薩克","pinYinHead":"H","englishHead":"K","strokeCount":9},{"countryCode":"+331","countryName":"吉尔吉斯坦","countryNameUS":"Kyrgyzstan","countryNameTW":"吉爾吉斯","pinYinHead":"J","englishHead":"K","strokeCount":6},{"countryCode":"+965","countryName":"科威特","countryNameUS":"Kuwait","countryNameTW":"科威特","pinYinHead":"K","englishHead":"K","strokeCount":9}]},{"tag":"L","title":"L","list":[{"countryCode":"+218","countryName":"利比亚","countryNameUS":"Libya","countryNameTW":"利比亞","pinYinHead":"L","englishHead":"L","strokeCount":7},{"countryCode":"+231","countryName":"利比里亚","countryNameUS":"Liberia","countryNameTW":"賴比瑞亞","pinYinHead":"L","englishHead":"L","strokeCount":16},{"countryCode":"+266","countryName":"莱索托","countryNameUS":"Lesotho","countryNameTW":"萊索托","pinYinHead":"L","englishHead":"L","strokeCount":11},{"countryCode":"+352","countryName":"卢森堡","countryNameUS":"Luxembourg","countryNameTW":"盧森堡","pinYinHead":"L","englishHead":"L","strokeCount":16},{"countryCode":"+370","countryName":"立陶宛","countryNameUS":"Lithuania","countryNameTW":"立陶宛","pinYinHead":"L","englishHead":"L","strokeCount":5},{"countryCode":"+371","countryName":"拉脱维亚","countryNameUS":"Latvia","countryNameTW":"拉脫維亞","pinYinHead":"L","englishHead":"L","strokeCount":8},{"countryCode":"+423","countryName":"列支敦士登","countryNameUS":"Liechtenstein","countryNameTW":"列支敦斯登","pinYinHead":"L","englishHead":"L","strokeCount":6},{"countryCode":"+856","countryName":"老挝","countryNameUS":"Laos","countryNameTW":"寮國","pinYinHead":"L","englishHead":"L","strokeCount":15},{"countryCode":"+961","countryName":"黎巴嫩","countryNameUS":"Lebanon","countryNameTW":"黎巴嫩","pinYinHead":"L","englishHead":"L","strokeCount":15}]},{"tag":"M","title":"M","list":[{"countryCode":"+52","countryName":"墨西哥","countryNameUS":"Mexico","countryNameTW":"墨西哥","pinYinHead":"M","englishHead":"M","strokeCount":15},{"countryCode":"+60","countryName":"马来西亚","countryNameUS":"Malaysia","countryNameTW":"馬來西亞","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+95","countryName":"缅甸","countryNameUS":"Myanmar","countryNameTW":"緬甸","pinYinHead":"M","englishHead":"M","strokeCount":15},{"countryCode":"+212","countryName":"摩洛哥","countryNameUS":"Morocco","countryNameTW":"摩洛哥","pinYinHead":"M","englishHead":"M","strokeCount":15},{"countryCode":"+223","countryName":"马里","countryNameUS":"Mali","countryNameTW":"馬利共和國","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+230","countryName":"毛里求斯","countryNameUS":"Mauritius","countryNameTW":"模里西斯","pinYinHead":"M","englishHead":"M","strokeCount":14},{"countryCode":"+258","countryName":"莫桑比克","countryNameUS":"Mozambique","countryNameTW":"莫三比克","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+261","countryName":"马达加斯加","countryNameUS":"Madagascar","countryNameTW":"馬達加斯加","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+265","countryName":"马拉维","countryNameUS":"Malawi","countryNameTW":"馬拉威","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+356","countryName":"马耳他","countryNameUS":"Malta","countryNameTW":"馬爾他","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+373","countryName":"摩尔多瓦","countryNameUS":"Moldova","countryNameTW":"摩爾多瓦","pinYinHead":"M","englishHead":"M","strokeCount":15},{"countryCode":"+377","countryName":"摩纳哥","countryNameUS":"Monaco","countryNameTW":"摩納哥","pinYinHead":"M","englishHead":"M","strokeCount":15},{"countryCode":"+596","countryName":"马提尼克","countryNameUS":"Martinique","countryNameTW":"馬丁尼克","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+853","countryName":"澳门","countryNameUS":"Macao","countryNameTW":"澳門","pinYinHead":"A","englishHead":"M","strokeCount":15},{"countryCode":"+960","countryName":"马尔代夫","countryNameUS":"Maldives","countryNameTW":"馬爾地夫","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+976","countryName":"蒙古","countryNameUS":"Mongolia","countryNameTW":"蒙古","pinYinHead":"M","englishHead":"M","strokeCount":13},{"countryCode":"+1664","countryName":"蒙特塞拉特岛","countryNameUS":"Montserrat Islands","countryNameTW":"蒙哲臘","pinYinHead":"M","englishHead":"M","strokeCount":13},{"countryCode":"+1670","countryName":"马里亚那群岛","countryNameUS":"Mariana Islands","countryNameTW":"馬里亞納群島","pinYinHead":"M","englishHead":"M","strokeCount":10},{"countryCode":"+382","countryName":"黑山共和国","countryNameUS":"Montenegro","countryNameTW":"蒙特內哥羅","pinYinHead":"H","englishHead":"M","strokeCount":13}]},{"tag":"N","title":"N","list":[{"countryCode":"+31","countryName":"荷兰","countryNameUS":"Netherlands","countryNameTW":"荷蘭","pinYinHead":"H","englishHead":"N","strokeCount":10},{"countryCode":"+47","countryName":"挪威","countryNameUS":"Norway","countryNameTW":"挪威","pinYinHead":"N","englishHead":"N","strokeCount":9},{"countryCode":"+64","countryName":"新西兰","countryNameUS":"New Zealand","countryNameTW":"紐西蘭","pinYinHead":"X","englishHead":"N","strokeCount":10},{"countryCode":"+227","countryName":"尼日尔","countryNameUS":"Niger","countryNameTW":"尼日","pinYinHead":"N","englishHead":"N","strokeCount":5},{"countryCode":"+234","countryName":"尼日利亚","countryNameUS":"Nigeria","countryNameTW":"奈及利亞","pinYinHead":"N","englishHead":"N","strokeCount":8},{"countryCode":"+264","countryName":"纳米比亚","countryNameUS":"Namibia","countryNameTW":"納米比亞","pinYinHead":"N","englishHead":"N","strokeCount":10},{"countryCode":"+505","countryName":"尼加拉瓜","countryNameUS":"Nicaragua","countryNameTW":"尼加拉瓜","pinYinHead":"N","englishHead":"N","strokeCount":5},{"countryCode":"+599","countryName":"荷属安的列斯","countryNameUS":"Netherlands Antilles","countryNameTW":"荷屬安地列斯","pinYinHead":"H","englishHead":"N","strokeCount":10},{"countryCode":"+674","countryName":"瑙鲁","countryNameUS":"Nauru","countryNameTW":"諾魯","pinYinHead":"N","englishHead":"N","strokeCount":15},{"countryCode":"+850","countryName":"朝鲜","countryNameUS":"North Korea","countryNameTW":"北韓","pinYinHead":"C","englishHead":"N","strokeCount":5},{"countryCode":"+977","countryName":"尼泊尔","countryNameUS":"Nepal","countryNameTW":"尼泊爾","pinYinHead":"N","englishHead":"N","strokeCount":5}]},{"tag":"O","title":"O","list":[{"countryCode":"+968","countryName":"阿曼","countryNameUS":"Oman","countryNameTW":"阿曼","pinYinHead":"A","englishHead":"O","strokeCount":7}]},{"tag":"P","title":"P","list":[{"countryCode":"+48","countryName":"波兰","countryNameUS":"Poland","countryNameTW":"波蘭","pinYinHead":"B","englishHead":"P","strokeCount":8},{"countryCode":"+51","countryName":"秘鲁","countryNameUS":"Peru","countryNameTW":"秘魯","pinYinHead":"M","englishHead":"P","strokeCount":10},{"countryCode":"+63","countryName":"菲律宾","countryNameUS":"Philippines","countryNameTW":"菲律賓","pinYinHead":"F","englishHead":"P","strokeCount":11},{"countryCode":"+92","countryName":"巴基斯坦","countryNameUS":"Pakistan","countryNameTW":"巴基斯坦","pinYinHead":"B","englishHead":"P","strokeCount":4},{"countryCode":"+351","countryName":"葡萄牙","countryNameUS":"Portugal","countryNameTW":"葡萄牙","pinYinHead":"P","englishHead":"P","strokeCount":12},{"countryCode":"+507","countryName":"巴拿马","countryNameUS":"Panama","countryNameTW":"巴拿馬","pinYinHead":"B","englishHead":"P","strokeCount":4},{"countryCode":"+595","countryName":"巴拉圭","countryNameUS":"Paraguay","countryNameTW":"巴拉圭","pinYinHead":"B","englishHead":"P","strokeCount":4},{"countryCode":"+675","countryName":"巴布亚新几内亚","countryNameUS":"Papua New Cuinea","countryNameTW":"巴布亞紐幾內亞","pinYinHead":"B","englishHead":"P","strokeCount":4},{"countryCode":"+1787","countryName":"波多黎各","countryNameUS":"PuertoRico","countryNameTW":"波多黎各","pinYinHead":"B","englishHead":"P","strokeCount":8}]},{"tag":"Q","title":"Q","list":[{"countryCode":"+974","countryName":"卡塔尔","countryNameUS":"Qatar","countryNameTW":"卡達","pinYinHead":"K","englishHead":"Q","strokeCount":5}]},{"tag":"R","title":"R","list":[{"countryCode":"+7","countryName":"俄罗斯","countryNameUS":"Russia","countryNameTW":"俄羅斯","pinYinHead":"E","englishHead":"R","strokeCount":9},{"countryCode":"+40","countryName":"罗马尼亚","countryNameUS":"Romania","countryNameTW":"羅馬尼亞","pinYinHead":"L","englishHead":"R","strokeCount":19},{"countryCode":"+262","countryName":"留尼旺","countryNameUS":"Reunion","countryNameTW":"留尼旺","pinYinHead":"L","englishHead":"R","strokeCount":10}]},{"tag":"S","title":"S","list":[{"countryCode":"+27","countryName":"南非","countryNameUS":"South Africa","countryNameTW":"南非","pinYinHead":"N","englishHead":"S","strokeCount":9},{"countryCode":"+34","countryName":"西班牙","countryNameUS":"Spain","countryNameTW":"西班牙","pinYinHead":"X","englishHead":"S","strokeCount":6},{"countryCode":"+41","countryName":"瑞士","countryNameUS":"Switzerland","countryNameTW":"瑞士","pinYinHead":"R","englishHead":"S","strokeCount":13},{"countryCode":"+46","countryName":"瑞典","countryNameUS":"Sweden","countryNameTW":"瑞典","pinYinHead":"R","englishHead":"S","strokeCount":13},{"countryCode":"+65","countryName":"新加坡","countryNameUS":"Singapore","countryNameTW":"新加坡","pinYinHead":"X","englishHead":"S","strokeCount":13},{"countryCode":"+94","countryName":"斯里兰卡","countryNameUS":"Sri Lanka","countryNameTW":"斯里蘭卡","pinYinHead":"S","englishHead":"S","strokeCount":12},{"countryCode":"+221","countryName":"塞内加尔","countryNameUS":"Senegal","countryNameTW":"塞內加爾","pinYinHead":"S","englishHead":"S","strokeCount":13},{"countryCode":"+232","countryName":"塞拉利昂","countryNameUS":"Sierra Leone","countryNameTW":"獅子山共和國","pinYinHead":"S","englishHead":"S","strokeCount":13},{"countryCode":"+239","countryName":"圣多美和普林西比","countryNameUS":"Sao Tome and Principe","countryNameTW":"聖多美普林西比","pinYinHead":"S","englishHead":"S","strokeCount":13},{"countryCode":"+248","countryName":"塞舌尔","countryNameUS":"Seychelles","countryNameTW":"塞席爾","pinYinHead":"S","englishHead":"S","strokeCount":13},{"countryCode":"+249","countryName":"苏丹","countryNameUS":"Sudan","countryNameTW":"蘇丹","pinYinHead":"S","englishHead":"S","strokeCount":19},{"countryCode":"+252","countryName":"索马里","countryNameUS":"Somali","countryNameTW":"索馬利亞","pinYinHead":"S","englishHead":"S","strokeCount":10},{"countryCode":"+268","countryName":"斯威士兰","countryNameUS":"Swaziland","countryNameTW":"史瓦濟蘭","pinYinHead":"S","englishHead":"S","strokeCount":5},{"countryCode":"+378","countryName":"圣马力诺","countryNameUS":"San Marino","countryNameTW":"聖馬利諾","pinYinHead":"S","englishHead":"S","strokeCount":13},{"countryCode":"+386","countryName":"斯洛文尼亚","countryNameUS":"Slovenia","countryNameTW":"斯洛維尼亞","pinYinHead":"S","englishHead":"S","strokeCount":12},{"countryCode":"+421","countryName":"斯洛伐克","countryNameUS":"Slovakia","countryNameTW":"斯洛伐克","pinYinHead":"S","englishHead":"S","strokeCount":12},{"countryCode":"+597","countryName":"苏里南","countryNameUS":"Suriname","countryNameTW":"蘇利南","pinYinHead":"S","englishHead":"S","strokeCount":19},{"countryCode":"+677","countryName":"所罗门群岛","countryNameUS":"Solomon Islands","countryNameTW":"索羅門群島","pinYinHead":"S","englishHead":"S","strokeCount":10},{"countryCode":"+684","countryName":"东萨摩亚(美)","countryNameUS":"Samoa Eastern","countryNameTW":"東薩摩亞(美)","pinYinHead":"D","englishHead":"S","strokeCount":8},{"countryCode":"+685","countryName":"西萨摩亚","countryNameUS":"Samoa Western","countryNameTW":"薩摩亞","pinYinHead":"X","englishHead":"S","strokeCount":16},{"countryCode":"+963","countryName":"叙利亚","countryNameUS":"Syria","countryNameTW":"敘利亞","pinYinHead":"X","englishHead":"S","strokeCount":11},{"countryCode":"+966","countryName":"沙特阿拉伯","countryNameUS":"Saudi Arabia","countryNameTW":"沙烏地阿拉伯","pinYinHead":"S","englishHead":"S","strokeCount":7},{"countryCode":"+1758","countryName":"圣卢西亚","countryNameUS":"Saint Lucia","countryNameTW":"聖露西亞","pinYinHead":"S","englishHead":"S","strokeCount":13},{"countryCode":"+1784","countryName":"圣文森特岛","countryNameUS":"Saint Vincent","countryNameTW":"聖文森特島","pinYinHead":"S","englishHead":"S","strokeCount":13},{"countryCode":"+382","countryName":"塞尔维亚","countryNameUS":"Serbia","countryNameTW":"塞爾維亞","pinYinHead":"S","englishHead":"S","strokeCount":13}]},{"tag":"T","title":"T","list":[{"countryCode":"+66","countryName":"泰国","countryNameUS":"Thailand","countryNameTW":"泰國","pinYinHead":"T","englishHead":"T","strokeCount":10},{"countryCode":"+90","countryName":"土耳其","countryNameUS":"Turkey","countryNameTW":"土耳其","pinYinHead":"T","englishHead":"T","strokeCount":3},{"countryCode":"+216","countryName":"突尼斯","countryNameUS":"Tunisia","countryNameTW":"突尼斯","pinYinHead":"T","englishHead":"T","strokeCount":9},{"countryCode":"+228","countryName":"多哥","countryNameUS":"Togo","countryNameTW":"多哥","pinYinHead":"D","englishHead":"T","strokeCount":6},{"countryCode":"+255","countryName":"坦桑尼亚","countryNameUS":"Tanzania","countryNameTW":"坦尚尼亞","pinYinHead":"T","englishHead":"T","strokeCount":8},{"countryCode":"+676","countryName":"汤加","countryNameUS":"Tonga","countryNameTW":"東加","pinYinHead":"T","englishHead":"T","strokeCount":8},{"countryCode":"+886","countryName":"台湾","countryNameUS":"Taiwan","countryNameTW":"臺灣","pinYinHead":"T","englishHead":"T","strokeCount":14},{"countryCode":"+992","countryName":"塔吉克斯坦","countryNameUS":"Tajikstan","countryNameTW":"塔吉克","pinYinHead":"T","englishHead":"T","strokeCount":12},{"countryCode":"+993","countryName":"土库曼斯坦","countryNameUS":"Turkmenistan","countryNameTW":"土庫曼","pinYinHead":"T","englishHead":"T","strokeCount":3},{"countryCode":"+1809","countryName":"特立尼达和多巴哥","countryNameUS":"Trinidad and Tobago","countryNameTW":"千里達及托巴哥","pinYinHead":"T","englishHead":"T","strokeCount":3}]},{"tag":"U","title":"U","list":[{"countryCode":"+1","countryName":"美国","countryNameUS":"United States of America","countryNameTW":"美國","pinYinHead":"M","englishHead":"U","strokeCount":9},{"countryCode":"+44","countryName":"英国","countryNameUS":"United Kiongdom","countryNameTW":"英國","pinYinHead":"Y","englishHead":"U","strokeCount":8},{"countryCode":"+233","countryName":"乌兹别克斯坦","countryNameUS":"Uzbekistan","countryNameTW":"烏茲別克","pinYinHead":"W","englishHead":"U","strokeCount":10},{"countryCode":"+256","countryName":"乌干达","countryNameUS":"Uganda","countryNameTW":"烏干達","pinYinHead":"W","englishHead":"U","strokeCount":10},{"countryCode":"+380","countryName":"乌克兰","countryNameUS":"Ukraine","countryNameTW":"烏克蘭","pinYinHead":"W","englishHead":"U","strokeCount":10},{"countryCode":"+598","countryName":"乌拉圭","countryNameUS":"Uruguay","countryNameTW":"烏拉圭","pinYinHead":"W","englishHead":"U","strokeCount":10},{"countryCode":"+971","countryName":"阿拉伯联合酋长国","countryNameUS":"United Arab Emirates","countryNameTW":"阿拉伯聯合大公國","pinYinHead":"A","englishHead":"U","strokeCount":7}]},{"tag":"V","title":"V","list":[{"countryCode":"+58","countryName":"委内瑞拉","countryNameUS":"Venezuela","countryNameTW":"委內瑞拉","pinYinHead":"W","englishHead":"V","strokeCount":8},{"countryCode":"+84","countryName":"越南","countryNameUS":"Vietnam","countryNameTW":"越南","pinYinHead":"Y","englishHead":"V","strokeCount":12}]},{"tag":"Y","title":"Y","list":[{"countryCode":"+967","countryName":"也门","countryNameUS":"Yemen","countryNameTW":"葉門","pinYinHead":"Y","englishHead":"Y","strokeCount":12}]},{"tag":"Z","title":"Z","list":[{"countryCode":"+243","countryName":"扎伊尔","countryNameUS":"Zaire","countryNameTW":"薩伊","pinYinHead":"Z","englishHead":"Z","strokeCount":16},{"countryCode":"+260","countryName":"赞比亚","countryNameUS":"Zambia","countryNameTW":"尚比亞","pinYinHead":"Z","englishHead":"Z","strokeCount":8},{"countryCode":"+263","countryName":"津巴布韦","countryNameUS":"Zimbabwe","countryNameTW":"辛巴威","pinYinHead":"J","englishHead":"Z","strokeCount":7}]}]')
        }
    },
    [
        [179, 0, 1, 2]
    ]
]);