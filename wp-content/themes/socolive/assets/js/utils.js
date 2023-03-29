(window.webpackJsonp = window.webpackJsonp || []).push([[1], [function(t, e, n) {
    "use strict";
    n.r(e);
    var o = {
        SECRET_KEY: "&%*$8@!!%",
        API_KEY_REQ: "PHp1st5vEg5Ca8FH",
        API_KEY_RESP: "qlCJekfRKwWkQxl7",
        URL: {
            UPLOAD_FILE: "//file.vnres.co/upload",
            REQ_FILE: "//sta.vnres.co/file"
        },
        baseUrl: "https://socolive10.tv/webApi",
        h5Url: "http://m.soco.live",
        websocketUrl: "wss://ws.vnres.co:443",
        downloadAppUrl: "/download/",
        staticApiUrl: "//json.vnres.co",
        env: "soco",
        envName: "Soco Live",
        build: "1",
        scoreName: "Điểm",
        debug: "0",
        cdn: "//sta.vnres.co/web",
        footerUrl: "socolive",
        roomDomain: "",
        indexDomain: "",
        showDownload: "1",
        downloadBlackDomains: "",
        downloadWhiteDomains: "",
        showComment: "1",
        imApiUrl: "/imApi",
        imAppKey: "20210528001",
        imAppSecret: "hHNT1wQnnKXgzcV7",
        language: "vi",
        remeberKey: "t6cLQ9x9IoWdFYXM",
        showGreenMatch: "0",
        greenDomains: "".split(","),
        showPrivateChat: "1",
        WS_CODE: {
            HEART: 1e3,
            HEART_SUCCESS: 2e3,
            LOGIN: 1001,
            LOGIN_SUCCESS: 2001,
            LOGOUT: 1002,
            LOGOUT_SUCCESS: 2002,
            ROOM_ENTER: 1003,
            ROOM_ENTER_SUCCESS: 2003,
            ROOM_LEAVE: 1004,
            ROOM_LEAVE_SUCCESS: 2004,
            COMMENT: 1005,
            COMMENT_SUCCESS: 2005,
            COMMENT_DELETE: 1006,
            COMMENT_DELETE_SUCCESS: 2006,
            COMMENT_PUSH: 3e3,
            COMMENT_PUSH_DELETE: 3001,
            SYS_PUSH: 3002,
            SCORE_GROW_PUSH: 3003,
            SUBSCRIBE_MATCH_PUSH: 3004,
            VIEW_NUM_PUSH: 3005,
            OFFLINE_PUSH: 3006,
            SUBSCRIBE_MATCH_LIST_PUSH: 3007,
            FEEDBACK_PUSH: 3008,
            MSG_PUSH: 3009,
            CHAT_PUSH: 1007,
            CHAT_PUSH_SUCCESS: 2007,
            CHAT_RECEIVE: 3010,
            CHAT_RECEIVE_NUM: 3011,
            ERROR: 9999
        }
    };
    e.default = o
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "storeData", (function() {
        return u
    }
    ));
    var o = n(0)
      , r = n(59)
      , a = n(8)
      , i = n(3)
      , s = n(2)
      , c = !0
      , u = new r.default({
        data: {
            sessionId: i.default.localVal("sessionId"),
            userInfo: i.default.localVal("userInfo"),
            isUser: i.default.localVal("isUser"),
            urls: i.default.localVal("urls"),
            dp: null,
            noticSwiper: null,
            newMsg: Number(i.default.sessionVal("newMsg", 0)),
            feedbackMsg: Number(i.default.sessionVal("feedbackMsg", 0)),
            privateMsg: Number(i.default.sessionVal("privateMsg", 0)),
            viewNum: 0,
            sysNoticeList: i.default.sessionVal("sysNoticeList", []),
            subscribeList: i.default.sessionVal("subscribeList", []),
            addSubscribe: null,
            subscribeToast: null,
            concernList: i.default.sessionVal("concernList", null),
            commentList: null,
            commentUserList: {},
            delMsgId: null,
            barrageItem: null,
            roomNum: null,
            room: null,
            anchorId: null,
            loginWindow: i.default.sessionVal("loginWindow"),
            shieldGift: !1,
            shieldWc: !1,
            indexLoad: null,
            levelUpShow: !1,
            growScoreUp: null,
            friend: null,
            privateQueue: [],
            remeberLogin: i.default.localVal("remeberLogin"),
            wsLastestComment: null,
            generalEngine: null
        },
        watch: {
            levelUpShow: function(t, e) {
                if (t) {
                    var n = $(".level-mode");
                    n.length > 0 && (n.show(),
                    setTimeout((function() {
                        n.fadeOut(150),
                        u.levelUpShow = !1
                    }
                    ), 3e3))
                }
            },
            sessionId: function(t, e) {
                window.localStorage.setItem("sessionId", t)
            },
            userInfo: function(t, e) {
                window.localStorage.setItem("userInfo", JSON.stringify(t)),
                $(".header-wrapper .had-login .avatar-submenu .nickname").text(t.nickName)
            },
            isUser: function(t, e) {
                window.localStorage.setItem("isUser", JSON.stringify(t)),
                1 != t && ($(".header-wrapper").find(".had-login").hide(),
                $(".header-wrapper").find(".no-login").show())
            },
            sysNoticeList: function(t, e) {
                if (window.sessionStorage.setItem("sysNoticeList", JSON.stringify(t)),
                t && 0 != t.length) {
                    var n = t[0]
                      , r = '\n        <div class="card float-clear">\n        <img src="'.concat(n.sendUser.icon || o.default.cdn + "/assets/".concat(o.default.env, "/img/notice2.png"), '">\n        <div class="card-box">\n          <div class="card-top float-clear">\n            <span class="card-title">').concat(n.sendUser.nickName, '</span>\n            <span class="card-time">').concat(a.default.sysNoticeTime2(n.sendTime), '</span>\n          </div>\n          <div class="card-bottom breakword">\n            ').concat(n.content, "\n          </div>\n        </div>\n      </div>\n        ");
                    $(".my-message-content").find(".content").prepend(r),
                    $(".my-message-content").find(".none").hide()
                }
            },
            newMsg: function(t, e) {
                0 != t ? ($(".avatar-submenu .bottom-btn.msg .msg-num").show(),
                $(".my-menu-wrapper .item.msg .msg-num").show(),
                $(".header-avatar .newMsg").show()) : l(),
                window.sessionStorage.setItem("newMsg", JSON.stringify(t))
            },
            feedbackMsg: function(t, e) {
                0 != t ? ($(".header-avatar .newMsg").show(),
                $(".avatar-submenu .bottom-btn.ucenter .msg-num").show(),
                $(".my-menu-wrapper .item.feedback .msg-num").show()) : l(),
                window.sessionStorage.setItem("feedbackMsg", JSON.stringify(t))
            },
            privateMsg: function(t, e) {
                0 != t ? ($(".header-avatar .newMsg").show(),
                $(".avatar-submenu .bottom-btn.ucenter .msg-num").show(),
                $(".my-menu-wrapper .item.private-chat .msg-num").show()) : l(),
                window.sessionStorage.setItem("privateMsg", JSON.stringify(t))
            },
            isShowScreenFooter: function(t, e) {
                window.sessionStorage.setItem("isShowScreenFooter", t)
            },
            addSubscribe: function(t, e) {
                var n = Object.assign([], u.subscribeList);
                if (n && n.length > 0) {
                    var o = (new Date).getTime - 72e5;
                    n = n.filter((function(e) {
                        return e.scheduleId != t.scheduleId && !(e.matchTime <= o) && void 0
                    }
                    ))
                }
                n.push(t),
                n.sort((function(t, e) {
                    return e.matchTime - t.matchTime
                }
                )),
                this.subscribeList = n
            },
            subscribeList: function(t, e) {
                window.sessionStorage.setItem("subscribeList", JSON.stringify(t));
                var n = $(".header-wrapper .subscribe-data")
                  , r = $(".header-wrapper .subscribe-none")
                  , a = n.find(".subscribe-data-box")
                  , s = ""
                  , c = "";
                t.forEach((function(t) {
                    c = "",
                    t.anchors.forEach((function(t) {
                        c += '<img class="avatar lazyload" src="'.concat(o.default.cdn, "/assets/").concat(o.default.env, '/img/avatar.png" data-src="').concat(t.cutOutIcon ? t.cutOutIcon : t.icon, '" data-src-backup="').concat(t.icon, '" data-roomNum="').concat(t.anchor.roomNum, '">')
                    }
                    )),
                    s += '<div class="subscribe-card">\n        <p class="ellipsis">['.concat(t.categoryName, "]").concat(t.hostName, "VS").concat(t.guestName, '</p>\n        <div class="avatar-list">\n        ').concat(c, "\n        </div>\n      </div>")
                }
                )),
                a.html(s),
                n.show(),
                r.hide(),
                i.default.loadImg("avatar")
            },
            subscribeToast: function(t, e) {
                window.sessionStorage.setItem("subscribeToast", JSON.stringify(t));
                var n = $(".header-wrapper").find(".subscribe-tip-submenu")
                  , r = '\n      <div class="submenu-box float-clear">\n        <img class="notice" src="'.concat(o.default.cdn, "/assets/").concat(o.default.env, '/img/notice.png">\n        <span class="text ellipsis">').concat(t.content, '</span>\n        <img class="more" src="').concat(o.default.cdn, "/assets/").concat(o.default.env, '/img/more.png">\n      </div>\n      ');
                n.html(r),
                n.fadeIn(),
                setTimeout((function() {
                    n.fadeOut()
                }
                ), 5e3),
                n.on("click", ".submenu-box", (function() {
                    var t = u.subscribeToast;
                    if (t) {
                        if (1 == t.openType || 3 == t.openType)
                            return void window.open(t.redirectUrl);
                        if (2 == t.openType) {
                            var e = t.redirectUrl.split("?")[1].split("=");
                            return void ("scheduleId" === e[0] && (location.href = "/pages/my/subscribe.html?scheduleId=" + e[1]))
                        }
                    }
                }
                ))
            },
            concernList: function(t, e) {
                if (window.sessionStorage.setItem("concernList", JSON.stringify(t)),
                t && t.length > 0) {
                    var n = ""
                      , r = t
                      , a = (r = r.filter((function(t) {
                        return 1 == t.liveStatus
                    }
                    ))).length >= 4 ? 4 : r.length;
                    if (0 == a)
                        return $(".header-wrapper .concern-data").hide(),
                        void $(".header-wrapper .concern-none").show();
                    for (var s = 0; s < a; s++) {
                        var c = r[s];
                        n += '\n          <div class="concern-card" data-roomNum="'.concat(c.roomNum, '">\n            <img class="avatar lazyload" src="').concat(o.default.cdn, "/assets/").concat(o.default.env, '/img/avatar.png" data-src="').concat(c.anchor.cutOutIcon ? c.anchor.cutOutIcon : c.anchor.icon, '" data-src-backup="').concat(c.anchor.icon, '">\n            <div class="text">\n             <span class="nickname ellipsis">').concat(c.anchor.nickName, '</span><br>\n              <span class="detail ellipsis">').concat(c.detail || "", "</span>\n            </div>\n          </div>\n          ")
                    }
                    $(".header-wrapper .concern-data").find(".concern-data-box").append(n),
                    $(".header-wrapper .concern-data").show(),
                    $(".header-wrapper .concern-none").hide(),
                    i.default.loadImg("avatar", ".concern-card "),
                    $(".header-wrapper .concern-data").find(".concern-card").click((function() {
                        var t = $(this).attr("data-roomNum");
                        window.open(i.default.roomUrl(t))
                    }
                    )),
                    $(".header-wrapper .concern-data").find(".more").click((function() {
                        location.href = "/pages/my/concern.html"
                    }
                    ))
                } else
                    $(".header-wrapper .concern-data").hide(),
                    $(".header-wrapper .concern-none").show()
            },
            commentList: function(t, e) {
                if ((t = t[0]).roomNum == i.default.getRoomNum()) {
                    if (3 == t.msgType && 1 == t.content.noticeType) {
                        if (!c)
                            return;
                        c = !1
                    }
                    var n = $("#chat-list>div");
                    if (0 !== n.length) {
                        var r = u.anchorId
                          , l = '<div class="chat-item danmaku-item '.concat(3 == t.msgType ? "sys-msg" : "", " ").concat(2 == t.sendUser.userType && t.sendUid == r && 1 == t.msgType || t.sendUid !== u.userInfo.uid && 3 == t.msgType ? "active" : "", '" ').concat(t.msgId ? 'data-id="'.concat(t.msgId, '"') : "", " ").concat(t.flag ? 'data-flag="'.concat(t.flag, '"') : "", ">\n            ").concat(2 === t.msgType ? '\n              \x3c!-- 礼物图标 --\x3e\n                <img src="'.concat(o.default.cdn, "/assets/").concat(o.default.env, '/img/gift.png" alt class="gift vertical-middle" />\n              ') : "", "\n            ").concat(3 === t.msgType && 2 !== t.content.noticeType ? '\n              \x3c!-- 系统消息图标 --\x3e\n                <img src="'.concat(o.default.cdn, "/assets/").concat(o.default.env, '/img/system_message.png" class="system-img vertical-middle" />\n              ') : "", "\n            ").concat(3 == t.msgType && 2 == t.content.noticeType ? '\n              \x3c!-- 欢迎消息图标 --\x3e\n                <img src="'.concat(o.default.cdn, "/assets/").concat(o.default.env, '/img/hi.png" alt class="hi vertical-middle" />\n              ') : "", "\n            ").concat(2 == t.sendUser.userType && t.sendUser.uid == r ? '\n              \x3c!-- 主播--\x3e\n                <span class="zb vertical-middle">'.concat(s.default.anchor, "</span>") : 2 == t.sendUser.userType && t.sendUser.uid != r ? '\n              \x3c!-- 其他主播--\x3e\n                <span class="zb other-zb vertical-middle">'.concat(s.default.anchor, "</span>") : 3 == t.sendUser.userType ? '\n              \x3c!-- 超管--\x3e\n                <span class="zb house-manager vertical-middle">'.concat(s.default.admin, "</span>") : t.content.noticeType && 2 !== t.content.noticeType || 1 !== t.sendUser.userType ? "" : '\n              \x3c!-- 普通用户发送消息VIP图标 --\x3e\n                <img src="'.concat(o.default.cdn, "/assets/").concat(o.default.env, "/img/lv").concat(t.sendUser.growDto.id, '.png" class="v-class vertical-middle" />'), "\n            ").concat(3 == t.msgType && 2 !== t.content.noticeType ? '\n              \x3c!-- 系统消息名称 --\x3e\n              <span class="user-name w-bold vertical-middle">'.concat(t.sendUser.nickName, ": </span>") : 3 != t.msgType && (1 == t.sendUser.userType || 2 == t.sendUser.userType && t.sendUid != r) ? '\n                \x3c!-- 普通发送人名称 --\x3e\n                <span class="user-name forbidden-user vertical-middle" data-id=\''.concat(t.sendUid, "'>").concat(t.sendUser.nickName).concat(2 !== t.msgType ? ": " : "", "</span>") : 3 != t.msgType && (2 == t.sendUser.userType && t.sendUid == r || 3 == t.sendUser.userType) ? '\n                \x3c!-- 主播、房管 --\x3e\n                <span class="user-name w-bold vertical-middle">'.concat(t.sendUser.nickName, ": </span>") : "", "\n            ").concat(3 == t.msgType ? '\n                \x3c!-- 系统消息内容 --\x3e\n                <span class="vertical-middle" style="color: '.concat(3 === t.content.noticeType ? "#FF4739" : "#777", '">').concat(a.default.urlTag(t.content.content), "</span>") : 1 == t.msgType ? '\n                \x3c!-- 用户消息内容 --\x3e\n                <span class="user-content vertical-middle">'.concat(a.default.receiveComment(t.content), "</span>") : 2 == t.msgType ? '\n                \x3c!-- 礼物内容 --\x3e\n                <span class="gift-content vertical-middle">\n                  <span class="vertical-middle">'.concat(s.default.send_anchor, '</span>\n                  <span class="gift-name vertical-middle">').concat(t.content.giftName, " x1</span>\n                </span>") : "", "\n          </div>")
                          , d = $("#chat-list")
                          , p = !1;
                        if (n.height() > d.height() && (n.height() - (d.scrollTop() + d.height()) < 150 ? p = !0 : $(".newMsg-tips").fadeIn(50)),
                        n.append(l),
                        p && d.scrollTop(n.height()),
                        3 == u.userInfo.userType || 2 == u.userInfo.userType && u.userInfo.uid == u.anchorId) {
                            var h = u.commentUserList;
                            h[t.sendUid] = t.sendUser,
                            u.commentUserList = h
                        }
                        if (2 === t.msgType && !u.shieldGift) {
                            var f = 1e7 * Math.random();
                            $(".gift-effects-wrapper").append('\n          <div class="gift-effects-card" data-tag="'.concat(f, '">\n            <div class=\'gift-effects-text\'>\n              <div class="gift-effects-nickname ellipsis">').concat(t.sendUser.nickName, '</div>\n              <div class="gift-effects-message ellipsis">').concat(s.default.send_out, '</div>\n            </div>\n            <img class="gift-effects-img" src="').concat(t.content.icon, '">\n          </div>'));
                            var g = $('.gift-effects-card[data-tag="'.concat(f, '"]'));
                            setTimeout((function() {
                                g.css("transform", "translate(0%, 0%)")
                            }
                            ), 1),
                            setTimeout((function() {
                                g.css("transform", "translate(0%, -100%)"),
                                g.css("margin-bottom", "0"),
                                g.css("opacity", 0),
                                setTimeout((function() {
                                    g.remove()
                                }
                                ), 300)
                            }
                            ), 3e3)
                        }
                    }
                }
            },
            delMsgId: function(t, e) {
                $(".chat-item.danmaku-item[data-id=".concat(t, "]")).remove()
            },
            barrageItem: function(t, e) {
                u.generalEngine && (t = a.default.barrage(t),
                u.generalEngine.add({
                    text: t,
                    type: openBSE.GeneralType.rightToLeft,
                    style: {
                        speed: .15 + Math.random() / 90
                    }
                }))
            },
            roomNum: function(t, e) {},
            room: function(t, e) {
                debugger;
                $(".media .text-title").html(t.title),
                $(".media .head-img").attr("data-src", t.anchor.cutOutIcon ? t.anchor.cutOutIcon : t.anchor.icon).attr("data-src-backup", t.anchor.icon),
                $(".media .text-msg .nickName").html(t.anchor.nickName),
                $(".media .text-msg .room-num").html(s.default.room_num + ":" + t.roomNum),
                $(".media .text-msg .view-num").html(t.viewCount),
                i.default.loadImg("avatar");
                var n = "";
                t.notice && (n = (n = (n = (n = t.notice).replace(/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g, (function(t) {
                    return "<a href='" + t + "' target='_blank'>" + t + "</a>"
                }
                ))).replace(/(ss:\/\/)[a-zA-Z0-9]+/g, (function(t) {
                    return "<a href='" + t + "' target='_blank'>" + t + "</a>"
                }
                ))).replace(/\n|\r\n/g, (function(t) {
                    return "<br/>"
                }
                ))),
                $(".notice-text").html(n)
            },
            viewNum: function(t, e) {
                $(".liveRoom-wrapper .text-msg .view-num").length > 0 && t.roomNum == i.default.getRoomNum() && $(".liveRoom-wrapper .text-msg .view-num").text(t.viewNum)
            },
            loginWindow: function(t, e) {
                window.sessionStorage.setItem("loginWindow", JSON.stringify(t))
            },
            indexLoad: function(t, e) {
                1 == t && $(".room-list li").eq(0).click()
            },
            growScoreUp: function(t, e) {
                var n = $(".grow-score-up-submenu")
                  , r = ""
                  , a = !1;
                n.find(".grow-score-tip").text(t.content),
                t.grow > 0 && (r += "".concat(s.default.experience, "+").concat(t.grow),
                a = !0),
                t.score && t.score > 0 && (a && (r += "，"),
                r += "".concat(o.default.scoreName, "+").concat(t.score)),
                n.find(".value").text(r),
                n.fadeIn(),
                setTimeout((function() {
                    n.fadeOut()
                }
                ), 5e3)
            },
            friend: function(t, e) {
                $(".private-chat-btn").show()
            },
            remeberLogin: function(t, e) {
                window.localStorage.setItem("remeberLogin", JSON.stringify(t))
            }
        }
    });
    function l() {
        u.feedbackMsg <= 0 && u.newMsg <= 0 && u.privateMsg <= 0 && $(".header-avatar .newMsg").hide(),
        u.feedbackMsg <= 0 && u.privateMsg <= 0 && $(".avatar-submenu .bottom-btn.ucenter .msg-num").hide(),
        u.newMsg <= 0 && ($(".avatar-submenu .bottom-btn.msg .msg-num").hide(),
        $(".my-menu-wrapper .item.msg .msg-num").hide()),
        u.feedbackMsg <= 0 && $(".my-menu-wrapper .item.feedback .msg-num").hide(),
        u.privateMsg <= 0 && $(".my-menu-wrapper .item.private-chat .msg-num").hide()
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    e.default = {
        "@metadata": {
            locale: "越南语",
            language: "vi",
            plat: "web",
            "last-updated": "2021.11.05 18:00"
        },
        country_code: "+84",
        language: "vi",
        html_lang: "vi",
        score: "điểm",
        score2: "Điểm",
        header_index: "Trang chủ",
        header_live: "Trực tiếp",
        header_match: "Lịch trực tiếp",
        header_news: "Tin tức Sự kiện",
        download_app: "Tải APP",
        download_app_projection: "Tải APP có thể kết nối với tivi",
        download_scan: "Quét bằng trình duyệt điện thoại",
        download_marvellous: "Tiết mục đặc sắc quay trở lại ngay",
        download_code: "Quét mã tải",
        scan: "Quét mã",
        phone_view_live: "Đồng bộ điện thoại xem trực tiếp",
        live: "Trực tiếp",
        living: "Đang trực tiếp",
        account_register: "Đăng ký bằng tên",
        phone_register: "Đăng ký bằng SĐT",
        account_login: "Đăng nhập nhanh",
        phone_login: "Đăng nhập bằng SĐT",
        login: "Đăng nhập",
        logout_text: "Đăng xuất",
        register: "Đăng ký",
        logout_confirm: "Xác nhận",
        cancel: "Hủy",
        register_account: "Đăng ký",
        login_account: "Đăng nhập",
        input_account_tip: "Nhập tên đăng nhập",
        input_phone_tip: "Nhập số điện thoại",
        input_phone_error: "Định dạng sai số điện thoại(vd: 987654321)",
        input_pwd_tip: "Nhập mật khẩu",
        input_verify_tip: "Nhận và nhập mã xác minh",
        input_verify_btn: "Nhận mã xác minh",
        input_verify_resend: "Nhận lại",
        input_verify_error: "Nhập 4 ký tự mã xác minh",
        input_nickname_tip: "Đặt biệt danh",
        input_nickname_error: "Nhập 2~15 ký tự đăng nhập",
        input_check_tip: "Nhập mã xác minh trong hình",
        input_check_error: "Nhập 5 ký tự mã xác minh",
        inconsistent_passwords: "Mật khẩu không đồng nhất",
        bind_success: "Liên kết thành công",
        login_agree: "Tôi đồng ý",
        user_service_agreement: "《Thỏa thuận dịch vụ người dùng》",
        forget_pwd: "Quên mật khẩu?",
        read_agreement: "Vui lòng đọc kỹ và đánh dấu vào thỏa thuận",
        read_and_agree: "Tôi đã đọc và đồng ý",
        subscribe: "Đặt lịch",
        already_subscribe: "Đã đặt trước",
        subscribe_none: "Danh sách lịch hẹn trống~",
        subscribe_success: "Đặt lịch thành công",
        subscribe_cancel: "Hủy lịch hẹn thành công",
        subscribe_none2: "Vẫn chưa có lịch hẹn~",
        follow: "Follow",
        already_follow: "Đã follow",
        follow_none: "Danh sách follow trống ~",
        follow_success: "Follow thành công",
        follow_cancel: "Hủy follow thành công",
        cancel_follow: "Hủy follow",
        see_more: "Xem thêm",
        follow_none2: "Vẫn chưa có follow~",
        live_none: "Chưa có trực tiếp",
        list_none: "Danh sách trống~",
        feedback: "Phản hồi",
        feedback_text: "Phản hồi ý kiến",
        feedback_type: "Kiểu phản hồi",
        suggest: "Nhận xét",
        error: "Báo lỗi",
        other: "Khác",
        feedback_placeholder: "Vui lòng mô tả chi tiết vấn đề bạn muốn phản hồi để chúng tôi có thể giải quyết cho bạn trong thời gian sớm nhất",
        nickname: "Biệt danh",
        anchor: "Bình luận viên",
        admin: "Admin",
        experience: "Kinh nghiệm",
        differ_from: "Còn kém",
        experience_next_level: "Kinh nghiệm lên cấp độ tiếp theo",
        enter_room: "Vào phòng live",
        hot_tag: "Nổ",
        official_tag: "Official",
        recommend_tag: "Đề xuất",
        fix_top: "Trở lại trang đầu",
        all_match: "Toàn bộ lịch trình",
        all: "Toàn bộ",
        today: "Hôm nay",
        tomorrow: "Ngày mai",
        yesterday: "Hôm qua",
        Monday: "Thứ hai",
        Tuesday: "Thứ ba",
        Wednesday: "Thứ tư",
        Thursday: "Thứ năm",
        Friday: "Thứ sáu",
        Saturday: "Thứ bảy",
        Sunday: "Chủ nhật",
        hour: "Giờ",
        day2: "Ngày",
        year: "Năm",
        month: "Tháng",
        day: "Ngày",
        just: "Vừa mới",
        minute_ago: "Vài phút trước",
        hour_ago: "Một giờ trước",
        room_num: "Số phòng",
        report: "Báo cáo",
        report_success: "Báo cáo thành công",
        already_report: "Đã báo cáo",
        my: "Của tôi",
        how_to_get_score: "Hướng dẫn nhận điểm",
        not_enough_send: "Điểm không đủ, chưa thể tặng quà",
        i_got_it: "Tôi đã rõ",
        login_get_score: "Đăng nhập để nhận điểm",
        everyday_get_score: "Đăng nhập mỗi ngày để nhận điểm. Số ngày đăng nhập càng nhiều, điểm càng nhiều.",
        growing: "càng nhiều",
        view_live_get_score: "Xem BLV/MC live để nhận điểm",
        view_ten_minutes_five_points: "10 phút xem live, nhận về 5 điểm",
        notice: "Thông báo",
        chat_room: "Phòng trò chuyện",
        ranking_list: "Bảng xếp hạng",
        room_ban_to: "Tắt tiếng phòng live này đến",
        room_ban: "Tắt tiếng phòng live",
        all_ban: "Tắt tiếng toàn bộ",
        remove_ban: "Hủy tắt tiếng",
        forever: "Vĩnh viễn",
        ban: "Tắt tiếng",
        ban_to: "Tắt tiếng đến khi",
        ban_success: "Tắt tiếng thành công",
        ban_cancel: "Hủy tắt tiếng thành công",
        put_user_whole: "Người dùng này trong toàn bộ trang",
        put_user_room: "Người dùng này trong phòng live ",
        right: "Đúng không ？",
        the_room: "Phòng live này",
        whole_site: "Toàn trang",
        room: "Phòng live",
        confirm: "Xác nhận",
        delete: "Xóa",
        bottom_has_news: "Tin nhắn ở dưới cùng",
        no_one_send: "Chưa có ai đóng góp cho bình luận viên nữa！！",
        private_chat: "Trò chuyện riêng",
        shield_all: "Chặn tất cả",
        shield_gift: "Chặn hình quà tặng",
        shield_welcome: "Chặn lời chào",
        before_can_send: "để cùng chat nhé~~",
        enter_funny_danmaku: "Cùng comment vui vẻ nhé ~~",
        send_danmaku_tip: "gửi comment (nhiều nhất 60 ký tự)",
        before_can_speak: "Gửi lại sau nhé ~",
        send: "Gửi",
        give: "Tặng",
        anchor_date: "Lịch trình bình luận viên",
        video_recommend: "Đề xuất video",
        anchor_course: "Tài liệu hướng dẫn BLV mới",
        common_problem: "Vấn đề thường gặp khi live",
        user_agreement_explain: "Mô tả thỏa thuận người dùng",
        contribution: "Đóng góp",
        chat_content_null: "Nội dung tin nhắn không thể trống",
        message_synchronization: "Tin nhắn đang đồng bộ",
        sync_latest_message: "Đồng bộ tin nhắn mới nhất",
        assistant: "Trợ lý",
        service_help: "Hân hạnh phục vụ，chúng tôi có thể giúp gì cho bạn",
        my_center: "Trung tâm",
        my_follow: "Theo dõi",
        my_subscribe: "Lịch hẹn",
        my_message: "Tin nhắn",
        anchor_center: "Trung tâm BLV",
        change_data: "Sửa tư liệu",
        upload_avatar: "Tải ảnh đại diện",
        level: "Cấp độ",
        account_management: "Quản lý tài khoản",
        my_phone: "Điện thoại của tôi",
        already_bind_phone: "Đã liên kết số điện thoại",
        no_bind_phone: "Không có số điện thoại di động bị ràng buộc",
        change_phone: "Thay đổi số điện thoại",
        my_password: "Mật khẩu của tôi",
        already_set_password: "Đã cài đặt mật khẩu",
        change_password: "Đổi mật khẩu",
        my_detail: "Tư liệu của tôi",
        sex: "Giới tính",
        secrecy: "Khác",
        male: "Nam",
        female: "Nữ",
        birth_date: "Ngày tháng năm sinh",
        save_changes: "Lưu thay đổi",
        my_private_chat: "Tin nhắn của tôi",
        data_none: "Tạm thời chưa có thông tin~",
        my_feedback: "Phản hồi của tôi",
        go_feedback: "Gửi phản hồi",
        feedback_none: "Tạm thời chưa có phản hồi~",
        handle_situation: "Tình trạng xử lý",
        feedback_content: "Nội dung phản hồi",
        feedback_img: "Hình ảnh phản hồi",
        contact_method: "Phương thức liên hệ",
        contact_plat_eg: "Zalo / Facebook / Email",
        create_time: "Thời gian tạo",
        handle_result: "Kết quả xử lý",
        modify_password: "Sửa mật khẩu",
        verify_id: "Xác minh danh tính",
        modify_new_password: "Sửa mật khẩu mới",
        next_step: "Bước tiếp theo",
        enter_password_again: "Vui lòng nhập lại mật khẩu",
        finish: "Hoàn thành",
        change_binding_phone: "Liên kết số điện thoại",
        change_binding_new_phone: "Sửa liên kết số điện thoại",
        bind_phone: "Trói điện thoại",
        bind: "Liên kết",
        bind_phone_tip: "Vui lòng liên kết điện thoại của bạn trước",
        my_match: "Lịch trực tiếp của tôi",
        close_list: "Thu lại danh sách",
        key_data: "Dữ liệu quan trọng",
        current_views: "Lượt xem hiện tại",
        today_flow_number: "Lưu lượng số lần hôm nay",
        today_flow_people: "Lưu lượng số người hôm nay",
        today_contribution: "Đóng góp hôm nay",
        all_contribution: "Tổng đóng góp",
        fans_number: "Số lượng fan",
        today_add: "Tăng thêm hôm nay",
        add_in_7_days: "Tăng thêm 7 ngày nay",
        desc: "Giới thiệu",
        stream_address: "Địa chỉ luồng",
        reset_stream_address: "Đặt lại địa chỉ luồng",
        copy: "Copy",
        copy_success: "Copy Thành công",
        stream_name: "Tên luồng",
        basic_detail: "Tư liệu cơ bản",
        room_name: "Tên phòng live",
        limit_60: "Giới hạn trong 60 từ",
        limit_100: "Giới hạn trong 100 từ",
        limit_250: "Giới hạn trong 250 từ",
        classification: "Phân loại",
        select_parent_type: "Vui lòng chọn danh mục chính",
        select_child_type: "Vui lòng chọn danh mục con",
        room_cover: "Ảnh bìa phòng live",
        yes: "Có",
        no: "Không",
        not_support_websocket: "Trình duyệt của bạn không hỗ trợ websocket, vui lòng sử dụng trình duyệt khác để duyệt trang",
        reconnect_tip: "Đang kết nối ... vui lòng đợi!",
        send_anchor: "Tặng cho BLV",
        send_out: "Gửi đi",
        select_img_tip: "Vui lòng chọn tệp hình ảnh！",
        img_limit_2mb: "Kích thước hình ảnh tải lên không được vượt quá 2MB！",
        upload_error: "Lỗi tải lên",
        change_avatar_success: "Thay đổi hình đại diện thành công",
        change_avatar_error: "Lỗi thay đổi hình đại diện",
        feedback_limit_6: "Nội dung phản hồi không được dưới 6 ký tự",
        feedback_success: "Chúng tôi đã nhận được phản hồi của bạn, cảm ơn bạn",
        untreated: "Chưa xử lý",
        treated: "Đã xử lý",
        nickname_limit_2: "Biệt hiệu không được ít hơn hai ký tự",
        change_success: "Đã sửa thành công",
        line: "đường line",
        recommend_line: "Đường line đề xuất",
        room_name_tip: "Vui lòng điền tên phòng live",
        anchor_desc_tip: "Vui lòng nhập thông tin BLV",
        anchor_notice_tip: "Vui lòng nhập thông báo từ BLV",
        select_type_tip: "Vui lòng chọn danh mục",
        success: "Thành công",
        message_from: "Tin nhắn từ",
        t_room: "phòng live",
        comment_limit: "Tin nhắn trò chuyện không thể lớn hơn 120 từ",
        SD: "SD",
        HD: "HD",
        load_error_refresh: "Tải không thành công, hãy thử làm mới",
        refresh: "Làm mới",
        loading: "Đang tải",
        drag_video_tip: "Nhấn và giữ video để kéo",
        anchor_not_at_home: "BLV hiện tại không có mặt~Đợi một chút quay lại nhé~",
        sensitive_content_tip: "Vui lòng không đăng nội dung nhạy cảm và tài khoản sẽ bị chặn nếu vi phạm nhiều lần!",
        my_index: "Trang chủ của tôi",
        live_settings: "Cài đặt phát trực tiếp",
        live_data: "Dữ liệu trực tiếp",
        submit: "Gửi đi",
        set_password_success: "Bạn đã cài đặt mật khẩu thành công",
        go_login: "đi Đăng nhập ",
        convenient_contact: "để nhân viên của chính tôi có thể liên hệ bạn trong thời gian sớm nhất",
        support_upload_tip: "chỉ hỗ trợ tải file định dạng .png.jpg.gif ",
        my_score: "Điểm của tôi",
        fans_contribution: "Đóng góp của fan",
        apply_anchor: "Ứng tuyển BLV",
        anchor_desc: "Giới thiệu của BLV",
        anchor_notice: "Thông báo của BLV",
        none_tip: "Nội dung trên không thể rỗng",
        confirm_tip: "Bạn có chắc không?",
        full_time_job: "Toàn thời gian",
        part_time_job: "Bán thời gian",
        apply_pass: "Phê duyệt thông qua",
        apply_fail: "Phê duyệt không thông qua",
        apply_wait: "Chờ phê duyệt",
        remember_login: "Ghi nhớ đăng nhập",
        live_status: "Trạng thái trực tiếp",
        news: "Tin tức",
        activity: "Sự kiện",
        rank: "BXH",
        hot_news: "TIN HOT",
        or: "Hoặc",
        recommend_for_you: "Đề Xuất Cho Bạn",
        the_football_highlights: "HIGHLIGHTS BÓNG ĐÁ MỚI NHẤT HÔM NAY",
        comment_repeat_tip: "Vui lòng không Spam để trải nghiệm tốt hơn",
        meta_description: "Trang cung cấp dịch vụ trực tiếp các sự kiện thể thao như bóng đá, NBA, Esport, lịch trình thi đấu và tỉ số trực tiếp; cập nhật tín hiệu trực tiếp liên tục trong 24 giờ, không cần đi đến tận nơi bạn vẫn có thể xem trực tiếp Premier League / La Liga / Bundesliga / Serie A / Ligue 1 / Primeira Liga / Eredivisie / EFL Championship  / UEFA Champions League / AFC Champions / UEFA Europa League / Chinese Super League ！",
        meta_keywords: "trực tiếp bóng đá , trực tiếp nba, trực tiếp jrs,trực tiếp,trực tiếp thể thao, cùng xem trực tiếp nào"
    },
    console.log()
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(0)
      , r = n(22)
      , a = n.n(r)
      , i = n(21)
      , s = n.n(i);
    function c(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = function(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return u(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                }
            }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var o = 0
                  , r = function() {};
                return {
                    s: r,
                    n: function() {
                        return o >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[o++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0, s = !1;
        return {
            s: function() {
                n = n.call(t)
            },
            n: function() {
                var t = n.next();
                return i = t.done,
                t
            },
            e: function(t) {
                s = !0,
                a = t
            },
            f: function() {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s)
                        throw a
                }
            }
        }
    }
    function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++)
            o[n] = t[n];
        return o
    }
    n(14),
    n(16),
    e.default = {
        getUrlParam: function(t) {
            for (var e = window.location.search.substring(1).split("&"), n = 0; n < e.length; n++) {
                var o = e[n].split("=");
                if (o[0] == t)
                    return o[1]
            }
            return !1
        },
        md5Pwd: function(t, e) {
            return e && 2 == e ? a()(t) : a()(a()(t.toLowerCase()) + o.default.SECRET_KEY)
        },
        scrollTop: function(t, e) {
            t.scrollTop(t.scrollTop() + e.offset().top - t.offset().top)
        },
        stopBubble: function(t) {
            t && t.stopPropagation ? t.stopPropagation() : window.event.cancelBubble = !0
        },
        base64toFile: function(t) {
            for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "file", n = t.split(","), o = n[0].match(/:(.*?);/)[1], r = o.split("/")[1], a = atob(n[1]), i = a.length, s = new Uint8Array(i); i--; )
                s[i] = a.charCodeAt(i);
            return new File([s],"".concat(e, ".").concat(r),{
                type: o
            })
        },
        fileToBase64: function(t) {
            return (window.URL || window.webkitURL).createObjectURL(t)
        },
        closePageListener: function(t) {
            var e = !1;
            function n() {
                e || (e = !0,
                t())
            }
            window.onbeforeunload = function() {
                n()
            }
            ,
            window.onunload = function() {
                n()
            }
        },
        getStyle: function(t, e) {
            return window.getComputedStyle ? window.getComputedStyle(t, e || null) : t.currentStyle
        },
        copyToClip: function(t) {
            var e = navigator.userAgent.toLowerCase()
              , n = "ipad" == e.match(/ipad/i)
              , o = "iphone os" == e.match(/iphone os/i)
              , r = "midp" == e.match(/midp/i)
              , a = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i)
              , i = "ucweb" == e.match(/ucweb/i)
              , s = "android" == e.match(/android/i)
              , c = "windows ce" == e.match(/windows ce/i)
              , u = "windows mobile" == e.match(/windows mobile/i)
              , l = document.createElement("input");
            if (l.setAttribute("value", t),
            document.body.appendChild(l),
            n || o || r || a || i || s || c || u) {
                var d = document.createRange();
                d.selectNode(l);
                var p = window.getSelection();
                p.rangeCount > 0 && p.removeAllRanges(),
                p.addRange(d),
                document.execCommand("copy"),
                document.body.removeChild(l),
                p.removeAllRanges()
            } else
                l.select(),
                document.execCommand("copy"),
                document.body.removeChild(l)
        },
        loadImg: function(t, e) {
            e || (e = "");
            var n = ""
              , r = "";
            switch (t) {
            case "avatar":
                n = "".concat(o.default.cdn, "/assets/").concat(o.default.env, "/img/avatar.png"),
                r = ".avatar";
                break;
            case "live":
            default:
                n = "".concat(o.default.cdn, "/assets/").concat(o.default.env, "/img/live-cover.png"),
                r = ".live-cover";
                break;
            case "banner":
                n = "".concat(o.default.cdn, "/assets/").concat(o.default.env, "/img/banner-cover.png"),
                r = ".banner-cover";
                break;
            case "match":
                n = "".concat(o.default.cdn, "/assets/").concat(o.default.env, "/img/match-cover.png"),
                r = ".match-cover"
            }
            $("".concat(e).concat(r, ".lazyload")).one("error", (function() {
                $(this).attr("data-src-backup") ? ($(this).attr("src", $(this).attr("data-src-backup")),
                $(this).one("error", (function() {
                    $(this).attr("src", n)
                }
                ))) : $(this).attr("src", n)
            }
            )),
            $("".concat(e).concat(r, ".lazyload")).lazyload().removeClass("lazyload")
        },
        getRoomNum: function() {
            for (var t = "", e = location.pathname.split("/"), n = 0; n < e.length; n++)
                if ("room" == e[n] && e[n + 1]) {
                    t = e[n + 1];
                    break
                }
            return t || (t = this.getUrlParam("roomNum")),
            t
        },
        roomUrl: function(t, e) {
            debugger;
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
            var h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , n = "2" == o.default.debug ? "/pages/liveRoom.html?roomNum=".concat(t, "&scheduleId=").concat(e) : "/luke/truc-tiep/".concat("vn-vs-thai-lan/","?roomID=").concat(t, "?scheduleId=").concat(e);
            return o.default.roomDomain ? o.default.roomDomain + n : n
        },
        uuid: function(t, e) {
            var n, o, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), a = [];
            if (e = e || r.length,
            t)
                for (n = 0; n < t; n++)
                    a[n] = r[0 | Math.random() * e];
            else
                for (a[8] = a[13] = a[18] = a[23] = "-",
                a[14] = "4",
                n = 0; n < 36; n++)
                    a[n] || (o = 0 | 16 * Math.random(),
                    a[n] = r[19 == n ? 3 & o | 8 : o]);
            return a.join("")
        },
        localVal: function(t, e) {
            return this.val("local", t, e)
        },
        sessionVal: function(t, e) {
            return this.val("session", t, e)
        },
        val: function(t, e, n) {
            var o = "";
            switch (t) {
            case "local":
                o = window.localStorage.getItem(e);
                break;
            case "session":
                o = window.sessionStorage.getItem(e)
            }
            if (!o)
                return n || null;
            try {
                return JSON.parse(o)
            } catch (t) {
                return o
            }
        },
        groupBy: function(t, e) {
            var n = {};
            return t.forEach((function(t) {
                var o = JSON.stringify(e(t));
                n[o] = n[o] || [],
                n[o].push(t)
            }
            )),
            n
        },
        debounce: function(t, e) {
            var n = null;
            return function() {
                var o = this
                  , r = arguments;
                clearTimeout(n),
                n = setTimeout((function() {
                    t.apply(o, r)
                }
                ), e)
            }
        },
        aesCbcEncrypt: function(t, e) {
            var n = s.a.enc.Base64.parse(e)
              , o = n.clone();
            o.sigBytes = 16,
            o.words.splice(4);
            var r = s.a.enc.Utf8.parse(t);
            return s.a.AES.encrypt(r, n, {
                iv: o,
                mode: s.a.mode.CBC,
                padding: s.a.pad.Pkcs7
            }).toString()
        },
        aesCbcDecrypt: function(t, e) {
            var n = s.a.enc.Base64.parse(e)
              , o = n.clone();
            o.sigBytes = 16,
            o.words.splice(4);
            var r = s.a.AES.decrypt(t, n, {
                iv: o,
                mode: s.a.mode.CBC,
                padding: s.a.pad.Pkcs7
            });
            return s.a.enc.Utf8.stringify(r)
        },
        isSpecialCode: function(t) {
            for (var e = 0, n = ["+84"]; e < n.length; e++) {
                var o = n[e];
                if (o === t || o + o === t)
                    return !0
            }
            return !1
        },
        handleSpecialCode: function(t) {
            t || (t = "");
            var e = this;
            $("".concat(t, " .country-code-box .country-code")).bind("DOMNodeInserted", (function() {
                e.isSpecialCode($(this).text()) ? ($(this).closest(".input-container").find(".verify-box").hide(),
                $(this).closest(".input-container").find(".verify-box .input-verify").val("8888")) : ($(this).closest(".input-container").find(".verify-box .input-verify").val(""),
                $(this).closest(".input-container").find(".verify-box").show())
            }
            ))
        },
        handleSpecialCodeByPhone: function(t) {
            t || (t = "");
            var e = this;
            $("".concat(t, " .country-code-box .country-code")).bind("DOMNodeInserted", (function() {
                e.isSpecialCode($(this).text()) ? ($(this).closest(".input-container").find(".verify-box").hide(),
                $(this).closest(".input-container").find(".verify-box .input-verify").val("8888")) : ($(this).closest(".input-container").find(".verify-box .input-verify").val(""),
                $(this).closest(".phone-box").find(".input-phone").val() && $(this).closest(".input-container").find(".verify-box").show())
            }
            ))
        },
        newsDetailUrl: function(t, e) {
            return "2" == o.default.debug ? "/pages/newsDetail.html?id=" + t : "/news/" + e + ".html"
        },
        hostIncludes: function(t) {
            if (t && t.length > 0) {
                var e, n = c(t);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var o = e.value;
                        if ("" != o && location.host.includes(o))
                            return !0
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
            }
            return !1
        },
        showDownload: function(t) {
            var e = o.default.downloadBlackDomains.split(",")
              , n = o.default.downloadWhiteDomains.split(",");
            if ("1" === o.default.showDownload) {
                var r, a = !0, i = c(e);
                try {
                    for (i.s(); !(r = i.n()).done; ) {
                        var s = r.value;
                        if (location.hostname === s || location.hostname === "www." + s) {
                            a = !1;
                            break
                        }
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
                a && t()
            } else {
                var u, l = c(n);
                try {
                    for (l.s(); !(u = l.n()).done; ) {
                        var d = u.value;
                        location.hostname !== d && location.hostname !== "www." + d || t()
                    }
                } catch (t) {
                    l.e(t)
                } finally {
                    l.f()
                }
            }
        },
        loadScript: function(t, e) {
            var n = document.createElement("script");
            for (var o in t)
                n[o] = t[o];
            n.addEventListener ? n.addEventListener("load", (function() {
                e()
            }
            ), !1) : n.attachEvent && n.attachEvent("onreadystatechange", (function() {
                "loaded" == window.event.srcElement.readyState && e()
            }
            )),
            document.body.appendChild(n)
        }
    }
}
, , , function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(10)
      , r = n.n(o)
      , a = n(5)
      , i = n.n(a)
      , s = n(12)
      , c = n(1)
      , u = n(0)
      , l = n(23)
      , d = n(3);
    function p(t, e, n, o) {
        var a = window.location.origin;
        if (u.default.roomDomain && a != u.default.roomDomain && "0" == u.default.debug) {
            var s = {};
            s.isUser = o,
            s.sessionId = t,
            s.userInfo = e,
            s.urls = n,
            s.domain = a,
            $(document.body).append('<iframe id="corsIframe" src="'.concat(u.default.roomDomain, "/cors.html?v=").concat((new Date).getTime(), '" style="display:none;"></iframe>'));
            var c = document.getElementById("corsIframe");
            c.onload = r()(i.a.mark((function t() {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            c.contentWindow.postMessage(JSON.stringify(s), "".concat(u.default.roomDomain));
                        case 2:
                            window.location.reload();
                        case 3:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))
        } else
            window.location.reload()
    }
    e.default = {
        visitorLogin: function(t) {
           
            return s.default.post("/login/guestLogin", t)
        },
        userRegister: function(t) {
            return s.default.post("/login/reg", t)
        },
        getSmsCode: function(t) {
            return s.default.post("/sys/getSmsCode", t)
        },
        checkSmsCode: function(t) {
            return s.default.post("/sys/checkSmsCode", t)
        },
        userLogin: function(t) {
            return s.default.post("/login/login", t)
        },
        forgetPwd: function(t) {
            return s.default.post("/login/forgetPassword", t)
        },
        userLogout: function(t) {
            return s.default.post("/login/logout", t)
        },
        userDetail: function(t) {
            return s.default.post("/user/detail", t)
        },
        userUpdatePhone: function(t) {
            return s.default.post("/user/updatePhone", t)
        },
        userBindPhone: function(t) {
            return s.default.post("/user/bindPhone", t)
        },
        userUpdatePwd: function(t) {
            return s.default.post("/user/updatePasswordFromSmsCode", t)
        },
        userUpdate: function(t) {
            return s.default.post("/user/updateUser", t)
        },
        userReport: function(t) {
            return s.default.post("/user/report", t)
        },
        userMsg: function(t) {
            return s.default.post("/user/msgList", t)
        },
        myApplyAnchor: function(t) {
            return s.default.post("/user/myApplyAnchor", t)
        },
        applyAnchor: function(t) {
            return s.default.post("/user/applyAnchor", t)
        },
        adList: function(t) {
            return s.default.post("/sys/AdvertisingList", t)
        },
        liveTypeList: function(t) {
            return s.default.post("/live/liveTypeList", t)
        },
        liveCateList: function(t) {
            return s.default.post("/live/cateList", t)
        },
        liveHotList: function(t) {
            return s.default.post("/live/hot", t)
        },
        hotAnchor: function(t) {
            return s.default.post("/live/hotAnchor", t, !0)
        },
        liveDetail: function(t) {
            return s.default.post("/live/detail", t)
        },
        liveRankList: function(t) {
            return s.default.post("/live/rankList", t)
        },
        liveAppointmentSchedule: function(t) {
            return s.default.post("/live/appointmentSchedule", t)
        },
        liveAttention: function(t) {
            return s.default.post("live/attention", t)
        },
        liveAttentionList: function(t) {
            return s.default.post("live/attentionList", t)
        },
        matchCateList: function(t) {
            return s.default.post("/match/cateList", t)
        },
        matchRecommend: function(t) {
            return s.default.post("/match/recommend", t)
        },
        matchReservation: function(t) {
            return s.default.post("/match/reservationMatch", t)
        },
        matchDetail: function(t) {
            return s.default.post("/match/detail", t)
        },
        matchReservationList: function(t) {
            return s.default.post("/match/reservationList", t)
        },
        sysFeedback: function(t) {
            return s.default.post("/sys/feedback", t)
        },
        sysFeedbackList: function(t) {
            return s.default.post("/sys/feedbackList", t)
        },
        giftList: function(t) {
            return s.default.post("/gift/giftList", t)
        },
        sendGift: function(t) {
            return s.default.post("/gift/sendGift", t)
        },
        anchorLiveSet: function(t) {
            return s.default.post("/anchor/liveSet", t)
        },
        anchorLiveRoute: function(t) {
            return s.default.post("/anchor/liveRoute", t)
        },
        anchorLiveData: function(t) {
            return s.default.post("/anchor/liveData", t)
        },
        liveForbidden: function(t) {
            return s.default.post("/live/forbidden", t)
        },
        liveForbiddenStatus: function(t) {
            return s.default.post("/live/forbiddenStatus", t)
        },
        friendChatMsg: function(t) {
            return s.default.post("/user/friendChatMsg", t)
        },
        chatFriendList: function(t) {
            return s.default.post("/user/chatFriendList", t)
        },
        initSdkUser: function(t) {
            return s.default.post("/user/initSdkUser", t, !0)
        },
        articleList: function(t) {
            return s.default.post("/article/articleList", t, !0)
        },
        articleDetail: function(t) {
            return s.default.post("/article/articleDetail", t, !0)
        },
        highlightsList: function(t) {
            return s.default.post("/highlight/list", t, !0)
        },
        highlightsDetail: function(t) {
            return s.default.post("/highlight/detail", t, !0)
        },
        handleVisitorLogin: function() {
            var t = this;
            return r()(i.a.mark((function e() {
                var n;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return console.log("游客登录"),
                            c.storeData.sessionId = "",
                            c.storeData.userInfo = "",
                            c.storeData.urls = "",
                            e.next = 6,
                            t.visitorLogin();
                        case 6:
                            n = e.sent,
                            c.storeData.sessionId = n.sessionId,
                            c.storeData.userInfo = n.userInfo,
                            c.storeData.isUser = 0,
                            c.storeData.sysNoticeList = [],
                            c.storeData.concernList = null,
                            l.default.send(u.default.WS_CODE.LOGIN, {
                                key: n.sessionId,
                                plat: 3,
                                version: 1
                            });
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))()
        },
        handleUserLogin: function(t, e) {
            var n = this;
            return r()(i.a.mark((function e() {
                var o;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return c.storeData.sessionId = "",
                            e.prev = 1,
                            e.next = 4,
                            n.userLogin(t);
                        case 4:
                            o = e.sent,
                            c.storeData.userInfo = "",
                            c.storeData.urls = "",
                            o.phone && o.countryCode ? (o.userInfo.phone = o.phone,
                            0 !== o.countryCode && (o.userInfo.countryCode = "+" + o.countryCode)) : t.phone && t.countryCode && (o.userInfo.phone = t.phone,
                            o.userInfo.countryCode = t.countryCode),
                            o.loginName && (o.userInfo.loginName = o.loginName),
                            c.storeData.isUser = 1,
                            c.storeData.sessionId = o.sessionId,
                            c.storeData.userInfo = o.userInfo,
                            c.storeData.urls = o.urls,
                            c.storeData.sysNoticeList = [],
                            c.storeData.concernList = null,
                            c.storeData.newMsg = 0,
                            p(c.storeData.sessionId, c.storeData.userInfo, c.storeData.urls, c.storeData.isUser),
                            e.next = 22;
                            break;
                        case 19:
                            return e.prev = 19,
                            e.t0 = e.catch(1),
                            e.abrupt("return", Promise.reject(e.t0));
                        case 22:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 19]])
            }
            )))()
        },
        handleUserRegister: function(t) {
            var e = this;
            return r()(i.a.mark((function n() {
                return i.a.wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return n.prev = 0,
                            n.next = 3,
                            e.userRegister(t).then((function(e) {
                                c.storeData.urls = "",
                                c.storeData.sessionId = "",
                                c.storeData.userInfo = "",
                                e.userInfo.phone = t.phone,
                                e.userInfo.countryCode = t.countryCode,
                                e.userInfo.loginName = t.loginName,
                                c.storeData.isUser = 1,
                                c.storeData.sessionId = e.sessionId,
                                c.storeData.userInfo = e.userInfo,
                                c.storeData.urls = e.urls,
                                c.storeData.sysNoticeList = [],
                                c.storeData.concernList = null,
                                c.storeData.newMsg = 0,
                                p(c.storeData.sessionId, c.storeData.userInfo, c.storeData.urls, c.storeData.isUser)
                            }
                            ));
                        case 3:
                            n.next = 8;
                            break;
                        case 5:
                            return n.prev = 5,
                            n.t0 = n.catch(0),
                            n.abrupt("return", Promise.reject(n.t0));
                        case 8:
                        case "end":
                            return n.stop()
                        }
                }
                ), n, null, [[0, 5]])
            }
            )))()
        },
        handleUserLogout: function(t) {
            var e = this;
            return r()(i.a.mark((function t() {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            e.userLogout();
                        case 2:
                            c.storeData.sessionId = "",
                            c.storeData.userInfo = "",
                            c.storeData.urls = "",
                            c.storeData.isUser = 0,
                            p(c.storeData.sessionId, c.storeData.userInfo, c.storeData.urls, c.storeData.isUser);
                        case 7:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))()
        },
        handleIsHadUserLogin: function() {
            return !(1 != c.storeData.isUser || !c.storeData.sessionId)
        },
        handleLoginJump: function(t) {
            return t ? (1 == c.storeData.isUser && this.handleGuestLogin(),
            this.handleShowLoginWindow(),
            !0) : !this.handleIsHadUserLogin() && (this.handleShowLoginWindow(),
            !0)
        },
        handleShowLoginWindow: function() {
            $(".header-wrapper .header-login").click(),
            (document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen) && (document.exitFullscreen() || document.mozCancelFullScreen() || document.webkitCancelFullScreen() || document.msExitFullscreen())
        },
        handleGuestLogin: function() {
            var t = (-(new Date).getTime()).toString() + parseInt(9e5 * Math.random() + 1e5, 10).toString()
              , e = {
                uid: t,
                nickName: d.default.uuid(6).toUpperCase(),
                grow: 0,
                score: 0
            }
              , n = Object.assign({}, e);
            c.storeData.userInfo = n,
            c.storeData.urls = "",
            c.storeData.sessionId = t,
            c.storeData.isUser = 0,
            c.storeData.sysNoticeList = [],
            c.storeData.concernList = null
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(46)
      , r = n.n(o)
      , a = n(47)
      , i = n.n(a)
      , s = new (function() {
        function t() {
            r()(this, t),
            this.db = null,
            this.tb_chat = "chat",
            this.tb_friends = "friends",
            this.version = 3
        }
        return i()(t, [{
            key: "protect",
            value: function() {
                var t = this;
                return new Promise((function(e, n) {
                    t.db ? e() : t.init().then((function() {
                        e()
                    }
                    ))
                }
                ))
            }
        }, {
            key: "init",
            value: function() {
                var t = this;
                return new Promise((function(e, n) {
                    var o = window.indexedDB.open("db", t.version)
                      , r = t;
                    o.onsuccess = function() {
                        r.db = o.result,
                        e()
                    }
                    ,
                    o.onupgradeneeded = function(t) {
                        r.db = t.target.result,
                        0 != t.oldVersion && t.oldVersion < r.version && (r.db.objectStoreNames.contains(r.tb_chat) && r.db.deleteObjectStore(r.tb_chat),
                        r.db.objectStoreNames.contains(r.tb_friends) && r.db.deleteObjectStore(r.tb_friends));
                        var e = null;
                        r.db.objectStoreNames.contains(r.tb_chat) || ((e = r.db.createObjectStore(r.tb_chat, {
                            keyPath: "flag"
                        })).createIndex("flag", "flag", {
                            unique: !0
                        }),
                        e.createIndex("sendUid", "sendUid", {
                            unique: !1
                        }),
                        e.createIndex("receiveUid", "receiveUid", {
                            unique: !1
                        }),
                        e.createIndex("sendTime", "sendTime", {
                            unique: !1
                        }),
                        e.createIndex("sendUid_receiveUid", ["sendUid", "receiveUid"], {
                            unique: !1
                        }),
                        e.createIndex("msgId", "msgId", {
                            unique: !0
                        }),
                        e.createIndex("fromOpenId", "fromOpenId", {
                            unique: !1
                        }),
                        e.createIndex("toOpenId", "toOpenId", {
                            unique: !1
                        }),
                        e.createIndex("msgType", "msgType", {
                            unique: !1
                        }),
                        e.createIndex("fromOpenId_toOpenId", ["fromOpenId", "toOpenId"], {
                            unique: !1
                        })),
                        r.db.objectStoreNames.contains(r.tb_friends) || ((e = r.db.createObjectStore(r.tb_friends, {
                            keyPath: "id",
                            autoIncrement: !0
                        })).createIndex("msgId", "msgId", {
                            unique: !1
                        }),
                        e.createIndex("a_openId", "a_openId", {
                            unique: !1
                        }),
                        e.createIndex("b_openId", "b_openId", {
                            unique: !1
                        }),
                        e.createIndex("aOpenId_bOpenId", ["a_openId", "b_openId"], {
                            unique: !1
                        }))
                    }
                    ,
                    o.onerror = function(t) {
                        n(t)
                    }
                }
                ))
            }
        }, {
            key: "add",
            value: function(t, e) {
                var n = this;
                return new Promise((function(o, r) {
                    n.protect().then((function() {
                        var a = n.db.transaction([t], "readwrite").objectStore(t).add(e);
                        a.onsuccess = function(t) {
                            o(t.target.result)
                        }
                        ,
                        a.onerror = function(t) {
                            r(t)
                        }
                    }
                    ))
                }
                ))
            }
        }, {
            key: "delete",
            value: function(t, e) {
                var n = this;
                return new Promise((function(o, r) {
                    n.protect().then((function() {
                        var a = n.db.transaction([t], "readwrite").objectStore(t).delete(e);
                        a.onsuccess = function(t) {
                            o(t)
                        }
                        ,
                        a.onerror = function(t) {
                            r(t)
                        }
                    }
                    ))
                }
                ))
            }
        }, {
            key: "deleteUpperBound",
            value: function(t, e, n, o) {
                var r = this;
                return new Promise((function(a, i) {
                    r.protect().then((function() {
                        var s = r.db.transaction([t], "readwrite").objectStore(t).index(e).openCursor(IDBKeyRange.upperBound(n, o));
                        s.onsuccess = function(t) {
                            var e = t.target.result;
                            e && (e.delete(),
                            e.continue()),
                            a()
                        }
                        ,
                        s.onerror = function(t) {
                            i(t)
                        }
                    }
                    ))
                }
                ))
            }
        }, {
            key: "update",
            value: function(t, e) {
                var n = this;
                return new Promise((function(o, r) {
                    n.protect().then((function() {
                        var a = n.db.transaction([t], "readwrite").objectStore(t).put(e);
                        a.onsuccess = function(t) {
                            o(t)
                        }
                        ,
                        a.onerror = function(t) {
                            r(t)
                        }
                    }
                    ))
                }
                ))
            }
        }, {
            key: "selectById",
            value: function(t, e) {
                var n = this;
                return new Promise((function(o, r) {
                    n.protect().then((function() {
                        var a = n.db.transaction([t]).objectStore(t).get(e);
                        a.onsuccess = function(t) {
                            a.result ? o(a.result) : o()
                        }
                        ,
                        a.onerror = function(t) {
                            r(t)
                        }
                    }
                    ))
                }
                ))
            }
        }, {
            key: "select",
            value: function(t, e, n, o) {
                var r = this;
                return new Promise((function(a, i) {
                    r.protect().then((function() {
                        var s = r.db.transaction([t]).objectStore(t).index(e);
                        "prev" == o ? (s = s.openCursor(IDBKeyRange.only(n), o)).onsuccess = function(t) {
                            var e = t.target.result;
                            a(e.value)
                        }
                        : (s = s.get(n)).onsuccess = function(t) {
                            s.result ? a(s.result) : a()
                        }
                        ,
                        s.onerror = function(t) {
                            i(t)
                        }
                    }
                    ))
                }
                ))
            }
        }, {
            key: "selectTop",
            value: function(t, e, n) {
                var o = this;
                return new Promise((function(r, a) {
                    o.protect().then((function() {
                        var i = o.db.transaction([t]).objectStore(t).index(e);
                        (i = i.openCursor(null, n)).onsuccess = function(t) {
                            var e = t.target.result;
                            e ? r(e.value) : r()
                        }
                        ,
                        i.onerror = function(t) {
                            a(t)
                        }
                    }
                    ))
                }
                ))
            }
        }, {
            key: "selectLowerBound",
            value: function(t, e, n, o) {
                var r = this;
                return new Promise((function(a, i) {
                    r.protect().then((function() {
                        var s = r.db.transaction([t], "readwrite").objectStore(t).index(e).openCursor(IDBKeyRange.lowerBound(n, o))
                          , c = [];
                        s.onsuccess = function(t) {
                            var e = t.target.result;
                            e && (c.push(e.value),
                            e.continue()),
                            a(c)
                        }
                        ,
                        s.onerror = function(t) {
                            i(t)
                        }
                    }
                    ))
                }
                ))
            }
        }, {
            key: "selectList",
            value: function(t, e, n, o) {
                var r = this;
                return new Promise((function(a, i) {
                    r.protect().then((function() {
                        var s = r.db.transaction([t]).objectStore(t).index(e)
                          , c = null;
                        c = o ? s.openCursor(IDBKeyRange.only(n), o) : s.openCursor(IDBKeyRange.only(n));
                        var u = [];
                        c.onsuccess = function(t) {
                            var e = t.target.result;
                            e ? (u.push(e.value),
                            e.continue()) : a(u)
                        }
                        ,
                        c.onerror = function(t) {
                            i(t)
                        }
                    }
                    ))
                }
                ))
            }
        }]),
        t
    }());
    s.init().then((function(t) {
        var e = (new Date).getTime() - 6048e5;
        s.deleteUpperBound(s.tb_chat, "sendTime", e, !0)
    }
    )),
    e.default = s
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(25)
      , r = n.n(o)
      , a = n(2)
      , i = n(0)
      , s = n(48)
      , c = n.n(s);
    e.default = {
        forbiddenTime: function(t) {
            var e = u(1e3 * t)
              , n = r()(e, 6)
              , o = n[0]
              , a = n[1]
              , i = n[2]
              , s = n[3]
              , c = n[4]
              , l = n[5];
            return "".concat(o, "-").concat(a, "-").concat(i, " ").concat(s, ":").concat(c, ":").concat(l)
        },
        mdTime: function(t) {
            if (t) {
                var e = u(t)
                  , n = r()(e, 6)
                  , o = (n[0],
                n[1])
                  , i = n[2];
                return n[3],
                n[4],
                n[5],
                "".concat(o).concat(a.default.month).concat(i).concat(a.default.day)
            }
        },
        hmTime: function(t) {
            if (t) {
                var e = u(t)
                  , n = r()(e, 6)
                  , o = (n[0],
                n[1],
                n[2],
                n[3])
                  , a = n[4];
                return n[5],
                "".concat(o, ":").concat(a)
            }
        },
        ymdhmsTime: function(t) {
            return l(new Date(t), "dd-MM-yyyy hh:mm:ss")
        },
        sysNoticeTime: function(t) {
            var e = u(t)
              , n = r()(e, 6)
              , o = n[0]
              , i = n[1]
              , s = n[2]
              , c = n[3]
              , l = n[4]
              , d = (n[5],
            u(new Date))
              , p = r()(d, 6)
              , h = p[0]
              , f = p[1]
              , g = p[2]
              , m = p[3]
              , v = p[4];
            return p[5],
            o === h && i === f && s === g ? c === m ? v == l ? a.default.just : v - l + a.default.minute_ago : m - c + a.default.hour_ago : "".concat(i, "-").concat(s, " ").concat(c, ":").concat(l)
        },
        sysNoticeTime2: function(t) {
            var e = u(t)
              , n = r()(e, 6)
              , o = n[0]
              , i = n[1]
              , s = n[2]
              , c = n[3]
              , l = n[4]
              , d = (n[5],
            u(new Date))
              , p = r()(d, 6)
              , h = p[0]
              , f = p[1]
              , g = p[2]
              , m = p[3]
              , v = p[4];
            return p[5],
            o === h && i === f && s === g ? c === m ? v == l ? a.default.just : v - l + a.default.minute_ago : m - c + a.default.hour_ago : "".concat(o, ".").concat(i, ".").concat(s, " ").concat(c, ":").concat(l)
        },
        matchTime: function(t) {
            if (t) {
                var e = u(t)
                  , n = r()(e, 6)
                  , o = n[0]
                  , i = n[1]
                  , s = n[2]
                  , c = n[3]
                  , l = n[4]
                  , d = (n[5],
                u(new Date))
                  , p = r()(d, 6)
                  , h = p[0]
                  , f = p[1]
                  , g = p[2];
                if (p[3],
                p[4],
                p[5],
                "".concat(o) == "".concat(h) && "".concat(i) == "".concat(f) && "".concat(s) == "".concat(g))
                    return "".concat(a.default.today, " ").concat(c, ":").concat(l);
                var m, v = (m = Number(g) + 1) < 10 ? "0".concat(m) : m;
                return "".concat(o) == "".concat(h) && "".concat(i) == "".concat(f) && "".concat(s) == "".concat(v) ? "".concat(a.default.tomorrow, " ").concat(c, ":").concat(l) : "".concat(i).concat(a.default.month).concat(s).concat(a.default.day, " ").concat(c, ":").concat(l)
            }
        },
        matchTime2: function(t) {
            if (t) {
                var e = u(t)
                  , n = r()(e, 6)
                  , o = n[0]
                  , i = n[1]
                  , s = n[2]
                  , c = n[3]
                  , l = n[4]
                  , d = (n[5],
                u(new Date))
                  , p = r()(d, 6)
                  , h = p[0]
                  , f = p[1]
                  , g = p[2];
                if (p[3],
                p[4],
                p[5],
                "".concat(o) == "".concat(h) && "".concat(i) == "".concat(f) && "".concat(s) == "".concat(g))
                    return "".concat(a.default.today, " ").concat(c, ":").concat(l);
                var m, v = (m = Number(g) + 1) < 10 ? "0".concat(m) : m;
                return "".concat(o) == "".concat(h) && "".concat(i) == "".concat(f) && "".concat(s) == "".concat(v) ? "".concat(a.default.tomorrow, " ").concat(c, ":").concat(l) : "".concat(i, "/").concat(s, " ").concat(c, ":").concat(l)
            }
        },
        birthTime: function(t) {
            if (t) {
                var e = u(t)
                  , n = r()(e, 6)
                  , o = n[0]
                  , a = n[1]
                  , i = n[2];
                return n[3],
                n[4],
                n[5],
                "".concat(o, "/").concat(a, "/").concat(i)
            }
        },
        fmtDate: function(t, e) {
            return l(new Date(t), e)
        },
        formatDate: function(t) {
            return l(new Date(t), "MM-dd  hh:mm")
        },
        formatDate1: function(t) {
            return l(new Date(t), "hh:mm")
        },
        formatDate2: function(t) {
            return l(new Date(t), "yyyy-MM-dd")
        },
        formatDate3: function(t) {
            var e = new Date(t);
            return "Ngày ".concat(l(e, "dd/MM/yyyy vào lúc hh:mm"))
        },
        tranNumber: function(t) {
            return t / 1e4
        },
        parsePhone: function(t) {
            if (t && 0 !== t.length) {
                for (var e = "", n = 0; n < t.length - 2 - 4; n++)
                    e += "*";
                return t.substr(0, 3) + e + t.substr(t.length - 2)
            }
        },
        Today: function(t) {
            return ((t = new Date(t)).getDate() < 10 ? "0" + t.getDate() : t.getDate()).toString()
        },
        Tomorrow: function(t) {
            return ((t = new Date(t)).getDate() < 10 ? "0" + t.getDate() + 1 : t.getDate() + 1).toString()
        },
        viewCount: function(t) {
            return t > 1e3 ? (t / 1e3).toFixed(2) + "k" : t
        },
        score: function(t) {
            return t + " " + a.default.score
        },
        zoneDate: function(t) {
            t ? t instanceof Date || (t = new Date(t)) : t = new Date;
            var e = -t.getTimezoneOffset() / 60
              , n = t.getTime()
              , o = 6e4 * t.getTimezoneOffset();
            return new Date(n + o + 36e5 * e)
        },
        enMonth: function(t) {
            return t < 1 || t > 12 ? "" : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][t -= 1]
        },
        sendComment: function(t) {
            return t = t.trim(),
            c()(t, {
                whiteList: {
                    img: ["class", "src"]
                },
                stripIgnoreTag: !0,
                stripIgnoreTagBody: ["script"],
                onTag: function(t, e, n) {
                    var o = e.match('<img[^<>]*? src="([^<>]*?)"')
                      , r = e.match('<img[^<>]*? class="([^<>]*?)"')
                      , a = o ? o[1] : ""
                      , s = r ? r[1] : "";
                    return "img" === t && a === "".concat(i.default.cdn, "/assets/").concat(i.default.env, "/img/chat-point.svg") && "chat-point-img" === s ? "@&" : ""
                }
            })
        },
        receiveComment: function(t) {
            return t = c()(t, {
                whiteList: {},
                stripIgnoreTag: !0,
                stripIgnoreTagBody: ["script"]
            }),
            (t = this.urlTag(t)) ? t.replace(/@&/g, (function(t) {
                return '<img class="chat-point-img" src="'.concat(i.default.cdn, "/assets/").concat(i.default.env, '/img/chat-point.svg">')
            }
            )) : ""
        },
        barrage: function(t) {
            return (t = c()(t, {
                whiteList: {},
                stripIgnoreTag: !0,
                stripIgnoreTagBody: ["script"]
            })) ? (t = t.replace(/@&/g, (function(t) {
                return "@"
            }
            ))).replace(/&nbsp;/g, (function(t) {
                return " "
            }
            )) : ""
        },
        urlTag: function(t) {
            return t = t ? t.replace(/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g, (function(t) {
                return "<a href='" + t + "' target='_blank' style='color: blue; text-decoration: underline;'>" + t + "</a>"
            }
            )) : ""
        }
    };
    var u = function(t) {
        t = Number(t);
        var e = new Date(t)
          , n = function(t) {
            return t < 10 ? "0".concat(t) : t
        };
        return [e.getFullYear(), n(e.getMonth() + 1), n(e.getDate()), n(e.getHours()), n(e.getMinutes()), n(e.getSeconds())]
    };
    function l(t, e) {
        /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
        var n = {
            "M+": t.getMonth() + 1,
            "d+": t.getDate(),
            "h+": t.getHours(),
            "m+": t.getMinutes(),
            "s+": t.getSeconds()
        };
        for (var o in n)
            if (new RegExp("(".concat(o, ")")).test(e)) {
                var r = n[o] + "";
                e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? r : d(r))
            }
        return e
    }
    function d(t) {
        return ("00" + t).substr(t.length)
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "Toast", (function() {
        return s
    }
    )),
    n.d(e, "Actionsheet", (function() {
        return c
    }
    )),
    n.d(e, "Tip", (function() {
        return u
    }
    )),
    n.d(e, "Msg", (function() {
        return l
    }
    ));
    var o = n(3)
      , r = 0
      , a = 0
      , i = 0
      , s = function(t, e) {
        if (t.message = t.message.trim(),
        t.message) {
            t.className || (t.className = ""),
            t.duration || 0 == t.duration || (t.duration = 2e3),
            t.transition || (t.transition = 300),
            t.cssTransition = t.transition / 1e3,
            t.top || (t.position || (t.top = "80%"),
            "top" == t.position && (t.top = "20%"),
            "middle" == t.position && (t.top = "50%"),
            "bottom" == t.position && (t.top = "80%"));
            var n = '<div class="tClass'.concat(r, " ").concat(t.className, '"><span>') + t.message + "</span></div>";
            document.body.insertAdjacentHTML("beforeend", n);
            var o = document.querySelector(".tClass".concat(r));
            o.style.cssText = "\n    display: block;\n    position: fixed;\n    padding: 10px;\n    top: ".concat(t.top, ";\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 5px;\n    background: rgba(0,0,0,.7);\n    color: #fff;\n    font-size: 14px;\n    box-sizing: border-box;\n    text-align: center;\n    transition: opacity ").concat(t.cssTransition, "s linear;\n    opacity: 0;\n    z-index: 9999;\n    "),
            setTimeout((function() {
                o.style.opacity = 1,
                0 != t.duration && setTimeout((function() {
                    o.style.opacity = 0,
                    setTimeout((function() {
                        document.body.removeChild(o),
                        e && e()
                    }
                    ), t.transition + 1)
                }
                ), t.duration - 2 * t.transition)
            }
            ), 1),
            r++
        }
    }
      , c = function(t, e) {
        if (null != document.querySelector(".com-actionsheet.".concat(t)))
            return document.querySelector(".com-actionsheet.".concat(t)).style.transform = "translateY(0%)",
            document.querySelector(".com-actionsheet-modal").style.width = "100%",
            void (document.querySelector(".com-actionsheet-modal").style.height = "100%");
        if (e.actions && 0 != e.actions.length) {
            e.cancelText || (e.cancelText = "取消"),
            null == e.closeOnClickModal && (e.closeOnClickModal = !0);
            var n = '\n  <div class="com-actionsheet '.concat(t, '">\n    <ul class="com-actionsheet-list">\n    </ul>\n    <div class="com-actionsheet-cancel">').concat(e.cancelText, "</div>\n  </div>\n  ");
            document.body.insertAdjacentHTML("beforeend", n);
            var o = document.querySelector(".com-actionsheet.".concat(t))
              , r = o.querySelector(".com-actionsheet-list")
              , a = o.querySelector(".com-actionsheet-cancel")
              , i = o.getElementsByClassName("com-actionsheet-item");
            n = "",
            e.actions.map((function(t) {
                n += '<li class="com-actionsheet-item" data-value='.concat(t.value, ">").concat(t.name, "</li>")
            }
            )),
            r.innerHTML = n,
            o.style.cssText = "\n  position: fixed;\n      width: 100%;\n      text-align: center;\n      font-size: 18px;\n      left: 0;\n      bottom: 0;\n      z-index: 9999;\n      transition: transform .3s ease-out;\n      transform: translateY(100%);\n  ",
            r.style.cssText = "\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 5px;\n  ",
            a.style.cssText = "\n  width: 100%;\n  height: 45px;\n  line-height: 45px;\n  background: #fff;;\n  ";
            for (var s = function(t) {
                i[t].style.cssText = "\n  height: 45px;\n  line-height: 45px;\n  border-bottom: 1px solid #e0e0e0;\n  background-color: #fff;\n  ",
                i[t].onclick = function() {
                    e.actions[t].method(e.actions[t].value),
                    o.style.transform = "translateY(100%)",
                    setTimeout((function() {
                        document.querySelector(".com-actionsheet-modal").style.width = 0,
                        document.querySelector(".com-actionsheet-modal").style.height = 0
                    }
                    ), 300)
                }
            }, c = 0; c < i.length; c++)
                s(c);
            i[i.length - 1].style.border = "none",
            setTimeout((function() {
                o.style.transform = "translateY(0%)"
            }
            ), 1);
            var u = document.querySelector(".com-actionsheet-modal");
            if (!u) {
                var l = document.querySelector(".com-actionsheet");
                document.body.insertAdjacentHTML("beforeend", '<div class="com-actionsheet-modal"></div>'),
                (u = document.querySelector(".com-actionsheet-modal")).style.cssText = "\n      position: fixed;\n      left: 0;\n      top: 0;\n      opacity: 0.5;\n      background: #000;\n      z-index: 9998;\n      ",
                e.closeOnClickModal && (u.onclick = function() {
                    l.style.transform = "translateY(100%)",
                    setTimeout((function() {
                        u.style.width = 0,
                        u.style.height = 0
                    }
                    ), 300)
                }
                )
            }
            u.style.width = "100%",
            u.style.height = "100%"
        }
    }
      , u = function(t, e) {
        if (t.message = t.message.trim(),
        t.message) {
            t.container || (t.container = ".header-wrapper"),
            t.position || (t.position = "beforeend"),
            t.className || (t.className = ""),
            t.cssText || (t.cssText = ""),
            t.duration || 0 == t.duration || (t.duration = 2e3),
            t.transition || (t.transition = 300),
            t.cssTransition = t.transition / 1e3;
            var n = '<div class="com-tip '.concat(t.className, '" data-tag="').concat(a, '"><span>').concat(t.message, "</span></div>")
              , r = document.querySelector("".concat(t.container));
            r.insertAdjacentHTML(t.position, n);
            var i = document.querySelector('.com-tip[data-tag="'.concat(a, '"]'));
            if (i.style.cssText = "\n  position: fixed;\n  display: block;\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  background: #FFCE37;\n  color: #000;\n  font-size: 14px;\n  transition: opacity ".concat(t.cssTransition, "s linear;\n  opacity: 0;\n  z-index: 9999;\n  ").concat(t.cssText, "\n  "),
            "afterend" == t.position) {
                var s = o.default.getStyle(r);
                if ("fixed" == s.position || "absolute" == s.position) {
                    var c = Number(s.height.split("px")[0]) + Number(s.marginTop.split("px")[0]) + Number(s.marginBottom.split("px")[0]) + Number(s.paddingTop.split("px")[0]) + Number(s.paddingBottom.split("px")[0]) + Number(s.borderTopWidth.split("px")[0]) + Number(s.borderBottomWidth.split("px")[0]);
                    i.style.marginTop = c + "px"
                }
            }
            setTimeout((function() {
                i.style.opacity = 1,
                0 != t.duration && setTimeout((function() {
                    i.style.opacity = 0,
                    setTimeout((function() {
                        "beforebegin" != t.position && "afterend" != t.position || r.parentNode.removeChild(i),
                        "afterbegin" != t.position && "beforeend" != t.position || r.removeChild(i),
                        e && e()
                    }
                    ), t.transition + 1)
                }
                ), t.duration - 2 * t.transition)
            }
            ), 1),
            a++
        }
    }
      , l = function(t, e) {
        if (t.message) {
            t.duration || 0 == t.duration || (t.duration = 2200),
            t.transition || (t.transition = 150),
            t.cssTransition = t.transition / 1e3;
            var n = '<div class="com-msg" data-tag="'.concat(i, '">\n    <span>').concat(t.message, "</span>\n  </div>")
              , o = document.querySelector("body");
            o.insertAdjacentHTML("beforeend", n);
            var r = document.querySelector('.com-msg[data-tag="'.concat(i, '"]'));
            r.style.cssText = "\n  position: fixed;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, -60px);\n  display: block;\n  min-width: 150px;\n  height: 60px;\n  padding: 0px 35px;\n  line-height: 58px;\n  text-align: center;\n  font-size: 0;\n  font-weight: 500;\n  background: #fffdf5;\n  border-radius: 8px;\n  border: 2px solid #ebeef5;\n  transition: transform ".concat(t.cssTransition, "s linear;\n  z-index: 9999;\n  "),
            r.querySelector("span").style.cssText = "color: #333; font-size: 16px; vertical-align: middle;",
            setTimeout((function() {
                r.style.transform = "translate(-50%, 60px)",
                0 != t.duration && setTimeout((function() {
                    r.style.transform = "translate(-50%, -60px)",
                    setTimeout((function() {
                        o.removeChild(r),
                        e && e()
                    }
                    ), t.transition + 1)
                }
                ), t.duration - 2 * t.transition)
            }
            ), 12),
            i++
        }
    }
}
, , , function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(10)
      , r = n.n(o)
      , a = n(5)
      , i = n.n(a)
      , s = n(30)
      , c = n.n(s)
      , u = n(1)
      , l = n(6)
      , d = n(0)
      , p = n(33)
      , h = n(9)
      , f = n(3)
      , g = n(22)
      , m = n.n(g)
      , v = n(84)
      , y = n.n(v)
      , _ = d.default.baseUrl
      , b = d.default.staticApiUrl
      , w = d.default.imApiUrl;
    c.a.defaults.withCredentials = false,
    c.a.interceptors.request.use((function(t) {
        return t
    }
    ), (function(t) {
        return Promise.reject(t)
    }
    )),
    c.a.interceptors.response.use((function(t) {
        return !(!t || 200 !== t.status) && t.data
    }
    ), (function(t) {
        return console.log(t),
        Promise.reject(t)
    }
    ));
    var T = function() {
        var t = r()(i.a.mark((function t(e) {
            var n, o, a, s, f = arguments;
            return i.a.wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        if (n = f.length > 1 && void 0 !== f[1] ? f[1] : {},
                        o = f.length > 2 ? f[2] : void 0,
                        !u.storeData.sessionId && "/login/guestLogin" !== e)
                            try {
                                l.default.handleGuestLogin()
                            } catch (t) {
                                console.log(t)
                            }
                        return a = {
                            sessionId: u.storeData.sessionId,
                            seq: 0,
                            appVer: 0,
                            packageCode: 0,
                            plat: 3,
                            language: 1
                        },
                        s = p.default.initByte(a, "".concat(JSON.stringify(n)), d.default.API_KEY_REQ),
                        t.abrupt("return", c()({
                            method: "post",
                            baseURL: _,
                            url: e,
                            responseType: "blob",
                            timeout: 3e4,
                            data: s,
                            headers: {
                                "Content-Type": "application/json charset=utf-8"
                            }
                        }).then(function() {
                            var t = r()(i.a.mark((function t(n) {
                                var r;
                                return i.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2,
                                            p.default.initJson(n, d.default.API_KEY_RESP);
                                        case 2:
                                            if (200 !== (r = t.sent).commonResult.code) {
                                                t.next = 7;
                                                break
                                            }
                                            return t.abrupt("return", r.result || !0);
                                        case 7:
                                            if (100 !== r.commonResult.code) {
                                                t.next = 11;
                                                break
                                            }
                                            o ? console.log("需要用户重登，但不跳转登录页面") : (console.log("需要用户重登，跳转登录页面"),
                                            l.default.handleLoginJump(!0)),
                                            t.next = 23;
                                            break;
                                        case 11:
                                            if (101 !== r.commonResult.code) {
                                                t.next = 17;
                                                break
                                            }
                                            console.log("需要游客重登");
                                            try {
                                                l.default.handleGuestLogin()
                                            } catch (t) {
                                                console.log(t)
                                            }
                                            return t.abrupt("return", !1);
                                        case 17:
                                            if (!location.pathname.includes("/player")) {
                                                t.next = 20;
                                                break
                                            }
                                            return Object(h.Tip)({
                                                container: ".video-box",
                                                message: "error",
                                                position: "afterbegin",
                                                cssText: "width: 650px;"
                                            }),
                                            t.abrupt("return");
                                        case 20:
                                            return Object(h.Msg)({
                                                message: r.commonResult.meg || "server error"
                                            }),
                                            console.log(r.commonResult.meg || "接口报错", e, r),
                                            t.abrupt("return", Promise.reject(r.commonResult));
                                        case 23:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t)
                            }
                            )));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()).catch((function(t) {
                            return Promise.reject(t)
                        }
                        )));
                    case 6:
                    case "end":
                        return t.stop()
                    }
            }
            ), t)
        }
        )));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()
      , C = function() {
        var t = r()(i.a.mark((function t(e, n, o) {
            var r, a, s, c;
            return i.a.wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return c = function(t, e, n) {
                            $.ajax({
                                url: b + t,
                                dataType: "jsonp",
                                jsonp: !1,
                                jsonpCallback: e,
                                cache: !0,
                                success: function(t) {
                                    r(t.data)
                                },
                                error: function(t) {
                                    console.log("jsonp error", n),
                                    s(n)
                                }
                            })
                        }
                        ,
                        s = function(t) {
                            t < 5 ? (t++,
                            setTimeout((function() {
                                c(e, n, t)
                            }
                            ), 150)) : a("jsonp error")
                        }
                        ,
                        e || reject("jsonp: url is null"),
                        n || reject("jsonp: callback is null"),
                        r = null,
                        a = null,
                        t.abrupt("return", new Promise((function(t, i) {
                            r = t,
                            a = i,
                            o ? setTimeout((function() {
                                c(e, n, 0)
                            }
                            ), o) : c(e, n, 0)
                        }
                        )));
                    case 7:
                    case "end":
                        return t.stop()
                    }
            }
            ), t)
        }
        )));
        return function(e, n, o) {
            return t.apply(this, arguments)
        }
    }()
      , M = function() {
        var t = r()(i.a.mark((function t(e) {
            var n, o, a, s, u = arguments;
            return i.a.wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return n = u.length > 1 && void 0 !== u[1] ? u[1] : {},
                        o = f.default.uuid().replace(/-/g, ""),
                        a = (new Date).getTime(),
                        s = {
                            "Content-Type": "application/x-www-form-urlencoded",
                            appKey: d.default.imAppKey,
                            nonce: o,
                            curTime: a,
                            sign: m()(d.default.imAppSecret + o + a).toLowerCase()
                        },
                        t.abrupt("return", c()({
                            method: "post",
                            baseURL: w,
                            url: e,
                            timeout: 3e4,
                            data: y.a.stringify(n),
                            headers: s
                        }).then(function() {
                            var t = r()(i.a.mark((function t(o) {
                                return i.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            if (200 !== o.code) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return", o.result || !0);
                                        case 4:
                                            return Object(h.Msg)({
                                                message: o.msg || "server error"
                                            }),
                                            console.log(o.msg || "接口报错", e, n),
                                            t.abrupt("return", Promise.reject(o));
                                        case 7:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t)
                            }
                            )));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()).catch((function(t) {
                            return Promise.reject(t)
                        }
                        )));
                    case 5:
                    case "end":
                        return t.stop()
                    }
            }
            ), t)
        }
        )));
        return function(e) {
            return t.apply(this, arguments)
        }
    }();
    e.default = {
        post: T,
        jsonp: C,
        imPost: M
    }
}
, , , , , function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(12);
    function r() {
        var t = (new Date).getFullYear()
          , e = (new Date).getMonth() + 1
          , n = (new Date).getDate()
          , o = (new Date).getHours()
          , r = (new Date).getMinutes();
        return "v=" + new Date("".concat(t, "/").concat(e, "/").concat(n, " ").concat(o, ":").concat(r, ":00")).getTime()
    }
    e.default = {
        liveDetail: function(t, e) {
            var currentUrl = window.location.href;
            var roomID = getAllUrlParams(currentUrl).roomid;
            return o.default.jsonp("/room/".concat(roomID, "/detail.json?").concat(r()), "detail", e)
        },
        liveAppointmentSchedule: function(t, e) {
            return o.default.jsonp("/room/".concat(roomID, "/schedule.json?").concat(r()), "schedule_".concat(t.roomNum), e)
        },
        liveRankList: function(t, e) {
            return o.default.jsonp("/room/".concat(roomID, "/gift_rank.json?").concat(r()), "gift_rank", e)
        },
        allRoom: function(t, e) {
            return o.default.jsonp("/all_live_rooms.json?".concat(r()), "all_live_rooms", e)
        },
        adList: function(t, e) {
            return o.default.jsonp("/banner.json?".concat(r()), "banner", e)
        },
        giftList: function(t, e) {
            return o.default.jsonp("/gifts.json?".concat(r()), "gifts", e)
        },
        hotAnchor: function(t, e) {
            return o.default.jsonp("/hot_anchor.json?".concat(r()), "hot_anchor", e)
        },
        liveTypeList: function(t, e) {
            return o.default.jsonp("/live_types.json?".concat(r()), "live_types", e)
        },
        matchCateList: function(t, e) {
            return o.default.jsonp("/matches.json?".concat(r()), "matches", e)
        },
        matchRecommend: function(t, e) {
            return o.default.jsonp("/match_recommend.json?".concat(r()), "match_recommend", e)
        },
        matchDate: function(t, e) {
            return o.default.jsonp("/match/matches_".concat(t.date, ".json?").concat(r()), "matches_".concat(t.date), e)
        },
        matchAll: function(t, e) {
            return o.default.jsonp("/match_all.json?".concat(r()), "match_all", e)
        },
        greenMatchAll: function(t, e) {
            return o.default.jsonp("/match_green.json?".concat(r()), "match_green", e)
        },
        greenMatchDate: function(t, e) {
            return o.default.jsonp("/match/matches_green_".concat(t.date, ".json?").concat(r()), "matches_green_".concat(t.date), e)
        },
        allGreenRoom: function(t, e) {
            return o.default.jsonp("/green_live_rooms.json?".concat(r()), "green_live_rooms", e)
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(9);
    n(0),
    e.default = {
        nickname: function(t) {
            return t.length >= 2
        },
        submitNickname: function(t) {
            return !/\d{4}/.test(t) || (Object(o.Msg)({
                message: "Cannot contain four numbers"
            }),
            !1)
        },
        countryCodePhone: function(t, e) {
            if ("+86" == t) {
                if (11 == e.length)
                    return !0
            } else if ("+84" == t) {
                if (/^[35789][0-9]{8}$/.test(e))
                    return !0
            } else if (e.length >= 5)
                return !0;
            return !1
        },
        specialCountryCodePhone: function(t, e) {
            if ("+86" == t) {
                if (11 == e.length)
                    return !0
            } else if (e.length >= 5)
                return !0;
            return !1
        },
        password: function(t) {
            return t.length <= 16 && t.length >= 6
        },
        smsCode: function(t) {
            return 4 === t.length
        },
        imgCode: function(t) {
            return 5 === t.length
        },
        account: function(t) {
            return t.length <= 16 && t.length >= 6
        }
    }
}
, , , , , function(t, e, n) {
    "use strict";
    n.r(e);
    var o, r = n(10), a = n.n(r), i = n(5), s = n.n(i), c = n(60), u = n(0), l = n(33), d = n(1), p = n(9), h = n(3), f = n(2), g = u.default.websocketUrl, m = void 0, v = null, y = null, _ = 0, b = "", w = !0, T = !1, C = {
        sessionInfo: {
            key: d.storeData.sessionId,
            plat: 3,
            version: 1
        },
        init: function() {
            if (console.log("ws 初始化"),
            m = this,
            !v || 0 !== v.readyState && 1 !== v.readyState || (console.log("由于ws已存在，主动断开 ws，不进行重连", v.readyState),
            m.reset(!0)),
            "WebSocket"in window || "MozWebSocket"in window) {
                _++;
                var t = "".concat(g, "/?sid=").concat(_);
                return b = t,
                (v = new WebSocket(t)).onopen = m.onopen,
                v.onmessage = m.onmessage,
                v.onclose = m.onclose,
                v.onerror = m.onerror,
                w && (w = !1,
                h.default.closePageListener((function() {
                    v && (m.logout(),
                    m.reset(!0))
                }
                ))),
                v
            }
            Object(p.Msg)({
                message: f.default.not_support_websocket,
                duration: 2e3
            })
        },
        onopen: function() {
            console.log("ws 连接成功"),
            $(".reconnect-tip").hide(),
            m.send(u.default.WS_CODE.LOGIN, m.sessionInfo),
            o = setInterval((function() {
                console.log("心跳"),
                m.send(u.default.WS_CODE.HEART)
            }
            ), 1e4)
        },
        onmessage: function(t) {
            var e = t.data;
            m.receive(e).then((function(t) {
                c.wsHandler.resolve(t.messageId, t.message)
            }
            ))
        },
        onclose: function(t) {
            console.log("ws 关闭: " + t.code + ",关闭原因：" + t.reason + "，是否为完全关闭：" + t.wasClean + "，是否为主动关闭：", T),
            1006 !== t.code || t.wasClean || T || (m.clearTimer(),
            m.reconnection()),
            T && (T = !1)
        },
        onerror: function(t) {
            console.log("ws 错误", t),
            b === t.target.url || console.log("onerror: wsUrl不一样")
        },
        reconnection: function() {
            console.log("ws 重连中......"),
            $(".reconnect-tip").show(),
            setTimeout((function() {
                console.log("ws 进行重连"),
                m.init()
            }
            ), 2e3)
        },
        reset: function(t) {
            this.clearTimer(),
            !v || 0 !== v.readyState && 1 !== v.readyState || (T = t,
            v.close(),
            v = null)
        },
        clearTimer: function() {
            o && (clearInterval(o),
            o = null),
            y && (clearTimeout(y),
            y = null)
        },
        isActive: function() {
            if (!($(".liveRoom-wrapper").length > 0))
                return !0
        },
        send: function(t, e) {
            if (!window.WebSocket || !v)
                return console.log("没有ws"),
                !1;
            if (v.readyState != WebSocket.OPEN)
                return console.log("ws 准备发送消息，但 ws 没有 open"),
                void Object(p.Msg)({
                    message: f.default.reconnect_tip,
                    duration: 2e3
                });
            var n, o, r = 0;
            e && (n = l.default.stringToUint8Array(JSON.stringify(e)),
            r = (o = l.default.getAesString(n, u.default.API_KEY_REQ)).length);
            var a = new ArrayBuffer(8 + r)
              , i = new DataView(a);
            i.setInt8(0, 0, !1),
            i.setInt8(1, -96, !1),
            i.setUint16(2, t, !1),
            i.setUint32(4, r, !1);
            for (var s = 0; s < r; s++)
                i.setUint8(s + 8, o[s]);
            v.send(a)
        },
        receive: function(t) {
            if (t && (t instanceof ArrayBuffer || t instanceof Blob))
                return new Promise(function() {
                    var e = a()(s.a.mark((function e(n, o) {
                        var r, a, i, c, d;
                        return s.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = new FileReader,
                                    a = t,
                                    i = "",
                                    c = "",
                                    d = "",
                                    r.readAsArrayBuffer(a),
                                    e.next = 9,
                                    function(t) {
                                        var e, o = r.result, a = new DataView(o);
                                        i = a.getUint16(2),
                                        a.getUint32(4),
                                        c = o.slice(8),
                                        2e3 !== i ? (e = l.default.getDAesString(new Uint8Array(c), u.default.API_KEY_RESP),
                                        d = JSON.parse(l.default.uint8ArrayToString(e))) : d = {},
                                        n({
                                            messageId: i,
                                            message: d
                                        })
                                    }
                                    ;
                                case 9:
                                    r.onload = e.sent;
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }());
            console.log("ws error")
        },
        logout: function() {
            m.send(u.default.WS_CODE.LOGOUT)
        }
    };
    e.default = C
}
, , , , , , function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(12);
    e.default = {
        send: function(t) {
            return o.default.imPost("/message/send", t)
        },
        history: function(t) {
            return o.default.imPost("/message/history", t)
        }
    }
}
, , , , function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(21)
      , r = n.n(o)
      , a = n(43)
      , i = n.n(a);
    r.a.enc.u8array = {
        stringify: function(t) {
            for (var e = t.words, n = t.sigBytes, o = new Uint8Array(n), r = 0; r < n; r++) {
                var a = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                o[r] = a
            }
            return o
        },
        parse: function(t) {
            for (var e = t.length, n = [], o = 0; o < e; o++)
                n[o >>> 2] |= (255 & t[o]) << 24 - o % 4 * 8;
            return r.a.lib.WordArray.create(n, e)
        }
    };
    var s = function(t) {
        return new TextEncoder("utf-8").encode(t)
    }
      , c = function(t) {
        return new TextDecoder("utf-8").decode(t)
    }
      , u = function(t, e) {
        var n = r.a.enc.Latin1.parse(e)
          , o = t
          , a = r.a.enc.u8array.parse(o)
          , i = r.a.AES.encrypt(a, n, {
            mode: r.a.mode.ECB,
            padding: r.a.pad.Pkcs7
        });
        return r.a.enc.u8array.stringify(i.ciphertext)
    }
      , l = function(t, e) {
        var n = r.a.enc.Latin1.parse(e)
          , o = t
          , a = r.a.enc.u8array.parse(o).toString(r.a.enc.Base64)
          , i = r.a.AES.decrypt(a, n, {
            mode: r.a.mode.ECB,
            padding: r.a.pad.Pkcs7
        });
        return r.a.enc.u8array.stringify(i)
    };
    e.default = {
        initByte: function(t, e, n) {
            var o = new i.a.FY_CLIENT
              , r = new i.a.COMMON_REQ
              , a = new i.a.CLIENT_INFO;
            a.setSessionId(t.sessionId),
            a.setSeq(t.seq),
            a.setAppVer(t.appVer),
            a.setPackageCode(t.packageCode),
            a.setPlat(t.plat),
            a.setLanguage(t.language),
            r.setClientInfo(a),
            r.setParam(s(e)),
            o.setCommonReq(r);
            var c = u(o.serializeBinary(), n)
              , l = c.length
              , d = new ArrayBuffer(6 + l)
              , p = new DataView(d);
            p.setInt8(0, 0, !1),
            p.setInt8(1, -96, !1),
            p.setUint32(2, l, !1);
            for (var h = 0; h < l; h++)
                p.setUint8(h + 6, c[h]);
            return d
        },
        initJson: function(t, e) {
            return new Promise((function(n) {
                if (!t)
                    return !1;
                var o = new FileReader
                  , r = t.slice(6);
                o.readAsArrayBuffer(r),
                o.onload = function(t) {
                    var r = l(new Uint8Array(o.result), e)
                      , a = i.a.FY_CLIENT.deserializeBinary(r).getCommonResp()
                      , s = {
                        code: a.getCommonResult().getErrCode(),
                        meg: a.getCommonResult().getErrMsg(),
                        seq: a.getCommonResult().getSeq(),
                        new_session_id: a.getCommonResult().getNewSessionId()
                    }
                      , u = a.getResult() ? JSON.parse(c(a.getResult())) : a.getResult();
                    n({
                        commonResult: s,
                        result: u
                    })
                }
            }
            ))
        },
        getAesString: u,
        getDAesString: l,
        uint8ArrayToString: c,
        stringToUint8Array: s
    }
}
, , , , , , , function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(27)
      , r = n.n(o);
    e.default = {
        makePage: function(t, e, n) {
            var o = 2 * n + 1 + 2 + 2 + 2
              , a = o - 4
              , i = 3 + n + 1
              , s = t - 2 - n - 1;
            return t <= o - 2 ? Array.from({
                length: t
            }, (function(t, e) {
                return e + 1
            }
            )) : e < i ? [].concat(r()(Array.from({
                length: a
            }, (function(t, e) {
                return e + 1
            }
            ))), ["...", t]) : e > s ? [1, "..."].concat(r()(Array.from({
                length: a
            }, (function(e, n) {
                return t - a + n + 1
            }
            )))) : [1, "..."].concat(r()(Array.from({
                length: 2 * n + 1
            }, (function(t, o) {
                return e - n + o
            }
            ))), ["...", t])
        },
        maxPage: function(t, e) {
            return t < e ? 1 : t % e == 0 ? Number((t / e).toFixed()) : Number((t / e).toFixed()) + 1
        }
    }
}
, , , function(t, e, n) {
    var o = n(140)
      , r = o
      , a = Function("return this")();
    r.exportSymbol("proto.http.CLIENT_INFO", null, a),
    r.exportSymbol("proto.http.COMMON_REQ", null, a),
    r.exportSymbol("proto.http.COMMON_RESP", null, a),
    r.exportSymbol("proto.http.COMMON_RESULT", null, a),
    r.exportSymbol("proto.http.FY_CLIENT", null, a),
    proto.http.FY_CLIENT = function(t) {
        o.Message.initialize(this, t, 0, -1, null, null)
    }
    ,
    r.inherits(proto.http.FY_CLIENT, o.Message),
    r.DEBUG && !COMPILED && (proto.http.FY_CLIENT.displayName = "proto.http.FY_CLIENT"),
    o.Message.GENERATE_TO_OBJECT && (proto.http.FY_CLIENT.prototype.toObject = function(t) {
        return proto.http.FY_CLIENT.toObject(t, this)
    }
    ,
    proto.http.FY_CLIENT.toObject = function(t, e) {
        var n, o = {
            commonReq: (n = e.getCommonReq()) && proto.http.COMMON_REQ.toObject(t, n),
            commonResp: (n = e.getCommonResp()) && proto.http.COMMON_RESP.toObject(t, n)
        };
        return t && (o.$jspbMessageInstance = e),
        o
    }
    ),
    proto.http.FY_CLIENT.deserializeBinary = function(t) {
        var e = new o.BinaryReader(t)
          , n = new proto.http.FY_CLIENT;
        return proto.http.FY_CLIENT.deserializeBinaryFromReader(n, e)
    }
    ,
    proto.http.FY_CLIENT.deserializeBinaryFromReader = function(t, e) {
        for (; e.nextField() && !e.isEndGroup(); )
            switch (e.getFieldNumber()) {
            case 1:
                var n = new proto.http.COMMON_REQ;
                e.readMessage(n, proto.http.COMMON_REQ.deserializeBinaryFromReader),
                t.setCommonReq(n);
                break;
            case 2:
                n = new proto.http.COMMON_RESP,
                e.readMessage(n, proto.http.COMMON_RESP.deserializeBinaryFromReader),
                t.setCommonResp(n);
                break;
            default:
                e.skipField()
            }
        return t
    }
    ,
    proto.http.FY_CLIENT.prototype.serializeBinary = function() {
        var t = new o.BinaryWriter;
        return proto.http.FY_CLIENT.serializeBinaryToWriter(this, t),
        t.getResultBuffer()
    }
    ,
    proto.http.FY_CLIENT.serializeBinaryToWriter = function(t, e) {
        var n = void 0;
        null != (n = t.getCommonReq()) && e.writeMessage(1, n, proto.http.COMMON_REQ.serializeBinaryToWriter),
        null != (n = t.getCommonResp()) && e.writeMessage(2, n, proto.http.COMMON_RESP.serializeBinaryToWriter)
    }
    ,
    proto.http.FY_CLIENT.prototype.getCommonReq = function() {
        return o.Message.getWrapperField(this, proto.http.COMMON_REQ, 1)
    }
    ,
    proto.http.FY_CLIENT.prototype.setCommonReq = function(t) {
        o.Message.setWrapperField(this, 1, t)
    }
    ,
    proto.http.FY_CLIENT.prototype.clearCommonReq = function() {
        this.setCommonReq(void 0)
    }
    ,
    proto.http.FY_CLIENT.prototype.hasCommonReq = function() {
        return null != o.Message.getField(this, 1)
    }
    ,
    proto.http.FY_CLIENT.prototype.getCommonResp = function() {
        return o.Message.getWrapperField(this, proto.http.COMMON_RESP, 2)
    }
    ,
    proto.http.FY_CLIENT.prototype.setCommonResp = function(t) {
        o.Message.setWrapperField(this, 2, t)
    }
    ,
    proto.http.FY_CLIENT.prototype.clearCommonResp = function() {
        this.setCommonResp(void 0)
    }
    ,
    proto.http.FY_CLIENT.prototype.hasCommonResp = function() {
        return null != o.Message.getField(this, 2)
    }
    ,
    proto.http.CLIENT_INFO = function(t) {
        o.Message.initialize(this, t, 0, -1, null, null)
    }
    ,
    r.inherits(proto.http.CLIENT_INFO, o.Message),
    r.DEBUG && !COMPILED && (proto.http.CLIENT_INFO.displayName = "proto.http.CLIENT_INFO"),
    o.Message.GENERATE_TO_OBJECT && (proto.http.CLIENT_INFO.prototype.toObject = function(t) {
        return proto.http.CLIENT_INFO.toObject(t, this)
    }
    ,
    proto.http.CLIENT_INFO.toObject = function(t, e) {
        var n = {
            sessionId: o.Message.getFieldWithDefault(e, 1, ""),
            seq: o.Message.getFieldWithDefault(e, 2, 0),
            appVer: o.Message.getFieldWithDefault(e, 3, 0),
            packageCode: o.Message.getFieldWithDefault(e, 4, 0),
            plat: o.Message.getFieldWithDefault(e, 5, 0),
            language: o.Message.getFieldWithDefault(e, 6, 0)
        };
        return t && (n.$jspbMessageInstance = e),
        n
    }
    ),
    proto.http.CLIENT_INFO.deserializeBinary = function(t) {
        var e = new o.BinaryReader(t)
          , n = new proto.http.CLIENT_INFO;
        return proto.http.CLIENT_INFO.deserializeBinaryFromReader(n, e)
    }
    ,
    proto.http.CLIENT_INFO.deserializeBinaryFromReader = function(t, e) {
        for (; e.nextField() && !e.isEndGroup(); )
            switch (e.getFieldNumber()) {
            case 1:
                var n = e.readString();
                t.setSessionId(n);
                break;
            case 2:
                n = e.readInt32(),
                t.setSeq(n);
                break;
            case 3:
                n = e.readInt32(),
                t.setAppVer(n);
                break;
            case 4:
                n = e.readInt32(),
                t.setPackageCode(n);
                break;
            case 5:
                n = e.readInt32(),
                t.setPlat(n);
                break;
            case 6:
                n = e.readInt32(),
                t.setLanguage(n);
                break;
            default:
                e.skipField()
            }
        return t
    }
    ,
    proto.http.CLIENT_INFO.prototype.serializeBinary = function() {
        var t = new o.BinaryWriter;
        return proto.http.CLIENT_INFO.serializeBinaryToWriter(this, t),
        t.getResultBuffer()
    }
    ,
    proto.http.CLIENT_INFO.serializeBinaryToWriter = function(t, e) {
        var n = void 0;
        (n = t.getSessionId()).length > 0 && e.writeString(1, n),
        0 !== (n = t.getSeq()) && e.writeInt32(2, n),
        0 !== (n = t.getAppVer()) && e.writeInt32(3, n),
        0 !== (n = t.getPackageCode()) && e.writeInt32(4, n),
        0 !== (n = t.getPlat()) && e.writeInt32(5, n),
        0 !== (n = t.getLanguage()) && e.writeInt32(6, n)
    }
    ,
    proto.http.CLIENT_INFO.prototype.getSessionId = function() {
        return o.Message.getFieldWithDefault(this, 1, "")
    }
    ,
    proto.http.CLIENT_INFO.prototype.setSessionId = function(t) {
        o.Message.setProto3StringField(this, 1, t)
    }
    ,
    proto.http.CLIENT_INFO.prototype.getSeq = function() {
        return o.Message.getFieldWithDefault(this, 2, 0)
    }
    ,
    proto.http.CLIENT_INFO.prototype.setSeq = function(t) {
        o.Message.setProto3IntField(this, 2, t)
    }
    ,
    proto.http.CLIENT_INFO.prototype.getAppVer = function() {
        return o.Message.getFieldWithDefault(this, 3, 0)
    }
    ,
    proto.http.CLIENT_INFO.prototype.setAppVer = function(t) {
        o.Message.setProto3IntField(this, 3, t)
    }
    ,
    proto.http.CLIENT_INFO.prototype.getPackageCode = function() {
        return o.Message.getFieldWithDefault(this, 4, 0)
    }
    ,
    proto.http.CLIENT_INFO.prototype.setPackageCode = function(t) {
        o.Message.setProto3IntField(this, 4, t)
    }
    ,
    proto.http.CLIENT_INFO.prototype.getPlat = function() {
        return o.Message.getFieldWithDefault(this, 5, 0)
    }
    ,
    proto.http.CLIENT_INFO.prototype.setPlat = function(t) {
        o.Message.setProto3IntField(this, 5, t)
    }
    ,
    proto.http.CLIENT_INFO.prototype.getLanguage = function() {
        return o.Message.getFieldWithDefault(this, 6, 0)
    }
    ,
    proto.http.CLIENT_INFO.prototype.setLanguage = function(t) {
        o.Message.setProto3IntField(this, 6, t)
    }
    ,
    proto.http.COMMON_RESULT = function(t) {
        o.Message.initialize(this, t, 0, -1, null, null)
    }
    ,
    r.inherits(proto.http.COMMON_RESULT, o.Message),
    r.DEBUG && !COMPILED && (proto.http.COMMON_RESULT.displayName = "proto.http.COMMON_RESULT"),
    o.Message.GENERATE_TO_OBJECT && (proto.http.COMMON_RESULT.prototype.toObject = function(t) {
        return proto.http.COMMON_RESULT.toObject(t, this)
    }
    ,
    proto.http.COMMON_RESULT.toObject = function(t, e) {
        var n = {
            errCode: o.Message.getFieldWithDefault(e, 1, 0),
            errMsg: o.Message.getFieldWithDefault(e, 2, ""),
            seq: o.Message.getFieldWithDefault(e, 3, 0),
            newSessionId: o.Message.getFieldWithDefault(e, 4, "")
        };
        return t && (n.$jspbMessageInstance = e),
        n
    }
    ),
    proto.http.COMMON_RESULT.deserializeBinary = function(t) {
        var e = new o.BinaryReader(t)
          , n = new proto.http.COMMON_RESULT;
        return proto.http.COMMON_RESULT.deserializeBinaryFromReader(n, e)
    }
    ,
    proto.http.COMMON_RESULT.deserializeBinaryFromReader = function(t, e) {
        for (; e.nextField() && !e.isEndGroup(); )
            switch (e.getFieldNumber()) {
            case 1:
                var n = e.readInt32();
                t.setErrCode(n);
                break;
            case 2:
                n = e.readString(),
                t.setErrMsg(n);
                break;
            case 3:
                n = e.readInt32(),
                t.setSeq(n);
                break;
            case 4:
                n = e.readString(),
                t.setNewSessionId(n);
                break;
            default:
                e.skipField()
            }
        return t
    }
    ,
    proto.http.COMMON_RESULT.prototype.serializeBinary = function() {
        var t = new o.BinaryWriter;
        return proto.http.COMMON_RESULT.serializeBinaryToWriter(this, t),
        t.getResultBuffer()
    }
    ,
    proto.http.COMMON_RESULT.serializeBinaryToWriter = function(t, e) {
        var n = void 0;
        0 !== (n = t.getErrCode()) && e.writeInt32(1, n),
        (n = t.getErrMsg()).length > 0 && e.writeString(2, n),
        0 !== (n = t.getSeq()) && e.writeInt32(3, n),
        (n = t.getNewSessionId()).length > 0 && e.writeString(4, n)
    }
    ,
    proto.http.COMMON_RESULT.prototype.getErrCode = function() {
        return o.Message.getFieldWithDefault(this, 1, 0)
    }
    ,
    proto.http.COMMON_RESULT.prototype.setErrCode = function(t) {
        o.Message.setProto3IntField(this, 1, t)
    }
    ,
    proto.http.COMMON_RESULT.prototype.getErrMsg = function() {
        return o.Message.getFieldWithDefault(this, 2, "")
    }
    ,
    proto.http.COMMON_RESULT.prototype.setErrMsg = function(t) {
        o.Message.setProto3StringField(this, 2, t)
    }
    ,
    proto.http.COMMON_RESULT.prototype.getSeq = function() {
        return o.Message.getFieldWithDefault(this, 3, 0)
    }
    ,
    proto.http.COMMON_RESULT.prototype.setSeq = function(t) {
        o.Message.setProto3IntField(this, 3, t)
    }
    ,
    proto.http.COMMON_RESULT.prototype.getNewSessionId = function() {
        return o.Message.getFieldWithDefault(this, 4, "")
    }
    ,
    proto.http.COMMON_RESULT.prototype.setNewSessionId = function(t) {
        o.Message.setProto3StringField(this, 4, t)
    }
    ,
    proto.http.COMMON_REQ = function(t) {
        o.Message.initialize(this, t, 0, -1, null, null)
    }
    ,
    r.inherits(proto.http.COMMON_REQ, o.Message),
    r.DEBUG && !COMPILED && (proto.http.COMMON_REQ.displayName = "proto.http.COMMON_REQ"),
    o.Message.GENERATE_TO_OBJECT && (proto.http.COMMON_REQ.prototype.toObject = function(t) {
        return proto.http.COMMON_REQ.toObject(t, this)
    }
    ,
    proto.http.COMMON_REQ.toObject = function(t, e) {
        var n, o = {
            clientInfo: (n = e.getClientInfo()) && proto.http.CLIENT_INFO.toObject(t, n),
            param: e.getParam_asB64()
        };
        return t && (o.$jspbMessageInstance = e),
        o
    }
    ),
    proto.http.COMMON_REQ.deserializeBinary = function(t) {
        var e = new o.BinaryReader(t)
          , n = new proto.http.COMMON_REQ;
        return proto.http.COMMON_REQ.deserializeBinaryFromReader(n, e)
    }
    ,
    proto.http.COMMON_REQ.deserializeBinaryFromReader = function(t, e) {
        for (; e.nextField() && !e.isEndGroup(); )
            switch (e.getFieldNumber()) {
            case 1:
                var n = new proto.http.CLIENT_INFO;
                e.readMessage(n, proto.http.CLIENT_INFO.deserializeBinaryFromReader),
                t.setClientInfo(n);
                break;
            case 2:
                n = e.readBytes(),
                t.setParam(n);
                break;
            default:
                e.skipField()
            }
        return t
    }
    ,
    proto.http.COMMON_REQ.prototype.serializeBinary = function() {
        var t = new o.BinaryWriter;
        return proto.http.COMMON_REQ.serializeBinaryToWriter(this, t),
        t.getResultBuffer()
    }
    ,
    proto.http.COMMON_REQ.serializeBinaryToWriter = function(t, e) {
        var n = void 0;
        null != (n = t.getClientInfo()) && e.writeMessage(1, n, proto.http.CLIENT_INFO.serializeBinaryToWriter),
        (n = t.getParam_asU8()).length > 0 && e.writeBytes(2, n)
    }
    ,
    proto.http.COMMON_REQ.prototype.getClientInfo = function() {
        return o.Message.getWrapperField(this, proto.http.CLIENT_INFO, 1)
    }
    ,
    proto.http.COMMON_REQ.prototype.setClientInfo = function(t) {
        o.Message.setWrapperField(this, 1, t)
    }
    ,
    proto.http.COMMON_REQ.prototype.clearClientInfo = function() {
        this.setClientInfo(void 0)
    }
    ,
    proto.http.COMMON_REQ.prototype.hasClientInfo = function() {
        return null != o.Message.getField(this, 1)
    }
    ,
    proto.http.COMMON_REQ.prototype.getParam = function() {
        return o.Message.getFieldWithDefault(this, 2, "")
    }
    ,
    proto.http.COMMON_REQ.prototype.getParam_asB64 = function() {
        return o.Message.bytesAsB64(this.getParam())
    }
    ,
    proto.http.COMMON_REQ.prototype.getParam_asU8 = function() {
        return o.Message.bytesAsU8(this.getParam())
    }
    ,
    proto.http.COMMON_REQ.prototype.setParam = function(t) {
        o.Message.setProto3BytesField(this, 2, t)
    }
    ,
    proto.http.COMMON_RESP = function(t) {
        o.Message.initialize(this, t, 0, -1, null, null)
    }
    ,
    r.inherits(proto.http.COMMON_RESP, o.Message),
    r.DEBUG && !COMPILED && (proto.http.COMMON_RESP.displayName = "proto.http.COMMON_RESP"),
    o.Message.GENERATE_TO_OBJECT && (proto.http.COMMON_RESP.prototype.toObject = function(t) {
        return proto.http.COMMON_RESP.toObject(t, this)
    }
    ,
    proto.http.COMMON_RESP.toObject = function(t, e) {
        var n, o = {
            commonResult: (n = e.getCommonResult()) && proto.http.COMMON_RESULT.toObject(t, n),
            result: e.getResult_asB64()
        };
        return t && (o.$jspbMessageInstance = e),
        o
    }
    ),
    proto.http.COMMON_RESP.deserializeBinary = function(t) {
        var e = new o.BinaryReader(t)
          , n = new proto.http.COMMON_RESP;
        return proto.http.COMMON_RESP.deserializeBinaryFromReader(n, e)
    }
    ,
    proto.http.COMMON_RESP.deserializeBinaryFromReader = function(t, e) {
        for (; e.nextField() && !e.isEndGroup(); )
            switch (e.getFieldNumber()) {
            case 1:
                var n = new proto.http.COMMON_RESULT;
                e.readMessage(n, proto.http.COMMON_RESULT.deserializeBinaryFromReader),
                t.setCommonResult(n);
                break;
            case 2:
                n = e.readBytes(),
                t.setResult(n);
                break;
            default:
                e.skipField()
            }
        return t
    }
    ,
    proto.http.COMMON_RESP.prototype.serializeBinary = function() {
        var t = new o.BinaryWriter;
        return proto.http.COMMON_RESP.serializeBinaryToWriter(this, t),
        t.getResultBuffer()
    }
    ,
    proto.http.COMMON_RESP.serializeBinaryToWriter = function(t, e) {
        var n = void 0;
        null != (n = t.getCommonResult()) && e.writeMessage(1, n, proto.http.COMMON_RESULT.serializeBinaryToWriter),
        (n = t.getResult_asU8()).length > 0 && e.writeBytes(2, n)
    }
    ,
    proto.http.COMMON_RESP.prototype.getCommonResult = function() {
        return o.Message.getWrapperField(this, proto.http.COMMON_RESULT, 1)
    }
    ,
    proto.http.COMMON_RESP.prototype.setCommonResult = function(t) {
        o.Message.setWrapperField(this, 1, t)
    }
    ,
    proto.http.COMMON_RESP.prototype.clearCommonResult = function() {
        this.setCommonResult(void 0)
    }
    ,
    proto.http.COMMON_RESP.prototype.hasCommonResult = function() {
        return null != o.Message.getField(this, 1)
    }
    ,
    proto.http.COMMON_RESP.prototype.getResult = function() {
        return o.Message.getFieldWithDefault(this, 2, "")
    }
    ,
    proto.http.COMMON_RESP.prototype.getResult_asB64 = function() {
        return o.Message.bytesAsB64(this.getResult())
    }
    ,
    proto.http.COMMON_RESP.prototype.getResult_asU8 = function() {
        return o.Message.bytesAsU8(this.getResult())
    }
    ,
    proto.http.COMMON_RESP.prototype.setResult = function(t) {
        o.Message.setProto3BytesField(this, 2, t)
    }
    ,
    r.object.extend(e, proto.http)
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    e.default = {
        cursorEnd: function(t) {
            if (window.getSelection)
                t.focus(),
                (e = window.getSelection()).selectAllChildren(t),
                e.collapseToEnd();
            else if (document.selection) {
                var e;
                (e = document.selection.createRange()).moveToElementText(t),
                e.collapse(!1),
                e.select()
            }
        },
        onlyPasteText: function(t) {
            t.addEventListener("paste", (function(t) {
                t.preventDefault();
                var e;
                if (e = window.clipboardData && clipboardData.setData ? window.clipboardData.getData("text") : (t.originalEvent || t).clipboardData.getData("text/plain"),
                document.body.createTextRange) {
                    if (document.selection)
                        textRange = document.selection.createRange();
                    else if (window.getSelection) {
                        sel = window.getSelection();
                        var n = sel.getRangeAt(0)
                          , o = document.createElement("span");
                        o.innerHTML = "&#FEFF;",
                        n.deleteContents(),
                        n.insertNode(o),
                        textRange = document.body.createTextRange(),
                        textRange.moveToElementText(o),
                        o.parentNode.removeChild(o)
                    }
                    textRange.text = e,
                    textRange.collapse(!1),
                    textRange.select()
                } else
                    document.execCommand("insertText", !1, e)
            }
            ))
        }
    }
}
, , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(46)
      , r = n.n(o)
      , a = n(47)
      , i = n.n(a)
      , s = function() {
        function t(e) {
            for (var n in r()(this, t),
            this.$data = "Object" === this.getBaseType(e.data) ? e.data : {},
            this.$watch = "Object" === this.getBaseType(e.watch) ? e.watch : {},
            e.data)
                this.setData(n)
        }
        return i()(t, [{
            key: "getBaseType",
            value: function(t) {
                return Object.prototype.toString.apply(t).slice(8, -1)
            }
        }, {
            key: "setData",
            value: function(t) {
                Object.defineProperty(this, t, {
                    get: function() {
                        return this.$data[t]
                    },
                    set: function(e) {
                        var n = this.$data[t];
                        return n === e || (this.$data[t] = e,
                        this.$watch[t] && "function" == typeof this.$watch[t] && this.$watch[t].call(this, e, n)),
                        e
                    }
                })
            }
        }]),
        t
    }();
    e.default = s
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "wsHandler", (function() {
        return l
    }
    ));
    var o = n(0)
      , r = n(1)
      , a = n(23)
      , i = n(9)
      , s = n(6)
      , c = n(3)
      , u = 1
      , l = {
        resolve: function(t, e) {
            var n = o.default.WS_CODE;
            switch (t) {
            case n.HEART_SUCCESS:
                break;
            case n.LOGIN_SUCCESS:
                if ($(".liveRoom-wrapper").length > 0) {
                    var l = c.default.getRoomNum();
                    a.default.send(o.default.WS_CODE.ROOM_ENTER, {
                        roomNum: l,
                        haveHistory: u
                    }),
                    u = 0
                }
                break;
            case n.LOGOUT_SUCCESS:
                break;
            case n.ROOM_ENTER_SUCCESS:
                r.storeData.wsLastestComment && r.storeData.wsLastestComment.flag && 0 == $(".liveRoom-wrapper .chat-list .chat-item[data-flag=".concat(r.storeData.wsLastestComment.flag, "]")).length && (a.default.send(o.default.WS_CODE.COMMENT, r.storeData.wsLastestComment),
                r.storeData.wsLastestComment = null);
                break;
            case n.ROOM_LEAVE_SUCCESS:
                r.storeData.commentList = "[]";
                break;
            case n.COMMENT_SUCCESS:
            case n.COMMENT_DELETE_SUCCESS:
                break;
            case n.COMMENT_PUSH:
                if ("1" == o.default.showComment) {
                    if (2 === e.msgType && r.storeData.userInfo && e.sendUid === r.storeData.userInfo.uid)
                        return;
                    if (3 !== e.msgType || !r.storeData.shieldWc && 3 === e.msgType) {
                        var d = [];
                        d.concat(r.storeData.commentList),
                        d.push(e),
                        r.storeData.commentList = d
                    }
                    1 === e.msgType && (r.storeData.barrageItem = e.content)
                }
                break;
            case n.COMMENT_PUSH_DELETE:
                r.storeData.delMsgId = e.msgId;
                break;
            case n.MSG_PUSH:
                s.default.handleIsHadUserLogin() && (r.storeData.newMsg = e.num);
                break;
            case n.FEEDBACK_PUSH:
                r.storeData.feedbackMsg = e.num;
                break;
            case n.SCORE_GROW_PUSH:
                var p = r.storeData.userInfo;
                p.grow = p.grow + e.grow,
                p.score = p.score + e.score,
                p.grow >= p.growDto.nextMinGrom && (p.grow = p.grow - p.growDto.nextMinGrom,
                r.storeData.levelUpShow = !0),
                r.storeData.userInfo = Object.assign({}, p),
                r.storeData.growScoreUp = Object.assign({}, e);
                break;
            case n.SUBSCRIBE_MATCH_PUSH:
                r.storeData.subscribeToast = Object.assign({}, e);
                break;
            case n.VIEW_NUM_PUSH:
                r.storeData.viewNum = e;
                break;
            case n.OFFLINE_PUSH:
                break;
            case n.SUBSCRIBE_MATCH_LIST_PUSH:
                r.storeData.addSubscribe = Object.assign({}, e);
                break;
            case n.ERROR:
                if (console.log("ws error, errCode:" + e.errCode + ", errMsg:" + e.errMsg),
                1e3 === e.errCode)
                    a.default.send(o.default.WS_CODE.ROOM_ENTER, {
                        roomNum: r.storeData.roomNum
                    });
                else if (1002 == e.errCode && "请勿发布敏感内容，多次违规将封号处理" === e.errMsg) {
                    var h = $("#fullScreenTips");
                    h.length > 0 && (h.fadeIn(150),
                    setTimeout((function() {
                        h.fadeOut(150)
                    }
                    ), 3e3))
                }
                Object(i.Msg)({
                    message: e.errMsg
                })
            }
        }
    }
}
]]);

