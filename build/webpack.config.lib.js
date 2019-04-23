const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    mode: 'production',
    entry: './lib/index.js',
    output: {
        filename: 'vue-fun-loading.js',
        path: path.resolve(__dirname, './dist/')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ExtractTextPlugin('style.[hash].css')
    ],
    resolve: {
        extensions: ['*', '.js', '.vue', '.json']
    }
};


module.exports = config;
