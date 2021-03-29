const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  if (isNaN(date.getTime())) {
    throw new Error
  }

  let m = date.getMonth() + 1;
  if (m === 1 || m === 2 || m === 12) {
    return 'winter'
  } else if (m === 3 || m === 4 || m === 5) {
    return 'spring'
  } else if (m === 6 || m === 7 || m === 8) {
    return 'summer'
  } else if (m === 9 || m === 10 || m === 11) {
    return 'autumn'
  }
};
