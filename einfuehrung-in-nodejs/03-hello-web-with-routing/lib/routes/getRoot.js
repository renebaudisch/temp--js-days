'use strict';

const getRoot = (req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  res.write('Hallo Welt!<br />');
  res.write(`${req.method} ${req.url}`);
  res.end();
};

module.exports = getRoot;
