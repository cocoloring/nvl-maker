const opts = require('./webpack.config.js')

module.exports = {
    ...opts,
    devServer: {
        contentBase: './build',
        compress: true,
        port: 3000,
    },
}
