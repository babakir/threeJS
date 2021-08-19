const path = require('path');
const webpack = require('webpack');

// webpack.config.js
module.exports = {
    resolve: {
        fallback: {
            fs: false,
            path: false,
            file: false,
            system: false
        }
    },
    entry: {
        polyfills: './editor/polyfills.js',
        index: './editor/index.js',
    },
    mode: 'development',
    output: {
        path: __dirname,
        publicPath: '/',
        // filename: './build/threeIndex.js'
        filename: './editor/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        watchContentBase: true,
        publicPath: "/",
        contentBase: "./",
        hot: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: require.resolve('./editor/index.js'),
                // use: 'imports-loader?wrapper=window',
            },
            // {
            //     test: /\.exec\.js$/,
            //     use: [
            //         {
            //             loader: 'script-loader',
            //             options: {
            //                 useStrict: true,
            //             },
            //         }
            //     ]
            // }
            // {
            //     test: /\.m?js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: "babel-loader",
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // }
        ]
    }
};