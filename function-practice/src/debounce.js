/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-21 09:50:09
 * @LastEditTime: 2023-10-30 17:33:47
 * @LastEditors: zhiliang.zheng
 * @Description: debounce 防抖
 */
function debounce(fn, time){
  let timer = null
  let context = this
  let args = arguments
  return function(){
    // 如果同时执行两次，上次的还没有结束，就会有问题
    if(timer) clearTimeout(timer)
    timer = setTimeout(function(){
      fn.apply(context, args)
    }, time)
  }
}
