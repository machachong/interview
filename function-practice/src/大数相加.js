/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-31 09:54:15
 * @LastEditTime: 2023-10-31 10:33:46
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */
// 大数相加
const a = '1234567891234567890'
const b = '1234567891234567890'

function bigAdd(a, b) {
  const newA = BigInt(a)
  const newB = BigInt(b)
  return (newA + newB).toString()
}

function bigNumAdd(a,b){
  const max = Math.max(a.length,b.length)
  a = a.padStart(max, '0')
  b = b.padStart(max, '0')
  let res = ''
  let val = 0
  for(let i = max-1;i>=0;i--){
    const cur = parseInt(a[i])+ parseInt(b[i])+val
    val = Math.floor(cur/10)
    res = cur % 10 + res
  }
  if (val === 1) {
		res = "1" + res
  }
  return res
}

console.log(bigAdd(a,b));
console.log(bigNumAdd(a,b))
