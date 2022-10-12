module.exports = {
  env: {
    browser: false,
    node: true,
    es2021: true,
  },
  plugins: ["wdio"],
  extends: ["eslint:recommended", "plugin:wdio/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
