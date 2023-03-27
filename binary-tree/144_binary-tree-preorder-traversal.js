const { TreeNode } = require('./utils');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const res = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return res;
};

const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null)))
console.log(preorderTraversal(tree))
