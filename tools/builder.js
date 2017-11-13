import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';

const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  if (err) {
    // eslint-disable-next-line
    console.log(err);
  } else {
    // eslint-disable-next-line
    console.log('build created <<<');
  }
});
