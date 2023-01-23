console.log(`hello`);
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());
app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Пользователь зарегистрирован!`
  });
});
app.get('/register', (req, res) => {
  res.send({
    message: `запрос Get register`
  });
});
app.get('/status', (req, res) => {
  res.send({
    message: `Hello ! Пользователь зарегистрирован!`
  });
});
app.listen(process.env.PORT || 8081);