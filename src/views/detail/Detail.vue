<template>
  <!--  详情页-->
  <div id="detail">
    <!--    导航栏-->
    <DetailNavBar class="navbar" @titleclick="titleclick" ref="nav"></DetailNavBar>
    <!--    滚动组件                                             需要传递参数，开启监听滚动-->
    <Scroll class="Scroll" ref="homescroll" @scroll="contentsceoll" :probeType="3">
      <!--    轮播图-->
      <detail-swiper :topimages="TopImages"></detail-swiper>
      <!--    商品信息  将这里拿到的数据，传递给子组件-->
      <detail-base-info :goods="goods"></detail-base-info>
      <!--    店铺信息-->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!--      详情展示-->
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <!--      参数展示-->
      <detail-param-info ref="params" :paramInfo="paramInfo"></detail-param-info>
      <!--      评论展示-->
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <!--      推荐-->
      <goodslist ref="recommend" :goods="recommends"></goodslist>
    </Scroll>
    <back-top @click.native="backclick" v-show="isshowbackTop"></back-top>
    <!--    底部导航     监听子组件的点击事件-->
    <detail-bottom-bar @addcart="addcart"></detail-bottom-bar>
  </div>

</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import Goodslist from "components/content/goods/Goodslist";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";

import {debounce} from 'common/utils';
import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'
import {backTop} from 'common/mixin';

import {mapActions} from 'vuex'



export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Goodslist,
    Scroll,
  },
  data() {
    return {
      //当前 详情的id
      iid: null,
      //详情数据
      TopImages: [],
      //商品信息
      goods: {},
      //店铺信息
      shop: {},
      //展示照片
      detailInfo: {},
      //参数信息
      paramInfo: {},
      //评论信息
      commentInfo: {},
      //推荐信息
      recommends: [],
      //导航主题对应的距离
      themeTopYs: [],
      //防抖函数的接收
      getThemeTopY: null,
      //记录当前滚动的距离对应的主题
      currentindex: 0
    }
  },
  //混入
  mixins: [backTop],
  created() {
    //1 拿到传递过来的id
    this.iid = this.$route.params.iid;
    //2 请求数据,在这里写 不好,最好在network中的detail.js中封装
    getDetail(this.iid).then((res) => {
      // console.log(res);
      //1获取数据
      const data = res.result;
      //2获取顶部轮播图
      this.TopImages = data.itemInfo.topImages;
      //3获取商品信息,通过一个类进行数据的整合
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      //4店铺信息
      this.shop = new Shop(data.shopInfo);
      //5保存商品的详情信息
      this.detailInfo = data.detailInfo;
      //6参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
      //7取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
        // console.log(this.commentInfo);
      }
      //8 推荐消息
      getRecommend().then((res) => {
        this.recommends = res.data.list;
        // console.log(this.recommends);
      })
    })
    //封装防抖操作
    this.getThemeTopY = debounce(() => {
      //这里需要将代码放到图片加载完成以后，在进行获取到顶部的距离，
      //之前位置不对，就是因为图片没加载就获取距离，导致距离太小
      //清空数据
      this.themeTopYs = [];
      //获取对应的主题到顶部的距离，在联动时用到  使用 offsettop 获取距离
      this.themeTopYs.push(0) //商品
      //这里的的$refs.名称拿到的不是对应的组件，必须要使用$el 才能拿到，在使用这个offsetTop,就可以拿到距头部的距离
      //offsetTop 值不对的时候，一般都是图片的问题
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)  //参数到顶部的距离
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)  //评论
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44)  //推荐
      this.themeTopYs.push(Number.MAX_VALUE);//表示数字的最大值
    }, 200)
  },
  //更新的周期函数
  // updated() {
  //   //清空数据
  //   this.themeTopYs=[];
  //   //获取对应的主题到顶部的距离，在联动时用到  使用 offsettop 获取距离
  //   this.themeTopYs.push(0) //商品
  //   //这里的的$refs.名称拿到的不是对应的组件，必须要使用$el 才能拿到，在使用这个offsetTop,就可以拿到距头部的距离
  //   //offsetTop 值不对的时候，一般都是图片的问题
  //   this.themeTopYs.push(this.$refs.params.$el.offsetTop-44)  //参数到顶部的距离
  //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44)  //评论
  //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44)  //推荐
  // },
  methods: {
    //将 actions中的函数 映射的组件中
    ...mapActions(['addlist']),
    //进行数据的刷新
    imageLoad() {
      //图片加载完成后刷新数据
      this.$refs.homescroll.refresh();
      //在调用封装的防抖函数
      this.getThemeTopY();
    },
    //获取点击的 导航是谁 根据这个去进行滚动相应的位置
    titleclick(index) {
      // console.log(index);
      //滚动的函数，在 Scroll组件中封装好了
      this.$refs.homescroll.scrollTo(0, (-this.themeTopYs[index]), 100)
    },
    //监听滚动距离,接收子组件传递来的事件
    contentsceoll(position) {
      //1 判断当前滚动的距离是否大于1000
      this.isshowbackTop = (-position.y) > 1000
      //获取y值
      const positionY = -position.y;
      //positionY 和主题中的值进行对比
      let lenght = this.themeTopYs.length;
      //将对应的距离，设置对应的主题
      for (let i = 0; i < lenght - 1; i++) {
        if (this.currentindex !== i && (positionY >= this.themeTopYs[i] && positionY <= this.themeTopYs[i + 1])) {
          this.currentindex = i;
          //将对应的主题值，传递给子组件
          this.$refs.nav.currentIndex = this.currentindex;
        }
      }
    },
    //加入购物车 (1 Promise   2 mapActions)
    addcart() {
      //获取购物车需要展示的信息
      const product = {}
      product.iid = this.iid;
      product.image = this.TopImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      //将数据加入到数据仓库
      //映射的方式
      this.addlist(product).then(res => {
        console.log(res);
        //使用自己封装的插件
        this.$toast.show(res)
      })

      //第一种
      // this.$store.dispatch('addlist', product).then(res => {
      //   console.log(res);
      // })

    },
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}

.Scroll {
  height: calc(100% - 102px);
}

.navbar {
  position: relative;
  z-index: 9;
  background: #fff;
}
</style>
