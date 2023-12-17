/**
 * @param {number} n
 * @return {number}
 */
const countLargestGroup = function(n) {
  const resultObj = {};
  let maxSize = 0;

  for (let i = 1; i <= n; i++) {
    let sum = 0, number = i;

    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }

    if (!resultObj[sum]) {
      resultObj[sum] = 0;
    }
    resultObj[sum]++;

    maxSize = Math.max(maxSize, resultObj[sum]);
  }

  return Object.values(resultObj).filter(count => count === maxSize).length;
};