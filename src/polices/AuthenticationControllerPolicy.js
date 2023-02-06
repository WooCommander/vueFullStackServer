const Joi = require('joi');

module.exports = {
  register(req, res, next) {
    const schema =Joi.object( {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
    })
    const { error, value } = schema.validate(req.body)
    console.log(`error`, error);
    if (error) {
      switch (error.details[0].context.key) {
        case value:
        case 'email':
          res.status(400).send({
            error:'invalid email address'
          })
          break;
        case 'password':
          res.status(400).send({
            error: 'invalid password'
          })
          break;
        default:
          res.status(400).send({
            error:'Invalid registration information'
          })
          break;
      }
    } else {
      next()
    }
  }
}