// // // const webpack = require('webpack')
// // // const miniCss = require('mini-css-extract-plugin');

// // // module.exports = {
// // //     mode: 'development',
// // //     entry: './src/main.js',
// // //     output: {
// // //         path: __dirname + '/public',
// // //         filename: 'bandle.js',
// // //         assetModuleFilename: 'assets/images/[name]-[hash][ext]'
// // //     },
// // //     devServer: {
// // //         port: 5000,
// // //         static: './public',
// // //         hot: true
// // //     },
// // //     module: {
// // //         rules: [
// // //           {
// // //             test: /\.(png|svg|jpg|jpeg|gif)$/i,
// // //             type: 'asset/resource',
// // //           },
// // //             { test: /\.(s*)css$/, use: [
// // //               miniCss.loader,

// // //               'css-loader',
// // //               'sass-loader'] },
// // //          ]
// // //       },
// // //       plugins: [
// // //         new miniCss({
// // //            filename: 'styles.css',
// // //         }),
// // //      ]
// // // }


// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')


// const isDev = process.env.NODE_ENV === 'development';
// const isProd = !isDev;

// const filename = (ext) => isDev ? `[name].${ext}` : `[name].${ext}`;


// module.exports = {
//     context: path.resolve(__dirname, 'src'),
//     mode: 'development',
//     entry: './main.js',
//     output: {
//         filename: `./js/${filename('js')}`,
//         path: path.resolve(__dirname, 'app'),
//         publicPath: ""
//     },
//     devServer: {
//         static: {
//             directory: path.join(__dirname, 'app'),
//         },
//         historyApiFallback: true,
//         hot: true,
//         open: true,
//         compress: true,
//         port: 9000,
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: path.resolve(__dirname, 'src/index.html'),
//             filename: 'index.html',
//             minify: {
//                 collapseWhitespace: isProd
//             }
//         }),
//         new CleanWebpackPlugin(),
//         new MiniCssExtractPlugin({
//             filename: `./css/${filename('css')}`,
//         }),
//         new CopyWebpackPlugin({
//             patterns: [
//                 { from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'app/assets') }
//             ]
//         })
//     ],
//     devtool: isProd ? false : 'source-map',
//     module: {
//         rules: [
//             {
//                 test: /\.html$/,
//                 loader: 'html-loader',
//             },
//             {
//                 test: /\.css$/i,
//                 use: [MiniCssExtractPlugin.loader, "css-loader"],
//             },
//             // {
//             //     test: /\.sc[ac]ss$/i,
//             //     use: [
//             //         {
//             //             loader: MiniCssExtractPlugin.loader,
//             //             options: {
//             //                 publicPath: (resourcePath, context) => {
//             //                     return path.relative(path.dirname(resourcePath), context) + '/';
//             //                 },
//             //             }
//             //         },
//             //         // 'css-loader',
//             //         // 'sass-loader'
//             //     ],
//             // },
//             {
//                 test: /\.(png|svg|jpg|jpeg|gif)$/i,
//                 type: 'asset/resource',
//             },
//             {
//                 test: /\.(?:|woff2)$/,
//                 use: [{
//                     loader: 'file-loader',
//                     options: {
//                         name: `./fonts/${filename('[ext]')}`
//                     }
//                 }],
//             }
//         ],
//     }
// }

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractWebpackPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "./build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body"
        }),
        new MiniCssExtractWebpackPlugin({
            filename: "styles.[contenthash].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/img",
                    to: "./img"
                }
            ]
        }),
        new CleanWebpackPlugin()
    ],
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