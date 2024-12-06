'use strict';

module.exports = {
    root: true,

    env: {
        es6: true
    },

    extends: 'eslint:recommended',

    parser: require.resolve('@typescript-eslint/parser'),
    rules: require('./shared-rules')
};
