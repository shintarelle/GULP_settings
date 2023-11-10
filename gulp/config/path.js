import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve()); //GULP

const buildFolder = './dist';
const srcFolder = './src'

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`  //куда переносим
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpeg,jpg,png,gif,ico,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    // html: `${srcFolder}/*.pug`,  //если юзаем pug
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,  //откуда переносим ** любая вложенность *.* любое расширение
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpeg,jpg,png,gif,ico,svg,webp}`,
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
