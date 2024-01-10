/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const stack = [];
  const bracketsMap = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
      if (stack.pop() !== bracketsMap[s[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};