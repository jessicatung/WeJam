// create a map vairable to be available by any function (referancing google maps object)

var map;

// initializing map function
function initialize (location){
	console.log(location);
	// assigning new google map obj to currentLocation var to reuse throughout the code
	var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
	var marker = new google.maps.Marker({
		position: currentLocation,
		map: map,
		// icon: './images/marker.png'
	});
	map.panTo(currentLocation)
	map.setZoom(14)
	seeUsers();
}

// function 

function seeUsers (){
	$.ajax({
		url: "/nearby_musicians",
	})
	.done(function(server_data){
		console.log(server_data)
		addUserMarkers(server_data);
	})
	.fail(function(){
		console.log("go home")
	})
}

function addUserMarkers (user_array){
	for (var i=0; i<user_array.length; i++){
		new google.maps.Marker({
			position: new google.maps.LatLng(user_array[i].lat, user_array[i].long),
			map: map
		})
	}
}

$(document).ready(function(){
	var mapOptions = {
		center: new google.maps.LatLng(47.7845089,-122.39692509999999),
		zoom: 3,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	};
	navigator.geolocation.getCurrentPosition(initialize);
  // Map takes 2 params (page elements, and map object)
  map = new google.maps.Map(document.getElementById("map-canvas"),
  	mapOptions);
});