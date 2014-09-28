function MapController(view){
	this.view = view;
}

MapController.prototype = {
	init: function(){
		this.view.init()
	}
}