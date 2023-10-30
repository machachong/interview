/*
 * @Author: zhiliang.zheng
 * @Date: 2023-10-30 16:53:08
 * @LastEditTime: 2023-10-30 17:01:56
 * @LastEditors: zhiliang.zheng
 * @Description: 链表
 */

// 反转链表
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	let pre = null
	let cur = head
	while (cur) {
		const next = cur.next
		cur.next = pre
		pre = cur
		cur = next
	}
	return pre
}
