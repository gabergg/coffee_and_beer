class MeetingsController < ApplicationController

  def create
    @meeting = Meeting.new(email: params[:email], name: params[:name], phone: params[:phone],
                           meeting_type: params[:meeting_type],
                           latitude: params[:latitude].to_f, longitude: params[:longitude].to_f)
    begin
      @meeting.save!
    rescue => e
      logger.warn "Failed to save new meeting for email: " + params[:email] + " and phone " + params[:phone]
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