const express = require('express');
const path = require('path');
const next = require('next');
const compression = require('compression') ;
const config = require('config');
const db = require('./db');


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || config.get('port');

app.prepare().then(() => {
  const server = express();
  server.use(compression());
  server.use(express.static(path.join(__dirname, 'dist')));
  const { api } = require('./api');
  api(server);
    
  server.listen(port, (err: any) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })

  server.get('*', (req: any, res: any) => {
    return handle(req, res)
  })
  
}).catch((ex: any) => {
  console.error(ex.stack)
  process.exit(1)
})