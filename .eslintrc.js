module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  plugins: ["wdio"],
  extends: ["eslint:recommended", "plugin:wdio/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
};
