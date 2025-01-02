const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  
  if (!(date instanceof Date) || Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error("Invalid date!");
  }
  
  try {
    date.getTime();
  } catch {
    throw new Error("Invalid date!");
  }
  
  let indexMonth = date.getMonth();

  if (indexMonth === 0 || indexMonth === 1 || indexMonth === 11) {
    return "winter";
  } else if (indexMonth >= 2 && indexMonth <= 4) {
    return "spring";
  } else if (indexMonth >= 5 && indexMonth <= 7) {
    return "summer";
  }else if (indexMonth >= 8 && indexMonth <= 10) {
    return "autumn";
  }
}

module.exports = {
  getSeason
};
