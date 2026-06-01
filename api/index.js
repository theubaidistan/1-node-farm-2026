const fs = require('fs');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('../modules/replaceTemplate');

const data = fs.readFileSync('./dev-data/data.json', 'utf-8');
const dataObj = JSON.parse(data);

module.exports = (req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  // OVERVIEW PAGE
  if (pathname === '/' || pathname === '/overview') {
    const overview = fs.readFileSync(
      './templates/template-overview.html',
      'utf-8'
    );
    const card = fs.readFileSync('./templates/template-card.html', 'utf-8');

    const cardsHtml = dataObj.map((el) => replaceTemplate(card, el)).join('');
    const output = overview.replace('{%PRODUCT_CARDS%}', cardsHtml);

    res.setHeader('Content-Type', 'text/html');
    return res.end(output);
  }

  // PRODUCT PAGE
  if (pathname === '/product') {
    const product = dataObj[query.id];
    const productPage = fs.readFileSync(
      './templates/template-product.html',
      'utf-8'
    );

    const output = replaceTemplate(productPage, product);

    res.setHeader('Content-Type', 'text/html');
    return res.end(output);
  }

  // API
  if (pathname === '/api') {
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(dataObj));
  }

  res.statusCode = 404;
  res.end('Not Found');
};
