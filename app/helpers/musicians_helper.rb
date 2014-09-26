module MusiciansHelper
  def current_musician
    Musician.where(id: session[:musician_id]).first
  end
end