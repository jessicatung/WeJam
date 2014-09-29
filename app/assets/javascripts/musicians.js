$(document).ready(function(){
	WeJam.intialize()
})

WeJam = {
	var userPosition = function(){
		navigator.geolocation.getCurrentPosition(this.getCoordinatesSuccess, this.getCoordinatesFailure.bind(this))
	},
	getCoordinatesSuccess: function(userPosition){
		var musiciansController = new MusiciansController(userPosition);
		var mapController = new MapController(userPosition);
	},
	getCoordinatesFailure: function(){
		alert("We can't find you! Still looking.")
		this.initialize()
	}
}

function MusiciansController(){

}	

MusiciansController.prototype={
//dependencies: needs intial geolocation	
	fetchMe: function(){
		//ajax call to get the current musician
	},
	setMyLocation: function(){
		//sets my location in the database
	}
	fetchMusicians: function(){
		//ajax call to get musician data
	},
	createMusicians: function(){
		//creates Javascript model containtaining musician objects
	}
	renderMe: function(){
		//use the current musician 
		//binds event listener
		//renders template
	},
	renderMusician: function(){
		//use the musician objects to render musicians using same template
		//binds event listener
		//renders template
	}
}

function MapController(){

}

MapController.prototype={
//dependencies: needs user position (initial geolocation); needs JS musician objects
	renderMap: function(){

	},
	dropMyMarker: function(){

	},
	dropMusicianMarkers: function(){

	}
}
