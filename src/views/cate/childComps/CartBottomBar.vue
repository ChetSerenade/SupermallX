<template>
  <div class="botton-bar">
    <div class="chck">
      <check-button
        :ischeck="isselect"
        class="chckbtn"
        @click.native="btnclick"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="cente">
      合计{{ totalPrice }}
    </div>
    <div class="btnriht" @click="btnl">
      合计为({{ checkLength }})
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    //这里计算全部价格
    totalPrice() {
      return '￥' + this.$store.state.cartList.filter(item => {
        //先判断是否为选中的状态
        return item.checked;
      }).reduce((prevalue, item) => {
        //之后计算价格
        return prevalue + item.price * item.count;
      }, 0).toFixed(2)
    },
    checkLength() {
      //过滤 获取当前选中的数据长度
      return this.$store.state.cartList.filter(item => item.checked).length;
    },
    //判断是否为全选
    isselect() {
      //如果是没有数据的时候就是不选中状态
      if (this.$store.state.cartList.length === 0) {
        return false
      }
      //第一种filter 查找没有选中的，进行取反
      // return !(this.$store.state.cartList.filter(item => !item.checked).length);
      //第二种 find  都是高阶函数
      return !this.$store.state.cartList.find(item => !item.checked);
    }
  },
  //全选操作
  methods: {
    btnclick() {
      if (this.isselect) { //全部选中
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else {
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    },
    //判断购物车是否有物品就去结算，如果没有就给提示
    btnl(){
      if(this.checkLength === 0){
        this.$toast.show('请添加商品')
      }
    }
  },

}
</script>

<style scoped>
.botton-bar {
  height: 40px;
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
  background: #eeeeee;
  display: flex;
  align-items: center;
}

.chck {
  display: flex;
  width: 100px;
  padding: 0px 5px;
}

.cente {
  flex: 1;
}

.chckbtn {
  width: 20px;
  height: 20px;
  line-height: 20px;
}

.btnriht {
  right: 0;
  width: 25%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding: 0px 5px;
  background: red;
  color: #fff;
}
</style>
