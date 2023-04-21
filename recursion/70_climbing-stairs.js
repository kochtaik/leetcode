/**
 * Link: https://leetcode.com/problems/climbing-stairs
 * Solved in 16 min.
 */
function memoize(fn) {
  const h = {};

  return function(...args) {
    const [key] = args;
    if (!(key in h)) {
      h[key] = fn.apply(this, args);
    }

    return h[key];
  }
}

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = memoize((n) => n <= 2 ? n : climbStairs(n - 1) + climbStairs(n - 2));


console.log(climbStairs(5));