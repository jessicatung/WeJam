function MusiciansController(){
	this.musicianContainer = {}
}

MusiciansController.prototype = {
	init: function(){
		// pull in displayForm
		$.ajax({
			url: '/musicians/show_me',
			method: 'GET'
		}).done(function(serverdata){
			$(".sidebar").append(serverdata)
	      // $('.sidebar').hide('slide', { direction: 'left' }, 1000);
					
		}).fail(function(serverdata){
	});

	// something about this animation breaks shit....
	// $(".sidebar").on("click", function(){$(".sidebar").animate({"left": "-100%" }, 2000);});
	},
	makeMusicians: function(response){
		for (var i = 0; i < response.length; i++){
			var musicianId = response[i].id.toString()
			this.musicianContainer[musicianId] = new Musician(response[i])
		}
	},
	showMusiciansProfile: function(droppedMarker){
		var musicianId = droppedMarker.markerIdentifier.toString()
		// this.musicianContainer[musicianId] is the musician object connected to the marker clicked on
		var musician = this.musicianContainer[musicianId]
		console.log(this.musicianContainer[musicianId])


var profileInfo = "<div class=\"show_container\"><h1>" + musician.username + 
    "</h1><p>Location: " + musician.location + 
    "</p><p>Instrument: " + musician.instrument + 
    "</p><p>Genre: " + musician.genre +
    "</p><p>Skill Level: " + musician.skillLevel + 
    "</p><p>Soundcloud/YouTube Link: <a href=\"" + musician.url + 
    "\">" + musician.url + 
    "</a></p><p>Pic Link:  <a href=\"" + musician.gravatarUrl + 
    "\">" + musician.gravatarUrl + 
    "</a></p><p>About Me: " + musician.notes + 
    "</p> <p> <a href=\"mailto:" + musician.email + 
    "\">Email Me!</a></p></div>"

		$(".sidebar").empty()
		$(".sidebar").append(profileInfo)

	}
}