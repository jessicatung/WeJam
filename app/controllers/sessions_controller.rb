class SessionsController < ApplicationController 
  def new
    render 'new'
  end

  def create
    musician = Musician.find_by_email(params[:email])
    if musician.authenticate(params[:password])
      session[:musicians_id] = musician.id
      redirect_to :root
    end
  end

  def destroy
    reset_session
    redirect_to :root
  end

  def musician_params
    params.require(:musician).permit(:id, :username,:email, :password, :email, :location, :instrument, :genre,
      :skill_level,:url,:gravatar_url,:notes, :available)
  end
end