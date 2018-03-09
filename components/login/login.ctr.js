angular.module("authApp")
.controller("loginController", function($scope, $location) {

    $scope.login = function () {
    $location.path('/login')
    
}
     $scope.submit = function (auth) {
        $scope.auth = {}
         console.log(auth)
     }
})