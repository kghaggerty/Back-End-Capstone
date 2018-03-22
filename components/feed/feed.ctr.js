angular.module("authApp")
    .controller("feedController", function ($scope, $location, feedFactory) {

    let updateFeed = function () {
        $scope.feed = []
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
            $scope.auth = {}
            updateFeed();
        })
    }        
})