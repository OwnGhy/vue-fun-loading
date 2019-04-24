const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    mode: 'production',
    entry: './lib/index.js',
    output: {
        filename: 'vue-fun-loading.js',
        path: path.resolve(__dirname, './../dist/'),
        library: 'VueFunLoading',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
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
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['*', '.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },
    externals: {
      'vue': 'vue'
    },
    devtool: '#eval-source-map'
};


module.exports = config;
