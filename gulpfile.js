'use strict';

var gulp = require('gulp');
var path = require('path');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var combinemq = require('gulp-combine-mq');

gulp.task('sass', function(callback) {
  return gulp.src('./src/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(combinemq())
    .pipe(cssnano())
    .pipe(gulp.dest('./dist'))
});

gulp.task('default', ['sass']);
