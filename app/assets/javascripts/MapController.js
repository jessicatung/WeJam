function MapController(userPosition, view){
	this.userPosition = userPosition;
	this.view = view;
}

MapController.prototype = {
	init: function(){
		this.view.init(this.userPosition.coords.latitude, this.userPosition.coords.longitude);
		this.setUserLocationAndGetNearbyMusicians();
	},
	setUserLocationAndGetNearbyMusicians: function(){
		var ajaxRequest = $.ajax({
			url: "/musicians/set_location", 
			method: "POST",
			data: {lat: this.userPosition.coords.latitude, long: this.userPosition.coords.longitude}
		})
		ajaxRequest.done(this.getNearbyMusiciansSuccess.bind(this))
		ajaxRequest.fail(this.getNearbyMusiciansFail.bind(this))
	},
	getNearbyMusiciansSuccess: function(response){
		// response is a collection of musician objects
		this.view.dropHellaMarkers(response)
	},
	getNearbyMusiciansFail: function(){
		alert("Sorry, that didn't work!")
	}
}