const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: './js/index.js',
  mode: 'development',
  output: {
    filename: 'main.[contenthash].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\\.(png|jpe?g|gif|mp3)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html')
    }),
    new AnalyzerPlugin()
  ],
  devServer: {
    watchFiles: ["./*"],
    port: 3000,
    open: true,
    hot: true
  }
} 