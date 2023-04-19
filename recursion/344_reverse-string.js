/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseStringNotInPlace(s) {
  return s.length ? [...reverseStringNotInPlace(s.slice(1)), ...s.slice(0,1)] : '';
}

/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    const tmp = s[i];
    s[i] = s[j];
    s[j] = tmp;
    i++, j--;
  }
}

const s = ["r","o","c","k"];
reverseString(s)
console.log(s)