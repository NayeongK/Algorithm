/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
  const frequency = {};
  for (let i = 0; i < nums.length; i++) {
    if (frequency[nums[i]] === undefined) {
      frequency[nums[i]] = 1;
    } else {
      frequency[nums[i]] += 1;
    }
  }
  const sortedArr = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
  
  return sortedArr.slice(0, k).map(item => Number(item[0]));
}