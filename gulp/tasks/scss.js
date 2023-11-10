import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; //сжатие Css файла
import webpcss from 'gulp-webpcss';   //вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer'; //добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; //группировка медиа запросов

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SCSS",
        message: "Error: <%= error.message %>",
      })
    ))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
      outputStyle: 'expanded',  //сжат или нет и тд
    }))
    .pipe(groupCssMediaQueries())
    .pipe(webpcss({
      webpClass: '.webp',
      noWebpClass: '.no-webp'
    }))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ["last 3 versions"],
      cascade: true,
    }))
    //раскоментировать если нужен не сжатый дубль файла стилей
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())  //сжатие файла стилей
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
  .pipe(app.plugins.browsersync.stream())
}
