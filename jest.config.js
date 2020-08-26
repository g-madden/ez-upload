module.exports = {
  verbose: true,
  // setupFiles: ['<rootDir>/react-app-polyfill/jsdom.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['<rootDir>/test/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  transformIgnorePatterns: ['node_modules'],
};
