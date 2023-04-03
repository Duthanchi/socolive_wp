
import axios from 'axios';

const baseUrl = ' http://localhost:80/ axios.s://chat.chatvb.co/webApi';


function userRegister(params) {
    return axios.post(`${baseUrl}/login/reg`, params);
  }

  function  userLogin(params) {
    return  axios.post(`${baseUrl}/login/login`, params);
  }

const api = {
  // 用户注册

  //获取手机短信验证码
  getSmsCode(params) {
    return axios.post(`${baseUrl}/sys/getSmsCode`, params);
  },
  //校验短信验证码
  checkSmsCode(params) {
    return axios.post(`${baseUrl}/sys/checkSmsCode`, params);
  },
  //用户登录
  userLogin(params) {
    debugger;
    return  axios.post(`${baseUrl}/login/login`, params);
  },
  // 忘记密码
  forgetPwd(params) {
    return  axios.post(`${baseUrl}/login/forgetPassword`, params);
  },
  // 退出登录
  userLogout(params) {
    return  axios.post(`${baseUrl}/login/logout`, params);
  },
  // 用户详情
  userDetail(params) {
    return  axios.post(`${baseUrl}/user/detail`, params);
  },
  // 改绑手机
  userUpdatePhone(params) {
    return  axios.post(`${baseUrl}/user/updatePhone`, params);
  },
  // 绑定手机号
  userBindPhone(params) {
    return  axios.post(`${baseUrl}/user/bindPhone`, params);
  },
  // 修改密码
  userUpdatePwd(params) {
    return  axios.post(`${baseUrl}/user/updatePasswordFromSmsCode`, params);
  },
  // 更新用户资料
  userUpdate(params) {
    return  axios.post(`${baseUrl}/user/updateUser`, params);
  }
};