const { TreeNode } = require("./utils");


/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, d = 0) {
  if (!root) return d;

  const d1 = maxDepth(root.left, d + 1);
  const d2 = maxDepth(root.right, d + 1);
  return Math.max(d1, d2);
};

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);
console.log(maxDepth(tree))