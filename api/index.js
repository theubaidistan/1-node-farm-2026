const fs = require('fs');
const path = require('path');
const url = require('url');
const slugify = require('slugify');

const replaceTemplate = require('../modules/replaceTemplate');

// ---------- SAFE FILE PATHS ----------
const tempOverview = fs.readFileSync(
  path.join(__dirname, '../templates/template-overview.html'),
  'utf-8'
);

const tempCard = fs.readFileSync(
  path.join(__dirname, '../templates/template-card.html'),
  'utf-8'
);

const tempProduct = fs.readFileSync(
  path.join(__dirname, '../templates/template-product.html'),
  'utf-8'
);

const data = fs.readFileSync(
  path.join(__dirname, '../dev-data/data.json'),
  'utf-8'
);

const dataObj = JSON.parse(data);

// optional slugs (not required but fine)
const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));

module.exports = (req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  // ---------------- FAVICON ----------------
  if (pathname === '/favicon.ico') {
    const favicon = fs.readFileSync(path.join(__dirname, './favicon.ico'));

    res.setHeader('Content-Type', 'image/x-icon');
    return res.end(favicon);
  }

  // ---------------- OVERVIEW ----------------
  if (pathname === '/' || pathname === '/overview') {
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');

    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);

    res.setHeader('Content-Type', 'text/html');
    return res.end(output);
  }

  // ---------------- PRODUCT ----------------
  if (pathname === '/product') {
    if (!query.id) {
      res.statusCode = 400;
      return res.end('Missing product id');
    }

    const product = dataObj[query.id];

    if (!product) {
      res.statusCode = 404;
      return res.end('Product not found');
    }

    const output = replaceTemplate(tempProduct, product);

    res.setHeader('Content-Type', 'text/html');
    return res.end(output);
  }

  // ---------------- API ----------------
  if (pathname === '/api') {
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(dataObj));
  }

  // ---------------- 404 ----------------
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Page not found!</h1>');
};
