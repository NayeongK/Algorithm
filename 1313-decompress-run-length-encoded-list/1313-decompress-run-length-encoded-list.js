/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i += 2) {
    let freq = nums[i];
    let val = nums[i+1];

    for (let j = 0; j < freq; j++) {
        result.push(val);
    }
  }

  return result;
};