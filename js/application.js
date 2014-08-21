(function(){
  var app = angular.module('instaspot', []);

  app.controller('SpotController', function(){
    this.products = spots;
  });

  var spots = [
   {
     id: 0,
     image_href: 'http://photos-g.ak.instagram.com/hphotos-ak-xaf1/10616664_630976927000566_1003239505_n.jpg',
     username: 'mager'
   },
   {
     id: 1,
     image_href: 'http://photos-b.ak.instagram.com/hphotos-ak-xaf1/10593471_735752143130489_878680963_n.jpg',
     username: 'mager'
   },
   {
     id: 2,
     image_href: 'http://photos-b.ak.instagram.com/hphotos-ak-xaf1/10593471_735752143130489_878680963_n.jpg',
     username: 'hilldogg6'
   }
  ];


})();