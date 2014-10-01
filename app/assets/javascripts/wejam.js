$(document).ready(function(){
	WeJam.initialize()
})

WeJam = {
	initialize: function(){
		navigator.geolocation.getCurrentPosition(this.getCoordinatesSuccess, this.getCoordinatesFailure)
		mapController = new MapController("map-canvas",{
			center: new google.maps.LatLng(37, -121),
			zoom: 3,
			panControl: true,
			mapTypeId: google.maps.MapTypeId.SATELLITE,
			panControlOptions:{
				position: google.maps.ControlPosition.TOP_RIGHT
			},
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE,
				position: google.maps.ControlPosition.RIGHT_TOP
			}
		});
	},
	getCoordinatesSuccess: function(userPosition){
		this.userPosition = userPosition;
		mapController.map.setZoom(15);
		mapController.map.panTo(new google.maps.LatLng(userPosition.coords.latitude, userPosition.coords.longitude));
		mapController.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);

var styles = [
    {
        "featureType": "landscape",
        "stylers": [
            {
                "hue": "#FFBB00"
            },
            {
                "saturation": 43.400000000000006
            },
            {
                "lightness": 37.599999999999994
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "hue": "#FFC200"
            },
            {
                "saturation": -61.8
            },
            {
                "lightness": 45.599999999999994
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "hue": "#FF0300"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 51.19999999999999
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "hue": "#FF0300"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 52
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "hue": "#0078FF"
            },
            {
                "saturation": -13.200000000000003
            },
            {
                "lightness": 2.4000000000000057
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "hue": "#00FF6A"
            },
            {
                "saturation": -1.0989010989011234
            },
            {
                "lightness": 11.200000000000017
            },
            {
                "gamma": 1
            }
        ]
    }
]
    mapController.map.setOptions({styles: styles});
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

	this.setMyLocation(userPosition);

  $.when(
    this.fetchCurrentMusician(),
    this.fetchMusicians()
  ).then(function(currentMusicianResult, serializedMusicians) {
    console.log('I only fire when both conditions succeed!');
    mapController.drawMapWithMusicians(this.musicianArray, this.currentMusician);
  }.bind(this));
}

MusiciansController.prototype={
//dependencies: needs intial geolocation	
	fetchCurrentMusician: function(){
		return $.ajax({
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
		return $.ajax({
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
