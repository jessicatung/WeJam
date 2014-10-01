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
		var specificMarker = new google.maps.Marker({
			position: specificPinableLatArray[0],
			map: this.map,
			marker: specificPinable.id,
			icon: 'assets/current-user-marker.png'
		})
		this._addMarkerEventListener(specificMarker, specificPinable)
		return specificMarker;
	},
	_dropPinables: function(pinables){
		var pinableLatLongs = this._mapIntoGoogleLatLong(pinables)
		var markerArray = [];
		for (var i = 0; i<pinableLatLongs.length; i++){
			var marker = new google.maps.Marker({
				position: pinableLatLongs[i],
				map: this.map,
				marker: pinables[i].id,
				icon: 'assets/musician-marker.png'
			})
			markerArray.push(marker)
			this._addMarkerEventListener(marker, pinables[i])
		}
		return markerArray;
	},
	_mapIntoGoogleLatLong: function(pinableObjects){
		var latLongArray = []
		for (var i = 0; i < pinableObjects.length; i++){
			var lat = pinableObjects[i].lat
			var long = pinableObjects[i].long
			var googleLatLng = new google.maps.LatLng(lat, long)
			latLongArray.push(googleLatLng)
		}
		return latLongArray
	},

	_addMarkerEventListener: function(marker, object){
		google.maps.event.addListener(marker, "click", function(innerKey){
			console.log(object)
			console.log(marker)
		})
	}

}

