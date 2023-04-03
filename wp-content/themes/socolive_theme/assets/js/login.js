
jQuery(document).ready(function ($) {
    $( ".header-login" ).click(function() {
        $(".header-modal").removeAttr("hidden");
        $(".login-window").removeAttr("hidden");
    });
    
    $( ".header-register" ).click(function() {
        $( ".header-modal" ).removeAttr("hidden");
        $( ".register-window" ).removeAttr("hidden");

    });

    $( "#close-login" ).click(function() {
        $(".header-modal").attr("hidden", true);
        $(".login-window").attr("hidden", true);
      });

    $( "#close-register" ).click(function() {
        $(".header-modal").attr("hidden", true);
        $(".register-window").attr("hidden", true);
    });
    
    
    $(".country-code-box").click(function() {
        $(".country-code-list").removeAttr("hidden");
        $(".country-code-list").show();
      });

    $(".login-window, .register-window").find(".country-code-item").click((function() {
        var e = $(this).closest(".input-group").find(".country-code")
          , n = $(this).closest(".input-group").find(".input-phone");
        e.text($(this).find(".right").text()),
        "+86" == e.text() ? n.attr("maxlength", 11) : n.attr("maxlength", 20)
        $(".country-code-list").attr("hidden", true);
    }
    ));

    // $SECRET_KEY = '';
    
    function md5pwd(t, e) {
        if (e && e === 2) {
         return md5(t);
        
        } else {

        const SECRET_KEY = '&%*$8@!!%';
            return md5(md5(t.toLowerCase()) + SECRET_KEY);
        
        }
    }

    $(".login-window .submit").click((function() {
        debugger;
    //    pwd = md5pwd($("input-password").val());
        const baseUrl = 'http://localhost:80/https://chat.chatvb.co/webApi';
       pwd = $(".input-password").val();
        if (getType('login') === 'account') {
            const data = {
                accountType: 2,
                loginName: $(".input-account").val(),
                loginMode: 1,
                loginType: 1,
                password: pwd,
                pwdType: 1,
                // pwdType: pwdType,
            }
            // remeberLogin()
            // handleUserLogin(data)
            //     .then((res) => {
            //         closeWindow(1)
            //     })
            //     .catch((err) => {})
            $.ajax({
                url: `${baseUrl}/login/login`, // Replace with the URL of your login script
                type: "POST",
                data: data,
                dataType: "json",
                success: function(data){
                    // Handle the response from the server
                    if (data.success) {
                        // Redirect the user to the dashboard
                        window.location.href = "";
                    } else {
                        // Display an error message
                        $("#error-message").text(data.message);
                    }
                },
                error: function(xhr, status, error){
                    // Handle errors
                    console.error(xhr);
                    console.error(status);
                    console.error(error);
                }
            });
        } else if (getType('login') === 'phone') {
            const data = {
                accountType: 1,
                countryCode: ('.country-code').val(),
                phone: $(".input-phone").val(),
                loginMode: 1,
                loginType: 1,
                password: pwd,
                pwdType: 1,
                // pwdType: pwdType,
            }
            // remeberLogin()
            // handleUserLogin(data)
            //     .then((res) => {
            //         closeWindow(1)
            //     })
            //     .catch((err) => {})

            $.ajax({
                url: `${baseUrl}/login/login`, // Replace with the URL of your login script
                type: "POST",
                data: data,
                dataType: "json",
                success: function(data){
                    // Handle the response from the server
                    if (data.success) {
                        // Redirect the user to the dashboard
                        window.location.href = "";
                        console.log("success")
                    } else {
                        // Display an error message
                        $("#error-message").text(data.message);
                        console.log(data.message)
                    }
                },
                error: function(xhr, status, error){
                    // Handle errors
                    console.log("error")
                    // console.error(xhr);
                    // console.error(status);
                    // console.error(error);
                }
            });
    }})
)

function getType(type) {
    debugger;
    if(type==='login') {
        if ($(".input-account").length = 0) {
            return "phone";
        }

        else if ($(".input-account").length > 0) {
            return "account";
        }  
    }
}

});

// 用户登录
function handleUserLogin(params, flag) {
    // 登录时，先要清理一下 sessionId 防止出现“无权”

    debugger;
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
            success: function(data){
                // Handle the response from the server
                if (data.success) {
                    // Redirect the user to the dashboard
                    window.location.href = "";
                } else {
                    // Display an error message
                    $("#error-message").text(data.message);
                }
            },
            error: function(xhr, status, error){
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




