const path = require('path')
//用于热更新启动
const webpack = require("webpack")

//导入在内存中生成HTML页面的插件
//只要是节点都要放到plugin里
//作用:自动,在内存中根据指定页面生成一个内存页面
// 自动,把打包好的bundle.js追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')
//webpack4.0以上 使用vue 需要配置
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),//入口文件
    output: {//输出文件相关配置
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [//配置插件的节点
        new htmlWebpackPlugin({//创建一个在内存中生成HTML页面的插件
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html' //指定生成页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module: {//这个节点用于配置所有第三方配置模块加载器
        rules: [//所有三方模块匹配规则
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']//配置css文件的第三方模块loader规则
            },
            {
                test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: [
                    {
                        loader:'url-loader?limit=5543&name=[hash:8]-[name].[ext]',
                        options: {
                            esModule: false
                        }
                    }
                ]//处理图片文件的loader规则
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/, use: ['url-loader']//处理字体文件的loader规则
            },
            {
                test: /\.vue$/, use: 'vue-loader' //处理.vue文件的loader规则
            }
            // {
            //     test: /.js$/, use:'babel-loader',exclude:/node_modules/ //配置Babel转换ES高级语法
            // }
        ]
    },
    resolve: {
        alias: {
            // "vue$":"vue/dist/vue.js"
        }
    }
}