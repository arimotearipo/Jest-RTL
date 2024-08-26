export default {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
  ],
  rules: {
    "react/jsx-no-target-blank": "off",
  },
  plugins: ["jest"],
  env: {
    "jest/globals": true,
  },
};
