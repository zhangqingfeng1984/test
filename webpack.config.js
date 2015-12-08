var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [// For hot style updates
        'webpack/hot/dev-server',
        // The script refreshing the browser on none hot updates
        'webpack-dev-server/client?http://localhost:8080',

        "./js/main.js"],
    output: {
        path: './build',
        filename: "bundle.js",
        publicPath: "/build"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" },
           
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.scss$/, loader: "style-loader!raw-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib") },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
           
        ]
    },
    plugins: [ new webpack.optimize.CommonsChunkPlugin("init.js") ]
}