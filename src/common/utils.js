//防抖函数
export function  debounce(fnc,delay=100){
  let timer=null;
  return function (...args){
    //如果来的太快 这里就是会取消上一次的函数
    if (timer) clearTimeout(timer)
    timer=setTimeout(()=>{
      //apply作用就是 这里调用了fnc中的函数，并将args作为参数传递过去
      fnc.apply(this,args)
    },delay)
  }
}

//将时间格式化的函数
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}


