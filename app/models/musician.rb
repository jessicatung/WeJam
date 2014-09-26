class Musician < ActiveRecord::Base
  has_secure_password
  validates :username, :email, :location, :instrument, :skill_level, presence: true
  validates :email, :username, uniqueness: true
end
