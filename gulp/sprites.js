const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const paths = require('./paths');

gulp.task('sprite', function() {
    var spriteData =
        gulp.src(paths.source.img + 'sprite/*.*') // путь, откуда берем картинки для спрайта
            .pipe($.plumber())
            .pipe($.spritesmith({
                imgName: 'sprite.png',
                retinaImgName: 'sprite@2x.png',
                cssName: 'sprite.styl',
                cssFormat: 'stylus',
                padding: 10,
                retinaSrcFilter: paths.source.img + 'sprite/*@2x.png',
                algorithm: 'top-down',
                cssTemplate: 'stylus.template.mustache',
                cssVarMap: function(sprite) {
                    sprite.name = 's-' + sprite.name;
                }
            }));

    spriteData.img.pipe(gulp.dest(paths.source.img)); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest(paths.source.sprite_styles)); // путь, куда сохраняем стили
});
