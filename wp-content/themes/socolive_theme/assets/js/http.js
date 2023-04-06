import axios from 'axios'
// import { storeData } from './store'
import api from './api'
import constant from './constant'
import apiFormat from './apiFormat'
// import { Tip, Msg } from 'utils/components'
// import common from 'utils/common'
// import md5 from 'js-md5'
// import qs from 'qs'

let baseUrl = constant.baseUrl
// let staticApiUrl = constant.staticApiUrl
// let imApiUrl = constant.imApiUrl

axios.defaults.withCredentials = true

axios.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => {
        return Promise.reject(err)
    },
)

axios.interceptors.response.use(
    (response) => {
        if (response && response.status === 200) {
            return response.data
        } else {
            return false
        }
    },
    (error) => {
        console.log(error)
        return Promise.reject(error)
    },
)

const post = async (url, data = {}, notLogin) => {
    // if (!storeData.sessionId && url !== '/login/guestLogin') {
    //     try {
    //         //await api.handleVisitorLogin()
    //         api.handleGuestLogin()
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    const sessionInfo = {
        // sessionId: storeData.sessionId,
        sessionId: "",
        seq: 0,
        appVer: 0,
        packageCode: 0,
        plat: 3,
        language: 1,
    }
    const params = apiFormat.initByte(sessionInfo, `${JSON.stringify(data)}`, constant.API_KEY_REQ)
    console.log(params)
    return axios({
        method: 'post',
        baseURL: 'http://localhost:8080',
        url,
        responseType: 'blob',
        timeout: 30000,
        data: params,
        headers: {
            'Content-Type': 'application/octet-stream',
          },
        withCredentials: true,

    })
        .then(async (res) => {
            const jsonData = await apiFormat.initJson(res, constant.API_KEY_RESP)
            if (jsonData.commonResult.code === 200) {
                return jsonData.result || true
            } else if (jsonData.commonResult.code === 100) {
                if (!notLogin) {
                    console.log('需要用户重登，跳转登录页面')
                    api.handleLoginJump(true)
                } else {
                    console.log('需要用户重登，但不跳转登录页面')
                }
            } else if (jsonData.commonResult.code === 101) {
                console.log('需要游客重登')
                try {
                    //await api.handleVisitorLogin()
                    // api.handleGuestLogin()
                } catch (err) {
                    console.log(err)
                }
                return false
            } else {
                // if (location.pathname.includes('/player')) {
                //     Tip({
                //         container: '.video-box',
                //         message: 'error',
                //         position: 'afterbegin',
                //         cssText: 'width: 650px;',
                //     })
                //     return
                // }
                // // 接口报错，进行提示
                // Msg({
                //     message: jsonData.commonResult.meg || 'server error',
                // })
                console.log(jsonData.commonResult.meg || '接口报错', url, jsonData)
                return Promise.reject(jsonData.commonResult)
            }
        })
        .catch((err) => {
            console.log(err)
            return Promise.reject(err)
        })
}

const jsonp = async (url, callback, dely) => {
    if (!url) {
        reject('jsonp: url is null')
    }
    if (!callback) {
        reject('jsonp: callback is null')
    }
    let funres = null
    let funrej = null
    function recRequest(num) {
        if (num < 5) {
            num++
            setTimeout(() => {
                request(url, callback, num)
            }, 150)
        } else {
            funrej('jsonp error')
        }
    }
    function request(url, callback, num) {
        $.ajax({
            url: staticApiUrl + url,
            dataType: 'jsonp',
            jsonp: false,
            jsonpCallback: callback,
            cache: true,
            success: function (data) {
                funres(data.data)
            },
            error: function (data) {
                console.log('jsonp error', num)
                recRequest(num)
            },
        })
    }
    return new Promise((resolve, reject) => {
        let num = 0
        funres = resolve
        funrej = reject
        if (dely) {
            setTimeout(() => {
                request(url, callback, num)
            }, dely)
        } else {
            request(url, callback, num)
        }
    })
}

const imPost = async (url, data = {}) => {
    const nonce = common.uuid().replace(/-/g, '')
    const curTime = new Date().getTime()
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        appKey: constant.imAppKey,
        nonce: nonce,
        curTime: curTime,
        sign: md5(constant.imAppSecret + nonce + curTime).toLowerCase(),
    }
    return axios({
        method: 'post',
        baseURL: imApiUrl,
        url,
        timeout: 30000,
        data: qs.stringify(data),
        headers: headers,
    })
        .then(async (res) => {
            if (res.code === 200) {
                return res.result || true
            } else {
                // 接口报错，进行提示
                Msg({
                    message: res.msg || 'server error',
                })
                console.log(res.msg || '接口报错', url, data)
                return Promise.reject(res)
            }
        })
        .catch((err) => {
            return Promise.reject(err)
        })
}

export default {
    post,
    jsonp,
    imPost,
}
