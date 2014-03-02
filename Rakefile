#!/usr/bin/env rake
APP_DIR = File.dirname(__FILE__)


$:.unshift APP_DIR
$:.unshift "#{APP_DIR}/lib/"
$:.unshift "#{APP_DIR}/lib/models/"
$:.unshift "#{APP_DIR}/lib/helpers/"

ENV['AUTH_EMAILS'] ||= ""

require 'app'
require 'sinatra/activerecord/rake'
