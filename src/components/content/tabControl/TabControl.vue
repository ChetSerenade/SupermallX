<template>
<!--  首页主题的模块-->
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index"
         :class="{action:index == currentindex}"
         @click="itemclick(index)" >
      <span>
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentindex:0
    }
  },
  //点击切换
  methods:{
    itemclick(index){
      this.currentindex=index;
      // 传递给父组件一个自定义方法
      // console.log(index);
      this.$emit('tabClick',index);
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background: #fff;
  /*z-index: 9;*/
}
.tab-control div{
  flex: 1;
}
.tab-control div span{
  padding: 4px;
}
.tab-control div.action span{
  border-bottom: 2px solid var(--color-high-text);
}
.action{
  color: var(--color-high-text);
}
</style>
