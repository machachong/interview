/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-23 10:01:13
 * @LastEditTime: 2023-10-30 18:15:01
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */
// 手写deepclone

// type _typeObj = { [anyKey: string]: any }

const deepclone = function(obj){
    let res = {}
    for (let i in obj) {
      if(typeof obj[i] === Object ){
        res[i] = deepclone(obj[i])
      } else {
        res[i] = obj[i]
      }
    }
    return res
}
const a = { a: 1, b: { b1: 1 } }
const b = deepclone(a)
const c = JSON.parse(JSON.stringify(a))
console.log(b)
console.log(b === a, c===a)