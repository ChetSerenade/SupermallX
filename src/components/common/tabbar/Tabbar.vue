<template>
<!--  底部导航-->
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
}
</script>

<style scoped>
#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  box-shadow: 0 -3px 1px rgba(100,100,100,0.2);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
