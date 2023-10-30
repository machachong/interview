// 异步链式调用
class O {
  constructor(){
    this.wait = Promise.resolve()
  }
  print(val){
    this.wait.then(()=>{
      console.log(val)
    })
    return this
  }
  timer(s){
    this.wait = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
		  }, s)
    })
    return this
  }
}
const o = new O()
console.log(o.print(1).timer(1000).print(2).timer(5000).print(3));