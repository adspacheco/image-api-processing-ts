import express from 'express';
import routes from './routes';
const log = require('debug')('http');

const app = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, () => {
  log('server started');
});

export default app;
