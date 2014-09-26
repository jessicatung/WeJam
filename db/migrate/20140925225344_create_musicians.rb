class CreateMusicians < ActiveRecord::Migration
  def change
    create_table :musicians do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :location
      t.string :instrument
      t.string :genre
      t.string :skill_level
      t.string :url
      t.string :gravatar_url
      t.text :notes
      t.boolean :available

      t.timestamps
    end
  end
end
