(function(){

  var client_id = '451cf9fc4a0a44379d699e4ca48d58fb';

  var app = angular.module('instaspot', []);

  app.factory("InstagramAPI", ['$http', function($http) {
    return {
      fetchPopular: function(callback){
        var endpoint = "https://api.instagram.com/v1/media/popular";
        endpoint += "?count=99";
        endpoint += "&client_id=" + client_id;
        endpoint += "&callback=JSON_CALLBACK";
        $http.jsonp(endpoint).success(function(response){
          callback(response.data);
        });
      }
    }
  }]);

  app.controller('ShowImages', function($scope, InstagramAPI){
    $scope.data = {};
    InstagramAPI.fetchPopular(function(data){
      $scope.pics = data;
    });
  });

})();
