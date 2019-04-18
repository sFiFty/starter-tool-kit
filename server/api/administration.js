const favicon = require('serve-favicon');
const path = require('path');
const { AppConfig } = require('./models/AppConfig');

const administration = (server) => {
  server.get('/api/administration/appConfig', (req, res) => {
    console.log('request');
    AppConfig.find({}, ((err, app) => {
      res.send(app);
    }));
  })
  server.post('/api/administration/appConfig', (req, res) => {
    const { name } = req.body;
    console.log(name);
    return;
    const AppConfig = new AppConfig({ name });
    AppConfig.save().then(() => {
      AppConfig.find({}, ((err, app) => {
        res.send(app);
      }));
    });
  })
}

module.exports = administration;