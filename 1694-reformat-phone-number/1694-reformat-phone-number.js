/**
 * @param {string} number
 * @return {string}
 */
const reformatNumber = function(number) {
  let cleanNumber = "";
  for (let i = 0; i < number.length; i++) {
    if (number[i] !== " " && number[i] !== "-") {
      cleanNumber += number[i];
    }
  }

  let parts = [];
  let i = 0;

  while (i < cleanNumber.length) {
    let blockSize = 3;
    if (cleanNumber.length - i === 4) {
      blockSize = 2;
    }

    parts.push(cleanNumber.substring(i, i + blockSize));
    i += blockSize;
  }

  return parts.join("-");
};