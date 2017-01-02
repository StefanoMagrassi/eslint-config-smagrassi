/**
 * @file ES6 rules tests specification
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

module.exports = [
  {
    title: 'Arrow body when needed - require braces around arrow function bodies',
    rule: 'arrow-body-style',
    ok: 'var foo = () => 1;',
    ko: 'var foo = () => { return 1 };'
  },
  {
    title: 'Arrow body when needed - require parentheses around arrow function arguments',
    rule: 'arrow-parens',
    ok: 'var foo = a => a + 1;',
    ko: 'var foo = (a) => a + 1;'
  },
  {
    title: 'Arrow function spacing - enforce consistent spacing before and after the arrow in arrow functions (before + after)',
    rule: 'arrow-spacing',
    ok: 'var foo = (a) => a + 1;',
    ko: 'var foo = (a)=>a + 1;'
  },
  {
    title: 'No "var" - require let or const instead of var',
    rule: 'no-var',
    ok: 'const foo = 1; let bar = true;',
    ko: 'const foo = 1; var bar = true;'
  },
  {
    title: 'Prefer template - require template literals instead of string concatenation',
    rule: 'prefer-template',
    ok: 'const foo = `is: ${bar}`;',
    ko: 'const foo = "is: " + bar;'
  },
  {
    title: 'Prefer spread operator - require spread operators instead of .apply()',
    rule: 'prefer-spread',
    ok: 'const args = [1,2]; Math.max(...args);',
    ko: 'const args = [1,2]; Math.max.apply(Math, args);'
  },
  {
    title: 'Prefer rest parameters - require rest parameters instead of arguments',
    rule: 'prefer-rest-params',
    ok: 'function foo(...args) { return args; }',
    ko: 'function foo() { return arguments; }'
  },
  {
    title: 'Prefer "const" - require const declarations for variables that are never reassigned after declared',
    rule: 'prefer-const',
    ok: 'const foo = 1; let bar = 2; bar = bar + foo;',
    ko: 'let foo = 1; let bar = 2; bar = bar + foo;'
  },
  {
    title: 'Prefer arrow callback - require arrow functions as callbacks',
    rule: 'prefer-arrow-callback',
    ok: 'setTimeout(() => foo = true, 500)',
    ko: 'setTimeout(function() { return foo = true }, 500)'
  }
];
