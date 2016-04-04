/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  /* Add a .env file with enviroment variables using the following format
		
		DB_HOST=localhost
		DB_USER=root
		DB_PASS=s1mpl3

		For more info consult https://github.com/motdotla/dotenv
  */
  if ( process.env.NODE_ENV !== 'production') {
  	require('dotenv').config();
  }
  
  cb();
};
