/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-24 11:08:29
 * @LastEditTime: 2023-10-24 11:44:02
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */

// 最终结论：then方法参数回调函数返回Promise对象是会开启两次微任务：
// Promise对象状态和结果值复制触发的then
// 隐式开启的微任务
// 最终现象是：若then方法的参数回调函数的返回值为Promise对象，则会影响then方法返回值Promise对象的pending状态延迟2个微任务后改变。
// Promise.prototype.then的参数回调函数，以及Promise#resolve方法，当他们入参为一个Promise对象时，内部会开启两次微任务


// 1 ：若then方法的参数回调函数的返回值为Promise对象，则会影响then方法返回值Promise对象的pending状态延迟2个微任务后改变。
// Promise.resolve()
//   .then(() => {
//     console.log(0);
//     return Promise.resolve(4);
//   })
//   .then((res) => {
//     console.log(res);
//   });
// Promise.resolve()
//   .then(() => {
//     console.log(1);
//   })
//   .then(() => {
//     console.log(2);
//   })
//   .then(() => {
//     console.log(3);
//   })
//   .then(() => {
//     console.log(5);
//   })
// 2 Promise.resolve，当入参为Promise对象时，会直接返回该入参Promise对象
const a = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
})
Promise.resolve(a).then((res)=>{
  console.log(res);
})
// then链式调用参数，第一个then为 promise返回的，剩下的resovle值为上一个then的返回值
Promise.resolve(9)
	.then((res) => {
    console.log(res)
		console.log(5)
    return 10
	})
	.then((res) => {
    console.log("我是有return的res:" + res)
	},(rej) => {
    console.log('我是rej:'+ rej);
  })
	.then((res) => {
    console.log('我是没有return的res'+res)
	})

// 3 ：若resolve方法的参数回调函数的返回值为Promise对象，则会影响then方法返回值Promise对象的pending状态延迟2个微任务后改变。
// new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(Promise.resolve(2))
// }).then(res => {
//   console.log(res)
// })
// Promise.resolve(9)
// 	.then((res) => {
// 		console.log(5)
// 	})
// 	.then((res) => {
// 		console.log(6)
// 	})
// 	.then((res) => {
// 		console.log(7)
// 	})
// 手动实现allSettled
Promise.myAllSettled = (proms) => {
	return new Promise((resolve, reject) => {
		let resolvedCount = 0
		let count = 0
		const results = []
		for (const prom of proms) {
			let i = count
			count++
			Promise.resolve(prom)
				.then(
					(data) => {
						resolvedCount++
						results[i] = {
							status: "fullfilled",
							value: data,
						}
					},
					(reason) => {
						resolvedCount++
						results[i] = {
							status: "rejected",
							reason,
						}
					}
				)
				.finally(() => {
					if (resolvedCount >= count) {
						resolve(results)
					}
				})
		}
	})
}
// 手动实现Promise.race
Promise.myRace = function (pros) {
	return new Promise((resolve, reject) => {
		for (let pro of pros) {
			Promise.resolve(pro).then(
			  data => resolve(data),
				error => reject(error)
			)
		}
	})
}
// 手动实现Promise.all
Promise.myAll = function(pros){
  return new Promise((resolve, reject) => {
		let resArr = []
		for (let pro of pros) {
			Promise.resolve(pro).then(
				(data) => {
					resArr.push(data)
					if (resArr.length === pros.length) return resolve(resArr)
				},
				(error) => {
					return reject(error)
				}
			)
		}
  })
}
const pro1 = new Promise((res,rej) => {
  setTimeout(() => {
    res('1')
  },1000)
})
const pro2 = new Promise((res,rej) => {
  setTimeout(() => {
    rej("2")
  },2000)
})
const pro3 = new Promise((res,rej) => {
  setTimeout(() => {
    res('3')
  },3000)
})
Promise.myAll([pro1, pro2, pro3]).then((res) => {
	console.log(res)
},(error) => {
  console.log(error);
})
