angular.module("authApp")
.controller("registerController", function($scope, $location) {

     $scope.submit = function (auth) {
        $scope.auth = {}
         console.log(auth)
     }
})