<template>
  <div class="cart-list">
    <scroll class="cart">
      <cartlist-item
        v-for="(item,index) in cartList"
        :key="index"
        :itemInfo="item">
      </cartlist-item>
    </scroll>
  </div>

</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartlistItem from "./CartlistItem";

import {mapGetters} from 'vuex'

export default {
  name: "Cartlist",
  components: {
    Scroll,
    CartlistItem
  },
  computed: {
    ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>
.cart-list {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.cart {
  height: 100%;
  overflow: hidden;
}
</style>
