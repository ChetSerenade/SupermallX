module.exports={
  plugins:{
    autoprefixer:{},
    'postcss-px-to-viewport':{
      viewportWidth: 375, //视口的宽度。对应的是我们设计搞的宽度
      viewportHeight: 667, //视口的高度。对应的是我们设计搞的高度
      unitPrecision: 5, // 指定px 转换的视窗单位的小数位
      viewportUnit: 'vw', //指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['ignore','tab-bar','tab-bar-item'],//指定不需要转化的类
      minPixelValue: 1,//小于等于1px不进行视窗转化
      mediaQuery: false,//允许在媒体查询中转换px
      exclude:[/TabBar/]//必须是正则，匹配文件
    }
  }
}
