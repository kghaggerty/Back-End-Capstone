angular.module("authApp")
.controller("registerController", function($scope, $location, registerFactory) {

     $scope.register = function (auth) {
        registerFactory.postUser(auth).then(res => {
            $scope.auth = {}
        })
     }
})