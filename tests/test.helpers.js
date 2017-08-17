/**
 * @file Test rules
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

const test       = require('tape');
const sinon      = require('sinon');
const linter     = require('eslint').linter;
const toBeTested = require('./helpers/to-be-tested');
const hasError   = require('./helpers/has-error');

test('Helpers', t => {
  t.test('toBeTested - Get rule to be tested', st => {
    st.plan(2);

    const rules    = { 'brace-style': 'error' };
    const assert   = toBeTested(rules, 'brace-style');
    const expected = { rules: { 'brace-style': 'error' } };

    st.deepEqual(assert, expected, 'should return a "rules" object with the "rule" to be tested');
    st.throws(function() {
      toBeTested(rules, 'foo');
    }, 'should throw error if there is not specified rule');
  });

  t.test('toBeTested - with es6 enabled', st => {
    st.plan(2);

    const withES6  = true;
    const rules    = { 'brace-style': 'error' };
    const assert   = toBeTested(rules, 'brace-style', withES6);
    const expected = { env: {es6: true}, rules: { 'brace-style': 'error' } };

    st.deepEqual(assert, expected, 'should return a "rules" object with the "rule" to be tested');
    st.throws(function() {
      toBeTested(rules, 'foo');
    }, 'should throw error if there is not specified rule');
  });

  t.test('hasError - Check if there are errors', st => {
    st.plan(2);

    const rule = {}; // Any rule, it doesn't matter here
    const code = ''; // Any code, it doesn't matter here

    const verifyOK = sinon.stub(linter, 'verify').callsFake(() => []); // This is the point
    st.notOk(hasError(code, rule), 'good code should return 0 errors');

    verifyOK.restore();

    const verifyKO = sinon.stub(linter, 'verify').callsFake(() => [{severity: 2}]); // This is the point
    st.ok(hasError(code, rule), 'bad code should return 1 or more errors');

    verifyKO.restore();
  });

  t.end();
});
