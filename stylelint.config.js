module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-prettier',
        'stylelint-config-recommended'
    ],
    // add your custom config here
    // https://stylelint.io/user-guide/configuration
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['extends', 'tailwind', 'layer', 'font-face'],
            },
        ],
        'block-no-empty': null,
        'unit-allowed-list': ['em', 'rem', 's', 'vh', 'vw', 'fr', 'ms', '%'],
        'font-family-no-missing-generic-family-keyword': [ true,
            {
                'ignoreFontFamilies': 'BlackArea',
            },
        ]
    }
}
