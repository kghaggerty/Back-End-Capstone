'use strict'

angular
.module('authApp', ['auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router' ])

.config(function ($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: 'components/home/home.tpl.html'   
        })
        .state('/profile',{
            url: '/profile',
            templateUrl: 'components/profile/profile.tpl.html',
            contoller: 'profileContoller'   
        })
        .state('/login', {
            url: '/login',
            templateUrl:'components/login/login.tpl.html',
            controller: 'loginController'
        })

})

// const app = angular.module("authApp", ['ngRoute', 'auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])

// angular.module("authApp").config(function ($routeProvider) {
//     /**
//      * Configure all Angular application routes here
//      */
//     $routeProvider.
//         when('/components/profile', {
//             templateUrl: 'components/profile/profile.tpl.html',
//             contoller: 'profileContoller',
//         })
//         .when('/partials/resume', {
//             templateUrl: 'lib/partials/resume.html',
//             controller: 'resumeCtrl',
//         })
//         .when('/components/login', {
//             templateUrl: 'components/login/login.tpl.html',
//             controller: 'loginController',
//         })
//         .otherwise('/components/home')
// })