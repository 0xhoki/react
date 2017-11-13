import webpack from 'webpack';
import path from 'path';

const SOURCE_PATH = path.resolve(__dirname, 'src');
export const OUTPUT_PATH = process.env.OUTPUT_PATH || path.resolve(__dirname, 'dist');
const GLOBALS = {
  'global.IS_BROWSER': true,
  'process.env.API_HOST': JSON.stringify(process.env.API_HOST) // eslint-disable-line
};
export default {
  entry: [
    path.resolve(__dirname, 'src/index.jsx')
  ],
  target: 'web',
  output: {
    path: OUTPUT_PATH,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: SOURCE_PATH
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
        unused: true,
        drop_debugger: true,
        drop_console: true
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS)
  ],
  module: {
    loaders: [
      {
        test: /\.js?x?$/, loader: 'babel-loader', exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'es2017'],
          plugins: [
            'transform-class-properties',
            'transform-object-rest-spread',
            'transform-decorators-legacy',
            'transform-react-jsx'
          ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {test: /(\.css)$/, loaders: ['style-loader', 'css']},
      {test: /\.styl$/, loaders: ['style-loader', 'css-loader', 'stylus-loader']},
      {test: /\.(eot||png||jpg||jpeg||ttf||ico)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
      {test: /\.gif$/, loader: 'file-loader?name=[name].[ext]'}

    ]
  },
  externals: {
    jquery: 'jquery',
    $: '$',
    jQuery: 'jQuery',
    toastr: 'toastr'
  }
};
