   const { User } = require('../models/User')

module.exports = {
  async register(req, res) {
     try {
      res.send({
            message: `Hello ${req.body.email}! Пользователь зарегистрирован! `
      })
      console.log(`req.body`,req.body,User  );
       const user = await User.create(req.body);
       const userJson = user.toJSON()
       res.send(userJson)
       console.log(`user`, user);
            
    } catch (error) {
      console.log(`req.body`,error );
      res.status(400).send({error:'This email account is already in use.'})
    }
    
    // res.send({
    //     message: `Hello ${req.body.email}! Пользователь зарегистрирован! `
    //   })
  }
}