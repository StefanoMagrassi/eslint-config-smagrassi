/**
 * @file Utility in order to run specific ESLint tests.
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

const toBeTested = require('./to-be-tested');
const hasError = require('./has-error');

/**
 * Create a new subtest and test against the specification (in ES6 environment or not).
 * @public
 * @param  {object} t        - Main test
 * @param  {object} rules    - Rules list
 * @param  {object} spec     - Rule/test specification
 * @param  {boolean} withES6 - Runs test in ES6 environment or not
 * @return {undefined}
 */
function tester(t, rules, spec, withES6) {
  return t.test(spec.title, st => {
    st.plan(2);

    const rule = toBeTested(rules, spec.rule, withES6);

    st.notOk(hasError(spec.ok, rule), 'ok when code adhere to rule');
    st.ok(hasError(spec.ko, rule), 'error when code does not adhere to rule');
  });
}

module.exports = tester;
