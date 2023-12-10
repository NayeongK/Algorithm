/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function(s, t) {
  const sResult = [];
  const tResult = [];
  const sArray = s.split("");
  const tArray = t.split("");
  
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] !== "#") {
      sResult.push(sArray[i])
    } else {
      sResult.pop();
    }
  }
  
  for (let i = 0; i < tArray.length; i++) {
    if (tArray[i] !== "#") {
      tResult.push(tArray[i])
    } else {
      tResult.pop();
    }
  }
  
  if (sResult.join("") === tResult.join("")) {
    return true;
  }
  
  return false;
};

