/**
 * TwitterController
 *
 * @description :: Server-side logic for managing twitters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  read: function (req, res){
    GetTweets({
      q: 'nodejsmx'
    }, function (error, tweets, response) {
      if (error) {
        return res.negotiate(error);
      }

      res.send(tweets);
    });
  }
};
