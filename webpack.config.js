const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/routes/server.js',
  target: 'node', // in order to ignore built-in modules like path, fs, etc. 
  externals: [nodeExternals()],
  devServer: {
    port: 4001
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};