angular.module("authApp")
    .controller("goalsController", function ($scope, $location, goalsFactory) {
        $scope.goals = []
        
        
        //Get user goals from database
        $scope.updateGoals = function () {
            goalsFactory.getGoals().then(feedData => {
                feedData.data.forEach(eachFeed => {
                    $scope.goals.push(eachFeed)
                })
            })
        }

        //Send goal input to database
        $scope.goalInput = function (auth) {
            goalsFactory.postGoals(auth).then(res => {
                $scope.auth = {}
            })
            // updateGoals(auth);
        }
    })