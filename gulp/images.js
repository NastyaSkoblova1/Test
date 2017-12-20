'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const paths = require('./paths');

gulp.task('imagemin', function() {
    return gulp.src([paths.source.img + '**/*.{svg,png,jpg}', '!' + paths.source.img +'sprite/*.*'])
        .pipe($.newer(paths.build.img))
        .pipe($.imagemin({
            progressive: true,
            optimizationLevel: 4
        }))
        .pipe(gulp.dest(paths.build.img));
});
