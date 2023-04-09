import api from './api.js'
import apiFormat from './apiFormat'
import constant from './constant'

jQuery(document).ready(function($) {

    let is_validate = false;

    function isShowLogin(flag){
        if(flag)
        {
            $(".header-modal").removeAttr("hidden");
            $(".header-modal").show();
            $(".login-window").removeAttr("hidden");
            $(".login-window").show();
        }else{
            $(".header-modal").attr("hidden", true);
            $(".header-modal").hide();
            $(".login-window").attr("hidden", true);
            $(".login-window").hide();
        }
    }

    function isShowRegister(flag){
        if(flag)
        {
            $(".header-modal").removeAttr("hidden");
            $(".header-modal").show();
            $(".register-window").removeAttr("hidden");
            $(".register-window").show();
        }else{
            $(".header-modal").attr("hidden", true);
            $(".header-modal").hide();
            $(".register-window").attr("hidden", true);
            $(".register-window").hide();
        }
    }

    function remeberLogin() {
        if ($('.login-window .remeber-box .gou').hasClass('active')) {
            let obj = {}
            if ($(".login-window").find('.input-account').val()) {
                obj.account = $(".login-window").find('.input-account').val()
            } else {
                obj.countryCode = $(".login-window").find('.country-code').text()
                obj.phone = $(".login-window").find('.input-phone').val()
            }
            obj.password = md5($(".login-window").find('.input-password').val())
            localStorage.setItem("remeberLogin", JSON.stringify(obj))
        } else {
            localStorage.setItem("remeberLogin", JSON.stringify({}))
        }
    }

    function getType(type) {
        if (type === 'login') {
            if ($(".login-window").find(".input-phone").val().length > 0) {
                return "phone";
            } else if ($(".login-window").find(".input-account").val().length > 0) {
                return "account";
            }
        }

        if (type === 'register') {
            if ($(".register-window").find(".input-phone").val().length > 0) {
                return "phone";
            } else if ($(".register-window").find(".input-account").val().length > 0) {
                return "account";
            }
        }
    }

    $('.register-window .check-box .check-img').click(function () {
        let mobile = $('.register-window').find('.phone-box .input-phone').val()
        $('.register-window .check-box .check-img').attr('src', `${constant.baseUrl}/api/kaptcha?t=${new Date().getTime()}&mobile=${mobile}`)
    })

    $('.register-window .captcha-box .check-img').click(function () {
        let mobile = $('.register-window').find('.phone-box .input-account').val()
        $('.register-window .captcahr-box .check-img').attr('src', `${constant.baseUrl}/api/kaptcha?t=${new Date().getTime()}&mobile=${mobile}`)
    })

    //Show and hide model login and register
    $(".header-login").click(function() {
        isShowLogin(true)
    });

    $(".header-register").click(function() {
        isShowRegister(true)
    });

    $("#close-login").click(function() {
        isShowLogin(false)
    });

    // Active rememberme
    $(".remeber-box .gou").click(function() {
        if ($(".remeber-box .gou").hasClass("active")) {
            $(".remeber-box .gou").removeClass("active");
        } else {
            $(".remeber-box .gou").addClass("active");
        }
    });

    $("#close-register").click(function() {
        isShowRegister(false)
    });

    // Show and implement dropdown country
    $(".country-code-box").click(function() {
        $(".country-code-list").removeAttr("hidden");
        $(".country-code-list").show();
    });

    $(".login-window, .register-window").find(".country-code-item").click((function() {
        var e = $(this).closest(".input-group").find(".country-code"),
            n = $(this).closest(".input-group").find(".input-phone");
        e.text($(this).find(".right").text()),
            "+86" == e.text() ? n.attr("maxlength", 11) : n.attr("maxlength", 20)
        $(".country-code-list").attr("hidden", true);
    }));

    // Register validate
    $(".register-window").find(".input-phone").change(function() {

        var len = $(".register-window").find(".input-phone").val().length;
        $(".register-window").find('.check-box .check-img').click()

        if (len == 0) {
            $(".check-box").attr("hidden", true);
            $(".check-box").hide();
        } else {
            $(".check-box").removeAttr("hidden");
            $(".check-box").show();
            $(".captcha-box").attr("hidden", true);
            $(".captcha-box").hide();
        }

        if (len > 0) {
            $(".register-window").find(".input-account").prop('disabled', true);
            $(".register-window").find(".account-box > .error-tip > span").attr("hidden", true);
            $(".register-window").find(".account-box > .error-tip > span").hide();
        } else {
            $(".input-account").prop('disabled', false);
        }

        if (len > 4) {
            $(".register-window").find(".phone-box > .error-tip > span").attr("hidden", true);
            $(".register-window").find(".phone-box > .error-tip > span").hide();
            is_validate = true
        } else if (len < 5) {
            $(".register-window").find(".phone-box > .error-tip > span").removeAttr("hidden");
            $(".register-window").find(".phone-box > .error-tip > span").show();
            is_validate = false
        }
    });

    $(".check-box").find(".input-check").change(function() {
        var len = $(".check-box").find(".input-check").val().length;
        if (len != 5) {

            $(".register-window").find(".check-box > .error-tip > span").removeAttr("hidden");
            $(".register-window").find(".check-box > .error-tip > span").show();
            is_validate = false
        } else if (len == 5) {
            $(".register-window").find(".check-box > .error-tip > span").attr("hidden", true);
            $(".register-window").find(".check-box > .error-tip > span").hide();
            is_validate = true
        }
    });

    $(".register-window").find(".input-account").change(function() {
        var len = $(".register-window").find(".input-account").val().length;
        if (len == 0) {
            $(".captcha-box").attr("hidden", true);
            $(".captcha-box").hide();
        } else {
            $(".captcha-box").removeAttr("hidden");
            $(".captcha-box").show();
            $(".check-box").attr("hidden", true);
            $(".check-box").hide();
        }

        if (len > 0) {
            $(".register-window").find(".input-phone").prop('disabled', true);
            $(".register-window").find(".phone-box > .error-tip > span").attr("hidden", true);
            $(".register-window").find(".phone-box > .error-tip > span").hide();
        } else {
            $(".register-window").find(".input-phone").prop('disabled', false);
        }
        if (len > 5) {
            $(".register-window").find(".account-box > .error-tip > span").attr("hidden", true);
            $(".register-window").find(".account-box > .error-tip > span").hide();
            is_validate = true
        } else if (len < 6) {
            $(".register-window").find(".account-box > .error-tip > span").removeAttr("hidden");
            $(".register-window").find(".account-box > .error-tip > span").show();
            is_validate = false
        }

    });

    $(".register-window").find(".input-nickname").change(function() {
        var len = $(".register-window").find(".input-nickname").val().length;
        if (len < 2) {
            $(".register-window").find(".nickname-box > .error-tip > span").removeAttr("hidden");
            $(".register-window").find(".nickname-box > .error-tip > span").show();
            is_validate = false
        }

        if (2 < len && len < 16) {
            $(".register-window").find(".nickname-box > .error-tip > span").attr("hidden", true);
            $(".register-window").find(".nickname-box > .error-tip > span").hide();
            is_validate = true
        }
    });

    $(".captcha-box").find(".input-check").change(function() {

        var len = $(".captcha-box").find(".input-check").val().length;
        if (len != 5) {

            $(".register-window").find(".captcha-box > .error-tip > span").removeAttr("hidden");
            $(".register-window").find(".captcha-box > .error-tip > span").show();
            is_validate = false
        } else if (len == 5) {
            $(".register-window").find(".captcha-box > .error-tip > span").attr("hidden", true);
            $(".register-window").find(".captcha-box > .error-tip > span").hide();
            is_validate = false
        }
    });

    $(".register-window").find(".input-password").change(function() {
        if ($(".register-window").find(".input-password").val().length > 5) {
            $(".register-window").find(".password-box > .error-tip > span").attr("hidden", true);
            $(".register-window").find(".password-box > .error-tip > span").hide();
            is_validate = true
        } else if ($(".register-window").find(".input-password").val().length < 6) {
            $(".register-window").find(".password-box > .error-tip > span").removeAttr("hidden");
            $(".register-window").find(".password-box > .error-tip > span").show();
            is_validate = false
        }
    });

    // Login validate
    $(".login-window").find(".input-phone").change(function() {
        if ($(".login-window").find(".input-phone").val().length > 0) {
            $(".login-window").find(".input-account").prop('disabled', true);
            $(".login-window").find(".account-box > .error-tip > span").attr("hidden", true);
            $(".login-window").find(".account-box > .error-tip > span").hide();
        } else {
            $(".login-window").find(".input-account").prop('disabled', false);
        }

        if ($(".login-window").find(".input-phone").val().length > 4) {
            $(".login-window").find(".phone-box > .error-tip > span").attr("hidden", true);
            $(".login-window").find(".phone-box > .error-tip > span").hide();
            is_validate = true
        } else if ($(".input-phone").val().length < 5) {
            $(".login-window").find(".phone-box > .error-tip > span").removeAttr("hidden");
            $(".login-window").find(".phone-box > .error-tip > span").show();
            is_validate = false
        }

        $(".login-window").find(".captcha-box").removeAttr("hidden");

    });

    $(".login-window").find(".input-account").change(function() {

        if ($(".login-window").find(".input-account").val().length > 0) {
            $(".login-window").find('.input-phone').prop('disabled', true);
            $(".login-window").find(".phone-box > .error-tip > span").attr("hidden", true);
            $(".login-window").find(".phone-box > .error-tip > span").hide();
        } else {
            $('.input-phone').prop('disabled', false);
        }
        if ($(".login-window").find(".input-account").val().length > 5) {
            $(".login-window").find(".account-box > .error-tip > span").attr("hidden", true);
            $(".login-window").find(".account-box > .error-tip > span").hide();
            is_validate = true
        } else if ($(".input-account").val().length < 6) {
            $(".login-window").find(".account-box > .error-tip > span").removeAttr("hidden");
            $(".login-window").find(".account-box > .error-tip > span").show();
            is_validate = false
        }
    });

    $(".login-window").find(".input-password").change(function() {
        if ($(".login-window").find(".input-password").val().length > 5) {
            $(".login-window").find(".password-box > .error-tip > span").attr("hidden", true);
            $(".login-window").find(".password-box > .error-tip > span").hide();
            is_validate = true
        } else if ($(".input-password").val().length < 6) {
            $(".login-window").find(".password-box > .error-tip > span").removeAttr("hidden");
            $(".login-window").find(".password-box > .error-tip > span").show();
            is_validate = false
        }
    });

    // Control change type password
    $(".login-window").find(".ali-biyan").click(function() {

        $(".login-window .ali-zhenyan").removeAttr("hidden");
        $(".login-window .ali-zhenyan").show();
        $(".login-window .ali-biyan").hide();
        $(".login-window .input-password").attr("type", "text");
    });

    $(".login-window").find(".ali-zhenyan").click(function() {

        $(".login-window .ali-biyan").removeAttr("hidden");
        $(".login-window .ali-biyan").show();
        $(".login-window .ali-zhenyan").hide();
        $(".login-window .input-password").attr("type", "password");
    });

    $(".register-window").find(".ali-biyan").click(function() {

        $(".register-window .ali-zhenyan").removeAttr("hidden");
        $(".register-window .ali-zhenyan").show();
        $(".register-window .ali-biyan").hide();
        $(".register-window .input-password").attr("type", "text");
    });

    $(".register-window").find(".ali-zhenyan").click(function() {

        $(".register-window .ali-biyan").removeAttr("hidden");
        $(".register-window .ali-biyan").show();
        $(".register-window .ali-zhenyan").hide();
        $(".register-window .input-password").attr("type", "password");
    });

    // handle change login and register
    $(".login-window").find(".register-jump").click(function() {
        $(".login-window").attr("hidden", true);
        $(".register-window").removeAttr("hidden");
        $(".register-window").show();
    });

    $(".register-window").find(".login-jump").click(function() {
        $(".register-window").attr("hidden", true);
        $(".login-window").removeAttr("hidden");
        $(".login-window").show();
    });

    $(".login-window .submit").click((function() {
        if (is_validate) {
            var pwd = $(".login-window").find(".input-password").val();
            var pwdMd5 = md5(pwd);

            if (getType('login') === 'account') {
                var data = {
                    accountType: 2,
                    loginName: $(".login-window").find(".input-account").val(),
                    loginMode: 1,
                    loginType: 1,
                    password: pwdMd5,
                    pwdType: 2,
                    // pwdType: pwdType,
                }
                const sessionInfo = {
                    sessionId: "",
                    seq: 0,
                    appVer: 0,
                    packageCode: 0,
                    plat: 3,
                    language: 1,
                }
                const params = apiFormat.initByte(sessionInfo, `${JSON.stringify(data)}`, constant.API_KEY_REQ)
                console.log(typeof params)
                remeberLogin()
                handleUserLogin(data)
                    .then((res) => {
                       isShowLogin(false)
                    })
                    .catch((err) => {})
            } else if (getType('login') === 'phone') {

                const data = {
                    accountType: 1,
                    countryCode: $(".login-window").find('.country-code').text(),
                    phone: $(".login-window").find(".input-phone").val(),
                    loginMode: 1,
                    loginType: 1,
                    password: pwdMd5,
                    pwdType: 2,
                    // pwdType: pwdType,
                }
                remeberLogin()
                // handleUserLogin(data)
                //     .then((res) => {
                //         closeWindow(1)
                //     })
                //     .catch((err) => {})
                handleUserLogin(data)
                .then((res) => {
                    isShowLogin(false)
                })
                .catch((err) => {})
            }
        }
    }));

    $(".register-window .submit").click((function() {
        var pwd = $(".register-window").find(".input-password").val();
        var pwdMd5 = md5(pwd);
        if (getType('register') === 'account') {
            const regData = {
                accountType: 2,
                loginName: $(".register-window").find('.input-account').val(),
                password: pwdMd5,
                nickName: $(".register-window").find('.input-nickname').val(),
                // pwdType: pwdT2ype,
                pwdType: 2,
            }
            handleUserRegister(regData).then((res) => {
                // Msg({
                //     message: i18n.register + i18n.success, // '注册成功'
                // })
                isShowRegister(false);
            })


        } else if (getType('register') === 'phone') {
            const data = {
                countryCode: $(".register-window").find('.country-code').text(),
                phone: $(".register-window").find('.input-phone').val(),
                type: 1,
                smsCode: 8888,
            }
            checkSmsCode(data)
                .then((res) => {
                    debugger;
                    const data2 = {
                        accountType: 1,
                        countryCode: $(".register-window").find('.country-code').text(),
                        phone: $(".register-window").find('.input-phone').val(),
                        smsType: 1,
                        smsCode: 8888,
                        password: pwdMd5,
                        nickName: $(".register-window").find('.input-nickname').val(),
                        pwdType: 2,
                        kaptcha: $(".register-window").find('.input-phone').val() ?
                            $(".register-window").find('.check-box .input-check').val() : $(".register-window").find('.captcha-box .input-check').val(),
                    }
                    handleUserRegister(data2)
                        .then((res) => {
                            debugger;
                            // Msg({
                            //     message: i18n.register + i18n.success, // '注册成功'
                            // })
                            isShowRegister(false)
                        })
                        .catch((err) => {
                            $(".register-window").find('.check-box .check-img').click()
                        })
                })
                .catch((err) => {
                    $(".register-window").find('.check-box .check-img').click()
                })
        }
    }))

});
// 用户登录
async function handleUserLogin(params, flag) {
    try {
        let res = await api.userLogin(params)

        localStorage.setItem('userInfo', "");
        localStorage.setItem('urls', "");

        if (res.phone && res.countryCode) {
            res.userInfo.phone = res.phone
            if (res.countryCode !== 0) {
                res.userInfo.countryCode = '+' + res.countryCode
            }
        } else if (params.phone && params.countryCode) {
            res.userInfo.phone = params.phone
            res.userInfo.countryCode = params.countryCode
        }
        if (res.loginName) {
            res.userInfo.loginName = res.loginName
        }

        localStorage.setItem('isUser', 1);
        localStorage.setItem('sessionId', res.sessionId);
        localStorage.setItem('userInfo', JSON.stringify(res.userInfo));
        localStorage.setItem('urls', JSON.stringify(res.urls));
        localStorage.setItem('sysNoticeList', JSON.stringify([]));
        localStorage.setItem('newMsg', JSON.stringify(0));
        localStorage.setItem('concernList', "");

        // if (!flag) {
        //   // 初始化 ws
        //   websocket.send(constant.WS_CODE.LOGIN, {
        //     key: res.sessionId,
        //     plat: 3,
        //     version: 1,
        //   })
        // }
        // cors(storeData.sessionId, storeData.userInfo, storeData.urls, storeData.isUser)
    } catch (err) {
        return Promise.reject(err)
    }
};

 // 用户注册
async function handleUserRegister(params) {
    try {
        await api.userRegister(params).then((res) => {
            debugger;
            res.userInfo.phone = params.phone
            res.userInfo.countryCode = params.countryCode
            res.userInfo.loginName = params.loginName
            localStorage.setItem('urls', '');
            localStorage.setItem('sessionId', '');
            localStorage.setItem('userInfo', '');
            localStorage.setItem('isUser', 1);
            localStorage.setItem('sessionId', res.sessionId);
            localStorage.setItem('userInfo', JSON.stringify(res.userInfo));
            localStorage.setItem('urls', JSON.stringify(res.urls));
            localStorage.setItem('sysNoticeList', JSON.stringify([]));
            localStorage.setItem('newMsg', JSON.stringify(0));
            localStorage.setItem('concernList', "");

        })
    } catch (err) {
        return Promise.reject(err)
    }
};

 // 用户注册
 async function checkSmsCode(params) {
    try {
        await api.checkSmsCode(params).then((res) => {
        })
    } catch (err) {
        return Promise.reject(err)
    }
};

