// no-empty-catch.js
module.exports = {
    meta: {
        docs: {
            description: 'Enforce correct usage of @tryghost/errors',
            category: 'Ghost',
            recommended: false
        },
        messages: {
            requireObject: 'GhostErrors must be initialised with an object.'
        }

    },
    create(context) {
        // 'NewExpression[callee.object.name=errors][arguments.length > 0][arguments.0.type!=ObjectExpression]',
        // 'NewExpression[callee.name=/^[A-Z][a-zA-Z]+Error$/][arguments.length > 0][arguments.0.type!=ObjectExpression]'

        return {
            'NewExpression[callee.object.name=errors][arguments.length > 0][arguments.0.type!=ObjectExpression]': function (node) {
                context.report({node, messageId: 'requireObject'});
            },
            'NewExpression[callee.name=/^[A-Z][a-zA-Z]+Error$/][arguments.length > 0][arguments.0.type!=ObjectExpression]': function (node) {
                context.report({node, messageId: 'requireObject'});
            }
        };
    }
};
