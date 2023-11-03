module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'mocha': true
    },
    'extends': 'eslint:recommended',
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {
        'no-undef': 'off',
        // 'no-unused-vars': 'off',
        'quotes': [2, 'single']
    }
}
