const { TreeNode } = require('./utils');

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null;
  if (root === p || root === q) return root;

  const leftAns = lowestCommonAncestor(root.left, p, q)
  const rightAns = lowestCommonAncestor(root.right, p, q)

  if (leftAns && rightAns) {
    return root;
  }

  return leftAns ? leftAns : rightAns;
}

