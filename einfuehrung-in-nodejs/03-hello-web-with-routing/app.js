'use strict';

const http = require('http');

const flaschenpost = require('flaschenpost').default,
      processenv = require('processenv').default;

const getApp = require('./lib/getApp');

const logger = flaschenpost.getLogger();

const app = getApp();
const server = http.createServer(app);

const port = processenv('PORT', 3000);

server.listen(port, () => {
  logger.info('Server started.', { port });
});
