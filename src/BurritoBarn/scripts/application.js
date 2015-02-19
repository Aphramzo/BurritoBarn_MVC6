(function () {
    'use strict';

    config.$inject = ['$routeProvider', '$locationProvider'];

    angular.module('burritoBarn', [
        'ngRoute', 'restaurantServices', "cuisineServices"
    ]).config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/restaurant/list.html',
                controller: 'restaurantsController'
            })
            .when('/restaurants/add', {
                templateUrl: 'views/restaurant/add.html',
                controller: 'restaurantsAddController'
            })
            .when('/restaurants/edit/:id', {
                templateUrl: 'views/restaurant/edit.html',
                controller: 'restaurantsEditController'
            })
            .when('/restaurants/delete/:id', {
                templateUrl: 'views/restaurant/delete.html',
                controller: 'restaurantsDeleteController'
            })
            .when('/cuisines', {
                templateUrl: 'views/cuisine/list.html',
                controller: 'cuisinesController'
            })
            .when('/cuisines/add', {
                templateUrl: 'views/cuisine/add.html',
                controller: 'cuisinesController'
            })
            .when('/cuisines/delete/:id', {
                templateUrl: 'views/cuisine/delete.html',
                controller: 'cuisinesDeleteController'
            });

        $locationProvider.html5Mode(true);
    }
})();