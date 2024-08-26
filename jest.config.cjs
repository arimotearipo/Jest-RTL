// This is the Jest configuration file.
// It's written in the CommonJS syntax (export.module = {...}) rather than ES Modules (export default {...})
// because Jest doesn't support ES Modules configuration files.

module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
