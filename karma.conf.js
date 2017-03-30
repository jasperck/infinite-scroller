// Karma configuration
// Generated on Wed Mar 29 2017 00:09:05 GMT+0800 (CST)

const webpack = require('webpack');

module.exports = function (config) {
  config.set({
    webpack: {
      module: {
        loaders: [
          {
            test: /\.vue$/,
            loader: 'vue'
          },
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
          }
        ]
      },
      vue: {
        loaders: {
          css: 'vue-style-loader!css-loader?sourceMap',
          postcss: 'vue-style-loader!css-loader?sourceMap',
          less: 'vue-style-loader!css-loader?sourceMap!less-loader?sourceMap',
          sass: 'vue-style-loader!css-loader?sourceMap!sass-loader?indentedSyntax&sourceMap',
          scss: 'vue-style-loader!css-loader?sourceMap!sass-loader?sourceMap',
          stylus: 'vue-style-loader!css-loader?sourceMap!stylus-loader?sourceMap',
          styl: 'vue-style-loader!css-loader?sourceMap!stylus-loader?sourceMap'
        }
      },
      devtool: 'source-map',
    },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
      'test/**/*.test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.test.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // reporter options
    mochaReporter: {
      showDiff: true
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
