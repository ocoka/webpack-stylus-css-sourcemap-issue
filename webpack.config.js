const path = require('path');
module.exports = {
  stats: 'verbose',
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_[hash].js',
    publicPath: ''
  },

  resolve: {
    extensions: ['.js', '.styl']
  },

  devtool: 'module-nosources-source-map',

  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: {
                comment: false,
                inline: false,
                //sourceRoot: 'src/',
                //basePath: path.resolve(__dirname, 'src')
              }
            }
          }
        ]
      }
    ]
  }
};
