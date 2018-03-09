angular.module("authApp")
.controller("registerController", function($scope, $location, registerFactory) {

     $scope.register = function (auth) {
        // $scope.auth = {}
        registerFactory.postUser(auth).then(res => {
            $scope.auth = {}
            console.log(res, "res")
        })
     }
})