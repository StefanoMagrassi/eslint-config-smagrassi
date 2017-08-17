/**
 * @file Common rules (both ES5 and ES6)
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

module.exports = {
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  rules: {
    'brace-style': 'error',
    'camelcase': 'error',
    'curly': 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'global-require': 'error',
    'guard-for-in': 'error',
    'indent': [
      'error',
      2, {
        'VariableDeclarator': 2,
        'SwitchCase': 1,
        'MemberExpression': 'off'
      }
    ],
    'linebreak-style': ['error', 'unix'],
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-lone-blocks': 'error',
    'no-native-reassign': 'error',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-script-url': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'new-cap': [
      'error', {
        'newIsCap': true,
        'capIsNew': false
      }
    ],
    'one-var': ['error', 'never'],
    'quotes': ['error', 'single'],
    'radix': 'error',
    'semi': ['error', 'always'],
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside']
  }
};
