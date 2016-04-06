var socketIO = require('./dependencies/socket.io');
var io = require('./dependencies/sails.io')(socketIO);
var tweets = require('./components/tweets');

(function($) {
  var map;

  function _init() {
    map = L.map('map').setView([25.657715, -100.366785], 4);
    var layer = L.tileLayer(
        'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
          subdomains: 'abcd',
          maxZoom: 19
        });
    map.setMaxBounds(map.getBounds());
    layer.addTo(map);

    // Load all map components
    $(function() {
      tweets({map: map});
    });
  }

  _init();
})(jQuery);
