module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "standard",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
                tabWidth: 4,
                semi: false,
                singleQuote: false,
                jsxSingleQuote: false,
                quoteProps: "consistent",
                trailingComma: "all",
                bracketSpacing: false,
                bracketSameLine: false,
                arrowParens: "always",
            },
        ],
    },
}
