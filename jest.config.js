module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/dist/', '/e2e/', '/node_modules/'],
  testMatch: ['**/tests/calculator.test.ts'],  // ← ONLY THIS FILE
  transformIgnorePatterns: [
    'node_modules/(?!chai)/'
  ]
};