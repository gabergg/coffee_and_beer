class StaticPagesController < ApplicationController
  def home
    gon.markers = Meeting.all.select("latitude, longitude")
  end

  def blog
  end

  def about
  end

  def contact
  end
end