// function getRoomID(){
//     // Lấy đường dẫn hiện tại của trang
//     debugger;
//     var currentUrl = window.location.href;

//     // Tách chuỗi URL thành một mảng các tham số
//     var urlParams = currentUrl.split("?");
    
//     // Lấy phần tử cuối cùng trong mảng, chứa tham số roomID và scheduleId
//     var lastParam = urlParams[urlParams.length - 1];
    
//     // Tách giá trị của roomID từ chuỗi tham số bằng cách tách chuỗi bằng dấu "=" và lấy phần tử thứ 1 (với giả thiết rằng giá trị roomID luôn là phần tử thứ 1 sau dấu "=")
//     var roomId = lastParam.split("=")[1].split("?")[0];

//     return roomId;
// }

function getAllUrlParams(url) {
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    var obj = {};
    if (queryString) {
  
      queryString = queryString.split('#')[0];
  
      var arr = queryString.split('&');
  
      for (var i = 0; i < arr.length; i++) {
        var a = arr[i].split('=');
  
        var paramName = a[0];
        var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
  
        paramName = paramName.toLowerCase();
        if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();
  
        if (paramName.match(/\[(\d+)?\]$/)) {
  
          var key = paramName.replace(/\[(\d+)?\]/, '');
          if (!obj[key]) obj[key] = [];
  
          if (paramName.match(/\[\d+\]$/)) {
            var index = /\[(\d+)\]/.exec(paramName)[1];
            obj[key][index] = paramValue;
          } else {
            obj[key].push(paramValue);
          }
        } else {
          if (!obj[paramName]) {
            obj[paramName] = paramValue;
          } else if (obj[paramName] && typeof obj[paramName] === 'string'){
            obj[paramName] = [obj[paramName]];
            obj[paramName].push(paramValue);
          } else {
            obj[paramName].push(paramValue);
          }
        }
      }
    }
  
    return obj;
  }


