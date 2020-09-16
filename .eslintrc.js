/**
 * Eslint规则配置
 */

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    extends: [
        'standard',
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        'parser': 'babel-eslint',
        sourceType: 'module'
    },
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'eol-last': 0,
        'space-before-function-paren': 0,
        'keyword-spacing': 0,
        'indent': ['error', 4]
    }
}
