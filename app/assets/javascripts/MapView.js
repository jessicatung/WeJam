function MapView(){
	this.map // there is space for a map now! 
}

MapView.prototype = {
	init: function(userLat, userLong){
		var currentLocation = new google.maps.LatLng(userLat, userLong);
		var mapOptions = {
			center: currentLocation,
			zoom: 15
		}
		this.map = new google.maps.Map(document.getElementById("map-canvas"),
  	mapOptions);
  	this.dropMarker(currentLocation);
	},
	dropMarker: function(currentLocation){
		var marker = new google.maps.Marker({
			position: currentLocation,
			map: this.map
		});
	}
}