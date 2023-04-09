
import axios from 'axios';

import constant from './constant';
import http from './http';

  const getSmsCode = (params) => {
    return axios.post(`${constant.baseUrl}/sys/getSmsCode`, params);
  }
  //校验短信验证码
  const checkSmsCode = (params) => {
    // return http.post(`${constant.baseUrl}/sys/checkSmsCode`, params);
    return  http.post("/wp-content/themes/socolive_theme/wp-remote-check-sms-code.php", params);
  };
    //用户登录
    const userLogin = (params) => {
    // return  axios.post(`${constant.baseUrl}/login/login`, params);
    // return  http.post("/luke-project/wp-content/themes/socolive_theme/wp-remote-login.php", params);
    return  http.post("/wp-content/themes/socolive_theme/wp-remote-login.php", params);
  };

  const userRegister = (params) => {
    // return  axios.post(`${constant.baseUrl}/login/reg`, params);
    return  http.post("/wp-content/themes/socolive_theme/wp-remote-register.php", params);
  };

  export default {
    getSmsCode,
    checkSmsCode,
    userLogin,
    userRegister
  }