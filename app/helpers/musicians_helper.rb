# I don't like helpers.  I think they should generally be private methods in a
# controller and that the determination should be done in the controller
# action and NOT in the view.
module MusiciansHelper
  def viewing_my_own_profile(musician_being_reviewed)
    Musician.find_by(id: session[:musician_id]) === musician_being_reviewed
  end
end
