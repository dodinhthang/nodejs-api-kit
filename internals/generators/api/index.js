/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const apiExit = require('../utils/apiExit');

module.exports = {
  description: 'Add a model',
  prompts: [
    // {
    //   type: 'list',
    //   name: 'type',
    //   message: 'Select the type of api',
    //   default: 'model',
    //   choices: () => ['model', 'modelDynamic'],
    // },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'user',
      validate: (value) => {
        if (/.+/.test(value)) {
          return apiExit(value) ? 'A api  with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantController',
      default: true,
      message: 'Do you want controller ?',
    },
    {
      type: 'confirm',
      name: 'wantRoute',
      default: true,
      message: 'Do you want route?',
    },
    {
      type: 'confirm',
      name: 'wantValidate',
      default: true,
      message: 'Do you want validate?',
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js

    const actions = [
      {
        type: 'add',
        path: '../../server/api/{{name}}/{{name}}.model.js',
        templateFile: './api/model.js.hbs',
        abortOnFail: true,
      },

    ];

    // If they want a i18n messages file
    if (data.wantController) {
      actions.push({
        type: 'add',
        path: '../../server/api/{{name}}/{{name}}.controller.js',
        templateFile: './api/controller.js.hbs',
        abortOnFail: true,
      });
    }

    // If want Loadable.js to load the component asynchronously
    if (data.wantRoute) {
      actions.push({
        type: 'add',
        path: '../../server/api/{{name}}/{{name}}.route.js',
        templateFile: './api/route.js.hbs',
        abortOnFail: true,
      });
    }
    if (data.wantValidate) {
      actions.push({
        type: 'add',
        path: '../../server/api/{{name}}/{{name}}.route.js',
        templateFile: './api/route.js.hbs',
        abortOnFail: true,
      });
    }
    actions.push({
      type: 'modify',
      path: '../../index.route.js',
      pattern: /(const .*Routes = require.*;\n)+/g,
      templateFile: './api/changeRoute/require.hbs',
    });
    actions.push({
      type: 'modify',
      path: '../../index.route.js',
      pattern: /(router.*Routes.*;\n)+/g,
      templateFile: './api/changeRoute/routerUse.hbs',
    });
    // actions.push({
    //   type: 'prettify',
    //   path: '/api/',
    // });

    return actions;
  },
};
