'use strict'
const path = require('path')

module.exports = {
    chainWebpack: (config) => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach((type) =>
            addStyleResource(config.module.rule('less').oneOf(type)),
        )
    },
}

// 配置全局less变量
function addStyleResource (rule) {
    rule
        .use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/css/variable.less'),
                path.resolve(__dirname, './src/assets/css/mixins.less'),
            ],
        })
}

function resolve(dir) {
    return path.join(__dirname, dir)
}
