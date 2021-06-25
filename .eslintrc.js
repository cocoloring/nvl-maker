module.exports = {
    root: true,
    ignorePatterns: ['**/node_modules', '**/build', '**/dist'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: ['plugin:prettier/recommended'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            plugins: ['prettier', '@typescript-eslint'],
            parser: '@typescript-eslint/parser',
            extends: [
                'plugin:prettier/recommended',
                'plugin:@typescript-eslint/recommended',
            ],
            rules: {
                '@typescript-eslint/explicit-function-return-type': ['error'],
            },
        },
    ],
}
