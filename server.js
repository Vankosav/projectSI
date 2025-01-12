const express = require('express');
const next = require('next');
const dotenv = require('dotenv');

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT || 8080, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:8080');
  });
});
