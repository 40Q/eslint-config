module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier"
  ],
  parserOptions: {
    "ecmaVersion": 2015,
    "sourceType": "module"
  },
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off"
  }
}
