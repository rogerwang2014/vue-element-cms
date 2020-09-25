'use strict'
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
    publicPath: '',
    productionSourceMap: false,
    // productionGzip: true,
    devServer: {
        port: '9002'
    },
    chainWebpack: (config) => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach((type) =>
            addStyleResource(config.module.rule('less').oneOf(type))
        )
        config.when(process.env.NODE_ENV !== 'development',
            config => {
                config.plugin('ScriptExtHtmlWebpackPlugin')
                    .after('html')
                    .use('script-ext-html-webpack-plugin', [{
                        // `runtime` must same as runtimeChunk name. default is `runtime`
                        inline: /runtime\..*\.js$/
                    }])
                    .end()
                config.optimization.splitChunks({
                    chunks: 'all',
                    cacheGroups: {
                        libs: {
                            name: 'chunk-libs',
                            test: /[\\/]node_modules[\\/]/,
                            priority: 10,
                            chunks: 'initial' // only package third parties that are initially dependent
                        },
                        elementUI: {
                            name: 'chunk-elementUI', // split elementUI into a single package
                            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                        },
                        commons: {
                            name: 'chunk-commons',
                            test: resolve('src/components'), // can customize your rules
                            minChunks: 3, //  minimum common number
                            priority: 5,
                            reuseExistingChunk: true
                        }
                    }
                })
                // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
                config.optimization.runtimeChunk('single')
            }
        )
    }
}

// 配置全局less变量
function addStyleResource(rule) {
    rule
        .use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/css/variable.less'),
                path.resolve(__dirname, './src/assets/css/mixins.less')
            ]
        })
}
