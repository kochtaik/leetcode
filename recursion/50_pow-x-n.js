/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

/**
 * Link: https://leetcode.com/problems/powx-n/
 * 
 * Not solved (bad constraints)
 */

function myPow(x, y) {
  if (y === 0) return 1;
  if (y < 0) {
    return 1 / myPow(x, -y)
  }
  
  const isEven = y % 2 === 0;
  const result = isEven ? myPow(x, y / 2) : myPow(x, Math.floor(y / 2));
  return isEven ? result * result : result * result * x;
}

console.log(myPow(2, -2))