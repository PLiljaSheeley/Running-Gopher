var app = angular.module("app", []);

app.controller("MainController", ["$scope", "$http", function($scope, $http) {

  $scope.emailList = [];
  $scope.orderHide = true;
  $scope.aboutHide = false;
  $scope.pricingHide = false;
  $scope.contactHide = false;
	$scope.showOrder = function(){
	  $scope.orderHide = !$scope.orderHide;
	  if($scope.aboutHide === true){
	    $scope.aboutHide = !$scope.aboutHide
	  }
	   if($scope.pricingHide === true){
	    $scope.pricingHide = !$scope.pricingHide
	  }
	  if($scope.contactHide === true){
	    $scope.contactHide = !$scope.contactHide
	  }
	}
	$scope.showAbout = function(){
	  $scope.aboutHide = !$scope.aboutHide;
	  if($scope.orderHide === true){
	      $scope.orderHide = !$scope.orderHide
	  }
	   if($scope.pricingHide === true){
	    $scope.pricingHide = !$scope.pricingHide
	  }
	  if($scope.contactHide === true){
	    $scope.contactHide = !$scope.contactHide
	  }
	}
	$scope.showPricing = function(){
	  $scope.pricingHide = !$scope.pricingHide;
	  if($scope.orderHide === true){
	      $scope.orderHide = !$scope.orderHide
	  }
	   if($scope.aboutHide === true){
	    $scope.aboutHide = !$scope.aboutHide
	  }
	  if($scope.contactHide === true){
	    $scope.contactHide = !$scope.contactHide
	  }
	}
	$scope.showContact = function(){
	  $scope.contactHide = !$scope.contactHide;
	  if($scope.orderHide === true){
	      $scope.orderHide = !$scope.orderHide
	  }
	   if($scope.aboutHide === true){
	    $scope.aboutHide = !$scope.aboutHide
	  }
	  if($scope.pricingHide === true){
	    $scope.pricingHide = !$scope.pricingHide
	  }
	}
  // $scope.getEmail = function() {
  //   $http.get("/email").then(function(response) {
  //     $scope.email = {};
  //     $scope.emailArray = response.data;
  //   });
  // };
  // $scope.getEmails();
  // $scope.add = function(email){
  //   $http.post('/add', email);
  // }

}]);