const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin( {
            template: "./src/index.pug",
            filename: "index.html",
            title: "Development"
        }),
        new TerserWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin(),
    ],
    devServer: {
        static: './dist',
        port: 3001,
    },
    stats: {
            children: false
    },
    devtool: 'inline-source-map',
    optimization: {
        minimize: true,
        minimizer: [ new TerserWebpackPlugin(), new OptimizeCssAssetsWebpackPlugin()]
    },
    module: {
        rules: [
            {
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    'css-loader',
                ],
                test: /\.css$/
            },
            {
                test: /\.pug$/,
                use: 'pug-loader',
            }
        ]
    }
};