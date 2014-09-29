require 'faker'

def seed
  Musician.create(username: Faker::Internet.user_name, password: "password", email: Faker::Internet.email, location: "Oakland", instrument: Faker::Lorem.word, genre: Faker::Lorem.word, skill_level: Faker::Lorem.word, url: Faker::Internet.url, gravatar_url: Faker::Internet.url, notes: Faker::Lorem.sentence, available: [false, true].sample, lat: 37.789307, long:-122.425223)
  Musician.create(username: Faker::Internet.user_name, password: "password", email: Faker::Internet.email, location: "Oakland", instrument: Faker::Lorem.word, genre: Faker::Lorem.word, skill_level: Faker::Lorem.word, url: Faker::Internet.url, gravatar_url: Faker::Internet.url, notes: Faker::Lorem.sentence, available: [false, true].sample, lat: 37.781270, long:-122.421450)
  Musician.create(username: Faker::Internet.user_name, password: "password", email: Faker::Internet.email, location: "Oakland", instrument: Faker::Lorem.word, genre: Faker::Lorem.word, skill_level: Faker::Lorem.word, url: Faker::Internet.url, gravatar_url: Faker::Internet.url, notes: Faker::Lorem.sentence, available: [false, true].sample, lat: 37.783946, long:-122.396059)
  Musician.create(username: Faker::Internet.user_name, password: "password", email: Faker::Internet.email, location: "Oakland", instrument: Faker::Lorem.word, genre: Faker::Lorem.word, skill_level: Faker::Lorem.word, url: Faker::Internet.url, gravatar_url: Faker::Internet.url, notes: Faker::Lorem.sentence, available: [false, true].sample, lat: 37.789933, long:-122.394307)
  Musician.create(username: Faker::Internet.user_name, password: "password", email: Faker::Internet.email, location: "Oakland", instrument: Faker::Lorem.word, genre: Faker::Lorem.word, skill_level: Faker::Lorem.word, url: Faker::Internet.url, gravatar_url: Faker::Internet.url, notes: Faker::Lorem.sentence, available: [false, true].sample, lat: 37.793123, long:-122.403101)
  Musician.create(username: Faker::Internet.user_name, password: "password", email: Faker::Internet.email, location: "Oakland", instrument: Faker::Lorem.word, genre: Faker::Lorem.word, skill_level: Faker::Lorem.word, url: Faker::Internet.url, gravatar_url: Faker::Internet.url, notes: Faker::Lorem.sentence, available: [false, true].sample, lat: 37.752177, long:-122.484237)
  Musician.create(username: Faker::Internet.user_name, password: "password", email: Faker::Internet.email, location: "Oakland", instrument: Faker::Lorem.word, genre: Faker::Lorem.word, skill_level: Faker::Lorem.word, url: Faker::Internet.url, gravatar_url: Faker::Internet.url, notes: Faker::Lorem.sentence, available: [false, true].sample, lat: 37.769436, long:-122.406248)
end

seed


