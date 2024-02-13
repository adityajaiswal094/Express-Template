const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds",
    },
  },
};
