const Sequelize = require("sequelize");
const { env } = process;

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
  host: env.DB_HOST,
  port: env.DB_PORT,
  dialect: "mariadb",
  dialectOptions: {
    timezone: env.DB_TIMEZONE
  }
});

module.exports = sequelize;