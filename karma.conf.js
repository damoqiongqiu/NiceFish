// NOTE:
// Karma configuration file, 
// see  https://karma-runner.github.io for more information.
// This file references VWware Clarity UI library, 
// see https://github.com/vmware-clarity/ng-clarity for more information.
const isWatch = require('yargs').strict(false).option('watch', { type: 'boolean', default: false }).argv.watch;
const cpusAvailable = require('os').cpus().length;
const executors = isWatch ? 1 : Math.min(cpusAvailable - 1, 8);
const browser = isWatch ? 'Chrome' : 'ChromeHeadless';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['parallel','jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-parallel'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('karma-htmlfile-reporter'),
      require('karma-mocha-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    parallelOptions: {
      executors,
      shardStrategy: 'round-robin',
    },
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/nice-fish'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ],
      check: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80
        }
      }
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress','mocha','html'],
    htmlReporter: {
      outputFile: 'unit-test-report/report.html',
      // Optional 
      pageTitle: '单元测试结果',
      subPageTitle: 'nicefish-unit-test',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [browser],
    singleRun: true,
    restartOnFileChange: true
  });
};
