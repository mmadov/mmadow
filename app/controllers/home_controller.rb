class HomeController < ApplicationController
  def index
    @temps = Template.all
  end
end
