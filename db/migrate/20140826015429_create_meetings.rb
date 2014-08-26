class CreateMeetings < ActiveRecord::Migration
  def change
    create_table :meetings do |t|
      t.string :email
      t.string :meeting_type
      t.string :name
      t.string :phone
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
    add_index :meetings, :email
    add_index :meetings, :meeting_type
  end
end
