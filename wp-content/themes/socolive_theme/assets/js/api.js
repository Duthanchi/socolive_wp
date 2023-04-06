
import axios from 'axios';

import constant from './constant';
import http from './http';

  const getSmsCode = (params) => {
    return axios.post(`${constant.baseUrl}/sys/getSmsCode`, params);
  }
  //校验短信验证码
  const checkSmsCode = (params) => {
    return axios.post(`${constant.baseUrl}/sys/checkSmsCode`, params);
  };
    //用户登录
    const userLogin = (params) => {
    debugger;
    return  http.post("/login/login", params, false);
  };

  const userRegister = (params) => {
    debugger;
    return  axios.post(`${constant.baseUrl}/login/reg`, params);
  };

  export default {
    getSmsCode,
    checkSmsCode,
    userLogin,
    userRegister
  }