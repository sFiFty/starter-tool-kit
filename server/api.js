const favicon = require('serve-favicon');
const path = require('path');

const api = (server) => {
  server.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.sendFile(path.join(__dirname, '../static', 'robots.txt'));
  });
  server.get('/sitemap.xml', (req, res) => {
    res.type('text/xml');
    res.sendFile(path.join(__dirname, '../static', 'sitemap.xml'))
  });
  server.get('/api/test', (req, res) => {
    res.send('hello world');
  })
  server.use(favicon(path.join(__dirname, '../static', 'favicon.ico')));
}

module.exports = api;