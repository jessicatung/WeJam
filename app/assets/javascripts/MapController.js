function MapController(userPosition, view){
	this.userPosition = userPosition;
	this.view = view;
}

MapController.prototype = {
	init: function(){
		this.view.init(userPosition.coords.latitude, userPosition.coords.longitude)
	}
}