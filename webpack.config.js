const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  // output: {
  //   filename: '[name].bundle.js'
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Multi Entry',
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  optimization: {
    splitChunks: {
      // 表示所有公共模块都可以被提取出来
      chunks: 'all' 
    }
  }
}
