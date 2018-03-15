angular.module("authApp")
    .controller("checkInFormController", function ($scope, $location, checkInFormFactory, loginFactory) {
        //Send check in form to database
        $scope.sendCheckIn = function (auth) {
            checkInFormFactory.postCheckIn(auth).then(res => {
            })
            $location.path('/feed')
        }
    })