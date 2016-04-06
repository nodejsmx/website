var addMarkers = require('../map_utils').addMarkers;

module.exports = function(params) {
  if (typeof params.map !== 'object') {
    throw new TypeError('params.map must be a map object');
  }

  _loadTweets(function (tweets) {
    addMarkers(params.map, tweets);
  });
};

function _loadTweets(callback) {
  $.get('/tweets/read', function(data, status){
    var tweets = _mapTweets(data.statuses);
    callback(tweets);
  });
}

function _mapTweets(data) {
  data = data || [];
  var mapped = [];

  data.forEach(function (tweet) {
    var place = tweet.place;

    if (place) {
      var latlng = [
        place.bounding_box.coordinates[0][0][1],
        place.bounding_box.coordinates[0][0][0],
      ];

      mapped.push({
        image: tweet.user.profile_image_url,
        point: latlng
      });
    }
  });

  return mapped;
}
