const path = require('path');
const webpack = require('webpack');

// webpack.config.js
module.exports = {
    // entry: [
    //     // import: './src/Three.js',
    //     // './build/three.js',

    //     // './examples/js/libs/draco/draco_encoder.js',

    //     // './editor/js/libs/codemirror/codemirror.js',
    //     // './editor/js/libs/codemirror/mode/javascript.js',
    //     // './editor/js/libs/codemirror/mode/glsl.js',

    //     // './editor/js/libs/esprima.js',
    //     // './editor/js/libs/jsonlint.js',

    //     // './editor/js/libs/codemirror/addon/dialog.js',
    //     // './editor/js/libs/codemirror/addon/show-hint.js',
    //     // './editor/js/libs/codemirror/addon/tern.js',
    //     // './editor/js/libs/acorn/acorn.js',
    //     // './editor/js/libs/acorn/acorn_loose.js',
    //     // './editor/js/libs/acorn/walk.js',
    //     // './editor/js/libs/ternjs/polyfill.js',
    //     // './editor/js/libs/ternjs/signal.js',
    //     // './editor/js/libs/ternjs/tern.js',
    //     // './editor/js/libs/ternjs/def.js',
    //     // './editor/js/libs/ternjs/comment.js',
    //     // './editor/js/libs/ternjs/infer.js',
    //     // './editor/js/libs/ternjs/doc_comment.js',
    //     // './editor/js/libs/tern-threejs/threejs.js',
    //     // './editor/js/libs/signals.min.js',
    //     './editor/index.js'
    // ],
    resolve: {
        fallback: {
            fs: false,
            path: false,
            file: false,
            system: false
        }
    },
    entry: {
        polyfills: './editor/polyfills',
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
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};