angular.module("authApp")
    .controller("goalsController", function ($scope, $location, goalsFactory) {
        $scope.goals = []
        
        // //isComplete
        // $scope.isComplete = function () {
        //     goalsFactory.getGoals().then(feedData => {
        //         feedData.data.forEach(oneData => {
        //             if(oneData.isCompleted === true){
        //                 $scope.class === "not-normal"
        //                 } else {
        //                     $scope.class === "normal"
        //                 }
        //             })
        //         })
        //     }
        

        //Get user goals from database
        $scope.updateGoals = function () {
            goalsFactory.getGoals().then(feedData => {
                $scope.goals = []
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

        $scope.markComplete = function (goal) {
            goalsFactory.completeGoals(goal.goalsId, goal).then(res =>{
                $scope.updateGoals();
            })
        }
    })