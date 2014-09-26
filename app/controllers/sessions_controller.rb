class SessionsController < ApplicationController 
  def new
  end

  def create
    musician = Musician.find_by_email(params[:email])
    if musician.authenticate(params[:password])
      session[:musician_id] = musician.id
      redirect_to :root
    end
  end

  def destroy
    reset_session
    redirect_to :root
  end

  def musician_params
    params.require(:musician).permit(:username,:email, :password_digest, :email, :location, :instrument, :genre,
      :skill_level,:url,:gravatar_url,:notes, :available)
  end
end