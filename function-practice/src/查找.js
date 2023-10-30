/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-30 18:57:13
 * @LastEditTime: 2023-10-30 18:57:17
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */
// 查找是在数据集中寻找特定元素的过程。常见的查找算法有线性查找和二分查找
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // 目标元素不存在
}
const sortedArray = [1, 3, 5, 7, 9];
const target = 5;
const result = binarySearch(sortedArray, target);
console.log(result); // 输出