(function() {
    'use strict'

    angular
    .module('authApp')
    .controller('profileController', profileController);

    function profileController($http, $scope) {
        
        $scope.message = "hello"
    }
})();