<template>
  <div class="recommends">
    <div v-for="(ite,index) in recommends" class="recommend-item" :key="index">
      <a :href="ite.link">
        <img :src="ite.image">
      </a>
      <div>{{ite.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      // 默认值
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommends{
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0px 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
