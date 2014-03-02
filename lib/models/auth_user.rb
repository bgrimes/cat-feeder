# ActiveRecord model to represent oAuth users
class AuthUser < ActiveRecord::Base
  validates_presence_of :email
  validates_inclusion_of :email, in: ENV['AUTH_EMAILS'].split(',').map(&:lstrip)

  def self.find_by_omniauth(auth_hash)
    where(email: auth_hash['info']['email']).first
  end

  def self.create_with_omniauth(auth_hash)
    create(email: auth_hash['info']['email'],
           name:  auth_hash['info']['name'],
           uid:   auth_hash['info']['uid'],
           token: auth_hash['info']['token'])
  end

  def self.find_or_create_by_omniauth(auth_hash)
    find_by_omniauth(auth_hash) || create_with_omniauth(auth_hash)
  end
end
