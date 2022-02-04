module.exports = {
  extends: ['next/core-web-vitals', '@blockmatic'],
  plugins: ['react-hooks'],
  rules: {
    'no-case-declarations': 0,
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/indent': 0,
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'react-hooks/rules-of-hooks': 'warn', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
  env: {
    es2020: true,
  },
}
