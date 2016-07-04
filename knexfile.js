// Update with your config settings.
require('dotenv').load()
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/code_guild',
    debug: true
  },

  production: {
    client: 'pg',
    connection: {
      database: 'code_guild',
      user:     'root',
      password: process.env.DBPASSWORD
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
