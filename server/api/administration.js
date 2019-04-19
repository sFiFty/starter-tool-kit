const favicon = require('serve-favicon');
const path = require('path');
const { AppConfig } = require('./models/AppConfig');

const administration = (server) => {
  server.get('/api/administration/appConfig', (req, res) => {
    AppConfig.find({}, ((err, app) => {
      res.send(app[0]);
    }));
  })
  server.post('/api/administration/appConfig', (req, res) => {
    const { name } = req.body;
    const config = new AppConfig({ name });
    config.save().then(() => {
      AppConfig.find({}, ((err, app) => {
        res.send(app[0]);
      }));
    });
  })
}

module.exports = administration;