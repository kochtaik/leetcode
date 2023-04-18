const { TreeNode } = require('./utils');

function serialize(root) {
  if (!root) return null;
  const q = [root];
  const ans = [];
  while (q.length) {
    const cur = q.shift();
    
    if (cur !== null) {
      ans.push(cur.val);
      q.push(cur.left);
      q.push(cur.right)
    } else {
      ans.push('null');
    }
  }

  return ans.join(',');
}

function deserialize(str) {
  if (!str) return null;
  const arr = str.split(',');
  let root = new TreeNode(arr.shift());
  const ans = root;
  let i = 0;
  const q = [];

  while (arr.length) {
    const val = arr.shift();
    const curr = val === 'null' ? null : new TreeNode(val);

    if (i % 2 === 0) {
      root.left = curr;
    } else {
      root.right = curr;
    }

    if (curr !== null) q.push(curr);

    if (i > 0 && i % 2 !== 0) {
      root = q.shift();
    }

    i++
  }

  return ans;
}
const r = new TreeNode(1);
r.left = new TreeNode(2)
r.right = new TreeNode(3)
r.right.left = new TreeNode(4)
r.right.right = new TreeNode(5);
r.right.left.left = new TreeNode(6);
r.right.left.right = new TreeNode(7);
console.log(deserialize(serialize(r)))