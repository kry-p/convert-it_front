const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PORT = process.env.PORT || 3000;
const outputDirectory = './build';

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, outputDirectory),
    publicPath: '/',
    filename: '[name].[fullhash].js',
  },
  devServer: {
    port: PORT,
    open: true,
    proxy: {
      '/api': `http://localhost:${PORT}`,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: false,
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
