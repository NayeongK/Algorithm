/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
    const binaryString = n.toString(2).padStart(32, '0');
    const reversedString = binaryString.split('').reverse().join('');

    return parseInt(reversedString, 2);
};
