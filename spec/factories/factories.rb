FactoryGirl.define do
	factory :musician do
		username {Faker::Internet.user_name}
		password {"abcdefghi"}
    email {Faker::Internet.email}
    location {Faker::Lorem.word}
    instrument {Faker::Lorem.word}
    genre {Faker::Lorem.word}
    skill_level { "beginner"}
    url {Faker::Internet.url}
    gravatar_url {Faker::Internet.url}
    notes {Faker::Lorem.paragraph}
    available {"false"}
	end
end