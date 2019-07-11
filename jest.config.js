module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: { '^.+\\.tsx?$': 'babel-jest' },
  snapshotSerializers: ['jest-emotion'],
}
