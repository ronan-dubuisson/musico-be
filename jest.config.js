const dotenv = require('dotenv');
dotenv.config({
  path: './.env',
});

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/tests/**/**/*.test.(ts|js)'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      transform: { '^.+\\.ts?$': ['ts-jest', { rootDir: '.' }] },
    },
  },
  collectCoverage: true,
  coverageDirectory: './coverage/client',
  coverageReporters: ['lcov'],
  moduleNameMapper: {
    '^@src(.*)': '<rootDir>/src$1',
    '^@controllers(.*)': '<rootDir>/src/api/controllers$1',
    '^@helpers(.*)': '<rootDir>/src/api/helpers$1',
    '^@middlewares(.*)': '<rootDir>/src/api/middlewares$1',
    '^@models(.*)': '<rootDir>/src/api/models$1',
    '^@routes(.*)': '<rootDir>/src/api/routes$1',
    '^@services(.*)': '<rootDir>/src/api/services$1',
    '^@validations(.*)': '<rootDir>/src/api/validations$1',
    '^@config(.*)': '<rootDir>/src/config$1',
  },
};
