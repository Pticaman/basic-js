const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members) || members === undefined) {
    return false
  }
  let filt = members.filter(function (v) {
    return typeof v === 'string';
  });
  let m = filt.map(function (v) {
    return v.trim()[0].toUpperCase();
  });
    return m.sort().join('')
};
