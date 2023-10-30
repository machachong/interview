/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-23 10:01:13
 * @LastEditTime: 2023-10-30 19:07:05
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */
// 动态规划是一种通过将问题分解为子问题并存储子问题的解来解决复杂问题的方法。它通常用于优化问题，以减少计算时间\
//  斐波那切数列，又称黄金分割数列。斐波纳契数列以如下被以递归的方法定义：F(0)=0，F(1)=1，F(n)=F(n-1)+F(n-2)（n≥2，n∈N*）；这个数列从第三项开始，每一项都等于前两项之和

var fib = function (n) {
	if (n == 0) {
		return 0
	} else if (n == 1) {
		return 1
	} else {
		return fib(n - 1) + fib(n - 2)
	}
}
fib(5)
