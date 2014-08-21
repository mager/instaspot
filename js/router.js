// Create the global router to manage page state via URLs 
App.Router.map(function() {
  this.resource('index', { path: '/' });
});

// Create the default application route to set application-level state properties
App.ApplicationRoute = Ember.Route.extend({});

