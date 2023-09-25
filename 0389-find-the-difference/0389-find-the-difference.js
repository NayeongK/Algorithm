/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function(s, t) {
    let sArray = s.split("");
    for (let i = 0; i < t.length; i++) {
        const index = sArray.indexOf(t[i]);
        if (index !== -1) {
            sArray.splice(index, 1);
        } else {
            return t[i];
        }
    }
};
