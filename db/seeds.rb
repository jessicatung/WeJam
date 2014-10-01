require 'faker'

def seed
  Musician.create(username: "Joan Torres", password: "password", email: "joan.torres@upr.edu", location: "San Francisco, CA", instrument: "Bass Guitar", genre: "Jazz", skill_level: "Grand Master", url: "http://joantorresmusic.com/", notes: "I am a bassist and composer. I play a wide variety of music including Salsa, Rock, Latin Jazz, and more!", available: [false, true].sample, lat: 37.782268, long:-122.390236)

  Musician.create(username: "Kelly Yamamoto", password: "password", email: "mrsyamamoto2007@gmail.com", location: "San Francisco, CA", instrument: "Piano", genre: "Jazz", skill_level: "Jam Pro", url: "http://devamnesia.wordpress.com", notes: "Low key, love tickling them ivory keys. Would love to find people to make music with!", available: [false, true].sample, lat: 37.777901, long:-122.396620)

  Musician.create(username: "Matt Darin", password: "password", email: "mgd2233@gmail.com", location: "San Francisco, CA", instrument: "Drums", genre: "Alternative", skill_level: "Animal", url: "https://www.linkedin.com/pub/matthew-darin/41/815/71a", notes: "I didn't tell anyone on my team that I play drums until it was time to seed my profile! :)", available: [false, true].sample, lat: 37.788610, long:-122.406050)

  Musician.create(username: "Derek Reeve", password: "password", email: "derek@devbootcamp.com", location: "San Francisco, CA", instrument: "Drums", genre: "Emo Metal", skill_level: "Badass", url: "http://about.me/derekreeve", notes: "Drummer, software developer, avid listener of music and taker of pictures.", available: [false, true].sample, lat: 37.780521, long:-122.404613)

  Musician.create(username: "Josh Marsh", password: "password", email: "josh@devbootcamp.com", location: "San Francisco", instrument: "Composer", genre: "Hardcore", skill_level: "Awesome", url: "http://jkymarsh.com/", notes: "Composer. I love hardcore. Front-end developer, UI designer, javascript fanatic.", available: [false, true].sample, lat: 37.772999, long:-122.388144)

  Musician.create(username: "Sandra Cohen", password: "password", email: "sandra.cohen.ux@gmail.com", location: "San Francisco", instrument: "Voice", genre: "Jazz", skill_level: "Crooner Extroardinaire", url: "http://bobandra.com", notes: "I love jamming to jazz and funk, working on my guitar skills. Accapella is my thing!", available: [false, true].sample, lat: 37.789933, long:-122.394307)

  Musician.create(username: "Nick Cantelmi", password: "password", email: "nickcantelmi@gmail.com", location: "San Francisco", instrument: "Guitar", genre: "Rock", skill_level: "Rock On", url: "https://github.com/nickcan", notes: "I love playing Red Hot Chili Pepper songs on the guitar! I get really excited about Ajax. Let's jam!", available: [false, true].sample, lat: 37.793123, long:-122.403101)

  Musician.create(username: "Ryan Eddy", password: "password", email: "ryaneddydev@gmail.com", location: "San Francisco", instrument: "DJ", genre: "EDM", skill_level: "Mix Master", url: "https://soundcloud.com/mixreddy
", notes: "DJ MixReddy. Check out my tunes on soundcloud!", available: [false, true].sample, lat: 37.752177, long:-122.484237)

  Musician.create(username: "Jessica Tung", password: "password", email: "jessica.y.tung@gmail.com", location: "San Francisco", instrument: "Violin", genre: "METAL", skill_level: "Slayer", url: "https://www.youtube.com/user/jessicamuffin715/videos", notes: "Bassist, violinist, lover of metal. Looking for chamber music opportunities, and to start up a Doom Metal band!", available: [false, true].sample, lat: 37.786541, long: -122.388648)
end

seed


