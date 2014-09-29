class WelcomeController < ApplicationController
	def index
    @musician = Musician.new
	end
end