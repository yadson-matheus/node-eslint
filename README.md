# Tutorial de configuração:

    - https://www.youtube.com/watch?v=aTf8QTjw4RE

# É necessário instalar o EsLint e o Prettier no VSCode.

# settings.json

    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact"
    ],
    "[typescript]": {
        "editor.formatOnSave": false,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
        "editor.formatOnSave": false,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
