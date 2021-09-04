<template>

  <div class="goodslist" @click="itemclick">
    <img v-lazy="showImage" alt="" @load="imageload">
    <div class="goodslistitem">
      <p>{{goodslist.title}}</p>
      <div>
        <span class="price">{{goodslist.price}}</span>
        <span class="cfav">{{goodslist.cfav}}</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "goodslistitem",
  props:{
    goodslist:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  //复用组件时，由于数据格式的不同 需要判断,传过来的数据是否符合某种格式
  computed:{
    showImage(){
      console.log(this.goodslist)
    return this.goodslist.image || this.goodslist.show.img
    }
  },
  methods:{
    //监听图片加载完成的方法，要执行的函数
    //使用事件总线，传递，孙子之间的通讯
    imageload(){
        this.$bus.$emit('itemimagelode')
    },
    //跳转详情页,传递参数
    itemclick(){
      this.$router.push('/datail/'+this.goodslist.iid);
    }
  }
}
</script>

<style scoped>
.goodslist{
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}
.goodslist img{
  width: 100%;
  border-radius: 5px;
}
.goodslistitem{
  position: absolute;
  font-size: 12px;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goodslistitem p{
  /*溢出隐藏*/
  overflow: hidden;
  /*显示...*/
  text-overflow: ellipsis;
  /*禁止换行*/
  white-space: nowrap;
  margin-bottom: 3px;
}
.price{
  margin-right: 20px;
  color: var(--color-tint);
}
.cfav{
  position: relative;
}
.cfav::before{
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  left: -15px;
  top:-1px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}

</style>
