import articles from './articles';
import express, { Express } from 'express';

const getApp = function (): Express {
  const app = express();

  app.get('/', (_, res): void => {
    res.write('Hallo TypeScript!');
    res.end();
  });
  app.get('/articles', (_, res): void => {
    res.json(articles);
  });

  return app;
};

export default getApp;
