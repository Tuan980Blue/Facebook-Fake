module.exports = {
  extends: ['next/core-web-vitals'],
  ignorePatterns: [
    '**/node_modules/**',
    '**/.next/**',
    '**/out/**',
    '**/build/**',
    '**/generated/**',
    'src/generated/**',
    '**/prisma/generated/**',
    '**/prisma/client.js',
    '**/prisma/edge.js',
    '**/prisma/default.js'
  ],
  rules: {
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
} 