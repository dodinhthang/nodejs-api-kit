const bookshelf = require('bookshelf');

const knex = require('./knex');

export default bookshelf(knex);
