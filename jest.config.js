module.exports = {
  preset: 'ts-jest',
  rootDir: './',
  transform: {
    ".(ts|tsx)": 'ts-jest',
  },
  testRegex: '(/test/.*\\.(test|spec))\\.[tj]sx?$',
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  moduleNameMapper: {
    '^@APP/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
}
