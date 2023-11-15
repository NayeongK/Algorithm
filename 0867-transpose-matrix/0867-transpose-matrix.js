/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const result = new Array(n).fill(0).map(() => new Array(m).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
};