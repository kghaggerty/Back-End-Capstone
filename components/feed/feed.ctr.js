angular.module("authApp")
    .controller("feedController", function ($scope, $location, feedFactory) {
        $scope.feed = []

    let updateFeed = function () {
        feedFactory.getUserFeed().then(feedData => {
            feedData.data.forEach(eachFeed => {
                $scope.feed.push(eachFeed)
            })
        })
    }
    
    updateFeed();
        
    //Send news feed form to database
    $scope.postFeed = function (auth) {
        feedFactory.postUserFeed(auth).then(res => {
            updateFeed();
        })
    }
        
})