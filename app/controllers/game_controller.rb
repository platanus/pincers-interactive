class GameController < ApplicationController

  def level
    handler = "level_#{params[:level]}"
    self.send handler
    render handler
  end

  def level_1

  end

end
