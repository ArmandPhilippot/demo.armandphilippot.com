const { merge } = require("webpack-merge");
const common = require("./config/webpack.common");
const dev = require("./config/webpack.dev");
const prod = require("./config/webpack.prod");

const isProduction = process.env.NODE_ENV === "production";

module.exports = () => {
  if (isProduction) return merge(common, prod);
  return merge(common, dev);
};
