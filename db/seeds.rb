require 'faker'

def seed
  Musician.create(username: "Joan Torres", password: "password", email: "joan@mail.com", location: "San Francisco, CA", instrument: "Bass Guitar", genre: "Jazz", skill_level: "Grand Master", url: "http://joantorresmusic.com/", gravatar_url: "https://secure.gravatar.com/avatar/f4e33e17075ea0d8a3b03a52433b865b.png?r=PG&d=mm&s=150", notes: "I am a bassist and composer. I study and perform a wide variety of music including Salsa, Rock, Reggae, Latin Jazz, Funk, Fusion, Jazz, Classical Choir, Brazilian Capoeira and more!", available: [false, true].sample, lat: 37.789307, long:-122.425223)

  Musician.create(username: "Derek Reeve", password: "password", email: "derek@devbootcamp.com", location: "San Francisco, CA", instrument: "Drums", genre: "Emo Metal", skill_level: "Badass", url: "http://about.me/derekreeve", gravatar_url: "http://www.gravatar.com/avatar/13cbe1a4047c07839c07d27e5a0cb445.png", notes: "Drummer, software developer, avid listener of music and taker of pictures. Former Chicagoan, now a resident of the Bay Area.", available: [false, true].sample, lat: 37.781270, long:-122.421450)

  Musician.create(username: "Josh Marsh", password: "password", email: "josh@devbootcamp.com", location: "San Francisco", instrument: "Composer", genre: "Hardcore", skill_level: "Awesome", url: "http://jkymarsh.com/", gravatar_url: Faker::Internet.url, notes: "Composer. I love hardcore. Front-end developer, UI designer, javascript fanatic.", available: [false, true].sample, lat: 37.793946, long:-122.396059)

  Musician.create(username: "Sandra Cohen", password: "password", email: "sandra@mail.com", location: "San Francisco", instrument: "Voice", genre: "Jazz", skill_level: "Crooner Extroardinaire", url: "http://bobandraa.github.io/", gravatar_url: "https://secure.gravatar.com/avatar/1dc61e7e8e719de264e49630ea290117.png?r=PG&d=mm&s=150", notes: "I love jamming to jazz and funk, working on my guitar skills. Accapella is my thing, looking for opportunities!", available: [false, true].sample, lat: 37.789933, long:-122.394307)

  Musician.create(username: "Nick Cantelmi", password: "password", email: "nick@mail.com", location: "San Francisco", instrument: "Guitar", genre: "Rock", skill_level: "RockOn", url: "https://github.com/nickcan", gravatar_url: "https://secure.gravatar.com/avatar/65b25cdb130bfe92a2e22cbb7bbbd443.png?r=PG&d=mm&s=150", notes: "I love playing Red Hot Chili Pepper songs on the guitar! I get really excited about Ajax. Let's jam!", available: [false, true].sample, lat: 37.793123, long:-122.403101)

  Musician.create(username: "Ryan Eddy", password: "password", email: "ryan@mail.com", location: "San Francisco", instrument: "DJ", genre: "EDM", skill_level: "Mix Master", url: "https://soundcloud.com/mixreddy
", gravatar_url: "https://secure.gravatar.com/avatar/d6f83474130d7200ab0d1af809a9234e.png?r=PG&d=mm&s=150", notes: "DJ MixReddy. Check out my tunes on soundcloud!", available: [false, true].sample, lat: 37.752177, long:-122.484237)

  Musician.create(username: "Jessica Tung", password: "password", email: "jessica@mail.com", location: "San Francisco", instrument: "Violin", genre: "METAL", skill_level: "Slayer", url: "https://www.youtube.com/user/jessicamuffin715/videos", gravatar_url: "https://secure.gravatar.com/avatar/78a4e423678eec020ff6e1ca82b4072f.png?r=PG&d=mm&s=150", notes: "Bassist, violinist, pianist, singer, lover of metal. Looking for chamber music opportunities, and to start up a Doom Metal band. Hit me up!", available: [false, true].sample, lat: 37.786541, long: -122.388648)
end

seed


