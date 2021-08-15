// webpack.config.js
module.exports = {
    entry: {
        // import: './src/Three.js'
    },
    mode: 'production',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: './build/three.min.js'
    },
    devServer: {
        watchContentBase: true,
        publicPath: "/",
        contentBase: "./",
        hot: true,
        port: 9090,
    },
    // module: {
    //     rules: [{
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             use: {
    //                 loader: "script-loader"
    //             }
    //         },
    //         {
    //             test: /\.css$/,
    //             use: [{
    //                     loader: "style-loader"
    //                 },
    //                 {
    //                     loader: "css-loader",
    //                     options: {
    //                         modules: true,
    //                         importLoaders: 1,
    //                         localIdentName: "[name]_[local]_[hash:base64]",
    //                         sourceMap: true,
    //                         minimize: true
    //                     }
    //                 }
    //             ]
    //         }
    //     ]
    // }
};