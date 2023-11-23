/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function(arr1, arr2) {
  const order = {};
  arr2.forEach((item, index) => {
    order[item] = index;
  });

  arr1.sort((a, b) => {
    const aIndex = order.hasOwnProperty(a) ? order[a] : arr2.length;
    const bIndex = order.hasOwnProperty(b) ? order[b] : arr2.length;
    if (aIndex !== bIndex) return aIndex - bIndex;
    return a - b;
  });

  return arr1;
};