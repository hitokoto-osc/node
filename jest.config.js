const path = require('path')
module.exports = {
  preset: 'ts-jest',
  rootDir: path.join(__dirname, './'),
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  testRegex: '(/test/.*\\.(test|spec))\\.[tj]sx?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx'
  ],
  moduleNameMapper: {
    '^@App/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  globals: {
    'ts-jest': {
      packageJson: path.join(__dirname, './package.json')
    }
  }
}
