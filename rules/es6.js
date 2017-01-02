/**
 * @file ES6 specific rules
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    es6: true
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', {
      'before': true,
      'after': true
    }],
    'no-var': 'error',
    'prefer-template': 'error',
    'prefer-spread': 'error',
    'prefer-rest-params': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error'
  }
};
