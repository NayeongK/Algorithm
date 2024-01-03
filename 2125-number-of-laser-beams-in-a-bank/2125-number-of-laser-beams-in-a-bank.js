/**
 * @param {string[]} bank
 * @return {number}
 */
const numberOfBeams = function(bank) {
  let result = 0;
  let devicesCountArray = [];
  
  for (let i = 0; i < bank.length; i++) {
    let devicesCount = bank[i].split("").filter(element => element === "1").length;
    if (devicesCount) {
      devicesCountArray.push(devicesCount)
    }
  }
  
  for (let i = 0; i < devicesCountArray.length - 1; i++) {
    result += devicesCountArray[i] * devicesCountArray [i + 1];
  }
  
  return result;
};