const withPlugins = require('next-compose-plugins');
const withPreact = require('next-plugin-preact')
const withCSS = require('@zeit/next-sass')

module.exports = withPlugins([
  [withCSS],
  [withPreact]
]);