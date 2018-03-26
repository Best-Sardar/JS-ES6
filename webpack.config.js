const path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 3000,
        inline:true
    }
};
