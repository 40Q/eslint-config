module.exports = {
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '@40q/eslint-config',
    'prettier',
  ],
  rules: {
    'semi': 'error',
    'quotes': ['error', 'double'],
    'indent': ['error', 2]
  }
};
