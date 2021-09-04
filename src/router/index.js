import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//懒加载
const home = () => import ('../views/home/Home')
const cate = () => import('../views/cate/cate')
const pro = () => import('../views/pro/pro')
const shop = () => import('../views/shopcart/shop')
const datail = () => import('../views/detail/Detail')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/mouth',
    component: cate
  },
  {
    path: '/my',
    component: pro
  },
  {
    path: '/shop',
    component: shop
  },
  {
    // 详情页使用动态路由传递参数，也可以push时使用query传递
    path: '/datail/:iid',
    component: datail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;
