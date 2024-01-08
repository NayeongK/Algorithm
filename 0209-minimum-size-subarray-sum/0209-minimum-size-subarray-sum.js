/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(target, nums) {
  let minLength = Infinity;
  let start = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= target) {
      minLength = Math.min(minLength, i - start + 1);
      sum -= nums[start];
      start++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};