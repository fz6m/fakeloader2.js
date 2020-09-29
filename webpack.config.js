const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: resolve('src/index.js'),
  output: {
    path: resolve('dist'),
    filename: "fakeloader2.min.js",
    library: 'FakeLoader',
    libraryExport: 'default',
    libraryTarget: "umd"
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: resolve('src'),
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        }
      },
      {
        loader: 'postcss-loader'
      }]
    }]
  },
  optimization: {
    minimize: true
  }
}