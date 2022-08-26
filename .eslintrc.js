module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'no-multiple-empty-lines': 0,
    'react/react-in-jsx-scope': 0,
    'template-curly-spacing': 0,
    'indent': 2,
    'react-hooks/exhaustive-deps': 0,
  },
};
