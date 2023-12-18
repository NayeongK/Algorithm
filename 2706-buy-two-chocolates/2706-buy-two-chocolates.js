/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
const buyChoco = function(prices, money) {
  prices.sort((a,b) => a - b);
  let sumOfTwo = prices[0] + prices[1]
  
  if (sumOfTwo <= money) {
    return money - sumOfTwo;
  }
  if (sumOfTwo > money) {
    return money;
  }
};