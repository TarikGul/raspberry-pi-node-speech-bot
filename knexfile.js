// Update with your config settings.
const env = require('./config/enviornments');

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/pippen-database'
  },

  production: {
    client: 'postgresql',
    connection: {
      database: env.DB_NAME,
      user:     env.DB_USER_NAME,
      password: env.DB_USER_NAME,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
