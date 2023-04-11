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
    cb(node);
  
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
    cb(current);
    current = current.right;
  }
}

/**
 * Traverse a binary tree in `Left -> Right -> Root` order recursively
 * 
 * @param {TreeNode} root 
 * @param {Function} cb
 * @returns 
 */
function postorderTraversal(root, cb) {
  if (!root) return;
  postorderTraversal(root.left, cb);
  postorderTraversal(root.right, cb);
  cb(root);
};

module.exports = { TreeNode, preorderTraversal, inorderTraversal, postorderTraversal }