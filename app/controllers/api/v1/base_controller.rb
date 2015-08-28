class Api::V1::BaseController < ActionController::Base
  if Rails.env.production?
    include ApiErrorConcern
  end

  self.responder = ApiResponder

  respond_to :json
end
