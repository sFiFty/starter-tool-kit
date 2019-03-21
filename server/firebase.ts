const firebase = require('firebase');
const config = require('config');

firebase.initializeApp(config.get('FIREBASE_CONFIG'));

export default firebase;