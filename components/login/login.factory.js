angular
    .module("authApp")
    .factory("loginFactory", function ($http, $routeParams) {
        return Object.create(null, {
            "getUser": {
                value: function () {
                    return $http({
                        "url": "http://localhost:5000/api/token",
                        "method": "GET"
                    })
                }
            }
        })
    })