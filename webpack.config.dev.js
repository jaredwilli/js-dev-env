import path from 'path';

export default {
    devtool: 'inline-source-map',
    target: 'web',
    mode: 'development',
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
            {test: /\.css$/, loaders: ['style-loader', 'css-loader']}
        ]
    }
};
