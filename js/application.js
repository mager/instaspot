window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    VERSION: '1.0.0',
    ready: function () {
        console.log('App version: ' + App.VERSION + ' is ready.');
    }
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

// Create the global router to manage page state via URLs 
App.Router.map(function() {
  this.resource('index', { path: '/' });
});

App.Store = DS.Store.extend({
  adapter: DS.RESTAdapter
})

App.Item = DS.Model.extend({
  image: DS.attr('string'),
  user: DS.attr('string')
});

App.Item.FIXTURES = [
 {
   image: 'http://photos-g.ak.instagram.com/hphotos-ak-xaf1/10616664_630976927000566_1003239505_n.jpg',
   user: 'mager'
 },
 {
   image: 'http://photos-b.ak.instagram.com/hphotos-ak-xaf1/10593471_735752143130489_878680963_n.jpg',
   user: 'mager',
 },
 {
   image: 'http://photos-b.ak.instagram.com/hphotos-ak-xaf1/10593471_735752143130489_878680963_n.jpg',
   user: 'hilldogg6'
 }
];