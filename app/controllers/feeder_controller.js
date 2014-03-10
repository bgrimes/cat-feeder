var FeederController = Ember.ObjectController.extend({
  needs: ['user'],

  isEditing: false,

  onInit: function(){
    Ember.run.scheduleOnce('afterRender', this, function(){
      var feeder = this.get('model'),
          name = feeder.get('name');
      // If the name is empty, go ahead and set editing to true
      if(typeof name === 'undefined' || !name.trim()) {
        this.set('isEditing', true);
      }
    });
  }.on('init'),

  actions: {
    editFeeder: function(){
      this.set('isEditing', true);
    },
    cancelEdit: function(){
      var feeder = this.get('model');
      if(feeder.get('isNew')) {
        // Since it is new, we can just remove the 'empty' record
        feeder.deleteRecord();
      } else {
        feeder.rollback();
      }
      this.set('isEditing', false);
    },

    saveFeeder: function(){
      var feeder = this.get('model'),
          isDirty = feeder.get('isDirty'),
          isNew = feeder.get('isNew'),
          isSaving = feeder.get('isSaving'),
          self = this;
      // We're already savin' here, c'mon!
      if (isSaving) {
          return;
      }
      // If there is nothing to change, early exit
      if (!isDirty) {
        this.set('isEditing', false);
        return;
      }
      this.get('controllers.user.currentUser').then(function(currentUser){
        feeder.set('updatedBy', currentUser);
        if (isNew) {
          feeder.set('createdBy', currentUser);
        }
        feeder.save().then(function(feeder){
          self.set('isEditing', false);
        });
      });
    },
    deleteFeeder: function(){
      var feeder = this.get('model');
    }
  }
});

module.exports = FeederController;
