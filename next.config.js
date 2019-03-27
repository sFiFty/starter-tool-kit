const webpack = require('webpack');
const typescript = require('@zeit/next-typescript');
const sass = require('@zeit/next-sass');
const config = require('./config/development.json');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([typescript, sass], {
  publicRuntimeConfig: {
    FIREBASE_CONFIG: config.FIREBASE_CONFIG
  }
})