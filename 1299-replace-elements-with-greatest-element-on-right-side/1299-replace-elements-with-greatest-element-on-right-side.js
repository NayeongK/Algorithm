/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function (arr) {
  const result = [];
  const copiedArr = [...arr];
  let GreatestNumber = null;
  for (let i = 0; i < arr.length - 1; i++) {
    copiedArr.shift();
    result.push(Math.max.apply(null, copiedArr));
  }
  result.push(-1);

  return result;
};
