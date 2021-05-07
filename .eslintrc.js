module.exports = {
    ignorePatterns: ['**/node_modules', '**/build'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
    extends: ['plugin:prettier/recommended'],
}
