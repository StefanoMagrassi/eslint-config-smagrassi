/**
 * @file ES6 rules tests
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

const test          = require('tape');
const specification = require('./spec.rules.es6');
const tester        = require('./helpers/tester');
const rules         = require('../rules/es6').rules;

test('ES6 rules', t => {
  t.plan(specification.length + 1);

  // Ensure that specification covers all declared rules
  t.ok(specification.length >= Object.keys(rules).length);

  specification.forEach(spec => tester(t, rules, spec, true));

  t.end();
});
