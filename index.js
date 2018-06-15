var loaderUtils = require('loader-utils');
var _ = require('lodash');

module.exports = function (source) {
  this.cacheable && this.cacheable();

  var options = loaderUtils.getOptions(this) || {};
  var template = _.template(source, null, options.tplSettings);

  return 'var _ = require(\'underscore\');\nmodule.exports = ' + template;
};
