/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-26 10:55:39
 * @LastEditTime: 2023-11-01 10:16:03
 * @LastEditors: zhiliang.zheng
 * @Description: 发布订阅
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
class EventBus {
	constructor() {
		this.eventList = {}
	}
	on(eventName, callBack, ...args) {
		if (this.eventList[eventName]) {
			this.eventList[eventName].push({ callBack, args })
		} else {
			this.eventList[eventName] = [{ callBack, args }]
		}
	}
	emit(eventName, ...args) {
		for (let i in this.eventList) {
			if (i === eventName) {
				this.eventList[i].forEach((item) => {
					item.callBack(...item.args, ...args)
				})
				break
			}
		}
	}
	off(eventName, callBack) {
		if (this.eventList[eventName]) return
		const res = this.eventList[eventName]?.indexOf(callBack)
		if (res !== -1) this.eventList[eventName]?.splice(res, 1)
	}
	once(eventName, callBack, ...args) {
		const fn = (args) => {
			callBack(args)
			this.off(eventName, callBack)
		}
		this.off(eventName, fn, ...args)
	}
}
// 使用
function test(data1, data2) {
  console.log(arguments);
}
function test2() {
	console.log(2222222)
}

let e = new EventBus()

 e.on("click", test2, 'on')
 e.emit("click", test)
 e.once("test", test, 'once')
 e.emit("test", test)
