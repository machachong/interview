/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-15 10:03:43
 * @LastEditTime: 2023-10-15 10:20:02
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */
/**
 * 方法缓存
 */
function add(a, b){
  console.log('重新计算')
  return a + b
}
function cacheFun (fn){
  let cacheObj = {}
  return function(...args){
    let keys = JSON.stringify(...args)
    if(cacheObj[keys]){
      return cacheObj[keys]
    } else {
      return cacheObj[keys] = fn(...args)
    }
  }
}
const cacheAdd = cacheFun(add);

console.log(cacheAdd(1,2));
console.log(cacheAdd(1, 2))
console.log(cacheAdd(1, 2))