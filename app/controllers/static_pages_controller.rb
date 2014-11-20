class StaticPagesController < ApplicationController

  skip_before_filter :verify_authenticity_token, :only => [:move]
  
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

  def move
    if params[:auth] != ENV['MOVE_AUTH']
      render :nothing => true, :status => :unauthorized
      return
    end

    if !check_lat_long(params[:lat], params[:long])
      render :nothing => true, :status => :bad_request
      return
    end

    Rails.application.config.current_lat = params[:lat]
    Rails.application.config.current_long = params[:long]

    render :nothing => true, :status => :ok
  end

  def set_markers
    @markers = Meeting.all.select("name, latitude_shift, longitude_shift")
    @markers = @markers.to_a.map(&:serializable_hash)

    gon.markers = @markers.map { |marker|
      @name_list = marker["name"].split(',')
      @name_list = @name_list.map { |name|
        name.split(' ').first
      }
      {name: @name_list.join(', '), latitude: marker["latitude_shift"].to_f, longitude: marker["longitude_shift"].to_f }
    }

    gon.currentLocation = { lat: Rails.application.config.current_lat, long: Rails.application.config.current_long }
  end
  
  def check_lat_long(lat, long)

    unless lat.is_a?(Numeric) && long.is_a?(Numeric)
      return false
    end
    
    unless lat.between?(-90,90) && long.between?(-180,180)
      return false
    end
    return true

  end

end
