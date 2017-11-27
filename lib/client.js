'use strict';
const path = require('path');
const EasyWebpack = require('easywebpack');
const merge = EasyWebpack.merge;
const defaultConfig = require('../config/config');
class WebpackClientBuilder extends EasyWebpack.WebpackClientBuilder {
  constructor(config) {
    super(merge(defaultConfig, config));
    this.setResolveLoader({ modules: [path.join(__dirname, '../node_modules')] });
    this.mergeLoader(require('../config/loader'));
  }
}
module.exports = WebpackClientBuilder;