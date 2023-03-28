/**
 * @param {any} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * Traverse a binary tree in `Root -> Left -> Right` order iteratively
 * 
 * @param {TreeNode} root 
 * @param {Function} cb 
 * @returns 
 */
function preorderTraversal(root, cb) {
  if (!root) return;
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    cb(node.val);
  
    if (node.right) {
      stack.push(node.right);
    }
  
    if (node.left) {
      stack.push(node.left);
    }
  }
}

/**
 * Traverse a binary tree in `Left -> Root -> Right` order iteratively
 * 
 * @param {TreeNode} root 
 * @param {Function} cb 
 * @returns 
 */
function inorderTraversal(root, cb) {
  if (!root) return;

  const stack = [];
  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    cb(current.val);
    current = current.right;
  }
  
  return res;
}

module.exports = { TreeNode, preorderTraversal, inorderTraversal }