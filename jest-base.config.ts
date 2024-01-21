import type { Config } from 'jest';

const getBaseJestConfig = (rootDir: string): Config => ({
  rootDir,
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['json', 'js', 'ts'],
  modulePathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/node_modules'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!**/jest.config.ts',
    '!**/index.ts',
    '!**/*.interface.ts',
    '!**/*.type.ts',
    '!**/*.enum.ts',
    '!**/*.module.ts',
    '!**/*.constants.ts',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  resetMocks: true,
  restoreMocks: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
});

export { getBaseJestConfig };
