import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve()); //gulp

const buildFolder = './dist';
const srcFolder = './src'

export const path = {
  build: {
    files: `${buildFolder}/files/`  //куда переносим
  },
  src: {
    files: `${srcFolder}/files/**/*.*`  //откуда переносим ** любая вложенность *.* любое расширение
  },
  watch: {
    files: `${srcFolder}/files/**/*.*`  //за какими файлами нужно следить и автоматически перезапускать gulp
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,    // папка на удаленном сервере
}
