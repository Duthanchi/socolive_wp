jQuery(document).ready(function ($) {
    let is_validate = false;
    //Show and hide model login and register
    $(".header-login").click(function () {
        $(".header-modal").removeAttr("hidden");
        $(".login-window").removeAttr("hidden");
    });

    $(".header-register").click(function () {
        $(".header-modal").removeAttr("hidden");
        $(".register-window").removeAttr("hidden");
    });

    $("#close-login").click(function () {
        $(".header-modal").attr("hidden", true);
        $(".login-window").attr("hidden", true);
    });

    // Active rememberme
    $(".remeber-box .gou").click(function () {
        if ($(".remeber-box .gou").hasClass("active")) {
            $(".remeber-box .gou").removeClass("active");
        } else {
            $(".remeber-box .gou").addClass("active");
        }
    });

    $("#close-register").click(function () {
        $(".header-modal").attr("hidden", true);
        $(".register-window").attr("hidden", true);
    });

    // Show and implement dropdown country
    $(".country-code-box").click(function () {
        $(".country-code-list").removeAttr("hidden");
        $(".country-code-list").show();
    });

    $(".login-window, .register-window").find(".country-code-item").click((function () {
        var e = $(this).closest(".input-group").find(".country-code"),
            n = $(this).closest(".input-group").find(".input-phone");
        e.text($(this).find(".right").text()),
            "+86" == e.text() ? n.attr("maxlength", 11) : n.attr("maxlength", 20)
        $(".country-code-list").attr("hidden", true);
    }));

    // Register validate

    $(".register-window").find(".input-phone").change(function () {

        var len = $(".register-window").find(".input-phone").val().length;

        if (len == 0) {
            $(".check-box").attr("hidden", true);
            $(".check-box").hide();
        }
        else {
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

    $(".check-box").find(".input-check").change(function () {
        debugger;
        var len = $(".captcha-box").find(".input-check").val().length;
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

    $(".register-window").find(".input-account").change(function () {
        var len = $(".register-window").find(".input-account").val().length;
        if (len == 0) {
            $(".captcha-box").attr("hidden", true);
            $(".captcha-box").hide();
        }
        else {
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

    $(".register-window").find(".input-nickname").change(function () {
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


    $(".captcha-box").find(".input-check").change(function () {
        debugger;
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

    $(".register-window").find(".input-password").change(function () {
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
    $(".login-window").find(".input-phone").change(function () {
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

    $(".login-window").find(".input-account").change(function () {

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

    $(".login-window").find(".input-password").change(function () {
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

    $(".login-window").find(".ali-biyan").click(function () {
        debugger;
        $(".login-window .ali-zhenyan").removeAttr("hidden");
        $(".login-window .ali-zhenyan").show();
        $(".login-window .ali-biyan").hide();
        $(".login-window .input-password").attr("type", "text");
    });

    $(".login-window").find(".ali-zhenyan").click(function () {
        debugger;
        $(".login-window .ali-biyan").removeAttr("hidden");
        $(".login-window .ali-biyan").show();
        $(".login-window .ali-zhenyan").hide();
        $(".login-window .input-password").attr("type", "password");
    });

    $(".register-window").find(".ali-biyan").click(function () {
        debugger;
        $(".register-window .ali-zhenyan").removeAttr("hidden");
        $(".register-window .ali-zhenyan").show();
        $(".register-window .ali-biyan").hide();
        $(".register-window .input-password").attr("type", "text");
    });

    $(".register-window").find(".ali-zhenyan").click(function () {
        debugger;
        $(".register-window .ali-biyan").removeAttr("hidden");
        $(".register-window .ali-biyan").show();
        $(".register-window .ali-zhenyan").hide();
        $(".register-window .input-password").attr("type", "password");
    });



    // handle change login and register

    $(".login-window").find(".register-jump").click(function () {
        $(".login-window").attr("hidden", true);
        $(".register-window").removeAttr("hidden");
        $(".register-window").show();
    });

    $(".register-window").find(".login-jump").click(function () {
        $(".register-window").attr("hidden", true);
        $(".login-window").removeAttr("hidden");
        $(".login-window").show();
    });

    const SECRET_KEY = '&%*$8@!!%';
    const API_KEY_REQ = "PHp1st5vEg5Ca8FH";
    const API_KEY_RESP = "qlCJekfRKwWkQxl7";

    $(".login-window .submit").click((function () {

        if (is_validate) {

            const baseUrl = 'http://localhost:80/https://chat.chatvb.co/webApi';
            pwd = $(".input-password").val();
            var pwdMd5 = md5(pwd);
            // pwdMd5 = pwdMd5 + SECRET_KEY


            console.log(pwdMd5)

            if (getType('login') === 'account') {
                var data = {
                    accountType: 2,
                    loginName: $(".input-account").val(),
                    loginMode: 1,
                    loginType: 1,
                    password: pwdMd5,
                    pwdType: 2,
                    // pwdType: pwdType,
                }

                // data = JSON.stringify(data)
                // remeberLogin()
                // handleUserLogin(data)
                //     .then((res) => {
                //         closeWindow(1)
                //     })
                //     .catch((err) => {})
                a = {
                    sessionId: "",
                    seq: 0,
                    appVer: 0,
                    packageCode: 0,
                    plat: 3,
                    language: 1
                }
                //  s= initByte(a, "".concat(JSON.stringify(data)), API_KEY_REQ),
                $.ajax({
                    url: `${baseUrl}/login/login`,
                    type: "POST",
                    // dataType: "blob",
                    data: data,
                    success: function (response) {

                        console.log("response::::", response);
                        if (response && response.success) {
                            window.location.href = "/luke";
                        } else {
                            $("#error-message").text(response.message);
                        }
                    },
                    error: function (xhr, status, error) {

                        console.log(xhr.responseText);
                        console.log("status:", status);
                        console.log("error:", error);
                    }
                });
            } else if (getType('login') === 'phone') {
                const data = {
                    accountType: 1,
                    countryCode: $('.country-code').val(),
                    phone: $(".input-phone").val(),
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

                $.ajax({
                    url: `${baseUrl}/login/login`,
                    type: "POST",
                    // dataType: "json",
                    data: data,
                    success: function (response) {

                        console.log(response);
                        if (response && response.success) {
                            window.location.href = "/dashboard";
                        } else {
                            $("#error-message").text(response.message);
                        }
                    },
                    error: function (xhr, status, error) {

                        console.log(xhr.responseText);
                        console.log("status:", status);
                        console.log("error:", error);
                    }
                });
            }
        }
    }))

    function getType(type) {
        if (type === 'login') {
            if ($(".input-phone").val().length > 0) {
                return "phone";
            } else if ($(".input-account").val().length > 0) {
                return "account";
            }
        }
    }

});

// 用户登录
function handleUserLogin(params, flag) {
    // 登录时，先要清理一下 sessionId 防止出现“无权”

    let storeData = {};
    const baseUrl = 'http://localhost:80/https://chat.chatvb.co/webApi';

    storeData.sessionId = ''
    try {
        // let res = axios.post(`${baseUrl}/login/login`, params)
        // // let res = axioa.post("http://localhost:80/https://chat.chatvb.co/webApi'/login/login", params);
        // console.log(res)
        // // 先清空
        // storeData.userInfo = ''
        // storeData.urls = ''
        // // 存入手机号
        // if (res.phone && res.countryCode) {
        //     res.userInfo.phone = res.phone
        //     if (res.countryCode !== 0) {
        //         res.userInfo.countryCode = '+' + res.countryCode
        //     }
        // } else if (params.phone && params.countryCode) {
        //     res.userInfo.phone = params.phone
        //     res.userInfo.countryCode = params.countryCode
        // }
        // if (res.loginName) {
        //     res.userInfo.loginName = res.loginName
        // }
        // storeData.isUser = 1
        // storeData.sessionId = res.sessionId
        // storeData.userInfo = res.userInfo
        // storeData.urls = res.urls
        // storeData.sysNoticeList = []
        // storeData.concernList = null
        // storeData.newMsg = 0
        // cors(storeData.sessionId, storeData.userInfo, storeData.urls, storeData.isUser)

        $.ajax({
            url: `${baseUrl}/login/login`, // Replace with the URL of your login script
            type: "POST",
            data: params,
            dataType: "json",
            success: function (data) {
                // Handle the response from the server
                if (data.success) {
                    // Redirect the user to the dashboard
                    window.location.href = "";
                } else {
                    // Display an error message
                    $("#error-message").text(data.message);
                }
            },
            error: function (xhr, status, error) {
                // Handle errors
                console.error(xhr);
                console.error(status);
                console.error(error);
            }
        });

    } catch (err) {
        console.error(err);
        return Promise.reject(err)
    }
};

// 用户注册
function handleUserRegister(params) {
    try {
        api.userRegister(params).then((res) => {
            storeData.urls = ''
            storeData.sessionId = ''
            storeData.userInfo = ''
            res.userInfo.phone = params.phone
            res.userInfo.countryCode = params.countryCode
            res.userInfo.loginName = params.loginName
            storeData.isUser = 1
            storeData.sessionId = res.sessionId
            storeData.userInfo = res.userInfo
            storeData.urls = res.urls
            storeData.sysNoticeList = []
            storeData.concernList = null
            storeData.newMsg = 0

            // 初始化 ws
            // websocket.send(constant.WS_CODE.LOGIN, {
            //   key: res.sessionId,
            //   plat: 3,
            //   version: 1,
            // })
            cors(storeData.sessionId, storeData.userInfo, storeData.urls, storeData.isUser)
        })
    } catch (err) {
        return Promise.reject(err)
    }
};

// 用户退出登录
function handleUserLogout(params) {
    api.userLogout()
    storeData.sessionId = ''
    storeData.userInfo = ''
    storeData.urls = ''
    storeData.isUser = 0
    cors(storeData.sessionId, storeData.userInfo, storeData.urls, storeData.isUser)
};


function initByte(t, e, n) {

    const o = new FY_CLIENT();
    const r = new COMMON_REQ();
    const a = new CLIENT_INFO();

    a.setSessionId(t.sessionId);
    a.setSeq(t.seq);
    a.setAppVer(t.appVer);
    a.setPackageCode(t.packageCode);
    a.setPlat(t.plat);
    a.setLanguage(t.language);

    r.setClientInfo(a);
    r.setParam(s(e));

    o.setCommonReq(r);

    const c = u(o.serializeBinary(), n);
    const l = c.length;
    const d = new ArrayBuffer(6 + l);
    const p = new DataView(d);

    p.setInt8(0, 0, false);
    p.setInt8(1, -96, false);
    p.setUint32(2, l, false);

    for (let h = 0; h < l; h++) {
        p.setUint8(h + 6, c[h]);
    }

    return d;
}