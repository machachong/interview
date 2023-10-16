/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-16 10:26:22
 * @LastEditTime: 2023-10-16 11:14:42
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */

const { flow, flowRight } = require("lodash")

/**
 * 函数合并
 */
function a(n){
  return n+1
}
function b(n) {
	return n + 2
}
function c(n) {
	return n + 3
}
function merge(...fn){
  if(fn.length === 1) return fn[0]
  return fn.reduce(
    (a,b)=>{
      return (...args) => a(b(...args))
    }
  )
  
}
let flowed = merge(a, b, c)
const value = flowed(10)
console.log(value)