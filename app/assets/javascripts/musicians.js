$(document).ready(function(){
	WeJam.initialize()
})

// Below is the original code musicians.js file that was worked on by Kelly, Matt, and Sandra. We decided to commit this now, to have on record, but I will commit again a CLEAN version of this file. Steven, don't flip out.

// // create a map vairable to be available by any function (referancing google maps object)

// var map;

// // initializing map function
// function initialize (location){
// 	// assigning new google map obj to currentLocation var to reuse throughout the code
// 	var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
// 	var marker = new google.maps.Marker({
// 		position: currentLocation,
// 		map: map,
// 		// icon: './images/marker.png'
// 	});
// 	map.panTo(currentLocation)
// 	map.setZoom(14)
// 	seeUsers();
// 	setUserLocation(currentLocation);
// }

// // function 

// function setUserLocation(currentLocation){
// 	console.log(currentLocation)
// 	$.ajax({
// 		url: "/musician/set_location", 
// 		method: "PUT",
// 		data: {lat: latitude, long: longitude}
// 	})
// 	.done(function(server_data){
// 		console.log(server_data);
// 	})
// 	.fail(function(){
// 		console.log("go home")
// 	})
// }

// function seeUsers (){
// 	$.ajax({
// 		url: "/nearby_musicians",
// 	})
// 	.done(function(server_data){
// 		addUserMarkers(server_data);
// 	})
// 	.fail(function(){
// 		console.log("go home")
// 	})
// }

// function addUserMarkers (user_array){
// 	for (var i=0; i<user_array.length; i++){
// 		new google.maps.Marker({
// 			position: new google.maps.LatLng(user_array[i].lat, user_array[i].long),
// 			map: map
// 		})
// 	}
// }

// // function addMarkerEventListeners(markerArray){
// // 	for (var i=0; i<markerArray.length; i++){
// // 		google.maps.event.addListener(userMarker,"click", function(){
// // 			// map.setCenter(userMarker.getPosition())
// // 			// console.log(userMarker)
// // 			// console.log(userMarker.getPosition())
// // 		})
// // 	}
// // }

// $(document).ready(function(){
// 	var mapOptions = {
// 		center: new google.maps.LatLng(47.7845089,-122.39692509999999),
// 		zoom: 3,
// 		mapTypeId: google.maps.MapTypeId.SATELLITE
// 	};
// 	navigator.geolocation.getCurrentPosition(initialize);
//   // Map takes 2 params (page elements, and map object)
//   map = new google.maps.Map(document.getElementById("map-canvas"),
//   	mapOptions);
// });