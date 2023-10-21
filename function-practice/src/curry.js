/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-15 10:03:24
 * @LastEditTime: 2023-10-21 13:40:39
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */
/**
 * 函数柯里化
 */
function add(a,b,c){
  return a+b+c
}
function curry(fn, ...args) {
  console.log(fn.length, ...args);
  return args.length < fn.length 
    ? 
    (...sec)=>curry(fn,...args,...sec)
    :
    fn(...args)
}
let curryFun = curry(add)
console.log(curryFun(1)(2)(3))