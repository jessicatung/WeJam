$(document).ready(function(){
	WeJam.initialize()
})

WeJam = {
	initialize: function(){
		navigator.geolocation.getCurrentPosition(this.getCoordinatesSuccess, this.getCoordinatesFailure)
	},
	getCoordinatesSuccess: function(userPosition){
		this.userPosition = userPosition;
		mapController = new MapController("map-canvas",{
			center: new google.maps.LatLng(this.userPosition.coords.latitude, this.userPosition.coords.longitude),
			zoom: 15
		});
		musiciansController = new MusiciansController(userPosition, mapController);
	},
	getCoordinatesFailure: function(){
		alert("We can't find you! Still looking.")
		this.initialize()
	}
}

function MusiciansController(userPosition, mapController){
	this.currentMusician = null;
	this.musicianArray = [];

	this.fetchCurrentMusician();
	this.fetchMusicians();
	this.setMyLocation(userPosition);
	mapController.drawMapWithMusicians(this.musicianArray, this.currentMusician);
}	

MusiciansController.prototype={
//dependencies: needs intial geolocation	
	fetchCurrentMusician: function(){
		$.ajax({
			url: '/musicians/show_me',
			method: 'GET'
		}).done(function(serverData){
			this.currentMusician = new Musician(serverData)
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
				this.musicianArray.push(new Musician(response))
			};
		}.bind(this)).fail(function(serverData){
			console.log("fail")
		})
	},

}