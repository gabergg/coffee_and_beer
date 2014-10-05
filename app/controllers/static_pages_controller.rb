class StaticPagesController < ApplicationController
  def home
    set_markers
  end

  def blog
  end

  def photos
    set_markers
  end

  def about
    set_markers
  end

  def contact
    set_markers
  end

  def set_markers
    @markers = Meeting.all.select("name, latitude_shift, longitude_shift")
    @markers = @markers.to_a.map(&:serializable_hash)

    p "Hey buddy"
    p @markers

    gon.markers = @markers.map { |marker|
      @name_list = marker["name"].split(',')
      @name_list = @name_list.map { |name|
        name.split(' ').first
      }
      {name: @name_list.join(', '), latitude: marker["latitude_shift"].to_f, longitude: marker["longitude_shift"].to_f }
    }
  end

end
