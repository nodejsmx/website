module.exports = {
  addMarkers: function (map, elements) {
    elements.forEach(function (e) {
      var marker = L.marker(
          e.point,
          {
            icon: L.icon({iconUrl: e.image})
          }
          );

      marker.addTo(map);
    });
  }
};
