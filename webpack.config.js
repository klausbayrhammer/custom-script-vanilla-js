const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        library: 'customScript',
        libraryTarget: 'amd',
        path: path.resolve(__dirname, 'dist'),
        filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].js' : 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};
