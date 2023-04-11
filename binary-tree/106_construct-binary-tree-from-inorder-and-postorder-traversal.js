const { TreeNode } = require('./utils');

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var buildTree = function(inorder, postorder) {
  if (!inorder.length) return null;
  else if (inorder.length <= 1) {
    return new TreeNode(inorder.pop());
  }

  const mid = postorder.pop();
  const root = new TreeNode(mid);
  const midIdx = inorder.indexOf(mid);

  root.left = buildTree(inorder.slice(0, midIdx), postorder.slice(0, midIdx))
  root.right = buildTree(inorder.slice(midIdx + 1), postorder.slice(midIdx));
  return root;
};

const inorder = [9,3,15,20,7];
const postorder = [9,15,7,20,3];

// const inorder = [11,9,17,3,5,20,50];
// const postorder = [11,17,9,5,50,20,3];

// const inorder = [2,1];
// const postorder = [2,1];

console.log(buildTree(inorder, postorder))