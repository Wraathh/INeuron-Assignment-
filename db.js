const knex = require('knex')

module.exports = knex({
  client: 'postgres',
  connection: {
    host: 'db',
    user: 'Docker',
    password: 'password',
    database: 'Docker',
  },
})
