const webpack = require('webpack')

const path = require('path')

const srcDirname = 'src'
const htmlDirname = 'html'
const outDirname = 'build'
const HtmlWebpackPlugin = require('html-webpack-plugin')

const distElectronMainConfig = {
    mode: 'none',
    entry: {
        main: path.join(__dirname, srcDirname, 'main'),
    },
    target: 'electron-main',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, outDirname),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
}

const distElectronPreloadConfig = {
    mode: 'none',
    entry: {
        preload: path.join(__dirname, srcDirname, 'preload'),
    },
    target: 'electron-preload',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, outDirname),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
}

const distElectronRendererConfig = {
    mode: 'none',
    entry: {
        renderer: path.join(__dirname, srcDirname, 'renderer'),
    },
    target: 'web', // don't use electron-renderer, because node integration is set to false
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, outDirname),
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'renderer.html',
            template: path.join(__dirname, htmlDirname, 'renderer.html'),
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
}

module.exports = [
    distElectronMainConfig,
    distElectronPreloadConfig,
    distElectronRendererConfig,
]
