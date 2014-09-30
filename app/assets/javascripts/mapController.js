//init with userLocation and musicians array

function MapController(selector, mapOptions){
	this.map = new google.maps.Map(document.getElementById(selector), mapOptions)
}

MapController.prototype = {
	drawMapWithMusicians: function(pinables, specificPinable){
		console.log(specificPinable)
		this._dropSpecificPin(specificPinable);
		this._dropPinables(pinables);
	},
	_dropSpecificPin: function(specificPinable){
		console.log(specificPinable)
		// var specificPinableLatArray = this._mapIntoGoogleLatLong(pinableObjects)
		// new google.maps.Marker({
		// 	position: specificPinableLatArray[0],
		// 	map: this.map,
		// 	marker: specificPinable.id
		// })
	},

	_mapIntoGoogleLatLong:function(pinableObjects){
		var latLongArray = []
		for (var i = 0; i < pinableObjects.length; i++){
			console.log(pinableObjects[i])
			var lat = pinableObjects[i].lat
			var long = pinableObjects[i].long
			var googleLatLng = new google.maps.LatLng(lat, long)
			latLongArray.push(googleLatLng)
		}
	}
}

