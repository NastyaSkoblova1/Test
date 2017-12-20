'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const paths = require('./paths');

gulp.task('serve', function() {
    browserSync.init({
        server: paths.build.base,
        port: 3000

    });

    browserSync.watch(paths.build.base + '**/*.*').on('change', browserSync.reload);
});