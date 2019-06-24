var path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  devtool: 'none',
  output: {
    libraryTarget: 'commonjs2',
    // https://webpack.js.org/configuration/output/#module-definition-systems
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9487,
    open: true,
    publicPath: '/dist'
  }
}
