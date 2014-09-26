require 'faker'

def seed
 10.times {Musician.create(username: Faker::Internet.user_name, password_digest: "password", email: Faker::Internet.email, location: "Oakland", instrument: Faker::Lorem.word, genre: Faker::Lorem.word, skill_level: Faker::Lorem.word, url: Faker::Internet.url, gravatar_url: Faker::Internet.url, notes: Faker::Lorem.sentence, available: [false, true].sample)}

end

seed
