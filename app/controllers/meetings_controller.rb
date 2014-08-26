class MeetingsController < ApplicationController

  def create
    @meeting = Meeting.new
    flash[:notice] = params[:data]
    redirect_to root_path
  end

end