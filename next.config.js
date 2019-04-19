const webpack = require('webpack');
const typescript = require('@zeit/next-typescript');
const sass = require('@zeit/next-sass');
const css = require('@zeit/next-css');
const config = require('./config/development.json');
const withPlugins = require('next-compose-plugins');
const images = require('next-images');

module.exports = withPlugins([typescript, css, sass, images], {
  publicRuntimeConfig: {
    FIREBASE_CONFIG: config.FIREBASE_CONFIG,
    APP_URL: config.APP_URL
  }
})