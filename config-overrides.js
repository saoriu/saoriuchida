const { override, addWebpackPlugin } = require('customize-cra');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = override(
  addWebpackPlugin(
    new WebpackObfuscator({
      rotateStringArray: true,
      // other obfuscation options...
    })
  ),
  // other overrides...
);
