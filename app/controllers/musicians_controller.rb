class MusiciansController < ApplicationController
  def index
    if session[:musician_id] 
      musicians_path
    else
      redirect_to :root
    end
  end
	
  def show_me
    @musician = Musician.find(session[:musician_id])
    render :json => @musician
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
    @musician = Musician.find(params[:id])
    render :partial => "show", :locals => {:musician => @musician}
  end

	def nearby_musicians
		@musicians = Musician.all 
		render :json => @musicians
	end 
	
  def set_location
    @musician = Musician.find_by(id: session[:musician_id])
    if @musician.update_attributes(lat: params[:lat], long: params[:long])
      # ajax response: pass back nearby musician objects
      redirect_to musicians_path
    else
      render :text => @musician.errors.full_messages.join(', '), :status => :unprocessable_entity
    end   
  end

  def edit
    @musician = Musician.find(params[:id])
    render :partial => "edit_form", :locals => {:musician => @musician}
  end

  def update
    @musician = Musician.find(params[:id])
    if @musician.update_attributes(musician_params)
      redirect_to musicians_path
    else
      render :text => @musician.errors.full_messages.join(', '), :status => :unprocessable_entity
    end 	
  end

 private

  def musician_params
    params.require(:musician).permit(:username, :email, :password, :location, :instrument, :genre, :skill_level, :url, :gravatar_url, :availability, :notes, :lat, :long)
  end
end
