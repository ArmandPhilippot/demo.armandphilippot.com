const path = require('path');

const devFolder = path.resolve(__dirname, '../htdocs/src/');

module.exports = {
  src: {
    fonts: path.resolve(devFolder, './fonts/'),
    images: path.resolve(devFolder, './images/'),
    scripts: path.resolve(devFolder, './js/app.js'),
    style: path.resolve(devFolder, './scss/style.scss'),
  },
  dist: path.resolve(devFolder, '../assets/'),
  files: [path.resolve(devFolder, '../**/*.php')],
  sassPaths: [path.resolve(devFolder, '../../node_modules/modern-normalize/')],
};
