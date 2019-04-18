const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema and Model
const AppConfigSchema = new Schema({
  name: String,
});

const AppConfig = mongoose.model('config', AppConfigSchema);

module.exports = {
  AppConfig,
  AppConfigSchema,
};
