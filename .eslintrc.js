module.exports = {
  // Dep names: 'eslint-plugin-jest', 'eslint-plugin-react', 'eslint-plugin-react-hooks', '@typescript-eslint/eslint-plugin', '@typescript-eslint/parser'

  // REVIEW: React plugins and rules
  // REVIEW: TypeScript rules/config (file extensions, plugins, parsers, etc.)

  plugins: ['react-hooks'],
  extends: ['plugin:react/recommended'],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect'
    }
  },

  rules: {
    /**
     * Possible Errors
     *
     * https://eslint.org/docs/rules/#possible-errors
     */
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-console': [2, { allow: ['error'] }],
    'no-constant-condition': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': [2, { 'allowEmptyCatch': true }],
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 0,
    'no-template-curly-in-string': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    /**
     * Best Practices
     *
     * https://eslint.org/docs/rules/#best-practices
     */
    'prefer-regex-literals': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-empty-pattern': 2,
    'no-extend-native': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-redeclare': 2,
    'no-self-assign': 2,
    'no-unused-labels': 2,
    'no-var': 2,

    /**
     * ESLint's "Variables" rules
     *
     * https://eslint.org/docs/rules/#variables
     */
    'no-delete-var': 2,
    'no-undef': 2,
    'no-unused-vars': [
      2,
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': [
      2,
      {
        functions: false,
      },
    ],

    /**
     * ECMAScript 6
     *
     * https://eslint.org/docs/rules/#ecmascript-6
     */
    'constructor-super': 2,
    
    /**
     * React hooks
     */
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
  },
  overrides: [
    /**
     * Files only ran in the browser. Modify this to point at the client/src directory, depending on the project
     */
    {
      files: ['client/**/*+(js|jsx|ts|tsx)'],
      env: {
        jest: true,
        node: false,
        browser: true,
      },
    },
    
    

    /**
     * Test files. Node is enabled, since Jest inherently is ran through Node. Browser is enabled because of the simulated browser env that Jest runs tests in.
     */
    {
      // REVIEW: Jest setup file, test utils, etc. Anything that's not a `spec` file that should be treated in the test env
      files: ['client/**/*.spec.@(js|jsx|ts|tsx)', './jest.setup.js', 'client/test-utils/**/*.(js|jsx|ts|tsx)'],
      extends: ['plugin:jest/recommended'],
      plugins: ['jest'],
      env: {
        jest: true,
        node: true,
        browser: true,
      },
      rules: {
        'jest/prefer-to-have-length': 2,
      },
    },

    /**
     * TypeScript files.
     */
    {
      files: ['**/*.@(ts|tsx)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        // Turn off rules that TypeScript's compiler can/will catch on its own. This is necessary, since this project has a mix of JS and TS files.
        // REVIEW: Make sure the TS compiler enforces these rules on its own before comitting to turning these ESLint rules off
        'no-unused-vars': 0,
        'no-use-before-define': 0,
        'no-undef': 0,

        // `@typescript-eslint` rules. The default recommended rules are a bit picky, and included useless warnings instead of error. So we explicitly choose the ones that could actually help catch bugs, reasonably enforce consistency, or reasonably enforce modern TS
        '@typescript-eslint/await-thenable': 2,
        '@typescript-eslint/ban-types': 2,
        '@typescript-eslint/consistent-type-assertions': 2,
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/no-for-in-array': 2,
        '@typescript-eslint/no-inferrable-types': 2,
        '@typescript-eslint/no-misused-new': 2,
        '@typescript-eslint/no-misused-promises': 2,
        '@typescript-eslint/no-namespace': 2,
        '@typescript-eslint/no-this-alias': 2,
        '@typescript-eslint/no-unnecessary-type-assertion': 2,
        '@typescript-eslint/no-var-requires': 2,
        '@typescript-eslint/prefer-includes': 2,
        '@typescript-eslint/prefer-namespace-keyword': 2,
        '@typescript-eslint/prefer-string-starts-ends-with': 2,
        '@typescript-eslint/triple-slash-reference': 2,
        '@typescript-eslint/unbound-method': 2,
        '@typescript-eslint/no-array-constructor': 2,
        '@typescript-eslint/require-await': 2,
      },
    },
  ]
}
