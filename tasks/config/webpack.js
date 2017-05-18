const webpackConfig = require('../webpack.config');
console.log(webpackConfig);

module.exports = function(grunt) {
  grunt.config.set('webpack',{
    options: {
      stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    },
    prod: webpackConfig,
    dev: webpackConfig
  });

  grunt.loadNpmTasks('grunt-webpack');
};