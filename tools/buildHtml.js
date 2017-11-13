// This script copies src/index.html into /dist/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only use a separate css file in prod.
import fs from 'fs';
import cheerio from 'cheerio';
import {OUTPUT_PATH} from '../webpack.config.prod';

/*eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);
  // since a separate spreadsheet is only utilized for the production build, need to dynamically add this here.
  //  meta tags for Facebook sharing
  const head = $('head');
  const meta = $('meta[name="viewport"]');
  const metaFbTags = $('<meta property="og:image" content="/assets/danablue.png"><meta property="og:site_name" content="DanaKita"><meta property="og:type" content="website"><meta property="og:url" content="https://danakita.com"> <meta property="og:title" content="DanaKita"> <meta property="og:description" content="DanaKita is an Indonesian peer to peer lending marketplace. DanaKita adalah marketplace pinjaman peer-to-peer di Indonesia."> <meta property="fb:app_id" content="184941708597056"> <meta property="og:title" content="DanaKita"> <meta property="fb:pages" content="311635489239662">');
  head.children().last()
    .after('<link href="styles.css" rel="stylesheet" type="text/css" >');
  metaFbTags.insertAfter('meta[name="viewport"]');

  fs.writeFile(OUTPUT_PATH + '/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('index.html written to /dist'.green);
  });
});

