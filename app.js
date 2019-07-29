require("dotenv").config();
const { env } = process;

const express = require("express");
const routes = require("./src/routes");
const Sequelize = require("sequelize");

const app = express();
const port = 3000;

const sequelize = new Sequelize("surf", env.DB_USER, env.DB_PASS, {
  host: env.DB_HOST,
  port: env.DB_PORT,
  dialect: "mariadb",
  dialectOptions: {
    timezone: env.DB_TIMEZONE
  },
});

// Testando a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.use("/", routes);

app.listen(env.PORT || port);
