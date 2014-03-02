module CatFeeder
  module Helpers
    def current_user
      @_current_user ||= \
        session[:user_id] ? AuthUser.where(id: session[:user_id].to_i).first : nil
    end
  end
end
