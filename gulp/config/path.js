import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve()); //GULP

const buildFolder = './dist';
const srcFolder = './src'

export const path = {
  build: {
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`  //куда переносим
  },
  src: {
    scss: `${srcFolder}/scss/style.scss`,
    // html: `${srcFolder}/*.pug`,  //если юзаем pug
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`  //откуда переносим ** любая вложенность *.* любое расширение
  },
  watch: {
    scss: `${srcFolder}/scss/**/*.scss`,
    // html: `${srcFolder}/**/*.pug`,  //если юзаем pug
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`  //за какими файлами нужно следить и автоматически перезапускать gulp
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,    // папка на удаленном сервере
}
