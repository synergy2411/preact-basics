const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : "./src/index.js",
    output :  {
        filename : "bundle.js",
        path : path.resolve(__dirname, "dist")
    },
    mode : "development",
    module : {
        rules : [
            {
                test : /\.m?js$/,
                use : {
                    loader : "babel-loader",
                    options : {
                        presets : ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./index.html"
        })        
    ],
    devServer : {
        port : 3333
    }
}