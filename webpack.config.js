// First find the entry point then find the output file.
// entry -> output
// __dirname is the global variable for the path
// Loaders transform ES6 to ES5 and JSX to JS
// babel core is used by webpack
// babel loader is a plugin for webpack

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader', // The loader to use
            test: /\.js$/, // Find files that end with js
            exclude: /node_modules/ // Exclude node modules
        }, {
            test: /\.s?css$/,
            use: [ 
                'style-loader', 
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    // Add dev source maps
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};