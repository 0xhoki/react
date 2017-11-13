import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 5000;
const app = express();

/// ENV SELECTION ///

/* **********Localhost************* */
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);
app.use(require('webpack-hot-middleware')(compiler));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});
/* **********Localhost************* */

/* **********AWS Config************* */
// app.use(function(req, res, next) {
//   var schema = (req.headers["x-forwarded-proto"] || "").toLowerCase();
//   if (schema === "https") {
//     next();
//   } else {
//     res.redirect("https://" + req.headers.host + req.url);
//   }
// });
// app.use(express.static("dist"));
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "../dist/index.html"));
// });
/* **********AWS Config************* */

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
