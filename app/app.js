/**
 *
 */
App = Em.Application.create({

});


// ROUTES
App.Router = require('./router');
App.IndexRoute = require('./routes/index_route');

// CONTROLLERS
App.ApplicationController = require('./controllers/application_controller');
