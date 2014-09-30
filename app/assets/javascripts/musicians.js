$(document).ready(function(){
	WeJam.initialize()
})

WeJam = {
	initialize: function(){
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

function musicianView(){
}

function MusiciansController(userPosition){
	this.view = musicianView
	this.fetchMe();
	this.setMyLocation(userPosition);
	this.fetchMusicians();
	// this.createMusicianObjects(this.fetchMusicians())
}	

MusiciansController.prototype={
//dependencies: needs intial geolocation	
	fetchMe: function(){
		$.ajax({
			url: '/musicians/show_me',
			method: 'GET'
		}).done(function(serverData){
			console.log(serverData)
		}).fail(function(serverData){
			console.log("fail")
		})
	},
	setMyLocation: function(userPosition){
		$.ajax({
			url: "/musicians/set_location", 
			method: "POST",
			data: {lat: userPosition.coords.latitude, long: userPosition.coords.longitude}
		}).done(function(){
			console.log("success")
		}).fail(function(serverData){
			console.log("fail")
		})
	},
	fetchMusicians: function(){
		$.ajax({
			url: '/nearby_musicians',
			method: 'GET'
		}).done(function(serverData){
			console.log(serverData)
			console.log("fetched!")
		}).fail(function(serverData){
			console.log("fail")
		})
	}
}
	// createMusicianObjects: function(response){
	// 	var musicianArray = {}
	// 	function(response){
	// 		for (var i = 0; i < response.length; i++){
	// 		response[i].id.toString())
	// 		var individualMusicianObject = new Musician(response[i])
	// 		musicianObjects.add(individualMusicianObject)
	// 	}
	// 	return musicianArray
	// }
	// renderMe: function(currentMusician, template){
		//use the current musician 
		//binds event listener
		//renders template
	// },
	// renderMusician: function(musicianObject, template){
		//use the musician objects to render musicians using same template
		//
		//renders template
	// }
// }

// function MapController(){
// 	console.log("stub")
// }

// MapController.prototype={
// //dependencies: needs user position (initial geolocation); needs JS musician objects
// 	renderMap: function(){
// 		console.log("stub")
// 	},
// 	dropMyMarker: function(){
// 		console.log("stub")
// 	},
// 	dropMusicianMarkers: function(){
// 		console.log("stub")
// 	}
// }

// function Musician(attributes){
// 	this.available = attributes.available
// 	this.email = attributes.email
// 	this.genre = attributes.genre
// 	this.gravatarUrl = attributes.gravatar_url
// 	this.id = attributes.id
// 	this.instrument = attributes.instrument
// 	this.lat = attributes.lat
// 	this.long = attributes.long
// 	this.location = attributes.location
// 	this.notes = attributes.notes
// 	this.skillLevel = attributes.skill_level
// 	this.url = attributes.url
// 	this.username = attributes.username
// }

// function musicianView(){
//  var musicianTemplate = "<div class=\"show_container\"><h1>" + musician.username + 
//     "</h1><p>Location: " + musician.location + 
//     "</p><p>Instrument: " + musician.instrument + 
//     "</p><p>Genre: " + musician.genre +
//     "</p><p>Skill Level: " + musician.skillLevel + 
//     "</p><p>Soundcloud/YouTube Link: <a href=\"" + musician.url + 
//     "\">" + musician.url + 
//     "</a></p><p>Pic Link:  <a href=\"" + musician.gravatarUrl + 
//     "\">" + musician.gravatarUrl + 
//     "</a></p><p>About Me: " + musician.notes + 
//     "</p> <p> <a href=\"mailto:" + musician.email + 
//     "\">Email Me!</a></p></div>"
// }