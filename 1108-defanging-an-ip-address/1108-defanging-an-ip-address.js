/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
  const result = address.replaceAll(".", "[.]")
  
  return result
};
