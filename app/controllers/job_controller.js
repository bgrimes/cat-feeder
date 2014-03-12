var ConfirmMixin = require('./../helpers/confirm_mixin');
var JobController = Ember.ObjectController.extend(ConfirmMixin, {
  needs: ['user'],

  isEditing: false,

  onInit: function(){
    Ember.run.scheduleOnce('afterRender', this, function(){
      var job = this.get('model'),
          name = job.get('name');
      // If the name is empty, go ahead and set editing to true
      if(typeof name === 'undefined' || !name.trim()) {
        this.set('isEditing', true);
      }
    });
  }.on('init'),

  actions: {
    editJob: function(){
      this.set('isEditing', true);
    },
    cancelEdit: function(){
      var job = this.get('model');
      if(job.get('isNew')) {
        // Since it is new, we can just remove the 'empty' record
        job.deleteRecord();
      } else {
        job.rollback();
      }
      this.set('isEditing', false);
    },

    saveJob: function(){
      var job = this.get('model'),
          isDirty = job.get('isDirty'),
          isNew = job.get('isNew'),
          isSaving = job.get('isSaving'),
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
        job.set('updatedBy', currentUser);
        if (isNew) {
          job.set('createdBy', currentUser);
        }
        job.save().then(function(job){
          self.set('isEditing', false);
        });
      });
    },
    deleteJob: function(){
      var job  = this.get('model'),
          msg = "Are you sure you want to delete <strong>%@</strong>?".fmt(job.get('name'));
      this.confirm(msg).then(function(){
        // IF true
        job.deleteRecord();
        job.save();
      });
    }
  },
});

module.exports = JobController;
