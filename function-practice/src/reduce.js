/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-18 11:34:07
 * @LastEditTime: 2023-10-21 11:02:01
 * @LastEditors: zhiliang.zheng
 * @Description: 手写reduce
 */

Array.prototype.reduce = function(fn, initialValue){
  let context = this 
  if(context.length === 0) {
    return;
  }
  let res =  initialValue ? initialValue : context[0]
  for (let index = 0; index < context.length; index++) {
    res = fn(res, context[index])
    console.log(res)
  }
  return res
}
const newValue = [1, 2, 3].reduce(function (a, b) {
	return a + b
}, 10)
console.log(newValue)