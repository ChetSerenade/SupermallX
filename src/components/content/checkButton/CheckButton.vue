<template>
  <div class="checkbutton" :class="{check:ischeck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
    ischeck:{
      type:Boolean,
      default(){
        return false
      }
    }
  }
}
</script>

<style scoped>
.checkbutton{
  border-radius: 50%;
  border: 2px solid #666666;
}
.check{
  background: red;
  border-color: red;
}
</style>
