(function(){
  var app = angular.module('instaspot', []);

  app.controller('SpotController', function(){
    this.products = spots;
  });

  var spots = [
   {
     id: 0,
     image_href: 'http://photos-g.ak.instagram.com/hphotos-ak-xaf1/10616664_630976927000566_1003239505_s.jpg',
     username: 'mager'
   },
   {
     id: 1,
     image_href: 'http://photos-b.ak.instagram.com/hphotos-ak-xaf1/10593471_735752143130489_878680963_s.jpg',
     username: 'mager'
   },
   {
     id: 2,
     image_href: 'http://scontent-a-pao.cdninstagram.com/hphotos-xaf1/t51.2885-15/10608039_579016542209237_1463884446_s.jpg',
     username: 'hilldogg6'
   }
  ];


})();