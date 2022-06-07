const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: resolve(__dirname, 'src', 'index.js'),
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
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'src', 'index.html')
      })
    ],
    devServer: {
      watchFiles: ["./*"],
      port: 3000,
      open: true,
      hot: true
    }
  } 