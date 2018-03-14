angular.module("authApp")
.controller("loginController", function($scope, $location, registerFactory) {

    $scope.login = function () {
    $location.path('/login')
    
    }
     $scope.registerButton = function () {
        $location.path('/register')
    }

    $scope.btLogin = function (auth) {
        registerFactory.postUser(auth).then(res => {
            if (localStorage.getItem("token") !== null){
                $location.path('/profile')
            }
        })
    }
})