import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'

export default {
  addlist(context, payload) {
    console.log(context, payload);
   return new Promise((resolve)=>{
     //1查找之前数据中是否有这个商品
     let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
     //2判断oldProduct
     if (oldProduct) {
       context.commit(ADD_COUNTER,oldProduct)
       resolve('当前数量加一')
     } else {
       context.commit(ADD_TO_CART,payload)
       resolve('添加了新的商品')
     }
   })
  }
}
