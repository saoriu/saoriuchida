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
  (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      stream: require.resolve('stream-browserify'),
      timers: require.resolve('timers-browserify'),
    };
    return config;
  }
);