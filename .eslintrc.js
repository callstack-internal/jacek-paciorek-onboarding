module.exports = {
  env: {
    jest: true,
  },
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended'],
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'no-unused-vars': 0,
    'no-param-reassign': [2, { props: false }],
    'no-use-before-define': 0,
    'react/jsx-key': 1,
    'arrow-body-style': ['error', 'as-needed'],
    'max-len': ['error', { code: 170 }],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
  },
  globals: {
    JSX: true,
    React: true,
  },
};
