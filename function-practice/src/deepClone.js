// 手写deepclone
const deepclone = function(obj){
  if(typeof obj === 'object'){
    let newValue = {}
    for (let key in obj) {
      newValue[key] = deepclone(obj[key])
    }
    return newValue
  } 
  return obj
}
const a = { a: 1, b: {b1: 1}}
const b = deepclone(a)
console.log(b);
console.log(b.b === a.b );
let alias
console.log(alias);
console.log(Object.prototype.__proto__);
