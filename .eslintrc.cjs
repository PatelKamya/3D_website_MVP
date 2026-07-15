module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: ['eslint:recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
  plugins: ['react', 'react-hooks', 'react-refresh'],
  rules: {
    ...require('eslint-plugin-react-hooks').configs.recommended.rules,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/jsx-uses-vars': 'error',
    'no-unused-vars': ['error', { varsIgnorePattern: 'React' }],
  },
}
