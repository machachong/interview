/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-24 16:32:16
 * @LastEditTime: 2023-10-24 17:41:44
 * @LastEditors: zhiliang.zheng
 * @Description: 双指针
 */
// 
// var compress = function (chars) {
// 	let num = chars.length
// 	for (let i = 0; i < chars.length; i++) {
// 		let num = 1
// 		for (let j = chars.length; j > i; j--) {
// 			if (chars[i] == chars[j]) {
// 				num++
// 				chars.splice(j, 1)
// 			}
// 		}
// 		if (num === 1) continue
// 		const newvalue = num.toString().split("")
// 		chars.splice(i + 1, 0, ...newvalue)
// 		i += newvalue.length
// 	}
// 	console.log(chars)
// 	return chars.length
// }
var compress = function(chars) {
    const n = chars.length;
    let write = 0, left = 0;
    for (let read = 0; read < n; read++) {
        if (read === n - 1 || chars[read] !== chars[read + 1]) {
            chars[write++] = chars[read];
            let num = read - left + 1;
            if (num > 1) {
                const anchor = write;
                while (num > 0) {
                    chars[write++] = '' + num % 10;
                    num = Math.floor(num / 10);
                }
                reverse(chars, anchor, write - 1);
            }
            left = read + 1;
        }
    }
    console.log(chars)
    return write;
};
const reverse = (chars, left, right) => {
    while (left < right) {
        const temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;
        left++;
        right--;
    }
}
const str = ["a", "a", "b", "b", "c", "c", "c"]
console.log(compress(str))