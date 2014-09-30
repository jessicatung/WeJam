$(document).ready(function(){
	WeJam.initialize()
})

WeJam = {
	initialize: function(){
		console.log('here i am initializing');
		navigator.geolocation.getCurrentPosition(this.getCoordinatesSuccess, this.getCoordinatesFailure)
	},
	getCoordinatesSuccess: function(userPosition){
		this.userPosition = userPosition;

		musiciansController = new MusiciansController(userPosition);
		mapController = new MapController(view, userPosition, musiciansController);
	},
	getCoordinatesFailure: function(){
		alert("We can't find you! Still looking.")
		this.initialize()
	}
}

function MusiciansController(userPosition){

	this.musicianArray =[];
	this.fetchCurrentMusician();
	this.setMyLocation(userPosition);
	this.fetchMusicians();
}	

MusiciansController.prototype={
//dependencies: needs intial geolocation	
	fetchCurrentMusician: function(){
		c = this;
		$.ajax({
			url: '/musicians/show_me',
			method: 'GET'
		}).done(function(serverData){
			debugger
			c.currentMusician = this.currentMusician = new Musician(serverData)

		}.bind(this)).fail(function(serverData){
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
			for (var i = 0; i < serverData.length; i++){
				var response = serverData[i]
				musicianArray.push(response)
			};
		}).fail(function(serverData){
			console.log("fail")
		})
	},

// function Renderer(item_to_render){
// 	this.template = "<div class=\"show_container\"><h1>" + musician.username + 
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
// 	console.log(item_to_render)	
// }

// Renderer.prototype={
// 	profile: function(musician, template){
// 		(".container").append(template(musician))
// 	}
// }
}
