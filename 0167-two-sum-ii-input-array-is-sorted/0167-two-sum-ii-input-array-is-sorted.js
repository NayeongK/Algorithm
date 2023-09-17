/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(numbers, target) {
  let leftIndex = 0;
  let rightIndex = numbers.length - 1;
  
  while (leftIndex < rightIndex) {
    let sum = numbers[leftIndex] + numbers[rightIndex];
    
    if (sum === target) {
      return [leftIndex + 1, rightIndex + 1];
    }
    if (sum < target) {
      leftIndex++;
    }
    if (sum > target) {
      rightIndex--;
    }
  }
};
