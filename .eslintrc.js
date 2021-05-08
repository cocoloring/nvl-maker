module.exports = {
    ignorePatterns: ['**/node_modules', '**/build'],
    plugins: ['prettier'],
    parser: '@typescript-eslint/parser',
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
    ignorePatterns: ['**/node_modules', '**/build'],
    extends: ['plugin:prettier/recommended'],
}
