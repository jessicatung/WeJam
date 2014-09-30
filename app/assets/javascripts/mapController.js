//init with userLocation and musicians array

function MapController(selector, mapOptions){
	this.map = new google.maps.Map(document.getElementById(selector), mapOptions)
}

MapController.prototype = {
	drawMapWithMusicians: function(pinables, specificPinable){
		this._dropSpecificPin(specificPinable);
		this._dropPinables(pinables);
	},
	_dropSpecificPin: function(specificPinable){
		var pinableObjects = [];
		pinableObjects.push(specificPinable)
		var specificPinableLatArray = this._mapIntoGoogleLatLong(pinableObjects)
		new google.maps.Marker({
			position: specificPinableLatArray[0],
			map: this.map,
			marker: specificPinable.id
		})
	},
	_dropPinables: function(pinables){
		var pinableLatLongs = this._mapIntoGoogleLatLong(pinables)
		for (var i = 0; i<pinableLatLongs.length; i++){
			new google.maps.Marker({
				position: pinableLatLongs[i],
				map: this.map,
				marker: pinables[i].id
			})
		}
	},

	_mapIntoGoogleLatLong:function(pinableObjects){
		var latLongArray = []
		for (var i = 0; i < pinableObjects.length; i++){
			var lat = pinableObjects[i].lat
			var long = pinableObjects[i].long
			var googleLatLng = new google.maps.LatLng(lat, long)
			latLongArray.push(googleLatLng)
		}
		return latLongArray
	}
}

