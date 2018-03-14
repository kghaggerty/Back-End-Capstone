angular
    .module("authApp")
    .factory("registerFactory", function ($http, $routeParams) {
        return Object.create(null, {
            "postUser": {
                value: function (auth) {
                    return $http({
                        "url": "http://localhost:5000/api/token",
                        "method": "POST",
                        'Accepts': 'application/json',
                        'params': auth
                    }).then(data => {
                        localStorage.setItem("token", data.data);
                        console.log("TOKEN", data)
                    })
                }
            }
        })
    })

    // `http://localhost:5000/api/token?firstName=${auth.firstName}&lastName=${auth.lastName}&username=${auth.username}&password=${auth.password}`