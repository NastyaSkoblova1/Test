'use strict';
const gulp = require('gulp');
gulp.task('build', ['pug', 'sprite', 'styles', 'imagemin', 'webpack', 'assets']);
