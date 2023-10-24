// 输入sum(1,2),输出3
// 输入sum(1,sum(2,3)),输出6
// 输入sum(sum(1,2),sum(3,4)),输出10
// sum可以不断的嵌套，不能只处理数字，需要解析整个字符串
function sum(a,b){
  console.log( arguments)
  let sum = 0;
  sum += a + b
  console.log('sum', sum);
  return sum
}
console.log(sum(sum(3, 1), sum(5,4)))
