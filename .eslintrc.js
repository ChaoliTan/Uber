module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'react-native/react-native': true, // whitelist all browser-like globals
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native', // add eslint-plugin-react-native as a plugin for ESLint
  ],
  rules: {
    'no-use-before-define': ['error', { functions: true, classes: true, variables: false }], // disable the rule for variables, but enable it for functions and classes
    // 'react-native/no-unused-styles': 2, // disallow unused styles
    // 'react-native/no-inline-styles': 2, // disallow styles declared within the component itself
    // 'react-native/no-color-literals': 2, // enforces variable names to be used for storing colors

  },
};
