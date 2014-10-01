module MusiciansHelper
  def viewing_my_own_profile
    Musician.find_by(id: session[:musician_id])
  end
end