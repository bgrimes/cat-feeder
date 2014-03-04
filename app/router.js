var Router = Ember.Router.extend({

});

Router.map(function(){
  this.resource('schedules', function(){
    this.resource('schedule', {path: ':schedule_id'});
  });


  this.route('manual', {path: '/manual'});
});

module.exports = Router;
