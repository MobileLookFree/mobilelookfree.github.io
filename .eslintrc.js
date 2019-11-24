module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'react/state-in-constructor': 0,
    'no-underscore-dangle': 0,
    'linebreak-style': 0,
    'func-names': ['error', 'never'],
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          every: ['id']
        },
        allowChildren: false
      }
    ]
  }
};
