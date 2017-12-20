'use strict';
const gulp = require('gulp');
gulp.task('default', ['pug', 'sprite', 'styles', 'imagemin', 'webpack', 'assets', 'watch', 'serve']);