"use strict";
var gulp = require('gulp');
var config = require('./config');
var runSequence = require('run-sequence').use(gulp);

gulp.task('assets', function(callback) {
  runSequence(
    ['assets-global', 'assets-fonts', 'assets-images', 'assets-temp', 'assets-data', 'assets-plugins'],
    callback
  );
});

gulp.task('assets-global', function() {
  return gulp.src(config.paths.global.src + '**/*')
    .pipe(gulp.dest(config.paths.global.dist));
});

gulp.task('assets-fonts', function() {
  return gulp.src(config.paths.fonts.src + '**/*')
    .pipe(gulp.dest(config.paths.fonts.dist));
});

gulp.task('assets-images', function() {
  return gulp.src(config.paths.images.src + '**/*')
    .pipe(gulp.dest(config.paths.images.dist));
});

gulp.task('assets-temp', function() {
  return gulp.src(config.paths.temp.src + '**/*')
    .pipe(gulp.dest(config.paths.temp.dist));
});

gulp.task('assets-data', function() {
  return gulp.src(config.paths.assetsData.src + '**/*')
    .pipe(gulp.dest(config.paths.assetsData.dist));
});

gulp.task('assets-plugins', function() {
  return gulp.src([config.paths.plugins.src + '*.js', '!' + config.paths.plugins.src + '*.tests.js'])
    .pipe(gulp.dest(config.paths.plugins.dist));
});