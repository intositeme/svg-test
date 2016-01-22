'use strict';

var FOLDER = 'src';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var rename = require("gulp-rename");
var debug = require('gulp-debug');
var stripDebug = require('gulp-strip-debug');
var pngquant = require('imagemin-pngquant');
var htmlmin = require('gulp-htmlmin');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
  browserify('src/js/index.js', { debug: true })
  	.bundle()
  	.pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    .pipe(uglify())
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist/js'));
});

