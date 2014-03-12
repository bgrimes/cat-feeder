var JobsController = Ember.ArrayController.extend({
  actions: {
    createJob: function(){
      this.store.createRecord('job');
    }
  }
});

module.exports = JobsController;
