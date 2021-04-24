module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'global-require': 'off',
    'disable-next-line': 'off',
    'vue/max-attributes-per-line': 'off',
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'max-len': ['error', { code: 300, ignoreStrings: true }],
    'import/extensions': 'off',
    'consistent-return': 'off',
    'import/no-unresolved': 'off',
  },
};
