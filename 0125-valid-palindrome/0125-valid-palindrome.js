/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  const allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const cleanedString = s.split("")
                          .filter(char => allowedChars.includes(char))
                          .join("")
                          .toLowerCase();

  return cleanedString === cleanedString.split("").reverse().join("");
};