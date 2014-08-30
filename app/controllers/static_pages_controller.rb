class StaticPagesController < ApplicationController
  def home
    gon.gmaps_api_key = ENV["GMAPS_API_KEY"]
    @markers = Meeting.all.select("name, latitude, longitude")
    gon.markers = @markers.map { |marker| {name: marker.name.split(' ').first, latitude: marker.latitude, longitude: marker.longitude} }
  end

  def blog
  end

  def about
  end

  def contact
  end

end
