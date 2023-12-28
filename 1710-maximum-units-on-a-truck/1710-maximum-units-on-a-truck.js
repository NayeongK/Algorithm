/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let count = 0;
  let output = 0;

  for (let i = 0; i < boxTypes.length; i++) {
    if (count < truckSize) {
      let box = boxTypes[i][0];
      let remains = truckSize - count;
      
      if (box <= remains) {
        count += box;
        output += (boxTypes[i][1] * box);
      } else {
        count += remains;
        output += boxTypes[i][1] * remains;
      }
    }
  }
  
  return output;
};
