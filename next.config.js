const webpack = require("webpack"); // eslint-disable-line import/no-extraneous-dependencies
const withCSS = require("@zeit/next-css");

require("dotenv").config();

module.exports = withCSS({
  distDir: ".client-dist",
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  }
});
