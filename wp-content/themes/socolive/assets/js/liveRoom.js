(window.webpackJsonp = window.webpackJsonp || []).push([
    [25], {
        14: function(e, t, n) {
            "use strict";
            n.r(t),
                function(e, t) {
                    var a = n(4),
                        o = n.n(a);
                    ! function(e, a) {
                        "object" == ("undefined" == typeof exports ? "undefined" : o()(exports)) ? t.exports = a(e): "function" == typeof define && n(11) ? define([], a) : e.LazyLoad = a(e)
                    }(void 0 !== e ? e : (void 0).window || (void 0).global, (function(e) {
                        function t(e, t) {
                            this.settings = o(a, t || {}), this.images = e || document.querySelectorAll(this.settings.selector), this.observer = null, this.init()
                        }
                        "function" == typeof define && n(11) && (e = window);
                        var a = {
                                src: "data-src",
                                srcset: "data-srcset",
                                selector: ".lazyload",
                                root: null,
                                rootMargin: "0px",
                                threshold: 0
                            },
                            o = function e() {
                                var t = {},
                                    n = !1,
                                    a = 0,
                                    o = arguments.length;
                                for ("[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (n = arguments[0], a++); a < o; a++) ! function(a) {
                                    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (n && "[object Object]" === Object.prototype.toString.call(a[o]) ? t[o] = e(!0, t[o], a[o]) : t[o] = a[o])
                                }(arguments[a]);
                                return t
                            };
                        if (t.prototype = {
                                init: function() {
                                    if (e.IntersectionObserver) {
                                        var t = this,
                                            n = {
                                                root: this.settings.root,
                                                rootMargin: this.settings.rootMargin,
                                                threshold: [this.settings.threshold]
                                            };
                                        this.observer = new IntersectionObserver((function(e) {
                                            Array.prototype.forEach.call(e, (function(e) {
                                                if (e.isIntersecting) {
                                                    t.observer.unobserve(e.target);
                                                    var n = e.target.getAttribute(t.settings.src),
                                                        a = e.target.getAttribute(t.settings.srcset);
                                                    "img" === e.target.tagName.toLowerCase() ? (n && (e.target.src = n), a && (e.target.srcset = a)) : e.target.style.backgroundImage = "url(" + n + ")"
                                                }
                                            }))
                                        }), n), Array.prototype.forEach.call(this.images, (function(e) {
                                            t.observer.observe(e)
                                        }))
                                    } else this.loadImages()
                                },
                                loadAndDestroy: function() {
                                    this.settings && (this.loadImages(), this.destroy())
                                },
                                loadImages: function() {
                                    if (this.settings) {
                                        var e = this;
                                        Array.prototype.forEach.call(this.images, (function(t) {
                                            var n = t.getAttribute(e.settings.src),
                                                a = t.getAttribute(e.settings.srcset);
                                            "img" === t.tagName.toLowerCase() ? (n && (t.src = n), a && (t.srcset = a)) : t.style.backgroundImage = "url('" + n + "')"
                                        }))
                                    }
                                },
                                destroy: function() {
                                    this.settings && (this.observer.disconnect(), this.settings = null)
                                }
                            }, e.lazyload = function(e, n) {
                                return new t(e, n)
                            }, e.jQuery) {
                            var i = e.jQuery;
                            i.fn.lazyload = function(e) {
                                return (e = e || {}).attribute = e.attribute || "data-src", new t(i.makeArray(this), e), this
                            }
                        }
                        return t
                    }))
                }.call(this, n(13), n(15)(e))
        },
        16: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(4),
                o = n.n(a);
            ! function() {
                if ("object" === ("undefined" == typeof window ? "undefined" : o()(window)))
                    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function() {
                            return this.intersectionRatio > 0
                        }
                    });
                    else {
                        var e = function(e) {
                                for (var t = window.document, n = i(t); n;) n = i(t = n.ownerDocument);
                                return t
                            }(),
                            t = [],
                            n = null,
                            a = null;
                        s.prototype.THROTTLE_TIMEOUT = 100, s.prototype.POLL_INTERVAL = null, s.prototype.USE_MUTATION_OBSERVER = !0, s._setupCrossOriginUpdater = function() {
                            return n || (n = function(e, n) {
                                a = e && n ? f(e, n) : {
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    width: 0,
                                    height: 0
                                }, t.forEach((function(e) {
                                    e._checkForIntersections()
                                }))
                            }), n
                        }, s._resetCrossOriginUpdater = function() {
                            n = null, a = null
                        }, s.prototype.observe = function(e) {
                            if (!this._observationTargets.some((function(t) {
                                    return t.element == e
                                }))) {
                                if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                                this._registerInstance(), this._observationTargets.push({
                                    element: e,
                                    entry: null
                                }), this._monitorIntersections(e.ownerDocument), this._checkForIntersections()
                            }
                        }, s.prototype.unobserve = function(e) {
                            this._observationTargets = this._observationTargets.filter((function(t) {
                                return t.element != e
                            })), this._unmonitorIntersections(e.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance()
                        }, s.prototype.disconnect = function() {
                            this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance()
                        }, s.prototype.takeRecords = function() {
                            var e = this._queuedEntries.slice();
                            return this._queuedEntries = [], e
                        }, s.prototype._initThresholds = function(e) {
                            var t = e || [0];
                            return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
                                if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                                return e !== n[t - 1]
                            }))
                        }, s.prototype._parseRootMargin = function(e) {
                            var t = (e || "0px").split(/\s+/).map((function(e) {
                                var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                                if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                                return {
                                    value: parseFloat(t[1]),
                                    unit: t[2]
                                }
                            }));
                            return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
                        }, s.prototype._monitorIntersections = function(t) {
                            var n = t.defaultView;
                            if (n && -1 == this._monitoringDocuments.indexOf(t)) {
                                var a = this._checkForIntersections,
                                    o = null,
                                    r = null;
                                if (this.POLL_INTERVAL ? o = n.setInterval(a, this.POLL_INTERVAL) : (c(n, "resize", a, !0), c(t, "scroll", a, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in n && (r = new n.MutationObserver(a)).observe(t, {
                                        attributes: !0,
                                        childList: !0,
                                        characterData: !0,
                                        subtree: !0
                                    })), this._monitoringDocuments.push(t), this._monitoringUnsubscribes.push((function() {
                                        var e = t.defaultView;
                                        e && (o && e.clearInterval(o), l(e, "resize", a, !0)), l(t, "scroll", a, !0), r && r.disconnect()
                                    })), t != (this.root && this.root.ownerDocument || e)) {
                                    var s = i(t);
                                    s && this._monitorIntersections(s.ownerDocument)
                                }
                            }
                        }, s.prototype._unmonitorIntersections = function(t) {
                            var n = this._monitoringDocuments.indexOf(t);
                            if (-1 != n) {
                                var a = this.root && this.root.ownerDocument || e;
                                if (!this._observationTargets.some((function(e) {
                                        var n = e.element.ownerDocument;
                                        if (n == t) return !0;
                                        for (; n && n != a;) {
                                            var o = i(n);
                                            if ((n = o && o.ownerDocument) == t) return !0
                                        }
                                        return !1
                                    }))) {
                                    var o = this._monitoringUnsubscribes[n];
                                    if (this._monitoringDocuments.splice(n, 1), this._monitoringUnsubscribes.splice(n, 1), o(), t != a) {
                                        var r = i(t);
                                        r && this._unmonitorIntersections(r.ownerDocument)
                                    }
                                }
                            }
                        }, s.prototype._unmonitorAllIntersections = function() {
                            var e = this._monitoringUnsubscribes.slice(0);
                            this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
                            for (var t = 0; t < e.length; t++) e[t]()
                        }, s.prototype._checkForIntersections = function() {
                            if (this.root || !n || a) {
                                var e = this._rootIsInDom(),
                                    t = e ? this._getRootRect() : {
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        width: 0,
                                        height: 0
                                    };
                                this._observationTargets.forEach((function(a) {
                                    var o = a.element,
                                        i = d(o),
                                        s = this._rootContainsTarget(o),
                                        c = a.entry,
                                        l = e && s && this._computeTargetAndRootIntersection(o, i, t),
                                        u = a.entry = new r({
                                            time: window.performance && performance.now && performance.now(),
                                            target: o,
                                            boundingClientRect: i,
                                            rootBounds: n && !this.root ? null : t,
                                            intersectionRect: l
                                        });
                                    c ? e && s ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
                                }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                            }
                        }, s.prototype._computeTargetAndRootIntersection = function(t, o, i) {
                            if ("none" != window.getComputedStyle(t).display) {
                                for (var r, s, c, l, u, p, m, g, v = o, y = h(t), w = !1; !w && y;) {
                                    var b = null,
                                        k = 1 == y.nodeType ? window.getComputedStyle(y) : {};
                                    if ("none" == k.display) return null;
                                    if (y == this.root || 9 == y.nodeType)
                                        if (w = !0, y == this.root || y == e) n && !this.root ? !a || 0 == a.width && 0 == a.height ? (y = null, b = null, v = null) : b = a : b = i;
                                        else {
                                            var $ = h(y),
                                                _ = $ && d($),
                                                x = $ && this._computeTargetAndRootIntersection($, _, i);
                                            _ && x ? (y = $, b = f(_, x)) : (y = null, v = null)
                                        }
                                    else {
                                        var I = y.ownerDocument;
                                        y != I.body && y != I.documentElement && "visible" != k.overflow && (b = d(y))
                                    }
                                    if (b && (r = b, s = v, void 0, void 0, void 0, void 0, void 0, void 0, c = Math.max(r.top, s.top), l = Math.min(r.bottom, s.bottom), u = Math.max(r.left, s.left), g = l - c, v = (m = (p = Math.min(r.right, s.right)) - u) >= 0 && g >= 0 && {
                                            top: c,
                                            bottom: l,
                                            left: u,
                                            right: p,
                                            width: m,
                                            height: g
                                        } || null), !v) break;
                                    y = y && h(y)
                                }
                                return v
                            }
                        }, s.prototype._getRootRect = function() {
                            var t;
                            if (this.root) t = d(this.root);
                            else {
                                var n = e.documentElement,
                                    a = e.body;
                                t = {
                                    top: 0,
                                    left: 0,
                                    right: n.clientWidth || a.clientWidth,
                                    width: n.clientWidth || a.clientWidth,
                                    bottom: n.clientHeight || a.clientHeight,
                                    height: n.clientHeight || a.clientHeight
                                }
                            }
                            return this._expandRectByRootMargin(t)
                        }, s.prototype._expandRectByRootMargin = function(e) {
                            var t = this._rootMarginValues.map((function(t, n) {
                                    return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
                                })),
                                n = {
                                    top: e.top - t[0],
                                    right: e.right + t[1],
                                    bottom: e.bottom + t[2],
                                    left: e.left - t[3]
                                };
                            return n.width = n.right - n.left, n.height = n.bottom - n.top, n
                        }, s.prototype._hasCrossedThreshold = function(e, t) {
                            var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                                a = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                            if (n !== a)
                                for (var o = 0; o < this.thresholds.length; o++) {
                                    var i = this.thresholds[o];
                                    if (i == n || i == a || i < n != i < a) return !0
                                }
                        }, s.prototype._rootIsInDom = function() {
                            return !this.root || p(e, this.root)
                        }, s.prototype._rootContainsTarget = function(t) {
                            return p(this.root || e, t) && (!this.root || this.root.ownerDocument == t.ownerDocument)
                        }, s.prototype._registerInstance = function() {
                            t.indexOf(this) < 0 && t.push(this)
                        }, s.prototype._unregisterInstance = function() {
                            var e = t.indexOf(this); - 1 != e && t.splice(e, 1)
                        }, window.IntersectionObserver = s, window.IntersectionObserverEntry = r
                    }
                function i(e) {
                    try {
                        return e.defaultView && e.defaultView.frameElement || null
                    } catch (e) {
                        return null
                    }
                }

                function r(e) {
                    this.time = e.time, this.target = e.target, this.rootBounds = u(e.rootBounds), this.boundingClientRect = u(e.boundingClientRect), this.intersectionRect = u(e.intersectionRect || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }), this.isIntersecting = !!e.intersectionRect;
                    var t = this.boundingClientRect,
                        n = t.width * t.height,
                        a = this.intersectionRect,
                        o = a.width * a.height;
                    this.intersectionRatio = n ? Number((o / n).toFixed(4)) : this.isIntersecting ? 1 : 0
                }

                function s(e, t) {
                    var n, a, o, i = t || {};
                    if ("function" != typeof e) throw new Error("callback must be a function");
                    if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
                    this._checkForIntersections = (n = this._checkForIntersections.bind(this), a = this.THROTTLE_TIMEOUT, o = null, function() {
                        o || (o = setTimeout((function() {
                            n(), o = null
                        }), a))
                    }), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
                        return e.value + e.unit
                    })).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
                }

                function c(e, t, n, a) {
                    "function" == typeof e.addEventListener ? e.addEventListener(t, n, a || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
                }

                function l(e, t, n, a) {
                    "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, a || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
                }

                function d(e) {
                    var t;
                    try {
                        t = e.getBoundingClientRect()
                    } catch (e) {}
                    return t ? (t.width && t.height || (t = {
                        top: t.top,
                        right: t.right,
                        bottom: t.bottom,
                        left: t.left,
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    }), t) : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }

                function u(e) {
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

                function f(e, t) {
                    var n = t.top - e.top,
                        a = t.left - e.left;
                    return {
                        top: n,
                        left: a,
                        height: t.height,
                        width: t.width,
                        bottom: n + t.height,
                        right: a + t.width
                    }
                }

                function p(e, t) {
                    for (var n = t; n;) {
                        if (n == e) return !0;
                        n = h(n)
                    }
                    return !1
                }

                function h(t) {
                    var n = t.parentNode;
                    return 9 == t.nodeType && t != e ? i(t) : n && 11 == n.nodeType && n.host ? n.host : n && n.assignedSlot ? n.assignedSlot.parentNode : n
                }
            }()
        },
        19: function(e, t) {},
        190: function(e, t, n) {
            e.exports = n(191)
        },
        191: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(31),
                o = n.n(a),
                i = n(10),
                r = n.n(i),
                s = n(5),
                c = n.n(s),
                l = n(1),
                d = n(6),
                u = n(17),
                f = n(8),
                p = n(9),
                h = n(3),
                m = n(0),
                g = n(32),
                v = n(88),
                y = n.n(v),
                w = n(23),
                b = n(24),
                k = n(2),
                _ = n(44);
            n(57), n(58), console.log("liveRoom"), n(37), w.default.init(), "1" != m.default.showComment && $("#textarea .textarea").attr("contenteditable", !1), h.default.showDownload((function() {
                $(".liveRoom-wrapper .media .mobile-text").show()
            })), $(r()(c.a.mark((function e() {
                var t, n, a, i, s, v, x, I, C, T, D, z, R, O, N, L, E, S, M, j, B, U, A, P, F, H, q, V, W, J, G, Y, X, Q, K, Z, ee, te, ne, ae;
                return c.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (ne = function() {
                                    return f.default.sendComment($(".liveRoom-wrapper #textarea .textarea").html()).length
                                }, te = function() {
                                    var e = ne();
                                    $(".chat-bottom .count-box .text-count").text(e)
                                }, ee = function(e) {
                                    if (!d.default.handleLoginJump())
                                        if (e = f.default.sendComment(e))
                                            if (Z !== e) {
                                                Z = e;
                                                var t = {
                                                    sendUid: l.storeData.userInfo.uid,
                                                    roomNum: s,
                                                    msgType: 1,
                                                    content: e,
                                                    flag: (new Date).getTime()
                                                };
                                                w.default.send(m.default.WS_CODE.COMMENT, t), l.storeData.wsLastestComment = t, $("#textarea .textarea").html(""), $("#fullScreenInput").html(""), te()
                                            } else Object(p.Msg)({
                                                message: k.default.comment_repeat_tip
                                            });
                                    else Object(p.Msg)({
                                        message: k.default.chat_content_null
                                    })
                                }, Q = function(e) {
                                    if (e) {
                                        var t = e;
                                        t = (t = t.replace(/\[football\]/g, (function(e) {
                                            return '<img src="'.concat(m.default.cdn, "/assets/").concat(m.default.env, '/img/sports/football.png">')
                                        }))).replace(/\[basketball\]/g, (function(e) {
                                            return '<img src="'.concat(m.default.cdn, "/assets/").concat(m.default.env, '/img/sports/basketball.png">')
                                        })), $(".marquee-container").show(), $(".marquee-container .marquee-box").html(t);
                                        var n = (2 * $(".marquee-container .marquee-box").width() + 1200) / 184.5 + "s";
                                        $(".marquee-container .marquee-box").css({
                                            "animation-duration": n
                                        })
                                    }
                                }, X = function(e) {
                                    var t = "",
                                        n = "";
                                    e.map((function(e, a) {
                                        e.roomNum !== s && (t += '\n        <div class="swiper-slide">\n          <a href="'.concat(h.default.roomUrl(e.roomNum), '">\n            <img class="cover lazyload live-cover" src="').concat(m.default.cdn, "/assets/").concat(m.default.env, '/img/live-cover.png" data-src="').concat(e.cutOutCustomCoverUrl ? e.cutOutCustomCoverUrl : e.cover, '" data-src-backup="').concat(e.cover, '">\n            <div class="living">\n              <img src="').concat(m.default.cdn, "/assets/").concat(m.default.env, '/img/living.gif">\n              <span>Live</span>\n            </div>\n            <div class="bottom">\n              <div class="content">').concat(e.title, "</div>\n            </div>\n          </a>\n        </div>"), n += '\n      <li>\n        <a href="'.concat(h.default.roomUrl(e.roomNum), '">\n          <div class="live-item">\n            <img class="fm lazyload live-cover" src="').concat(m.default.cdn, "/assets/").concat(m.default.env, '/img/live-cover.png" data-src="').concat(e.cutOutCustomCoverUrl ? e.cutOutCustomCoverUrl : e.cover, '" data-src-backup="').concat(e.cover, '" />\n            \x3c!-- <div class="live-mask"></div> --\x3e\n            <i class="btn-open"></i>\n            <div class="top-tag">\n              ').concat(1 === e.markType ? '<span class="tag">\n                  <i i18n-text="官方">'.concat(k.default.official_tag, "</i>\n                </span>") : 2 === e.markType ? '<span class="com">\n                  <i i18n-text="推荐">'.concat(k.default.recommend_tag, "</i>\n                </span>") : 3 === e.markType ? '<span class="hots">\n                  <i i18n-text="火爆">'.concat(k.default.hot_tag, "</i>\n                </span>") : "<span class></span>", '\n              <div class="living">\n                <img src="').concat(m.default.cdn, "/assets/").concat(m.default.env, '/img/living.gif">\n                <span>Live</span>\n              </div>\n            </div>\n          </div>\n          <h4 class="ellipsis">').concat(e.title, '</h4>\n          <h6>\n            <span class="name fl f12">\n              <img class="head" src="').concat(e.anchor.icon || m.default.cdn + "/assets/".concat(m.default.env, "/img/avatar.png"), '" />\n              ').concat(e.anchor.nickName, '\n            </span>\n            <span class="num" >').concat(f.default.viewCount(e.viewCount), "</span>\n          </h6>\n        </a>\n      </li>"))
                                    })), $(".recommend-swiper-container .swiper-wrapper").html(t), i.init(), $(".category .category-list").html(n), $(".category").show(), h.default.loadImg("live")
                                }, Y = function(e) {
                                    $(".schedule-text").hide();
                                    var t = '<div flex="dir:top main:center cross:center"><div class="schedule-img" flex="main:center cross:cener">\n                        <div><img class="logo match-cover"\n                                src="'.concat(e.hostIcon, '" alt="">\n                        </div>\n                        <p> ').concat(e.hostName, " VS ").concat(e.guestName, ' </p>\n                        <div><img class="logo match-cover"\n                                src="').concat(e.guestIcon, '" alt="">\n                        </div>\n                    </div>\n                    <div class="schedule-time">\n                        ').concat(f.default.formatDate3(f.default.zoneDate(e.matchTime).getTime()), '\n                    </div>\n                    <div class="schedule-countdown" flex="main:center cross:cener">\n                        <div>\n                            <span class="days_cd">0</span>Ngày\n                        </div>\n                        <div>\n                            <span class="hours_cd">0</span> Giờ\n                        </div>\n                        <div>\n                            <span class="minutes_cd">0</span>Phút\n                        </div>\n                        <div>\n                            <span class="seconds_cd">0</span>Giây\n                        </div>\n                    </div></div>');
                                    $(".schedule-box").html(t).show();
                                    var n = f.default.zoneDate(e.matchTime).getTime();
                                    n - (new Date).valueOf() > 0 && setInterval((function() {
                                        var e = (n - (new Date).valueOf()) / 1e3;
                                        e <= 0 && location.reload(), $(".days_cd").text(Math.floor(e / 86400)), $(".hours_cd").text(Math.floor(e / 3600 % 24)), $(".minutes_cd").text(Math.floor(e / 60 % 60)), $(".seconds_cd").text(Math.floor(e % 60))
                                    }), 1e3)
                                }, G = function(e) {
                                    if (e.length > 0) {
                                        var t = "",
                                            n = f.default.Today(new Date),
                                            o = f.default.Tomorrow(new Date);
                                        e.map((function(e, a) {
                                            t += '\n          <div class="swiper-slide game">\n            <div class="title">\n              <div class="fl">\n                <img src="'.concat(e.categoryIcon, '"  class="icon" />\n                <span>').concat(e.subCateName, "</span>\n              </div>\n                ").concat(new Date(f.default.zoneDate(e.matchTime).getTime()).getDate() == n ? '\n                  <div class="fr match-time" >\n                    <span style="padding-right:5px;" i18n-text="今天">'.concat(k.default.today, "</span>\n                    ") + f.default.formatDate1(f.default.zoneDate(e.matchTime).getTime()) + "\n                  </div>" : new Date(f.default.zoneDate(e.matchTime).getTime()).getDate() == o ? '\n                  <div class="fr">\n                      <span style="padding-right:5px" i18n-text="明天">'.concat(k.default.tomorrow, "</span>\n                      ") + f.default.formatDate1(f.default.zoneDate(e.matchTime).getTime()) + "\n                    </div>" : '<div class="fr">' + f.default.formatDate(f.default.zoneDate(e.matchTime).getTime()) + " </div>", '\n            </div>\n            <div class="box">\n              <div class="battle-team fl">\n                <p>\n                  <img class="logo lazyload match-cover" src="').concat(m.default.cdn, "/assets/").concat(m.default.env, '/img/match-cover.png" data-src="').concat(e.hostIcon, '" />\n                  <span class="ellipsis">').concat(e.hostName, '</span>\n                </p>\n                <p>\n                  <img class="logo lazyload match-cover" src="').concat(m.default.cdn, "/assets/").concat(m.default.env, '/img/match-cover.png" data-src="').concat(e.guestIcon, '" alt />\n                  <span class="ellipsis">').concat(e.guestName, '</span>\n                </p>\n              </div>\n              <a href="javascript:;" data-id=\'').concat(e.scheduleId, "' class=\"appoinment ").concat(1 === e.reservationStatus ? "use" : "", '">\n                ').concat(1 == e.reservationStatus ? k.default.already_subscribe : k.default.subscribe, "\n              </a>\n            </div>\n          </div>")
                                        })), $(".appoinment-list .swiper-wrapper").html(t), $(".appoinment-list").show(), h.default.loadImg("match"), d.default.handleIsHadUserLogin() && d.default.matchReservationList().then((function(e) {
                                            e.matches.forEach((function(e) {
                                                $(".appoinment-list .swiper-slide .appoinment[data-id=".concat(e.scheduleId, "]")).addClass("use").html(k.default.already_subscribe)
                                            }))
                                        })), $(".appoinment-list .swiper-wrapper .game .appoinment").click((function() {
                                            var e = this;
                                            if (!d.default.handleLoginJump()) {
                                                var t = $(this).attr("data-id"),
                                                    n = 1;
                                                $(this).hasClass("use") && (n = 2);
                                                var a = {
                                                    operation: n,
                                                    matchId: t
                                                };
                                                d.default.matchReservation(a).then((function(t) {
                                                    var a = "";
                                                    1 == n ? (a = k.default.subscribe_success, $(e).addClass("use").html(k.default.already_subscribe)) : (a = k.default.subscribe_cancel, $(e).removeClass("use").html(k.default.subscribe)), Object(p.Msg)({
                                                        message: a
                                                    })
                                                }))
                                            }
                                        })), a.init()
                                    }
                                }, J = function(e) {
                                    if (e && e.length > 0) {
                                        var t = "";
                                        e.map((function(e, n) {
                                            t += '\n        <li>\n          <span class="num">'.concat(n + 1 > 3 ? n + 1 : "", '</span>\n          <span class="img-header">\n            <img class="avatar lazyload" src="').concat(m.default.cdn, "/assets/").concat(m.default.env, '/img/avatar.png" data-src="').concat(e.user.cutOutIcon ? e.user.cutOutIcon : e.user.icon, '" data-src-backup="').concat(e.user.icon, '" />\n          </span>\n          <span class="username ellipsis">').concat(e.user.nickName, '</span>\n          <span class="level">\n            <img src="').concat(m.default.cdn, "/assets/").concat(m.default.env, "/img/lv").concat(e.user.growDto.id, '.png" alt />\n          </span>\n          <span class="contribution" i18n-text="贡献">').concat(k.default.contribution + "" + e.contribution, "</span>\n        </li>")
                                        })), $(".rank-list ul").html(t).show(), $(".rank-list-null").hide(), h.default.loadImg("avatar", ".img-header ")
                                    } else $(".rank-list ul").hide(), $(".rank-list-null").show()
                                }, W = function() {
                                    return (W = r()(c.a.mark((function e(t) {
                                        var n, a;
                                        return c.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return n = {
                                                        uid: t,
                                                        roomNum: s
                                                    }, e.next = 3, d.default.liveForbiddenStatus(n);
                                                case 3:
                                                    return a = e.sent, e.abrupt("return", a);
                                                case 5:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))).apply(this, arguments)
                                }, V = function(e) {
                                    return W.apply(this, arguments)
                                }, q = function() {
                                    return (q = r()(c.a.mark((function e(t, n, a) {
                                        var o;
                                        return c.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return o = {
                                                        uid: a,
                                                        status: t
                                                    }, 1 === t && (o.time = x), 1 === n && (o.roomNum = s), e.prev = 3, e.next = 6, d.default.liveForbidden(o);
                                                case 6:
                                                    e.sent, 1 == t ? Object(p.Msg)({
                                                        message: k.default.ban_success
                                                    }) : 2 == t && Object(p.Msg)({
                                                        message: k.default.ban_cancel
                                                    }), e.next = 13;
                                                    break;
                                                case 10:
                                                    e.prev = 10, e.t0 = e.catch(3), console.log(e.t0);
                                                case 13:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [3, 10]
                                        ])
                                    })))).apply(this, arguments)
                                }, H = function(e, t, n) {
                                    return q.apply(this, arguments)
                                }, F = function() {
                                    return (F = r()(c.a.mark((function e(t, n) {
                                        var a;
                                        return c.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (d.default.handleLoginJump(!1)) {
                                                        e.next = 13;
                                                        break
                                                    }
                                                    return a = {
                                                        operation: t,
                                                        targetUid: l.storeData.room.anchor.uid
                                                    }, e.prev = 2, e.next = 5, d.default.liveAttention(a);
                                                case 5:
                                                    e.sent, Object(p.Msg)({
                                                        message: 1 === t ? k.default.follow_success : k.default.follow_cancel
                                                    }), 1 === t ? n.addClass("no-follow").html(k.default.already_follow) : n.removeClass("no-follow").html(k.default.follow), e.next = 13;
                                                    break;
                                                case 10:
                                                    e.prev = 10, e.t0 = e.catch(2), console.log(e.t0);
                                                case 13:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [2, 10]
                                        ])
                                    })))).apply(this, arguments)
                                }, P = function(e, t) {
                                    return F.apply(this, arguments)
                                }, A = function() {
                                    return (A = r()(c.a.mark((function e() {
                                        var t;
                                        return c.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, u.default.liveRankList({
                                                        roomNum: s
                                                    });
                                                case 3:
                                                    t = e.sent, J(t), e.next = 10;
                                                    break;
                                                case 7:
                                                    e.prev = 7, e.t0 = e.catch(0), console.log(e.t0);
                                                case 10:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 7]
                                        ])
                                    })))).apply(this, arguments)
                                }, U = function() {
                                    return A.apply(this, arguments)
                                }, B = function() {
                                    return (B = r()(c.a.mark((function e() {
                                        var t, n;
                                        return c.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, u.default.liveAppointmentSchedule({
                                                        roomNum: s
                                                    });
                                                case 3:
                                                    (t = e.sent).matches, G(t.matches), (n = t.matches.find((function(e) {
                                                        return e.scheduleId == C
                                                    }))) && Y(n), e.next = 13;
                                                    break;
                                                case 10:
                                                    e.prev = 10, e.t0 = e.catch(0), console.log(e.t0);
                                                case 13:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 10]
                                        ])
                                    })))).apply(this, arguments)
                                }, j = function() {
                                    return B.apply(this, arguments)
                                }, M = function() {
                                    return (M = r()(c.a.mark((function e() {
                                        var t, n;
                                        return c.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (e.prev = 0, !h.default.hostIncludes(m.default.greenDomains)) {
                                                        e.next = 8;
                                                        break
                                                    }
                                                    return e.next = 4, u.default.allGreenRoom();
                                                case 4:
                                                    t = e.sent, n = t ? t.green : null, e.next = 12;
                                                    break;
                                                case 8:
                                                    return e.next = 10, u.default.allRoom();
                                                case 10:
                                                    t = e.sent, n = t ? t.hot : null;
                                                case 12:
                                                    Q(t.scroll), n && X(n), e.next = 19;
                                                    break;
                                                case 16:
                                                    e.prev = 16, e.t0 = e.catch(0), console.log(e.t0);
                                                case 19:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 16]
                                        ])
                                    })))).apply(this, arguments)
                                }, S = function() {
                                    return M.apply(this, arguments)
                                }, E = function() {
                                    return (E = r()(c.a.mark((function e() {
                                        var t, n, a;
                                        return c.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, d.default.userDetail();
                                                case 3:
                                                    (t = e.sent) && (n = t.user, a = Object.assign({}, n), l.storeData.userInfo = a, $(".integral-num").html(n.score), $("#fullScreenSocre").html(n.score), $(".noLogin").hide(), $("#textarea").show(), $(".inputBox .send").addClass("send-on")), e.next = 10;
                                                    break;
                                                case 7:
                                                    e.prev = 7, e.t0 = e.catch(0), console.log(e.t0);
                                                case 10:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 7]
                                        ])
                                    })))).apply(this, arguments)
                                }, L = function() {
                                    return E.apply(this, arguments)
                                }, console.log("$liveRoom start"), $(".text-msg .mobile-text a").attr("href", m.default.downloadAppUrl), n = h.default.debounce((function() {
                                    var e = $(".live-room-box .center-block").width() / 16 * 9;
                                    $(".live-room-box .center-block").css({
                                        height: e
                                    });
                                    var t = e + $(".live-room-box .top-block").outerHeight() - $(".live-room-box .chat .notice").outerHeight() - $(".live-room-box .chat .tab").outerHeight() - $(".live-room-box .chat .chat-bottom").outerHeight();
                                    $(".chat .chat-center").css({
                                        height: t
                                    })
                                }), 50), window.addEventListener("resize", (function(e) {
                                    n(), setTimeout((function() {
                                        n()
                                    }), 1)
                                })), n(), setTimeout((function() {
                                    n()
                                }), 1e3), $("body").click((function() {
                                    $(".chat-item.right-click").removeClass("right-click"), $(".dele-msg").attr("data-id", "").fadeOut(50), $(".forbidden-select-opt").fadeOut(150), $(".emoji-panel").fadeOut(150)
                                })), a = new Swiper(".appoinment-swiper-container", (t = {
                                    direction: "horizontal",
                                    init: !1,
                                    slidesPerView: 5
                                }, o()(t, "slidesPerView", "auto"), o()(t, "navigation", {
                                    nextEl: ".appoinment-next",
                                    prevEl: ".appoinment-prev"
                                }), t)), i = new Swiper(".recommend-swiper-container", o()({
                                    direction: "horizontal",
                                    init: !1,
                                    slidesPerView: 3
                                }, "slidesPerView", "auto")), v = null, x = 0, I = "", C = "", s = h.default.getRoomNum(), C = h.default.getUrlParam("scheduleId"), !d.default.handleIsHadUserLogin()) {
                                e.next = 56;
                                break
                            }
                            return e.prev = 37, e.next = 40, d.default.liveAttentionList();
                        case 40:
                            if (!((T = e.sent) && T.comperes && T.comperes.length > 0)) {
                                e.next = 51;
                                break
                            }
                            D = T.comperes, z = 0;
                        case 44:
                            if (!(z < D.length)) {
                                e.next = 51;
                                break
                            }
                            if (D[z].roomNum != s) {
                                e.next = 48;
                                break
                            }
                            return $(".follow").addClass("no-follow").html(k.default.already_follow), e.abrupt("break", 51);
                        case 48:
                            z++, e.next = 44;
                            break;
                        case 51:
                            e.next = 56;
                            break;
                        case 53:
                            e.prev = 53, e.t0 = e.catch(37), console.log(e.t0);
                        case 56:
                            R = document.getElementById("qrCodeCanvas"), O = h.default.roomUrl(s), y.a.toCanvas(R, O, {
                                width: 120
                            }, (function(e) {
                                e && console.log(e, O)
                            })), d.default.handleIsHadUserLogin() && L(), S(), j(), N = "", Object.keys(g).map((function(e) {
                                N += "<li data-id='".concat(e, "'>").concat(g[e].char, "</li>")
                            })), $(".emoji-panel .browBox ul").html(N), N = null, $(".emoji").click((function() {
                                return $(".emoji-panel").fadeIn(150), !1
                            })), $("#fullScreenEmoji").click((function() {
                                return $(".emoji-panel").fadeIn(150), !1
                            })), $(".emoji-panel ul li").click((function() {
                                var e = $(this).attr("data-id");
                                $("#textarea .textarea").append(g[e].char), $("#fullScreenInput").append(g[e].char)
                            })), K = !1, $(".tab .tab-item").click((function() {
                                var e = $(this);
                                e.hasClass("tab-active") || ($(".tab .tab-item").removeClass("tab-active"), e.addClass("tab-active"), "0" == e.attr("data-id") ? ($(".chat-panel").fadeIn(150), $(".rank-list").hide()) : ($(".chat-panel").hide(), $(".rank-list").fadeIn(150), K || (K = !0, U())))
                            })), $(".get-integral").click((function() {
                                $(".how-getpoints").fadeIn(150)
                            })), $(".how-getpoints .close-icon").click((function() {
                                $(".how-getpoints").fadeOut(150)
                            })), $("#follow").click((function() {
                                var e = $(this);
                                e.hasClass("no-follow") ? P(2, e) : P(1, e)
                            })), $(".send").click((function() {
                                if ($(".send").hasClass("send-on")) {
                                    var e = $("#textarea .textarea").html();
                                    ee(e)
                                }
                            })), $(".send-danmu-enter").click((function() {
                                var e = $("#fullScreenInput").html();
                                ee(e)
                            })), $("#textarea .textarea").keyup((function(e) {
                                if (te(), 13 == e.keyCode) {
                                    e.preventDefault();
                                    var t = $(this).html();
                                    ee(t)
                                }
                            })), $("#fullScreenInput").keydown((function(e) {
                                if (13 == e.keyCode) {
                                    e.preventDefault();
                                    var t = $(this).html();
                                    ee(t)
                                }
                            })), Z = "", $(".noLogin span").click((function() {
                                d.default.handleLoginJump()
                            })), $(".newMsg-tips").click((function() {
                                $("#chat-list").animate({
                                    scrollTop: $("#chat-list>div").height()
                                }, 500), $(this).fadeOut(50)
                            })), $("#chat-list").scroll((function() {
                                var e = $(this);
                                e.scrollTop() + e.height() >= $("#chat-list>div").height() && $(".newMsg-tips").fadeOut(50)
                            })), $("input[name='shieldCheckbox']").on("change", (function() {
                                var e = $(this),
                                    t = e.attr("id"),
                                    n = (e.attr("value"), $("#CheckboxGift").is(":checked")),
                                    a = $("#CheckboxWc").is(":checked"),
                                    o = $("#CheckboxAll").is(":checked"),
                                    i = e.is(":checked");
                                "CheckboxAll" == t ? ($("input[name='shieldCheckbox']").prop("checked", i), l.storeData.shieldGift = i, l.storeData.shieldWc = i) : "CheckboxGift" == t ? (l.storeData.shieldGift = i, (i && a || !i && o) && $("#CheckboxAll").prop("checked", i)) : "CheckboxWc" == t && (l.storeData.shieldWc = i, (i && n || !i && o) && $("#CheckboxAll").prop("checked", i))
                            })), $("#chat-list, .dele-msg").bind("contextmenu", (function(e) {
                                return !1
                            })), $("#chat-list").on("mousedown", ".chat-item[data-id]", (function(e) {
                                if (3 === e.which && (3 == l.storeData.userInfo.userType || 2 == l.storeData.userInfo.userType && l.storeData.userInfo.uid == l.storeData.room.anchor.uid)) {
                                    var t = $(this),
                                        n = $("#chat-list"),
                                        a = $(".dele-msg"),
                                        o = e.clientX - n.offset().left - a.width() / 2 + "px",
                                        i = e.clientY - n.offset().top - a.height() / 2 - 12 + "px";
                                    t.addClass("right-click"), a.css("left", o), a.css("top", i), a.attr("data-id", t.attr("data-id")).fadeIn(50)
                                }
                                return !1
                            })), $(".dele-msg").click((function(e) {
                                var t = $(this).attr("data-id"),
                                    n = {
                                        roomNum: s,
                                        msgId: Number(t)
                                    };
                                w.default.send(m.default.WS_CODE.COMMENT_DELETE, n)
                            })), $(".forbidden-select>div").click((function() {
                                var e = $(this);
                                return e.siblings().children(".forbidden-select-opt").fadeOut(150), e.children(".forbidden-select-opt").fadeIn(150), !1
                            })), $(".forbidden-close").click((function() {
                                $(this).parent().fadeOut(150)
                            })), $(".forbidden-select-opt div").click((function() {
                                var e = $(this),
                                    t = $(this).text();
                                switch ($(this).attr("data-id")) {
                                    case "0":
                                        x = 7200;
                                        break;
                                    case "1":
                                        x = 86400;
                                        break;
                                    case "2":
                                        x = 259200;
                                        break;
                                    case "3":
                                        x = 2592e3;
                                        break;
                                    case "4":
                                        x = -1
                                }
                                e.parent().parent().hasClass("forbidden-room") ? (I = 1, t = k.default.put_user_whole + "<span>" + t + "</span>" + k.default.right) : e.parent().parent().hasClass("forbidden-all") && (I = 2, t = k.default.put_user_room + "<span>" + t + "</span>" + k.default.right), $(".forbidden-tip").hide(), $(".forbidden-sure-text").html(t), $(".forbidden-sure-tip").fadeIn(150)
                            })), $(".forbidden-sure-close").click((function() {
                                $(".forbidden-sure-tip").fadeOut(150)
                            })), $(".forbidden-sure-btn").click((function() {
                                $(".forbidden-sure-tip").fadeOut(150), H(1, I, v)
                            })), $("#chat-list").on("click", ".forbidden-user", (function(e) {
                                if (e.stopPropagation(), 3 != l.storeData.userInfo.userType && (2 != l.storeData.userInfo.userType || l.storeData.userInfo.uid != l.storeData.room.anchor.uid)) return !1;
                                var t = $(this).attr("data-id"),
                                    n = l.storeData.commentUserList;
                                return V(t).then((function(e) {
                                    if (v = t, 2 == e.status) {
                                        var a = $(".forbidden-tip");
                                        n[t].icon && $(".forbidden-tip .user-avatar img").attr("src", n[t].icon), n[t].nickName && $(".forbidden-tip .user-name").html(n[t].nickName), 3 == l.storeData.userInfo.userType ? ($(".forbidden-all").show(), a.fadeIn(150)) : ($(".forbidden-all").hide(), a.fadeIn(150))
                                    } else if (1 == e.status) {
                                        var o = $(".forbidden-user-tip"),
                                            i = "";
                                        n[t].icon && $(".forbidden-user-tip .user-avatar img").attr("src", n[t].icon), n[t].nickName && $(".forbidden-user-tip .user-name").html(n[t].nickName), i = 1 === e.type ? k.default.the_room : k.default.whole_site, i += -1 === e.time ? k.default.forever + k.default.ban : k.default.ban_to + f.default.forbiddenTime(e.time), I = e.type, $(".forbidden-user-tip .user-text").html(i), (1 === e.type || 2 === e.type && 3 == l.storeData.userInfo.userType) && $(".forbidden-user-tip .user-btn").show(), o.fadeIn(150)
                                    }
                                })), !1
                            })), $(".forbidden-user-tip .user-btn").click((function() {
                                H(2, I, v), $(this).parent().fadeOut(150)
                            })), $(".liveRoom-wrapper .chat .chat-list").on("click", ".chat-item:not(.sys-msg)", (function() {
                                var e = $(this).find(".user-name").text().split(":")[0];
                                if (e) {
                                    var t = $(".liveRoom-wrapper .chat .chat-bottom .inputBox .textarea");
                                    t.append('<img class="chat-point-img" src="'.concat(m.default.cdn, "/assets/").concat(m.default.env, '/img/chat-point.svg">“').concat(e, "”&nbsp;&nbsp;")), _.default.cursorEnd(t[0])
                                }
                                te()
                            })), _.default.onlyPasteText($(".liveRoom-wrapper .chat .chat-bottom .inputBox .textarea")[0]), _.default.onlyPasteText($("#fullScreenInput")[0]), h.default.closePageListener((function() {
                                w.default.send(m.default.WS_CODE.ROOM_LEAVE, {
                                    roomNum: s
                                })
                            })), ae = !1, $(".private-chat-btn").click((function() {
                                d.default.handleLoginJump() || ($(".private-chat").show(), ae ? b.default.startReceiveChat(!0) : (ae = !0, $(".chat-loading").show(), b.default.chatRecord(l.storeData.friend.openId, !0).then((function() {
                                    $(".chat-loading").hide(), b.default.insertWelcome(), b.default.startReceiveChat()
                                }))))
                            })), console.log("$liveRoom end");
                        case 100:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [37, 53]
                ])
            }))))
        },
        24: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(27),
                o = n.n(a),
                i = n(10),
                r = n.n(i),
                s = n(5),
                c = n.n(s),
                l = (n(6), n(0)),
                d = n(3),
                u = n(9),
                f = n(1),
                p = n(7),
                h = n(8),
                m = n(29),
                g = n(22),
                v = n.n(g),
                y = !1,
                w = null,
                b = 0 != l.default.debug ? 220754 : f.storeData.userInfo ? f.storeData.userInfo.uid : "",
                k = v()(b + "");

            function _(e) {
                return new Promise((function(t, n) {
                    p.default.select(p.default.tb_friends, "aOpenId_bOpenId", [e.fromOpenId, e.toOpenId]).then((function(n) {
                        p.default.select(p.default.tb_friends, "aOpenId_bOpenId", [e.toOpenId, e.fromOpenId]).then((function(a) {
                            var o = {};
                            n ? (o = n, e.fromNickName && (o.a_nickName = e.fromNickName, o.a_icon = e.fromIcon), e.toNickName && (o.b_nickName = e.toNickName, o.b_icon = e.toIcon), e.msgId > o.msgId && (o.msgId = e.msgId, p.default.update(p.default.tb_friends, o).then((function() {
                                t()
                            })))) : a ? (o = a, e.fromNickName && (o.b_nickName = e.fromNickName, o.b_icon = e.fromIcon), e.toNickName && (o.a_nickName = e.toNickName, o.a_icon = e.toIcon), e.msgId > o.msgId && (o.msgId = e.msgId, p.default.update(p.default.tb_friends, o).then((function() {
                                t()
                            })))) : (o = {
                                a_openId: e.fromOpenId,
                                a_nickName: e.fromNickName,
                                a_icon: e.fromIcon,
                                b_openId: e.toOpenId,
                                b_nickName: e.toNickName,
                                b_icon: e.toIcon,
                                msgId: e.msgId
                            }, p.default.add(p.default.tb_friends, o).then((function() {
                                t()
                            }))), t()
                        }))
                    }))
                }))
            }

            function x(e) {
                var t = new Date((new Date).toLocaleDateString()).getTime(),
                    n = t - 1e3,
                    a = t - 864e5;
                return e >= t && e < t + 864e5 ? h.default.fmtDate(e, "hh:mm") : e >= a && e < n ? h.default.fmtDate(e, "昨天 hh:mm") : h.default.fmtDate(e, "yyyy年M月d日 hh:mm")
            }
            var I = {
                startReceiveChat: function(e) {
                    e && this.receiveChat(), w = setInterval((function() {
                        I.receiveChat()
                    }), 1e4)
                },
                closeReceiveChat: function() {
                    w && clearInterval(w)
                },
                syncChat: function() {
                    var e = this;
                    return new Promise((function(t, n) {
                        e.closeReceiveChat(), e.receiveChat().then((function() {
                            e.startReceiveChat(), t()
                        })).catch((function(e) {
                            n()
                        }))
                    }))
                },
                receiveChat: function() {
                    var e = this;
                    return new Promise((function(t, n) {
                        if (y) return y = !1, void t();
                        e.getMaxMsgId().then((function(a) {
                            e.updateChatRecord(a).then((function(n) {
                                if (n && n.length > 0) {
                                    for (var a = n.length - 1; a >= 0; a--) n[a].fromOpenId == k ? e.insertChat(n[a], !0) : f.storeData.friend && n[a].fromOpenId == f.storeData.friend.openId && e.insertChat(n[a], !1);
                                    e.autoScroll()
                                }
                                t()
                            })).catch((function(e) {
                                n(e)
                            }))
                        })).catch((function(e) {
                            n(e)
                        }))
                    }))
                },
                send: function(e, t) {
                    if (!e || 0 == e.trim().length) return Object(u.Msg)({
                        message: "发送内容不能为空"
                    }), !1;
                    var n = (new Date).getTime();
                    return function(e) {
                        $(".private-chat .send-content textarea").val(""), I.checkPrivateChat();
                        var t = {
                            fromOpenId: e.fromOpenId,
                            toOpenId: e.toOpenId,
                            msgType: e.msgType,
                            content: JSON.stringify(e.content),
                            sendTime: e.sendTime,
                            flag: e.flag
                        };
                        m.default.send(t).then((function(e) {
                            I.syncChat()
                        }))
                    }({
                        sendUid: b,
                        content: {
                            content: e
                        },
                        sendTime: n,
                        flag: 1e5 * n,
                        fromOpenId: k,
                        fromNickName: f.storeData.userInfo.nickName,
                        fromIcon: f.storeData.userInfo.icon,
                        toOpenId: t,
                        msgType: 1,
                        isSend: 1
                    }), !0
                },
                checkPrivateChat: function() {
                    $(".private-chat .send-content textarea").val().trim().length > 0 ? $(".private-send").addClass("active") : $(".private-send").removeClass("active")
                },
                updateChatRecord: function(e) {
                    return new Promise((function(t, n) {
                        var a = 0;
                        e && (a = e), m.default.history({
                            openId: k,
                            maxMsgId: a
                        }).then(function() {
                            var e = r()(c.a.mark((function e(n) {
                                var a, o, i, s;
                                return c.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (a = [], !(n && n.historyList && n.historyList.length > 0)) {
                                                e.next = 14;
                                                break
                                            }
                                            a = n.historyList, o = (new Date).getTime() - 6048e5, i = c.a.mark((function e(t) {
                                                return c.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!(a[t].sendTime < o)) {
                                                                e.next = 2;
                                                                break
                                                            }
                                                            return e.abrupt("return", "continue");
                                                        case 2:
                                                            e.prev = 2, a[t].content = JSON.parse(a[t].content), e.next = 10;
                                                            break;
                                                        case 6:
                                                            return e.prev = 6, e.t0 = e.catch(2), console.log("这条消息的内容不合法", a[t]), e.abrupt("return", "continue");
                                                        case 10:
                                                            return a[t].isSend = 1, a[t].sendUid = b, (n = a[t]).from && (n.fromOpenId = n.from.openId, n.fromNickName = n.from.nickName, n.fromIcon = n.from.icon, n.from = void 0), n.to && (n.toOpenId = n.to.openId, n.toNickName = n.to.nickName, n.toIcon = n.to.icon, n.to = void 0), e.next = 15, _(a[t]).then(r()(c.a.mark((function e() {
                                                                return c.a.wrap((function(e) {
                                                                    for (;;) switch (e.prev = e.next) {
                                                                        case 0:
                                                                            return e.next = 2, p.default.selectById(p.default.tb_chat, a[t].flag).then(function() {
                                                                                var e = r()(c.a.mark((function e(n) {
                                                                                    return c.a.wrap((function(e) {
                                                                                        for (;;) switch (e.prev = e.next) {
                                                                                            case 0:
                                                                                                if (!n) {
                                                                                                    e.next = 5;
                                                                                                    break
                                                                                                }
                                                                                                return e.next = 3, p.default.update(p.default.tb_chat, a[t]);
                                                                                            case 3:
                                                                                                e.next = 7;
                                                                                                break;
                                                                                            case 5:
                                                                                                return e.next = 7, p.default.add(p.default.tb_chat, a[t]);
                                                                                            case 7:
                                                                                            case "end":
                                                                                                return e.stop()
                                                                                        }
                                                                                    }), e)
                                                                                })));
                                                                                return function(t) {
                                                                                    return e.apply(this, arguments)
                                                                                }
                                                                            }());
                                                                        case 2:
                                                                        case "end":
                                                                            return e.stop()
                                                                    }
                                                                }), e)
                                                            }))));
                                                        case 15:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                    var n
                                                }), e, null, [
                                                    [2, 6]
                                                ])
                                            })), s = a.length - 1;
                                        case 6:
                                            if (!(s >= 0)) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.delegateYield(i(s), "t0", 8);
                                        case 8:
                                            if ("continue" !== e.t0) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.abrupt("continue", 11);
                                        case 11:
                                            s--, e.next = 6;
                                            break;
                                        case 14:
                                            t(a);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }())
                    }))
                },
                chatRecord: function(e, t) {
                    if (y = !0, k != e) {
                        var n = this;
                        return new Promise((function(a, o) {
                            t ? n.getMaxMsgId().then((function(t) {
                                n.updateChatRecord(t).then((function() {
                                    n.selectAndHandleChat(e).then((function() {
                                        a()
                                    }))
                                }))
                            })) : n.selectAndHandleChat(e).then((function() {
                                a()
                            }))
                        }))
                    }
                    Object(u.Msg)({
                        message: "无法查询自己与自己的消息记录"
                    })
                },
                selectAndHandleChat: function(e) {
                    var t = this;
                    return new Promise((function(n, a) {
                        p.default.selectList(p.default.tb_chat, "fromOpenId_toOpenId", [k, e]).then((function(a) {
                            p.default.selectList(p.default.tb_chat, "fromOpenId_toOpenId", [e, k]).then((function(e) {
                                t.handleChat(a, e), t.autoScroll(), y = !1, n()
                            }))
                        }))
                    }))
                },
                handleChat: function(e, t) {
                    if (0 != e.length || 0 != t.length)
                        if (e.sort((function(e, t) {
                                return e.sendTime - t.sendTime
                            })), t.sort((function(e, t) {
                                return e.sendTime - t.sendTime
                            })), 0 == t.length)
                            for (var n = 0; n < e.length; n++) this.insertChat(e[n], !0);
                        else {
                            for (var a = 0, o = 0; o < e.length;) a < t.length ? e[o].sendTime < t[a].sendTime ? (this.insertChat(e[o], !0), o++) : (this.insertChat(t[a], !1), a++) : (this.insertChat(e[o], !0), o++);
                            for (; a < t.length; a++) this.insertChat(t[a], !1)
                        }
                },
                insertChat: function(e, t) {
                    var n = f.storeData.friend.icon,
                        a = $(".private-chat .word-content"),
                        o = a.find(".word-item:last"),
                        i = e.sendTime - 3e5,
                        r = "";
                    if (0 == o.length) r = x(e.sendTime);
                    else if (!o.hasClass("time")) {
                        var s = Number(o.attr("data-time"));
                        s && s <= i && (r = x(e.sendTime))
                    }
                    r && a.append('<div class="word-item time">'.concat(r, "</div>")), 1 == e.msgType && (e.content.content = e.content.content.replace(/\n/g, "<br>"));
                    var c = "";
                    if (2 == e.msgType ? c = '<a target="_blank" href="'.concat(l.default.downloadAppUrl, '">[图片] - 下载APP可查看</a>') : 3 == e.msgType ? c = '<a target="_blank" href="'.concat(l.default.downloadAppUrl, '">[语音] - 下载APP可查看</a>') : 4 == e.msgType && (c = '<a target="_blank" href="'.concat(l.default.downloadAppUrl, '">[视频] - 下载APP可查看</a>')), t) {
                        var d = '<div class="word-item user-word right-word" data-flag="'.concat(e.flag, '" data-time="').concat(e.sendTime, '">\n      <div class="word">').concat(1 == e.msgType ? "<span>".concat(e.content.content, "</span>") : "<span>".concat(c, "</span>"));
                        e.isSend ? d += "</div></div>" : d += '<img class="error" src="'.concat(l.default.cdn, "/assets/").concat(l.default.env, '/img/privateChat/error.png"></div></div>'), a.append(d)
                    } else o.hasClass("left-word") && !r && (o.removeClass("active"), o.find(".from").remove()), a.append('<div class="word-item user-word left-word active" data-flag="'.concat(e.flag, '" data-time="').concat(e.sendTime, '">\n        <div class="word-box">\n        <div class="avatar-box">\n          <img class="lazyload avatar" src="').concat(l.default.cdn, "/assets/").concat(l.default.env, '/img/avatar.png" data-src="').concat(n, '" hidden>\n        </div>\n        <div class="word">').concat(1 == e.msgType ? "<span>".concat(e.content.content, "</span>") : "<span>".concat(c, "</span>"), "</div>\n        </div>\n      </div>"))
                },
                insertWelcome: function() {
                    var e = $(".private-chat .word-content"),
                        t = new Date;
                    e.find(".word-item:last").hasClass("time") || e.append('<div class="word-item time">'.concat(h.default.fmtDate(t, "hh:mm"), "</div>")), e.append('<div class="word-item welcome" data-time="'.concat(t.getTime(), '">助手 ').concat(f.storeData.friend.nickName, " 为您服务，有什么可以帮您</div>")), this.autoScroll()
                },
                resend: function(e, t, n) {
                    this.send(e, t), p.default.delete(p.default.tb_chat, n)
                },
                autoScroll: function(e) {
                    d.default.loadImg("avatar");
                    var t = $(".private-chat .word-content");
                    e ? t.animate({
                        scrollTop: t.get(0).scrollHeight
                    }, "fast") : t.scrollTop(t.get(0).scrollHeight)
                },
                friendList: function() {
                    var e = this;
                    return new Promise((function(t, n) {
                        e.getMaxMsgId().then((function(n) {
                            e.updateChatRecord(n).then((function() {
                                p.default.selectList(p.default.tb_friends, "a_openId", k).then((function(e) {
                                    p.default.selectList(p.default.tb_friends, "b_openId", k).then((function(n) {
                                        e && e.length > 0 || (e = []), n && n.length > 0 || (n = []);
                                        var a = [];
                                        (e.length > 0 || n.length > 0) && (a = [].concat(o()(e), o()(n))).sort((function(e, t) {
                                            return t.msgId - e.msgId
                                        })), t(a)
                                    }))
                                }))
                            }))
                        }))
                    }))
                },
                getMaxMsgId: function() {
                    return new Promise((function(e, t) {
                        p.default.selectTop(p.default.tb_friends, "msgId", "prev").then((function(t) {
                            var n = 0;
                            t && t.msgId && (n = t.msgId), e(n)
                        }))
                    }))
                }
            };
            t.default = I
        },
        32: function(e) {
            e.exports = JSON.parse('{"grinning":{"keywords":["face","smile","happy","joy",":D","grin"],"char":"😀","fitzpatrick_scale":false,"category":"people"},"grin":{"keywords":["face","happy","smile","joy","kawaii"],"char":"😁","fitzpatrick_scale":false,"category":"people"},"smiley":{"keywords":["face","happy","joy","haha",":D",":)","smile","funny"],"char":"😃","fitzpatrick_scale":false,"category":"people"},"smile":{"keywords":["face","happy","joy","funny","haha","laugh","like",":D",":)"],"char":"😄","fitzpatrick_scale":false,"category":"people"},"sweat_smile":{"keywords":["face","hot","happy","laugh","sweat","smile","relief"],"char":"😅","fitzpatrick_scale":false,"category":"people"},"laughing":{"keywords":["happy","joy","lol","satisfied","haha","face","glad","XD","laugh"],"char":"😆","fitzpatrick_scale":false,"category":"people"},"innocent":{"keywords":["face","angel","heaven","halo"],"char":"😇","fitzpatrick_scale":false,"category":"people"},"wink":{"keywords":["face","happy","mischievous","secret",";)","smile","eye"],"char":"😉","fitzpatrick_scale":false,"category":"people"},"blush":{"keywords":["face","smile","happy","flushed","crush","embarrassed","shy","joy"],"char":"😊","fitzpatrick_scale":false,"category":"people"},"slightly_smiling_face":{"keywords":["face","smile"],"char":"🙂","fitzpatrick_scale":false,"category":"people"},"yum":{"keywords":["happy","joy","tongue","smile","face","silly","yummy","nom","delicious","savouring"],"char":"😋","fitzpatrick_scale":false,"category":"people"},"heart_eyes":{"keywords":["face","love","like","affection","valentines","infatuation","crush","heart"],"char":"😍","fitzpatrick_scale":false,"category":"people"},"kissing_heart":{"keywords":["face","love","like","affection","valentines","infatuation","kiss"],"char":"😘","fitzpatrick_scale":false,"category":"people"},"kissing":{"keywords":["love","like","face","3","valentines","infatuation","kiss"],"char":"😗","fitzpatrick_scale":false,"category":"people"},"kissing_smiling_eyes":{"keywords":["face","affection","valentines","infatuation","kiss"],"char":"😙","fitzpatrick_scale":false,"category":"people"},"kissing_closed_eyes":{"keywords":["face","love","like","affection","valentines","infatuation","kiss"],"char":"😚","fitzpatrick_scale":false,"category":"people"},"stuck_out_tongue_winking_eye":{"keywords":["face","prank","childish","playful","mischievous","smile","wink","tongue"],"char":"😜","fitzpatrick_scale":false,"category":"people"},"stuck_out_tongue_closed_eyes":{"keywords":["face","prank","playful","mischievous","smile","tongue"],"char":"😝","fitzpatrick_scale":false,"category":"people"},"stuck_out_tongue":{"keywords":["face","prank","childish","playful","mischievous","smile","tongue"],"char":"😛","fitzpatrick_scale":false,"category":"people"},"sunglasses":{"keywords":["face","cool","smile","summer","beach","sunglass"],"char":"😎","fitzpatrick_scale":false,"category":"people"},"roll_eyes":{"keywords":["face","eyeroll","frustrated"],"char":"🙄","fitzpatrick_scale":false,"category":"people"},"flushed":{"keywords":["face","blush","shy","flattered"],"char":"😳","fitzpatrick_scale":false,"category":"people"},"rage":{"keywords":["angry","mad","hate","despise"],"char":"😡","fitzpatrick_scale":false,"category":"people"},"confused":{"keywords":["face","indifference","huh","weird","hmmm",":/"],"char":"😕","fitzpatrick_scale":false,"category":"people"},"tired_face":{"keywords":["sick","whine","upset","frustrated"],"char":"😫","fitzpatrick_scale":false,"category":"people"},"triumph":{"keywords":["face","gas","phew","proud","pride"],"char":"😤","fitzpatrick_scale":false,"category":"people"},"fearful":{"keywords":["face","scared","terrified","nervous","oops","huh"],"char":"😨","fitzpatrick_scale":false,"category":"people"},"disappointed_relieved":{"keywords":["face","phew","sweat","nervous"],"char":"😥","fitzpatrick_scale":false,"category":"people"},"sleepy":{"keywords":["face","tired","rest","nap"],"char":"😪","fitzpatrick_scale":false,"category":"people"},"sweat":{"keywords":["face","hot","sad","tired","exercise"],"char":"😓","fitzpatrick_scale":false,"category":"people"},"dizzy_face":{"keywords":["spent","unconscious","xox","dizzy"],"char":"😵","fitzpatrick_scale":false,"category":"people"},"astonished":{"keywords":["face","xox","surprised","poisoned"],"char":"😲","fitzpatrick_scale":false,"category":"people"},"sneezing_face":{"keywords":["face","gesundheit","sneeze","sick","allergy"],"char":"🤧","fitzpatrick_scale":false,"category":"people"},"mask":{"keywords":["face","sick","ill","disease"],"char":"😷","fitzpatrick_scale":false,"category":"people"},"face_with_thermometer":{"keywords":["sick","temperature","thermometer","cold","fever"],"char":"🤒","fitzpatrick_scale":false,"category":"people"},"face_with_head_bandage":{"keywords":["injured","clumsy","bandage","hurt"],"char":"🤕","fitzpatrick_scale":false,"category":"people"},"sleeping":{"keywords":["face","tired","sleepy","night","zzz"],"char":"😴","fitzpatrick_scale":false,"category":"people"},"zzz":{"keywords":["sleepy","tired","dream"],"char":"💤","fitzpatrick_scale":false,"category":"people"},"clap":{"keywords":["hands","praise","applause","congrats","yay"],"char":"👏","fitzpatrick_scale":true,"category":"people"},"call_me_hand":{"keywords":["hands","gesture"],"char":"🤙","fitzpatrick_scale":true,"category":"people"},"+1":{"keywords":["thumbsup","yes","awesome","good","agree","accept","cool","hand","like"],"char":"👍","fitzpatrick_scale":true,"category":"people"},"-1":{"keywords":["thumbsdown","no","dislike","hand"],"char":"👎","fitzpatrick_scale":true,"category":"people"},"facepunch":{"keywords":["angry","violence","fist","hit","attack","hand"],"char":"👊","fitzpatrick_scale":true,"category":"people"},"fist":{"keywords":["fingers","hand","grasp"],"char":"✊","fitzpatrick_scale":true,"category":"people"},"v":{"keywords":["fingers","ohyeah","hand","peace","victory","two"],"char":"✌","fitzpatrick_scale":true,"category":"people"},"ok_hand":{"keywords":["fingers","limbs","perfect","ok","okay"],"char":"👌","fitzpatrick_scale":true,"category":"people"},"raised_hand":{"keywords":["fingers","stop","highfive","palm","ban"],"char":"✋","fitzpatrick_scale":true,"category":"people"},"raised_back_of_hand":{"keywords":["fingers","raised","backhand"],"char":"🤚","fitzpatrick_scale":true,"category":"people"},"muscle":{"keywords":["arm","flex","hand","summer","strong","biceps"],"char":"💪","fitzpatrick_scale":true,"category":"people"},"handshake":{"keywords":["agreement","shake"],"char":"🤝","fitzpatrick_scale":false,"category":"people"},"point_left":{"keywords":["direction","fingers","hand","left"],"char":"👈","fitzpatrick_scale":true,"category":"people"},"point_right":{"keywords":["fingers","hand","direction","right"],"char":"👉","fitzpatrick_scale":true,"category":"people"},"fu":{"keywords":["hand","fingers","rude","middle","flipping"],"char":"🖕","fitzpatrick_scale":true,"category":"people"},"raised_hand_with_fingers_splayed":{"keywords":["hand","fingers","palm"],"char":"🖐","fitzpatrick_scale":true,"category":"people"},"lips":{"keywords":["mouth","kiss"],"char":"👄","fitzpatrick_scale":false,"category":"people"},"ear":{"keywords":["face","hear","sound","listen"],"char":"👂","fitzpatrick_scale":true,"category":"people"},"eyes":{"keywords":["look","watch","stalk","peek","see"],"char":"👀","fitzpatrick_scale":false,"category":"people"},"santa":{"keywords":["festival","man","male","xmas","father christmas"],"char":"🎅","fitzpatrick_scale":true,"category":"people"},"sun_with_face":{"keywords":["nature","morning","sky"],"char":"🌞","fitzpatrick_scale":false,"category":"animals_and_nature"},"crescent_moon":{"keywords":["night","sleep","sky","evening","magic"],"char":"🌙","fitzpatrick_scale":false,"category":"animals_and_nature"},"star":{"keywords":["night","yellow"],"char":"⭐","fitzpatrick_scale":false,"category":"animals_and_nature"},"zap":{"keywords":["thunder","weather","lightning bolt","fast"],"char":"⚡","fitzpatrick_scale":false,"category":"animals_and_nature"},"fire":{"keywords":["hot","cook","flame"],"char":"🔥","fitzpatrick_scale":false,"category":"animals_and_nature"},"snowflake":{"keywords":["winter","season","cold","weather","christmas","xmas"],"char":"❄️","fitzpatrick_scale":false,"category":"animals_and_nature"},"soccer":{"keywords":["sports","football"],"char":"⚽","fitzpatrick_scale":false,"category":"activity"},"basketball":{"keywords":["sports","balls","NBA"],"char":"🏀","fitzpatrick_scale":false,"category":"activity"},"football":{"keywords":["sports","balls","NFL"],"char":"🏈","fitzpatrick_scale":false,"category":"activity"},"baseball":{"keywords":["sports","balls"],"char":"⚾","fitzpatrick_scale":false,"category":"activity"},"gift":{"keywords":["present","birthday","christmas","xmas"],"char":"🎁","fitzpatrick_scale":false,"category":"objects"},"tada":{"keywords":["party","congratulations","birthday","magic","circus","celebration"],"char":"🎉","fitzpatrick_scale":false,"category":"objects"},"black_nib":{"keywords":["pen","stationery","writing","write"],"char":"✒️","fitzpatrick_scale":false,"category":"objects"},"memo":{"keywords":["write","documents","stationery","pencil","paper","writing","legal","exam","quiz","test","study","compose"],"char":"📝","fitzpatrick_scale":false,"category":"objects"},"heart":{"keywords":["love","like","valentines"],"char":"❤️","fitzpatrick_scale":false,"category":"symbols"},"yellow_heart":{"keywords":["love","like","affection","valentines"],"char":"💛","fitzpatrick_scale":false,"category":"symbols"},"green_heart":{"keywords":["love","like","affection","valentines"],"char":"💚","fitzpatrick_scale":false,"category":"symbols"},"vs":{"keywords":["words","orange-square"],"char":"🆚","fitzpatrick_scale":false,"category":"symbols"},"speech_balloon":{"keywords":["bubble","words","message","talk","chatting"],"char":"💬","fitzpatrick_scale":false,"category":"symbols"},"clock1":{"keywords":["time","late","early","schedule"],"char":"🕐","fitzpatrick_scale":false,"category":"symbols"}}')
        },
        37: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(10),
                o = n.n(a),
                i = n(5),
                r = n.n(i),
                s = n(1),
                c = n(3),
                l = n(6),
                d = n(17),
                u = n(0),
                f = n(9),
                p = n(22),
                h = n.n(p),
                m = n(2);
            $(o()(r.a.mark((function e() {
                var t, n, a, i, p, g, v, y, w, b, k, _, x, I, C, T, D, z, R, O, N, L, E, S, M, j, B, U, A;
                return r.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            U = function() {
                                return (U = o()(r.a.mark((function e(t) {
                                    var n, a;
                                    return r.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, d.default.liveDetail({
                                                    roomNum: t
                                                });
                                            case 3:
                                                n = e.sent, g = n, s.storeData.room = n.room, s.storeData.roomNum = t, s.storeData.anchorId = n.room.anchor.uid, "liveRoom" === $("#video-player-tag").attr("tag") && ($("title").text(n.room.title + " " + $("title").text()), $('meta[name="description"]').attr("content", n.room.title + " " + $('meta[name="description"]').attr("content")), $('meta[property="og:title"]').attr("content", n.room.title + " " + $('meta[property="og:title"]').attr("content")), $('meta[property="og:description"]').attr("content", n.room.title + " " + $('meta[property="og:description"]').attr("content"))), n.room.assistantUser && (a = {
                                                    openId: h()(n.room.assistantUser.uid + ""),
                                                    nickName: n.room.assistantUser.nickName,
                                                    icon: n.room.assistantUser.icon
                                                }, 0 != u.default.debug && (a.openId = "c33a8cc4698d18a72bcb7de8c5737068"), s.storeData.friend = a), "liveRoom" == _ && n.room.contact && $(".bottomCtrlRight .copy").show(), y = n.room.hd, C(n), e.next = 18;
                                                break;
                                            case 15:
                                                e.prev = 15, e.t0 = e.catch(0), console.log(e.t0);
                                            case 18:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 15]
                                    ])
                                })))).apply(this, arguments)
                            }, B = function(e) {
                                return U.apply(this, arguments)
                            }, j = function(e) {
                                if (e) {
                                    if ("liveRoom" == _) {
                                        var t = $("#fullScreenInput");
                                        1 == s.storeData.isUser ? ($(".send-danmu-input span").hide(), $(".send-danmu-enter").removeClass("cgcolor"), t.attr("placeholder", m.default.send_danmaku_tip), t.attr("contenteditable", !0)) : (t.attr("placeholder", m.default.before_can_speak), t.attr("contenteditable", !1)), $(".send-danmu").show()
                                    }
                                    a.addClass("fullscreen")
                                } else a.removeClass("fullscreen"), $(".send-danmu").hide()
                            }, M = function(e) {
                                var t = document.querySelector(".video-player");
                                t.requestFullscreen ? e ? t.requestFullscreen() : document.exitFullscreen() : t.mozRequestFullScreen ? e ? t.mozRequestFullScreen() : document.mozCancelFullScreen() : t.webkitRequestFullScreen ? e ? t.webkitRequestFullScreen() : document.webkitCancelFullScreen() : t.msRequestFullscreen && (e ? t.msRequestFullscreen() : document.msExitFullscreen()), j(e)
                            }, S = function() {
                                var e = document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement;
                                return null != e && null != e || (e = !1), e
                            }, E = function(e) {
                                if (isShowMinScreen = e, g && 1 == g.room.liveStatus)
                                    if (e) {
                                        n.show(), a.hide(), t.addClass("min-screen");
                                        var o = 0,
                                            i = 0,
                                            r = 0,
                                            s = 0,
                                            c = !1;
                                        $(".min-screen").mousedown((function(e) {
                                            o = e.clientX, i = e.clientY, r = $(".min-screen").get(0).offsetLeft, s = $(".min-screen").get(0).offsetTop, c = !0, $(".min-screen").get(0).style.cursor = "move", window.onmousemove = function(e) {
                                                if (0 != c) {
                                                    var t = e.clientX,
                                                        n = e.clientY,
                                                        a = t - (o - r),
                                                        l = n - (i - s);
                                                    $(".min-screen").get(0).style.left = a + "px", $(".min-screen").get(0).style.top = l + "px"
                                                }
                                            }, $(".min-screen").mouseup((function() {
                                                c = !1, $(".min-screen").get(0).style.cursor = "default"
                                            }))
                                        }))
                                    } else $(".min-screen").off("mousedown"), $(".min-screen").off("mouseup"), document.onmousemove = null, t.get(0).style.left = null, t.get(0).style.top = null, n.hide(), t.removeClass("min-screen")
                            }, L = function() {
                                N && window.pageYOffset >= N ? E(!0) : E(!1)
                            }, O = function(e) {
                                e ? ($("#danmuBtn").removeClass("video-open-danmu"), $("#danmuBtn").addClass("video-close-danmu"), I(0)) : ($("#danmuBtn").addClass("video-open-danmu"), $("#danmuBtn").removeClass("video-close-danmu"), I(1))
                            }, R = function() {
                                return $(".volumn-slider").unbind("mousemove", z), $(document).unbind("mouseup", R), !1
                            }, z = function(e) {
                                var t = $(this),
                                    n = (e.clientX - t.offset().left) / t.width() * 100;
                                return T(n), n <= 0 ? n = 0 : n >= 100 && (n = 100), t.children(".volumn-line").css({
                                    width: n + "%"
                                }), t.children(".volumn-point").css({
                                    left: n + "%"
                                }), !1
                            }, D = function(e) {
                                if (0 == e.button) {
                                    var t = $(this),
                                        n = (e.clientX - t.offset().left) / t.width() * 100;
                                    n > 0 && ($("#volumnBtn").removeClass("icon-volume"), $("#volumnBtn").addClass("icon-close-volume")), T(n), t.children(".volumn-line").css({
                                        width: n + "%"
                                    }), t.children(".volumn-point").css({
                                        left: n + "%"
                                    }), t.bind("mousemove", z), $(document).bind("mouseup", R)
                                }
                                return !1
                            }, T = function(e) {
                                var t = e / 100 < 0 ? 0 : e / 100;
                                t = t > 1 ? 1 : t, "function" == typeof p.volume ? p.volume(t, !0, !1) : p.volume = t
                            }, C = function(e) {
                                var t = "",
                                    n = flvjs.isSupported();
                                t = "2" !== u.default.debug ? 1 == y ? e.stream.m3u8 : e.stream.hdM3u8 : "https://live.cgtn.com/1000/prog_index.m3u8", b = !1, w = null, p = null, n && e.stream.flv && e.stream.hdFlv ? (t = 1 == y ? e.stream.flv : e.stream.hdFlv, $("#dplayer").html('<video name="videoElement" style="width:100%;height:100%" id="dplayerVideo" class="centeredVideo" autoplay>Your browser is too old which doesn\'t support HTML5 video.</video>\n            '), (p = flvjs.createPlayer({
                                    type: "flv",
                                    isLive: !0,
                                    url: t,
                                    hasAudio: !0,
                                    hasVideo: !0,
                                    enableStashBuffer: !1
                                }, {
                                    enableWorker: !1,
                                    enableStashBuffer: !1,
                                    reuseRedirectedURL: !0,
                                    autoCleanupSourceBuffer: !0
                                })).attachMediaElement(document.getElementById("dplayerVideo")), p.load()) : p = new DPlayer({
                                    container: document.getElementById("dplayer"),
                                    live: !0,
                                    lang: "zh" === m.default.language ? "zh-cn" : "en",
                                    volume: .7,
                                    autoplay: !0,
                                    danmaku: "liveRoom" == _,
                                    apiBackend: {
                                        read: function(e, t) {},
                                        send: function(e, t, n) {}
                                    },
                                    video: {
                                        url: t,
                                        type: "customHls",
                                        pic: e.room.cover,
                                        customType: {
                                            customHls: function(e, t) {
                                                (w = new Hls({
                                                    autoStartLoad: !1
                                                })).loadSource(e.src), w.attachMedia(e)
                                            }
                                        }
                                    },
                                    theme: "#FFC71C"
                                }), s.storeData.dp = Object.assign({}, p);
                                var a = n ? p.play() : p.video.play();
                                if (a) {
                                    var o = !0;
                                    a.then((function() {
                                        $("#playBtn").addClass("video-play"), $("#playBtn").removeClass("video-pause"), $("#min-play").addClass("video-play"), $("#min-play").removeClass("video-pause"), $(".big-play-btn").hide(), w && w.startLoad()
                                    })).catch((function() {
                                        o = !1, $("#playBtn").removeClass("video-play"), $("#playBtn").addClass("video-pause"), $("#min-play").removeClass("video-play"), $("#min-play").addClass("video-pause"), $(".big-play-btn").show(), w && w.stopLoad()
                                    })), setTimeout((function() {
                                        o && w && w.startLoad()
                                    }), 1e3)
                                }
                                console.log(e), 1 == e.room.liveStatus ? i.hide() : "index" == _ ? (i.hide(), setTimeout((function() {
                                    $(".big-play-btn").hide()
                                }), 10)) : i.show(), p.on("error", (function() {
                                    console.log("error"), clearTimeout(k)
                                })), p.on("waiting", (function() {
                                    console.log("waiting"), $("#videoLoading").show(), clearTimeout(k), k = setTimeout((function() {
                                        C(g), p.play()
                                    }), 3e4)
                                })), p.on("canplay", (function() {
                                    console.log("canplay"), $("#videoLoading").hide(), clearTimeout(k)
                                })), p.on("playing", (function() {
                                    console.log("playing"), $("#videoLoading").hide(), clearTimeout(k)
                                })), p.on("play", (function() {
                                    console.log("play"), b ? (b = !1, C(g), console.log("hls create")) : w && (w.startLoad(), console.log("hls startload"))
                                })), p.on("ended", (function() {
                                    console.log("ended"), C(g), clearTimeout(k)
                                })), p.on("pause", (function() {
                                    p.video.paused && (console.log("pause"), $("#videoLoading").hide(), clearTimeout(k), w && (w.stopLoad(), w.destroy(), w = null, b = !0, console.log("hls destroy")))
                                })), "index" == _ && ($(".inLiveRoom").show(), $(".goRoom").show()), "liveRoom" == _ && (p.play(), $(".mute-tips").hide(), $(".bottomCtrlRight").hide(), $(".bottomCtrlRight.inRoom").show()), "player" == _ && $(".goRoom").hide(), $(".dplayer-controller").hide(), $(".dplayer-danloading").hide(), $(".dplayer-bezel").hide()
                            }, I = function(e) {
                                x.options = {
                                    hiddenTypes: e
                                }
                            }, t = $(".video-player"), n = t.find(".min-screen-mark"), a = t.find(".bottomCtrl"), i = t.find(".vplayer-recommend"), g = null, y = 2, w = null, b = !1, k = null, v = c.default.getRoomNum(), _ = $("#video-player-tag").attr("tag"), (x = new openBSE.GeneralEngine(document.getElementsByClassName("bullet-wrapper")[0], {
                                defaultStyle: {
                                    fontFamily: '"Microsoft YaHei","PingFang SC",SimHei,"Heiti SC",sans-serif',
                                    fontWeight: "normal",
                                    shadowBlur: 4
                                }
                            }, "css3")).play(), s.storeData.generalEngine = x, O(!1), "liveRoom" != _ && "player" != _ || B(v), $("#refresh").click((function() {
                                $(".refresh").hide(), C(g)
                            })), $(".volumn-slider").bind("mousedown", D), $(".mute-tips img").click((function() {
                                $(".mute-tips").fadeOut()
                            })), setTimeout((function() {
                                $(".mute-tips").fadeOut()
                            }), 2e3), $("#volumnBtn").click((function() {
                                var e = $(this);
                                if (e.hasClass("icon-volume")) {
                                    e.removeClass("icon-volume"), e.addClass("icon-close-volume");
                                    var t = $(".volumn-slider .volumn-line").width() / 120;
                                    T(100 * t)
                                } else e.addClass("icon-volume"), e.removeClass("icon-close-volume"), T(0)
                            })), $("#playBtn, #min-play, #dplayer, .big-play-btn").click((function(e) {
                                return c.default.stopBubble(e), $("#playBtn").hasClass("video-play") ? ($("#playBtn").removeClass("video-play"), $("#playBtn").addClass("video-pause"), $("#min-play").removeClass("video-play"), $("#min-play").addClass("video-pause"), $(".big-play-btn").show(), p.pause()) : ($("#playBtn").addClass("video-play"), $("#playBtn").removeClass("video-pause"), $("#min-play").addClass("video-play"), $("#min-play").removeClass("video-pause"), $(".big-play-btn").hide(), p.play()), !1
                            })), $(".select-definition span").click((function() {
                                return $(".select-opt").fadeIn(), !1
                            })), $(".select-opt div").click((function() {
                                var e = $(this),
                                    t = $(this).attr("data-id");
                                e.hasClass("active") || ($(".select-opt div").removeClass("active"), e.addClass("active"), $(".select-definition span").html(e.html()), y = t, C(g))
                            })), $("body").click((function() {
                                $(".select-opt").fadeOut()
                            })), $("#danmuBtn").click((function() {
                                $(this).hasClass("video-open-danmu") ? O(!0) : O(!1)
                            })), "liveRoom" == _ && window.addEventListener("scroll", L), N = 400, n.find(".icon-close").click((function(e) {
                                c.default.stopBubble(e), document.onmousedown = null, document.onmousemove = null, document.onmouseup = null, window.removeEventListener("scroll", L), E(!1)
                            })), $(".video-full").click((function() {
                                S() ? M(!1) : M(!0)
                            })), window.onresize = function() {
                                S() || j(!1)
                            }, $(".bottomCtrlRight .copy").click((function() {
                                s.storeData.room && s.storeData.room.contact && (c.default.copyToClip(s.storeData.room.contact), Object(f.Msg)({
                                    message: m.default.copy_success
                                }))
                            })), $(".room-list").on("click", "li", (function(e) {
                                $(".room-list li a.active").removeClass("active"), $(this).children("a").addClass("active"), B($(this).attr("data-roomnum"))
                            })), $(".send-danmu-login").click((function() {
                                l.default.handleLoginJump(), M(!1)
                            })), $("#fullScreenGift").click((function() {
                                return $(".send-danmu-gift .gift-block").fadeIn(150), !1
                            })), $("body").click((function() {
                                $(".send-danmu-gift .gift-block").fadeOut(150)
                            })), A = 0, $(".video-player, .inLiveRoom").mousemove((function(e) {
                                t.hasClass("min-screen") || (A = (new Date).getTime(), a.show())
                            })), setInterval((function() {
                                (new Date).getTime() - A > 2e3 && a.hide()
                            }), 1500);
                        case 48:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))))
        },
        57: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(10),
                o = n.n(a),
                i = n(5),
                r = n.n(i),
                s = n(9),
                c = n(6),
                l = n(2),
                d = n(3),
                u = n(0),
                f = n(1);
            $((function() {
                $(".liveRoom-wrapper .top-right-block .more").before('<a href="javascript:;" class="feedback">'.concat(l.default.feedback, "</a>")), $(".liveRoom-wrapper").append('\n  <div class="feedback-window" hidden>\n    <div class="big-title">\n      <img class="feedback-icon" src="'.concat(u.default.cdn, "/assets/").concat(u.default.env, '/img/feedbackWindow/feedback.svg">\n      <img class="close-icon" src="').concat(u.default.cdn, "/assets/").concat(u.default.env, '/img/feedbackWindow/close.svg">\n      <span>Phản hồi\x3c!--反馈--\x3e</span>\n    </div>\n\n    <div class="content">\n      <div class="content-item nickname">\n        <div class="title">Tài Khoản:\x3c!-- 账户名称 --\x3e</div>\n        <input i18n-placeholder="" placeholder="" readonly>\n      </div>\n      <div class="content-item bufa">\n        <div class="title">ID Bufa:</div>\n        <input i18n-placeholder="" placeholder="">\n      </div>\n      <div class="content-item contact">\n        <div class="title">Zalo:</div>\n        <input i18n-placeholder="" placeholder="">\n      </div>\n      <div class="content-item msg">\n        <div class="title">Nội Dung Phản Hồi:</div>\n        <textarea i18n-placeholder="请尽量详细描述你要反馈的问题，以便我们尽快为你解决" placeholder="').concat(l.default.feedback_placeholder, '" maxlength="500"></textarea>\n        <div class="count-box"><span class="text-count">0</span>/500</div>\n        \x3c!-- <div class="error-tip">限制500个字以内</div> --\x3e\n      </div>\n      <div class="submit">Phản Hồi\x3c!--提交--\x3e</div>\n    </div>\n  </div>\n  <div class="feedback-mode" hidden></div>\n  '));
                var e = d.default.getRoomNum();

                function t() {
                    return (t = o()(r.a.mark((function t() {
                        var n;
                        return r.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (c.default.handleLoginJump(!1)) {
                                        t.next = 12;
                                        break
                                    }
                                    return n = {
                                        roomNum: e,
                                        targetUid: f.storeData.room.anchor.uid,
                                        type: 1
                                    }, t.prev = 2, t.next = 5, c.default.userReport(n);
                                case 5:
                                    t.sent && (Object(s.Msg)({
                                        message: l.default.report_success
                                    }), $(".liveRoom-wrapper .more-box .report").text(l.default.already_report)), t.next = 12;
                                    break;
                                case 9:
                                    t.prev = 9, t.t0 = t.catch(2), console.log(t.t0);
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 9]
                        ])
                    })))).apply(this, arguments)
                }
                $(".liveRoom-wrapper .more-box .report").click((function() {
                    $(this).hasClass("active") || (function() {
                        t.apply(this, arguments)
                    }(), $(this).addClass("active"))
                }));
                var n = !1;
                $(".liveRoom-wrapper .top-right-block").on("click", ".feedback", (function() {
                    c.default.handleLoginJump() || ($(".liveRoom-wrapper .feedback-window").show(), $(".liveRoom-wrapper .feedback-mode").show())
                })), $(".liveRoom-wrapper .feedback-window").on("click", ".close-icon", (function() {
                    $(".liveRoom-wrapper .feedback-window").hide(), $(".liveRoom-wrapper .feedback-mode").hide(), $(".liveRoom-wrapper .feedback-window .content-item.bufa input").val(""), $(".liveRoom-wrapper .feedback-window .content-item.contact input").val(""), $(".liveRoom-wrapper .feedback-window .content-item.msg textarea").val(""), $(".liveRoom-wrapper .feedback-window .content-item.msg .text-count").text(0), $(".liveRoom-wrapper .feedback-window .submit").removeClass("active"), n = !1
                })), $(".liveRoom-wrapper .feedback-window .content").find(".nickname input").val(f.storeData.userInfo.nickName), $(".liveRoom-wrapper .feedback-window .content").find("textarea").keyup((function() {
                    $(".liveRoom-wrapper .feedback-window .content-item.msg .text-count").text($(this).val().length), $(this).val().length > 5 ? ($(".liveRoom-wrapper .feedback-window .submit").addClass("active"), n = !0) : ($(".liveRoom-wrapper .feedback-window .submit").removeClass("active"), n = !1)
                })), $(".liveRoom-wrapper .feedback-window").on("click", ".submit", (function() {
                    if ($(".liveRoom-wrapper .feedback-window .msg textarea").val().trim().length < 6) Object(s.Msg)({
                        message: l.default.feedback_limit_6
                    });
                    else if (n) {
                        var t = $(".liveRoom-wrapper .feedback-window .msg textarea").val().trim(),
                            a = $(".liveRoom-wrapper .feedback-window .bufa input").val().trim(),
                            o = {
                                feedbackType: 1,
                                msg: "Số phòng: ".concat(e, "，ID Bufa: ").concat(a, "，Nội Dung Phản Hồi: ").concat(t),
                                contact: $(".liveRoom-wrapper .feedback-window .contact input").val().trim()
                            };
                        c.default.sysFeedback(o).then((function(e) {
                            Object(s.Msg)({
                                message: l.default.feedback_success
                            }), $(".liveRoom-wrapper .feedback-window .close-icon").click()
                        }))
                    }
                }))
            }))
        },
        58: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(10),
                o = n.n(a),
                i = n(5),
                r = n.n(i),
                s = n(17),
                c = n(3),
                l = n(1),
                d = n(8),
                u = n(2),
                f = n(6),
                p = [],
                h = [],
                m = c.default.getRoomNum();

            function g() {
                return (g = o()(r.a.mark((function e() {
                    return r.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                s.default.giftList().then((function(e) {
                                    p = e.giftList, h = c.default.groupBy(p, (function(e) {
                                        return e.giftId
                                    })), v(e.giftList)
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function v(e) {
                var t = "",
                    n = "";
                e.map((function(e, a) {
                    t += '<div class="gift-item">\n      <img src="'.concat(e.icon, '" class="gift-icon" />\n      <div class="gift-block ts-dot arrow-bottom an-scale-in-ease">\n        <div class="subbox">\n        <div class="gift-msg">\n          <img class="gift-img" src="').concat(e.icon, '" />\n          <div class="gift-text">\n            <div class=\'gift-name\'>').concat(e.giftName, '</div>\n            <div class="gift-number" data-number="').concat(e.price, '">').concat(d.default.score(e.price), '</div>\n          </div>\n        </div>\n        <div class="send-button" data-id=\'').concat(e.giftId, '\' i18n-text="赠送">').concat(u.default.give, "</div>\n        </div>\n      </div>\n    </div>"), n += '<div class="gift" data-id=\''.concat(e.giftId, '\'>\n      <div class="img">\n        <img src="').concat(e.icon, '" alt srcset />\n      </div>\n      <div class="gift-name">').concat(e.giftName, '</div>\n      <div class="gift-score" data-number="').concat(e.price, '">').concat(d.default.score(e.price), "</div>\n    </div>")
                })), $(".gift-list").html(t), $(".send-danmu-gift .gift-block .gift-top").html(n), $(".send-danmu-gift .gift-block .gift").click((function() {
                    var e = $(this);
                    return e.siblings().removeClass("active"), $("#fullScreenGiftSend").removeClass("noScore"), e.addClass("active"), l.storeData.userInfo.score < $(".video-player").find(".gift-block .gift.active .gift-score").attr("data-number") && $("#fullScreenGiftSend").addClass("noScore"), !1
                }))
            }

            function y(e) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = o()(r.a.mark((function e(t) {
                    var n, a, o, i;
                    return r.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (f.default.handleLoginJump(!1)) {
                                    e.next = 16;
                                    break
                                }
                                return n = {
                                    receiver: l.storeData.room.anchor.uid,
                                    giftId: Number(t),
                                    count: 1,
                                    roomNum: m
                                }, e.prev = 2, (a = []).concat(l.storeData.commentList), a.push({
                                    content: {
                                        giftId: t,
                                        giftName: h[t][0].giftName,
                                        count: 1,
                                        icon: h[t][0].sendIcon
                                    },
                                    msgType: 2,
                                    roomNum: c.default.getRoomNum(),
                                    sendTime: (new Date).getTime(),
                                    sendUid: l.storeData.userInfo.uid,
                                    sendUser: l.storeData.userInfo
                                }), l.storeData.commentList = a, e.next = 9, f.default.sendGift(n);
                            case 9:
                                (o = e.sent) && (i = Object.assign({}, l.storeData.userInfo, {
                                    score: o.score
                                }), l.storeData.userInfo = i, $(".integral-num").html(o.score), $("#fullScreenSocre").html(o.score)), e.next = 16;
                                break;
                            case 13:
                                e.prev = 13, e.t0 = e.catch(2), console.log(e.t0);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 13]
                    ])
                })))).apply(this, arguments)
            }! function() {
                g.apply(this, arguments)
            }(), $(".bottom-block, .gift-option").on("click", ".gift-block .send-button", (function() {
                var e = this;
                if (!f.default.handleLoginJump()) {
                    $(this).addClass("active"), setTimeout((function() {
                        $(e).removeClass("active")
                    }), 1e3);
                    var t = $(this).attr("data-id");
                    l.storeData.userInfo.score < $(this).closest(".gift-block").find(".gift-number").attr("data-number") ? $(".send-gift-error").show() : y(t)
                }
            })), $("#fullScreenGiftSend").click((function() {
                if (!f.default.handleLoginJump()) {
                    $(this).hasClass("noScore") || y($(".send-danmu-gift .gift-block .gift.active").attr("data-id"));
                    var e = $('.send-danmu-gift .gift-block .gift.active img[class!="gift-effect"]').attr("src"),
                        t = 1e7 * Math.random();
                    return $(".send-danmu-gift .gift-block .gift.active .img").append('<img src="'.concat(e, '" class="gift-effect" data-tag="').concat(t, '">')), setTimeout((function() {
                        $('img[data-tag="'.concat(t, '"]')).remove()
                    }), 1e3), !1
                }
            })), $(".send-gift-error .close").click((function() {
                $(".send-gift-error").hide()
            }))
        }
    },
    [
        [190, 0, 1, 2]
    ]
]);