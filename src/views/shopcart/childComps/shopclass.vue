<template>
  <div class="Outer">
    <div class="left_item"
         v-for="(item,index) in Shop_list"
         :key="index" @click="itemClick(index)" :class="{active:currIndex==index}">
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import {getShop} from "@/network/Shopgory";

export default {
  name: "proclass",
  props: {
    name: {
      default() {
        return
      }
    }
  },
  data() {
    return {
      currIndex: 0,
      Shop_list: null,
      Shop_maitKey: 0
    }
  },
  created() {
    getShop(this.iid).then((res) => {
      if (res) {
        this.Shop_list = res.data.category.list;
        //刚进分类页面，相当于是点击了itemClick(0)
        this.itemClick(0);
      }
    })
  },
  methods: {
    itemClick(index) {
      this.currIndex = index;
      this.Shop_maitKey = this.Shop_list[index].maitKey;
      //子向父把this.Shop_maitKey传过去
      this.$emit('sindex',this.Shop_maitKey);
    }
  }
}
</script>

<style scoped>
.Outer {
  position: fixed;
  float: left;
  width: 25%;
  padding-bottom: 10px;
  background-color: #f6f6f6;
}

.left_item {
  height: 100%;
  line-height: 2rem;
}

.left_item p {
  width: 100%;
  text-align: center;
  color: rgb(100, 100, 100);
  display: inline-block;
  border-left: 0.2rem solid #f6f6f6;
}

.left_item.active {
  background-color: white;
}

.left_item.active p {
  color: var(--color-high-text);
  font-weight: 600;
  border-left: 0.2rem solid var(--color-high-text);
}
</style>
