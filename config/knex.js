
const knex = require('knex');

const database = require('../config/database');

export default knex(database);
