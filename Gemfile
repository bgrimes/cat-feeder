source 'https://rubygems.org'
ruby "2.0.0"

gem "rake"

# web ----
gem "rack"
gem "sinatra"
gem "redis"
gem "json"
gem "rack-flash3"

# gem "rack-flash3"
# gem "sinatra-partial"

#gem "nokogiri"

# dev/debugging ----
gem "tux"

gem "sinatra-activerecord"

# Sqlite 3 in dev
if ENV["RACK_ENV"] === 'development'
  gem "sqlite3"
else
  # Postgres in prod
  gem "pg"
end


gem "omniauth"
gem "omniauth-google-oauth2"
