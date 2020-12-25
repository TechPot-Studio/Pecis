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
    module: {
        rules: [
            {
                test: /((\.js)|(\.ts))$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-proposal-optional-chaining',
                            '@babel/plugin-transform-runtime'
                        ]
                    }
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
    plugins: [
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false
            }),
            new webpack.BannerPlugin('Pecis JavaScript Library | pecis.js.org'),
        ]
    }
};
