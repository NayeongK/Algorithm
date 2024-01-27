/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
const mostFrequent = function(nums, key) {
  const count = {};
  let maxCount = 0;
  let result;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      const target = nums[i + 1];

      if (count[target]) {
        count[target] += 1;
      } else {
        count[target] = 1;
      }

      if (count[target] > maxCount) {
        maxCount = count[target];
        result = target;
      }
    }
  }

  return result;
};