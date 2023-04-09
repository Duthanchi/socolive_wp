import constant from 'utils/constant'
import api from 'utils/api'
import zhCountryCodeJson from 'json/zh_countryCode.json'
import enCountryCodeJson from 'json/en_countryCode.json'
import common from 'utils/common'
import { Msg } from 'utils/components'
import { storeData } from 'utils/store'
import i18n from 'utils/i18n'
import validate from 'utils/validate'

// 这个必须放在这里，每个页面都需要检测有没有 sessionId
if (!storeData.sessionId) {
    api.handleGuestLogin()
}

// 特殊区号处理，如果是特殊区号，则自动输入验证码并隐藏验证码输入
common.handleSpecialCodeByPhone('.register-window')

$(function () {
    console.log('$header start')
    common.loadImg()

    // 判断是否要显示下载APP和添加到主屏幕
    common.showDownload(function () {
        $('.right-fix .code').show()
        $('.header-menu .download-menu').show()
    })

    let userInfo = storeData.userInfo,
        isSendCode = false, // 是否已经发送
        needSendCode = true, // 是否可以发送
        codeTime = 60, // 验证码秒数
        sendCodeTimer = null,
        // 登录框参数
        login_isActiveSubmit = false,
        // 注册框参数
        register_isActiveSubmit = false

    $('.header-wrapper .apply-menu').click(function () {
        // if (api.handleLoginJump()) {
        //   return
        // }
        // window.open('/pages/my/anchor.html')
        // window.open('https://forms.gle/RN5fqTogWcETkY7c8')
        window.open('https://socolive.news/ung-tuyen-binh-luan-vien/')
    })

    $('.download-menu a').attr('href', constant.downloadAppUrl)
    if (storeData.loginWindow == 1) {
        showWindow(1)
        storeData.loginWindow = 0
    }

    changeHeaderByScroll()
    //监听页面滚动
    $(window).scroll(() => {
        changeHeaderByScroll()
    })
    function changeHeaderByScroll() {
        if ($('.index-wrapper').length > 0 || $('.liveRoom-wrapper').length > 0) {
            var winPos = $(window).scrollTop() //屏幕位置
            if (winPos > 1) {
                changeHeader(true)
            } else {
                changeHeader(false)
            }
        } else {
            changeHeader(true)
        }
    }
    function changeHeader(flag) {
        if (flag) {
            // $('.header-logo').attr('src', `${constant.cdn}/assets/${constant.env}/img/logo2.png?v=20220422`)
            if ($('.index-wrapper').length > 0) {
                $('.header-wrapper').addClass('active')
                $('.header-logo').show()
                $('.header-logo-active').hide()
            } else {
                $('.header-wrapper').addClass('active-white')
                $('.header-logo').hide()
                $('.header-logo-active').show()
            }
        } else {
            $('.header-wrapper').removeClass('active').removeClass('active-white')
            $('.header-logo').show()
            $('.header-logo-active').hide()
            // $('.header-logo').attr('src', `${constant.cdn}/assets/${constant.env}/img/logo.png?v=20220509`)
        }
    }

    // 首页、分类、赛程、关注、预约、用户头像跳转
    $('.header-menu')
        .find('.home-menu')
        .click(function () {
            if (window.location.origin == constant.roomDomain) {
                window.location.href = constant.indexDomain
            } else {
                window.location.href = '/'
            }
        })
    $('.header-menu')
        .find('.match-menu')
        .click(function () {
            if (window.location.origin == constant.roomDomain) {
                window.location.href = constant.indexDomain + '/match.html'
            } else {
                window.location.href = '/match.html'
            }
        })
    $('.header-menu')
        .find('.highlights-menu')
        .click(function () {
            if (window.location.origin == constant.roomDomain) {
                window.location.href = constant.indexDomain + '/highlights.html'
            } else {
                window.location.href = '/highlights.html'
            }
        })
    $('.header-menu')
        .find('.news-menu')
        .click(function () {
            if (window.location.origin == constant.roomDomain) {
                window.location.href = constant.indexDomain + '/news.html?type=activity'
            } else {
                window.location.href = '/news.html?type=activity'
            }
        })
    $('.header-wrapper')
        .find('.header-subscribe')
        .click(function () {
            if (window.location.origin == constant.roomDomain) {
                window.location.href = constant.indexDomain + '/pages/my/subscribe.html'
            } else {
                window.location.href = '/pages/my/subscribe.html'
            }
        })
    $('.header-wrapper')
        .find('.header-concern')
        .click(function () {
            if (window.location.origin == constant.roomDomain) {
                window.location.href = constant.indexDomain + '/pages/my/concern.html'
            } else {
                window.location.href = '/pages/my/concern.html'
            }
        })
    $('.header-avatar .special-avatar').click(function () {
        if (window.location.origin == constant.roomDomain) {
            window.location.href = constant.indexDomain + '/pages/my/home.html'
        } else {
            window.location.href = '/pages/my/home.html'
        }
    })
    // 个人中心、我的关注、我的预约、我的消息跳转
    $('.avatar-submenu')
        .find('.ucenter')
        .click(function () {
            if (window.location.origin == constant.roomDomain) {
                window.location.href = constant.indexDomain + '/pages/my/home.html'
            } else {
                window.location.href = '/pages/my/home.html'
            }
        })
    $('.avatar-submenu')
        .find('.concern')
        .click(function () {
            if (window.location.origin == constant.roomDomain) {
                window.location.href = constant.indexDomain + '/pages/my/concern.html'
            } else {
                window.location.href = '/pages/my/concern.html'
            }
        })
    $('.avatar-submenu')
        .find('.subscribe')
        .click(function () {
            if (window.location.origin == constant.roomDomain) {
                window.location.href = constant.indexDomain + '/pages/my/subscribe.html'
            } else {
                window.location.href = '/pages/my/subscribe.html'
            }
        })
    $('.avatar-submenu')
        .find('.msg')
        .click(function () {
            if (window.location.origin == constant.roomDomain) {
                window.location.href = constant.indexDomain + '/pages/my/message.html'
            } else {
                window.location.href = '/pages/my/message.html'
            }
        })
    $('.avatar-submenu')
        .find('.anchor-center')
        .click(function () {
            if (window.location.origin == constant.roomDomain) {
                window.location.href = constant.indexDomain + '/pages/anchor/settings.html'
            } else {
                window.location.href = '/pages/anchor/settings.html'
            }
        })

    // 隐藏
    $('body').click(function () {
        $('.country-code-list').hide()
        $('.logout-confirm').hide()
    })

    // 如果是登录状态，显示登录内容
    if (api.handleIsHadUserLogin()) {
        $('.header-right .had-login').show()
        $('.header-avatar .avatar')
            .attr('data-src', userInfo.cutOutIcon ? userInfo.cutOutIcon : userInfo.icon)
            .attr('data-src-backup', userInfo.icon)
        $('.avatar-submenu .avatar')
            .attr('data-src', userInfo.cutOutIcon ? userInfo.cutOutIcon : userInfo.icon)
            .attr('data-src-backup', userInfo.icon)
        $('.avatar-submenu .nickname').text(userInfo.nickName)
        $('.avatar-submenu .cur-lv').css({
            background: `url('${`/assets/${constant.env}/img/lv${userInfo.growDto.id < 1 ? 1 : userInfo.growDto.id}.png`}') no-repeat center`,
            'background-size': '30px 16px',
        })
        $('.avatar-submenu .next-lv').css({
            background: `url('${`/assets/${constant.env}/img/lv${userInfo.growDto.id == 10 ? 10 : userInfo.growDto.id + 1}.png`}') no-repeat center`,
            'background-size': '30px 16px',
        })
        $('.avatar-submenu .cur-grow').text(userInfo.grow)
        $('.avatar-submenu .max-grow').text(userInfo.growDto.nextMinGrom)
        $('.avatar-submenu .diff-grow').text(userInfo.growDto.nextMinGrom - userInfo.grow)
        $('.avatar-submenu .grow-progress').attr({
            max: userInfo.growDto.nextMinGrom,
            value: userInfo.grow,
        })
        if (userInfo.userType == 2) {
            $('.avatar-submenu .identity').text(i18n.anchor) // '主播'
            $('.avatar-submenu .identity').show()
            $('.avatar-submenu').find('.anchor-center').show()
        }
        if (userInfo.userType == 3) {
            $('.avatar-submenu .identity').text(i18n.admin) // '超管'
            $('.avatar-submenu .identity').show()
        }
        // 预约和预约通知
        if (storeData.subscribeList && storeData.subscribeList.length > 0) {
            let str = ''
            try {
                storeData.subscribeList.forEach((item) => {
                    let str_avatar = ''
                    item.anchors.map((item2) => {
                        str_avatar += `<img class="avatar lazyload" src="${constant.cdn}/assets/${constant.env}/img/avatar.png" data-src="${
                            item2.cutOutIcon ? item2.cutOutIcon : item2.icon
                        }" data-src-backup="${item2.icon}"  data-roomNum="${item2.anchor.roomNum}">`
                    })
                    str += `<div class="subscribe-card">
          <p class="ellipsis">[${item.categoryName}]${item.hostName}VS${item.guestName}</p>
          <div class="avatar-list">
          ${str_avatar}
          </div>
        </div>`
                })
            } catch (e) {
                console.log(e)
            }
            $('.header-wrapper .subscribe-data').find('.subscribe-data-box').append(str)
            $('.header-wrapper .subscribe-data')
                .find('.subscribe-data-box')
                .on('click', '.avatar', function () {
                    let roomNum = $(this).attr('data-roomNum')
                    window.location.href = common.roomUrl(roomNum)
                })
            $('.header-wrapper .subscribe-data').show()
            $('.header-wrapper .subscribe-none').hide()
            $('.subscribe-submenu').css('right', '70px')

            // 点击预约更多
            $('.header-wrapper .subscribe-data')
                .find('.more')
                .click(function () {
                    location.href = '/pages/my/subscribe.html'
                })
        } else {
            $('.header-wrapper .subscribe-data').hide()
            $('.header-wrapper .subscribe-none').show()
        }
        // 关注
        api.liveAttentionList().then((res) => {
            if (res) {
                if (!res.comperes) {
                    res.comperes = []
                }
                storeData.concernList = res.comperes
            }
        })
    } else {
        $('.header-right .no-login').show()
    }

    $('.header-logo').click(function () {
        if (window.location.origin == constant.roomDomain) {
            window.location.href = constant.indexDomain
        } else {
            window.location.href = '/'
        }
    })
    // 区号
    showCountryCode()

    // 二维码
    $('.download-menu, .download-submenu').mouseover(function () {
        $('.download-submenu').show()
    })
    $('.download-menu, .download-submenu').mouseout(function () {
        $('.download-submenu').hide()
    })

    // 关注、预约、头像 鼠标移入移出（登录后）
    $('.header-subscribe, .subscribe-submenu').mouseover(function () {
        $('.subscribe-submenu').show()
    })
    $('.header-subscribe, .subscribe-submenu').mouseout(function () {
        $('.subscribe-submenu').hide()
    })
    $('.header-concern, .concern-submenu').mouseover(function () {
        $('.concern-submenu').show()
    })
    $('.header-concern, .concern-submenu').mouseout(function () {
        $('.concern-submenu').hide()
    })
    $('.header-avatar, .avatar-submenu').mouseover(function () {
        $('.avatar-submenu').show()
    })
    $('.header-avatar, .avatar-submenu').mouseout(function () {
        $('.avatar-submenu').hide()
    })
    $('.grow-progress, .grow-tip').mouseover(function () {
        $('.grow-tip').show()
    })
    $('.grow-progress, .grow-tip').mouseout(function () {
        $('.grow-tip').hide()
    })

    // 弹出退出登录框
    $('.btn-logout').click(function (e) {
        common.stopBubble(e)
        $('.logout-confirm').show()
    })
    // 退出登录
    $('.logout-confirm .yes').click(function () {
        $('.logout-confirm').hide()
        api.handleUserLogout().then((res) => {})
    })
    // 取消退出
    $('.logout-confirm .no').click(function () {
        $('.logout-confirm').hide()
        return false
    })

    // *** 登录注册框
    // 登录注册区号列表显示
    $('.login-window, .register-window')
        .find('.country-code-box')
        .click(function (e) {
            common.stopBubble(e)
            $(this).closest('.input-group').find('.country-code-list').show()
        })
    $('.login-window, .register-window')
        .find('.country-code-title')
        .click(function (e) {
            // 防止点击 title，进行隐藏区号列表
            common.stopBubble(e)
        })
    // 选中区号
    $('.login-window, .register-window')
        .find('.country-code-item')
        .click(function () {
            let $temp_countryCode = $(this).closest('.input-group').find('.country-code')
            let $temp_phone = $(this).closest('.input-group').find('.input-phone')
            $temp_countryCode.text($(this).find('.right').text())
            if ($temp_countryCode.text() == '+86') {
                $temp_phone.attr('maxlength', 11)
            } else {
                $temp_phone.attr('maxlength', 20)
            }
        })
    // 显示登录框
    $('.header-login, .login-jump').click(function () {
        closeWindow(2)
        showWindow(1)
    })
    // 显示注册框
    $('.header-register, .register-jump').click(function () {
        closeWindow(1)
        showWindow(2)
    })
    // 关闭登录框
    $('.login-window .close').click(function () {
        closeWindow(1)
    })
    // 关闭注册框
    $('.register-window .close').click(function () {
        closeWindow(2)
    })
    // 点击眼睛
    $('.login-window .ali-zhenyan').click(function () {
        eyeHandler(false, 1)
    })
    $('.login-window .ali-biyan').click(function () {
        eyeHandler(true, 1)
    })
    $('.register-window .ali-zhenyan').click(function () {
        eyeHandler(false, 2)
    })
    $('.register-window .ali-biyan').click(function () {
        eyeHandler(true, 2)
    })
    // 发送验证码(注册)
    $('.register-window .btn-verify').click(function () {
        // 如果已经发送验证码，禁止往下走
        if (!needSendCode) {
            return
        }
        const data = {
            countryCode: $('.register-window .country-code').text(),
            phone: $('.register-window .input-phone').val(),
            type: 1,
        }
        api.getSmsCode(data).then((res) => {
            isSendCode = true
            needSendCode = false
            codeTime = 60
            sendCodeTimer = setInterval(() => {
                codeTime--
                $('.register-window .verify-text').text(codeTime + 's')
                if (codeTime <= 0) {
                    needSendCode = true
                    if (isSendCode) {
                        $('.register-window .verify-text').text(i18n.input_verify_resend) // '重新获取'
                    } else {
                        $('.register-window .verify-text').text(i18n.input_verify_btn) // '获取验证码'
                    }
                    clearInterval(sendCodeTimer)
                }
            }, 1000)
        })
    })
    // 忘记密码
    $('.login-window')
        .find('.forget')
        .click(function () {
            location.href = '/pages/forgetPwd.html'
        })
    // 登录输入检验
    $('.login-window')
        .find('input')
        .on('input', function () {
            checkLoginInput()
        })
    // 注册输入检验
    $('.register-window')
        .find('input')
        .on('input', function () {
            checkRegisterInput()
        })
    // 检查登录 input 并根据 input 改变 submit 状态
    function checkLoginInput() {
        let $container = getTypeContainer('login')
        let countryCode = $container.find('.country-code').text()
        let phone = $container.find('.input-phone').val()
        let password = $container.find('.input-password').val()
        let account = $container.find('.input-account').val()
        if (phone) {
            $('.login-window .account-box .input-group').addClass('readonly')
            $('.login-window .account-box .input-account').attr('readonly', true)
            $container.find('.account-box>.error-tip>span').hide()
        } else {
            $('.login-window .account-box .input-group').removeClass('readonly')
            $('.login-window .account-box .input-account').attr('readonly', false)
        }
        if (account) {
            $('.login-window .phone-box .input-group').addClass('readonly')
            $('.login-window .phone-box .input-phone').attr('readonly', true)
            $container.find('.phone-box>.error-tip>span').hide()
        } else {
            $('.login-window .phone-box .input-group').removeClass('readonly')
            $('.login-window .phone-box .input-phone').attr('readonly', false)
        }

        // ***判断是否隐藏错误提示
        let flag = []
        if (validate.password(password)) {
            $container.find('.password-box>.error-tip>span').hide()
            flag['password'] = true
        }
        if (getType('login') === 'account') {
            if (validate.account(account)) {
                $container.find('.account-box>.error-tip>span').hide()
                flag['account'] = true
            }
            if (flag['account'] && flag['password']) {
                changeSubmitStatus(true, 1)
            } else {
                changeSubmitStatus(false, 1)
            }
        } else if (getType('login') === 'phone') {
            if (validate.specialCountryCodePhone(countryCode, phone)) {
                $container.find('.phone-box>.error-tip>span').hide()
                flag['countryCodePhone'] = true
            }
            if (flag['countryCodePhone'] && flag['password']) {
                changeSubmitStatus(true, 1)
            } else {
                changeSubmitStatus(false, 1)
            }
        }
    }
    // 检查注册 input 并根据 input 改变 submit 状态
    function checkRegisterInput() {
        let $container = getTypeContainer('register')
        let countryCode = $container.find('.country-code').text()
        let phone = $container.find('.input-phone').val()
        let smsCode = $container.find('.input-verify').val()
        let nickname = $container.find('.input-nickname').val()
        let password = $container.find('.input-password').val()
        let check = $container.find('.check-box .input-check').val()
        let account = $container.find('.input-account').val()
        if (phone) {
            $('.register-window .account-box .input-group').addClass('readonly')
            $('.register-window .account-box .input-account').attr('readonly', true)
            if (!common.isSpecialCode(countryCode)) {
                $('.register-window .verify-box').show()
            }
            $('.register-window .check-box').show()
            $container.find('.account-box>.error-tip>span').hide()
        } else {
            $('.register-window .verify-box').hide()
            $('.register-window .check-box').hide()
            $('.register-window .account-box .input-group').removeClass('readonly')
            $('.register-window .account-box .input-account').attr('readonly', false)
        }
        if (account) {
            $('.register-window .phone-box .input-group').addClass('readonly')
            $('.register-window .phone-box .input-phone').attr('readonly', true)
            $container.find('.phone-box>.error-tip>span').hide()
            $container.find('.captcahr-box').show()
        } else {
            $('.register-window .phone-box .input-group').removeClass('readonly')
            $('.register-window .phone-box .input-phone').attr('readonly', false)
            $container.find('.captcahr-box').hide()
        }

        // ***判断是否隐藏错误提示
        let flag = []
        if (validate.nickname(nickname)) {
            $container.find('.nickname-box>.error-tip>span').hide()
            flag['nickname'] = true
        }
        if (validate.password(password)) {
            $container.find('.password-box>.error-tip>span').hide()
            flag['password'] = true
        }
        // ***判断是否激活submit
        if (getType('register') === 'account') {
            if (validate.account(account)) {
                $container.find('.account-box>.error-tip>span').hide()
                flag['account'] = true
            }
            if (flag['nickname'] && flag['password'] && flag['account']) {
                changeSubmitStatus(true, 2)
            } else {
                changeSubmitStatus(false, 2)
            }
        } else if (getType('register') === 'phone') {
            if (validate.countryCodePhone(countryCode, phone)) {
                $container.find('.phone-box>.error-tip>span').hide()
                flag['countryCodePhone'] = true
            }
            if (validate.smsCode(smsCode)) {
                $container.find('.verify-box>.error-tip>span').hide()
                flag['smsCode'] = true
            }
            if (validate.imgCode(check)) {
                $container.find('.check-box>.error-tip>span').hide()
                flag['check'] = true
            }
            if (flag['countryCodePhone'] && flag['smsCode'] && flag['nickname'] && flag['password'] && flag['check']) {
                changeSubmitStatus(true, 2)
            } else {
                changeSubmitStatus(false, 2)
            }
        }
    }

    function checkRemeberLogin() {
        if (storeData.remeberLogin && Object.getOwnPropertyNames(storeData.remeberLogin).length !== 0) {
            if (storeData.remeberLogin.phone && storeData.remeberLogin.phone.length > 0) {
                $('.login-window .window-inner').find('.country-code').text(storeData.remeberLogin.countryCode) // '+86'
                $('.login-window .window-inner').find('.input-phone').val(storeData.remeberLogin.phone)
                $('.login-window .window-inner').find('.input-password').val(common.aesCbcDecrypt(storeData.remeberLogin.password, constant.remeberKey))
                $('.login-window .window-inner').find('.account-box .input-group').addClass('readonly')
            } else {
                $('.login-window .window-inner').find('.input-account').val(storeData.remeberLogin.account)
                $('.login-window .window-inner').find('.input-password').val(common.aesCbcDecrypt(storeData.remeberLogin.password, constant.remeberKey))
                $('.login-window .window-inner').find('.phone-box .input-group').addClass('readonly')
            }
            $('.login-window .remeber-box .gou').addClass('active')
            changeSubmitStatus(true, 1)
        }
    }
    checkRemeberLogin()

    // 错误提示
    $('.header-window')
        .find('.input-password')
        .blur(function () {
            if (!validate.password($(this).val())) {
                $(this).closest('.input-group').next('.error-tip').find('span').show()
            }
        })
    $('.header-window')
        .find('.input-account')
        .blur(function () {
            if (!validate.account($(this).val())) {
                $(this).closest('.input-group').next('.error-tip').find('span').show()
            }
            getTypeContainer('register').find('.captcahr-box .check-img').click()
        })
    $('.login-window')
        .find('.input-phone')
        .blur(function () {
            let $group = $(this).closest('.input-group')
            if (!validate.specialCountryCodePhone($group.find('.country-code').text(), $(this).val())) {
                $(this).closest('.input-group').next('.error-tip').find('span').show()
            }
        })
    $('.register-window')
        .find('.input-phone')
        .blur(function () {
            let $group = $(this).closest('.input-group')
            if (!validate.countryCodePhone($group.find('.country-code').text(), $(this).val())) {
                $(this).closest('.input-group').next('.error-tip').find('span').show()
            }
            if (getType('register') === 'phone') {
                getTypeContainer('register').find('.check-box .check-img').click()
            }
        })
    $('.register-window .input-verify').blur(function () {
        if (!validate.smsCode($(this).val())) {
            $(this).closest('.input-group').next('.error-tip').find('span').show()
        }
    })
    $('.register-window .input-nickname').blur(function () {
        if (!validate.nickname($(this).val())) {
            $(this).closest('.input-group').next('.error-tip').find('span').show()
        }
    })
    $('.register-window')
        .find('.check-box .input-check')
        .blur(function () {
            if (!validate.imgCode($(this).val())) {
                $(this).closest('.input-group').next('.error-tip').find('span').show()
            }
        })
    $('.register-window')
        .find('.captcahr-box .input-check')
        .blur(function () {
            if (!validate.imgCode($(this).val())) {
                $(this).closest('.input-group').next('.error-tip').find('span').show()
            }
        })

    // 用户协议
    $('.login-agree>.highlight, .register-agree>.highlight').click(function () {
        window.open('/agreement.html')
    })
    // 忘记密码
    $('.agreement .forget').click(function () {
        window.open('/pages/forgetPwd.html')
    })
    // 获取注册类型/登录类型（register/login）
    function getType(flag) {
        let type = ''
        if ($(`.${flag}-window .phone-box .input-group`).hasClass('readonly')) {
            type = 'account'
        }
        if ($(`.${flag}-window .account-box .input-group`).hasClass('readonly')) {
            type = 'phone'
        }
        return type
    }
    function getTypeContainer(flag) {
        return $(`.${flag}-window .type-content`)
    }


    // 登录提交
    $('.login-window .submit').click(function () {
        let $container = getTypeContainer('login')
        if (!login_isActiveSubmit) {
            return
        }
        let pwdType = 2
        if (constant.env === 'fy' || constant.env === 'sy' || constant.env === '88') {
            pwdType = 1
        }
        let pwd = common.md5Pwd($container.find('.input-password').val(), pwdType)
        if (getType('login') === 'account') {
            const data = {
                accountType: 2,
                loginName: $container.find('.input-account').val(),
                // 手动登录
                loginMode: 1,
                // 密码登录
                loginType: 1,
                password: pwd,
                pwdType: pwdType,
            }
            remeberLogin()
            api.handleUserLogin(data)
                .then((res) => {
                    closeWindow(1)
                })
                .catch((err) => {})
        } else if (getType('login') === 'phone') {
            const data = {
                accountType: 1,
                countryCode: $container.find('.country-code').text(),
                phone: $container.find('.input-phone').val(),
                // 手动登录
                loginMode: 1,
                // 密码登录
                loginType: 1,
                password: pwd,
                pwdType: pwdType,
            }
            remeberLogin()
            api.handleUserLogin(data)
                .then((res) => {
                    closeWindow(1)
                })
                .catch((err) => {})
        }
    })
    // 判断是否记住密码
    function remeberLogin() {
        if ($('.login-window .remeber-box .gou').length > 0 && $('.login-window .remeber-box .gou').hasClass('active')) {
            let $container = getTypeContainer('login')
            let obj = {}
            if ($container.find('.input-account').val()) {
                obj.account = $container.find('.input-account').val()
            } else {
                obj.countryCode = $container.find('.country-code').text()
                obj.phone = $container.find('.input-phone').val()
            }
            obj.password = common.aesCbcEncrypt($container.find('.input-password').val(), constant.remeberKey)
            storeData.remeberLogin = obj
        } else {
            storeData.remeberLogin = {}
        }
    }
    // 注册提交
    $('.register-window .submit').click(function () {
        let $container = getTypeContainer('register')
        if (!register_isActiveSubmit) {
            return
        }
        if (!validate.submitNickname($container.find('.input-nickname').val())) {
            return
        }

        let pwdType = 2
        if (constant.env === 'fy' || constant.env === 'sy' || constant.env === '88') {
            pwdType = 1
        }
        let pwd = common.md5Pwd($container.find('.input-password').val(), pwdType)
        if (getType('register') === 'account') {
            const regData = {
                accountType: 2,
                loginName: $container.find('.input-account').val(),
                password: pwd,
                nickName: $container.find('.input-nickname').val(),
                pwdType: pwdType,
            }
            api.handleUserRegister(regData).then((res) => {
                Msg({
                    message: i18n.register + i18n.success, // '注册成功'
                })
                closeWindow(2)
            })
        } else if (getType('register') === 'phone') {
            const data = {
                countryCode: $container.find('.country-code').text(),
                phone: $container.find('.input-phone').val(),
                type: 1,
                smsCode: $container.find('.input-verify').val(),
            }
            api.checkSmsCode(data)
                .then((res) => {
                    const data2 = {
                        accountType: 1,
                        countryCode: $container.find('.country-code').text(),
                        phone: $container.find('.input-phone').val(),
                        smsType: 1,
                        smsCode: $container.find('.input-verify').val(),
                        password: pwd,
                        nickName: $container.find('.input-nickname').val(),
                        pwdType: pwdType,
                        kaptcha: $container.find('.input-phone').val()
                            ? $container.find('.check-box .input-check').val()
                            : $container.find('.captcahr-box .input-check').val(),
                    }
                    api.handleUserRegister(data2)
                        .then((res) => {
                            Msg({
                                message: i18n.register + i18n.success, // '注册成功'
                            })
                            closeWindow(2)
                        })
                        .catch((err) => {
                            $container.find('.check-box .check-img').click()
                        })
                })
                .catch((err) => {
                    $container.find('.check-box .check-img').click()
                })
        }
    })
    // 初始化登录注册 input
    function initWindowInput(type) {
        if (type == 1) {
            $('.login-window .input-account').val('')
            $('.login-window .input-phone').val('')
            $('.login-window .input-password').val('')
            $('.login-window .country-code').text(i18n.country_code) // '+86'
            eyeHandler(false, 1)
            changeSubmitStatus(false, 1)
            $('.login-window').find('.error-tip>span').hide()
            checkRemeberLogin()
        }
        if (type == 2) {
            $('.register-window .input-account').val('')
            $('.register-window .input-phone').val('')
            $('.register-window .input-password').val('')
            $('.register-window .input-nickname').val('')
            $('.register-window .input-verify').val('')
            $('.register-window .country-code').text(i18n.country_code) // '+86'
            $('.register-window').find('.input-check').val('')
            eyeHandler(false, 2)
            changeSubmitStatus(false, 2)
            $('.register-window').find('.error-tip>span').hide()
            isSendCode = false
        }
    }
    // 眼睛
    function eyeHandler(flag, type) {
        if (flag) {
            if (type == 1) {
                $('.login-window .input-password').attr('type', 'text')
                $('.login-window .ali-zhenyan').show()
                $('.login-window .ali-biyan').hide()
            }
            if (type == 2) {
                $('.register-window .input-password').attr('type', 'text')
                $('.register-window .ali-zhenyan').show()
                $('.register-window .ali-biyan').hide()
            }
        } else {
            if (type == 1) {
                $('.login-window .input-password').attr('type', 'password')
                $('.login-window .ali-zhenyan').hide()
                $('.login-window .ali-biyan').show()
            }
            if (type == 2) {
                $('.register-window .input-password').attr('type', 'password')
                $('.register-window .ali-zhenyan').hide()
                $('.register-window .ali-biyan').show()
            }
        }
    }
    // 显示区号
    function showCountryCode() {
        let codeList = i18n.language === 'zh' ? zhCountryCodeJson : enCountryCodeJson // 区号列表
        let str = ''
        for (let i = 0; i < codeList.length; i++) {
            str += `<li class="country-code-title"><span>${codeList[i].tag}</span></li>`
            let tempList = codeList[i].list
            for (let j = 0; j < tempList.length; j++) {
                if (i18n.language === 'zh') {
                    str += `<li class="country-code-item"><span class="left">${tempList[j].countryName}</span><span class="right">${tempList[j].countryCode}</span></li>`
                } else {
                    str += `<li class="country-code-item"><span class="left">${tempList[j].countryNameUS}</span><span class="right">${tempList[j].countryCode}</span></li>`
                }
            }
        }
        $('.login-window').find('.country-code-list ul').html(str)
        $('.register-window').find('.country-code-list ul').html(str)
    }
    // 改变 submit 状态
    function changeSubmitStatus(isActive, type) {
        if (isActive) {
            if (type == 1) {
                login_isActiveSubmit = true
            }
            if (type == 2) {
                register_isActiveSubmit = true
            }
        } else {
            if (type == 1) {
                login_isActiveSubmit = false
            }
            if (type == 2) {
                register_isActiveSubmit = false
            }
        }
    }
    // 显示登录注册框
    function showWindow(type) {
        if (type == 1) {
            $('.login-window').show()
            initWindowInput(1)
            closeWindow(2)
        } else if (type == 2) {
            $('.register-window').show()
            initWindowInput(2)
            closeWindow(1)
        }
        $('.header-modal').show()
    }
    // 关闭登录注册框
    function closeWindow(type) {
        if (type == 1) {
            initWindowInput(1)
            $('.login-window').hide()
        }
        if (type == 2) {
            initWindowInput(2)
            $('.register-window').hide()
        }
        $('.header-modal').hide()
    }
    common.loadImg('avatar', '.header-wrapper ')

    // 验证码图片点击更换
    $('.register-window .check-box .check-img').click(function () {
        let mobile = $('.register-window').find('.phone-box .input-phone').val()
        $('.register-window .check-box .check-img').attr('src', `${constant.baseUrl}/api/kaptcha?t=${new Date().getTime()}&mobile=${mobile}`)
    })

    $('.register-window .captcahr-box .check-img').click(function () {
        let mobile = $('.register-window').find('.phone-box .input-account').val()
        $('.register-window .captcahr-box .check-img').attr('src', `${constant.baseUrl}/api/kaptcha?t=${new Date().getTime()}&mobile=${mobile}`)
    })

    $('.login-window .remeber-box .gou').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    })
})

// 系统：新消息
if (storeData.newMsg) {
    let temp = storeData.newMsg
    storeData.newMsg = 0
    storeData.newMsg = temp
}
// 反馈：新消息
if (storeData.feedbackMsg) {
    let temp = storeData.feedbackMsg
    storeData.feedbackMsg = 0
    storeData.feedbackMsg = temp
}
// 私聊：新消息
if (storeData.privateMsg) {
    let temp = storeData.privateMsg
    storeData.privateMsg = 0
    storeData.privateMsg = temp
}
console.log('$header end')


