const webpack = require('webpack');
const typescript = require('@zeit/next-typescript');
const sass = require('@zeit/next-sass');
const css = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const images = require('next-images');

module.exports = withPlugins([typescript, css, sass, images], {
  publicRuntimeConfig: {
    FIREBASE_CONFIG: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    },
    APP_URL:  process.env.APP_URL
  }
})