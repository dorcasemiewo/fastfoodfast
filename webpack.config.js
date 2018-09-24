const path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './app.js',
  target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    externals: [nodeExternals()],
    devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};