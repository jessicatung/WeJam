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
        redirect_to musicians_path
      else
        render :text => @musician.errors.full_messages.join(', '), :status => :unprocessable_entity
      end
	end

	def show
		@musicians = Musician.find(params[:id])
	end

	def nearby_musicians
		@musicians = Musician.all 
		render :json => @musicians
	end 

	private

	def musician_params
		params.require(:musician).permit(:username, :email, :password, :location, :instrument, :genre, :skill_level, :url, :gravatar_url, :availability, :notes)
	end
end