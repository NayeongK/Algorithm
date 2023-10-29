/**
 * @param {string} coordinates
 * @return {boolean}
 */
const squareIsWhite = function(coordinates) {
  const col = coordinates[0];
  const row = parseInt(coordinates[1]);

  if (col === "a" || col === "c" || col === "e" || col === "g") {
    return row % 2 === 0;
  }

  return row % 2 === 1;
};

