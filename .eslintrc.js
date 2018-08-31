module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    },
    sourceType: 'module',
    allowImportExportEverywhere: true,
    codeFrame: false
  },
  env: {
    node: true,
    es6: true,
    mocha: true
  },
  rules: {
    'arrow-body-style': 0,
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': [
      'error',
      'stroustrup'
    ],
    'comma-dangle': ['error', 'never'],
    // Allow unnamed functions
    'func-names': 'off',
    // Allow requires
    'global-require': 'off',
    'linebreak-style': [
      'error',
      'unix'
    ],
    'import/extensions': ['off', 'never'],
    // Import before anything else
    'import/first': 0,
    // Requires new lines after each import
    'import/newline-after-import': 'off',
    // Tab style
    'indent': 'off',
    'no-use-before-define': [
      'error',
      'nofunc'
    ],
    'quotes': ['error', 'single'],
    'semi': 'off',
    'semi-spacing': ['error', {
      'before': false,
      'after': false
    }],
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'always',
      'asyncArrow': 'always'
    }],
  }
};
