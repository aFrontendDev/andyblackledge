'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var wrench = require('wrench');
var del = require('del');
var environments = require('gulp-environments');
var gutil = require('gulp-util'); // takes variables passed from command line
var livereload = require('gulp-livereload');
var shell = require('gulp-shell');
var rename = require('gulp-rename');
var config = require('./_gulp/config');
var connect = require('gulp-connect');
var cachebust = require('gulp-cache-bust');
var webpackStream = require('webpack-stream');

// var makeListings = function(callback) {
//     runSequence(
//         'listings',
//         callback
//     );
// };

/**
 *  This will load all js files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./_gulp').filter(function(file) {
    return (/\.(js)$/i).test(file);
}).map(function(file) {
    require('./_gulp/' + file);
});

gulp.task('clean:everything', function() {
    return del('dist');
});

// build listings
// gulp.task('buildListings', function(callback) {
//     makeListings(callback);
// });

// cachebust
gulp.task('cachebust', function() {
    gulp.src('dist/**/*.html')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('dist'));
});

// run commandline commands
gulp.task('commandline', shell.task([
	'node build',
]));

gulp.task('run_backstop_refs',  shell.task([
    'backstop reference'
]));

gulp.task('run_backstop_test', shell.task([
    'backstop test'
]));

gulp.task('run_webpack_app', shell.task([
    'npm run dev'
]));

gulp.task('run_webpack_app_build', shell.task([
    'npm run build'
]));


// build tasks
gulp.task('build', function () {
    runSequence(
        'clean:everything',
        'commandline',
        'styles',
        // 'scripts-dev',
        'scripts-prod',
        'assets',
        'cachebust'
    );
});

gulp.task('build_cached', function () {
    runSequence(
        'clean:everything',
        'commandline',
        'styles',
        // 'scripts-dev',
        'scripts-prod',
        'assets'
    );
});

gulp.task('production', function (callback) {
    runSequence(
        'clean:everything',
        'commandline',
        'styles',
        'minify-css',
        'scripts-prod',
        'assets',
        'cachebust',
        callback
    );
});

gulp.task('build_watch', function (callback) {
    runSequence(
        'clean:everything',
        'commandline',
        'styles',
        'scripts-dev',
        'assets',
        'cachebust',
        callback
    );
    livereload.listen();
    gulp.watch([config.paths.styles.src + '**/*.scss', '!' + config.paths.styles.src + '**/styles.scss', '!' + config.paths.styles.src + '**/Editor.scss'], ['styles', 'assets','cachebust']);
    gulp.watch(config.paths.temp.src + '**/*', ['assets','cachebust']);
    gulp.watch(config.paths.images.src + '**/*', ['assets','cachebust']);
    gulp.watch(config.paths.scripts.src + '**/*.js', ['scripts-dev','cachebust']);
    gulp.watch('_pages/**/*', ['commandline']);
    gulp.watch('_layouts/**/*', ['commandline']);
    gulp.watch('_master-pages/**/*', ['commandline']);
    gulp.watch('_data/**/*', ['commandline']);
    gulp.watch('_components/**/*', ['commandline']);
});

// SERVE TASK
gulp.task('open_connection', function(callback) {
    var open = require('open');
    var serverPort = Math.floor((Math.random() * 1000) + 3000);
    var localhost = 'http://localhost:' + serverPort;

    connect.server({
        host: 'localhost',
        port: serverPort,
        livereload: true,
        root: config.basePaths.dist
    });

    open(localhost, 'google chrome');
});

gulp.task('open_port', function() {
    var open = require('open');
    var serverPort = 4000;
    var localhost = 'http://localhost:' + serverPort;

    connect.server({
        host: 'localhost',
        port: serverPort,
        livereload: false,
        root: config.basePaths.dist
    });
});


gulp.task('backstop-ref', ['open_port', 'run_backstop_refs'], function (callback) {
    connect.serverClose();
});

gulp.task('backstop-test', ['open_port', 'run_backstop_test'], function (callback) {
    connect.serverClose();
});

// build and watch files
gulp.task('default', ['build_watch', 'run_webpack_app_build']);

// just build
gulp.task('dev', ['build', 'run_webpack_app_build']);

// just build but without cache bust
gulp.task('dev-cache', ['build_cached']);

// tasks to run from command line
// build and watch files then serve site in chrome
gulp.task('serve', ['build_watch', 'run_webpack_app_build'], function () {
    runSequence(
        'open_connection'
    );
});

gulp.task('serve_app', ['build_watch'], function () {
    runSequence(
        'run_webpack_app'
    );
});






