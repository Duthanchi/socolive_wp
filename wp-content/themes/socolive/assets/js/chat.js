(window.webpackJsonp = window.webpackJsonp || []).push([
    [9], {
        14: function(e, t, a) {
            "use strict";
            a.r(t),
                function(e, t) {
                    var r = a(4),
                        n = a.n(r);
                    ! function(e, r) {
                        "object" == ("undefined" == typeof exports ? "undefined" : n()(exports)) ? t.exports = r(e): "function" == typeof define && a(11) ? define([], r) : e.LazyLoad = r(e)
                    }(void 0 !== e ? e : (void 0).window || (void 0).global, (function(e) {
                        function t(e, t) {
                            this.settings = n(r, t || {}), this.images = e || document.querySelectorAll(this.settings.selector), this.observer = null, this.init()
                        }
                        "function" == typeof define && a(11) && (e = window);
                        var r = {
                                src: "data-src",
                                srcset: "data-srcset",
                                selector: ".lazyload",
                                root: null,
                                rootMargin: "0px",
                                threshold: 0
                            },
                            n = function e() {
                                var t = {},
                                    a = !1,
                                    r = 0,
                                    n = arguments.length;
                                for ("[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (a = arguments[0], r++); r < n; r++) ! function(r) {
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (a && "[object Object]" === Object.prototype.toString.call(r[n]) ? t[n] = e(!0, t[n], r[n]) : t[n] = r[n])
                                }(arguments[r]);
                                return t
                            };
                        if (t.prototype = {
                                init: function() {
                                    if (e.IntersectionObserver) {
                                        var t = this,
                                            a = {
                                                root: this.settings.root,
                                                rootMargin: this.settings.rootMargin,
                                                threshold: [this.settings.threshold]
                                            };
                                        this.observer = new IntersectionObserver((function(e) {
                                            Array.prototype.forEach.call(e, (function(e) {
                                                if (e.isIntersecting) {
                                                    t.observer.unobserve(e.target);
                                                    var a = e.target.getAttribute(t.settings.src),
                                                        r = e.target.getAttribute(t.settings.srcset);
                                                    "img" === e.target.tagName.toLowerCase() ? (a && (e.target.src = a), r && (e.target.srcset = r)) : e.target.style.backgroundImage = "url(" + a + ")"
                                                }
                                            }))
                                        }), a), Array.prototype.forEach.call(this.images, (function(e) {
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
                                            var a = t.getAttribute(e.settings.src),
                                                r = t.getAttribute(e.settings.srcset);
                                            "img" === t.tagName.toLowerCase() ? (a && (t.src = a), r && (t.srcset = r)) : t.style.backgroundImage = "url('" + a + "')"
                                        }))
                                    }
                                },
                                destroy: function() {
                                    this.settings && (this.observer.disconnect(), this.settings = null)
                                }
                            }, e.lazyload = function(e, a) {
                                return new t(e, a)
                            }, e.jQuery) {
                            var o = e.jQuery;
                            o.fn.lazyload = function(e) {
                                return (e = e || {}).attribute = e.attribute || "data-src", new t(o.makeArray(this), e), this
                            }
                        }
                        return t
                    }))
                }.call(this, a(13), a(15)(e))
        },
        16: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a(4),
                n = a.n(r);
            ! function() {
                if ("object" === ("undefined" == typeof window ? "undefined" : n()(window)))
                    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function() {
                            return this.intersectionRatio > 0
                        }
                    });
                    else {
                        var e = function(e) {
                                for (var t = window.document, a = o(t); a;) a = o(t = a.ownerDocument);
                                return t
                            }(),
                            t = [],
                            a = null,
                            r = null;
                        s.prototype.THROTTLE_TIMEOUT = 100, s.prototype.POLL_INTERVAL = null, s.prototype.USE_MUTATION_OBSERVER = !0, s._setupCrossOriginUpdater = function() {
                            return a || (a = function(e, a) {
                                r = e && a ? d(e, a) : {
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    width: 0,
                                    height: 0
                                }, t.forEach((function(e) {
                                    e._checkForIntersections()
                                }))
                            }), a
                        }, s._resetCrossOriginUpdater = function() {
                            a = null, r = null
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
                            return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, a) {
                                if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                                return e !== a[t - 1]
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
                            var a = t.defaultView;
                            if (a && -1 == this._monitoringDocuments.indexOf(t)) {
                                var r = this._checkForIntersections,
                                    n = null,
                                    i = null;
                                if (this.POLL_INTERVAL ? n = a.setInterval(r, this.POLL_INTERVAL) : (c(a, "resize", r, !0), c(t, "scroll", r, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in a && (i = new a.MutationObserver(r)).observe(t, {
                                        attributes: !0,
                                        childList: !0,
                                        characterData: !0,
                                        subtree: !0
                                    })), this._monitoringDocuments.push(t), this._monitoringUnsubscribes.push((function() {
                                        var e = t.defaultView;
                                        e && (n && e.clearInterval(n), l(e, "resize", r, !0)), l(t, "scroll", r, !0), i && i.disconnect()
                                    })), t != (this.root && this.root.ownerDocument || e)) {
                                    var s = o(t);
                                    s && this._monitorIntersections(s.ownerDocument)
                                }
                            }
                        }, s.prototype._unmonitorIntersections = function(t) {
                            var a = this._monitoringDocuments.indexOf(t);
                            if (-1 != a) {
                                var r = this.root && this.root.ownerDocument || e;
                                if (!this._observationTargets.some((function(e) {
                                        var a = e.element.ownerDocument;
                                        if (a == t) return !0;
                                        for (; a && a != r;) {
                                            var n = o(a);
                                            if ((a = n && n.ownerDocument) == t) return !0
                                        }
                                        return !1
                                    }))) {
                                    var n = this._monitoringUnsubscribes[a];
                                    if (this._monitoringDocuments.splice(a, 1), this._monitoringUnsubscribes.splice(a, 1), n(), t != r) {
                                        var i = o(t);
                                        i && this._unmonitorIntersections(i.ownerDocument)
                                    }
                                }
                            }
                        }, s.prototype._unmonitorAllIntersections = function() {
                            var e = this._monitoringUnsubscribes.slice(0);
                            this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
                            for (var t = 0; t < e.length; t++) e[t]()
                        }, s.prototype._checkForIntersections = function() {
                            if (this.root || !a || r) {
                                var e = this._rootIsInDom(),
                                    t = e ? this._getRootRect() : {
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        width: 0,
                                        height: 0
                                    };
                                this._observationTargets.forEach((function(r) {
                                    var n = r.element,
                                        o = f(n),
                                        s = this._rootContainsTarget(n),
                                        c = r.entry,
                                        l = e && s && this._computeTargetAndRootIntersection(n, o, t),
                                        h = r.entry = new i({
                                            time: window.performance && performance.now && performance.now(),
                                            target: n,
                                            boundingClientRect: o,
                                            rootBounds: a && !this.root ? null : t,
                                            intersectionRect: l
                                        });
                                    c ? e && s ? this._hasCrossedThreshold(c, h) && this._queuedEntries.push(h) : c && c.isIntersecting && this._queuedEntries.push(h) : this._queuedEntries.push(h)
                                }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                            }
                        }, s.prototype._computeTargetAndRootIntersection = function(t, n, o) {
                            if ("none" != window.getComputedStyle(t).display) {
                                for (var i, s, c, l, h, u, g, m, y = n, v = p(t), k = !1; !k && v;) {
                                    var _ = null,
                                        w = 1 == v.nodeType ? window.getComputedStyle(v) : {};
                                    if ("none" == w.display) return null;
                                    if (v == this.root || 9 == v.nodeType)
                                        if (k = !0, v == this.root || v == e) a && !this.root ? !r || 0 == r.width && 0 == r.height ? (v = null, _ = null, y = null) : _ = r : _ = o;
                                        else {
                                            var b = p(v),
                                                I = b && f(b),
                                                z = b && this._computeTargetAndRootIntersection(b, I, o);
                                            I && z ? (v = b, _ = d(I, z)) : (v = null, y = null)
                                        }
                                    else {
                                        var T = v.ownerDocument;
                                        v != T.body && v != T.documentElement && "visible" != w.overflow && (_ = f(v))
                                    }
                                    if (_ && (i = _, s = y, void 0, void 0, void 0, void 0, void 0, void 0, c = Math.max(i.top, s.top), l = Math.min(i.bottom, s.bottom), h = Math.max(i.left, s.left), m = l - c, y = (g = (u = Math.min(i.right, s.right)) - h) >= 0 && m >= 0 && {
                                            top: c,
                                            bottom: l,
                                            left: h,
                                            right: u,
                                            width: g,
                                            height: m
                                        } || null), !y) break;
                                    v = v && p(v)
                                }
                                return y
                            }
                        }, s.prototype._getRootRect = function() {
                            var t;
                            if (this.root) t = f(this.root);
                            else {
                                var a = e.documentElement,
                                    r = e.body;
                                t = {
                                    top: 0,
                                    left: 0,
                                    right: a.clientWidth || r.clientWidth,
                                    width: a.clientWidth || r.clientWidth,
                                    bottom: a.clientHeight || r.clientHeight,
                                    height: a.clientHeight || r.clientHeight
                                }
                            }
                            return this._expandRectByRootMargin(t)
                        }, s.prototype._expandRectByRootMargin = function(e) {
                            var t = this._rootMarginValues.map((function(t, a) {
                                    return "px" == t.unit ? t.value : t.value * (a % 2 ? e.width : e.height) / 100
                                })),
                                a = {
                                    top: e.top - t[0],
                                    right: e.right + t[1],
                                    bottom: e.bottom + t[2],
                                    left: e.left - t[3]
                                };
                            return a.width = a.right - a.left, a.height = a.bottom - a.top, a
                        }, s.prototype._hasCrossedThreshold = function(e, t) {
                            var a = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                                r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                            if (a !== r)
                                for (var n = 0; n < this.thresholds.length; n++) {
                                    var o = this.thresholds[n];
                                    if (o == a || o == r || o < a != o < r) return !0
                                }
                        }, s.prototype._rootIsInDom = function() {
                            return !this.root || u(e, this.root)
                        }, s.prototype._rootContainsTarget = function(t) {
                            return u(this.root || e, t) && (!this.root || this.root.ownerDocument == t.ownerDocument)
                        }, s.prototype._registerInstance = function() {
                            t.indexOf(this) < 0 && t.push(this)
                        }, s.prototype._unregisterInstance = function() {
                            var e = t.indexOf(this); - 1 != e && t.splice(e, 1)
                        }, window.IntersectionObserver = s, window.IntersectionObserverEntry = i
                    }
                function o(e) {
                    try {
                        return e.defaultView && e.defaultView.frameElement || null
                    } catch (e) {
                        return null
                    }
                }

                function i(e) {
                    this.time = e.time, this.target = e.target, this.rootBounds = h(e.rootBounds), this.boundingClientRect = h(e.boundingClientRect), this.intersectionRect = h(e.intersectionRect || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }), this.isIntersecting = !!e.intersectionRect;
                    var t = this.boundingClientRect,
                        a = t.width * t.height,
                        r = this.intersectionRect,
                        n = r.width * r.height;
                    this.intersectionRatio = a ? Number((n / a).toFixed(4)) : this.isIntersecting ? 1 : 0
                }

                function s(e, t) {
                    var a, r, n, o = t || {};
                    if ("function" != typeof e) throw new Error("callback must be a function");
                    if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
                    this._checkForIntersections = (a = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, n = null, function() {
                        n || (n = setTimeout((function() {
                            a(), n = null
                        }), r))
                    }), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
                        return e.value + e.unit
                    })).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
                }

                function c(e, t, a, r) {
                    "function" == typeof e.addEventListener ? e.addEventListener(t, a, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, a)
                }

                function l(e, t, a, r) {
                    "function" == typeof e.removeEventListener ? e.removeEventListener(t, a, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, a)
                }

                function f(e) {
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

                function h(e) {
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

                function d(e, t) {
                    var a = t.top - e.top,
                        r = t.left - e.left;
                    return {
                        top: a,
                        left: r,
                        height: t.height,
                        width: t.width,
                        bottom: a + t.height,
                        right: r + t.width
                    }
                }

                function u(e, t) {
                    for (var a = t; a;) {
                        if (a == e) return !0;
                        a = p(a)
                    }
                    return !1
                }

                function p(t) {
                    var a = t.parentNode;
                    return 9 == t.nodeType && t != e ? o(t) : a && 11 == a.nodeType && a.host ? a.host : a && a.assignedSlot ? a.assignedSlot.parentNode : a
                }
            }()
        },
        169: function(e, t, a) {
            e.exports = a(170)
        },
        170: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a(24),
                n = a(1),
                o = a(32);
            console.log("chat"), $((function() {
                console.log("$chat start"), $(".private-chat .close").click((function() {
                    $(".private-chat").hide(), r.default.closeReceiveChat()
                })), $("body").click((function() {
                    $(".private-emoji-panel").fadeOut(150)
                }));
                var e = 0,
                    t = 0,
                    a = 0,
                    i = 0,
                    s = !1;
                $(".private-chat .opts").mousedown((function(r) {
                    e = r.clientX, t = r.clientY, a = $(".private-chat").get(0).offsetLeft, i = $(".private-chat").get(0).offsetTop, s = !0, $(".private-chat .opts").get(0).style.cursor = "move", window.onmousemove = function(r) {
                        if (0 != s) {
                            var n = r.clientX,
                                o = r.clientY,
                                c = n - (e - a),
                                l = o - (t - i);
                            $(".private-chat").get(0).style.left = c + "px", $(".private-chat").get(0).style.top = l + "px"
                        }
                    }, $(".private-chat").mouseup((function() {
                        s = !1, $(".private-chat").get(0).style.cursor = "default"
                    }))
                }));
                var c = "";

                function l() {
                    var e = $(".private-chat .send-content textarea").val().trim();
                    r.default.send(e, n.storeData.friend.openId)
                }
                Object.keys(o).map((function(e) {
                    c += "<li data-id='".concat(e, "'>").concat(o[e].char, "</li>")
                })), $(".private-emoji-panel ul").html(c), $(".private-emoji").click((function() {
                    return 0 == $(".private-emoji-panel:visible").length ? $(".private-emoji-panel").fadeIn(150) : $(".private-emoji-panel").fadeOut(150), !1
                })), $(".private-emoji-panel ul li").click((function() {
                    var e = $(this).attr("data-id");
                    $(".private-chat .send-content textarea").val($(".private-chat .send-content textarea").val() + o[e].char), r.default.checkPrivateChat(), $(".private-chat .send-content textarea").focus()
                })), $(".private-chat .send-content textarea").on("input", (function() {
                    r.default.checkPrivateChat()
                })), $(".private-send").click((function() {
                    l()
                })), $(".private-chat .send-word .send-content textarea").keydown((function(e) {
                    e.ctrlKey || e.shiftKey || 13 == e.keyCode && (e.preventDefault(), l())
                })), $(".private-chat").on("click", ".word-item .error", (function() {
                    var e = $(this).closest(".word-item");
                    e.find(".word span").text(), e.remove();
                    var t = Number(e.attr("data-flag"));
                    r.default.send(str, n.storeData.friend.openId, t)
                })), $(".private-chat .refresh").click((function() {
                    var e = this;
                    $(this).hasClass("active") || ($(this).addClass("active"), $(".private-chat .chat-tip").fadeIn(500), r.default.syncChat().then((function() {
                        $(".private-chat .chat-tip").fadeOut(500), $(e).removeClass("active")
                    })))
                })), console.log("$chat start")
            }))
        },
        19: function(e, t) {},
        24: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a(27),
                n = a.n(r),
                o = a(10),
                i = a.n(o),
                s = a(5),
                c = a.n(s),
                l = (a(6), a(0)),
                f = a(3),
                h = a(9),
                d = a(1),
                u = a(7),
                p = a(8),
                g = a(29),
                m = a(22),
                y = a.n(m),
                v = !1,
                k = null,
                _ = 0 != l.default.debug ? 220754 : d.storeData.userInfo ? d.storeData.userInfo.uid : "",
                w = y()(_ + "");

            function b(e) {
                return new Promise((function(t, a) {
                    u.default.select(u.default.tb_friends, "aOpenId_bOpenId", [e.fromOpenId, e.toOpenId]).then((function(a) {
                        u.default.select(u.default.tb_friends, "aOpenId_bOpenId", [e.toOpenId, e.fromOpenId]).then((function(r) {
                            var n = {};
                            a ? (n = a, e.fromNickName && (n.a_nickName = e.fromNickName, n.a_icon = e.fromIcon), e.toNickName && (n.b_nickName = e.toNickName, n.b_icon = e.toIcon), e.msgId > n.msgId && (n.msgId = e.msgId, u.default.update(u.default.tb_friends, n).then((function() {
                                t()
                            })))) : r ? (n = r, e.fromNickName && (n.b_nickName = e.fromNickName, n.b_icon = e.fromIcon), e.toNickName && (n.a_nickName = e.toNickName, n.a_icon = e.toIcon), e.msgId > n.msgId && (n.msgId = e.msgId, u.default.update(u.default.tb_friends, n).then((function() {
                                t()
                            })))) : (n = {
                                a_openId: e.fromOpenId,
                                a_nickName: e.fromNickName,
                                a_icon: e.fromIcon,
                                b_openId: e.toOpenId,
                                b_nickName: e.toNickName,
                                b_icon: e.toIcon,
                                msgId: e.msgId
                            }, u.default.add(u.default.tb_friends, n).then((function() {
                                t()
                            }))), t()
                        }))
                    }))
                }))
            }

            function I(e) {
                var t = new Date((new Date).toLocaleDateString()).getTime(),
                    a = t - 1e3,
                    r = t - 864e5;
                return e >= t && e < t + 864e5 ? p.default.fmtDate(e, "hh:mm") : e >= r && e < a ? p.default.fmtDate(e, "昨天 hh:mm") : p.default.fmtDate(e, "yyyy年M月d日 hh:mm")
            }
            var z = {
                startReceiveChat: function(e) {
                    e && this.receiveChat(), k = setInterval((function() {
                        z.receiveChat()
                    }), 1e4)
                },
                closeReceiveChat: function() {
                    k && clearInterval(k)
                },
                syncChat: function() {
                    var e = this;
                    return new Promise((function(t, a) {
                        e.closeReceiveChat(), e.receiveChat().then((function() {
                            e.startReceiveChat(), t()
                        })).catch((function(e) {
                            a()
                        }))
                    }))
                },
                receiveChat: function() {
                    var e = this;
                    return new Promise((function(t, a) {
                        if (v) return v = !1, void t();
                        e.getMaxMsgId().then((function(r) {
                            e.updateChatRecord(r).then((function(a) {
                                if (a && a.length > 0) {
                                    for (var r = a.length - 1; r >= 0; r--) a[r].fromOpenId == w ? e.insertChat(a[r], !0) : d.storeData.friend && a[r].fromOpenId == d.storeData.friend.openId && e.insertChat(a[r], !1);
                                    e.autoScroll()
                                }
                                t()
                            })).catch((function(e) {
                                a(e)
                            }))
                        })).catch((function(e) {
                            a(e)
                        }))
                    }))
                },
                send: function(e, t) {
                    if (!e || 0 == e.trim().length) return Object(h.Msg)({
                        message: "发送内容不能为空"
                    }), !1;
                    var a = (new Date).getTime();
                    return function(e) {
                        $(".private-chat .send-content textarea").val(""), z.checkPrivateChat();
                        var t = {
                            fromOpenId: e.fromOpenId,
                            toOpenId: e.toOpenId,
                            msgType: e.msgType,
                            content: JSON.stringify(e.content),
                            sendTime: e.sendTime,
                            flag: e.flag
                        };
                        g.default.send(t).then((function(e) {
                            z.syncChat()
                        }))
                    }({
                        sendUid: _,
                        content: {
                            content: e
                        },
                        sendTime: a,
                        flag: 1e5 * a,
                        fromOpenId: w,
                        fromNickName: d.storeData.userInfo.nickName,
                        fromIcon: d.storeData.userInfo.icon,
                        toOpenId: t,
                        msgType: 1,
                        isSend: 1
                    }), !0
                },
                checkPrivateChat: function() {
                    $(".private-chat .send-content textarea").val().trim().length > 0 ? $(".private-send").addClass("active") : $(".private-send").removeClass("active")
                },
                updateChatRecord: function(e) {
                    return new Promise((function(t, a) {
                        var r = 0;
                        e && (r = e), g.default.history({
                            openId: w,
                            maxMsgId: r
                        }).then(function() {
                            var e = i()(c.a.mark((function e(a) {
                                var r, n, o, s;
                                return c.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = [], !(a && a.historyList && a.historyList.length > 0)) {
                                                e.next = 14;
                                                break
                                            }
                                            r = a.historyList, n = (new Date).getTime() - 6048e5, o = c.a.mark((function e(t) {
                                                return c.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!(r[t].sendTime < n)) {
                                                                e.next = 2;
                                                                break
                                                            }
                                                            return e.abrupt("return", "continue");
                                                        case 2:
                                                            e.prev = 2, r[t].content = JSON.parse(r[t].content), e.next = 10;
                                                            break;
                                                        case 6:
                                                            return e.prev = 6, e.t0 = e.catch(2), console.log("这条消息的内容不合法", r[t]), e.abrupt("return", "continue");
                                                        case 10:
                                                            return r[t].isSend = 1, r[t].sendUid = _, (a = r[t]).from && (a.fromOpenId = a.from.openId, a.fromNickName = a.from.nickName, a.fromIcon = a.from.icon, a.from = void 0), a.to && (a.toOpenId = a.to.openId, a.toNickName = a.to.nickName, a.toIcon = a.to.icon, a.to = void 0), e.next = 15, b(r[t]).then(i()(c.a.mark((function e() {
                                                                return c.a.wrap((function(e) {
                                                                    for (;;) switch (e.prev = e.next) {
                                                                        case 0:
                                                                            return e.next = 2, u.default.selectById(u.default.tb_chat, r[t].flag).then(function() {
                                                                                var e = i()(c.a.mark((function e(a) {
                                                                                    return c.a.wrap((function(e) {
                                                                                        for (;;) switch (e.prev = e.next) {
                                                                                            case 0:
                                                                                                if (!a) {
                                                                                                    e.next = 5;
                                                                                                    break
                                                                                                }
                                                                                                return e.next = 3, u.default.update(u.default.tb_chat, r[t]);
                                                                                            case 3:
                                                                                                e.next = 7;
                                                                                                break;
                                                                                            case 5:
                                                                                                return e.next = 7, u.default.add(u.default.tb_chat, r[t]);
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
                                                    var a
                                                }), e, null, [
                                                    [2, 6]
                                                ])
                                            })), s = r.length - 1;
                                        case 6:
                                            if (!(s >= 0)) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.delegateYield(o(s), "t0", 8);
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
                                            t(r);
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
                    if (v = !0, w != e) {
                        var a = this;
                        return new Promise((function(r, n) {
                            t ? a.getMaxMsgId().then((function(t) {
                                a.updateChatRecord(t).then((function() {
                                    a.selectAndHandleChat(e).then((function() {
                                        r()
                                    }))
                                }))
                            })) : a.selectAndHandleChat(e).then((function() {
                                r()
                            }))
                        }))
                    }
                    Object(h.Msg)({
                        message: "无法查询自己与自己的消息记录"
                    })
                },
                selectAndHandleChat: function(e) {
                    var t = this;
                    return new Promise((function(a, r) {
                        u.default.selectList(u.default.tb_chat, "fromOpenId_toOpenId", [w, e]).then((function(r) {
                            u.default.selectList(u.default.tb_chat, "fromOpenId_toOpenId", [e, w]).then((function(e) {
                                t.handleChat(r, e), t.autoScroll(), v = !1, a()
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
                            for (var a = 0; a < e.length; a++) this.insertChat(e[a], !0);
                        else {
                            for (var r = 0, n = 0; n < e.length;) r < t.length ? e[n].sendTime < t[r].sendTime ? (this.insertChat(e[n], !0), n++) : (this.insertChat(t[r], !1), r++) : (this.insertChat(e[n], !0), n++);
                            for (; r < t.length; r++) this.insertChat(t[r], !1)
                        }
                },
                insertChat: function(e, t) {
                    var a = d.storeData.friend.icon,
                        r = $(".private-chat .word-content"),
                        n = r.find(".word-item:last"),
                        o = e.sendTime - 3e5,
                        i = "";
                    if (0 == n.length) i = I(e.sendTime);
                    else if (!n.hasClass("time")) {
                        var s = Number(n.attr("data-time"));
                        s && s <= o && (i = I(e.sendTime))
                    }
                    i && r.append('<div class="word-item time">'.concat(i, "</div>")), 1 == e.msgType && (e.content.content = e.content.content.replace(/\n/g, "<br>"));
                    var c = "";
                    if (2 == e.msgType ? c = '<a target="_blank" href="'.concat(l.default.downloadAppUrl, '">[图片] - 下载APP可查看</a>') : 3 == e.msgType ? c = '<a target="_blank" href="'.concat(l.default.downloadAppUrl, '">[语音] - 下载APP可查看</a>') : 4 == e.msgType && (c = '<a target="_blank" href="'.concat(l.default.downloadAppUrl, '">[视频] - 下载APP可查看</a>')), t) {
                        var f = '<div class="word-item user-word right-word" data-flag="'.concat(e.flag, '" data-time="').concat(e.sendTime, '">\n      <div class="word">').concat(1 == e.msgType ? "<span>".concat(e.content.content, "</span>") : "<span>".concat(c, "</span>"));
                        e.isSend ? f += "</div></div>" : f += '<img class="error" src="'.concat(l.default.cdn, "/assets/").concat(l.default.env, '/img/privateChat/error.png"></div></div>'), r.append(f)
                    } else n.hasClass("left-word") && !i && (n.removeClass("active"), n.find(".from").remove()), r.append('<div class="word-item user-word left-word active" data-flag="'.concat(e.flag, '" data-time="').concat(e.sendTime, '">\n        <div class="word-box">\n        <div class="avatar-box">\n          <img class="lazyload avatar" src="').concat(l.default.cdn, "/assets/").concat(l.default.env, '/img/avatar.png" data-src="').concat(a, '" hidden>\n        </div>\n        <div class="word">').concat(1 == e.msgType ? "<span>".concat(e.content.content, "</span>") : "<span>".concat(c, "</span>"), "</div>\n        </div>\n      </div>"))
                },
                insertWelcome: function() {
                    var e = $(".private-chat .word-content"),
                        t = new Date;
                    e.find(".word-item:last").hasClass("time") || e.append('<div class="word-item time">'.concat(p.default.fmtDate(t, "hh:mm"), "</div>")), e.append('<div class="word-item welcome" data-time="'.concat(t.getTime(), '">助手 ').concat(d.storeData.friend.nickName, " 为您服务，有什么可以帮您</div>")), this.autoScroll()
                },
                resend: function(e, t, a) {
                    this.send(e, t), u.default.delete(u.default.tb_chat, a)
                },
                autoScroll: function(e) {
                    f.default.loadImg("avatar");
                    var t = $(".private-chat .word-content");
                    e ? t.animate({
                        scrollTop: t.get(0).scrollHeight
                    }, "fast") : t.scrollTop(t.get(0).scrollHeight)
                },
                friendList: function() {
                    var e = this;
                    return new Promise((function(t, a) {
                        e.getMaxMsgId().then((function(a) {
                            e.updateChatRecord(a).then((function() {
                                u.default.selectList(u.default.tb_friends, "a_openId", w).then((function(e) {
                                    u.default.selectList(u.default.tb_friends, "b_openId", w).then((function(a) {
                                        e && e.length > 0 || (e = []), a && a.length > 0 || (a = []);
                                        var r = [];
                                        (e.length > 0 || a.length > 0) && (r = [].concat(n()(e), n()(a))).sort((function(e, t) {
                                            return t.msgId - e.msgId
                                        })), t(r)
                                    }))
                                }))
                            }))
                        }))
                    }))
                },
                getMaxMsgId: function() {
                    return new Promise((function(e, t) {
                        u.default.selectTop(u.default.tb_friends, "msgId", "prev").then((function(t) {
                            var a = 0;
                            t && t.msgId && (a = t.msgId), e(a)
                        }))
                    }))
                }
            };
            t.default = z
        },
        32: function(e) {
            e.exports = JSON.parse('{"grinning":{"keywords":["face","smile","happy","joy",":D","grin"],"char":"😀","fitzpatrick_scale":false,"category":"people"},"grin":{"keywords":["face","happy","smile","joy","kawaii"],"char":"😁","fitzpatrick_scale":false,"category":"people"},"smiley":{"keywords":["face","happy","joy","haha",":D",":)","smile","funny"],"char":"😃","fitzpatrick_scale":false,"category":"people"},"smile":{"keywords":["face","happy","joy","funny","haha","laugh","like",":D",":)"],"char":"😄","fitzpatrick_scale":false,"category":"people"},"sweat_smile":{"keywords":["face","hot","happy","laugh","sweat","smile","relief"],"char":"😅","fitzpatrick_scale":false,"category":"people"},"laughing":{"keywords":["happy","joy","lol","satisfied","haha","face","glad","XD","laugh"],"char":"😆","fitzpatrick_scale":false,"category":"people"},"innocent":{"keywords":["face","angel","heaven","halo"],"char":"😇","fitzpatrick_scale":false,"category":"people"},"wink":{"keywords":["face","happy","mischievous","secret",";)","smile","eye"],"char":"😉","fitzpatrick_scale":false,"category":"people"},"blush":{"keywords":["face","smile","happy","flushed","crush","embarrassed","shy","joy"],"char":"😊","fitzpatrick_scale":false,"category":"people"},"slightly_smiling_face":{"keywords":["face","smile"],"char":"🙂","fitzpatrick_scale":false,"category":"people"},"yum":{"keywords":["happy","joy","tongue","smile","face","silly","yummy","nom","delicious","savouring"],"char":"😋","fitzpatrick_scale":false,"category":"people"},"heart_eyes":{"keywords":["face","love","like","affection","valentines","infatuation","crush","heart"],"char":"😍","fitzpatrick_scale":false,"category":"people"},"kissing_heart":{"keywords":["face","love","like","affection","valentines","infatuation","kiss"],"char":"😘","fitzpatrick_scale":false,"category":"people"},"kissing":{"keywords":["love","like","face","3","valentines","infatuation","kiss"],"char":"😗","fitzpatrick_scale":false,"category":"people"},"kissing_smiling_eyes":{"keywords":["face","affection","valentines","infatuation","kiss"],"char":"😙","fitzpatrick_scale":false,"category":"people"},"kissing_closed_eyes":{"keywords":["face","love","like","affection","valentines","infatuation","kiss"],"char":"😚","fitzpatrick_scale":false,"category":"people"},"stuck_out_tongue_winking_eye":{"keywords":["face","prank","childish","playful","mischievous","smile","wink","tongue"],"char":"😜","fitzpatrick_scale":false,"category":"people"},"stuck_out_tongue_closed_eyes":{"keywords":["face","prank","playful","mischievous","smile","tongue"],"char":"😝","fitzpatrick_scale":false,"category":"people"},"stuck_out_tongue":{"keywords":["face","prank","childish","playful","mischievous","smile","tongue"],"char":"😛","fitzpatrick_scale":false,"category":"people"},"sunglasses":{"keywords":["face","cool","smile","summer","beach","sunglass"],"char":"😎","fitzpatrick_scale":false,"category":"people"},"roll_eyes":{"keywords":["face","eyeroll","frustrated"],"char":"🙄","fitzpatrick_scale":false,"category":"people"},"flushed":{"keywords":["face","blush","shy","flattered"],"char":"😳","fitzpatrick_scale":false,"category":"people"},"rage":{"keywords":["angry","mad","hate","despise"],"char":"😡","fitzpatrick_scale":false,"category":"people"},"confused":{"keywords":["face","indifference","huh","weird","hmmm",":/"],"char":"😕","fitzpatrick_scale":false,"category":"people"},"tired_face":{"keywords":["sick","whine","upset","frustrated"],"char":"😫","fitzpatrick_scale":false,"category":"people"},"triumph":{"keywords":["face","gas","phew","proud","pride"],"char":"😤","fitzpatrick_scale":false,"category":"people"},"fearful":{"keywords":["face","scared","terrified","nervous","oops","huh"],"char":"😨","fitzpatrick_scale":false,"category":"people"},"disappointed_relieved":{"keywords":["face","phew","sweat","nervous"],"char":"😥","fitzpatrick_scale":false,"category":"people"},"sleepy":{"keywords":["face","tired","rest","nap"],"char":"😪","fitzpatrick_scale":false,"category":"people"},"sweat":{"keywords":["face","hot","sad","tired","exercise"],"char":"😓","fitzpatrick_scale":false,"category":"people"},"dizzy_face":{"keywords":["spent","unconscious","xox","dizzy"],"char":"😵","fitzpatrick_scale":false,"category":"people"},"astonished":{"keywords":["face","xox","surprised","poisoned"],"char":"😲","fitzpatrick_scale":false,"category":"people"},"sneezing_face":{"keywords":["face","gesundheit","sneeze","sick","allergy"],"char":"🤧","fitzpatrick_scale":false,"category":"people"},"mask":{"keywords":["face","sick","ill","disease"],"char":"😷","fitzpatrick_scale":false,"category":"people"},"face_with_thermometer":{"keywords":["sick","temperature","thermometer","cold","fever"],"char":"🤒","fitzpatrick_scale":false,"category":"people"},"face_with_head_bandage":{"keywords":["injured","clumsy","bandage","hurt"],"char":"🤕","fitzpatrick_scale":false,"category":"people"},"sleeping":{"keywords":["face","tired","sleepy","night","zzz"],"char":"😴","fitzpatrick_scale":false,"category":"people"},"zzz":{"keywords":["sleepy","tired","dream"],"char":"💤","fitzpatrick_scale":false,"category":"people"},"clap":{"keywords":["hands","praise","applause","congrats","yay"],"char":"👏","fitzpatrick_scale":true,"category":"people"},"call_me_hand":{"keywords":["hands","gesture"],"char":"🤙","fitzpatrick_scale":true,"category":"people"},"+1":{"keywords":["thumbsup","yes","awesome","good","agree","accept","cool","hand","like"],"char":"👍","fitzpatrick_scale":true,"category":"people"},"-1":{"keywords":["thumbsdown","no","dislike","hand"],"char":"👎","fitzpatrick_scale":true,"category":"people"},"facepunch":{"keywords":["angry","violence","fist","hit","attack","hand"],"char":"👊","fitzpatrick_scale":true,"category":"people"},"fist":{"keywords":["fingers","hand","grasp"],"char":"✊","fitzpatrick_scale":true,"category":"people"},"v":{"keywords":["fingers","ohyeah","hand","peace","victory","two"],"char":"✌","fitzpatrick_scale":true,"category":"people"},"ok_hand":{"keywords":["fingers","limbs","perfect","ok","okay"],"char":"👌","fitzpatrick_scale":true,"category":"people"},"raised_hand":{"keywords":["fingers","stop","highfive","palm","ban"],"char":"✋","fitzpatrick_scale":true,"category":"people"},"raised_back_of_hand":{"keywords":["fingers","raised","backhand"],"char":"🤚","fitzpatrick_scale":true,"category":"people"},"muscle":{"keywords":["arm","flex","hand","summer","strong","biceps"],"char":"💪","fitzpatrick_scale":true,"category":"people"},"handshake":{"keywords":["agreement","shake"],"char":"🤝","fitzpatrick_scale":false,"category":"people"},"point_left":{"keywords":["direction","fingers","hand","left"],"char":"👈","fitzpatrick_scale":true,"category":"people"},"point_right":{"keywords":["fingers","hand","direction","right"],"char":"👉","fitzpatrick_scale":true,"category":"people"},"fu":{"keywords":["hand","fingers","rude","middle","flipping"],"char":"🖕","fitzpatrick_scale":true,"category":"people"},"raised_hand_with_fingers_splayed":{"keywords":["hand","fingers","palm"],"char":"🖐","fitzpatrick_scale":true,"category":"people"},"lips":{"keywords":["mouth","kiss"],"char":"👄","fitzpatrick_scale":false,"category":"people"},"ear":{"keywords":["face","hear","sound","listen"],"char":"👂","fitzpatrick_scale":true,"category":"people"},"eyes":{"keywords":["look","watch","stalk","peek","see"],"char":"👀","fitzpatrick_scale":false,"category":"people"},"santa":{"keywords":["festival","man","male","xmas","father christmas"],"char":"🎅","fitzpatrick_scale":true,"category":"people"},"sun_with_face":{"keywords":["nature","morning","sky"],"char":"🌞","fitzpatrick_scale":false,"category":"animals_and_nature"},"crescent_moon":{"keywords":["night","sleep","sky","evening","magic"],"char":"🌙","fitzpatrick_scale":false,"category":"animals_and_nature"},"star":{"keywords":["night","yellow"],"char":"⭐","fitzpatrick_scale":false,"category":"animals_and_nature"},"zap":{"keywords":["thunder","weather","lightning bolt","fast"],"char":"⚡","fitzpatrick_scale":false,"category":"animals_and_nature"},"fire":{"keywords":["hot","cook","flame"],"char":"🔥","fitzpatrick_scale":false,"category":"animals_and_nature"},"snowflake":{"keywords":["winter","season","cold","weather","christmas","xmas"],"char":"❄️","fitzpatrick_scale":false,"category":"animals_and_nature"},"soccer":{"keywords":["sports","football"],"char":"⚽","fitzpatrick_scale":false,"category":"activity"},"basketball":{"keywords":["sports","balls","NBA"],"char":"🏀","fitzpatrick_scale":false,"category":"activity"},"football":{"keywords":["sports","balls","NFL"],"char":"🏈","fitzpatrick_scale":false,"category":"activity"},"baseball":{"keywords":["sports","balls"],"char":"⚾","fitzpatrick_scale":false,"category":"activity"},"gift":{"keywords":["present","birthday","christmas","xmas"],"char":"🎁","fitzpatrick_scale":false,"category":"objects"},"tada":{"keywords":["party","congratulations","birthday","magic","circus","celebration"],"char":"🎉","fitzpatrick_scale":false,"category":"objects"},"black_nib":{"keywords":["pen","stationery","writing","write"],"char":"✒️","fitzpatrick_scale":false,"category":"objects"},"memo":{"keywords":["write","documents","stationery","pencil","paper","writing","legal","exam","quiz","test","study","compose"],"char":"📝","fitzpatrick_scale":false,"category":"objects"},"heart":{"keywords":["love","like","valentines"],"char":"❤️","fitzpatrick_scale":false,"category":"symbols"},"yellow_heart":{"keywords":["love","like","affection","valentines"],"char":"💛","fitzpatrick_scale":false,"category":"symbols"},"green_heart":{"keywords":["love","like","affection","valentines"],"char":"💚","fitzpatrick_scale":false,"category":"symbols"},"vs":{"keywords":["words","orange-square"],"char":"🆚","fitzpatrick_scale":false,"category":"symbols"},"speech_balloon":{"keywords":["bubble","words","message","talk","chatting"],"char":"💬","fitzpatrick_scale":false,"category":"symbols"},"clock1":{"keywords":["time","late","early","schedule"],"char":"🕐","fitzpatrick_scale":false,"category":"symbols"}}')
        }
    },
    [
        [169, 0, 1, 2]
    ]
]);