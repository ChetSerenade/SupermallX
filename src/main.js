import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "./store/index"

import fastclick from 'fastclick'
import Vuelazyload from 'vue-lazyload'

import toast from "./components/common/toast";


Vue.config.productionTip = false
//将事件总线添加到原型中，在个个组件中都可以使用了
Vue.prototype.$bus = new Vue();

//安装 toast 插件
Vue.use(toast);

//解决移动端300ms延迟问题
fastclick.attach(document.body);

//图片懒加载 插件
Vue.use(Vuelazyload, {
  //占位符图片没有加载之前显示的图片    ，具体使用看百度
  loading: require('assets/img/profile/0.jpg')
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

//fastClick减少点击延迟  解决300毫秒 延迟问题
//1.安装fastclick
//2.导入
//3.调用attach函数


//图片懒加载
//图片需要现在在屏幕上时，在加载这张图片
//使用vue-lazyload
//1.安装
//2.导入
//3.Vue.use
//修改img：src -> v-lazy

// px2vm使用
//命令行安装插件
//在postcss.config.js中配置
