var eriApp = angular.module('eriApp', [])

.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'partials/home.html',
            controller : MainCtrl
        })
        .when('/welcome', {
            templateUrl : 'partials/welcome.html',
            controller : MainCtrl
        })
        .when('/portfolio', {
            templateUrl : 'partials/portfolio.html',
            controller : MainCtrl
        })
        .when('/blog', {
            templateUrl : 'partials/blog.html',
            controller : MainCtrl
        })
        .when('/cv', {
            templateUrl : 'partials/cv.html',
            controller : MainCtrl
        });

    $locationProvider.html5Mode(true);
});
