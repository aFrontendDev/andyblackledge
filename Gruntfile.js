/*!
* andyblackledge Gruntfile
* http://andyblackledge.co.uk
* @author Andy Blackledge blackledge22@gmail.com
*/


/**
* Grunt Module
*/
module.exports = function(grunt) {
    'use strict';


    /**
    * Configuration
    */
    grunt.initConfig({
        /**
        * Get package meta data
        */
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> */ \n'
        },
        project: {
            gruntfile: 'Gruntfile.js',
            // Src settings
            src: 'src',
            srcAssets: 'assets',
            srcFonts: 'fonts',
            srcImages: 'images',
            srcScripts: 'scripts',
            srcJS: '<%= project.src %>/<%= project.srcAssets %>/<%= project.srcScripts %>/main.js',
            srcStyles: 'styles',
            srcSass: 'sass',
            mainSass: 'order.scss',
            srcCss: '<%= project.src %>/<%= project.srcAssets %>/<%= project.srcStyles %>/<%= project.srcSass %>/<%= project.mainSass %>',
            // Dist settings
            dist: 'dist',
            distFonts: 'fonts',
            distImages: 'images',
            distScripts: '_scripts',
            distStyles: '_styles',
            distTemp: 'temp',
            mainCss: 'main.css',
            // Project settings
            pagePrefix: '<%= pkg.name %>_'
        },
        /**
        * Sass
        */
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    compass: true
                },
                files: {
                    '<%= project.dist %>/<%= project.distStyles %>/<%= project.mainCss %>': '<%= project.srcCss %>'
                }
            },
            dist: {
                options: {
                    style: 'compressed',
                    compass: true
                },
                files: {
                    '<%= project.dist %>/<%= project.distStyles %>/<%= project.mainCss %>': '<%= project.srcCss %>'
                }
            }
        },
        /**
        * Watch
        */
        watch: {
            sass: {
                files: '<%= project.src %>/<%= project.srcAssets %>/<%= project.srcStyles %>/<%= project.srcSass %>/*.scss',
                tasks: ['sass:dev']
            }
        }

    });

    /**
    * Load Grunt plugins
    */
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    /**
    * Default task
    * Run `grunt` on the command line
    */
    grunt.registerTask('default', [
        'sass:dev',
        'watch'
    ]);
};
