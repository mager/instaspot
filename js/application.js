window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    VERSION: '1.0.0',
    ready: function () {
        console.log('App version: ' + App.VERSION + ' is ready.');
    }
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();


// Initializes Ember Data
App.Store = DS.Store.extend({
  adapter: DS.RESTAdapter
})

App.ApplicationAdapter = DS.RESTAdapter.extend({
  findAll: function(data) {
  	var link = 'https://api.instagram.com/v1/media/popular?client_id=451cf9fc4a0a44379d699e4ca48d58fb';
    return this.ajax(link, "GET", {
      // CORS
      crossDomain: true,
      xhrFields: {withCredentials: true}
    }).then(function(json) {
      // Massage this demo API endpoint to look like RESTAdapter expects.
      return { things: [json] };
    });
  }
});



// var igdata = $.getJSON("https://api.instagram.com/v1/media/popular?client_id=451cf9fc4a0a44379d699e4ca48d58fb");