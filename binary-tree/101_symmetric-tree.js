const { TreeNode } = require('./utils');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root, reflection = root) {
  if (!root && reflection || !reflection && root) return false;
  else if (!root && !reflection) return true;

  return root.val === reflection.val &&
    isSymmetric(root.left, reflection.right) &&
    isSymmetric(root.right, reflection.left);
};

const r =  new TreeNode(1);
r.left = new TreeNode(2);
r.right = new TreeNode(2);
r.left.left = new TreeNode(3);
r.left.right = new TreeNode(4);
r.right.left = new TreeNode(4);
r.right.right = new TreeNode(3);
console.log(isSymmetric(r));

// const r = new TreeNode(1);
// r.left = new TreeNode(2);
// r.right = new TreeNode(2);
// r.left.right = new TreeNode(3);
// r.right.right = new TreeNode(3);
// console.log(isSymmetric(r));