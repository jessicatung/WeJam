function MusiciansController(){
	this.musicianContainer = {}
}

MusiciansController.prototype = {
	init: function(){
		// pull in displayForm
	},
	makeMusicians: function(response){
		for (var i = 0; i < response.length; i++){
			var musicianId = response[i].id.toString()
			this.musicianContainer[musicianId] = new Musician(response[i])
		}
	},
	showMusiciansProfile: function(droppedMarker){
		var musicianId = droppedMarker.markerIdentifier.toString()
		// this.musicianContainer[musicianId] is the musician object connected to the marker clicked on
		console.log(this.musicianContainer[musicianId])
	}
}