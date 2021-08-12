const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: './css/style.css',
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
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                ],
            },
            {
                test: /\.(?:gif|png|jpg|jpeg|svg)$/i,
                type: "asset/resource",
                generator: {
                    filename: "[path][name][ext]",
                },
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: "asset/resource",
                generator: {
                    filename: "./fonts/[name][ext]",
                },
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
