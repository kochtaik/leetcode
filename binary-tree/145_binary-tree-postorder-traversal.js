const { TreeNode } = require('./utils');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root, res = []) {
  if (!root) return [];
  postorderTraversal(root.left, res);
  postorderTraversal(root.right, res);
  res.push(root.val);
  return res;
};

const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null)))
console.log(postorderTraversal(tree));