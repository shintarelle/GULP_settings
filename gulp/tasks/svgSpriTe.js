import svgSprite from 'gulp-svg-sprite'

export const svgSpriTe = () => {
  return app.gulp.src(app.path.src.svgicons)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "IMAGES",
        message: "Error: <%= error.message %>",
      })
    ))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: `../icons/icons.svg`,
          //создавать страницу с перечнем иконок
          example: true,
        }
      },
    }
    ))
    .pipe(app.gulp.dest(app.path.build.images))
}
