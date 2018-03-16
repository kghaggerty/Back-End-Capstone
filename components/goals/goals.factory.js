angular
    .module("authApp")
    .factory("goalsFactory", function ($http, $routeParams) {
        //Making api call to goals Controller
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