const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
    const NODE_ENV = JSON.stringify(
        env.NODE_ENV === 'development' ? 'development' : 'production',
    )
    const devMode = env.NODE_ENV !== 'production'
    const DEV_PORT = JSON.stringify(env.DEV_PORT ? 3000 : undefined)

    const envParam = {
        'process.env.NODE_ENV': NODE_ENV,
        'process.env.DEV_PORT': DEV_PORT,
    }

    const srcDirname = 'src'
    const htmlDirname = 'html'
    const outDirname = 'build'

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
        plugins: [new webpack.DefinePlugin(envParam)],
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
        plugins: [new webpack.DefinePlugin(envParam)],
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
                filename: devMode ? 'index.html' : 'renderer.html',
                template: path.join(__dirname, htmlDirname, 'renderer.html'),
            }),
            new webpack.DefinePlugin(envParam),
        ],
    }

    if (devMode) {
        distElectronRendererConfig.devServer = {
            contentBase: './build',
            compress: true,
            port: env.PORT ?? 3000,
        }
        distElectronRendererConfig.plugins =
            distElectronRendererConfig.plugins.map((plugin) => {
                if (plugin instanceof HtmlWebpackPlugin) {
                    return new HtmlWebpackPlugin({
                        template: path.join(
                            __dirname,
                            htmlDirname,
                            'renderer.html',
                        ),
                    })
                }
                return plugin
            })
    }

    return [
        distElectronMainConfig,
        distElectronPreloadConfig,
        distElectronRendererConfig,
    ]
}
