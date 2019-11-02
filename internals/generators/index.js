/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const path = require('path');
const { exec } = require('child_process');
const apiGenerator = require('./api/index.js');


module.exports = (plop) => {
  plop.setGenerator('api', apiGenerator);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.setActionType('prettify', (answers, config) => {
    const folderPath = `${path.join(__dirname, '/../server', config.path, plop.getHelper('properCase')(answers.name), '**.js')}`;
    exec(`npm run prettify -- "${folderPath}"`);
    return folderPath;
  });
};
