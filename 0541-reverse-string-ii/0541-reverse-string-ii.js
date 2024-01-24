/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function(s, k) {
  let result = "";

  for (let i = 0; i < s.length; i += 2 * k) {
      let part1 = s.substring(i, i + k);
      result += part1.split("").reverse().join("");
      let part2 = s.substring(i + k, i + 2 * k);
      result += part2;
  }

  return result;
};