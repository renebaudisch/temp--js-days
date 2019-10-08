import Article from './articles/Article';
import Articles from './articles/Articles';

const articles = new Articles();

articles.add(new Article({
  name: 'iPhone 11 Pro',
  price: { amount: 1999, currency: 'EUR' }
}));
articles.add(new Article({
  name: 'iPhone 11',
  price: { amount: 1799, currency: 'EUR' }
}));
articles.add(new Article({
  name: 'Lumia 950XL',
  price: { amount: 1, currency: 'EUR' }
}));

export default articles;
