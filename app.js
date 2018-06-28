
const url = "";
var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope, $http) {
  $http.get(url)
  .then(function(response) {
      $scope.data = response.data.data;
	});
});