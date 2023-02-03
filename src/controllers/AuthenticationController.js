const { Sequelize, Model, DataTypes } = require("sequelize")
const { sequelize } = require("../models");

const  User  = require('../models/User')(sequelize, DataTypes);
module.exports = {
  async register(req, res) {
     try {
      const user = await User.create(req.body);
       const userJson = user.toJSON()
       console.log(`userJson`, userJson);
       res.send(userJson)
            
    } catch (error) {
      console.log(`req.body`,error );
      res.status(400).send({error:'This email account is already in use.'})
    }
    
    // res.send({
    //     message: `Hello ${req.body.email}! Пользователь зарегистрирован! `
    //   })
  }
}