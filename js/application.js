(function(){

  var client_id = '451cf9fc4a0a44379d699e4ca48d58fb';

  var app = angular.module('instaspot', []);

  app.factory("InstagramAPI", ['$http', function($http) {
    return {
      fetchPopular: function(callback){
        var endpoint = "https://api.instagram.com/v1/media/popular?client_id=" + client_id + "&callback=JSON_CALLBACK";
        $http.jsonp(endpoint).success(function(response){
          callback(response.data);
        });
      }
    }
  }]);

  // console.log(app);

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

  app.controller('DynamicImages', function($scope, InstagramAPI){
    console.log('heyo');
    $scope.data = {};

    InstagramAPI.fetchPopular(function(data){

      console.log(data);

    });
  });

})();