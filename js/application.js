window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    VERSION: '1.0.0',
    ready: function () {
        console.log('App version: ' + App.VERSION + ' is ready.');
    }
});

// Initializes Ember Data
App.Store = DS.Store.extend({
  adapter: DS.RESTAdapter
})

function grabImages(client_id) {  

  var endpoint_popular = 'https://api.instagram.com/v1/media/popular?client_id=' + client_id

}

function onDataLoaded(instagram_data) {  

}