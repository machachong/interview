/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-24 22:56:47
 * @LastEditTime: 2023-10-24 23:12:25
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */
// 无重复字符的最长子串

// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
var lengthOfLongestSubstring = function (s) {
	let res = []
	let max = 0
	for (let i = 0; i < s.length; i++) {
		if (s.includes(s[i])) {
			res.splice(0, res.indexOf(s[i]) + 1)
		}
		res.push(s[i])
		max = Math.max(max, res.length)
	}
	return max
}
const s = 'abcabcbb'
console.log(getLength(s))