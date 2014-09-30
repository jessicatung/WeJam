//init with userLocation and musicians array

function MapController(view, userPosition, musiciansController){
	this.musicianArray = musiciansController
	this.view = new MapView(userPosition, musicianArray)
	this.map // there is space for a map now! 
	this.droppedMarkers = []
	this.dropMarker()
	this.dropHellaMarkers()()
}

MapController.prototype = {
	init: function(userPosition){
		this.view.init(userPosition.coords.latitude, userPosition.coords.longitude);
	},
	showMarkers: function(response){
		this.view.dropHellaMarkers(response)
	},
	bindMarkerListeners: function(musicianController){
		for (var i = 0; i < this.view.droppedMarkers.length; i++){
			// pass it what obj it's listening to, what evt listening for, callback
      google.maps.event.addListener(this.view.droppedMarkers[i], 'click', function(innerKey) {
        // this is the particular dropped marker
        musicianController.showMusiciansProfile(this)
      });
    }
	}
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