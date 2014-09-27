module MusiciansHelper
  def current_musician
    Musician.find_by(id: session[:musician_id])
  end
end