function MapView(){

}

MapView.prototype = {
	init: function(){
		var mapOptions = {
			center: new google.maps.LatLng(47.7845089,-122.39692509999999),
			zoom: 10
		}
		var map = new google.maps.Map(document.getElementById("map-canvas"),
  	mapOptions);
	}
}