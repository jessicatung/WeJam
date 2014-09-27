class MusiciansController < ApplicationController

	def index
	end
	
	def new
		@musician = Musician.new
	end

	def create
	  @musician = Musician.new(musician_params)
      if @musician.save
        session[:musician_id] = @musician.id
        # redirect_to musicians_path
        # This redirects the user to their own profile page after they sign up,
        # had to do this for testing purposes. Line 14 is original redirect.
        redirect_to "/musicians/#{@musician.id}"
      else
        render :text => @musician.errors.full_messages.join(', '), :status => :unprocessable_entity
      end
	end

	def show
		@musician = Musician.find(params[:id])
	end

	private

	def musician_params
		params.require(:musician).permit(:username, :email, :password, :location, :instrument, :genre, :skill_level, :url, :gravatar_url, :availability, :notes)
	end
end