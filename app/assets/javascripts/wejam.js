WeJam = {
	initialize: function(){
		navigator.geolocation.getCurrentPosition(this.getCoordinatesSuccess, this.getCoordinatesFailure.bind(this))
	},
	getCoordinatesSuccess: function(position){
		//run app
		var mapController = new MapController(position, new MapView())
		mapController.init()
		// console.log(position)
	},
	getCoordinatesFailure: function(){
		alert("We can't find you! Still looking.")
		this.initialize()
	}
}