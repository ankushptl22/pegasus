var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// var srcDir = path.join(__dirname, './src/');
var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '../../theme.config$': path.join(__dirname, '../registry-theme/theme.config')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                use: ExtractTextPlugin.extract({
                    use: [
                        { loader: 'css-loader', options: { minimize: true } },
                        'less-loader'
                    ]
                }),
                test: /\.less$/
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
                use: 'file-loader?name=[name].[ext]?[hash]'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
            }
        ]
    },
    devServer: {
        //host: '10.10.2.228',
        port: 9012,
        contentBase: parentDir,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html',
        }),
        new ExtractTextPlugin({
            filename: 'registry.css'
        })
    ],
    externals: {
        // global app config object
        config: JSON.stringify({apiUrl: 'http://localhost:4000'})
    }
}
