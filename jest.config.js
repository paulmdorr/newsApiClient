module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: { '^.+\\.tsx?$': 'babel-jest' },
  snapshotSerializers: ['jest-emotion'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
    './src/components/': {
      branches: 100,
      statements: 100,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', './src/components/.*?/styled'],
}
