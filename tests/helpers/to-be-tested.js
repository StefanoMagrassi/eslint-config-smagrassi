/**
 * @file Get the rule to be tested from list.
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

/**
 * Gets the rule to be tested from a list of rules.
 * @public
 * @param  {object}  list - List of rules
 * @param  {string}  name - Rule's name
 * @param  {boolean} withES6 - Adds ES6 environment to output object
 * @return {object}  The ESLint config object to be tested
 */
function toBeTested(list, name, withES6) {
  const rule = list[name];

  if (typeof rule === 'undefined') {
    throw new Error('no rules match name');
  }

  const output = { rules: {} };
  output.rules[name] = rule;

  if (typeof withES6 !== 'undefined' && withES6) {
    output['env'] = {es6: true};
  }

  return output;
}

module.exports = toBeTested;
