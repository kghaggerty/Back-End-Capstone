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
        .state('/register', {
            url: '/register',
            templateUrl:'components/register/register.tpl.html',
            controller: 'registerController'
        })

})