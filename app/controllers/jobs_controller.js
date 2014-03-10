var JobsController = Ember.ArrayController.extend({
  action: {
    createJob: function(){
      this.store.createRecord('job');
    }
  }
});

module.exports = JobsController;
