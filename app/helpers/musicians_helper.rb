module MusiciansHelper
  def current_musician
    Musician.find(id: session[:musician_id])
  end
end