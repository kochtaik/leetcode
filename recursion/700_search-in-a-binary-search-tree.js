const { TreeNode } = require("../binary-tree/utils");
/**
 * Link: https://leetcode.com/problems/search-in-a-binary-search-tree/
 * Solved in 5 min. 30 sec.
 */

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (!root) return null;
  if (root.val === val) return root;

  if (val < root.val) {
    return searchBST(root.left, val);
  } 
  
  if (val > root.val) {
    return searchBST(root.right, val);
  }
};


const r = new TreeNode(4);
r.left = new TreeNode(2);
r.left.left = new TreeNode(1);
r.right = new TreeNode(7);

console.log(searchBST(r, 7))
