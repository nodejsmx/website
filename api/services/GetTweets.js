var Twitter = require('twitter');
var credentials = sails.config.twitter;

module.exports = function (opts, callback) {
  opts = opts || {};

  if(!opts.q) {
    return callback(new TypeError('opts.q must be a string'));
  }

  var client = new Twitter(credentials);

  client.get('search/tweets', {
    q: opts.q
  }, function (error, tweets, response) {
    if (error) {
      return callback(error);
    }

    return callback(null, tweets, response);
  });
};
