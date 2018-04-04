import path from 'path';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    target: 'web',
    entry: [
        path.join(__dirname, 'src/index')
    ],
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        loaders: [
            {test: /\.js$/, exclude /node_modules/, loaders ['babel']},
            {test: /\.css$/, loaders: ['style', 'css']}
        ]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css']
    },
    devServer: {
        publicPath: path.join('/build/')
    }
};
