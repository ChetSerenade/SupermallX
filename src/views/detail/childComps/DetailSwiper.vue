<template>
  <div >
  <swiper class="swiper">
    <swiperItem v-for="(i,index) in topimages" :key="index">
      <img :src="i">
    </swiperItem>
  </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

export default {
  name: "DetailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props: {
    topimages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.swiper{
  height: 300px;
  overflow: hidden;
}
</style>
