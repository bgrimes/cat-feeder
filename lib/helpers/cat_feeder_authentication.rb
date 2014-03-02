module CatFeeder
  module Authentication
    def page_requires_authentication?
      paths_without_auth = ["/login"]

      ( !paths_without_auth.include?(request.path_info) && \
        !request.path_info.match(%r{^/auth/}) && \
        !request.path_info.match(%r{^/api})
       )
    end

    def authentication_required!
      return unless page_requires_authentication?
      redirect "/login" unless current_user
    end
  end
end
