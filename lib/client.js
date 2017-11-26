'use strict';
const path = require('path');
const EasyWebpack = require('easywebpack');
class WebpackClientBuilder extends EasyWebpack.WebpackClientBuilder {
  constructor(config) {
    super(config);
    this.mergeConfig(require('../config/config'));
    this.setResolveLoader({ modules: [path.join(__dirname, '../node_modules')] });
  }
}
module.exports = WebpackClientBuilder;
