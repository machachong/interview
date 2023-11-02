// 二叉树 树中每个节点 最多只能有两个子节点


const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
      left: {
        val: "H",
      },
      right: {
        val: "G",
      },
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};
/**
 * 判断二叉树的最大深度
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){
      return 0
    }
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)
    return Math.max(left, right)+1
};
// 广度遍历优先 主要利用队列的先进先出
// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：[[1],[3,2,4],[5,6]]
function levelOrder(root) {
    if (!root) {
        return [];
    }
    const ans = [];
    const queue = [root];
    while (queue.length) {
        const cnt = queue.length;
        const level = [];
        for (let i = 0; i < cnt; ++i) {
            const cur = queue.shift();
            level.push(cur.val);
            if(cur.left){
              queue.push(cur.left)
            }
            if(cur.right){
              queue.push(cur.right)
            }
        }
        ans.push(...level);
    }
    return ans;
};

// 深度优先遍历  主要利用栈的先进后出
function levelOrdershen  (node)  {
    if(!node) return []
    return [
      node.val,
      ...levelOrdershen(node.left),
      ...levelOrdershen(node.right)
    ]
}

console.log(levelOrder(root))

// 翻转二叉树
// 输入：root = [5,7,9,8,3,2,4]
// 输出：[5,9,7,4,2,3,8]

const revers = function(root){

  return root  ? {
    val: root.val,
    left: revers(root.right),
    right: revers(root.left)
  } : null
}
// console.log((revers(root)));

// 二叉树先序遍历，中序遍历，后序遍历

// 递归方法
// 先序
const beforRecur = (root) => {
  if(!root) return []
  return [root.val, ...beforRecur(root.left), ...beforRecur(root.right)]
}
// 中序
const middleRecur = (root) => {
  if (!root) return [];
  return [...middleRecur(root.left), root.val, ...middleRecur(root.right)];
};
// 后序
const endRecur = (root) => {
  if (!root) return [];
  return [...middleRecur(root.left), ...middleRecur(root.right), root.val,];
};
// 循环
// 先序 根左右
const beforFor =  (root) => {
  const res = [];
  const stack = [];
  if (root) stack.push(root);
  while (stack.length) {
    const n = stack.pop();
    res.push(n.val);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
  return res;
}
// 中序 左根右
const middleFor = (root) => {
  let node = root;
  const stack = [], res = [];
  while (true) {
    if (node) stack.push(node);
    while (node?.left) {
      stack.push(node.left);
      node = node.left;
    }

    if (!stack.length) break;

    node = stack.pop();

    res.push(node.val);
    node = node?.right;
  }

  return res;
};
// 后序 左右根
const endFor = (root) => {
  let res=[];
  if(!root) return res;
  const stack=[];
  // 根节点入栈
  stack.push(root);
  while(stack.length){
      const cur=stack.pop();
      res.unshift(cur.val);
      if(cur.left){
          stack.push(cur.left);
      }
      if(cur.right){
          stack.push(cur.right);
      }
  }
  return res;
};

console.log(endFor(root))