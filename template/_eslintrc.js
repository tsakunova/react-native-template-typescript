module.exports = {
  root: true,
  env: {
    'es6': true,
    'browser': true,
    'react-native/react-native': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2019,
    'sourceType': 'module',
  },
  settings: {
    'react': {
      'pragma': 'React',
      'version': 'detect',
    },
    'import/ignore': ['node_modules'],
    'import/resolver': {
      'node': {
        'moduleDirectory': ['node_modules', 'src/'],
      },
    },
  },
  plugins: [
    'react',
    'react-native',
    'react-hooks',
    '@typescript-eslint',
    'unused-imports'
  ],
  extends: [
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:react/recommended'
  //   "eslint:recommended",
  //   "plugin:jest/all",
  //   "plugin:@typescript-eslint/recommended",
  //   "plugin:@typescript-eslint/eslint-recommended"
  ],
  rules: {
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_',
      }
    ],
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
      }
    ],
    'import/newline-after-import': ['error', { 'count': 2 }],
    'import/namespace': [2, { 'allowComputed': true }],
    //   "no-undef": "error",
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 2,
        'maxEOF': 0,
        'maxBOF': 0,
      }
    ],
    'eol-last': ['error', 'always'],
    //   "newline-before-return": "error",
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-newline': ['error', { 'multiline': true }],
    'space-in-parens': ['error', 'never'],
    'key-spacing': 'error',
    'max-len': [
      'error',
      {
        'code': 150,
        'tabWidth': 2,
        'ignoreStrings': true,
        'ignoreTrailingComments': false,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
        'ignorePattern': 'createStandardAction|createSelector',
      }
    ],
    'no-multi-spaces': ['error'],
    'comma-spacing': [
      'error', {
        'before': false,
        'after': true,
      }
    ],
    'no-trailing-spaces': 'error',
    'eqeqeq': 'error',
    'comma-dangle': ['error', { 'objects': 'always-multiline' }],
    'no-console': 'error',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'object-shorthand': [2, 'always'],
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': [
      'error',
      {
        'ObjectExpression': {
          'consistent': true,
          'minProperties': 4,
        },
        'ImportDeclaration': {
          'multiline': true,
          'minProperties': 5,
        },
        'ExportDeclaration': {
          'multiline': true,
          'minProperties': 3,
        },
      }
    ],
    'keyword-spacing': ['error', { 'before': true }],
    'indent': ['error', 2],
    'space-before-blocks': [
      'error',
      {
        'functions': 'always',
        'keywords': 'always',
        'classes': 'always',
      }
    ],
    //   "react/self-closing-comp": ["error", {
    //     "component": true,
    //     "html": true
    //   }],
    'react/jsx-indent': [2, 2, { 'indentLogicalExpressions': true }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    //   "react-hooks/rules-of-hooks": "error",
    'react/prop-types': 0,
    // "react-hooks/exhaustive-deps": "error",
    'react/display-name': ['off'],
    //   "react/jsx-tag-spacing": ["error", {
    //     "closingSlash": "never",
    //     "afterOpening": "never",
    //     "beforeClosing": "never",
    //     "beforeSelfClosing": "always",
    //   }],
    'react/jsx-key': 'warn',
    'react/jsx-max-props-per-line': ['error', { 'maximum': 1 }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-wrap-multilines': [
      'error', {
        'return': 'parens-new-line',
        'arrow': 'parens-new-line',
        'logical': 'parens-new-line',
        'assignment': 'parens-new-line',
        'declaration': 'parens-new-line',
        'condition': 'parens-new-line',
        'prop': 'parens-new-line',
      }
    ],
    // 'react/jsx-one-expression-per-line': [
    //   'error', {
    //     'allow': 'literal',
    //   }
    // ],
    'react/jsx-curly-spacing': [
      'error',
      {
        'when': 'always',
        'spacing': { 'objectLiterals': 'never' },
      }
    ],
    //   "jest/no-disabled-tests": "warn",
    //   "jest/prefer-inline-snapshots": "off",
    //   "jest/prefer-expect-assertions": "off",
    //   "jest/expect-expect": "off",
    '@typescript-eslint/no-empty-function': 0,
    // "@typescript-eslint/camelcase": 0,
    // "@typescript-eslint/array-type": [2, {"default": "array-simple"}],
    // "@typescript-eslint/no-unused-vars": ["error"],
    // "@typescript-eslint/explicit-function-return-type": [2],
    // "@typescript-eslint/interface-name-prefix": [2, {"prefixWithI": "always"}]
    'react-native/no-unused-styles': 'error',
    // "react-native/split-platform-components": 'error',
    // 'react-native/no-inline-styles': 'error',
    // 'react-native/no-color-literals': 'error',
    // 'react-native/no-raw-text': 'error',
    'react-native/no-single-element-style-arrays': 'error',
  },
};
