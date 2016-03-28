

var map = L.map('map').setView([25.657715, -100.366785], 5);
window.arrTwitts = [];

L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);



$(document).ready(function(){
	$.get('/twitter/read',function(data,status){
		console.log(data);
		for(i in data.statuses){
			t = data.statuses[i]
			if(t.place){
				arrTwitts.push({
					image:t.user.profile_image_url,
					point:t.place.bounding_box.coordinates[0][0]
				});
			}
		}
		addPoints(arrTwitts)
	});
});


function addPoints(arr){
	for(i in arr){
		i = arr[i];
		var marker = L.marker([i.point[1],i.point[0]],{icon: L.icon({
		    iconUrl: i.image,
		})}).addTo(map);
		console.log('marker',i.point[0],i.point[1],i,marker)

	}
}