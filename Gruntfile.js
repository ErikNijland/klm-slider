module.exports = function (grunt) {
    grunt.initConfig({
        karma: {
            all: {
                options: {
                    configFile: 'karma.conf.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
};
