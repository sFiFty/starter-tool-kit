const favicon = require('serve-favicon');
const path = require('path');
const { AppConfig } = require('./models/AppConfig');
const mongoose = require('mongoose');

const administration = (server) => {
  server.get('/api/administration/appConfig', (req, res) => {
    AppConfig.find({}, ((err, configs) => {
      const config = configs[0] || {};
      res.json(config);
    }));
  })
  server.post('/api/administration/appConfig', (req, res) => {
    const { name } = req.body;
    AppConfig.find({}, ((err, configs) => {
      if (configs[0]) {
        const config = mongoose.model('config').findOne();
        config.updateOne({ name }).then(() => {
          AppConfig.find({}, ((err, app) => {
            res.send(app[0]);
          }));
        });
      } else {
        const config = new AppConfig({ name });
        config.save().then(() => {
          AppConfig.find({}, ((err, app) => {
            res.send(app[0]);
          }));
        });
      }
    }));

  })
}

module.exports = administration;