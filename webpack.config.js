const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractWebpackPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, "./build")
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        historyApiFallback: true,
        hot: true,
        open: true,
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body"
        }),
        new MiniCssExtractWebpackPlugin({
            filename: `./css/${filename('css')}`
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/img",
                    to: "./img"
                },
                {
                    from: "./config.json",
                    to:"./config.json"
                },
            ]
        }),
        new CleanWebpackPlugin()
    ],
    devtool: isProd ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractWebpackPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            "..."
        ]
    }
}