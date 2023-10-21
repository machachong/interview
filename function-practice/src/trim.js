/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-21 09:49:48
 * @LastEditTime: 2023-10-21 10:49:53
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */
// *表示匹配>=0个前面要匹配的字符
// + 表示匹配>=1个前面要匹配的字符
String.prototype.trim = function(){
  return this.replace(/^\s+|\s+$/g, '')
}
String.prototype.deleteAllNum = function () {
	return this.replace(/\d/g, "")
}
const phone = /\d{11}/g

let a = '   a1  b1  c1  '
let b = 17621732566
let c = 123456
console.log(a)
console.log(a.trim());
// console.log(a.deleteAllNum())