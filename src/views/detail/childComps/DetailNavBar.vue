<template>
  <div>
<!--    封装的详情页导航-->
    <nav-bar>
      <div slot="navleft" @click="backclick">
        <img src="~assets/img/common/back.svg" alt="" class="tapimg">
      </div>
      <template v-slot:center>
        <ul class="detailul">
          <li v-for="(item,index) in title" :key="index"
              :class="{action:currentIndex===index}"
              @click="detailclick(index)">{{ item }}
          </li>
        </ul>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      //记录当前点击的谁
      currentIndex: 0
    }
  },
  methods:{
    detailclick(index){
      this.currentIndex=index;
      this.$emit("titleclick",index);
    },
    //返回 上一级操作
    backclick(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.detailul {
  display: flex;
  list-style: none;
}

.detailul li {
  flex: 1;
}
.action{
  color: var(--color-tint);
}
.tapimg{
  margin-top: 11px;
}
</style>
