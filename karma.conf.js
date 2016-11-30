module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        coverageReporter: {
            check: {
                global: {
                    statements: 100,
                    branches: 100,
                    functions: 100,
                    lines: 100
                }
            },
            reporters: [
                {
                    type: 'html',
                    dir: 'reports/coverage'
                },
                {
                    type: 'text-summary'
                }
            ]
        },
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'src/slider.module.js',
            'src/**/*.js'
        ],
        frameworks: ['jasmine'],
        logLevel: 'DEBUG',
        mochaReporter: {
            output: 'minimal'
        },
        plugins: [
            'karma-coverage',
            'karma-jasmine',
            'karma-babel-preprocessor',
            'karma-mocha-reporter',
            'karma-phantomjs-launcher'
        ],
        preprocessors: {
            'src/**/!(*.spec).js': ['coverage'],
            'src/**/*.js': ['babel']
        },
        reporters: [
            'mocha',
            'coverage'
        ],
        singleRun: true
    });
};
