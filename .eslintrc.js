module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
        'prettier'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'vue/attribute-hyphenation': 'off',
        // 'semi': ['error', 'never', {'beforeStatementContinuationChars': 'never'}],
        // 'semi-spacing': ['error', {'after': true, 'before': false}],
        // 'semi-style': ['error', 'first'],
        // 'no-extra-semi': 'error',
        // 'no-unexpected-multiline': 'error',
        // 'no-unreachable': 'error',
    }
}
