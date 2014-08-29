class StaticPagesController < ApplicationController
  def home
    gon.gmaps_api_key = ENV["GMAPS_API_KEY"]
    gon.markers = Meeting.all.select("latitude, longitude")
  end

  def blog
  end

  def about
  end

  def contact
  end
end
