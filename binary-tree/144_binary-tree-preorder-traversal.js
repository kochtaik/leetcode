const { TreeNode } = require('./utils');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root, res = []) {
  if (!root) return [];

  res.push(root.val);

  preorderTraversal(root.left, res)
  preorderTraversal(root.right, res)

  return res;
};

const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null)))
console.log(preorderTraversal(tree))
