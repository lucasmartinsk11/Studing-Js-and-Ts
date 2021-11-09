module.exports = {
    "env": {
        "commonjs": true,
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "prettier",
        "airbnb-base"
    ],
    "parser": "@typescript-eslint/parser",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
      },
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "prettier",
        "@typescript-eslint"
    ],
    "rules": {
        "prettier/prettier": "error"
    }
};
