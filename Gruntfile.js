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

    require('load-grunt-tasks')(grunt, {
		scope: 'devDependencies'
	});

    /**
    * Configuration
    */
    grunt.initConfig({
        /**
        * Get package meta data
        */
        bowerrc: grunt.file.readJSON('.bowerrc'),
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> */ \n'
        },
        project: {
            gruntfile: 'Gruntfile.js',
            bower: '<%= bowerrc.directory %>',
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
        * concat - combine files
        */
        concat: {
            scripts: {
                src: [
				'<%= project.src %>/<%= project.srcAssets %>/<%= project.srcScripts %>/plugins/*.js',
				'<%= project.src %>/<%= project.srcAssets %>/<%= project.srcScripts %>/modules/*.js',
				'<%= project.src %>/<%= project.srcAssets %>/<%= project.srcScripts %>/_init.js'
				],
				dest: '<%= project.dist %>/<%= project.distScripts %>/scripts.js'
            }
        },

        /**
        * modernizr - pull necessary modernizr js
        */
		modernizr: {
			dist: {
				'devFile': '<%= project.bower %>/modernizr/modernizr.js',
				'outputFile': '<%= project.dist %>/<%= project.distScripts %>/modernizr.js',
				'parseFiles': true,
				'files': {
					'src': [
						'<%= project.dist %>/<%= project.distScripts %>/*.js',
						'<%= project.dist %>/<%= project.distStyles %>/*.css'
					]
				},
				'extra': {
					'shiv': true,
					'printshiv': false,
					'load': true,
					'mq': false,
					'cssclasses': true
				},
				'extensibility': {
					'addtest': false,
					'prefixed': false,
					'teststyles': false,
					'testprops': false,
					'testallprops': false,
					'hasevents': false,
					'prefixes': false,
					'domprefixes': false
				}
			}
		},

        /*
        * copy - copy across files not already taken care of by sass and concat
        */
        copy: {
			assets: {
				files: [{
					expand: true,
					cwd: '<%= project.src %>/<%= project.srcAssets %>/<%= project.srcImages %>/',
					src: ['**'],
					dest: '<%= project.dist %>/<%= project.distImages %>/'
				},
				{
					expand: true,
					cwd: '<%= project.src %>/<%= project.srcAssets %>/<%= project.srcFonts %>/',
					src: ['**/**.**'],
					dest: '<%= project.dist %>/<%= project.distStyles %>/<%= project.distFonts %>/'
				}]
			},
			phpfiles: {
				files: [{
					expand: true,
					cwd: '<%= project.src %>/php/',
					src: ['*.php'],
					dest: '<%= project.dist %>/'
				}]
			},
			html: {
				files: [{
					expand: true,
					cwd: '<%= project.src %>/html/',
					src: ['*.html'],
					dest: '<%= project.dist %>/'
				}]
			}
		},

        /*
        * Watch
        */
        watch: {
            sass: {
                files: '<%= project.src %>/<%= project.srcAssets %>/<%= project.srcStyles %>/<%= project.srcSass %>/*.scss',
                tasks: ['build_dev']
            },
            scripts: {
                files: '<%= project.src %>/<%= project.srcAssets %>/<%= project.srcScripts %>/**/**.js',
                tasks: ['build_dev']
            },
            html: {
                files: '<%= project.src %>/html/**.html',
                tasks: ['build_dev']
            }
        }

    });

    /**
    * Load Grunt plugins
    */
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('build_dev', [
        'sass:dev',
        'concat:scripts',
        'modernizr',
        'copy'
	]);
    /**
    * Default task
    * Run `grunt` on the command line
    */
    grunt.registerTask('default', [
        'build_dev',
        'watch'
    ]);
};
