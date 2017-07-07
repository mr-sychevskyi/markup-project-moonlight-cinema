"use strict";

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    fileinclude = require('gulp-file-include');        


// sass
gulp.task('sass', function () {
  return gulp.src('src/style/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('src/dist'))
});


// watch
gulp.task('watch', function () {
    gulp.watch('src/style/**/*.scss', ['sass']);
});


// img
gulp.task('imagemin', function () {
   return gulp.src('src/build/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/img'))
});


// js
gulp.task('jsmin', function (cb) {
  pump([
        gulp.src('src/build/js/*.js'),
        uglify(),
        gulp.dest('src/js')
    ],
    cb
  );
});


// include
gulp.task('include', function() {
  gulp.src(['src/build/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('src'));
});
      


// default
gulp.task('default', ['sass', 'watch']);

// production
gulp.task('production', ['sass', 'imagemin', 'jsmin', 'include']);