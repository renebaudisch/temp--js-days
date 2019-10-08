'use strict';

const express = require('express');

const getArticles = require('./routes/getArticles'),
      getRoot = require('./routes/getRoot');

const getApp = function () {
  const app = express();

  app.get('/', getRoot);
  app.get('/articles/:id?', getArticles);

  return app;
};

module.exports = getApp;
