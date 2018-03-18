angular.module("authApp")
    .controller("goalsController", function ($scope, $location, goalsFactory) {
        $scope.goals = []
        

        //Get user goals from database
        let updateGoals = function () {
            goalsFactory.getGoals().then(feedData => {
                feedData.data.forEach(eachFeed => {
                    $scope.goals.push(eachFeed)
                    console.log(eachFeed)
                })
            })
        }

        //Send goal input to database
        $scope.goalInput = function (auth) {
            goalsFactory.postGoals(auth).then(res => {
                console.log(res, "goal")
            })
            updateGoals();
        }
    })