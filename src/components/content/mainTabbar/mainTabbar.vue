<template>
<!--  底部导航的模块-->
  <div>
  <Tabbar>
    <TabbarItem path="/home" activecolor="blue">
      <img src="~assets/img/tabbar/home.svg" alt="" slot="img">
      <img src="~assets/img/tabbar/home_active.svg" alt="" slot="actions-img">
      <div slot="text">
        首页
      </div>
    </TabbarItem>
    <TabbarItem path="/shop" activecolor="blue">
      <img src="~assets/img/tabbar/category.svg" alt="" slot="img">
      <img src="~assets/img/tabbar/category_active.svg" alt="" slot="actions-img">
      <div slot="text">
        分类
      </div>
    </TabbarItem>
    <TabbarItem path="/cate" activecolor="blue">
      <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="img">
      <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="actions-img">
      <div slot="text">
        购物车
      </div>
    </TabbarItem>
    <TabbarItem path="/pro" activecolor="blue">
      <img src="~assets/img/tabbar/profile.svg" alt="" slot="img">
      <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="actions-img">
      <div slot="text">
        我的
      </div>
    </TabbarItem>
  </Tabbar>
  </div>
</template>

<script>
import TabbarItem from "../../common/tabbar/TabbarItem";
import Tabbar from "../../common/tabbar/Tabbar";
export default {
  name: "mainTabbar",
  components:{
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>

</style>
