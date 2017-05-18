const path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    cache: !(process.env.NODE_ENV == 'development'),
    entry:  path.resolve(__dirname, "../assets/src/index.js"),
    output: {
        path: __dirname,
        filename: "../assets/js/bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.scss$/, 
                use:  ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('../assets/styles/main.css')
        ]
};