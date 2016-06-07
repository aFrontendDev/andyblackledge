'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pxtorem = require('gulp-pxtorem');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
    return gulp.src('./sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
     .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(pxtorem())
    .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['default']);
});