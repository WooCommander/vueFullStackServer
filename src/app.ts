// import { Sequelize, Model, DataTypes } from 'sequelize';

import express, { Express, Request, Response } from 'express';
// const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require('morgan');
const app = express()
const config = require("./config/config")
app.use(morgan('combine'))
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req: Request, res: Response) => {
  res.send({
    message: `Hello ${req.body.email}! Пользователь зарегистрирован!`
  })
});
const sequelize = require("Sequelize");
sequelize.sync().then(() => {
  app.listen(config.port)
  console.log(`Server started on port ${config.port}`);
})
