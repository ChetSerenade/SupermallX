import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'

export default  {
  [ADD_COUNTER](state,payload){
    //如果存在就让数量加一
    payload.count++
  },
  [ADD_TO_CART](state,payload){
    //如果不存在，就加入数组中
    payload.count = 1;
    //这里的这个属性，是控制模块中的商品是否选中，默认加载到购物车的商品是选中的
    payload.checked=true;
    state.cartList.push(payload);
  }
}
