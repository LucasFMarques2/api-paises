require('dotenv').config({ path: '../../.env' })

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_CONNECTION_STRING,
    migrations: {
      directory: '../database/migrations',
    },
    seeds: {
      directory: '../database/seeds',
    },
    pool: {
      min: 2,
      max: 10,
      afterCreate: (conn, done) => {
        conn.query('SET timezone="UTC";', err => {
          done(err, conn)
        })
      },
    },
  },
}
