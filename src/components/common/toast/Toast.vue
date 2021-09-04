<template>
  <div class="toast" v-show="isshow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {},
  data() {
    return {
      message: '',
      isshow: false
    }
  },
  methods: {
    show(mesage, duration=2000) {
      this.isshow = true
      this.message = mesage
      setTimeout(()=>{
        this.isshow=false
        this.message=''
      },duration)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  /*根据自己的宽度偏移的距离*/
  transform: translate(-50%, -50%);
  padding: 5px 10px;
  z-index: 99;
  color: #fff;
  background-color: rgba(0, 0, 0, .7);
}
</style>
