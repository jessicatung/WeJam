function MapController(view){
	this.view = view;

}

MapController.prototype = {
	init: function(userPosition){
		this.view.init(userPosition.coords.latitude, userPosition.coords.longitude);
		console.log(userPosition.coords.latitude, userPosition.coords.longitude)
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