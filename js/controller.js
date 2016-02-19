var bookListModule = angular.module("BookListModule", []);
bookListModule.controller('BookListCtrl', function($scope, $http, $state, $stateParams, bookservice) {
  console.log($stateParams);
  $http.get("./data/book" + $stateParams.booktype +".json")
  .success(function(response) {$scope.books = response.books;});
  //bookservice.test();
  //bookservice.getdata().success(function(response) {$scope.books = response.books;});
});
