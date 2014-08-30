class StaticPagesController < ApplicationController
  def home
    gon.gmaps_api_key = ENV["GMAPS_API_KEY"]
    @markers = Meeting.all.select("name, latitude, longitude")
    gon.markers = @markers.map { |marker|
      @name_list = marker.name.split(',')
      @name_list = @name_list.map { |name|
        name.split(' ').first
      }
      {name: @name_list.join(', '), latitude: marker.latitude, longitude: marker.longitude}
    }

  end

  def blog
  end

  def about
  end

  def contact
  end

end
