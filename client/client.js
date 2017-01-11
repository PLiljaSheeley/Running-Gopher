var app = angular.module("app", []);

app.controller("MainController", ["$scope", "$http", function($scope, $http) {

  $scope.emailList = [];

  $scope.getEmail = function() {
    $http.get("/email").then(function(response) {
      $scope.email = {};
      $scope.emailArray = response.data;
    });
  };
  $scope.getEmails();
  $scope.add = function(email){
    $http.post('/add', email);
  }

}]);