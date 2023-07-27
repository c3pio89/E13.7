module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
  },
  globals: {
    require: 'readonly',
    module: 'readonly',
    __dirname: 'readonly',
    Buffer: 'readonly',
    WorkerGlobalScope: 'readonly',
    global: 'readonly'
  },
  overrides: [
    {
      files: [".eslintrc.js", ".eslintrc.cjs"],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "script",
      },
    },
  ],
};
