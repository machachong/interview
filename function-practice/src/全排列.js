/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-18 11:22:00
 * @LastEditTime: 2023-10-21 16:17:05
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]
function getArr(nums){
  let res = []
  // used: 已经使用过的数字
  // item: 循环生成的一个排列组
  findItem([], [])
  function findItem(used, item){
    for(let i of nums){
      if(used[i]) continue;
      used[i] = true
      item.push(i)
      if(item.length === nums.length) {
        res.push(JSON.parse(JSON.stringify(item)))
      } else {
        findItem(used, item)
      }
      console.log(111,used, item);
      used[i] = false
      item.pop()
      console.log(222,used, item)
    }
  }
  return res
}
console.log(getArr([1,2,3]))