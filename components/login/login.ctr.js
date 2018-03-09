angular.module("authApp")
.controller("loginController", function($scope, $location) {

    $scope.login = function () {
    $location.path('/login')
    console.log("CLICKKK")
        form = {
            formData: {
                email: $scope.email,
                password: $scope.password
            }
        }
    }

})