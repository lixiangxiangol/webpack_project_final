"use strict";

var webpack = require("webpack");
var webpackBase = require("./webpack.config.js");

var cfg = Object.assign(webpackBase, {
    devtool: "cheap-module-eval-source-map"
});

module.exports = cfg;

//# sourceMappingURL=webpack-config.dev-compiled.js.map