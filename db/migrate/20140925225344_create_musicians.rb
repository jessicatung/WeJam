class CreateMusicians < ActiveRecord::Migration
  def change
    create_table :musicians do |t|
      t.string :username, null: :false
      t.string :password_digest, null: :false
      t.string :email, null: :false
      t.string :location, null: :false
      t.string :instrument, null: :false
      t.string :genre, null: :false
      t.string :skill_level, null: :false
      t.string :url
      t.string :gravatar_url
      t.text :notes
      t.boolean :available

      t.timestamps
    end
  end
end