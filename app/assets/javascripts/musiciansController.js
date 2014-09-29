function MusiciansController(){
	this.musicianSomething = []
}

MusiciansController.prototype = {
	init: function(){
		
	},
	makeMusicians: function(response){
		console.log(response)
		for (var i = 0; i < response.length; i++){
			this.musicianSomething.push(new Musician(response[i]))
		}
		console.log(this.musicianSomething)
	}
}