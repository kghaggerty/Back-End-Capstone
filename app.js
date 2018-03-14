'use strict'

angular
    .module('authApp', ['auth0', 'ngMaterial', 'ui.router', 'ngRoute'])

    .config(function ($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'components/home/home.tpl.html'
            })
            .state('/profile', {
                url: '/profile',
                templateUrl: 'components/profile/profile.tpl.html',
                contoller: 'profileContoller'
            })
            .state('/login', {
                url: '/login',
                templateUrl: 'components/login/login.tpl.html',
                controller: 'loginController'
            })
            .state('/register', {
                url: '/register',
                templateUrl: 'components/register/register.tpl.html',
                controller: 'registerController'
            })
            .state('/checkInForm', {
                url: '/checkInForm',
                templateUrl: 'components/checkInForm/checkInForm.tpl.html',
                controller: 'checkInFormController'
            })

    })


    .factory('httpRequestInterceptor', function () {
        return {
            request: function (config) {
                config.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
                config.headers['Accept'] = 'application/json;odata=verbose';
                return config;
            }
        };
    });
    angular.module('authApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptor');
    });