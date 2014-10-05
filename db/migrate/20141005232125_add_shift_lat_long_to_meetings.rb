class AddShiftLatLongToMeetings < ActiveRecord::Migration
  def change
    add_column :meetings, :latitude_shift, :float
    add_column :meetings, :longitude_shift, :float
  end
end
