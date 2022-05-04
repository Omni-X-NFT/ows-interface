module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    "@typescript-eslint/no-unused-vars" : "off",
    "@typescript-eslint/no-explicit-any" : "off",
    "quotes": "off",
    "prefer-const": "off",
    "semi": "off",
    "indent": "off"
  }
}