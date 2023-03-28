const { TreeNode } = require('./utils');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, res = []) {
  if (!root) return [];
  inorderTraversal(root.left, res);
  res.push(root.val);
  inorderTraversal(root.right, res);
  return res
}

const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null)))
console.log(inorderTraversal(tree));