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
                        // "url": "http://165.227.206.173/api/Goals",
                        "method": "GET",
                        "Accepts": "application/json",
                    })
                }
            },
            "completeGoals": {
                value: function (id, goal) {
                    goal.isCompleted = true
                    return $http({
                        "url": `http://localhost:5000/api/Goals/${id}`,
                        "method": "PUT",
                        "Accepts": "application/json",
                        "data": goal
                    })
                }
            }
        })
    })