(function($, w) {
  var map;

  function _init() {
    map = w.L.map('map').setView([25.657715, -100.366785], 4);
    var layer = L.tileLayer(
        'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
          subdomains: 'abcd',
          maxZoom: 19
        });
    layer.addTo(map);

    $(function() {
      _loadTweets(function (tweets) {
        _addPoints(tweets);
      });
    });
  }

  function _loadTweets(callback) {
    $.get('/tweets/read', function(data, status){
      var tweets = _mapTweets(data.statuses);
      callback(tweets);
    });
  }

  function _mapTweets(data) {
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

  function _addPoints(tweets) {
    tweets.forEach(function (tweet) {
      var marker = w.L.marker(
        tweet.point,
        {
          icon: w.L.icon({iconUrl: tweet.image})
        }
      );

      marker.addTo(map);
    });
  }

  _init();
})(jQuery, window);
