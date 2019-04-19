const mongoose = require('mongoose');

const database = mongoose.connection;
const MONGO_LINK = process.env.MONGODB_URI;

mongoose.connect(MONGO_LINK, {useNewUrlParser: true});

database.on('error', console.error.bind(console, 'connection error:'));

database.once('open', function() {
  console.log('db-connected');
});

module.exports = database;
