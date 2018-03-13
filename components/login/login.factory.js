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
                        console.log(data, "DATA")
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