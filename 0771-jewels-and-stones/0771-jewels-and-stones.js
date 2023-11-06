/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    let currentStone = stones[i]
    for (let j = 0; j < jewels.length; j++) {
      let currentJewel = jewels[j]
      
      if (currentStone === currentJewel) {
        count++;
      }
    }
  }
  
  return count;
};