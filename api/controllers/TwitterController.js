/**
 * TwitterController
 *
 * @description :: Server-side logic for managing twitters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'DNmrfrxBOA6C6eEbfF8K9Lim0',
  consumer_secret: '48QEbF9fU1t0pth1gTC74IFlbXIgk3BwHuEIpsJsjjleZRioNZ',
  access_token_key: '2788970869-nDLkohxBXxMEYaiotvWJHBfqYNAWjTnl2dym2Mt',
  access_token_secret: '7Oj3PdIp1NiWOOD79AeZ7OzSlex2WDOOgIfqcaFrpSQ40'
});

module.exports = {
	read:function (req,res){
		client.get('search/tweets', {
			q: '#nodejsmx'
			//since_id:'713804253832196100'
		}, function(error, tweets, response){
		  if(error) console.log( error);
		  res.send(tweets);  // Raw response object. 
		});

	}
};

