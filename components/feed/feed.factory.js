angular
    .module("authApp")
    .factory("feedFactory", function ($http, $routeParams) {
        //Making api call to feed Controller
        return Object.create(null, {
            "postUserFeed": {
                value: function (auth) {
                    return $http({
                        "url": "http://localhost:5000/api/Post",
                        "method": "POST",
                        "Accepts": "application/json",
                        "data": auth
                    })
                }
            },
            "getUserFeed": {
                value: function (auth) {
                    return $http({
                        "url": "http://localhost:5000/api/Post",
                        "method": "GET",
                        "Accepts": "application/json",
                    })
                }
            }
        })
    })