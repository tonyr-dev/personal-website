module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react/require-default-props': 0,
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test.{ts,tsx}', // repos with a single test file
          'test-*.{ts,tsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/setupTests.ts', // vitest config
        ],
        optionalDependencies: false,
      },
    ],
  },
};
