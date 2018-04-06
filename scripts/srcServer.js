import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3001;
const app = express();
const compiler = webpack(config);

/* eslint-disable no-console */

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
    res.json([
        {"id": 1, "firstName": "Jared", "lastName": "Williams", "email": "jaredwilli@gmail.com"},
        {"id": 2, "firstName": "Jill", "lastName": "Slacker", "email": "jill@gmail.com"},
        {"id": 3, "firstName": "Jack", "lastName": "Off", "email": "jack@gmail.com"},
    ]);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});
