const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "production",
    entry: './src/pecis.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'pecis.min.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.scss']
    },
    module: {
        rules: [
            {
                test: /((\.js)|(\.ts))$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/g,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }
        ]
    },
    plugins: [],
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false
            }),
            new webpack.BannerPlugin({
                banner: 'Pecis JavaScript Library | pecis.js.org'
            })
        ]
    }
};
