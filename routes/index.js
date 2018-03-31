var User = require('../controller/user');
var Holiday = require('../controller/holiday');
var Signin = require('../controller/signin');


module.exports = function(app) {
  /*Handle user login requests*/
  app.post('/phone_api/login',User.login);
  /*Handle user login requests*/
  app.post('/phone_api/register',User.register);

  /*User submits leave request*/
  app.post('/phone_api/add_holiday',Holiday.addHoliday);
  /*Get users to submit leave records*/
  app.post('/phone_api/get_holidays',Holiday.getHolidays);
  /*User sign in*/
  app.post('/phone_api/sign_in',Signin.signin);
  /*User check-in record*/
  app.post('/phone_api/get_signins',Signin.getSignins);

  app.get('/',function(req,res){
    res.render('home') } );

};
