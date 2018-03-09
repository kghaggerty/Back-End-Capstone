angular
    .module("authApp")
    .factory("registerFactory", function ($http, $routeParams) {
        return Object.create(null, {
            "postUser": {
                value: function (auth) {
                    return $http({
                        "url": "http://localhost:5000/api/User",
                        "method": "POST",
                        "data": auth
                    })
                }
            }
            // "editShelterDog": {
            //     value: function (id, dog) {
            //         return $http({
            //             method: "PUT",
            //             url: `https://frontend-e2cdb.firebaseio.com/dogs/${id}/.json`,
            //             data: dog
            //         })
            //     }
            // },
            // "getSingleDog": {
            //     value: function (key) {
            //         return $http({
            //             method: "GET",
            //             url: `https://frontend-e2cdb.firebaseio.com/dogs/${key}/.json`
            //         })
            //     }
            // },
            // "listShelters": {
            //     value: function (user) {
            //         return $http({
            //             method: "GET",
            //             url: "https://frontend-e2cdb.firebaseio.com/shelter/.json"
            //         }).then(response => {
            //             let data = response.data;

            //             let listShelters = Object.keys(data).map(key => {
            //                 data[key].id = key
            //                 return data[key]
            //             })

            //             return listShelters
            //         })
            //     }
            // },
            // "postHomeDog": {
            //     value: function (id, dog) {
            //         dog.home = true
            //         return $http({
            //             method: "PUT",
            //             url: `https://frontend-e2cdb.firebaseio.com/dogs/${id}/.json`,
            //             data: dog
            //         })
            //     }
            // }    
        })
    })