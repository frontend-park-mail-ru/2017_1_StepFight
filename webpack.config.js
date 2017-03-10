/**
 * Created by Denis on 06.03.2017.
 */
let debug = process.env.NODE_ENV !== "production";
let webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: ["whatwg-fetch", "./src/js/main.js"],
    output: {
        path: "./dist/js",
        filename: "scripts.min.js"
    },
    plugins: debug ? [] : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                comments: false,
                minimize: true,
                compress: {
                    sequences: true,
                    booleans: true,
                    loops: true,
                    unused: true,
                    warnings: true,
                    drop_console: false,
                    unsafe: true
                }
            })
        ]
};