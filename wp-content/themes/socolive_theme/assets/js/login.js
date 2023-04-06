// import CryptoJS from 'crypto-js'
// import httpProto from './proto/fy_pb.js'
import api from './api.js'
import apiFormat from './apiFormat'

jQuery(document).ready(function($) {

    let is_validate = false;

    $(".login-window .submit").click((function() {
        if (is_validate) {
            var pwd = $(".login-window").find(".input-password").val();
            var pwdMd5 = md5(pwd);
            // pwdMd5 = pwdMd5 + SECRET_KEY
            console.log(pwdMd5)

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
                    sessionId:"",
                    seq: 0,
                    appVer: 0,
                    packageCode: 0,
                    plat: 3,
                    language: 1,
                }
                // const params = apiFormat.initByte(sessionInfo, `${JSON.stringify(data)}`, API_KEY_REQ)
                data = JSON.stringify(data)
                // remeberLogin()
                // handleUserLogin(data)
                //     .then((res) => {
                //         closeWindow(1)
                //     })
                //     .catch((err) => {})
                // var baseUrl="https://cors-anywhere.herokuapp.com/https://chat.chatvb.co/webApi"
                // $.ajax({
                //     url: `${baseUrl}/login/login`,
                //     type: "POST",
                //     responseType: "blob",
                //     timeout: 30000,
                //     data: data,
                //     headers: {
                //         'Content-Type': 'application/json charset=utf-8',
                //     },
                //     success: function(response) {
                //         debugger;
                //         // const jsonData = apiFormat.initJson(response, API_KEY_RESP)

                //         console.log("response::::", response);
                //         // if (response && response.success) {
                //         //     window.location.href = "/luke";
                //         // } else {
                //         //     $("#error-message").text(response.message);
                //         // }

                //         // if (jsonData.apiResult.code === 200) {
                //         //     return jsonData.result || true
                //         // } else if (jsonData.apiResult.code === 100) {
                //         //     if (!notLogin) {
                //         //         console.log('需要用户重登，跳转登录页面')
                //         //         api.handleLoginJump(true)
                //         //     } else {
                //         //         console.log('需要用户重登，但不跳转登录页面')
                //         //     }

                //     },
                //     error: function(xhr, status, error) {
                //         console.log(xhr.responseText);
                //         console.log("status:", status);
                //         console.log("error:", error);
                //     }
                // });
                handleUserLogin(data)
                .then((res) => {
                    // closeWindow(1)
                })
                .catch((err) => {})
            } else if (getType('login') === 'phone') {
                const data = {
                    accountType: 1,
                    countryCode: $(".login-window").find('.country-code').val(),
                    phone: $(".login-window").find(".input-phone").val(),
                    loginMode: 1,
                    loginType: 1,
                    password: pwd,
                    pwdType: 2,
                    // pwdType: pwdType,
                }
                // remeberLogin()
                // handleUserLogin(data)
                //     .then((res) => {
                //         closeWindow(1)
                //     })
                //     .catch((err) => {})

                // $.ajax({
                //     url: `${baseUrl}/login/login`,
                //     type: "POST",
                //     // dataType: "json",
                //     data: data,
                //     success: function(response) {

                //         console.log(response);
                //         if (response && response.success) {
                //             window.location.href = "/dashboard";
                //         } else {
                //             $("#error-message").text(response.message);
                //         }
                //     },
                //     error: function(xhr, status, error) {

                //         console.log(xhr.responseText);
                //         console.log("status:", status);
                //         console.log("error:", error);
                //     }
                // });

                handleUserLogin(data)
                .then((res) => {
                    closeWindow(1)
                })
                .catch((err) => {})
            }
        }
    }))
    
    $(".register-window .submit").click((function() {
        debugger;
            pwd = $(".register-window").find(".input-password").val();
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
                // api.handleUserRegister(regData).then((res) => {
                //     Msg({
                //         message: i18n.register + i18n.success, // '注册成功'
                //     })
                //     closeWindow(2)
                // })

                try {
                    $.ajax({
                        url: `${baseUrl}/login/reg`,
                        type: "POST",
                        // dataType: "json",
                        data: regData,
                        success: function(response) {
    
                            console.log(response);
                            if (response && response.success) {
                                window.location.href = "/dashboard";
                            } else {
                                $("#error-message").text(response.message);
                            }
                        },
                        error: function(xhr, status, error) {
    
                            console.log(xhr.responseText);
                            console.log("status:", status);
                            console.log("error:", error);
                        }
                    });
                } catch (err) {
                    return Promise.reject(err)
                }


            } else if (getType('register') === 'phone') {
                const data = {
                    countryCode: $(".register-window").find('.country-code').text(),
                    phone: $(".register-window").find('.input-phone').val(),
                    type: 1,
                    smsCode: $(".register-window").find('.input-verify').val(),
                }
                api.checkSmsCode(data)
                    .then((res) => {
                        const data2 = {
                            accountType: 1,
                            countryCode: $(".register-window").find('.country-code').text(),
                            phone: $(".register-window").find('.input-phone').val(),
                            smsType: 1,
                            smsCode: $(".register-window").find('.input-verify').val(),
                            password: pwd,
                            nickName: $(".register-window").find('.input-nickname').val(),
                            pwdType: pwdType,
                            kaptcha: $(".register-window").find('.input-phone').val()
                                ? $(".register-window").find('.check-box .input-check').val()
                                : $(".register-window").find('.captcha-box .input-check').val(),
                        }
                        api.handleUserRegister(data2)
                            .then((res) => {
                                Msg({
                                    message: i18n.register + i18n.success, // '注册成功'
                                })
                                closeWindow(2)
                            })
                            .catch((err) => {
                                $(".register-window").find('.check-box .check-img').click()
                            })
                    })
                    .catch((err) => {
                        $(".register-window").find('.check-box .check-img').click()
                    })
            }
        })
    )

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

    //Show and hide model login and register
    $(".header-login").click(function() {
        $(".header-modal").removeAttr("hidden");
        $(".login-window").removeAttr("hidden");
    });

    $(".header-register").click(function() {
        $(".header-modal").removeAttr("hidden");
        $(".register-window").removeAttr("hidden");
    });

    $("#close-login").click(function() {
        $(".header-modal").attr("hidden", true);
        $(".login-window").attr("hidden", true);
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
        $(".header-modal").attr("hidden", true);
        $(".register-window").attr("hidden", true);
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
        debugger;
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
});
// 用户登录
async function handleUserLogin(params, flag){
    // 登录时，先要清理一下 sessionId 防止出现“无权”
    // storeData.sessionId = ''
    try {
        let res = await api.userLogin(params)

        console.log(res)
        
        // 先清空
        // storeData.userInfo = ''
        // storeData.urls = ''
        // 存入手机号
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
        // storeData.isUser = 1
        // storeData.sessionId = res.sessionId
        // storeData.userInfo = res.userInfo
        // storeData.urls = res.urls
        // storeData.sysNoticeList = []
        // storeData.concernList = null
        // storeData.newMsg = 0

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