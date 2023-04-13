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
    indent: ['error', 2],
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
}
