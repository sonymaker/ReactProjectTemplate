var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode:   'development',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
		watchContentBase: true,
        //host: '0.0.0.0',
        port: 4000,
        inline: true,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['env', 'react'],
                        plugins: ['react-hot-loader/babel']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};