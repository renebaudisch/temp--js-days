'use strict';

const articles = [
  { title: 'iPhone 11 Pro', price: 1999 },
  { title: 'iPhone 11', price: 1799 },
  { title: 'Lumia 950XL', price: 1 }
];

const getArticles = (req, res) => {
  const articleId = req.params.id;

  if (articleId === undefined) {
    res.json(articles);

    return;
  }

  res.json(articles[articleId]);
};

module.exports = getArticles;
