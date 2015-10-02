module.exports = function(grunt) {
    // Do grunt-related things in here to run build
    "use strict";

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        requirejs: {
            compile: {
                options: {
                    mainConfigFile: 'public/js/main.js',
                    baseUrl: "public/js/",
                    // baseUrl: ".",
                    include: ['main'],
                    out: 'public/js/app.js'
                }
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-requirejs");

    grunt.registerTask('prod-compile', ['requirejs:compile']);
};
