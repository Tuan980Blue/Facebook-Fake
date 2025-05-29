module.exports = {
  extends: ['next/core-web-vitals'],
  ignorePatterns: ['**/*'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js'],
      excludedFiles: [
        '**/generated/**',
        '**/prisma/generated/**',
        '**/prisma/client.js',
        '**/prisma/edge.js',
        '**/prisma/default.js',
        'src/generated/**'
      ],
      rules: {
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unused-vars': 'error'
      }
    }
  ]
} 