/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function(temperatures) {
  let count = 1;
  const result = [];
  
  for (let i = 0; i < temperatures.length; i++) {
    let currentTemp = temperatures[i];
    
    if (i === temperatures.length - 1) {
      result.push(0);
    }
    
    for (let j = i + 1; j < temperatures.length; j++) {
      if (currentTemp < temperatures[j]) {
        result.push(count);
        count = 1;
        break;
      }
      if (currentTemp >= temperatures[j]) {
        count++;
      }
      if (j === temperatures.length - 1) {
        result.push(0);
        count = 1;
      }
    }
  }
  
  return result;
};