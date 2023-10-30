/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-30 17:05:20
 * @LastEditTime: 2023-10-30 17:16:37
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */
Function.prototype.myCall = function (context, ...args) {
	// 不传第一个参数默认为windows
	context = context || window
	//普通函数的this指向调用者, 故this就是要改造的那个函数
	//将函数挂载到目标对象上
	context.func = this
	//执行函数，并保存返回值
	let res = context.func(...args)
	//删除之前挂载在目标对象上的函数，还原目标对象
	delete context.func
	//return返回值
	return res
}

Function.prototype.myBind = function (context, ...args) {
	let _this = this
	return function Fn() {
		//因为返回值是一个函数，需要判断 new Fn() 的情况
		//new 会让 this 指向这个新的对象，所以直接判断 Fn 是否在 this 的原型链上
		if (this instanceof Fn) {
			return new _this(...args, ...arguments)
		}
		//调用 call 改变 this 指向
		return _this.call(context, ...args, ...arguments)
	}
}

Function.prototype.myCall = function (thisArg, ...args) {
	// 替换为全局对象：global或window
	thisArg = thisArg || global
	const prop = Symbol()
	thisArg[prop] = this
	let result = thisArg[prop](...args)
	delete thisArg[prop]
	return result
}
Function.prototype.myApply = function (thisArg, args) {
	// 替换为全局对象：global或window
	thisArg = thisArg || global
	const prop = Symbol()
	thisArg[prop] = this
	let result = thisArg[prop](...args)
	delete thisArg[prop]
	return result
}
obj.funny.myCall(users,1,2,3)

Function.prototype.myBind = function (thisArg, ...args) {
	// this指向的是fn
	const self = this
	// 返回绑定函数
	return function () {
		// 包装了原函数对象
		return self.apply(thisArg, args)
	}
}