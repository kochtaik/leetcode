const { TreeNode } = require('./utils');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right && targetSum === root.val) return true;

  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

const r = new TreeNode(5);
r.left = new TreeNode(4);
r.left.left = new TreeNode(11);
r.left.left.left = new TreeNode(7);
r.left.left.right = new TreeNode(2);
r.right = new TreeNode(8);
r.right.left = new TreeNode(13);
r.right.right = new TreeNode(4);
r.right.right.right = new TreeNode(1);
console.log(hasPathSum(r, 22))

// const r = new TreeNode(1);
// r.left = new TreeNode(2);
// r.right = new TreeNode(3);
// console.log(hasPathSum(null, 0))

const r3 = new TreeNode(1);
r3.left = new TreeNode(2);
console.log(hasPathSum(r3, 1))