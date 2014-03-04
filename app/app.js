/**
 *
 */
App = Em.Application.create({

});

// ADAPTERS
App.ApplicationAdapter = require('./adapters/application_adapter');

// ROUTES
App.Router = require('./router');
// App.SchedulesRoute = require('./routes/schedules_route');
// App.ScheduleRoute = require('./routes/schedule_route');
App.ManualRoute = require('./routes/manual_route');

// CONTROLLERS
App.ApplicationController = require('./controllers/application_controller');
// App.SchedulesController = require('./controllers/schedules_controller');
// App.ScheduleController = require('./controllers/schedule_controller');

// // MODELS
// App.Schedule = require('./models/schedule');
//
// App.Schedule.FIXTURES = [
//   {
//     id: 1,
//     comment: 'Morning feeding'
//   },
//   {
//     id: 2,
//     comment: "Evening Feeding"
//   }
// ];
