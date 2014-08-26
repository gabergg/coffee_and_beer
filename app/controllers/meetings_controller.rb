class MeetingsController < ApplicationController

  def create
    #render :text => "SCOOBY DOO"
    flash[:notice] = "SCOOBY"
    #render :text => "#{params[:data]}"
    redirect_to about_path
  end

end