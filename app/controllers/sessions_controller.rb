class SessionsController < ApplicationController 
  def new
    render 'new'
  end

  def create
    musician = Musician.find_by_email(params[:email])
    if musician && musician.authenticate(params[:password])
      session[:musician_id] = musician.id
      redirect_to musicians_path
    else
      redirect_to :root
    end
  end

  def destroy
    reset_session
    redirect_to :root
  end


end