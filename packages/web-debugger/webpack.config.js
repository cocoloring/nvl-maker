const webpack = require('webpack')

const path = require('path')

const srcDirname = 'src'
const htmlDirname = 'html'
const inputFilename = 'main.tsx'
const outDirname = 'build'
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, srcDirname, inputFilename),
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/',
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, outDirname),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, htmlDirname, 'main.html'),
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
}
