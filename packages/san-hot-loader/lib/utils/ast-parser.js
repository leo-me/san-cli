/**
 * @file ast-parser.js
 * @author tanglei02 (tanglei02@baidu.com)
 */

const babel = require('@babel/core');
const proposalClassProperties = require('@babel/plugin-proposal-class-properties');
const path = require('path');

module.exports = function (source, {resourcePath}) {
    return babel.parse(source, {
        sourceType: 'module',
        filename: path.basename(resourcePath),
        plugins: [
            proposalClassProperties
        ]
    });
};
