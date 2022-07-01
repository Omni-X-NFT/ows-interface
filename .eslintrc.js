module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2],
    quotes: [2, 'single', { avoidEscape: true }],
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
}
