/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-15 10:03:24
 * @LastEditTime: 2023-10-21 11:28:05
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
	return args.length < fn.length ? (...sec) => curry(fn, ...args, ...sec) : fn(...args)
}
let curryFun = curry(add)
curryFun(1)(2)(3)
