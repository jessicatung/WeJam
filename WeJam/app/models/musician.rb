class Musician < ActiveRecord::Base
  validates :username, :email, :password_hash, :location, :instrument, :skill_level, :available, presence: true
  validates :email, :username, uniqueness: true
end
