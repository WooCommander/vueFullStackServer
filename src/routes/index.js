const AuthenticationController =require('../controllers/AuthenticationController')
module.exports = (app) => {
  console.log(`app`, app);
  app.get('/register', AuthenticationController.register);
  app.post('/register', AuthenticationController.register);
}