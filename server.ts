const express = require('express');
const path = require('path');
const next = require('next');
const compression = require('compression') ;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();
  server.use(compression());
  server.use(express.static(path.join(__dirname, 'dist')));
 
  server.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.sendFile(path.join(__dirname, 'static', 'robots.txt'));
  });

  server.get('/sitemap.xml', function (req, res) {
    res.type('text/xml');
    res.sendFile(path.join(__dirname, 'static', 'sitemap.xml'))
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
  
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})