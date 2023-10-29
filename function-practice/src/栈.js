/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-29 10:58:04
 * @LastEditTime: 2023-10-29 11:27:26
 * @LastEditors: zhiliang.zheng
 * @Description: 
 */
// 栈
// 一个后进先出的数据结构
// 按照常识理解就是有序的挤公交，最后上车的人会在门口，然后门口的人会最先下车

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
// 示例 2：

// 输入：s = "(*)"
// 输出：true
// 示例 3：

// 输入：s = "(*))"
// 输出：true

var isValid = function(s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stk = [];
    for (let ch of s){
      console.log(pairs.has(ch))
        if (pairs.has(ch)) {
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                return false;
            }
            stk.pop();
        } 
        else {
            stk.push(ch);
        }
    };
    return !stk.length;
};
console.log(isValid("()[]{}"))