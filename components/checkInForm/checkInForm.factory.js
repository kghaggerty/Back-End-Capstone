angular
    .module("authApp")
    .factory("checkInFormFactory", function ($http, $routeParams) {
        //Making api call to DailyCheck Controller
        return Object.create(null, {
            "postCheckIn": {
                value: function (auth) {
                    return $http({
                        "url": "http://localhost:5000/api/DailyCheck",
                        "method": "POST",
                        "Accepts": "application/json",
                        "data": auth
                    })
                }
            }
        })
    })
