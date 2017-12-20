const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const paths = require('./paths');
const pugInheritance = require('gulp-pug-inheritance');
const changed = require('gulp-changed');
const cached = require('gulp-cached');
const filter = require('gulp-filter');
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
//const emitty = require('emitty').setup(paths.source.base, 'pug');
//emitty.scan(); // storage .pug files

gulp.task('pug', function buildHTML() {
    return gulp.src(paths.source.base + '**/*.pug')
        .pipe($.plumber())
        //.pipe($.if(isDevelopment, emitty.stream(global.emittyChangedFile))) // try emitty inheritance

        //only pass unchanged *main* files and *all* the partials
        .pipe(changed(paths.build.base, {extension: '.html'}))
        //filter out unchanged partials, but it only works when watching
        .pipe($.if(isDevelopment, cached('pug')))
        //find files that depend on the files that have changed
        .pipe(pugInheritance({basedir: paths.source.base, skip: 'node_modules'}))
        //filter out partials (folders and files starting with "_" )
        .pipe(filter(function (file) {
            return !/\/_|\\_/.test(file.path) && !/^_/.test(file.relative); // /\/_|\\_/ fix windows path (include backslash)
        }))

        .pipe($.pug({
            pretty: true,
            basedir: '/'
        }))
        .pipe($.rename(function (path) {
            path.dirname = '';
            return path;
        }))
        .pipe(gulp.dest(paths.build.base));
});
