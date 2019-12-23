module.exports = {
    "extends": ["prettier"],
    "plugins": ["prettier"],
    rules: {
        'semi': [2, 'never'],
        'no-console': 'off',
        'vue/max-attributes-per-line': 'off',
        'prettier/prettier': ['error', { 'singleQuote': true, 'semi': false }]
    }
}