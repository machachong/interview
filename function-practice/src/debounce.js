/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-21 09:50:09
 * @LastEditTime: 2023-10-21 10:07:59
 * @LastEditors: zhiliang.zheng
 * @Description: debounce 防抖
 */
function debounce(fn, time){
  let timer = null
  let context = this
  let args = arguments
  return function(){
    if(timer) clearTimeout(timer)
    timer = setTimeout(function(){
      fn.apply(context, args)
    }, time)
  }
}
