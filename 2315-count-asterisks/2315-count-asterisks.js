/**
 * @param {string} s
 * @return {number}
 */
const countAsterisks = function(s) {
  let count = 0;
  let insideBar = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "|") {
      insideBar = !insideBar;
    } else if (s[i] === "*" && !insideBar) {
      count++;
    }
  }

  return count;
};