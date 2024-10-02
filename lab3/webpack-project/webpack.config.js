const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

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
            title: 'Головна',
            template: path.resolve(__dirname, './src/pages/index.html'),
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Розклад',
            template: path.resolve(__dirname, './src/pages/rozklad.html'),
            filename: 'rozklad.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Новини',
            template: path.resolve(__dirname, './src/pages/news.html'),
            filename: 'news.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Фото',
            template: path.resolve(__dirname, './src/pages/photo.html'),
            filename: 'photo.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                  from: path.resolve(__dirname, 'src/assets/images'),
                  to: '.',
                },
              ],
        }),
        new CleanWebpackPlugin(),

    ],
}