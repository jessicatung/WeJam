function ApplicationController(userPosition, musiciansController, mapController){
	this.userPosition = userPosition
	this.musiciansController = musiciansController
	this.mapController = mapController
}

ApplicationController.prototype = {
	init: function(){
		this.musiciansController.init()
		this.mapController.init(this.userPosition)
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
		this.mapController.showMarkers(response)
		this.musiciansController.makeMusicians(response)
	},
	getNearbyMusiciansFail: function(){
		alert("Sorry, that didn't work!")
	}
}