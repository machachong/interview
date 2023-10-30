/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-26 10:55:39
 * @LastEditTime: 2023-10-30 16:57:56
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */
class Event {
	constructor() {
		// 创建一个队列存储方法
		this.eventList = []
	}

	on(fn) {
		if (typeof fn !== "function") return false
		// 将传入的方法存储至队列中
		this.eventList.push(fn)
	}

	emit(...res) {   
		let eventList = this.eventList
		if (eventList.length === 0) return false
		// 触发已经存储的方法
		eventList.forEach((fn) => {
			fn(...res)
		})
	}
}
// 使用
function test(data1, data2) {
	console.log(data1)
	console.log(data2)
}
function test2() {
	console.log(2222222)
}

let e = new Event()

e.on(test)
e.on(test2)
e.emit("我想我是个参数", "我想我也是一个参数")
