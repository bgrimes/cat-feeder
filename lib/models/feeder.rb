class Feeder < ActiveRecord::Base
  has_many :jobs
  attr_accessor :editing_user
  validates_presence_of :editing_user

  def before_create
    self.created_by = self.updated_by = editing_user.id
  end

  def before_update
    self.updated_by = editing_user.id
  end


  #def createtest
  #  Feeder.new(:editing_user => current_user)
  #end
end
