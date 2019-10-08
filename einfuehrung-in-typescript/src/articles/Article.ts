import Price from './Price';

class Article {
  public name: string;

  public price: Price;

  public constructor ({ name, price }: {
    name: string;
    price: Price;
  }) {
    this.name = name;
    this.price = price;
  }
}

export default Article;
