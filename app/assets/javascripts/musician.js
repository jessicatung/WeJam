// create a map vairable to be available by any function (referancing google maps object)

var map;

// initializing map function
function initialize (location){
	console.log(location);

	var mapOptions = {
	  center: new google.maps.LatLng(37.7843796, -122.39711),
	  zoom: 15
		};

// Map takes 2 params (page elements, and map object)

		var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);
}

$(document).ready(function(){
	navigator.geolocation.getCurrentPosition(initialize);
});