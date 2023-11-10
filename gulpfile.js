import gulp from 'gulp';
import { path } from './gulp/config/path.js';

//импорт общих плагинов
import { plugins } from './gulp/config/plugins.js'

//передаем значения в глобальную переменную
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins,
}
//импорт задач
import { copy } from './gulp/tasks/copy.js'
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { server} from './gulp/tasks/server.js'
import { scss } from './gulp/tasks/scss.js'
import { js } from './gulp/tasks/js.js'
import { images } from './gulp/tasks/images.js'
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js'
import { svgSpriTe } from './gulp/tasks/svgSpriTe.js'
import { zip } from './gulp/tasks/zip.js'



//функция наблюдатель
function watcher() {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)
}

export { svgSpriTe } //не включаем в сценарий обо будем делать 1 раз

//Последовательная обработки шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)
//выполнение задач параллельно
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images))


//построение сценариеввыполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip)

//Экспорт сценариев
export { dev }
export { build }
export { deployZIP }

//выполнение сценария по умолчанию
gulp.task('default', dev)
