module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'es6': true
  },
  parserOptions: {
    parser: 'babel-eslint',
    'ecmaVersion': 6
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  // add your custom rules here
  rules: {
    "semi": [2, "never"],
    'quotes': ['error', 'single', { avoidEscape: true }],
    "no-console": "off",
    "prettier/prettier": ["error", { "semi": false, "singleQuote": true }],
    "no-unused-vars": ["error", { "args": "none" }]
  }
}