/**
 *
 */
App = Em.Application.create({

});


// ROUTES
App.Router = require('./router');
App.JobsRoute = require('./routes/jobs_route');
// App.ScheduleRoute = require('./routes/schedule_route');
App.ManualRoute = require('./routes/manual_route');
App.FeedersRoute = require('./routes/feeders_route');
App.UserRoute   = require('./routes/user_route');

// CONTROLLERS
App.ApplicationController = require('./controllers/application_controller');
App.FeederController = require('./controllers/feeder_controller');
App.FeedersController = require('./controllers/feeders_controller');
App.UserController = require('./controllers/user_controller');
App.JobsController = require('./controllers/jobs_controller');
App.JobController = require('./controllers/job_controller');

App.Feeder = require('./models/feeder');
App.User = require('./models/user');
App.Job = require('./models/job');

// ADAPTERS
App.ApplicationAdapter = require('./adapters/application_adapter');


Ember.Handlebars.helper('moment_from_now', require('./helpers/handlebars/moment_from_now'));
