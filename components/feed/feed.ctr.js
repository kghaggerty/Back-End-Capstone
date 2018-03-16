angular.module("authApp")
    .controller("feedController", function ($scope, $location, feedFactory) {
        //Get news feed to display to user
        // feedFactory.getUserFeed().then(res => {
        //     console.log(res, "user feed result")
        // })
        $scope.feed = []

        //Send news feed form to database
        $scope.postFeed = function (auth) {
            feedFactory.postUserFeed(auth).then(res => {
                feedFactory.getUserFeed().then(feedData => {
                    feedData.data.forEach(eachFeed => {
                        $scope.feed.push(eachFeed)
                        console.log(eachFeed, "user feed loop")
                    })
                })
            })
        }

        console.log($scope.feed, "scope.feed")
    })