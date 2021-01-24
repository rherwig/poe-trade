const { resolve } = require('path');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    target: 'node',
    entry: resolve(__dirname, 'src/index.ts'),
    output: {
        filename: 'message-api.js',
        path: resolve(__dirname, 'lib'),
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.ts$/,
            },
        ],
    },
};

