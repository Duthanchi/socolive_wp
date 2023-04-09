console.log('liveRoom')
import { storeData } from 'utils/store'
import api from 'utils/api'
import sapi from 'utils/sapi'
import filters from 'utils/filters'
import { Msg } from 'utils/components'
import common from 'utils/common'
import constant from 'utils/constant'
import emojiData from '../../json/emojis.json'
import QRCode from 'qrcode'
import websocket from 'utils/websocket'
import privateChat from 'businese/new_privateChat'
import i18n from 'utils/i18n'
import editor from 'utils/editor'
import './liveRoom/more' // 其他功能代码
import './liveRoom/gift' // 礼物功能代码

require('../include/video.js')

websocket.init()
if (constant.showComment != '1') {
    // $('#textarea .textarea').attr('disabled', true)
    $('#textarea .textarea').attr('contenteditable', false)
}

// 判断是否要显示下载APP和添加到主屏幕
common.showDownload(function () {
    $('.liveRoom-wrapper .media .mobile-text').show()
})

$(async function () {
    let roomData;
    console.log('$liveRoom start')
    roomNum = common.getRoomNum()
    console.log("asdasdjkashk" + roomNum);
    const res = await sapi.liveDetail({ roomNum })
    roomData = res
    storeData.room = res.room
    storeData.roomNum = roomNum
    storeData.anchorId = res.room.anchor.uid
    $('.text-msg .mobile-text a').attr('href', constant.downloadAppUrl)

    let resizeFn = common.debounce(function () {
        let videoHeight = ($('.live-room-box .center-block').width() / 16) * 9
        $('.live-room-box .center-block').css({ height: videoHeight })
        let fullHeight = videoHeight + $('.live-room-box .top-block').outerHeight()
        let chatHeight =
            fullHeight -
            $('.live-room-box .chat .notice').outerHeight() -
            $('.live-room-box .chat .tab').outerHeight() -
            $('.live-room-box .chat .chat-bottom').outerHeight()
        // console.log(videoHeight, fullHeight, chatHeight, $('.live-room-box .chat .notice').outerHeight(), $('.live-room-box .chat .tab').outerHeight(), $('.live-room-box .chat .chat-bottom').outerHeight())
        $('.chat .chat-center').css({ height: chatHeight })
    }, 50)
    window.addEventListener('resize', function (e) {
        resizeFn()
        // 1 毫秒后再次进行 resize，防止首次 resize 不成功
        setTimeout(() => {
            resizeFn()
        }, 1)
    })
    resizeFn()
    // 测试经发现，resize 后加载视频，视频会出现较大的黑边，需要1秒后再次 resize， 可以消除黑边
    setTimeout(function () {
        resizeFn()
    }, 1000)

    $('body').click(function () {
        //隐藏删除按钮
        $('.chat-item.right-click').removeClass('right-click')
        $('.dele-msg').attr('data-id', '').fadeOut(50)
        $('.forbidden-select-opt').fadeOut(150)
        $('.emoji-panel').fadeOut(150)
    })

    let appoinmentSwiper = new Swiper('.appoinment-swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        init: false,
        slidesPerView: 5,
        // freeMode : true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.appoinment-next',
            prevEl: '.appoinment-prev',
        },
    })
    let recommendSwiper = new Swiper('.recommend-swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        init: false,
        slidesPerView: 3,
        //freeMode: true,
        slidesPerView: 'auto',
    })

    let roomNum
    let liveHotList = [] //推荐视频列表
    let achorScheduleList = [] //主播日程
    let forbiddenId = null, //禁言id
        forbiddenTime = 0, //禁言时间
        forbiddenType = '', // 禁言类型(1：直播间禁言，2：全站禁言)
        forbiddenStatus = null, // 禁言状态(接口返回的对象：status（1：禁言，2：解除），type（1：直播间禁言，2：全局禁言）， time（禁言时长，1表示永久））
        matchReservation = [],
        scheduleId = '' // 赛程id

    roomNum = common.getRoomNum();
    scheduleId = common.getUrlParam('scheduleId')
    if (api.handleIsHadUserLogin()) {
        // 查询关注
        try {
            let res = await api.liveAttentionList()
            if (res && res.comperes && res.comperes.length > 0) {
                let comperes = res.comperes
                for (let i = 0; i < comperes.length; i++) {
                    if (comperes[i].roomNum == roomNum) {
                        // $('.follow').addClass('no-follow').html('已关注')
                        $('.follow').addClass('no-follow').html(i18n.already_follow)
                        break
                    }
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    let canvas = document.getElementById('qrCodeCanvas')
    let userH5Url = common.roomUrl(roomNum)
    // 生成h5端房间二维码
    QRCode.toCanvas(canvas, userH5Url, { width: 120 }, (error) => {
        if (error) console.log(error, userH5Url)
    })

    if (api.handleIsHadUserLogin()) {
        getUserDetail()
    }
    liveHot()
    achorSchedule()

    //  生成表情
    let emojiHtml = ''
    Object.keys(emojiData).map((item) => {
        emojiHtml += `<li data-id='${item}'>${emojiData[item].char}</li>`
    })
    $('.emoji-panel .browBox ul').html(emojiHtml)
    emojiHtml = null

    //显示表情
    $('.emoji').click(function () {
        $('.emoji-panel').fadeIn(150)
        return false
    })
    $('#fullScreenEmoji').click(function () {
        $('.emoji-panel').fadeIn(150)
        return false
    })
    //选择表情
    $('.emoji-panel ul li').click(function () {
        let index = $(this).attr('data-id')
        // $('#textarea .textarea').val($('#textarea .textarea').val() + emojiData[index].char)
        // $('#fullScreenInput').val($('#fullScreenInput').val() + emojiData[index].char)

        $('#textarea .textarea').append(emojiData[index].char)
        $('#fullScreenInput').append(emojiData[index].char)
    })

    //接口：获取用户信息
    async function getUserDetail() {
        try {
            let res = await api.userDetail()
            if (res) {
                let user = res.user
                let userData = Object.assign({}, user)
                storeData.userInfo = userData
                $('.integral-num').html(user.score)
                $('#fullScreenSocre').html(user.score)
                $('.noLogin').hide()
                $('#textarea').show()
                $('.inputBox .send').addClass('send-on')
            }
        } catch (err) {
            console.log(err)
        }
    }

    //接口：热播直播间列表
    async function liveHot() {
        try {
            let res
            let data
            if (common.hostIncludes(constant.greenDomains)) {
                res = await sapi.allGreenRoom()
                data = res ? res.green : null
            } else {
                res = await sapi.allRoom()
                data = res ? res.hot : null
            }
            showMarquee(res.scroll)
            if (data) {
                liveHotList = data
                showLiveHotList(liveHotList)
            }
        } catch (err) {
            console.log(err)
        }
    }

    //接口：主播日程
    async function achorSchedule() {
        try {
            const res = await sapi.liveAppointmentSchedule({ roomNum })
            achorScheduleList = res.matches
            showAchorSchedule(res.matches)
            const schedule = res.matches.find((i) => i.scheduleId == scheduleId)
            if (schedule) {
                showSchedule(schedule)
            }
        } catch (err) {
            console.log(err)
        }
    }

    //接口：获取排行榜列表
    async function rankList() {
        try {
            const res = await sapi.liveRankList({ roomNum })
            showRankLists(res)
        } catch (err) {
            console.log(err)
        }
    }
    //接口：关注主播请求
    async function getAttention(key, $this) {
        if (!api.handleLoginJump(false)) {
            const data = {
                operation: key,
                targetUid: storeData.room.anchor.uid,
            }
            try {
                const res = await api.liveAttention(data)
                Msg({
                    // message: key === 1 ? '关注成功' : '已取消关注'
                    message: key === 1 ? i18n.follow_success : i18n.follow_cancel,
                })
                //key === 1 ? $this.addClass('no-follow').html('已关注') : $this.removeClass('no-follow').html('关注')
                key === 1 ? $this.addClass('no-follow').html(i18n.already_follow) : $this.removeClass('no-follow').html(i18n.follow)
            } catch (err) {
                console.log(err)
            }
        }
    }

    //接口：禁言/解禁操作
    async function apiForbidden(status, type, id) {
        let data = {
            uid: id, //如何获取到用户id
            status: status,
        }
        // 如果是禁言，加上时间
        if (status === 1) {
            data.time = forbiddenTime
        }
        // 如果是直播间禁言/解禁，加上房间号
        if (type === 1) {
            data.roomNum = roomNum
        }
        try {
            const res = await api.liveForbidden(data)
            if (status == 1) {
                Msg({
                    message: i18n.ban_success, //'禁言成功'
                })
            } else if (status == 2) {
                Msg({
                    message: i18n.ban_cancel, //'解除禁言成功'
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
    //接口 禁言状态
    async function apiForbiddenStatus(id) {
        const data = {
            uid: id, //如何获取到用户id
            roomNum: roomNum,
        }
        let res = await api.liveForbiddenStatus(data)
        return res
    }
    //显示：主播排行榜
    function showRankLists(data) {
        if (data && data.length > 0) {
            let html = ''
            data.map((item, index) => {
                html += `
        <li>
          <span class="num">${index + 1 > 3 ? index + 1 : ''}</span>
          <span class="img-header">
            <img class="avatar lazyload" src="${constant.cdn}/assets/${constant.env}/img/avatar.png" data-src="${item.user.cutOutIcon ? item.user.cutOutIcon : item.user.icon
                    }" data-src-backup="${item.user.icon}" />
          </span>
          <span class="username ellipsis">${item.user.nickName}</span>
          <span class="level">
            <img src="${constant.cdn}/assets/${constant.env}/img/lv${item.user.growDto.id}.png" alt />
          </span>
          <span class="contribution" i18n-text="贡献">${i18n.contribution + '' + item.contribution}</span>
        </li>`
            })
            $('.rank-list ul').html(html).show()
            $('.rank-list-null').hide()
            common.loadImg('avatar', '.img-header ')
        } else {
            $('.rank-list ul').hide()
            $('.rank-list-null').show()
        }
    }
    //显示：主播日程
    function showAchorSchedule(data) {
        if (data.length > 0) {
            let html = '',
                today = filters.Today(new Date()),
                tomorrow = filters.Tomorrow(new Date())
            data.map((item, index) => {
                html += `
          <div class="swiper-slide game">
            <div class="title">
              <div class="fl">
                <img src="${item.categoryIcon}"  class="icon" />
                <span>${item.subCateName}</span>
              </div>
                ${new Date(filters.zoneDate(item.matchTime).getTime()).getDate() == today
                        ? `
                  <div class="fr match-time" >
                    <span style="padding-right:5px;" i18n-text="今天">${i18n.today}</span>
                    ` +
                        filters.formatDate1(filters.zoneDate(item.matchTime).getTime()) +
                        `
                  </div>`
                        : new Date(filters.zoneDate(item.matchTime).getTime()).getDate() == tomorrow
                            ? `
                  <div class="fr">
                      <span style="padding-right:5px" i18n-text="明天">${i18n.tomorrow}</span>
                      ` +
                            filters.formatDate1(filters.zoneDate(item.matchTime).getTime()) +
                            `
                    </div>`
                            : `<div class="fr">` + filters.formatDate(filters.zoneDate(item.matchTime).getTime()) + ` </div>`
                    }
            </div>
            <div class="box">
              <div class="battle-team fl">
                <p>
                  <img class="logo lazyload match-cover" src="${constant.cdn}/assets/${constant.env}/img/match-cover.png" data-src="${item.hostIcon}" />
                  <span class="ellipsis">${item.hostName}</span>
                </p>
                <p>
                  <img class="logo lazyload match-cover" src="${constant.cdn}/assets/${constant.env}/img/match-cover.png" data-src="${item.guestIcon}" alt />
                  <span class="ellipsis">${item.guestName}</span>
                </p>
              </div>
              <a href="javascript:;" data-id='${item.scheduleId}' class="appoinment ${item.reservationStatus === 1 ? 'use' : ''}">
                ${item.reservationStatus == 1 ? i18n.already_subscribe : i18n.subscribe}
              </a>
            </div>
          </div>`
            })
            $('.appoinment-list .swiper-wrapper').html(html)
            $('.appoinment-list').show()
            common.loadImg('match')

            // 查询我的预约
            if (api.handleIsHadUserLogin()) {
                api.matchReservationList().then((res) => {
                    res.matches.forEach((item) => {
                        $(`.appoinment-list .swiper-slide .appoinment[data-id=${item.scheduleId}]`).addClass('use').html(i18n.already_subscribe) // '已预约'
                    })
                })
            }

            //预约
            $('.appoinment-list .swiper-wrapper .game .appoinment').click(function () {
                if (api.handleLoginJump()) {
                    return
                }
                let id = $(this).attr('data-id')
                let operation = 1
                if ($(this).hasClass('use')) {
                    operation = 2
                }
                const data = {
                    operation: operation,
                    matchId: id,
                }
                api.matchReservation(data).then((res) => {
                    let msg = ''
                    if (operation == 1) {
                        msg = i18n.subscribe_success // '预约成功'
                        $(this).addClass('use').html(i18n.already_subscribe) // '已预约'
                    } else {
                        msg = i18n.subscribe_cancel //'取消预约成功'
                        $(this).removeClass('use').html(i18n.subscribe) // '预约'
                    }
                    Msg({
                        message: msg,
                    })
                })
            })
            appoinmentSwiper.init()
        }
    }
    // 显示赛程
    function showSchedule(data) {
        $('.schedule-text').hide()
        const html = `<div flex="dir:top main:center cross:center"><div class="schedule-img" flex="main:center cross:cener">
                        <div><img class="logo match-cover"
                                src="${data.hostIcon}" alt="">
                        </div>
                        <p> ${data.hostName} VS ${data.guestName} </p>
                        <div><img class="logo match-cover"
                                src="${data.guestIcon}" alt="">
                        </div>
                    </div>
                    <div class="schedule-time">
                        ${filters.formatDate3(filters.zoneDate(data.matchTime).getTime())}
                    </div>
                    <div class="schedule-countdown" flex="main:center cross:cener">
                        <div>
                            <span class="days_cd">0</span>Ngày
                        </div>
                        <div>
                            <span class="hours_cd">0</span> Giờ
                        </div>
                        <div>
                            <span class="minutes_cd">0</span>Phút
                        </div>
                        <div>
                            <span class="seconds_cd">0</span>Giây
                        </div>
                    </div></div>`
        $('.schedule-box').html(html).show()
        // 倒计时
        const matchTime = filters.zoneDate(data.matchTime).getTime()
        if (matchTime - new Date().valueOf() > 0) {
            setInterval(() => {
                let s = (matchTime - new Date().valueOf()) / 1000
                if (s <= 0) {
                    location.reload()
                }
                $('.days_cd').text(Math.floor(s / (3600 * 24)))
                $('.hours_cd').text(Math.floor((s / 3600) % 24))
                $('.minutes_cd').text(Math.floor((s / 60) % 60))
                $('.seconds_cd').text(Math.floor(s % 60))
            }, 1000)
        }
    }
    //显示：推荐视频列表
    function showLiveHotList(data) {
        let vHtml = '',
            hHtml = ''
        data.map((item, index) => {
            // 过滤当前直播间的信息，不重复显示
            if (item.roomNum === roomNum) {
                return
            }
            vHtml += `
        <div class="swiper-slide">
          <a href="${common.roomUrl(item.roomNum)}">
            <img class="cover lazyload live-cover" src="${constant.cdn}/assets/${constant.env}/img/live-cover.png" data-src="${item.cutOutCustomCoverUrl ? item.cutOutCustomCoverUrl : item.cover
                }" data-src-backup="${item.cover}">
            <div class="living">
              <img src="${constant.cdn}/assets/${constant.env}/img/living.gif">
              <span>Live</span>
            </div>
            <div class="bottom">
              <div class="content">${item.title}</div>
            </div>
          </a>
        </div>`

            hHtml += `
      <li>
        <a href="${common.roomUrl(item.roomNum)}">
          <div class="live-item">
            <img class="fm lazyload live-cover" src="${constant.cdn}/assets/${constant.env}/img/live-cover.png" data-src="${item.cutOutCustomCoverUrl ? item.cutOutCustomCoverUrl : item.cover
                }" data-src-backup="${item.cover}" />
            <!-- <div class="live-mask"></div> -->
            <i class="btn-open"></i>
            <div class="top-tag">
              ${item.markType === 1
                    ? `<span class="tag">
                  <i i18n-text="官方">${i18n.official_tag}</i>
                </span>`
                    : item.markType === 2
                        ? `<span class="com">
                  <i i18n-text="推荐">${i18n.recommend_tag}</i>
                </span>`
                        : item.markType === 3
                            ? `<span class="hots">
                  <i i18n-text="火爆">${i18n.hot_tag}</i>
                </span>`
                            : `<span class></span>`
                }
              <div class="living">
                <img src="${constant.cdn}/assets/${constant.env}/img/living.gif">
                <span>Live</span>
              </div>
            </div>
          </div>
          <h4 class="ellipsis">${item.title}</h4>
          <h6>
            <span class="name fl f12">
              <img class="head" src="${item.anchor.icon || constant.cdn + `/assets/${constant.env}/img/avatar.png`}" />
              ${item.anchor.nickName}
            </span>
            <span class="num" >${filters.viewCount(item.viewCount)}</span>
          </h6>
        </a>
      </li>`
        })
        $('.recommend-swiper-container .swiper-wrapper').html(vHtml)
        recommendSwiper.init()
        $('.category .category-list').html(hHtml)
        $('.category').show()
        common.loadImg('live')
    }

    // 显示：跑马灯
    function showMarquee(data) {
        // 跑马灯
        if (data) {
            let temp = data
            temp = temp.replace(/\[football\]/g, (s) => {
                return `<img src="${constant.cdn}/assets/${constant.env}/img/sports/football.png">`
            })
            temp = temp.replace(/\[basketball\]/g, (s) => {
                return `<img src="${constant.cdn}/assets/${constant.env}/img/sports/basketball.png">`
            })

            $('.marquee-container').show()
            $('.marquee-container .marquee-box').html(temp)
            // 根据文案长短计算动画时长
            let width = $('.marquee-container .marquee-box').width()
            let duration = (width * 2 + 1200) / 184.5 + 's'
            $('.marquee-container .marquee-box').css({ 'animation-duration': duration })
        }
    }

    //排行榜切换
    let rankFlag = false
    $('.tab .tab-item').click(function () {
        let $this = $(this)
        if ($this.hasClass('tab-active')) return
        $('.tab .tab-item').removeClass('tab-active')
        $this.addClass('tab-active')

        if ($this.attr('data-id') == '0') {
            $('.chat-panel').fadeIn(150)
            $('.rank-list').hide()
        } else {
            $('.chat-panel').hide()
            $('.rank-list').fadeIn(150)
            if (!rankFlag) {
                rankFlag = true
                rankList()
            }
        }
    })
    //鱼币规则显示
    $('.get-integral').click(function () {
        $('.how-getpoints').fadeIn(150)
    })
    //鱼币规则隐藏
    $('.how-getpoints .close-icon').click(function () {
        $('.how-getpoints').fadeOut(150)
    })
    //关注 or 取消
    $('#follow').click(function () {
        let $this = $(this)
        if ($this.hasClass('no-follow')) {
            getAttention(2, $this)
        } else {
            getAttention(1, $this)
        }
    })
    //发送消息
    $('.send').click(function () {
        if ($('.send').hasClass('send-on')) {
            let msg = $('#textarea .textarea').html()
            sendComment(msg)
        }
    })
    //全屏发送消息
    $('.send-danmu-enter').click(function () {
        let msg = $('#fullScreenInput').html()
        sendComment(msg)
    })
    //回车发送
    $('#textarea .textarea').keyup(function (e) {
        updateCommentCount()
        if (e.keyCode == 13) {
            e.preventDefault()
            let msg = $(this).html()
            sendComment(msg)
        }
    })
    //全屏回车发送
    $('#fullScreenInput').keydown(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault()
            let msg = $(this).html()
            sendComment(msg)
        }
    })
    // 发送聊天信息
    let lastComment = ''
    function sendComment(msg) {
        if (api.handleLoginJump()) {
            return
        }
        msg = filters.sendComment(msg)
        if (!msg) {
            Msg({
                message: i18n.chat_content_null, //'聊天内容不能为空'
            })
            return
        }
        // vi 版本不允许发送的消息内容与上一条消息内容相同
        if (lastComment !== msg) {
            lastComment = msg
        } else {
            Msg({
                message: i18n.comment_repeat_tip,
            })
            return
        }
        // vi 版本的消息内容不能大于 120 个字
        // if (commentLength() > 120) {
        //   Msg({
        //     message: i18n.comment_limit,
        //   })
        //   return
        // }
        const data = {
            sendUid: storeData.userInfo.uid,
            roomNum: roomNum,
            msgType: 1,
            content: msg,
            flag: new Date().getTime(),
        }
        websocket.send(constant.WS_CODE.COMMENT, data)
        storeData.wsLastestComment = data
        $('#textarea .textarea').html('')
        $('#fullScreenInput').html('')
        updateCommentCount()
    }
    //登陆
    $('.noLogin span').click(() => {
        api.handleLoginJump()
    })
    //消息回到底部
    $('.newMsg-tips').click(function () {
        $('#chat-list').animate(
            {
                scrollTop: $('#chat-list>div').height(),
            },
            500,
        )
        $(this).fadeOut(50)
    })
    //聊天框滚动
    $('#chat-list').scroll(function () {
        let $this = $(this)
        if ($this.scrollTop() + $this.height() >= $('#chat-list>div').height()) {
            $('.newMsg-tips').fadeOut(50)
        }
    })
    //屏蔽功能
    $("input[name='shieldCheckbox']").on('change', function () {
        let $this = $(this)
        let id = $this.attr('id')
        let value = $this.attr('value')
        let CheckboxGift = $('#CheckboxGift').is(':checked')
        let CheckboxWc = $('#CheckboxWc').is(':checked')
        let CheckboxAll = $('#CheckboxAll').is(':checked')
        let checked = $this.is(':checked') //是否选中
        if (id == 'CheckboxAll') {
            $("input[name='shieldCheckbox']").prop('checked', checked)
            storeData.shieldGift = checked
            storeData.shieldWc = checked
        } else if (id == 'CheckboxGift') {
            storeData.shieldGift = checked
            if (checked && CheckboxWc) {
                $('#CheckboxAll').prop('checked', checked)
            } else if (!checked && CheckboxAll) {
                $('#CheckboxAll').prop('checked', checked)
            }
        } else if (id == 'CheckboxWc') {
            storeData.shieldWc = checked
            if (checked && CheckboxGift) {
                $('#CheckboxAll').prop('checked', checked)
            } else if (!checked && CheckboxAll) {
                $('#CheckboxAll').prop('checked', checked)
            }
        }
    })
    //阻止鼠标右键默认事件
    $('#chat-list, .dele-msg').bind('contextmenu', function (e) {
        return false
    })
    //显示删除选项
    $('#chat-list').on('mousedown', '.chat-item[data-id]', function (e) {
        if (e.which === 3 && (storeData.userInfo.userType == 3 || (storeData.userInfo.userType == 2 && storeData.userInfo.uid == storeData.room.anchor.uid))) {
            let $this = $(this)
            let $scroll = $('#chat-list')
            let $del = $('.dele-msg')
            let gapX = e.clientX - $scroll.offset().left - $del.width() / 2 + 'px'
            let gapY = e.clientY - $scroll.offset().top - $del.height() / 2 - 12 + 'px'
            $this.addClass('right-click')
            $del.css('left', gapX)
            $del.css('top', gapY)
            $del.attr('data-id', $this.attr('data-id')).fadeIn(50)
        }
        return false
    })
    //删除消息
    $('.dele-msg').click(function (e) {
        let id = $(this).attr('data-id')
        const data = {
            roomNum: roomNum,
            msgId: Number(id),
        }
        websocket.send(constant.WS_CODE.COMMENT_DELETE, data)
    })
    // 禁言列表显示
    $('.forbidden-select>div').click(function () {
        let $this = $(this)
        $this.siblings().children('.forbidden-select-opt').fadeOut(150)
        $this.children('.forbidden-select-opt').fadeIn(150)
        return false
    })
    // 禁言弹窗关闭
    $('.forbidden-close').click(function () {
        $(this).parent().fadeOut(150)
    })
    // 选中禁言选项
    $('.forbidden-select-opt div').click(function () {
        let $this = $(this)
        let text = $(this).text()
        let id = $(this).attr('data-id')
        switch (id) {
            case '0': {
                forbiddenTime = 2 * 3600
                break
            }
            case '1': {
                forbiddenTime = 24 * 3600
                break
            }
            case '2': {
                forbiddenTime = 3 * 24 * 3600
                break
            }
            case '3': {
                forbiddenTime = 30 * 24 * 3600
                break
            }
            case '4': {
                forbiddenTime = -1
                break
            }
            default:
        }
        if ($this.parent().parent().hasClass('forbidden-room')) {
            forbiddenType = 1
            text = i18n.put_user_whole + '<span>' + text + '</span>' + i18n.right // 将该用户在直播间 + text + 吗？
        } else if ($this.parent().parent().hasClass('forbidden-all')) {
            forbiddenType = 2
            text = i18n.put_user_room + '<span>' + text + '</span>' + i18n.right // 将该用户在全站 + text + 吗？
        }
        $('.forbidden-tip').hide()
        $('.forbidden-sure-text').html(text)
        $('.forbidden-sure-tip').fadeIn(150)
    })
    // 关闭确认选项
    $('.forbidden-sure-close').click(function () {
        $('.forbidden-sure-tip').fadeOut(150)
    })
    // 确认禁言选项
    $('.forbidden-sure-btn').click(function () {
        $('.forbidden-sure-tip').fadeOut(150)
        apiForbidden(1, forbiddenType, forbiddenId)
    })
    // 禁言弹窗
    $('#chat-list').on('click', '.forbidden-user', function (e) {
        e.stopPropagation()
        if (!(storeData.userInfo.userType == 3 || (storeData.userInfo.userType == 2 && storeData.userInfo.uid == storeData.room.anchor.uid))) {
            return false
        }
        let $this = $(this)
        let id = $this.attr('data-id')
        let commentUserList = storeData.commentUserList
        apiForbiddenStatus(id).then((data) => {
            forbiddenId = id
            if (data.status == 2) {
                let $forbidden = $('.forbidden-tip')
                commentUserList[id].icon ? $('.forbidden-tip .user-avatar img').attr('src', commentUserList[id].icon) : ''
                commentUserList[id].nickName ? $('.forbidden-tip .user-name').html(commentUserList[id].nickName) : ''
                if (storeData.userInfo.userType == 3) {
                    $('.forbidden-all').show()
                    $forbidden.fadeIn(150)
                } else {
                    $('.forbidden-all').hide()
                    $forbidden.fadeIn(150)
                }
            } else if (data.status == 1) {
                let $forbidden = $('.forbidden-user-tip')
                let text = ''
                commentUserList[id].icon ? $('.forbidden-user-tip .user-avatar img').attr('src', commentUserList[id].icon) : ''
                commentUserList[id].nickName ? $('.forbidden-user-tip .user-name').html(commentUserList[id].nickName) : ''
                text = data.type === 1 ? i18n.the_room : i18n.whole_site // '本直播间' : '全站'
                text = text + (data.time === -1 ? i18n.forever + i18n.ban : i18n.ban_to + filters.forbiddenTime(data.time)) // '永久禁言' '禁言至'
                forbiddenType = data.type
                $('.forbidden-user-tip .user-text').html(text)
                if (data.type === 1 || (data.type === 2 && storeData.userInfo.userType == 3)) {
                    $('.forbidden-user-tip .user-btn').show()
                }
                $forbidden.fadeIn(150)
            }
        })
        return false
    })
    // 解除禁言
    $('.forbidden-user-tip .user-btn').click(function () {
        apiForbidden(2, forbiddenType, forbiddenId)
        $(this).parent().fadeOut(150)
    })

    // 点击消息体
    $('.liveRoom-wrapper .chat .chat-list').on('click', '.chat-item:not(.sys-msg)', function () {
        let nickname = $(this).find('.user-name').text().split(':')[0]
        if (nickname) {
            let $textarea = $('.liveRoom-wrapper .chat .chat-bottom .inputBox .textarea')
            $textarea.append(`<img class="chat-point-img" src="${constant.cdn}/assets/${constant.env}/img/chat-point.svg">“${nickname}”&nbsp;&nbsp;`)
            editor.cursorEnd($textarea[0])
        }
        updateCommentCount()
    })

    // 更新字数
    function updateCommentCount() {
        let length = commentLength()
        $('.chat-bottom .count-box .text-count').text(length)
    }
    // 聊天字数
    function commentLength() {
        return filters.sendComment($('.liveRoom-wrapper #textarea .textarea').html()).length
    }

    // 使聊天框仅能复制纯文本
    editor.onlyPasteText($('.liveRoom-wrapper .chat .chat-bottom .inputBox .textarea')[0])
    editor.onlyPasteText($('#fullScreenInput')[0])

    // 离开页面监听
    common.closePageListener(() => {
        websocket.send(constant.WS_CODE.ROOM_LEAVE, { roomNum })
    })

    // 私聊窗口
    let privateFlag = false
    $('.private-chat-btn').click(function () {
        if (!api.handleLoginJump()) {
            $('.private-chat').show()
            if (!privateFlag) {
                privateFlag = true
                $('.chat-loading').show()
                // 查询消息内容
                privateChat.chatRecord(storeData.friend.openId, true).then(() => {
                    $('.chat-loading').hide()
                    privateChat.insertWelcome()
                    privateChat.startReceiveChat()
                })
            } else {
                privateChat.startReceiveChat(true)
            }
        }
    })

    console.log('$liveRoom end')
})
