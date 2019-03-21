const mongoose = require('mongoose');
const config = require('config');

const DB = mongoose.connection;
const MONGO_LINK = process.env.MONGODB_URI || config.get('MONGODB_URI');

mongoose.connect(MONGO_LINK, {useNewUrlParser: true});

DB.on('error', console.error.bind(console, 'connection error:'));

DB.once('open', function() {
  console.log('db-connected');
});

export default DB;
