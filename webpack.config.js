// webpack should be in the node_modules directory, install if not.
// https://medium.com/@tkssharma/eslint-in-react-babel-webpack-9cb1c4e86f4e#.hlophrwed
var webpack = require("webpack");
module.exports = {
  devtool: /*'eval',*/'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }, {
          loader: 'eslint-loader'
        }]
      },
      {
        test: /\.css/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
        // include: __dirname + '/src'
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
