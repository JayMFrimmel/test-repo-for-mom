/*
var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/index.html',
    filename: ''
});
*/
module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: __dirname,
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel?presets[]=react,presets[]=es2015'}
        ]
    }
}
