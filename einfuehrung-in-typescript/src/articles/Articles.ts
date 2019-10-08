import Article from './Article';
import Price from './Price';

class Articles {
  articles: Article[];

  constructor () {
    this.articles = [];
  }

  add (article: Article) {
    this.articles.push(article);
  }
}

const articles = new Articles();

articles.add(new Article('iPhone 11 Pro', new Price(1999, 'EUR')));

export default Articles;
