const { TreeNode } = require('./utils');

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// preorder: root -> left -> right
// inorder:  left -> root-> right
var buildTree = function(preorder, inorder) {
  if (!inorder.length) return null;
  const mid = preorder.shift();
  const midIdx = inorder.indexOf(mid);
  const root = new TreeNode(mid);
  root.left = buildTree(preorder, inorder.slice(0, midIdx));
  root.right = buildTree(preorder, inorder.slice(midIdx + 1));
  return root;
};

const preorder = [3,9,20,15,7];
const inorder = [9,3,15,20,7]
console.log(buildTree(preorder, inorder))