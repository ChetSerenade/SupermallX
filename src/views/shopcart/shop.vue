<template>
  <div>
    <proclass :name="names" @sindex='get'/>
    <shoplist :Shopkeyx="Shopkey"/>
  </div>
</template>

<script>
import proclass from "./childComps/shopclass";
import shoplist from "./childComps/shoplist";
import {getShopInfo} from "@/network/Shopgory";

export default {
  name: "shop",
  components: {
    proclass,
    shoplist
  },
  data() {
    return {
      names: '分类',
      // maitKey: 0,
      Shopkey: {},
    }
  },
  methods: {
  get(maitKey) {
  //    async getShopInfo(maitKey){
  //      let res = await getShopInfo(maitKey);
  //       console.log(res.data.list);
  //       this.Shopkey = res.data.list
  //     }
      getShopInfo(maitKey).then((res) => {
        console.log(res.data.list);
        this.Shopkey = res.data.list
      })
    }
   }
}
</script>

<style scoped>


</style>
