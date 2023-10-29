// 手写instanceof
// instanceof其实就用了链表的概念


Object.prototype.myInstanceof = function(type) {
  let that = this;
  console.log(this);
  while (that) {
    if(that === type.prototype) return true
    that = that.__proto__
  }
  return false
}
console.log([].myInstanceof(Object))