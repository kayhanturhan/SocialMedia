module.exports = {
    root: true,
    //extends: '@react-native',
    env: {
        browser: true,
        jest: true,
        es6: true,
    },
    plugins: ['import'],
    //extends: 'eslint:recommended',
    extends: ['plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'no-console': 'warn',
        'no-eval': 'error',
        'import/first': 'error',
    },
    scripts: {
        lint: 'eslint .',
        'lint:fix': 'eslint --fix .',
    },
}
