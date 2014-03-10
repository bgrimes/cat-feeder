var UserController = Ember.ArrayController.extend({
  // @todo return the actual current user
  currentUser: function(){
    return this.store.find('user', 1);
  }.property()
});

module.exports = UserController;
