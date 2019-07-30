require("dotenv").config();
const { env } = process;

const express = require("express");
const routes = require("./routes");
const Sequelize = require("sequelize");

const app = express();
const port = 3000;

app.use("/", routes);

app.listen(env.PORT || port);
