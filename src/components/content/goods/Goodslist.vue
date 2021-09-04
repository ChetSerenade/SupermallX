<template>
  <div class="goods" >
    <Goodslistitem v-for="(item,index) in goods" :key="index" :goodslist="item">
    </Goodslistitem>
  </div>
</template>

<script>
import Goodslistitem from "./Goodslistitem";
export default {
  name: "goodslist",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Goodslistitem
  }
}
</script>

<style scoped>
.goods{
  display: flex;
  /*是否换行 默认是不换行*/
  flex-wrap: wrap;
  /*均等分*/
  justify-content: space-around;
  padding: 2px;
}
</style>
