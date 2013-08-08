
/**
 * Get DOS timestamp of now or `date`.
 *
 * @param {Date} date
 * @return {Number}
 * @api private
 */

module.exports = function(date){
  date = date || new Date;
  return ((((date.getHours() << 6)
    | date.getMinutes()) << 5)
    | date.getSeconds() / 2);
};