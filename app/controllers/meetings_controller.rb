class MeetingsController < ApplicationController

  def create
    @meeting = Meeting.new(email: params[:email], name: params[:name], phone: params[:phone],
                           meeting_type: params[:meeting_type],
                           latitude: params[:latitude].to_f, longitude: params[:longitude].to_f).save
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