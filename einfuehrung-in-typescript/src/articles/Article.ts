import Price from './Price';

class Article {
  name: string;

  price: Price;

  constructor (name: string, price: Price) {
    this.name = name;
    this.price = price;
  }
}

export default Article;
