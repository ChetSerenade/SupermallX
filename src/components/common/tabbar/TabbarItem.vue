<template>
  <!--  底部导航-->
  <div class="tab-bar-item" @click="inpath">
    <div v-if="!actions">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name="actions-img"></slot>
    </div>
    <div :style="actice">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: {
    path: String,
    activecolor:{
      type:String,
      //如果不传参数，默认是红色
      defaults:'red'
    }
  },
  // data(){
  //   return{
  //     // actions:true,
  //   }
  // },
  computed: {
    actions() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    actice(){
      return this.actions ? {color:this.activecolor} : {}
    }
  },
  methods: {
    inpath() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}

.tab-bar-item img {
  margin-top: 3px;
  margin-bottom: 2px;
  width: 24px;
  height: 24px;
  /*//垂直居中*/
  vertical-align: middle;
}

.actice {
  color: red;
}
</style>
