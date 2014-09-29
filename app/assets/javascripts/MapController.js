function MapController(view){
	this.view = view;

}

MapController.prototype = {
	init: function(userPosition){
		this.view.init(userPosition.coords.latitude, userPosition.coords.longitude);
	},
	showMarkers: function(response){
		this.view.dropHellaMarkers(response)
	}
}