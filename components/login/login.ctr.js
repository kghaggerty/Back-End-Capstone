angular.module("authApp")
.controller("loginController", function($scope, $location, loginFactory) {

    $scope.login = function () {
    $location.path('/login')
    
    }
     $scope.registerButton = function () {
        $location.path('/register')
    }

    $scope.btLogin = function () {
        loginFactory.getToken($scope.auth).then(function (token){
            localStorage.setItem("token", token);
        })
    }
})