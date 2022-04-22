const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            }
        ]
    }
};