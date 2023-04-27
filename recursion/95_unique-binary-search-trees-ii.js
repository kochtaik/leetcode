const { TreeNode } = require('../binary-tree/utils');

/**
 * @param {number} n
 * @return {TreeNode[]}
 */

function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    let res;
    if (!cache.has(key)) {
      res = fn.apply(this, args);
      cache.set(key, res)
    } else {
      res = cache.get(key);
    }

    return res;
  }
}

const generateTrees = (n) => {
  const helper = memoize((min, max) => {
    const trees = [];

    console.log(min, max)
    if (min > max) {
      trees.push(null);
      return trees;
    }


    for (let i = min; i <= max; i++) {
      const left = helper(min, i - 1);
      const right = helper(i + 1, max);
      for (const l of left) {
        for (const r of right) {
          const root = new TreeNode(i);
          root.left = l;
          root.right = r;
          trees.push(root);
        }
      }
    }

    return trees;
  });


  return helper(1, n)
}

console.log(generateTrees(3));