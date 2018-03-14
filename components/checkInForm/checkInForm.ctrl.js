angular.module("authApp")
    .controller("checkInFormController", function ($scope, $location, checkInFormFactory) {
        $scope.sendCheckIn = function (auth) {
            checkInFormFactory.postCheckIn(auth).then(res => {
                console.log(res)
                $scope.auth = {}
            })
        }
    })