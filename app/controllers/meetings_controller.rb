class MeetingsController < ApplicationController

  def create
    @newLat = params[:latitude].to_f
    @newLong = params[:longitude].to_f

    @shift = (rand(0..1)*2-1)*0.5/100
    @newLat+=@shift
    @shift = (rand(0..1)*2-1)*0.5/100
    @newLong+=@shift

    @meeting = Meeting.new(email: params[:email], name: params[:name], phone: params[:phone],
        meeting_type: params[:meeting_type],
        latitude: params[:latitude].to_f, longitude: params[:longitude].to_f, latitude_shift: @newLat, longitude_shift: @newLong)
    begin
      @meeting.save!
    rescue => e
      logger.warn "Failed to save new meeting for email: " + e.to_s
    end

    redirect_to root_path
  end

=begin
  t.string   "email"
  t.string   "meeting_type"
  t.string   "name"
  t.string   "phone"
  t.float    "latitude"
  t.float    "longitude"
=end

end