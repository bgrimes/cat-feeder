var FeedersController = Ember.ArrayController.extend({
  needs: ['user'],
  actions: {
      createFeeder: function() {
        this.store.createRecord('feeder');
      }
  }
});

module.exports = FeedersController;
