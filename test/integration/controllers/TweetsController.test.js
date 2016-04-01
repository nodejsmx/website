var request = require('supertest');
var assert = require('chai').assert;
var vcr = require('nock-vcr-recorder-mocha');

describe('TweetsController', function () {
  describe('#read', function () {
    vcr.it('should return tweets', function (done) {
      request(sails.hooks.http.app)
        .get('/tweets/read')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            throw err;
          }

          done();
        });
    });
  });
});
