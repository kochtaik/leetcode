const { TreeNode } = require('./utils');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const stack = [];
  const res = [];
  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    res.push(current.val);
    current = current.right;
  }
  
  return res;
}

const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null)))
console.log(inorderTraversal(tree));