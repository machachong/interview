/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-18 16:57:58
 * @LastEditTime: 2023-10-27 14:19:29
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */
console.log(1);
class Obj {
  constructor(){
    this.a = 10
  }
  b(){
    return this.a*2
  }
  c(){
    return 2*Math.PI*this.a
  }
}
const objuse = new Obj();
console.log(objuse.b())
console.log(objuse.c())
