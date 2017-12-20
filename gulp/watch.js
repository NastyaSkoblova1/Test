'use strict';
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const paths = require('./paths');
//const emitty = require('emitty').setup(paths.source.base, 'pug');

gulp.task('watch-pug', function() {
    // try emitty inheritance
    //return $.watch(paths.source.base + '**/*.pug', function(){
    //    gulp.start('pug');
    //}).on('all', (event, filepath) => {
    //    global.emittyChangedFile = filepath;
    //});

    return $.watch(paths.source.base + '**/*.pug', function(){
        gulp.start('pug');
    });
});

gulp.task('watch-styles', function() {
    return $.watch([paths.source.base + 'common/styles/**/*.styl', paths.source.base + 'components/**/*.styl', paths.source.base + 'pages/**/*.styl'], function(){
        gulp.start('styles');
    });
});

gulp.task('watch-js', function() {
    return $.watch(paths.source.base + '**/*.js', function(){
        gulp.start('webpack');
    });
});

gulp.task('watch-assets', function() {
    return $.watch(paths.source.assets + '**/*.*', function(){
        gulp.start('assets');
    });
});

gulp.task('watch-img', function() {
    return $.watch(paths.source.img + '**/*.{svg,png,jpg}', function(){
        gulp.start('imagemin');
    });
});

gulp.task('watch-sprite', function() {
    return $.watch(paths.source.img + 'sprite/*.*', function(){
        gulp.start('sprite');
    });
});

gulp.task('watch', ['watch-pug', 'watch-styles', 'watch-js', 'watch-assets', 'watch-img', 'watch-sprite']);
