import Article from './Article';

class Articles {
  public articles: Article[];

  public constructor () {
    this.articles = [];
  }

  public add (article: Article): void {
    this.articles.push(article);
  }
}

export default Articles;
