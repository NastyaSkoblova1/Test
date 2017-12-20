const del = require('del');
const gulp = require('gulp');
const paths = require('./paths');

gulp.task('clean', function() {
    return del([paths.build.base]);
});