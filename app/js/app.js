var eriApp = angular.module('eriApp', ['ngRoute', 'ngAnimate'])

.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'partials/home.html',
            controller : 'MainCtrl'
        })

    $locationProvider.html5Mode(true);
});
