/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  const scores = [];
  let sum = 0;

  for (let i = 0; i < operations.length; i++) {
      let operation = operations[i];
      if (operation === "C") {
          let removedScore = scores.pop();
          sum -= removedScore;
      } else if (operation === "D") {
          let doubleScore = 2 * scores[scores.length - 1];
          scores.push(doubleScore);
          sum += doubleScore;
      } else if (operation === "+") {
          let newScore = scores[scores.length - 1] + scores[scores.length - 2];
          scores.push(newScore);
          sum += newScore;
      } else {
          let intScore = parseInt(operation);
          scores.push(intScore);
          sum += intScore;
      }
  }

  return sum;
};