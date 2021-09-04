//混入 抽取两个组件中都需要使用的变量和方法,  之后在引入到需要使用的组件中,使用这个组件即可
import BackTop from "components/content/backTop/BackTop";

export const backTop = {
  components:{
    BackTop
  },
  data() {
    return {
      //是否显示返回头部小图标
      isshowbackTop: false,
    }
  },
  methods:{
    //返回顶部
    backclick(){
      this.$refs.homescroll.scrollTo(0,0,500);
    },
  }
}
