require 'faker'

def seed
  Musician.create(username: "Joan_Torres", password: "password", email: "joan@mail.com", location: "San Francisco, CA", instrument: "Bass Guitar", genre: "Jazz", skill_level: "Grand Master", url: "http://joantorresmusic.com/", gravatar_url: "https://secure.gravatar.com/avatar/f4e33e17075ea0d8a3b03a52433b865b.png?r=PG&d=mm&s=150", notes: Faker::Lorem.sentence, available: [false, true].sample, lat: 37.789307, long:-122.425223)

  Musician.create(username: "Derek_Reeve", password: "password", email: "derek@devbootcamp.com", location: "San Francisco, CA", instrument: "Drums", genre: "Emo Metal", skill_level: "Badass", url: "http://about.me/derekreeve", gravatar_url: Faker::Internet.url, notes: Faker::Lorem.sentence, available: [false, true].sample, lat: 37.781270, long:-122.421450)

  Musician.create(username: "Josh_Marsh", password: "password", email: "josh@devbootcamp.com", location: "San Francisco", instrument: "Composer", genre: "Hardcore", skill_level: "Awesome", url: "http://jkymarsh.com/", gravatar_url: Faker::Internet.url, notes: Faker::Lorem.sentence, available: [false, true].sample, lat: 37.793946, long:-122.396059)

  Musician.create(username: "Sandra_Cohen", password: "password", email: "sandra@mail.com", location: "San Francisco", instrument: "Voice", genre: Faker::Lorem.word, skill_level: Faker::Lorem.word, url: "http://bobandraa.github.io/", gravatar_url: "https://secure.gravatar.com/avatar/1dc61e7e8e719de264e49630ea290117.png?r=PG&d=mm&s=150", notes: Faker::Lorem.sentence, available: [false, true].sample, lat: 37.789933, long:-122.394307)

  Musician.create(username: "Nick_Cantelmi", password: "password", email: "nick@mail.com", location: "San Francisco", instrument: "Guitar", genre: "Rock", skill_level: "RockOn", url: "https://github.com/nickcan", gravatar_url: "https://secure.gravatar.com/avatar/65b25cdb130bfe92a2e22cbb7bbbd443.png?r=PG&d=mm&s=150", notes: Faker::Lorem.sentence, available: [false, true].sample, lat: 37.793123, long:-122.403101)

  Musician.create(username: "DJ_Mix_Reddy", password: "password", email: "ryan@mail.com", location: "San Francisco", instrument: "DJ", genre: "EDM", skill_level: "Mix Master", url: "https://soundcloud.com/mixreddy
", gravatar_url: "https://secure.gravatar.com/avatar/d6f83474130d7200ab0d1af809a9234e.png?r=PG&d=mm&s=150", notes: Faker::Lorem.sentence, available: [false, true].sample, lat: 37.752177, long:-122.484237)

  Musician.create(username: "Jessica_Tung", password: "password", email: "jessica@mail.com", location: "San Francisco", instrument: "Violin", genre: "METAL", skill_level: "Slayer", url: "https://www.youtube.com/user/jessicamuffin715/videos", gravatar_url: "https://secure.gravatar.com/avatar/78a4e423678eec020ff6e1ca82b4072f.png?r=PG&d=mm&s=150", notes: Faker::Lorem.sentence, available: [false, true].sample, lat: 37.769436, long:-122.406248)
end

seed


