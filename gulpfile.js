import gulp from 'gulp';
import { path } from './gulp/config/path.js';

//передаем значения в глобальную переменную
global.app = {
  path: path,
  gulp: gulp,
}
//импорт задач
import { copy } from './gulp/tasks/copy.js'
import { reset } from './gulp/tasks/reset.js'

//функция наблюдатель
function watcher() {
  gulp.watch(path.watch.files, copy)
}
//построение сценариеввыполнения задач
const dev = gulp.series(reset, copy, watcher)

//выполнение сценария по умолчанию
gulp.task('default', dev)
