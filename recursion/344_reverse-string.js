/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  return s.length ? [...reverseString(s.slice(1)), ...s.slice(0,1)] : '';
}

console.log(reverseString(["h","e","l","l","o"]))