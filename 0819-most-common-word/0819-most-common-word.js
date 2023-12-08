/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function(paragraph, banned) {
  const exception = "01234567890!@#$%^&*().,':;?/~₩\\|=+-_{}[]";
  const plainParagraph = paragraph.toLowerCase().split("").map(char => exception.includes(char) ? " " : char).join("");
  const words = plainParagraph.split(" ").filter(word => word.length > 0 && !banned.includes(word));
  const sortArray = words.sort()

  let count = 1;
  let maxCount = 0;
  let maxIndex = 0;

  for (let i = 0; i < sortArray.length; i++) {
    if (sortArray[i] === sortArray[i + 1]) {
      count++; 
    } else {
      if (count > maxCount) {
        maxCount = count;
        maxIndex = i;
      }
      count = 1;
    }
  }

  return sortArray[maxIndex]; 
};
