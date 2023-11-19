/**
 * @param {string} s
 * @return {string}
 */
const makeGood = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (stack.length === 0) {
      stack.push(char);
      continue;
    }

    let top = stack[stack.length - 1];
    if (top !== char && top.toLowerCase() === char.toLowerCase()) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");  
};