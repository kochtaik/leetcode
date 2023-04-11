/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  const st = [];
  for (let i = 0; i < s.length; i++) {
    s[i] === "*" ? st.pop() : st.push(s[i]);
  }

  return st.join("");
};

const s = "erase*****";
console.log(removeStars(s));