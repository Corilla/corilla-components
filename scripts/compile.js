/* eslint-disable no-console */

const path = require('path');
const fs = require('fs-extra');
const through2 = require('through2');
// const s = require('underscore.string');

const libPath = path.join(__dirname, '../lib');
// const packageIndexPath = path.join(libPath, 'index.js');

through2.obj((item, enc, next) => {
  if (item.stats.isFile()) {
    const fileName = path.basename(item.path);

    if (fileName === 'index.js') {
      const directory = path.dirname(item.path);
      const scssPath = path.join(directory, 'styles.scss');

      try {
        fs.accessSync(item.path, fs.F_OK);
        fs.accessSync(scssPath, fs.F_OK);

        this.push(item);
      } catch (e) {
        // Not component directory
      }
    }
  }

  next();
});
