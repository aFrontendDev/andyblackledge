'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');
var connect = require('gulp-connect');


gulp.task('run_backstop_refs',  shell.task([
    'backstop reference'
]));

gulp.task('run_backstop_test', shell.task([
    'backstop test'
]));

gulp.task('open_port', function() {
    var serverPort = 4000;
    var localhost = 'http://localhost:' + serverPort;

    connect.server({
        host: 'localhost',
        port: serverPort,
        livereload: false,
        root: 'dist/'
    });
});

gulp.task('backstop-ref', ['open_port', 'run_backstop_refs'], function (callback) {
    connect.serverClose();
});

gulp.task('backstop-test', ['open_port', 'run_backstop_test'], function (callback) {
    connect.serverClose();
});