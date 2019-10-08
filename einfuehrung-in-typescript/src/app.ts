import { createServer } from 'http';
import flaschenpost from 'flaschenpost';
import getApp from './getApp';
import processenv from 'processenv';

const logger = flaschenpost.getLogger();

const app = getApp();
const server = createServer(app);

const port = processenv('PORT', 3000);

server.listen(port, (): void => {
  logger.info('Server started.', { port });
});
