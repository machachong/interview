/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-24 22:31:24
 * @LastEditTime: 2023-10-24 22:34:38
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */
console.time('for');
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13
,14,15]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += arr[i]
}
// arr.forEach((item) => {
//   sum += item
// })
console.timeEnd("for")
