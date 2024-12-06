'use strict';

module.exports = {
    env: {
        node: true,
        es6: true
    },
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: {
        ecmaVersion: 2022
    },
    plugins: [
        require.resolve('@typescript-eslint/eslint-plugin')
    ],
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        ...require('./shared-rules'),

        // This rule is a bit weird so I'm disabling it for now
        '@typescript-eslint/no-inferrable-types': 'off'
    }
};
