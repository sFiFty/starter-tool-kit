const express = require('express');
const path = require('path');
const next = require('next');
const bodyParser = require('body-parser')
const compression = require('compression') ;
require('dotenv').config();
const db = require('./db');


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT;

app.prepare().then(() => {
  const server = express();
  server.use(compression());
  server.use(express.static(path.join(__dirname, 'dist')));
  server.use(bodyParser.json());
  const api = require('./api');
  api(server);
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})