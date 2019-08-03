module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: { '^.+\\.tsx?$': 'babel-jest' },
  snapshotSerializers: ['jest-emotion'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    './src/components/': {
      branches: 100,
      statements: 100,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', './src/components/.*?/styled'],
}
