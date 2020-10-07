const enviornment = process.env.NODE_ENV || ('development');
const config = require('../knexfile');
const enviornmentConfig = config[enviornment];
const knex = require('knex');
const connection = knex(enviornmentConfig);

module.exports = connection;