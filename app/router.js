var Router = Ember.Router.extend({

});

Router.map(function(){
  this.resource('jobs', {path: '/jobs'});

  this.resource('feeders', {path: '/feeders'});
  this.resource('user', {path: '/user'});
  this.route('manual', {path: '/manual'});
});

module.exports = Router;
