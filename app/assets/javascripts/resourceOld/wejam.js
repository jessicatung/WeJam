// WeJam = {
// 	initialize: function(){
// 		navigator.geolocation.getCurrentPosition(this.getCoordinatesSuccess, this.getCoordinatesFailure.bind(this))
// 	},
// 	getCoordinatesSuccess: function(position){
// 		//run app
// 		var musiciansController = new MusiciansController()
// 		var mapController = new MapController(new MapView())
// 		var applicationController = new ApplicationController(position, musiciansController, mapController)
// 		applicationController.init()
// 		// console.log(position)
// 	},
// 	getCoordinatesFailure: function(){
// 		alert("We can't find you! Still looking.")
// 		this.initialize()
// 	}
// }