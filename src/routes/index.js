const AuthenticationController =require('../controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('../polices/AuthenticationControllerPolicy');
module.exports = (app) => {
  app.get('/register',AuthenticationControllerPolicy.register, AuthenticationController.register);
  app.post('/register', AuthenticationController.register);
}