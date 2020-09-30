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
      test: /\.((c|sa|sc)ss)$/,
      exclude: /node_modules/,
      use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
        options: {
          importLoaders: 2,
        },
      },
      {
        loader: "postcss-loader",
      },
      {
        loader: "sass-loader",
      }],
    }]
  },
  optimization: {
    minimize: true
  }
}