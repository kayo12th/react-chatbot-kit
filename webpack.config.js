var path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.ts',
  plugins: [new MiniCssExtractPlugin()],
  target: 'es2015',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'module',
    chunkFormat: 'module',
    hashFunction: 'sha256',
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?|\.jsx?|\.js?|\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'react-svg-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.js', '.ts'],
  },
  externals: ['react', nodeExternals({ importType: 'module' })],
};
