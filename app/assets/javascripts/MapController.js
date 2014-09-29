function MapController(userPosition, view){
	this.userPosition = userPosition;
	console.log(userPosition)
	this.view = view;
}

MapController.prototype = {
	init: function(){
		this.view.init(this.userPosition.coords.latitude, this.userPosition.coords.longitude)
	}
}