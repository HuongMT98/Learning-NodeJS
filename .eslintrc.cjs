/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 * Sample Eslint config for NodeJS ExpressJS MongoDB project
 */
module.exports = {
  env: { es2020: true, node: true },
  extends: ["eslint:recommended"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    requireConfigFile: false,
    allowImportExportEverywhere: true,
  },
  plugins: [],
  rules: {},
}
