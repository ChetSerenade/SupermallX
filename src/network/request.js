import axios from "axios";

// 封装的网路请求
export function request(config){
  const instance=axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    // baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  //axios拦截器
  instance.interceptors.request.use(config=>{
    //请求成功时的拦截
    // console.log(config);
    //这里拦截下来还必须要在返回出去
    return config;
  },error => {
    //请求失败时的拦截
    console.log(error);
  })
  //响应时
  instance.interceptors.response.use(res=>{
    return res.data;
    },error => {
    console.log(error);
    }
  )
  //调用这个实例对象，config传递的参数,  将拿到的结果返回出去
  return  instance(config)
}
