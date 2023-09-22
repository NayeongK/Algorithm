/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max_area = 0;

  while (left < right) {
    const currentHeight = Math.min(height[left], height[right]);
    const currentWidth = right - left;
    max_area = Math.max(max_area, currentHeight * currentWidth);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max_area;
};