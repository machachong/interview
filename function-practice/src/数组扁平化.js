/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-30 17:27:37
 * @LastEditTime: 2023-10-30 17:29:29
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */
let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]

//  let arr2 = arr.flat(Infinity);
// arr
//   .toString()
//   .split(",")
//   .map((item) => Number(item));
// concat可以展开一层
// while (arr.some((item) => Array.isArray(item))) {
//   arr = [].concat(...arr);
// }


const flat = (arr) =>
	arr.reduce((prev, curr) => {
		return Array.isArray(curr) ? prev.concat(...flat(curr)) : prev.concat(curr)
	}, [])

console.log(flat(arr))


// 将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组
const flatten4 = (arr) => {
	Array.prototype.flat = function () {
		return [].concat(...this.map((item) => (Array.isArray(item) ? item.flat() : [item])))
	}
	Array.prototype.unique = function () {
		return [...new Set(this)]
	}
	const sort = (a, b) => a - b
	return arr.flat().unique().sort(sort)
	// return arr.toString().split(',').sort((a,b)=>a-b).map(Number)
	// return Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b)
}
// 可以传递参数
function flatDeep2(arr, d = Infinity) {
	return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep2(val, d - 1) : val), []) : arr.slice()
}
