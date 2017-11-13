import webpack from 'webpack';
import path from 'path';

const SOURCE_PATH = path.resolve(__dirname, 'src');
const OUTPUT_PATH = path.resolve(__dirname, 'dist');
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  'global.IS_BROWSER': true
};
export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
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
    // eslint-disable-next-line
    new webpack.DefinePlugin({'process.env.API_HOST': process.env.API_HOST}),
    new webpack.HotModuleReplacementPlugin(),
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
            'transform-react-jsx',
            'transform-runtime'
          ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.styl$/, loaders: ['style', 'css', 'stylus']},
      {test: /\.(eot||png||jpg||jpeg||ttf||ico)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.gif$/, loader: 'file?name=[name].[ext]'}

    ],
    preLoaders: [
      {
        test: /\.js?x?$/,
        loaders: ['eslint'],
        include: [SOURCE_PATH]
      }
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  },
  externals: {
    jquery: 'jquery',
    $: '$',
    jQuery: 'jQuery',
    toastr: 'toastr'
  }
};
