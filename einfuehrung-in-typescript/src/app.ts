import { createServer } from 'http';
import express from 'express';
import flaschenpost from 'flaschenpost';
import processenv from 'processenv';

const logger = flaschenpost.getLogger();

const app = express();

app.get('/', (_, res) => {
  res.write('Hallo TypeScript!');
  res.end();
});

const server = createServer(app);

const port = processenv('PORT', 3000);

server.listen(port, () => {
  logger.info('Server started.', { port });
});
