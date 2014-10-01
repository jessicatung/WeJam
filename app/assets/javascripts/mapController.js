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
			marker: specificPinable.id
		})
		this._addLoggedInMarkerEventListeners(specificMarker, specificPinable)
		return specificMarker;
	},
	_dropPinables: function(pinables){
		var pinableLatLongs = this._mapIntoGoogleLatLong(pinables)
		var markerArray = [];
		for (var i = 0; i<pinableLatLongs.length; i++){
			var marker = new google.maps.Marker({
				position: pinableLatLongs[i],
				map: this.map,
				marker: pinables[i].id
			})
			markerArray.push(marker)
			this._addMarkerEventListener(marker, pinables[i])
		}
		return markerArray;
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
	},

	_addLoggedInMarkerEventListeners: function(marker, object){
		var c = this
		var clickEvent = google.maps.event.addListener(marker, "click", function(innerKey){
			$(".sidebar").animate({left:'-=100%'}, 0);
	    $(".sidebar").animate({left:'0'}, 500);
			c._renderProfileSidebar(object)

		})
		google.maps.event.trigger(marker, 'click', clickEvent);
	},

	_addMarkerEventListener: function(marker, object){
		var c = this
		google.maps.event.addListener(marker, "click", function(innerKey){
		$(function(){
	        $(".sidebar").animate({left:'-=100%'}, 800);
	        $(".sidebar").animate({left:'0'}, 500);
			})
			c._renderProfileSidebar(object)
		})
	},

	_renderProfileSidebar: function(musicianObject){
		var profileInfo = "<div class=\"show_container\"><h1>" + musicianObject.username + 
	    "</h1><p>Location: " + musicianObject.location + 
	    "</p><p>Instrument: " + musicianObject.instrument + 
	    "</p><p>Genre: " + musicianObject.genre +
	    "</p><p>Skill Level: " + musicianObject.skillLevel + 
	    "</p><p>Soundcloud/YouTube Link: <a href=\"" + musicianObject.url + 
	    "\">" + musicianObject.url + 
	    "</a></p><p>Pic Link:  <a href=\"" + musicianObject.gravatarUrl + 
	    "\">" + musicianObject.gravatarUrl + 
	    "</a></p><p>About Me: " + musicianObject.notes + 
	    "</p> <p> <a href=\"mailto:" + musicianObject.email + 
	    "\">Email Me!</a></p></div>"
		$(".sidebar").empty()
		$(".sidebar").append(profileInfo)
	}

}

