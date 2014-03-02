APP_DIR=File.expand_path(File.dirname(__FILE__))
ENV["APP_DIR"]=APP_DIR

# Use environment csv to restrict auth
ENV["AUTH_EMAILS"]      ||= ""
ENV["SESSION_SECRET"]   ||= "pleaseUseASecret"
ENV["GOOGLE_CLIENT_ID"] ||= ""
ENV["GOOGLE_SECRET"]    ||= ""

#ENV["RACK_ENV"]="production"

# add our root and lib dirs to the load path
$:.unshift APP_DIR
$:.unshift "#{APP_DIR}/lib/"
$:.unshift "#{APP_DIR}/lib/models/"
$:.unshift "#{APP_DIR}/lib/helpers/"

# Do some special stuff if this is prod
if ENV["RACK_ENV"] === "production"
  # Remove any development scripts
  jsfiles = File.join('public/**', '*.js')
  jsfiles = Dir.glob(jsfiles)
  jsfiles.each do |filepath|
    # Delete the file if it isn't minified
    File.delete(filepath) if /^.*min\.js$/.match(filepath).nil?
  end
end

require "app"



run CatFeederApp
