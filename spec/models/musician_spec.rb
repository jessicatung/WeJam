require 'rails_helper'
require "shoulda/matchers"

describe Musician do
	let!(:musician) {FactoryGirl.create :musician}

  context "creation of accounts" do
    it { should respond_to :username}
    it { should respond_to :email}
  end

  context "validations" do
  	it { should validate_presence_of :username}
  	it { should validate_presence_of :email}
  	it { should validate_presence_of :location}
  	it { should validate_presence_of :instrument}
  	it { should validate_presence_of :skill_level}
  	it { should validate_uniqueness_of :username}
  	it { should validate_uniqueness_of :email}
  end

	context "authentication" do
		describe "with valid password" do
			it "should authenticate the musician" do
			  expect(musician.authenticate(musician.password)).to eq(musician)
			end
		end
	end

end