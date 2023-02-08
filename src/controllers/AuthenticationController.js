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
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
         email:email
        }
      });
      if (!user) {
       return res.status(403).send({
          error:"The login information incorrect"
        })
      }
      const isPasswordValid = password === user.password;
      if (!isPasswordValid) {
        return res.status(403).send({
           error:"The login information incorrect"
         })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson
      })
   } catch (error) {
     res.status(500).send({error:'An error has occured trying to log in'})
   }
 }
}