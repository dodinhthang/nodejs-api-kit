/**
 * apiExit
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');

const pageComponents = fs.readdirSync(path.join(__dirname, '../../../server/api'));
// const pageContainers = fs.readdirSync(path.join(__dirnames, '../../../app/containers'));
const components = pageComponents.concat(pageComponents);

function apiExit(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = apiExit;
