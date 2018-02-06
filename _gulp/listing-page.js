'use strict';

var gulp = require('gulp');
const buildFolder = '_pages/';
const fs = require('fs');
const path = require('path');


// time and date 
var jsDate = new Date();
var year = jsDate.getFullYear();
var month = jsDate.getMonth() + 1;
var date = jsDate.getDate();
var hours = jsDate.getHours();
var mins = jsDate.getMinutes();
mins = mins < 10 ? '0' + mins : mins;
var datePublished = year + '-' + month + '-' + date + ' ' + hours + ':' + mins;

gulp.task('listings', function(callback) {
    let filenames = [];
    fs.readdir(buildFolder, (err, files) => {
        files.forEach(file => {
            let fileType = path.extname(file);
            if (fileType === '.html' && file !== 'index.html' && file !== 'styleguide.html') {
                filenames.push('"' + file + '"');
            }
        });
        fs.writeFile(buildFolder + 'index.html', '--- \nbaseFile: _bb.html\npages: [' + filenames + ']\nrtemplate: listings.jsx \npublished: ' + datePublished + '\ntitle: Page Listings\n---');
        callback();
    });
});
