"use strict";
var gulp = require('gulp');
var gutil = require('gulp-util');
var through = require('through2');
var path = require('path');
var File = require('vinyl');
var fs = require('fs');
var grayMatter = require('gray-matter');
var extname = require('gulp-extname');

var config = require('./config');
var handleError = require('./handle-error');

var buildListings = function(outputFile) {
  var files = [];
  var fileList = [];

  return through.obj(function(file, enc, cb) {

    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('blog-listings', 'Streams not supported'));
      return;
    }

    files.push(file);

    var originalPath = file.path;
    var relativePath = path.relative(config.paths.views.blogposts, originalPath);
    var outputPath = relativePath.replace('.hbs', '.html');

    var contents = fs.readFileSync(path.relative(process.cwd(), originalPath), 'utf8');
    var grayMatterOutput = grayMatter(contents);
    var grayMatterData = grayMatterOutput.data;
    
    var pageData = grayMatterData;
    pageData.url = outputPath;

    if (pageData.styleguide === true) {
      fileList.unshift(pageData);
    } else {
      fileList.push(pageData);
    }

    this.push(file);
    cb();
  }, function(cb) {
    var fileListFile = new File({
      path: outputFile,
      contents: new Buffer(JSON.stringify(fileList, null, '  '))
    });

    this.push(fileListFile);
    cb();
  });
};


gulp.task('bloglisting', function() {
    return gulp.src('src/pages/blog/*.hbs')
        .pipe(buildListings("blog-listings.json"))
        .pipe(extname())
        .pipe(gulp.dest('dist'));
});
