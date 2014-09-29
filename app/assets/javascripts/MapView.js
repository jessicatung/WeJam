function MapView(){
	this.map // there is space for a map now! 
	this.droppedMarkers = []
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
	dropMarker: function(location, markerId){
		var marker = new google.maps.Marker({
			position: location,
			map: this.map,
			markerIdentifier: markerId
		})
		this.droppedMarkers.push(marker)
	},
	dropHellaMarkers: function(locationCollection){
		for (var i=0; i<locationCollection.length; i++){
			this.dropMarker(new google.maps.LatLng(locationCollection[i].lat, locationCollection[i].long), locationCollection[i].id)
		}	
	}

}