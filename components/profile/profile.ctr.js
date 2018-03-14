angular.module("authApp")
    .controller("profileController", function ($scope, $location, registerFactory) {
        $scope.checkIn = function () {
            $location.path('/checkInForm')
        }
    })