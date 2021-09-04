<template>
  <div>
    <!--    导航-->
    <NavBar class="navbar">
      <template v-slot:center>
        <div>购物车({{ cartlength }})</div>
      </template>
    </NavBar>
    <!--    商品列表-->
    <Cartlist> </Cartlist>
    <!--    底部汇总-->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Cartlist from "./childComps/Cartlist";
import CartBottomBar from "./childComps/CartBottomBar";

//辅助函数 mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
import {mapGetters} from 'vuex'

export default {
  name: "cate",
  components: {
    NavBar,
    Cartlist,
    CartBottomBar
  },
  //获取添加购物车的数量
  computed: {
    //辅助函数，在这个组件中就可以直接使用 getters 中的 cartlength方法了
    ...mapGetters([
      'cartlength'
    ])
  }

}
</script>

<style scoped>
.navbar {
  font-weight: 700;
  color: #fff;
  background: var(--color-high-text);
}

</style>
