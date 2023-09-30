/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  let majorityElement = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majorityElement = nums[i];
    }
    count += (nums[i] === majorityElement) ? 1 : -1;
  }

  return majorityElement;
};