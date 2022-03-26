//引入login
import login from "@/store/login";
// 引入进度条
import "nprogress/nprogress.css";
import nprogress from "nprogress";
//对axios进行二次封装
import axios from "axios";
const requests = axios.create({
  //配置对象
  baseURL: "https://netease-cloud-music-api-1-rgak5d383-zlz9.vercel.app",
  // baseURL: "http://localhost:3000",
  timeout: 5000,
  withCredentials: true,
});

// 添加请求拦截器
requests.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 进度条开始
    nprogress.start();
    // console.log(login.state.token);
    //需要携带token带给服务器
    if (login.state.token) {
      config.headers.token = login.state.token;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
requests.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    nprogress.done();
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default requests;
