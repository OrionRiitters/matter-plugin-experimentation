const path = require('path');

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "build")
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        contentBasePublicPath: 'public',
        hot: true
    }
}