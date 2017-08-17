/**
 * @file Common rules tests
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

const test          = require('tape');
const specification = require('./spec.rules.commons');
const tester        = require('./helpers/tester');
const rules         = require('../rules/commons').rules;

test('Common rules', t => {
  t.plan(specification.length + 1);

  // Ensure that specification covers all declared rules
  t.ok(specification.length >= Object.keys(rules).length);

  specification.forEach(spec => tester(t, rules, spec));

  t.end();
});
