class MusiciansController < ApplicationController
  def index
  end
	
  def show_me
    if @musician = Musician.find(session[:musician_id])
      # render :partial => "musician", object: @musician
      # Prefer to use "object" instead of locals that re-name the key that
      # they're to the left of.  What happens, is if the partial is renamed
      # "musician" inside of the partial you can invoke a magic method called
      # "musician" which will get you what is, presently, @musician
      render :partial => "show", :locals => {:musician => @musician}
    else
      redirect_to root_path
    end
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
    # If you decide to do more work in the front end, I think this action makes
    # sense, but then you'd probably want to start returning JSON.
    @musician = Musician.find(params[:id])
    if @musician
      render :partial => "show", :locals => {:musician => @musician}
    else
      redirect_to root_path
    end
  end

	def nearby_musicians
		@musicians = Musician.all 
		render :json => @musicians
	end 
	
  def set_location
    @musician = Musician.find_by(id: session[:musician_id])
    if @musician.update_attributes(lat: params[:lat], long: params[:long])
      # ajax response: pass back nearby musician objects
      nearby_musicians
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
