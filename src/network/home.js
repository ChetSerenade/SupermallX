import {request} from "./request";

// 具体的网络请求

//封装 调用home数据的函数，在home.vue组件中使用即可
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

//请求 home的主题数据，进行展示
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
