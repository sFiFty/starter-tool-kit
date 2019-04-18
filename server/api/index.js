const favicon = require('serve-favicon');
const path = require('path');
const administration = require('./administration');

const api = (server) => {
  server.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.sendFile(path.join(__dirname, '../../static', 'robots.txt'));
  });
  server.get('/sitemap.xml', (req, res) => {
    res.type('text/xml');
    res.sendFile(path.join(__dirname, '../../static', 'sitemap.xml'))
  });
  server.use(favicon(path.join(__dirname, '../../static', 'favicon.ico')));
  administration(server);
}

module.exports = api;