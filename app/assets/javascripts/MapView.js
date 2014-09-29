function MapView(){

}

MapView.prototype = {
	init: function(userLat, userLong){
		var mapOptions = {
			center: new google.maps.LatLng(userLat, userLong),
			zoom: 15
		}
		var map = new google.maps.Map(document.getElementById("map-canvas"),
  	mapOptions);
	}
}