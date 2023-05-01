module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['webpack.config.js'],
  rules: {
    'no-console': 'off',
  },
};
