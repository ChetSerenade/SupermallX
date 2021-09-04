<template>
  <div class="list_tu">
    <div class="list_tu1" v-for="(item,index) in Shopkeyx" :key="index">
      <a href="item.link">
        <img :src="item.image">
        <p>
          {{ item.title }}
        </p>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  name: "shoplist",
  props: {
    Shopkeyx: {
      default() {
        return [];
      }
    },
  },
  data() {
    return {};
  },
}
</script>

<style scoped>
.list_tu {
  float: right;
  padding-left: 30px;
  width: 75%;
  background-color: #ff5777;
}

.list_tu1 {
  padding-left: 2px;
  display: inline-block;
  margin: 0.3rem 0.25rem  0  0.3rem;
}

.list_tu1 li {
  list-style: none;
}

.list_tu1 img {
  width: 90px;
  border-radius: 60px;
}

.list_tu1 p {
  margin-top: 0.3rem;
  text-align: center;
}
</style>
