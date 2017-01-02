/**
 * @file Common rules tests specification
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

module.exports = [
  {
    title: 'Brace style - opening braces on the same line of statement/declaration',
    rule: 'brace-style',
    ok: 'if (foo) {\nbar()\n} else {\nbaz()\n}',
    ko: 'if (foo) { bar() }'
  },
  {
    title: 'Camelcase - enforce camelcase naming convention',
    rule: 'camelcase',
    ok: 'var myFunction = function() {}; var anotherVar = true',
    ko: 'var my_function = function() {}; var another_var = true'
  },
  {
    title: 'Curly - enforce consistent brace style for all control statements',
    rule: 'curly',
    ok: 'if (foo) { foo++; }',
    ko: 'if (foo) foo++;'
  },
  {
    title: 'Default case - require default cases in switch statements',
    rule: 'default-case',
    ok: 'switch (foo) { default: var bar = true; }',
    ko: 'switch (foo) { case 1: break; }'
  },
  {
    title: 'Dot notation - enforce dot notation whenever possible',
    rule: 'dot-notation',
    ok: 'var x = foo.bar',
    ko: 'var x = foo["bar"]'
  },
  {
    title: 'Triple equals - require the use of === and !==',
    rule: 'eqeqeq',
    ok: 'var t = foo === bar; var f = foo !== bar',
    ko: 'var t = foo == bar; var f = foo != bar'
  },
  {
    title: 'Global require - require "require()" calls to be placed at top-level module scope',
    rule: 'global-require',
    ok: 'var fs = require("fs"); var file = fs.readFile();',
    ko: 'function readFile() { var fs = require("fs"); return fs.readFile(); }'
  },
  {
    title: 'Guard for...in - require for-in loops to include an if statement',
    rule: 'guard-for-in',
    ok: 'for(var k in o) { if(o.hasOwnProperty(k)) { var v = o[k]; } }',
    ko: 'for(var k in o) { var v = o[k]; }'
  },
  {
    title: 'Indentation - enforce consistent indentation (2 spaces)',
    rule: 'indent',
    ok: 'if (a) {\n  b = true;\n}\nvar c = 1,\n    d = [];\nswitch (e) {\n  case 1:\n    var f = 2;\n  default:\n    var f = 3;\n}',
    ko: 'if (a) {\nb = true;\n}\nvar c = 1,\nd = [];\nswitch (e) {\ncase 1:\n  var f = 2;\n  default:\n  var f = 3;\n}'
  },
  {
    title: 'Linebreak - enforce consistent linebreak style (unix)',
    rule: 'linebreak-style',
    ok: 'var foo;\n',
    ko: 'var foo;\r\n'
  },
  {
    title: 'No equals to null - disallow null comparisons without type-checking operators',
    rule: 'no-eq-null',
    ok: 'if (foo === null) var bar = (baz !== null);',
    ko: 'if (foo == null) var bar = (baz != null);'
  },
  {
    title: 'Eval is evil - disallow the use of eval()',
    rule: 'no-eval',
    ok: 'var a = obj[b]',
    ko: 'var a = eval("obj." + b)'
  },
  {
    title: 'No extend native - disallow extending native types',
    rule: 'no-extend-native',
    ok: 'var MyString = Object.create(String.prototype); MyString.prototype.toArray = function() {};',
    ko: 'String.prototype.toArray = function() {};'
  },
  {
    title: 'No extra bind - disallow unnecessary calls to .bind()',
    rule: 'no-extra-bind',
    ok: 'var foo = function() { this.name(); }.bind(bar)',
    ko: 'var foo = function() { name(); }.bind(bar)'
  },
  {
    title: 'No floating decimal - disallow leading or trailing decimal points in numeric literals',
    rule: 'no-floating-decimal',
    ok: 'var num = 0.5; var num = 2.0; var num = -0.7;',
    ko: 'var num = .5; var num = 2.; var num = -.7;'
  },
  {
    title: 'No implicit coercion - disallow shorthand type conversions',
    rule: 'no-implicit-coercion',
    ok: 'var b = Boolean(foo); var n = Number(foo); var s = String(foo);',
    ko: 'var b = !!foo; var n = +foo; var s = "" + foo;'
  },
  {
    title: 'No implicit globals - disallow var and named function declarations in the global scope',
    rule: 'no-implicit-globals',
    ok: 'window.foo = 1; (function() { var bar = 0; })();',
    ko: 'var foo = 1; (function() { bar = 0; })();'
  },
  {
    title: 'No lone blocks - disallow unnecessary nested blocks',
    rule: 'no-lone-blocks',
    ok: 'function foo() { bar(); }',
    ko: 'function foo() { bar(); { baz(); } }'
  },
  {
    title: 'No native reassign - disallow reassigning native objects',
    rule: 'no-native-reassign',
    ok: 'var MyString = "my string"',
    ko: 'String = "my string"'
  },
  {
    title: 'No nested ternary - disallow nested ternary expressions',
    rule: 'no-nested-ternary',
    ok: 'var foo = bar ? true : false; var baz = foo ? 0 : 1',
    ko: 'var baz = foo = bar ? true : false ? 0 : 1'
  },
  {
    title: 'No new Function() - disallow new operators with the Function object',
    rule: 'no-new-func',
    ok: 'var foo = function() { return true; }',
    ko: 'var foo = new Function("return true;")'
  },
  {
    title: 'No "new" wrappers - disallow new operators with the String, Number, and Boolean objects',
    rule: 'no-new-wrappers',
    ok: 'var foo = "", bar = 1, baz = true;',
    ko: 'var foo = new String(""), bar = new Number(1), baz = new Boolean(true);'
  },
  {
    title: 'No param reassign - disallow reassigning function parameters',
    rule: 'no-param-reassign',
    ok: 'function foo(bar) { var baz = bar + "baz"; }',
    ko: 'function foo(bar) { bar += "baz"; }'
  },
  {
    title: 'No script url - disallow javascript: urls',
    rule: 'no-script-url',
    ok: 'location.href = "/";',
    ko: 'location.href = "javascript:void(0)";'
  },
  {
    title: 'No undef - disallow the use of undeclared variables unless mentioned in /*global */ comments',
    rule: 'no-undef',
    ok: '/*global $*/ var b = $(".foo").children()[0];',
    ko: 'var b = $(".foo").children()[0]'
  },
  {
    title: 'No undef init - disallow initializing variables to undefined',
    rule: 'no-undef-init',
    ok: 'var foo; var isUndef = typeof foo === "undefined"',
    ko: 'var foo = undefined; var isUndef = typeof foo === "undefined"'
  },
  {
    title: 'No "undefined" - disallow the use of undefined as an identifier',
    rule: 'no-undefined',
    ok: 'var foo = {}; foo.undefined = "bar";',
    ko: 'var undefined = "bar"'
  },
  {
    title: 'No unused expressions - disallow unused expressions',
    rule: 'no-unused-expressions',
    ok: 'n += 1;',
    ko: 'n + 1'
  },
  {
    title: 'No useless call - disallow unnecessary calls to .call() and .apply()',
    rule: 'no-useless-call',
    ok: 'function foo(a,b,c) {return a+b+c;} foo.call(bar, 1,2,3); foo.apply(bar, [1,2,3]);',
    ko: 'function foo(a,b,c) {return a+b+c;} foo.call(null, 1,2,3); foo.apply(null, [1,2,3]);'
  },
  {
    title: 'No useless concat - disallow unnecessary concatenation of literals or template literals',
    rule: 'no-useless-concat',
    ok: 'var foo = 1 + "bar";',
    ko: 'var foo = "bar" + "bar"; var baz = `1` + `bar`'
  },
  {
    title: 'No useless escape - disallow unnecessary escape characters',
    rule: 'no-useless-escape',
    ok: 'var quote = "\'bar\'";',
    ko: 'var quote = "\"bar\"";'
  },
  {
    title: 'No void operator - disallow void operators',
    rule: 'no-void',
    ok: 'function foo() { return; }',
    ko: 'function foo() { return void 0; }'
  },
  {
    title: 'No with statement - disallow with statements',
    rule: 'no-with',
    ok: 'var foo = {}; foo.add = function(a, b) {return a + b};',
    ko: 'var foo = {}; with(foo) { add = function(a, b) {return a + b}; };'
  },
  {
    title: 'Constructor fn with capital letter - require constructor function names to begin with a capital letter',
    rule: 'new-cap',
    ok: 'var foo = new Bar()',
    ko: 'var foo = new bar();'
  },
  {
    title: 'One "var" per declaration - enforce variables to be declared either together or separately in functions',
    rule: 'one-var',
    ok: 'var foo = 1; var bar = true; var baz = "a";',
    ko: 'var foo = 1, bar = true, baz = "a";'
  },
  {
    title: 'Quote style - enforce the consistent use of quotes type (single)',
    rule: 'quotes',
    ok: 'var foo = \'bar\';',
    ko: 'var foo = "bar";'
  },
  {
    title: 'Radix in parseInt - enforce the consistent use of the radix argument when using parseInt()',
    rule: 'radix',
    ok: 'var foo = parseInt("10", 10);',
    ko: 'var foo = parseInt("10");'
  },
  {
    title: 'Semicolon - require or disallow semicolons instead of ASI',
    rule: 'semi',
    ok: 'var foo = 1; var bar = 2;',
    ko: 'var foo = 1\nvar bar = 2;'
  },
  {
    title: 'Var at the top - require var declarations be placed at the top of their containing scope',
    rule: 'vars-on-top',
    ok: 'var foo = 1; var bar; if (foo) { bar = foo * 2; }',
    ko: 'var foo = 1; if (foo) { var bar = foo * 2; }'
  },
  {
    title: 'Wrap IIFE - require parentheses around immediate function invocations',
    rule: 'wrap-iife',
    ok: '(function foo() { return 1; })();',
    ko: 'function foo() { return 1; }();'
  }
];
