/*index.js; Jiaxing Li; 301135949; Oct 11, 2020*/
let express = require('express');
let router = express.Router();
//let mongoose = require('mongoose');
//let User = require('../models/user');
let indexController = require('../controllers/index');

/* GET Home page. */
router.get('/', indexController.displayHomePage);

/* GET Home page. */
router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET Login page. */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

/*router.get('/user', function(req, res, next) {
  //res.send('respond with a resource');
  User.find((err,users) => {
      if(err)
      {
          console.log('test1');  
          return console.error(err);
      }
      else 
      {
        console.log('test2');  
        console.log(users);
      }
  });
});*/

module.exports = router;
