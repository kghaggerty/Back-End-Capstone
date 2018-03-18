angular
    .module("authApp")
    .factory("goalsFactory", function ($http, $routeParams) {
        //Making api call to goals Controller
        return Object.create(null, {
            "postGoals": {
                value: function (auth) {
                    return $http({
                        "url": "http://localhost:5000/api/Goals",
                        "method": "POST",
                        "Accepts": "application/json",
                        "data": auth
                    })
                }
            },
            "getGoals": {
                value: function (auth) {
                    return $http({
                        "url": "http://localhost:5000/api/Goals",
                        "method": "GET",
                        "Accepts": "application/json",
                    })
                }
            }
        })
    })