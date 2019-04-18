const favicon = require('serve-favicon');
const path = require('path');
const { AppConfig } = require('./models/AppConfig');

const api = (server) => {
  server.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.sendFile(path.join(__dirname, '../static', 'robots.txt'));
  });
  server.get('/sitemap.xml', (req, res) => {
    res.type('text/xml');
    res.sendFile(path.join(__dirname, '../static', 'sitemap.xml'))
  });
  server.get('/api/appConfig', (req, res) => {
    AppConfig.find({}, ((err, app) => {
      res.send(app);
    }));
  })
  server.post('/api/appConfig', (req, res) => {
    const { name } = req.body;
    const AppConfig = new AppConfig({ name });
    AppConfig.save().then(() => {
      AppConfig.find({}, ((err, app) => {
        res.send(app);
      }));
    });
  })
  server.use(favicon(path.join(__dirname, '../static', 'favicon.ico')));
}

module.exports = api;