const admin = require("firebase-admin");

const serviceAccount = require("./adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://starter-toolkit.firebaseio.com"
});

export const firebase = admin;