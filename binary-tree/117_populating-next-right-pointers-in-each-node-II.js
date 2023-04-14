function TreeNode(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var connect = function(root) {
  if (!root) return null;
  const q = [root];

  while (q.length) {
    const s = q.length;

    for (let i = 0; i < s; i++) {
      const cur = q.shift();
      if (i < s - 1) {
        cur.next = q[0];
      }
      
      if (cur.left) {
        q.push(cur.left)
      }

      if (cur.right) {
        q.push(cur.right)
      }
    }
  }

  return root;
};

const r = new TreeNode(1);
r.left = new TreeNode(2);
r.right = new TreeNode(3);
r.left.left = new TreeNode(4);
r.left.right = new TreeNode(5);
r.right.left = new TreeNode(6);
r.right.right = new TreeNode(7);
console.log(connect(r))