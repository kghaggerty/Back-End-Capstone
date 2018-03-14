angular
    .module("authApp")
    .factory("loginFactory", function ($http, $routeParams) {
        return Object.create(null, {
            "loginUser": {
                value: function (auth) {
                    return $http({
                        "url": "http://localhost:5000/api/token",
                        "method": "GET",
                        'Accept': 'application/json'
                    }).then(data => {
                        localStorage.setItem("token", newToken);
                    })
                }
            },
            "getToken": {
                value: function (auth) {
                    return $http({
                        "url": "http://localhost:5000/api/token",
                        "method": "POST",
                        'Accept': 'application/json',
                        'params': auth
                    })
                }
            }
        })
    })