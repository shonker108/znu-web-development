const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My website. Main',
            template: path.resolve(__dirname, './src/pages/index.html'),
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'My website. About',
            template: path.resolve(__dirname, './src/pages/about.html'),
            filename: 'about.html'
        }),
        new CleanWebpackPlugin(),

    ],
}