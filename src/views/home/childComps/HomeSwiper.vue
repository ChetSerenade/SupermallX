<template>
  <div>
    <Swiper>
      <SwiperItem v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index';

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      //记录发送事件的次数
      isload: false
    }
  },
  components: {
    SwiperItem,
    Swiper
  },
  methods: {
    //监听轮播图的图片是否加载完成
    imageLoad() {
      if (!this.isload) {
        this.$emit('swiperImageLoad')
        //就发送一次就不在发送事件
        this.isload=true;
      }
    },

  }
}
</script>

<style scoped>

</style>
