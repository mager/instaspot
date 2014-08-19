window.Instaspot = Ember.Application.create({
    LOG_TRANSITIONS: true,
    VERSION: '1.0.0',
    ready: function () {
        console.log('App version: ' + Instaspot.VERSION + ' is ready.');
    }
});
