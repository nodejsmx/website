var vcr = require('nock-vcr-recorder-mocha');

describe('GetTweets', function() {
  vcr.it('returns tweets with nodejsmx hashtag', function(done) {
    GetTweets({
      q: 'nodejsmx'
    }, function (err, tweets, response){
      done(err);
    });
  });
});
