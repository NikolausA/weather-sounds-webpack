// import globals from "globals";
// import pluginJs from "@eslint/js";

// export default [
//   {
//     languageOptions: {
//       parserOptions: { ecmaVersion: 2022, sourceType: "module" },
//       globals: { ...globals.browser, ...globals.node },
//     },
//     env: { browser: true, node: true },
//   },
//   pluginJs.configs.recommended,
// ];

// config from chatGPT

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
  },
};
