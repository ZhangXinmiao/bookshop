var myServiceApp = angular.module('myServiceApp',['ui.router']);
myServiceApp.factory('bookservice', ['$http','$state', '$stateParams', function($http, $scope, $state, $stateParams){
    var service = {
      test: function(){
        console.log($stateParams);
        console.log("service success!");
      },
      getdata: function(){
        //console.log($stateParams.booktype);
        //return $http.get("./data/book4.json");
        //.success(function(){console.log("getdata success!");});
        return $http({
          method: "GET",
          url: "./data/book3.json"
        });
      }
    };
    return service;
  }
]);
