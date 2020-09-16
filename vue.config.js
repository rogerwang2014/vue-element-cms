'use strict'
const path = require('path')

module.exports = {
    chainWebpack: (config) => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach((type) =>
            addStyleResource(config.module.rule('less').oneOf(type)),
        )
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
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
