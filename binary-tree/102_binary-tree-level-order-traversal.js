const { TreeNode } = require('./utils');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  const q = [root];
  const ans = [];
  
  
  while (q.length) {
    const lvl = [];
    const l = q.length;

    for (let i = 0; i < l; i++) {
      const node = q.shift();
      lvl.push(node.val);

      if (node.left) {
        q.push(node.left)
      }

      if (node.right) {
        q.push(node.right);
      }
    }

    ans.push(lvl);
  }

  return ans;
};

const tree = new TreeNode(1);
tree.right = new TreeNode(3);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5)
console.log(levelOrder(tree))

