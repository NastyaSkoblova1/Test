'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const paths = require('./paths');

gulp.task('assets', function() {
    return gulp.src(paths.source.assets + '**/*.*')
        .pipe($.newer(paths.build.base))
        .pipe(gulp.dest(paths.build.base));
});