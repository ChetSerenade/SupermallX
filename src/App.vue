<template>
  <div id="app">
    <!--    保留组件状态，不会进行销毁  让Datail组件 可以频繁创建和销毁-->
    <keep-alive exclude="Detail">
      <!--    //视图-->
      <router-view></router-view>
    </keep-alive>

    <!--    封装好的底部组件-->
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from "./components/content/mainTabbar/mainTabbar";

export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
/*引入样式*/
@import "assets/css/base.css";

</style>
