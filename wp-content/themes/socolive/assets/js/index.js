(window.webpackJsonp = window.webpackJsonp || []).push([[16], {
    14: function(t, e, n) {
        "use strict";
        n.r(e),
        function(t, e) {
            var o = n(4)
              , i = n.n(o);
            !function(t, o) {
                "object" == ("undefined" == typeof exports ? "undefined" : i()(exports)) ? e.exports = o(t) : "function" == typeof define && n(11) ? define([], o) : t.LazyLoad = o(t)
            }(void 0 !== t ? t : (void 0).window || (void 0).global, (function(t) {
                function e(t, e) {
                    this.settings = i(o, e || {}),
                    this.images = t || document.querySelectorAll(this.settings.selector),
                    this.observer = null,
                    this.init()
                }
                "function" == typeof define && n(11) && (t = window);
                var o = {
                    src: "data-src",
                    srcset: "data-srcset",
                    selector: ".lazyload",
                    root: null,
                    rootMargin: "0px",
                    threshold: 0
                }
                  , i = function t() {
                    var e = {}
                      , n = !1
                      , o = 0
                      , i = arguments.length;
                    for ("[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (n = arguments[0],
                    o++); o < i; o++)
                        !function(o) {
                            for (var i in o)
                                Object.prototype.hasOwnProperty.call(o, i) && (n && "[object Object]" === Object.prototype.toString.call(o[i]) ? e[i] = t(!0, e[i], o[i]) : e[i] = o[i])
                        }(arguments[o]);
                    return e
                };
                if (e.prototype = {
                    init: function() {
                        if (t.IntersectionObserver) {
                            var e = this
                              , n = {
                                root: this.settings.root,
                                rootMargin: this.settings.rootMargin,
                                threshold: [this.settings.threshold]
                            };
                            this.observer = new IntersectionObserver((function(t) {
                                Array.prototype.forEach.call(t, (function(t) {
                                    if (t.isIntersecting) {
                                        e.observer.unobserve(t.target);
                                        var n = t.target.getAttribute(e.settings.src)
                                          , o = t.target.getAttribute(e.settings.srcset);
                                        "img" === t.target.tagName.toLowerCase() ? (n && (t.target.src = n),
                                        o && (t.target.srcset = o)) : t.target.style.backgroundImage = "url(" + n + ")"
                                    }
                                }
                                ))
                            }
                            ),n),
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
                                var n = e.getAttribute(t.settings.src)
                                  , o = e.getAttribute(t.settings.srcset);
                                "img" === e.tagName.toLowerCase() ? (n && (e.src = n),
                                o && (e.srcset = o)) : e.style.backgroundImage = "url('" + n + "')"
                            }
                            ))
                        }
                    },
                    destroy: function() {
                        this.settings && (this.observer.disconnect(),
                        this.settings = null)
                    }
                },
                t.lazyload = function(t, n) {
                    return new e(t,n)
                }
                ,
                t.jQuery) {
                    var a = t.jQuery;
                    a.fn.lazyload = function(t) {
                        return (t = t || {}).attribute = t.attribute || "data-src",
                        new e(a.makeArray(this),t),
                        this
                    }
                }
                return e
            }
            ))
        }
        .call(this, n(13), n(15)(t))
    },
    158: function(t, e, n) {
        t.exports = n(159)
    },
    159: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(31)
          , i = n.n(o)
          , a = n(10)
          , s = n.n(a)
          , r = n(5)
          , c = n.n(r)
          , l = n(1)
          , u = n(0)
          , d = n(6)
          , m = n(17)
          , h = n(8)
          , p = n(9)
          , f = n(3)
          , v = n(23)
          , g = n(2);
        n(37),
        d.default.handleIsHadUserLogin() && v.default.init(),
        $(s()(c.a.mark((function t() {
            var e, n, o, a, r, v, y, w, b, _, C, x, I, T;
            return c.a.wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        T = function(t) {
                            if (t) {
                                var e = t;
                                e = (e = e.replace(/\[football\]/g, (function(t) {
                                    return '<img src="'.concat(u.default.cdn, "/assets/").concat(u.default.env, '/img/sports/football.png">')
                                }
                                ))).replace(/\[basketball\]/g, (function(t) {
                                    return '<img src="'.concat(u.default.cdn, "/assets/").concat(u.default.env, '/img/sports/basketball.png">')
                                }
                                )),
                                $(".index-wrapper .marquee-container").show(),
                                $(".index-wrapper .marquee-container .marquee-box").html(e);
                                var n = (2 * $(".index-wrapper .marquee-container .marquee-box").width() + 1200) / 184.5 + "s";
                                $(".index-wrapper .marquee-container .marquee-box").css({
                                    "animation-duration": n
                                })
                            }
                        }
                        ,
                        I = function(t) {
                            var e = ""
                              , n = "";
                            t.map((function(t, o) {
                                o < 5 && (e += '\n        <li data-roomnum="'.concat(t.roomNum, '">\n          <a href="javascript:void(0)" class=\'').concat(0 === o ? "active" : "", '\'>\n            <i class="left-arrow"></i>\n            <img class="lazyload live-cover" src="').concat(u.default.cdn, "/assets/").concat(u.default.env, '/img/live-cover.png" data-src="').concat(t.cutOutCustomCoverUrl ? t.cutOutCustomCoverUrl : t.cover, '" data-src-backup="').concat(t.cover, '" />\n          </a>\n        </li>')),
                                n += '\n        <li>\n          <a href="'.concat(f.default.roomUrl(t.roomNum), '">\n            <div class="mask"></div>\n            <img class="fm lazyload live-cover" src="').concat(u.default.cdn, "/assets/").concat(u.default.env, '/img/live-cover.png" data-src="').concat(t.cutOutCustomCoverUrl ? t.cutOutCustomCoverUrl : t.cover, '" data-src-backup="').concat(t.cover, '" />\n            <div class="live-mask"></div>\n            <i class="btn-open"></i>\n            <div class="top-tag float-clear">\n              ').concat(1 === t.markType ? '<span class="tag">\n                  <i i18n-text="官方">'.concat(g.default.official_tag, "</i>\n                </span>") : 2 === t.markType ? '<span class="com">\n                  <i i18n-text="推荐">'.concat(g.default.recommend_tag, "</i>\n                </span>") : 3 === t.markType ? '<span class="hots">\n                  <i i18n-text="火爆">'.concat(g.default.hot_tag, "</i>\n                </span>") : "<span></span>", '\n              <div class="living">\n                <img src="').concat(u.default.cdn, "/assets/").concat(u.default.env, '/img/living.gif">\n                <span>Live</span>\n              </div>\n            </div>\n            <h5 class="bottom-title">\n              <span class="name">').concat(t.anchor.nickName, '</span>\n              <span class="num">\n                <img src="').concat(u.default.cdn, "/assets/").concat(u.default.env, '/img/icon-hot-white.png" srcset="">\n                <span>').concat(h.default.viewCount(t.viewCount), '</span>\n              </span>\n            </h5>\n            <h4 class="ellipsis">').concat(t.title, "</h4>\n          </a>\n        </li>")
                            }
                            )),
                            $(".video-list .room-list").html(e),
                            $(".hot .all-content").html(n),
                            f.default.loadImg("live"),
                            l.storeData.indexLoad = 1,
                            0 === $(".index-wrapper .hot .all-content").children().length && $(".index-wrapper .hot .none-data").show()
                        }
                        ,
                        x = function() {
                            m.default.hotAnchor().then((function(t) {
                                if (t && t.anchors) {
                                    var e = t.anchors;
                                    if (e.length > 0) {
                                        var n = "";
                                        e.map((function(t, e) {
                                            n += '\n            <div class="swiper-slide person" data-roomnum="'.concat(t.anchor.roomNum, '" >\n              <a href="').concat(f.default.roomUrl(t.anchor.roomNum), '">\n                <img class="avatar lazyload" src="').concat(u.default.cdn, "/assets/").concat(u.default.env, '/img/avatar.png" data-src="').concat(t.cutOutIcon ? t.cutOutIcon : t.icon, '" data-src-backup="').concat(t.icon, '" />\n                <p class="ellipsis">').concat(t.nickName, "</p>\n              </a>\n            </div>")
                                        }
                                        )),
                                        $(".anchor-swiper-container .swiper-wrapper").html(n),
                                        f.default.loadImg("avatar"),
                                        e.length <= 8 ? ($(".swiper-button-prev.anchor-prev").hide(),
                                        $(".swiper-button-next.anchor-next").hide()) : a.init()
                                    } else
                                        $(".anchor").hide()
                                }
                            }
                            ))
                        }
                        ,
                        C = function() {
                            m.default.matchRecommend().then((function(t) {
                                if ((w = t && t.count > 0 ? t.matches : []).length > 0) {
                                    var e = ""
                                      , n = h.default.Today(new Date)
                                      , i = h.default.Tomorrow(new Date);
                                    w.map((function(t, o) {
                                        if (!(o > 7)) {
                                            if (b && 0 != b.length)
                                                for (var a = 0; a < b.length; a++)
                                                    if (t.scheduleId == b[a].scheduleId) {
                                                        t.reservationStatus = 1,
                                                        b.splice(a, 1);
                                                        break
                                                    }
                                            e += '\n            <div class="swiper-slide game">\n              <div class="title">\n                <div class="fl">\n                  <img src="'.concat(t.categoryIcon, '"  class="icon" />\n                  <span>').concat(t.subCateName, "</span>\n                </div>\n                  ").concat(new Date(h.default.zoneDate(t.matchTime).getTime()).getDate() == n ? '\n                    <div class="fr match-time" >\n                      <span style="padding-right:5px;" i18n-text="今天">'.concat(g.default.today, "</span>\n                      ") + h.default.formatDate1(h.default.zoneDate(t.matchTime).getTime()) + "\n                    </div>" : new Date(h.default.zoneDate(t.matchTime).getTime()).getDate() == i ? '\n                    <div class="fr">\n                        <span style="padding-right:5px" i18n-text="明天">'.concat(g.default.tomorrow, "</span>\n                        ") + h.default.formatDate1(h.default.zoneDate(t.matchTime).getTime()) + "\n                      </div>" : '<div class="fr">' + h.default.formatDate(h.default.zoneDate(t.matchTime).getTime()) + " </div>", '\n              </div>\n              <div class="box">\n                <div class="battle-team fl">\n                  <p>\n                    <img class="logo lazyload match-cover" src="').concat(u.default.cdn, "/assets/").concat(u.default.env, '/img/match-cover.png" data-src="').concat(t.hostIcon, '" />\n                    <span class="ellipsis">').concat(t.hostName, '</span>\n                  </p>\n                  <p>\n                    <img class="logo lazyload match-cover" src="').concat(u.default.cdn, "/assets/").concat(u.default.env, '/img/match-cover.png" data-src="').concat(t.guestIcon, '" alt />\n                    <span class="ellipsis">').concat(t.guestName, '</span>\n                  </p>\n                </div>\n                <a href="javascript:;" data-id=\'').concat(o, "' class=\"appoinment ").concat(1 === t.reservationStatus ? "use" : "", '">\n                  <span class="already-appoinment" i18n-text="已预约">').concat(g.default.already_subscribe, '</span>\n                  <span class="no-appoinment" i18n-text="预约">').concat(g.default.subscribe, "</span>\n                </a>\n              </div>\n            </div>")
                                        }
                                    }
                                    )),
                                    8 == w.length && (e += '<div class="swiper-slide more-match">\n            <a href="/match.html">\n              <img src="'.concat(u.default.cdn, "/assets/").concat(u.default.env, '/img/icon-all-match@2x.png" alt />\n              <p class="match-text" i18n-text="全部赛程">').concat(g.default.all_match, "</p>\n            </a>\n          </div>")),
                                    $(".appoinment-list .swiper-wrapper").html(e),
                                    f.default.loadImg("match"),
                                    o.init()
                                } else
                                    $(".appoinment-list").hide()
                            }
                            ))
                        }
                        ,
                        _ = function() {
                            d.default.handleIsHadUserLogin() ? d.default.matchReservationList().then((function(t) {
                                t && t.matches && (b = t.matches),
                                C()
                            }
                            )) : C()
                        }
                        ,
                        o = new Swiper(".appoinment-swiper-container",(e = {
                            direction: "horizontal",
                            init: !1,
                            slidesPerView: 5
                        },
                        i()(e, "slidesPerView", "auto"),
                        i()(e, "navigation", {
                            nextEl: ".appoinment-next",
                            prevEl: ".appoinment-prev"
                        }),
                        e)),
                        a = new Swiper(".anchor-swiper-container",(n = {
                            direction: "horizontal",
                            init: !1,
                            slidesPerView: 8
                        },
                        i()(n, "slidesPerView", "auto"),
                        i()(n, "navigation", {
                            nextEl: ".anchor-next",
                            prevEl: ".anchor-prev"
                        }),
                        n)),
                        r = [],
                        v = [],
                        y = [],
                        w = [],
                        b = [],
                        m.default.liveTypeList().then((function(t) {
                            if (t) {
                                y = t.liveTypes;
                                var e = "";
                                y.forEach((function(t, n) {
                                    0 === t.parentId && (e += '<li class="live-type-item">'.concat(t.typeName, '<b class="pa"></b></li>'))
                                }
                                )),
                                $(".index-wrapper .hot .live-type-list").append(e)
                            }
                        }
                        )),
                        m.default.allRoom().then((function(t) {
                            r = (v = t)[0],
                            T(t.scroll),
                            I(r),
                            r && 0 != r.length && ($(".inLiveRoom").click((function() {
                                var t = $(".video-inner .room-list .active").closest("li").attr("data-roomnum");
                                window.location.href = f.default.roomUrl(t)
                            }
                            )),
                            $(".goRoom").click((function() {
                                var t = $(".video-inner .room-list .active").closest("li").attr("data-roomnum");
                                window.location.href = f.default.roomUrl(t)
                            }
                            )))
                        }
                        )),
                        _(),
                        x(),
                        $(".index-wrapper .hot .live-type-list").on("click", ".live-type-item", (function() {
                            if (!$(this).hasClass("active"))
                                if ($(".index-wrapper .hot .live-type-list .live-type-item.active").removeClass("active"),
                                $(this).addClass("active"),
                                $(".index-wrapper .hot .none-data").hide(),
                                $(this).hasClass("all-type"))
                                    $(".index-wrapper .hot .all-content").show(),
                                    $(".index-wrapper .hot .live-type-content").hide(),
                                    0 === $(".index-wrapper .hot .all-content").children().length && $(".index-wrapper .hot .none-data").show();
                                else {
                                    var t = [];
                                    y[$(this).index() - 1] && (t = v[y[$(this).index() - 1].liveTypeId]);
                                    var e = "";
                                    t.map((function(t, n) {
                                        e += '\n          <li>\n            <a href="'.concat(f.default.roomUrl(t.roomNum), '">\n              <div class="mask"></div>\n              <img class="fm lazyload live-cover" src="').concat(u.default.cdn, "/assets/").concat(u.default.env, '/img/live-cover.png" data-src="').concat(t.cutOutCustomCoverUrl ? t.cutOutCustomCoverUrl : t.cover, '" data-src-backup="').concat(t.cover, '" />\n              <div class="live-mask"></div>\n              <i class="btn-open"></i>\n              <div class="top-tag float-clear">\n                ').concat(1 === t.markType ? '<span class="tag">\n                    <i i18n-text="官方">'.concat(g.default.official_tag, "</i>\n                  </span>") : 2 === t.markType ? '<span class="com">\n                    <i i18n-text="推荐">'.concat(g.default.recommend_tag, "</i>\n                  </span>") : 3 === t.markType ? '<span class="hots">\n                    <i i18n-text="火爆">'.concat(g.default.hot_tag, "</i>\n                  </span>") : "<span></span>", '\n                <div class="living">\n                  <img src="').concat(u.default.cdn, "/assets/").concat(u.default.env, '/img/living.gif">\n                  <span>Live</span>\n                </div>\n              </div>\n              <h5 class="bottom-title">\n                <span class="name">').concat(t.anchor.nickName, '</span>\n                <span class="num">\n                  <img src="').concat(u.default.cdn, "/assets/").concat(u.default.env, '/img/icon-hot-white.png" srcset="">\n                  <span>').concat(h.default.viewCount(t.viewCount), '</span>\n                </span>\n              </h5>\n              <h4 class="ellipsis">').concat(t.title, "</h4>\n            </a>\n          </li>")
                                    }
                                    )),
                                    $(".index-wrapper .hot .all-content").hide(),
                                    $(".index-wrapper .hot .live-type-content").html(e).show(),
                                    f.default.loadImg("live"),
                                    0 === $(".index-wrapper .hot .live-type-content").children().length && $(".index-wrapper .hot .none-data").show()
                                }
                        }
                        )),
                        $(".index-wrapper .appoinment-list").on("click", ".appoinment", function() {
                            var t = s()(c.a.mark((function t(e) {
                                var n, o, i, a, s;
                                return c.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            if (n = $(this),
                                            o = n.attr("data-id"),
                                            i = 1 == w[o].reservationStatus ? 2 : 1,
                                            d.default.handleLoginJump(!1)) {
                                                t.next = 13;
                                                break
                                            }
                                            return a = {
                                                operation: i,
                                                matchId: w[o].scheduleId
                                            },
                                            t.prev = 3,
                                            t.next = 6,
                                            d.default.matchReservation(a);
                                        case 6:
                                            s = t.sent,
                                            1 == i && s ? (Object(p.Msg)({
                                                message: g.default.subscribe_success
                                            }),
                                            w[o].reservationStatus = 1,
                                            n.addClass("use")) : s && (Object(p.Msg)({
                                                message: g.default.subscribe_cancel
                                            }),
                                            w[o].reservationStatus = 2,
                                            n.removeClass("use")),
                                            t.next = 13;
                                            break;
                                        case 10:
                                            t.prev = 10,
                                            t.t0 = t.catch(3),
                                            console.log(t.t0);
                                        case 13:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t, this, [[3, 10]])
                            }
                            )));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()),
                        $(document).on("click", 'a[href^="#"]', (function() {
                            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                                var t = $(this.hash);
                                if ((t = t.length && t || $("[name=" + this.hash.slice(1) + "]")).length) {
                                    var e = t.offset().top;
                                    return $("html,body").animate({
                                        scrollTop: e
                                    }, 500),
                                    !1
                                }
                            }
                        }
                        )),
                        $(".code").mouseenter((function() {
                            $(".sao-code").fadeIn(300)
                        }
                        )).mouseleave((function() {
                            $(".sao-code").fadeOut(300)
                        }
                        )),
                        $(window).scroll((function() {
                            $(window).scrollTop() > $(window).height() / 2 ? $(".right-fix").fadeIn(150) : $(".right-fix").fadeOut(150)
                        }
                        )),
                        $(".feedback").click((function() {
                            d.default.handleLoginJump() || (location.href = "/pages/feedback.html")
                        }
                        ));
                    case 22:
                    case "end":
                        return t.stop()
                    }
            }
            ), t)
        }
        ))))
    },
    16: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(4)
          , i = n.n(o);
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
                        for (var e = window.document, n = a(e); n; )
                            n = a(e = n.ownerDocument);
                        return e
                    }()
                      , e = []
                      , n = null
                      , o = null;
                    r.prototype.THROTTLE_TIMEOUT = 100,
                    r.prototype.POLL_INTERVAL = null,
                    r.prototype.USE_MUTATION_OBSERVER = !0,
                    r._setupCrossOriginUpdater = function() {
                        return n || (n = function(t, n) {
                            o = t && n ? m(t, n) : {
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
                        n
                    }
                    ,
                    r._resetCrossOriginUpdater = function() {
                        n = null,
                        o = null
                    }
                    ,
                    r.prototype.observe = function(t) {
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
                    r.prototype.unobserve = function(t) {
                        this._observationTargets = this._observationTargets.filter((function(e) {
                            return e.element != t
                        }
                        )),
                        this._unmonitorIntersections(t.ownerDocument),
                        0 == this._observationTargets.length && this._unregisterInstance()
                    }
                    ,
                    r.prototype.disconnect = function() {
                        this._observationTargets = [],
                        this._unmonitorAllIntersections(),
                        this._unregisterInstance()
                    }
                    ,
                    r.prototype.takeRecords = function() {
                        var t = this._queuedEntries.slice();
                        return this._queuedEntries = [],
                        t
                    }
                    ,
                    r.prototype._initThresholds = function(t) {
                        var e = t || [0];
                        return Array.isArray(e) || (e = [e]),
                        e.sort().filter((function(t, e, n) {
                            if ("number" != typeof t || isNaN(t) || t < 0 || t > 1)
                                throw new Error("threshold must be a number between 0 and 1 inclusively");
                            return t !== n[e - 1]
                        }
                        ))
                    }
                    ,
                    r.prototype._parseRootMargin = function(t) {
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
                    r.prototype._monitorIntersections = function(e) {
                        var n = e.defaultView;
                        if (n && -1 == this._monitoringDocuments.indexOf(e)) {
                            var o = this._checkForIntersections
                              , i = null
                              , s = null;
                            if (this.POLL_INTERVAL ? i = n.setInterval(o, this.POLL_INTERVAL) : (c(n, "resize", o, !0),
                            c(e, "scroll", o, !0),
                            this.USE_MUTATION_OBSERVER && "MutationObserver"in n && (s = new n.MutationObserver(o)).observe(e, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            })),
                            this._monitoringDocuments.push(e),
                            this._monitoringUnsubscribes.push((function() {
                                var t = e.defaultView;
                                t && (i && t.clearInterval(i),
                                l(t, "resize", o, !0)),
                                l(e, "scroll", o, !0),
                                s && s.disconnect()
                            }
                            )),
                            e != (this.root && this.root.ownerDocument || t)) {
                                var r = a(e);
                                r && this._monitorIntersections(r.ownerDocument)
                            }
                        }
                    }
                    ,
                    r.prototype._unmonitorIntersections = function(e) {
                        var n = this._monitoringDocuments.indexOf(e);
                        if (-1 != n) {
                            var o = this.root && this.root.ownerDocument || t;
                            if (!this._observationTargets.some((function(t) {
                                var n = t.element.ownerDocument;
                                if (n == e)
                                    return !0;
                                for (; n && n != o; ) {
                                    var i = a(n);
                                    if ((n = i && i.ownerDocument) == e)
                                        return !0
                                }
                                return !1
                            }
                            ))) {
                                var i = this._monitoringUnsubscribes[n];
                                if (this._monitoringDocuments.splice(n, 1),
                                this._monitoringUnsubscribes.splice(n, 1),
                                i(),
                                e != o) {
                                    var s = a(e);
                                    s && this._unmonitorIntersections(s.ownerDocument)
                                }
                            }
                        }
                    }
                    ,
                    r.prototype._unmonitorAllIntersections = function() {
                        var t = this._monitoringUnsubscribes.slice(0);
                        this._monitoringDocuments.length = 0,
                        this._monitoringUnsubscribes.length = 0;
                        for (var e = 0; e < t.length; e++)
                            t[e]()
                    }
                    ,
                    r.prototype._checkForIntersections = function() {
                        if (this.root || !n || o) {
                            var t = this._rootIsInDom()
                              , e = t ? this._getRootRect() : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            };
                            this._observationTargets.forEach((function(o) {
                                var i = o.element
                                  , a = u(i)
                                  , r = this._rootContainsTarget(i)
                                  , c = o.entry
                                  , l = t && r && this._computeTargetAndRootIntersection(i, a, e)
                                  , d = o.entry = new s({
                                    time: window.performance && performance.now && performance.now(),
                                    target: i,
                                    boundingClientRect: a,
                                    rootBounds: n && !this.root ? null : e,
                                    intersectionRect: l
                                });
                                c ? t && r ? this._hasCrossedThreshold(c, d) && this._queuedEntries.push(d) : c && c.isIntersecting && this._queuedEntries.push(d) : this._queuedEntries.push(d)
                            }
                            ), this),
                            this._queuedEntries.length && this._callback(this.takeRecords(), this)
                        }
                    }
                    ,
                    r.prototype._computeTargetAndRootIntersection = function(e, i, a) {
                        if ("none" != window.getComputedStyle(e).display) {
                            for (var s, r, c, l, d, h, f, v, g = i, y = p(e), w = !1; !w && y; ) {
                                var b = null
                                  , $ = 1 == y.nodeType ? window.getComputedStyle(y) : {};
                                if ("none" == $.display)
                                    return null;
                                if (y == this.root || 9 == y.nodeType)
                                    if (w = !0,
                                    y == this.root || y == t)
                                        n && !this.root ? !o || 0 == o.width && 0 == o.height ? (y = null,
                                        b = null,
                                        g = null) : b = o : b = a;
                                    else {
                                        var _ = p(y)
                                          , C = _ && u(_)
                                          , x = _ && this._computeTargetAndRootIntersection(_, C, a);
                                        C && x ? (y = _,
                                        b = m(C, x)) : (y = null,
                                        g = null)
                                    }
                                else {
                                    var I = y.ownerDocument;
                                    y != I.body && y != I.documentElement && "visible" != $.overflow && (b = u(y))
                                }
                                if (b && (s = b,
                                r = g,
                                void 0,
                                void 0,
                                void 0,
                                void 0,
                                void 0,
                                void 0,
                                c = Math.max(s.top, r.top),
                                l = Math.min(s.bottom, r.bottom),
                                d = Math.max(s.left, r.left),
                                v = l - c,
                                g = (f = (h = Math.min(s.right, r.right)) - d) >= 0 && v >= 0 && {
                                    top: c,
                                    bottom: l,
                                    left: d,
                                    right: h,
                                    width: f,
                                    height: v
                                } || null),
                                !g)
                                    break;
                                y = y && p(y)
                            }
                            return g
                        }
                    }
                    ,
                    r.prototype._getRootRect = function() {
                        var e;
                        if (this.root)
                            e = u(this.root);
                        else {
                            var n = t.documentElement
                              , o = t.body;
                            e = {
                                top: 0,
                                left: 0,
                                right: n.clientWidth || o.clientWidth,
                                width: n.clientWidth || o.clientWidth,
                                bottom: n.clientHeight || o.clientHeight,
                                height: n.clientHeight || o.clientHeight
                            }
                        }
                        return this._expandRectByRootMargin(e)
                    }
                    ,
                    r.prototype._expandRectByRootMargin = function(t) {
                        var e = this._rootMarginValues.map((function(e, n) {
                            return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
                        }
                        ))
                          , n = {
                            top: t.top - e[0],
                            right: t.right + e[1],
                            bottom: t.bottom + e[2],
                            left: t.left - e[3]
                        };
                        return n.width = n.right - n.left,
                        n.height = n.bottom - n.top,
                        n
                    }
                    ,
                    r.prototype._hasCrossedThreshold = function(t, e) {
                        var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1
                          , o = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                        if (n !== o)
                            for (var i = 0; i < this.thresholds.length; i++) {
                                var a = this.thresholds[i];
                                if (a == n || a == o || a < n != a < o)
                                    return !0
                            }
                    }
                    ,
                    r.prototype._rootIsInDom = function() {
                        return !this.root || h(t, this.root)
                    }
                    ,
                    r.prototype._rootContainsTarget = function(e) {
                        return h(this.root || t, e) && (!this.root || this.root.ownerDocument == e.ownerDocument)
                    }
                    ,
                    r.prototype._registerInstance = function() {
                        e.indexOf(this) < 0 && e.push(this)
                    }
                    ,
                    r.prototype._unregisterInstance = function() {
                        var t = e.indexOf(this);
                        -1 != t && e.splice(t, 1)
                    }
                    ,
                    window.IntersectionObserver = r,
                    window.IntersectionObserverEntry = s
                }
            function a(t) {
                try {
                    return t.defaultView && t.defaultView.frameElement || null
                } catch (t) {
                    return null
                }
            }
            function s(t) {
                this.time = t.time,
                this.target = t.target,
                this.rootBounds = d(t.rootBounds),
                this.boundingClientRect = d(t.boundingClientRect),
                this.intersectionRect = d(t.intersectionRect || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }),
                this.isIntersecting = !!t.intersectionRect;
                var e = this.boundingClientRect
                  , n = e.width * e.height
                  , o = this.intersectionRect
                  , i = o.width * o.height;
                this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0
            }
            function r(t, e) {
                var n, o, i, a = e || {};
                if ("function" != typeof t)
                    throw new Error("callback must be a function");
                if (a.root && 1 != a.root.nodeType)
                    throw new Error("root must be an Element");
                this._checkForIntersections = (n = this._checkForIntersections.bind(this),
                o = this.THROTTLE_TIMEOUT,
                i = null,
                function() {
                    i || (i = setTimeout((function() {
                        n(),
                        i = null
                    }
                    ), o))
                }
                ),
                this._callback = t,
                this._observationTargets = [],
                this._queuedEntries = [],
                this._rootMarginValues = this._parseRootMargin(a.rootMargin),
                this.thresholds = this._initThresholds(a.threshold),
                this.root = a.root || null,
                this.rootMargin = this._rootMarginValues.map((function(t) {
                    return t.value + t.unit
                }
                )).join(" "),
                this._monitoringDocuments = [],
                this._monitoringUnsubscribes = []
            }
            function c(t, e, n, o) {
                "function" == typeof t.addEventListener ? t.addEventListener(e, n, o || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
            }
            function l(t, e, n, o) {
                "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, o || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
            }
            function u(t) {
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
            function d(t) {
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
                var n = e.top - t.top
                  , o = e.left - t.left;
                return {
                    top: n,
                    left: o,
                    height: e.height,
                    width: e.width,
                    bottom: n + e.height,
                    right: o + e.width
                }
            }
            function h(t, e) {
                for (var n = e; n; ) {
                    if (n == t)
                        return !0;
                    n = p(n)
                }
                return !1
            }
            function p(e) {
                var n = e.parentNode;
                return 9 == e.nodeType && e != t ? a(e) : n && 11 == n.nodeType && n.host ? n.host : n && n.assignedSlot ? n.assignedSlot.parentNode : n
            }
        }()
    },
    19: function(t, e) {},
    37: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(10)
          , i = n.n(o)
          , a = n(5)
          , s = n.n(a)
          , r = n(1)
          , c = n(3)
          , l = n(6)
          , u = n(17)
          , d = n(0)
          , m = n(9)
          , h = n(22)
          , p = n.n(h)
          , f = n(2);
        $(i()(s.a.mark((function t() {
            var e, n, o, a, h, v, g, y, w, b, _, C, x, I, T, k, R, E, O, D, L, S, B, U, M, N, F, z, q;
            return s.a.wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        z = function() {
                            return (z = i()(s.a.mark((function t(e) {
                                var n, o;
                                return s.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0,
                                            t.next = 3,
                                            u.default.liveDetail({
                                                roomNum: e
                                            });
                                        case 3:
                                            n = t.sent,
                                            v = n,
                                            r.storeData.room = n.room,
                                            r.storeData.roomNum = e,
                                            r.storeData.anchorId = n.room.anchor.uid,
                                            "liveRoom" === $("#video-player-tag").attr("tag") && ($("title").text(n.room.title + " " + $("title").text()),
                                            $('meta[name="description"]').attr("content", n.room.title + " " + $('meta[name="description"]').attr("content")),
                                            $('meta[property="og:title"]').attr("content", n.room.title + " " + $('meta[property="og:title"]').attr("content")),
                                            $('meta[property="og:description"]').attr("content", n.room.title + " " + $('meta[property="og:description"]').attr("content"))),
                                            n.room.assistantUser && (o = {
                                                openId: p()(n.room.assistantUser.uid + ""),
                                                nickName: n.room.assistantUser.nickName,
                                                icon: n.room.assistantUser.icon
                                            },
                                            0 != d.default.debug && (o.openId = "c33a8cc4698d18a72bcb7de8c5737068"),
                                            r.storeData.friend = o),
                                            "liveRoom" == C && n.room.contact && $(".bottomCtrlRight .copy").show(),
                                            y = n.room.hd,
                                            T(n),
                                            t.next = 18;
                                            break;
                                        case 15:
                                            t.prev = 15,
                                            t.t0 = t.catch(0),
                                            console.log(t.t0);
                                        case 18:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t, null, [[0, 15]])
                            }
                            )))).apply(this, arguments)
                        }
                        ,
                        F = function(t) {
                            return z.apply(this, arguments)
                        }
                        ,
                        N = function(t) {
                            if (t) {
                                if ("liveRoom" == C) {
                                    var e = $("#fullScreenInput");
                                    1 == r.storeData.isUser ? ($(".send-danmu-input span").hide(),
                                    $(".send-danmu-enter").removeClass("cgcolor"),
                                    e.attr("placeholder", f.default.send_danmaku_tip),
                                    e.attr("contenteditable", !0)) : (e.attr("placeholder", f.default.before_can_speak),
                                    e.attr("contenteditable", !1)),
                                    $(".send-danmu").show()
                                }
                                o.addClass("fullscreen")
                            } else
                                o.removeClass("fullscreen"),
                                $(".send-danmu").hide()
                        }
                        ,
                        M = function(t) {
                            var e = document.querySelector(".video-player");
                            e.requestFullscreen ? t ? e.requestFullscreen() : document.exitFullscreen() : e.mozRequestFullScreen ? t ? e.mozRequestFullScreen() : document.mozCancelFullScreen() : e.webkitRequestFullScreen ? t ? e.webkitRequestFullScreen() : document.webkitCancelFullScreen() : e.msRequestFullscreen && (t ? e.msRequestFullscreen() : document.msExitFullscreen()),
                            N(t)
                        }
                        ,
                        U = function() {
                            var t = document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement;
                            return null != t && null != t || (t = !1),
                            t
                        }
                        ,
                        B = function(t) {
                            if (isShowMinScreen = t,
                            v && 1 == v.room.liveStatus)
                                if (t) {
                                    n.show(),
                                    o.hide(),
                                    e.addClass("min-screen");
                                    var i = 0
                                      , a = 0
                                      , s = 0
                                      , r = 0
                                      , c = !1;
                                    $(".min-screen").mousedown((function(t) {
                                        i = t.clientX,
                                        a = t.clientY,
                                        s = $(".min-screen").get(0).offsetLeft,
                                        r = $(".min-screen").get(0).offsetTop,
                                        c = !0,
                                        $(".min-screen").get(0).style.cursor = "move",
                                        window.onmousemove = function(t) {
                                            if (0 != c) {
                                                var e = t.clientX
                                                  , n = t.clientY
                                                  , o = e - (i - s)
                                                  , l = n - (a - r);
                                                $(".min-screen").get(0).style.left = o + "px",
                                                $(".min-screen").get(0).style.top = l + "px"
                                            }
                                        }
                                        ,
                                        $(".min-screen").mouseup((function() {
                                            c = !1,
                                            $(".min-screen").get(0).style.cursor = "default"
                                        }
                                        ))
                                    }
                                    ))
                                } else
                                    $(".min-screen").off("mousedown"),
                                    $(".min-screen").off("mouseup"),
                                    document.onmousemove = null,
                                    e.get(0).style.left = null,
                                    e.get(0).style.top = null,
                                    n.hide(),
                                    e.removeClass("min-screen")
                        }
                        ,
                        S = function() {
                            L && window.pageYOffset >= L ? B(!0) : B(!1)
                        }
                        ,
                        D = function(t) {
                            t ? ($("#danmuBtn").removeClass("video-open-danmu"),
                            $("#danmuBtn").addClass("video-close-danmu"),
                            I(0)) : ($("#danmuBtn").addClass("video-open-danmu"),
                            $("#danmuBtn").removeClass("video-close-danmu"),
                            I(1))
                        }
                        ,
                        O = function() {
                            return $(".volumn-slider").unbind("mousemove", E),
                            $(document).unbind("mouseup", O),
                            !1
                        }
                        ,
                        E = function(t) {
                            var e = $(this)
                              , n = (t.clientX - e.offset().left) / e.width() * 100;
                            return k(n),
                            n <= 0 ? n = 0 : n >= 100 && (n = 100),
                            e.children(".volumn-line").css({
                                width: n + "%"
                            }),
                            e.children(".volumn-point").css({
                                left: n + "%"
                            }),
                            !1
                        }
                        ,
                        R = function(t) {
                            if (0 == t.button) {
                                var e = $(this)
                                  , n = (t.clientX - e.offset().left) / e.width() * 100;
                                n > 0 && ($("#volumnBtn").removeClass("icon-volume"),
                                $("#volumnBtn").addClass("icon-close-volume")),
                                k(n),
                                e.children(".volumn-line").css({
                                    width: n + "%"
                                }),
                                e.children(".volumn-point").css({
                                    left: n + "%"
                                }),
                                e.bind("mousemove", E),
                                $(document).bind("mouseup", O)
                            }
                            return !1
                        }
                        ,
                        k = function(t) {
                            var e = t / 100 < 0 ? 0 : t / 100;
                            e = e > 1 ? 1 : e,
                            "function" == typeof h.volume ? h.volume(e, !0, !1) : h.volume = e
                        }
                        ,
                        T = function(t) {
                            var e = ""
                              , n = flvjs.isSupported();
                            e = "2" !== d.default.debug ? 1 == y ? t.stream.m3u8 : t.stream.hdM3u8 : "https://live.cgtn.com/1000/prog_index.m3u8",
                            b = !1,
                            w = null,
                            h = null,
                            n && t.stream.flv && t.stream.hdFlv ? (e = 1 == y ? t.stream.flv : t.stream.hdFlv,
                            $("#dplayer").html('<video name="videoElement" style="width:100%;height:100%" id="dplayerVideo" class="centeredVideo" autoplay>Your browser is too old which doesn\'t support HTML5 video.</video>\n            '),
                            (h = flvjs.createPlayer({
                                type: "flv",
                                isLive: !0,
                                url: e,
                                hasAudio: !0,
                                hasVideo: !0,
                                enableStashBuffer: !1
                            }, {
                                enableWorker: !1,
                                enableStashBuffer: !1,
                                reuseRedirectedURL: !0,
                                autoCleanupSourceBuffer: !0
                            })).attachMediaElement(document.getElementById("dplayerVideo")),
                            h.load()) : h = new DPlayer({
                                container: document.getElementById("dplayer"),
                                live: !0,
                                lang: "zh" === f.default.language ? "zh-cn" : "en",
                                volume: .7,
                                autoplay: !0,
                                danmaku: "liveRoom" == C,
                                apiBackend: {
                                    read: function(t, e) {},
                                    send: function(t, e, n) {}
                                },
                                video: {
                                    url: e,
                                    type: "customHls",
                                    pic: t.room.cover,
                                    customType: {
                                        customHls: function(t, e) {
                                            (w = new Hls({
                                                autoStartLoad: !1
                                            })).loadSource(t.src),
                                            w.attachMedia(t)
                                        }
                                    }
                                },
                                theme: "#FFC71C"
                            }),
                            r.storeData.dp = Object.assign({}, h);
                            var o = n ? h.play() : h.video.play();
                            if (o) {
                                var i = !0;
                                o.then((function() {
                                    $("#playBtn").addClass("video-play"),
                                    $("#playBtn").removeClass("video-pause"),
                                    $("#min-play").addClass("video-play"),
                                    $("#min-play").removeClass("video-pause"),
                                    $(".big-play-btn").hide(),
                                    w && w.startLoad()
                                }
                                )).catch((function() {
                                    i = !1,
                                    $("#playBtn").removeClass("video-play"),
                                    $("#playBtn").addClass("video-pause"),
                                    $("#min-play").removeClass("video-play"),
                                    $("#min-play").addClass("video-pause"),
                                    $(".big-play-btn").show(),
                                    w && w.stopLoad()
                                }
                                )),
                                setTimeout((function() {
                                    i && w && w.startLoad()
                                }
                                ), 1e3)
                            }
                            console.log(t),
                            1 == t.room.liveStatus ? a.hide() : "index" == C ? (a.hide(),
                            setTimeout((function() {
                                $(".big-play-btn").hide()
                            }
                            ), 10)) : a.show(),
                            h.on("error", (function() {
                                console.log("error"),
                                clearTimeout(_)
                            }
                            )),
                            h.on("waiting", (function() {
                                console.log("waiting"),
                                $("#videoLoading").show(),
                                clearTimeout(_),
                                _ = setTimeout((function() {
                                    T(v),
                                    h.play()
                                }
                                ), 3e4)
                            }
                            )),
                            h.on("canplay", (function() {
                                console.log("canplay"),
                                $("#videoLoading").hide(),
                                clearTimeout(_)
                            }
                            )),
                            h.on("playing", (function() {
                                console.log("playing"),
                                $("#videoLoading").hide(),
                                clearTimeout(_)
                            }
                            )),
                            h.on("play", (function() {
                                console.log("play"),
                                b ? (b = !1,
                                T(v),
                                console.log("hls create")) : w && (w.startLoad(),
                                console.log("hls startload"))
                            }
                            )),
                            h.on("ended", (function() {
                                console.log("ended"),
                                T(v),
                                clearTimeout(_)
                            }
                            )),
                            h.on("pause", (function() {
                                h.video.paused && (console.log("pause"),
                                $("#videoLoading").hide(),
                                clearTimeout(_),
                                w && (w.stopLoad(),
                                w.destroy(),
                                w = null,
                                b = !0,
                                console.log("hls destroy")))
                            }
                            )),
                            "index" == C && ($(".inLiveRoom").show(),
                            $(".goRoom").show()),
                            "liveRoom" == C && (h.play(),
                            $(".mute-tips").hide(),
                            $(".bottomCtrlRight").hide(),
                            $(".bottomCtrlRight.inRoom").show()),
                            "player" == C && $(".goRoom").hide(),
                            $(".dplayer-controller").hide(),
                            $(".dplayer-danloading").hide(),
                            $(".dplayer-bezel").hide()
                        }
                        ,
                        I = function(t) {
                            x.options = {
                                hiddenTypes: t
                            }
                        }
                        ,
                        e = $(".video-player"),
                        n = e.find(".min-screen-mark"),
                        o = e.find(".bottomCtrl"),
                        a = e.find(".vplayer-recommend"),
                        v = null,
                        y = 2,
                        w = null,
                        b = !1,
                        _ = null,
                        g = c.default.getRoomNum(),
                        C = $("#video-player-tag").attr("tag"),
                        (x = new openBSE.GeneralEngine(document.getElementsByClassName("bullet-wrapper")[0],{
                            defaultStyle: {
                                fontFamily: '"Microsoft YaHei","PingFang SC",SimHei,"Heiti SC",sans-serif',
                                fontWeight: "normal",
                                shadowBlur: 4
                            }
                        },"css3")).play(),
                        r.storeData.generalEngine = x,
                        D(!1),
                        "liveRoom" != C && "player" != C || F(g),
                        $("#refresh").click((function() {
                            $(".refresh").hide(),
                            T(v)
                        }
                        )),
                        $(".volumn-slider").bind("mousedown", R),
                        $(".mute-tips img").click((function() {
                            $(".mute-tips").fadeOut()
                        }
                        )),
                        setTimeout((function() {
                            $(".mute-tips").fadeOut()
                        }
                        ), 2e3),
                        $("#volumnBtn").click((function() {
                            var t = $(this);
                            if (t.hasClass("icon-volume")) {
                                t.removeClass("icon-volume"),
                                t.addClass("icon-close-volume");
                                var e = $(".volumn-slider .volumn-line").width() / 120;
                                k(100 * e)
                            } else
                                t.addClass("icon-volume"),
                                t.removeClass("icon-close-volume"),
                                k(0)
                        }
                        )),
                        $("#playBtn, #min-play, #dplayer, .big-play-btn").click((function(t) {
                            return c.default.stopBubble(t),
                            $("#playBtn").hasClass("video-play") ? ($("#playBtn").removeClass("video-play"),
                            $("#playBtn").addClass("video-pause"),
                            $("#min-play").removeClass("video-play"),
                            $("#min-play").addClass("video-pause"),
                            $(".big-play-btn").show(),
                            h.pause()) : ($("#playBtn").addClass("video-play"),
                            $("#playBtn").removeClass("video-pause"),
                            $("#min-play").addClass("video-play"),
                            $("#min-play").removeClass("video-pause"),
                            $(".big-play-btn").hide(),
                            h.play()),
                            !1
                        }
                        )),
                        $(".select-definition span").click((function() {
                            return $(".select-opt").fadeIn(),
                            !1
                        }
                        )),
                        $(".select-opt div").click((function() {
                            var t = $(this)
                              , e = $(this).attr("data-id");
                            t.hasClass("active") || ($(".select-opt div").removeClass("active"),
                            t.addClass("active"),
                            $(".select-definition span").html(t.html()),
                            y = e,
                            T(v))
                        }
                        )),
                        $("body").click((function() {
                            $(".select-opt").fadeOut()
                        }
                        )),
                        $("#danmuBtn").click((function() {
                            $(this).hasClass("video-open-danmu") ? D(!0) : D(!1)
                        }
                        )),
                        "liveRoom" == C && window.addEventListener("scroll", S),
                        L = 400,
                        n.find(".icon-close").click((function(t) {
                            c.default.stopBubble(t),
                            document.onmousedown = null,
                            document.onmousemove = null,
                            document.onmouseup = null,
                            window.removeEventListener("scroll", S),
                            B(!1)
                        }
                        )),
                        $(".video-full").click((function() {
                            U() ? M(!1) : M(!0)
                        }
                        )),
                        window.onresize = function() {
                            U() || N(!1)
                        }
                        ,
                        $(".bottomCtrlRight .copy").click((function() {
                            r.storeData.room && r.storeData.room.contact && (c.default.copyToClip(r.storeData.room.contact),
                            Object(m.Msg)({
                                message: f.default.copy_success
                            }))
                        }
                        )),
                        $(".room-list").on("click", "li", (function(t) {
                            $(".room-list li a.active").removeClass("active"),
                            $(this).children("a").addClass("active"),
                            F($(this).attr("data-roomnum"))
                        }
                        )),
                        $(".send-danmu-login").click((function() {
                            l.default.handleLoginJump(),
                            M(!1)
                        }
                        )),
                        $("#fullScreenGift").click((function() {
                            return $(".send-danmu-gift .gift-block").fadeIn(150),
                            !1
                        }
                        )),
                        $("body").click((function() {
                            $(".send-danmu-gift .gift-block").fadeOut(150)
                        }
                        )),
                        q = 0,
                        $(".video-player, .inLiveRoom").mousemove((function(t) {
                            e.hasClass("min-screen") || (q = (new Date).getTime(),
                            o.show())
                        }
                        )),
                        setInterval((function() {
                            (new Date).getTime() - q > 2e3 && o.hide()
                        }
                        ), 1500);
                    case 48:
                    case "end":
                        return t.stop()
                    }
            }
            ), t)
        }
        ))))
    }
}, [[158, 0, 1, 2]]]);
