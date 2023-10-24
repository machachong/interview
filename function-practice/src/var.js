/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-23 16:01:57
 * @LastEditTime: 2023-10-23 16:02:11
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */
a = 1
var a; // var 允许隐式声明  如果不赋值则为undfined
console.log(a);
b = 2;
let b; // let 必须先定义后使用，如果不赋值则为undfined
console.log(b);
const c = 3; // const 定义时必须赋值
console.log(c);