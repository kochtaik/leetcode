/**
 * Link: https://leetcode.com/problems/fibonacci-number
 * Solved in 7 min.
 */

function memoize(fn) {
  const cache = new Map();
  
  return function(...arguments) {
    const [key] = arguments;
    let res;
    if (!cache.has(key)) {
      res = fn.apply(this, arguments);
      cache.set(key, res)
    } else {
      res = cache.get(key);
    }

    return res;
  }
}

/**
 * @param {number} n
 * @return {number}
 */
const fib = memoize((n) => n < 2 ? n : fib(n - 1) + fib(n - 2))

console.log(fib(4));
