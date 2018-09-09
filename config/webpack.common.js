var webpack = require('webpack'); 
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      },
      {
        test: /\.scss$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!sass-loader?sourceMap' })
      },
      {
        test: /\.scss$/,
        include: helpers.root('src', 'app'),
        loaders: ['raw-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    // extractSASS,
    // new ExtractTextPlugin('[name].css'),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /\@angular(\\|\/)core(\\|\/)esm5/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};