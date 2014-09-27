// create a map vairable to be available by any function (referancing google maps object)

var map;

// initializing map function
function initialize (location){
	console.log(location);
	// assigning new google map obj to currentLocation var to reuse throughout the code
	var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
	var mapOptions = {
		center: currentLocation,
		zoom: 15
	};

// Map takes 2 params (page elements, and map object)

	map = new google.maps.Map(document.getElementById("map-canvas"),
	mapOptions);

  var marker = new google.maps.Marker({
      position: currentLocation,
      map: map
  });
}



$(document).ready(function(){
	navigator.geolocation.getCurrentPosition(initialize);
});