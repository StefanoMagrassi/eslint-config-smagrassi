/**
 * @file Defines ESLint rules and configuration exported by the package
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

module.exports = {
  extends: [
    './rules/commons',
    './rules/es6'
  ].map(require.resolve) // thank you AirBnB...
};
