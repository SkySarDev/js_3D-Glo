const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
            filename: "index.html",
        }),],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
        ],
    },
    mode: 'development',
    devServer: {
        open: true,
        port: 3000,
        hot: true,
        writeToDisk: false,
        historyApiFallback: true,
    },
};
