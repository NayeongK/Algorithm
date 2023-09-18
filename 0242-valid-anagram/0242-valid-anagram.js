/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  
  const sortS = s.split("").sort();
  const sortT = t.split("").sort();
  
  if (sortS.toString() === sortT.toString()) {
    return true;
  }
  
  return false;
};