var sails = require('sails');

before(function (done) {
  this.timeout(5000);

  sails.lift({
    log: {
      level: 'error'
    }
  }, function (err, server) {
    if (err) {
      return done(err);
    }

    done();
  });
});

after(function (done) {
  console.log();
  sails.lower(done);
});
