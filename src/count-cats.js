// const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let arr = [];
  let conc = arr.concat(...backyard);
  let sum = 0;
  for (let i = 0; i < conc.length; i++) {
    conc[i] === '^^' ? sum++ : sum;
  }
  return sum;
};
