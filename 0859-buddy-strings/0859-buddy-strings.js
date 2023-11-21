/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const buddyStrings = function(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    const uniqueChars = new Set(s);
    return uniqueChars.size < s.length;
  }

  const mismatches = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      mismatches.push(i);
      if (mismatches.length > 2) {
        return false;
        }
      }
  }

  if (mismatches.length === 2) {
      const [i, j] = mismatches;
      return s[i] === goal[j] && s[j] === goal[i];
  }

  return false;
};