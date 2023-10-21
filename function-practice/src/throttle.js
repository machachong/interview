function throttle(fn, time){
  let timer = null
  let context = this
  let args = arguments
  return function(){
    if(timer) clearInterval(timer)
    timer = setInterval(function(){
      fn.apply(context, args)
    }, time)
  }
}

throttle(function(){console.log(222);}, 1000)