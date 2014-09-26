class Musician < ActiveRecord::Base
  has_secure_password
  validates :username, :email, :password_hash, :location, :instrument, :skill_level, :available, presence: true
  validates :email, :username, uniqueness: true
end
