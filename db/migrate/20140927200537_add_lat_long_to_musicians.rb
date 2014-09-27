class AddLatLongToMusicians < ActiveRecord::Migration
  def change
    add_column :musicians, :lat, :float,  default: 0 
    add_column :musicians, :long, :float, default: 0
  end
end
